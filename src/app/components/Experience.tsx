// src/app/components/Experience.tsx (Final Fix: Removed animation imports)

'use client'
import { motion } from 'framer-motion'
// FIX: Removed all animation imports (fadeInUp, staggerContainer, etc.) 
// to resolve the 'defined but never used' errors, as this component is currently hidden/unused.

export default function Experience() {
  return (
    <motion.section 
      className="mb-16 py-8"
      // Added empty motion div for compatibility
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      <motion.h2 
        className="section-title text-3xl font-bold text-center mb-10"
      >
        Experience
      </motion.h2>
      <div 
        className="max-w-3xl mx-auto space-y-8"
      >
        {/* Job Role 1 */}
        <div 
          className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
        >
          <h3 className="text-xl font-semibold mb-1">Software Developer Intern</h3>
          <p className="text-primary mb-2">Tech Solutions Co. • 2024 - Present</p>
          <ul className="list-disc list-inside text-secondary space-y-1 ml-4">
            <li>Developed and maintained REST APIs using Python/Django for high-traffic applications.</li>
            <li>Collaborated with frontend teams to integrate new features seamlessly.</li>
            <li>Participated in code reviews and deployed microservices using Docker.</li>
          </ul>
        </div>
        
        {/* Job Role 2 */}
        <div 
          className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
        >
          <h3 className="text-xl font-semibold mb-1">Junior Backend Developer</h3>
          <p className="text-primary mb-2">Startup X • 2023 - 2024</p>
          <ul className="list-disc list-inside text-secondary space-y-1 ml-4">
            <li>Assisted in migrating legacy PHP codebases to modern C#/.NET architecture.</li>
            <li>Managed and optimized PostgreSQL and MongoDB databases for performance.</li>
            <li>Contributed to project documentation and continuous integration pipelines.</li>
          </ul>
        </div>
      </div>
    </motion.section>
  )
}