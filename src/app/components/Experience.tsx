// src/app/components/Experience.tsx (ESLint Fix)

'use client'
import { motion } from 'framer-motion'
// FIX: Added directive to temporarily ignore the 'defined but never used' error for animation props
// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
          
          
        </motion.div>
        
        {/* Job Role 2 */}
        <motion.div 
          className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
          variants={fadeInUp}
          {...cardHoverSmall}
        >
          
        </motion.div>
      </motion.div>
    </motion.section>
  )
}