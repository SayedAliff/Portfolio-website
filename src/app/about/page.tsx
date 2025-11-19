"use client"

import { motion } from "framer-motion"
import { fadeInUp, fadeInDown, fadeIn, staggerContainer } from "@/utils/animations"

export default function AboutPage() {
  return (
    <div className="container max-w-7xl mx-auto py-12">
      {/* Title: animates on load */}
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        {...fadeInDown}
      >
        About Me
      </motion.h1>

      {/* Section wrapper: initial + whileInView so it animates when scrolled into view */}
      <motion.section
        className="mb-16"
        variants={staggerContainer}
        initial="initial"               // <- important: starting state
        whileInView="animate"           // <- triggers animate when in view
        viewport={{ once: true, amount: 0.3 }} // adjust amount to control trigger point
      >
        <motion.p
          className="text-lg text-secondary max-w-3xl mx-auto text-center"
          variants={fadeInUp}
        >
          I&apos;m a highly focused Backend Developer with a deep passion for building robust and scalable applications. My expertise is primarily anchored in backend systems, encompassing languages like C# and Python, with a strong command over traditional web development environments like PHP.
        </motion.p>

        <motion.p
          className="text-lg text-secondary max-w-3xl mx-auto text-center mt-4"
          variants={fadeInUp}
        >
          My approach is centered on transforming concepts into reliable, production-ready systems that prioritize performance, security, and maintainability. I value leveraging my diverse skill set in Backend Development and Web Development to deliver end-to-end solutions.
        </motion.p>

        <motion.p
          className="text-lg font-semibold max-w-3xl mx-auto text-center mt-4"
          variants={fadeIn} // calmer, more prominent final line
        >
          I&apos;m always exploring new technologies and expanding my knowledge, driven by the continuous challenge of building better systems and collaboration within the tech community.
        </motion.p>
      </motion.section>
    </div>
  )
}
