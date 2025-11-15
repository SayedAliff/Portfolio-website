

// Import components from their respective folders/files:
import AboutPage from './about/page';
import BlogsPage from './blogs/page';
import ContactPage from './contact/page';

// Import NEWLY CREATED components from src/app/components
import Hero from './components/Hero'; 
import Projects from './components/Projects';
import Skills from './components/Skills'; // NEW
import Experience from './components/Experience'; // NEW
import Education from './components/Education'; // NEW


export default function Home() {
  return (
    <main>
      
      {/* 1. Home / Hero Section */}
      <section id="home">
          <Hero />
      </section>

      {/* 2. About Section - ID target: #about */}
      <section id="about">
          <AboutPage /> 
      </section>

      {/* 3. Skills Section - ID target: #skills */}
      <section id="skills" className="py-8">
          <Skills /> 
      </section>

      {/* 4. Experience Section - ID target: #experience */}
      <section id="experience" className="py-8">
          <Experience /> 
      </section>
      
      {/* 5. Education Section - ID target: #education (Poor Education Link) */}
      <section id="education" className="py-8">
          <Education />
      </section>

      {/* 6. Projects Section - ID target: #projects */}
      <section id="projects">
          <Projects />
      </section>
      
      {/* 7. Blogs Section - ID target: #blogs */}
      <section id="blogs">
          <BlogsPage />
      </section>

      {/* 8. Contact Section - ID target: #contact */}
      <section id="contact">
          <ContactPage />
      </section>
      
    </main>
  );
}