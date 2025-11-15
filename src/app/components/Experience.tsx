
'use client'
import { motion } from 'framer-motion'
import { fadeInUp, fadeIn, staggerContainer, cardHoverSmall } from '@/utils/animations'

export default function Experience() {
  return (
    <motion.section 
      className="mb-16"
      {...fadeIn}
      transition={{ delay: 0.4 }}
    >
      <motion.h2 
        className="section-title text-3xl font-bold text-center mb-10"
        {...fadeInUp}
      >
        Experience
      </motion.h2>
      <motion.div 
        className="max-w-3xl mx-auto space-y-8"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* Job Role 1 */}
        <motion.div 
          className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
          variants={fadeInUp}
          {...cardHoverSmall}
        >
          <h3 className="text-xl font-semibold mb-1">Software Developer Intern</h3>
          <p className="text-primary mb-2">Tech Solutions Co. • 2024 - Present</p>
          <ul className="list-disc list-inside text-secondary space-y-1 ml-4">
            <li>Developed and maintained REST APIs using Python/Django for high-traffic applications.</li>
            <li>Collaborated with frontend teams to integrate new features seamlessly.</li>
            <li>Participated in code reviews and deployed microservices using Docker.</li>
          </ul>
        </motion.div>
        
        {/* Job Role 2 */}
        <motion.div 
          className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
          variants={fadeInUp}
          {...cardHoverSmall}
        >
          <h3 className="text-xl font-semibold mb-1">Junior Backend Developer</h3>
          <p className="text-primary mb-2">Startup X • 2023 - 2024</p>
          <ul className="list-disc list-inside text-secondary space-y-1 ml-4">
            <li>Assisted in migrating legacy PHP codebases to modern C#/.NET architecture.</li>
            <li>Managed and optimized PostgreSQL and MongoDB databases for performance.</li>
            <li>Contributed to project documentation and continuous integration pipelines.</li>
          </ul>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}