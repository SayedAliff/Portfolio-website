// src/app/components/Hero.tsx (FINAL COMPLETE CODE with Infinite Scroll)

'use client'; 
import Image from 'next/image'; 
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
// Import necessary icons for the bottom row
import { SiDocker, SiLinux, SiPython, SiGit, SiFramer, SiTypescript } from 'react-icons/si'; 
import { fadeInUp, scaleIn } from '@/utils/animations'; 

// Custom component to render the icon row - ADDED HREFS
const TechIcons = [
    { icon: SiDocker, name: 'Docker', href: 'https://www.docker.com/' },
    { icon: SiLinux, name: 'Linux', href: 'https://www.linux.org/' },
    { icon: SiGit, name: 'Git', href: 'https://git-scm.com/' },
    { icon: SiPython, name: 'Python', href: 'https://www.python.org/' },
    { icon: SiFramer, name: 'Framer Motion', href: 'https.framer.com/motion/' },
    { icon: SiTypescript, name: 'TypeScript', href: 'https://www.typescriptlang.org/' },
];

// Combine the array twice to ensure a seamless looping visual effect
const InfiniteIcons = [...TechIcons, ...TechIcons];

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
  

  const colorCycle: Variants = { 
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
        
        {/* 👇 FINAL FIX: Continuous Animated Technology Icon Row */}
        <div className="py-6 overflow-hidden w-full max-w-4xl mx-auto">
            <motion.div 
                className="flex w-fit" // w-fit ensures the div is long enough to hold all icons
                
                // FINAL ANIMATION FOR INFINITE SCROLL
                animate={{
                    x: ['0%', '-50%'], // Scrolls horizontally from start to the middle of the duplicated list
                }}
                transition={{
                    x: {
                        repeat: Infinity, // Repeat indefinitely
                        ease: 'linear', // Keep speed constant
                        duration: 35, // Adjust duration for scroll speed
                    },
                }}
            >
                {/* Map the combined array (InfiniteIcons) for the seamless loop */}
                {InfiniteIcons.map((tech, index) => (
                    <motion.a 
                        key={index}
                        href={tech.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        // flex-shrink-0 is essential to keep icons from wrapping
                        className="text-purple-400 opacity-80 hover:opacity-100 transition-opacity flex-shrink-0 mx-6" 
                        whileHover={{ scale: 1.1, y: -5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <tech.icon className="h-10 w-10" />
                    </motion.a>
                ))}

            </motion.div>
        </div>
        {/* 👆 END NEW ICON ROW */}

        <motion.div className="flex justify-center space-x-4 mt-4">
            <Link href="#contact" className="btn btn-primary">Get In Touch</Link>
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">View Resume</Link>
        </motion.div>
        
      </div>
    </section>
  );
}