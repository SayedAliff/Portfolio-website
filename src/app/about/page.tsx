"use client"
import { motion } from "framer-motion"
import { fadeInUp, fadeInDown, fadeIn, staggerContainer } from "@/utils/animations"

export default function AboutPage() {
  return (
    <div className="container max-w-7xl mx-auto py-12">
      {/* Title */}
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        {...fadeInDown}
      >
        About Me
      </motion.h1>

      {/* Section Wrapper with Stagger Animation */}
      <motion.section
        className="mb-16"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* Paragraph 1 */}
        <motion.p
          className="text-lg text-secondary max-w-3xl mx-auto text-center"
          variants={fadeInUp}
        >
          I'm a highly focused Backend Developer with a deep passion for building robust and scalable applications. My expertise is primarily anchored in backend systems, encompassing languages like C# and Python, with a strong command over traditional web development environments like PHP.
        </motion.p>

        {/* Paragraph 2 (slightly delayed for better rhythm) */}
        <motion.p
          className="text-lg text-secondary max-w-3xl mx-auto text-center mt-4"
          variants={fadeInUp}
        >
          My approach is centered on transforming concepts into reliable, production-ready systems that prioritize performance, security, and maintainability. I value leveraging my diverse skill set in Backend Development and Web Development to deliver end-to-end solutions.
        </motion.p>

        {/* Paragraph 3 with a more elegant fade-in effect */}
        <motion.p
          className="text-lg font-semibold max-w-3xl mx-auto text-center mt-4"
          variants={fadeIn}
        >
          I'm always exploring new technologies and expanding my knowledge, driven by the continuous challenge of building better systems and collaboration within the tech community.
        </motion.p>
        
      </motion.section>
    </div>
  )
}
