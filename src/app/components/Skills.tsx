

'use client'

import { motion } from 'framer-motion'
import React from 'react'; // Necessary for React.ElementType type
import { 
    SiPython, SiTypescript, SiJavascript, SiCplusplus, SiPostgresql, SiMysql, SiMongodb, 
    SiNodedotjs, SiExpress, SiGit, SiGithubactions, SiDocker, SiNginx, SiReact, 
    SiNextdotjs, SiTailwindcss, SiAngular, SiFramer, SiShadcnui, SiLinux, SiOracle, 
    SiFastapi, SiDjango, SiNumpy, SiPandas, SiR, SiOpencv, SiScikitlearn, SiLangchain 
} from 'react-icons/si'
import { FaCode, FaLaptopCode, FaDatabase, FaReact, FaCloud, FaChartLine, FaJava } from 'react-icons/fa' 

// Assuming these imports match your actual animations file location
import { fadeInUp, fadeIn, staggerContainer, cardHover } from '@/utils/animations' 

// FIX: Using React.ElementType to avoid the 'any' type error
const SkillItem = ({ Icon, name }: { Icon: React.ElementType, name: string }) => (
    <li className="flex items-center gap-3">
        <Icon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
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
          {...cardHover}
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
          {...cardHover}
        >
          <FaLaptopCode className="h-8 w-8 text-green-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Backend & Frameworks</h3>
          <ul className="text-secondary space-y-2">
            <li className="list-disc list-inside text-secondary ml-4">C# / .NET (User added)</li> 
            <SkillItem Icon={SiNodedotjs} name="Node.js" />
            <SkillItem Icon={SiExpress} name="Express.js" />
            <li className="list-disc list-inside text-secondary ml-4">PHP (Traditional Web)</li>
            <SkillItem Icon={SiDjango} name="Django REST Framework" />
            <li className="list-disc list-inside text-secondary ml-4">Postman / REST API</li>
          </ul>
        </motion.div>
        
        {/* CARD 3: Databases */}
        <motion.div 
          className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md border-t-4 border-blue-500"
          variants={fadeInUp}
          {...cardHover}
        >
          <FaDatabase className="h-8 w-8 text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Databases & SQL</h3>
          <ul className="text-secondary space-y-2">
            <SkillItem Icon={SiPostgresql} name="PostgreSQL" />
            <SkillItem Icon={SiMysql} name="MySQL" />
            <SkillItem Icon={SiOracle} name="Oracle SQL" />
            <SkillItem Icon={SiMongodb} name="MongoDB" />
            <li className="list-disc list-inside text-secondary ml-4">SQLite3</li>
          </ul>
        </motion.div>
        
        {/* CARD 4: Frontend Development */}
        <motion.div 
          className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md border-t-4 border-pink-500"
          variants={fadeInUp}
          {...cardHover}
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
          {...cardHover}
        >
          <FaCloud className="h-8 w-8 text-cyan-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">DevOps, Cloud & Tools</h3>
          <ul className="text-secondary space-y-2">
            <SkillItem Icon={SiLinux} name="Linux" />
            <SkillItem Icon={SiGit} name="Git" />
            <SkillItem Icon={SiGithubactions} name="GitHub Actions (CI/CD)" />
            <SkillItem Icon={SiDocker} name="Docker" />
            <SkillItem Icon={SiNginx} name="Nginx" />
            <SkillItem Icon={SiOracle} name="Oracle Cloud" />
          </ul>
        </motion.div>
        
        {/* CARD 6: Data & AI / ML Tools */}
        <motion.div 
          className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md border-t-4 border-orange-500"
          variants={fadeInUp}
          {...cardHover}
        >
          <FaChartLine className="h-8 w-8 text-orange-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Data Science & Embedded</h3>
          <ul className="text-secondary space-y-2">
            <SkillItem Icon={SiNumpy} name="Numpy / Pandas" />
            <li className="list-disc list-inside text-secondary ml-4">Matplotlib / OpenCV</li>
            <li className="list-disc list-inside text-secondary ml-4">Scikit-learn / Langchain</li>
            <li className="list-disc list-inside text-secondary ml-4">Arduino / Raspberry Pi (Embedded)</li>
          </ul>
        </motion.div>
        
      </motion.div>
    </motion.section>
  )
}