// src/app/components/Education.tsx (FINAL WITH MAPPED DATA)
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
   // User's College Entry (HSC)
    institution: "Milestone College ",
    degree: "Higher Secondary School Certificate (HSC)",
    details: "Science ",
    duration: "2017 - 2019",
    link: "https://www.milestonecollege.com/", 
  },
  {
    // User's School Entry (SSC)
    institution: "Milestone School and College ",
    degree: "Secondary School Certificate (SSC)",
    details: "Science ",
    duration: "2007 - 2017", // Adjusted timeline for SSC
    link: "https://www.milestonecollege.edu.bd/", 
  },
    {
    // User's School Entry (SSC)
    institution: "Oxford Foundation English School",
    degree: "School",
    details: "Primary Education ",
    duration: "2005 - 2006", // Adjusted timeline for SSC
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
      <motion.div 
        className="max-w-3xl mx-auto space-y-6" // Added space-y-6 for vertical spacing
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
                {/* Institution Name (with link) */}
                <Link href={edu.link} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    {edu.institution}
                </Link>
              </h3>
              
              <p className="text-primary mb-1">{edu.degree} • {edu.duration}</p>
              
              <p className="text-secondary">
                 {edu.details}
              </p>
            </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}