// src/app/components/Education.tsx (Final Code with External Certificates Button)
'use client'
import { motion } from 'framer-motion'
import { fadeInUp, fadeIn, staggerContainer, cardHoverSmall } from '@/utils/animations'
import Link from 'next/link';

// Data structure for all educational entries
const educationData = [
  {
    institution: "American International University-Bangladesh",
    degree: "Bachelor of Science in Computer Science and Engineering (BSc CSE)",
    details: "Major in Information Systems",
    duration: "2020 - 2025",
    link: "https://www.aiub.edu/", 
  },
  {
    institution: "Milestone College ",
    degree: "Higher Secondary School Certificate (HSC)",
    details: "Science Group",
    duration: "2017 - 2019",
    link: "https://www.milestonecollege.com/", 
  },
  {
    institution: "Milestone School and College ",
    degree: "Secondary School Certificate (SSC)",
    details: "Science Group",
    duration: "2006 - 2017",
    link: "https://www.milestonecollege.edu.bd/", 
  },
  {
    institution: "Oxford Foundation English School",
    degree: "School",
    details: "Science Group",
    duration: "2003 - 2006",
    link: "https://www.facebook.com/profile.php?id=100063921215469", 
  },
];


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
      
      {/* 1. Education Cards Container */}
      <motion.div 
        className="max-w-3xl mx-auto space-y-6"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* Map over the educationData array to generate cards */}
        {educationData.map((edu, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
              variants={fadeInUp}
              {...cardHoverSmall}
            >
              <h3 className="text-xl font-semibold mb-2">
                <Link href={edu.link} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    {edu.institution}
                </Link>
              </h3>
              
              <p className="text-primary mb-1">{edu.degree} • {edu.duration}</p>
              
              <p className="text-secondary mb-4">
                 {edu.details}
              </p>
            </motion.div>
        ))}
      </motion.div>
      
      {/* 2. Certificates Button (Rendered Separately Below All Cards) */}
      <motion.div 
          initial={{opacity: 0}} 
          animate={{opacity: 1}} 
          transition={{delay: 1.0}} 
          className="text-center mt-12"
      >
          <Link href="/certificates" className="btn btn-primary text-sm px-6 py-2">
          👨🏻‍🎓 View My Certificates 👨🏻‍🎓
          </Link>
      </motion.div>
      
    </motion.section>
  )
}