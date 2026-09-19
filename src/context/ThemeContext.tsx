import React, { createContext, useContext, useEffect, useState } from 'react';

export type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = 'portfolio-theme';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    // 1. Check saved localStorage preference
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
      if (savedTheme === 'light' || savedTheme === 'dark') {
        return savedTheme;
      }
      // 2. Check system preference
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        return 'light';
      }
    }
    // Default fallback to dark
    return 'dark';
  });

  // Apply theme to document root and save to localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
      root.setAttribute('data-theme', 'light');
      root.style.colorScheme = 'light';
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
      root.style.colorScheme = 'dark';
    }

    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // Ignore localStorage availability errors in sandboxed iframes
    }
  }, [theme]);

  // Listen to system preference changes if user hasn't explicitly set one yet
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      const hasStoredPreference = localStorage.getItem(THEME_STORAGE_KEY);
      if (!hasStoredPreference) {
        setThemeState(e.matches ? 'dark' : 'light');
      }
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  const toggleTheme = () => {
    setThemeState((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        setTheme,
        isDark: theme === 'dark',
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
