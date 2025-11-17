
'use client'
import { motion } from 'framer-motion'
// Ensure you import all necessary animations
import { fadeInUp, fadeInDown, staggerContainer } from '@/utils/animations' 

export default function AboutPage() {
  return (
    <div className="container max-w-7xl mx-auto py-12">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center"
        {...fadeInDown}
      >
        About Me
      </motion.h1>
      
      {/* Bio Section - This section uses staggerContainer to animate children (<p> tags) */}
      <motion.section 
        className="mb-16"
        variants={staggerContainer} // Use staggerContainer on the parent section
        initial="initial"
        animate="animate"
      >
        
        {/* Paragraph 1: Core Identity and Expertise */}
        <motion.p 
            className="text-lg text-secondary max-w-3xl mx-auto text-center"
            variants={fadeInUp} // Each child uses fadeInUp
        >
          I&apos;m a highly focused Backend Developer with a deep passion for building robust and scalable applications. My expertise is primarily anchored in backend systems, encompassing languages like C# and Python, with a strong command over traditional web development environments like PHP.
        </motion.p>
        
        {/* Paragraph 2: Approach and Motivation */}
        <motion.p 
            className="text-lg text-secondary max-w-3xl mx-auto text-center mt-4"
            variants={fadeInUp} // Each child uses fadeInUp
        >
          My approach is centered on transforming concepts into reliable, production-ready systems that prioritize performance, security, and maintainability. I value leveraging my diverse skill set in Backend Development and Web Development to deliver end-to-end solutions.
        </motion.p>

        {/* Paragraph 3: Closing Statement (More prominent) */}
        <motion.p 
            className="text-lg font-semibold max-w-3xl mx-auto text-center mt-4"
            variants={fadeInUp} // Each child uses fadeInUp
        >
          I&apos;m always exploring new technologies and expanding my knowledge, driven by the continuous challenge of building better systems and collaboration within the tech community.
        </motion.p>

      </motion.section>
    </div>
  )
}