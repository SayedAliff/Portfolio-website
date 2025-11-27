'use client'
import { motion } from 'framer-motion'
import React from 'react'; 

import { 
    SiPython, SiTypescript, SiJavascript, SiCplusplus, SiPostgresql, SiMysql, SiMongodb, 
    SiNodedotjs, SiExpress, SiGit, SiReact, 
    SiNextdotjs, SiTailwindcss, SiAngular, SiFramer, SiShadcnui, SiLinux, SiOracle, 
    SiDjango, SiNumpy, SiPandas, SiR, SiOpencv, SiPhp, 
    SiSqlite, SiArduino, SiSharp, SiFastapi, SiGithub, SiRaspberrypi
} from 'react-icons/si'
import { FaCode, FaLaptopCode, FaDatabase, FaReact, FaCloud, FaChartLine, FaJava } from 'react-icons/fa' 


import { fadeInUp, fadeIn, staggerContainer } from '@/utils/animations' 


const SkillItem = ({ Icon, name }: { Icon: React.ElementType, name: string }) => (
    <li className="flex items-center gap-3 text-secondary">
        <Icon className="h-4 w-4" /> 
        {name}
    </li>
);

export default function Skills() {
  return (
    <motion.section 
      className="mb-16"
      {...fadeIn}
      transition={{ delay: 0.2 }}
    >
      <motion.h2 
        className="section-title text-3xl font-bold text-center mb-10" 
        {...fadeInUp}
      >
        Skills & Frameworks
      </motion.h2>
      <motion.div 
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        
        {/* CARD 1: Programming Languages */}
        <motion.div 
          className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md border-t-4 border-fuchsia-500"
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
        >
          <FaCode className="h-8 w-8 text-fuchsia-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Programming Languages</h3>
          <ul className="text-secondary space-y-2">
            <SkillItem Icon={SiPython} name="Python" />
            <SkillItem Icon={SiJavascript} name="JavaScript" />
            <SkillItem Icon={SiTypescript} name="TypeScript" />
            <SkillItem Icon={SiCplusplus} name="C++" />
            <SkillItem Icon={FaJava} name="Java" /> 
            <SkillItem Icon={SiR} name="R" />
          </ul>
        </motion.div>
        
        {/* CARD 2: Backend Development & Frameworks */}
        <motion.div 
          className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md border-t-4 border-green-500"
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
        >
          <FaLaptopCode className="h-8 w-8 text-green-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Backend & Frameworks</h3>
          <ul className="text-secondary space-y-2">
            <SkillItem Icon={SiSharp} name="C# / .NET" /> 
            <SkillItem Icon={SiFastapi} name="Python | FastAPI" />
            <SkillItem Icon={SiNodedotjs} name="Node.js" />
            <SkillItem Icon={SiExpress} name="Express.js" />
            <SkillItem Icon={SiPhp} name="PHP" />
            <SkillItem Icon={SiDjango} name="Django REST Framework" />
            
          </ul>
        </motion.div>
        
        {/* CARD 3: Databases */}
        <motion.div 
          className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md border-t-4 border-blue-500"
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
        >
          <FaDatabase className="h-8 w-8 text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Databases & SQL</h3>
          <ul className="text-secondary space-y-2">
            <SkillItem Icon={SiPostgresql} name="PostgreSQL" />
            <SkillItem Icon={SiMysql} name="MySQL" />
            <SkillItem Icon={SiOracle} name="Oracle SQL" />
            <SkillItem Icon={SiMongodb} name="MongoDB" />
            <SkillItem Icon={SiSqlite} name="SQLite3" />
          </ul>
        </motion.div>
        
        {/* CARD 4: Frontend Development */}
        <motion.div 
          className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md border-t-4 border-pink-500"
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
        >
          <FaReact className="h-8 w-8 text-pink-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Frontend & UI/UX</h3>
          <ul className="text-secondary space-y-2">
            <SkillItem Icon={SiReact} name="React" />
            <SkillItem Icon={SiNextdotjs} name="Next.js" />
            <SkillItem Icon={SiAngular} name="Angular" />
            <SkillItem Icon={SiTailwindcss} name="Tailwind CSS" />
            <SkillItem Icon={SiFramer} name="Framer Motion" />
            <SkillItem Icon={SiShadcnui} name="Shadcn UI" />
          </ul>
        </motion.div>
        
        {/* CARD 5: DevOps & Cloud */}
        <motion.div 
          className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md border-t-4 border-cyan-500"
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
        >
          <FaCloud className="h-8 w-8 text-cyan-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">DevOps, Cloud & Tools</h3>
          <ul className="text-secondary space-y-2">
            <SkillItem Icon={SiLinux} name="Linux" />
            <SkillItem Icon={SiGit} name="Git" />
            <SkillItem Icon={SiGithub} name="GitHub Actions (CI/CD)" />
            
            
            <SkillItem Icon={SiOracle} name="Oracle Cloud" />
          </ul>
        </motion.div>
        
        {/* CARD 6: Data & AI / ML Tools */}
        <motion.div 
          className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md border-t-4 border-orange-500"
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
        >
          <FaChartLine className="h-8 w-8 text-orange-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Data Science & Embedded</h3>
          <ul className="text-secondary space-y-2">
            <SkillItem Icon={SiNumpy} name="Numpy" />
            <SkillItem Icon={SiPandas} name="Pandas" />
            <SkillItem Icon={SiOpencv} name="OpenCV" />
            <SkillItem Icon={SiArduino} name="Arduino" />
            <SkillItem Icon={SiRaspberrypi} name="Raspberry Pi" />
          </ul>
        </motion.div>
        
      </motion.div>
    </motion.section>
  )
}