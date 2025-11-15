// src/app/about/page.tsx (REDUCED - Only Bio Section Remains)
'use client'
import { motion } from 'framer-motion'
// Only imports necessary for the Bio section's animation/structure
import { fadeInUp, fadeInDown } from '@/utils/animations' 

export default function AboutPage() {
  return (
    <div className="container max-w-7xl mx-auto py-12">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center"
        {...fadeInDown}
      >
        About Me
      </motion.h1>
      
      {/* Bio Section - This is the only content remaining here */}
      <motion.section 
        className="mb-16"
        {...fadeInUp}
      >
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          I&apos;m a highly focused Backend Developer with a deep passion for building robust and scalable applications. My expertise is primarily anchored in backend systems, encompassing languages like C# and Python, with a strong command over traditional web development environments like PHP. I am also deeply interested in Data Science, often leveraging Python for effective data processing and analysis.

My approach is centered on transforming concepts into reliable, production-ready systems that prioritize performance, security, and maintainability. I value leveraging my diverse skill set in Backend Development and Web Development to deliver end-to-end solutions.

I&apos;m always exploring new technologies and expanding my knowledge, driven by the continuous challenge of building better systems and collaboration within the tech community.
        </p>
      </motion.section>
    </div>
  )
}