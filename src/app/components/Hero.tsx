// src/app/components/Hero.tsx (Final Unused Import Fix)

'use client'; 
// Removed 'Image' import as it was unused in the current JSX structure
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { fadeInUp, scaleIn } from '@/utils/animations'; 

export default function Hero() {
  
  const [text] = useTypewriter({
    words: [
      'Backend Engineer.',
      'C# / .NET Developer.',
      'Python & Data Science Enthusiast.',
      'Web Development Specialist.'
    ],
    loop: 0,
    typeSpeed: 50,
    deleteSpeed: 30,
    delaySpeed: 1500,
  });

  return (
    <section id="home" className="min-h-screen pt-24 pb-12 flex flex-col items-center justify-center">
      <div className="text-center max-w-4xl">
        
        {/* Profile Picture using scaleIn variant */}
        <motion.div 
            variants={scaleIn}
            initial="initial"
            animate="animate"
            className="mb-4 mx-auto"
        >
            <div className="h-40 w-40 rounded-full bg-gray-500 mx-auto" />
        </motion.div>

        <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-4"
            {...fadeInUp}
        >
          Hello, I&apos;m Sayed Nafisur Rahman Alif
        </motion.h1>
        
        {/* Dynamic Typewriter Text */}
        <motion.h2 className="text-3xl font-bold mb-6" {...fadeInUp}>
          <span className="text-blue-500">I&apos;m a </span>
          
          <span className="text-blue-500">
            {text}
          </span>
          <Cursor cursorStyle='|' />
        </motion.h2>

        <p className="text-lg text-secondary mb-8 max-w-2xl mx-auto">
            Full Stack Developer | UI/UX Enthusiast | Open Source Contributor
        </p>

        <motion.div className="flex justify-center space-x-4">
            <Link href="#contact" className="btn btn-primary">Get In Touch</Link>
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">View Resume</Link>
        </motion.div>
        
      </div>
    </section>
  );
}