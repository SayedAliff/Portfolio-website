// src/app/components/Hero.tsx (FINAL ERROR-FREE CODE)

'use client'; 
import Link from 'next/link';
import { motion, Variants, useAnimation } from 'framer-motion'; 
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { fadeInUp } from '@/utils/animations'; 
// Import necessary icons
import { SiPython,SiReactbootstrap ,SiTailwindcss, SiGit, SiOracle,SiFramer, SiTypescript, SiJavascript, SiMysql, SiMongodb, SiReact, SiFastapi, SiArduino, SiPhp, SiNodedotjs, SiMacos, SiCplusplus,  } from 'react-icons/si'; 
import React, { useCallback } from 'react'; // 👈 Import useCallback and React
import Image from 'next/image'; 

// Custom component to render the icon row - ADDED HREFS
const TechIcons = [
    
    
    { icon: SiGit, name: 'Git', href: 'https://git-scm.com/' },
    { icon: SiPython, name: 'Python', href: 'https://www.python.org/' },
    { icon: SiFramer, name: 'Framer Motion', href: 'https://www.framer.com/motion/' },
    { icon: SiTypescript, name: 'TypeScript', href: 'https://www.typescriptlang.org/' },
    
    { icon: SiMongodb, name: 'MongoDB', href: 'https://www.mongodb.com/' },
    { icon: SiReact, name: 'React', href: 'https://reactjs.org/' },
    { icon: SiFastapi, name: 'FastAPI', href: 'https://fastapi.tiangolo.com/' },
    { icon: SiArduino, name: 'Arduino', href: 'https://www.arduino.cc/' },
    { icon: SiPhp, name: 'PHP', href: 'https://www.php.net/' },
    { icon: SiNodedotjs, name: 'Node.js', href: 'https://nodejs.org/' },
    { icon: SiMacos, name: 'macOS', href: 'https://www.apple.com/macos/' },
    { icon: SiJavascript, name: 'JavaScript', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { icon: SiMysql, name: 'MySQL', href: 'https://www.mysql.com/' },

    { icon: SiCplusplus, name: 'C++', href: 'https://isocpp.org/' },
    { icon: SiOracle, name: 'Oracle Cloud', href: 'https://www.oracle.com/cloud/' },
    { icon: SiTailwindcss, name: 'Tailwind CSS', href: 'https://tailwindcss.com/' },
    { icon: SiReactbootstrap, name: 'React Bootstrap', href: 'https://react-bootstrap.github.io/' },
  ];

// Combine the array twice for a seamless loop
const InfiniteIcons = [...TechIcons, ...TechIcons];


export default function Hero() {

  const [text] = useTypewriter({
    words: ['Full-Stack Developer', 'UI/UX Enthusiast', 'Open Source Contributor'],
    loop: 0, // 0 means infinite loop for this hook
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  const colorCycle: Variants = {
    initial: { color: '#ffffff' },
    animate: {
      color: ['#ffffff', '#ec4899', '#7c3aed', '#2563eb'],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: 'loop',
      },
    },
  };

  // Animation controller for icon scrolling
  const scrollControls = useAnimation();

  // Start and slow scroll helpers
  const startScroll = useCallback(() => {
    scrollControls.start({
      x: ['0%', '-50%'],
      transition: { repeat: Infinity, ease: 'linear', duration: 17 }
    });
  }, [scrollControls]);

  const slowScroll = useCallback(() => {
    scrollControls.start({
      x: ['0%', '-50%'],
      transition: { repeat: Infinity, ease: 'linear', duration: 1700 }
    });
  }, [scrollControls]);

  // Start animation on mount
  React.useEffect(() => {
    startScroll();
  }, [startScroll]);

  return (
    <section className="py-12">
      <div className="container mx-auto text-center">
        <div className="w-40 h-40 sm:w-52 sm:h-52 mx-auto relative rounded-full overflow-hidden shadow-2xl">
          <Image
            src="/profile.avif"
            alt="Sayed Nafisur Rahman Alif"
            fill
            className="object-cover"
            priority
          />
        </div>

        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <span className="text-blue-500">Hello, I&apos;m </span>

          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
            Sayed Nafisur Rahman Alif
          </span>
        </motion.h1>

        <motion.h2
          className="text-2xl sm:text-3xl font-bold mb-6"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <span className="text-white">I&apos;m a </span>
          <motion.span variants={colorCycle} initial="initial" animate="animate">
           {text}
          </motion.span>
          <Cursor cursorStyle="|" />
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
          <motion.div className="flex w-fit" animate={scrollControls} initial={{ x: 0 }}>
            {InfiniteIcons.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.a
                  key={index}
                  href={tech.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-100 transition-opacity flex-shrink-0 mx-6"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Icon className="h-10 w-10" />
                </motion.a>
              );
            })}
            {/* Duplicate the icons again for seamless loop if needed (already duplicated in InfiniteIcons) */}
          </motion.div>
        </div>

        <motion.div className="flex justify-center space-x-4 mt-4">
          <Link href="#contact" className="btn btn-primary">
            Get In Touch
          </Link>
          <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            View Resume
          </Link>
        </motion.div>

      </div>
    </section>
  );
}