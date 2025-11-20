// Import components from their respective folders/files:
import AboutPage from './about/page';
import Blogs from './blogs/page'; 
import ContactPage from './contact/page';

// Import components from src/app/components
import Hero from './components/Hero'; 
import Projects from './components/Projects';
import Skills from './components/Skills'; 
import Education from './components/Education'; 
import Certificates from './components/Certificates'; // ✅ NEW IMPORT

export default function Home() {
  return (
    <main>
      
      {/* 1. Home / Hero Section */}
      <section id="home" className="min-h-screen">
          <Hero />
      </section>

      {/* 2. About Section */}
      <section 
          id="about" 
          className="min-h-screen py-8 flex flex-col items-center justify-center">
          <AboutPage /> 
      </section>

      {/* 3. Skills Section */}
      <section 
          id="skills" 
          className="min-h-screen py-8 flex flex-col items-center justify-center">
          <Skills /> 
      </section>

      {/* 4. Education Section */}
      <section 
          id="education" 
          className="min-h-screen py-8 flex flex-col items-center justify-center">
          <Education />
      </section>

      {/* 5. Projects Section */}
      <section 
          id="projects" 
          className="min-h-screen py-8 flex flex-col items-center justify-center">
          <Projects />
      </section>
      
      {/* 7. Blogs Section */}
      <section id="blogs">
          <Blogs />
      </section>

      {/* 8. Contact Section */}
      <section 
          id="contact" 
          className="min-h-screen py-8 flex flex-col items-center justify-center">
          <ContactPage />
      </section>
      
    </main>
  );
}
