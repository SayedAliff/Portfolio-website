// src/app/page.tsx (Full replacement for Single-Page Assembly)

// Import components from their respective folders/files:
import AboutPage from './about/page';
import BlogsPage from './blogs/page';
import ContactPage from './contact/page';

// Assuming you have components in src/app/components
import Hero from './components/Hero'; 
import Projects from './components/Projects';
// Placeholder component for Skills (if separate from About)
const SkillsSection = () => <div className="py-24 text-center" id="skills"><h2 className="text-3xl">Skills Section Content</h2></div>
// Placeholder component for Experience
const ExperienceSection = () => <div className="py-24 text-center"><h2>Experience Section Content</h2></div>


export default function Home() {
  return (
    <main>
      
      {/* 1. Home / Hero Section - ID target: #home (optional) */}
      <section id="home">
          <Hero />
      </section>

      {/* 2. About Section - ID target: #about */}
      <section id="about">
          {/* Renders the content from the about/page.tsx file */}
          <AboutPage /> 
      </section>

      {/* 3. Experience Section - ID target: #experience */}
      <section id="experience">
          <ExperienceSection /> 
      </section>
      
      {/* 4. Skills Section - ID target: #skills */}
      <section id="skills">
          {/* Renders your dedicated Skills component */}
          <SkillsSection /> 
      </section>

      {/* 5. Projects Section - ID target: #projects */}
      <section id="projects">
          {/* Assuming Projects component displays your projects */}
          <Projects /> 
      </section>
      
      {/* 6. Blogs Section - ID target: #blogs */}
      <section id="blogs">
          {/* Renders the content from the blogs/page.tsx file */}
          <BlogsPage />
      </section>

      {/* 7. Contact Section - ID target: #contact */}
      <section id="contact">
          <ContactPage />
      </section>
      
    </main>
  );
}