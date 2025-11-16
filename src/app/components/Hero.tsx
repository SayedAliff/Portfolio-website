

'use client'; 
import Image from 'next/image'; 
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { fadeInUp, scaleIn, staggerContainer } from '@/utils/animations'; // Add staggerContainer import
// Importing ALL necessary Si icons for the cloud
import { 
    SiPython, SiTypescript, SiJavascript, SiCplusplus, SiPostgresql, SiMysql, SiMongodb, 
    SiNodedotjs, SiExpress, SiGit, SiGithubactions, SiDocker, SiNginx, SiReact, 
    SiNextdotjs, SiTailwindcss, SiAngular, SiFramer, SiShadcnui, SiLinux, SiOracle, 
    SiDjango, SiNumpy, SiPandas, SiR, SiOpencv, SiScikitlearn, SiLangchain, SiPhp, 
    SiSqlite, SiArduino, SiSharp,SiFastapi 
} from 'react-icons/si'
// Import FaIcons only if necessary (FaChartLine, FaCloud, etc.)
import { FaChartLine, FaCloud, FaLaptopCode, FaDatabase, FaReact } from 'react-icons/fa' 


// Custom component to render the icon row
const TechIconComponents = [
    SiPython, SiTypescript, SiJavascript, SiCplusplus, SiPostgresql, SiMysql, SiMongodb, 
    SiNodedotjs, SiExpress, SiGit, SiGithubactions, SiDocker, SiNginx, SiReact, 
    SiNextdotjs, SiTailwindcss, SiAngular, SiFramer, SiShadcnui, SiLinux, SiOracle, 
    SiDjango, SiNumpy, SiPandas, SiR, SiOpencv, SiScikitlearn, SiLangchain, SiPhp, 
    SiSqlite, SiArduino, SiSharp, SiFastapi
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
        
        {/* 👇 FINAL ICON CLOUD: Large, Purple/Pink Icons */}
        <motion.div 
            className="flex flex-wrap justify-center items-center gap-6 py-8 px-4 max-w-4xl mx-auto"
            variants={staggerContainer} // Use stagger for entrance effect
            initial="initial"
            animate="animate"
        >
            {TechIconComponents.map((Icon, index) => (
                <motion.a 
                    key={index}
                    // Apply the vibrant purple/pink monochrome color and large size
                    className="text-purple-500 opacity-80 hover:opacity-100 transition-opacity" 
                    href="#" // Placeholder link
                    target="_blank"
                    variants={fadeInUp} // Use fadeInUp for staggered entrance
                >
                    <Icon className="h-10 w-10 md:h-12 md:w-12" />
                </motion.a>
            ))}
        </motion.div>
        {/* 👆 END ICON CLOUD */}

        <motion.div className="flex justify-center space-x-4 mt-4">
            <Link href="#contact" className="btn btn-primary">Get In Touch</Link>
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">View Resume</Link>
        </motion.div>
        
      </div>
    </section>
  );
}