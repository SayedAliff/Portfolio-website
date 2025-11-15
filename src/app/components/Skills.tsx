
'use client'
import { FaCode, FaLaptopCode, FaGraduationCap } from 'react-icons/fa'
import { motion } from 'framer-motion'
// Ensure these imports match your actual animations file location
import { fadeInUp, fadeIn, staggerContainer, cardHover } from '@/utils/animations' 

export default function Skills() {
  return (
    <motion.section 
      className="mb-16"
      {...fadeIn}
      transition={{ delay: 0.2 }}
    >
      <motion.h2 
        className="section-title text-3xl font-bold text-center mb-10" // Added classes for visibility
        {...fadeInUp}
      >
        Skills
      </motion.h2>
      <motion.div 
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* Frontend Card */}
        <motion.div 
          className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
          variants={fadeInUp}
          {...cardHover}
        >
          <FaCode className="h-8 w-8 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Frontend</h3>
          <ul className="text-secondary space-y-2">
            <li>React / Next.js</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
            <li>HTML5 / CSS3</li>
          </ul>
        </motion.div>
        
        {/* Backend Card */}
        <motion.div 
          className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
          variants={fadeInUp}
          {...cardHover}
        >
          <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Backend & Data</h3>
          <ul className="text-secondary space-y-2">
            <li>C# / .NET</li>
            <li>Python (Data Science)</li>
            <li>PHP</li>
            <li>Node.js / Express</li>
          </ul>
        </motion.div>
        
        {/* Tools Card */}
        <motion.div 
          className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
          variants={fadeInUp}
          {...cardHover}
        >
          <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Tools & Others</h3>
          <ul className="text-secondary space-y-2">
            <li>Git / GitHub</li>
            <li>Docker</li>
            <li>AWS</li>
            <li>CI/CD</li>
          </ul>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}