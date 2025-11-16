

'use client'; 
import Image from 'next/image'; 
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

  // Final colorCycle variant structure (Fixes Type Conflict)
  const colorCycle = {
    initial: { color: "#ffffff" }, 
    animate: {
        color: ["#ff0000", "#ff7b00", "#00ff3c", "#0055ff", "#c800ff", "#ff0000"], 
        transition: { 
            duration: 5,
            repeat: Infinity,
        }
    }
  };

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
            {/* 🛠️ FIX: Increased size from h-40 w-40 to h-52 w-52 for larger radius */}
            <Image 
                src="/profile.avif" // Assuming the image is at /public/profile.avif
                alt="Sayed Nafisur Rahman Alif" 
                width={208} // New size: 52 * 4 = 208px
                height={208} // New size: 52 * 4 = 208px
                className="rounded-full object-cover mx-auto shadow-2xl" 
                priority 
            />
        </motion.div>

        {/* Full Name Split: Blue "Hello, I'm" + Gradient Name */}
        <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-4"
            {...fadeInUp}
        >
          <span className="text-blue-500">Hello, I&apos;m </span> {/* 👈 Part 1: Solid Blue */}
          
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
            Sayed Nafisur Rahman Alif {/* 👈 Part 2: Gradient Name */}
          </span>
        </motion.h1>
        
        {/* Dynamic Typewriter Text with RGB Cycling Effect */}
        <motion.h2 className="text-3xl font-bold mb-6" {...fadeInUp}>
          <span className="text-white">I&apos;m a </span>
          
          <motion.span 
              variants={colorCycle} 
              initial="initial"
              animate="animate"
          >
            {text}
          </motion.span>
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