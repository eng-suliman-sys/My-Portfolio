/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { KorvenzaTechSection } from './components/KorvenzaTechSection.tsx';
import { DualPathSection } from './components/DualPathSection.tsx';
import { Skills } from './components/Skills.tsx';
import { Services } from './components/Services.tsx';
import { Projects } from './components/Projects.tsx';
import { ExperienceTimeline } from './components/ExperienceTimeline.tsx';
import { GithubSection } from './components/GithubSection.tsx';
import { WhyWorkWithMe } from './components/WhyWorkWithMe.tsx';
import { WorkProcess } from './components/WorkProcess.tsx';
import { Testimonials } from './components/Testimonials.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';
import { ResumeModal } from './components/ResumeModal.tsx';
import { AdminConfigModal } from './components/AdminConfigModal.tsx';

export default function App() {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [isConfigModalOpen, setIsConfigModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Flutter App Development');

  const handleSelectServiceForContact = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#090d16] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
        {/* Top sticky navigation */}
        <Navbar
          onOpenCv={() => setIsCvModalOpen(true)}
          onOpenConfig={() => setIsConfigModalOpen(true)}
        />

        <main id="main-content" className="relative z-10">
          {/* Section 01: Hero Section */}
          <Hero
            onOpenCv={() => setIsCvModalOpen(true)}
          />

          {/* Section 02: About Me & Statistics Cards */}
          <About />

          {/* Section 03: CEO & Founder — KorvenzaTech Company Section */}
          <KorvenzaTechSection 
            onSelectService={handleSelectServiceForContact}
          />

          {/* Section 04: The Two Professional Paths (Engineer vs CEO) */}
          <DualPathSection />

          {/* Section 05: Skills & Technologies */}
          <Skills />

          {/* Section 06: Services & Solutions */}
          <Services
            onSelectServiceForContact={handleSelectServiceForContact}
          />

          {/* Section 07 & 08: Featured Projects & Case Studies */}
          <Projects />

          {/* Section 09: Experience / Journey Timeline */}
          <ExperienceTimeline />

          {/* Section 10: GitHub / Developer Section */}
          <GithubSection />

          {/* Section 11: Why Work With Me */}
          <WhyWorkWithMe />

          {/* Section 12: Work Process */}
          <WorkProcess />

          {/* Section 13: Testimonials */}
          <Testimonials />

          {/* Section 14: Contact Section */}
          <Contact
            preselectedService={selectedService}
          />
        </main>

        {/* Section 15: Footer */}
        <Footer
          onOpenCv={() => setIsCvModalOpen(true)}
          onOpenConfig={() => setIsConfigModalOpen(true)}
        />

        {/* Full Resume / CV Viewer & Print Modal */}
        <ResumeModal
          isOpen={isCvModalOpen}
          onClose={() => setIsCvModalOpen(false)}
        />

        {/* Admin Content Configuration Guide Modal */}
        <AdminConfigModal
          isOpen={isConfigModalOpen}
          onClose={() => setIsConfigModalOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}

