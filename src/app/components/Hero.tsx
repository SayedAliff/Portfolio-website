// src/app/components/Hero.tsx (FINAL COMPLETE CODE WITH ICON ROW)

'use client'; 
import Image from 'next/image'; 
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
// Import necessary icons for the bottom row
import { SiDocker, SiLinux, SiPython, SiGit, SiFramer, SiTypescript } from 'react-icons/si'; 
import { fadeInUp, scaleIn } from '@/utils/animations'; 

// Custom component to render the icon row
const TechIcons = [
    { icon: SiDocker, name: 'Docker' },
    { icon: SiLinux, name: 'Linux' },
    { icon: SiGit, name: 'Git' },
    { icon: SiPython, name: 'Python' },
    { icon: SiFramer, name: 'Framer' },
    { icon: SiTypescript, name: 'TypeScript' },
];

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
        
        {/* Profile Picture */}
        <motion.div 
            variants={scaleIn}
            initial="initial"
            animate="animate"
            className="mb-4 mx-auto"
        >
            <div className="w-52 h-52 mx-auto relative rounded-full overflow-hidden shadow-2xl">
                <Image 
                    src="/profile.avif"
                    alt="Sayed Nafisur Rahman Alif" 
                    fill 
                    className="object-cover" 
                    priority 
                />
            </div>
        </motion.div>

        {/* Full Name Heading */}
        <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-4"
            {...fadeInUp}
        >
          <span className="text-blue-500">Hello, I&apos;m </span>
          
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
            Sayed Nafisur Rahman Alif
          </span>
        </motion.h1>
        
        {/* Dynamic Typewriter Text */}
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
        
        {/* 👇 NEW: Animated Technology Icon Row */}
        <motion.div 
            className="flex justify-center space-x-6 py-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
        >
            {TechIcons.map((tech, index) => (
                <motion.div
                    key={index}
                    // Apply a glowing, monochrome purple/pink style
                    className="text-purple-400 opacity-80 hover:opacity-100 transition-opacity" 
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    <tech.icon className="h-8 w-8 md:h-10 md:w-10" />
                </motion.div>
            ))}
        </motion.div>
        {/* 👆 END NEW ICON ROW */}

        <motion.div className="flex justify-center space-x-4 mt-4">
            <Link href="#contact" className="btn btn-primary">Get In Touch</Link>
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">View Resume</Link>
        </motion.div>
        
      </div>
    </section>
  );
}