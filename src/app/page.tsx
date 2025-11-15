// src/app/page.tsx (FINAL FULL-SCREEN ASSEMBLY)

// Import components from their respective folders/files:
// Note: Ensure you have successfully created the individual component files (Skills.tsx, etc.)
import AboutPage from './about/page';
import BlogsPage from './blogs/page';
import ContactPage from './contact/page';

// Import components from src/app/components
import Hero from './components/Hero'; 
import Projects from './components/Projects';
import Skills from './components/Skills'; 
import Experience from './components/Experience'; 
import Education from './components/Education'; 


export default function Home() {
  return (
    <main>
      
      {/* 1. Home / Hero Section - ID target: #home */}
      {/* min-h-screen ensures this section uses at least the full viewport height */}
      <section id="home" className="min-h-screen">
          <Hero />
      </section>

      {/* 2. About Section - ID target: #about 
          FIX: min-h-screen ensures full height. 
          FIX: flex classes vertically center the content.
      */}
      <section 
          id="about" 
          className="min-h-screen py-8 flex flex-col items-center justify-center">
          <AboutPage /> 
      </section>

      {/* 3. Skills Section - ID target: #skills */}
      <section 
          id="skills" 
          className="min-h-screen py-8 flex flex-col items-center justify-center">
          <Skills /> 
      </section>

      {/* 4. Experience Section - ID target: #experience */}
      <section 
          id="experience" 
          className="min-h-screen py-8 flex flex-col items-center justify-center">
          <Experience /> 
      </section>
      
      {/* 5. Education Section - ID target: #education */}
      <section 
          id="education" 
          className="min-h-screen py-8 flex flex-col items-center justify-center">
          <Education />
      </section>

      {/* 6. Projects Section - ID target: #projects */}
      <section 
          id="projects" 
          className="min-h-screen py-8 flex flex-col items-center justify-center">
          <Projects />
      </section>
      
      {/* 7. Contact Section - ID target: #contact */}
      <section 
          id="contact" 
          className="min-h-screen py-8 flex flex-col items-center justify-center">
          <ContactPage />
      </section>
      
    </main>
  );
}