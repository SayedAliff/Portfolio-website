
'use client'
import { motion } from 'framer-motion'
import { fadeInUp, fadeIn, staggerContainer, cardHoverSmall } from '@/utils/animations'

export default function Education() {
  return (
    <motion.section
      {...fadeIn}
      transition={{ delay: 0.6 }}
      className="mb-16"
    >
      <motion.h2 
        className="section-title text-3xl font-bold text-center mb-10"
        {...fadeInUp}
      >
        Education
      </motion.h2>
      <motion.div 
        className="max-w-3xl mx-auto"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.div 
          className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
          variants={fadeInUp}
          {...cardHoverSmall}
        >
          <h3 className="text-xl font-semibold mb-2">American International University-Bangladesh</h3>
          <p className="text-primary mb-2">Bachelor of Science in Computer Science and Engineering  • 2020 - 2025</p>
          <p className="text-secondary">
             Major in Information Systems
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}