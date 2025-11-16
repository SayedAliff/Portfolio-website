

'use client'; 
import Image from 'next/image'; 
import Link from 'next/link';
import { motion, Variants, useAnimation } from 'framer-motion'; // useAnimation added
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { fadeInUp, scaleIn } from '@/utils/animations'; 
// Import necessary icons
import { SiDocker, SiLinux, SiPython, SiGit, SiFramer, SiTypescript, SiJavascript, SiMysql, SiMongodb, SiReact, SiFastapi, SiArduino, SiPhp, SiNodedotjs, SiMacos } from 'react-icons/si'; 
import React from 'react'; // React imported for useEffect/useAnimation

// Custom component to render the icon row - ADDED HREFS
const TechIcons = [
    { icon: SiDocker, name: 'Docker', href: 'https://www.docker.com/' },
    { icon: SiLinux, name: 'Linux', href: 'https://www.linux.org/' },
    { icon: SiGit, name: 'Git', href: 'https://git-scm.com/' },
    { icon: SiPython, name: 'Python', href: 'https://www.python.org/' },
    { icon: SiFramer, name: 'Framer Motion', href: 'https://www.framer.com/motion/' },
    { icon: SiTypescript, name: 'TypeScript', href: 'https://www.typescriptlang.org/' },
    { icon: SiJavascript, name: 'JavaScript', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { icon: SiMysql, name: 'MySQL', href: 'https://www.mysql.com/' },
    { icon: SiMongodb, name: 'MongoDB', href: 'https://www.mongodb.com/' },
    { icon: SiReact, name: 'React', href: 'https://reactjs.org/' },
    { icon: SiFastapi, name: 'FastAPI', href: 'https://fastapi.tiangolo.com/' },
    { icon: SiArduino, name: 'Arduino', href: 'https://www.arduino.cc/' },
    { icon: SiPhp, name: 'PHP', href: 'https://www.php.net/' },
    { icon: SiNodedotjs, name: 'Node.js', href: 'https://nodejs.org/' },
    { icon: SiMacos, name: 'macOS', href: 'https://www.apple.com/macos/' },
];

// Combine the array twice for a seamless loop
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

  // 1. Setup Animation Controller
  const scrollControls = useAnimation();
  
// 2. Define Animation and Transitions with Easing Fix
  const scrollAnimation = { x: ['0%', '-50%'] };
  
  const fastTransition = {
      x: {
          repeat: Infinity,
          ease: (t: number) => t, // linear easing function
          duration: 17, // Fast speed
      },
  };
  const pauseTransition = {
      x: {
          repeat: Infinity,
          ease: (t: number) => t, // linear easing function
          duration: 1700, // Very long duration to simulate pause
      },
  };

  // 3. Control Functions
  const startScroll = () => { scrollControls.start(scrollAnimation, fastTransition); };
  const slowScroll = () => { scrollControls.start(scrollAnimation, pauseTransition); };
  
  // Start the animation when component mounts
  React.useEffect(() => {
      startScroll();
  }, []); 


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
        
        {/* Continuous Animated Technology Icon Row - WITH HOVER PAUSE */}
        <div 
            className="py-6 overflow-hidden w-full max-w-4xl mx-auto"
            onMouseEnter={slowScroll} 
            onMouseLeave={startScroll} 
        >
            <motion.div 
                className="flex w-fit" 
                animate={scrollControls} 
            >
                {/* Map the combined array for the seamless loop */}
                {InfiniteIcons.map((tech, index) => (
                    <motion.a 
                        key={index}
                        href={tech.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-80 hover:opacity-100 transition-opacity flex-shrink-0 mx-6" 
                        whileHover={{ scale: 1.1, y: -5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <tech.icon className="h-10 w-10" />
                    </motion.a>
                ))}

            </motion.div>
        </div>
        
        <motion.div className="flex justify-center space-x-4 mt-4">
            <Link href="#contact" className="btn btn-primary">Get In Touch</Link>
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">View Resume</Link>
        </motion.div>
        
      </div>
    </section>
  );
}