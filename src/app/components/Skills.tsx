
'use client'
// Used FaIcon placeholders for the complex list to maintain project consistency
import { FaCode, FaLaptopCode, FaDatabase, FaReact, FaCloud, FaChartLine } from 'react-icons/fa' 
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
        className="section-title text-3xl font-bold text-center mb-10"
        {...fadeInUp}
      >
        Skills & Technologies
      </motion.h2>
      <motion.div 
        // 3x2 Grid structure
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
            <li>**Python** / R</li>
            <li>**C#** / C++ / C</li>
            <li>JavaScript / TypeScript</li>
            <li>Java / PHP</li>
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
            <li>**C# / .NET**</li>
            <li>Node.js / Express.js</li>
            <li>**PHP** (Traditional Web)</li>
            <li>Django REST Framework</li>
            <li>Postman / REST API</li>
          </ul>
        </motion.div>
        
        {/* CARD 3: Databases & Data Handling */}
        <motion.div 
          className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md border-t-4 border-blue-500"
          variants={fadeInUp}
          {...cardHover}
        >
          <FaDatabase className="h-8 w-8 text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Databases & SQL</h3>
          <ul className="text-secondary space-y-2">
            <li>**PostgreSQL** / MySQL</li>
            <li>MongoDB</li>
            <li>Oracle SQL</li>
            <li>SQLite3</li>
          </ul>
        </motion.div>
        
        {/* CARD 4: Frontend & UI/UX */}
        <motion.div 
          className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md border-t-4 border-pink-500"
          variants={fadeInUp}
          {...cardHover}
        >
          <FaReact className="h-8 w-8 text-pink-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Frontend & UI/UX</h3>
          <ul className="text-secondary space-y-2">
            <li>React / Next.js</li>
            <li>Tailwind CSS / **Bootstrap** / CSS3</li>
            <li>HTML5 / Shadcn UI</li>
            <li>Figma / Photoshop / Sketch</li>
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
            <li>Git / GitHub Actions (CI/CD)</li>
            <li>Docker / Nginx</li>
            <li>AWS / Oracle Cloud</li>
            <li>Linux / MacOS / **VS Code**</li>
          </ul>
        </motion.div>
        
        {/* CARD 6: Data Science & Hardware */}
        <motion.div 
          className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md border-t-4 border-orange-500"
          variants={fadeInUp}
          {...cardHover}
        >
          <FaChartLine className="h-8 w-8 text-orange-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Data Science & Embedded</h3>
          <ul className="text-secondary space-y-2">
            <li>Numpy / Pandas / Scikit-learn</li>
            <li>Matplotlib / Open CV / Langchain</li>
            <li>Arduino / Raspberry Pi</li>
            <li>Vim / Sublime Text / Xcode</li>
          </ul>
        </motion.div>
        
      </motion.div>
    </motion.section>
  )
}