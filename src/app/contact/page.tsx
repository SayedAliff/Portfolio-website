

'use client'

import { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser' 
import { fadeInUp, fadeIn, slideInLeft, slideInRight } from '@/utils/animations' 

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // EmailJS Keys from .env.local
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    emailjs
      .sendForm(
        serviceID,
        templateID,
        e.currentTarget as HTMLFormElement, // Safely pass the form element
        publicKey
      )
      .then(
        // Success Callback
        () => {
          setStatus('success');
          (e.currentTarget as HTMLFormElement).reset(); // Reset form on success
        },
        // Error Callback (Typed as unknown to resolve TypeScript error)
        (error: unknown) => { 
          console.error("EmailJS Failed:", error);
          setStatus('error');
        }
      );
  };

  return (
    <div className="container max-w-7xl mx-auto py-12">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center"
        {...fadeInUp}
      >
        Contact Me
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Contact Information */}
        <motion.div className="space-y-8" {...slideInLeft}>
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-secondary">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions. 
            </p>
          </motion.div>
          
          <motion.div className="space-y-4" variants={fadeIn} initial="initial" animate="animate">
            
            {/* Email */}
            <motion.div className="flex items-center gap-4" variants={fadeInUp} whileHover={{x:10}} transition={{ type: "spring", stiffness: 300 }}>
              <FaEnvelope className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <a href="mailto:20-43489-1@student.aiub.edu" className="text-secondary hover:text-primary">
                 sayed.alif2002@gmail.com
                </a>
              </div>
            </motion.div>
            
            {/* Phone */}
            <motion.div className="flex items-center gap-4" variants={fadeInUp} whileHover={{x:10}} transition={{ type: "spring", stiffness: 300 }}>
              <FaPhone className='h-6 w-6 text-primary' />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <a href="tel:+8801784472253" className="text-secondary hover:text-primary">
                 +8801784472253
                </a>
              </div>
            </motion.div>
            
            {/* Location */}
            <motion.div className="flex items-center gap-4" variants={fadeInUp} whileHover={{x:10}} transition={{ type: "spring", stiffness: 300 }}>
              <FaMapMarkerAlt className='h-6 w-6 text-primary' />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-secondary">GP-k 22/3 South Kuril, Dhaka-1229, Bangladesh</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Contact Form */}
        <motion.div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md" {...slideInRight}>
          <motion.form onSubmit={sendEmail} className="space-y-6" variants={fadeIn} initial="initial" animate="animate">
            
            {/* Name Input */}
            <motion.div variants={fadeInUp}>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input type="text" id="name" name="from_name" // 👈 Template Variable
                     required 
                     className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-transparent" />
            </motion.div>
            
            {/* Email Input */}
            <motion.div variants={fadeInUp}>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input type="email" id="email" name="from_email" // 👈 Template Variable
                     required 
                     className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-transparent" />
            </motion.div>
            
            {/* Message Input */}
            <motion.div variants={fadeInUp}>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea id="message" name="message" // 👈 Template Variable
                        required rows={4} 
                        className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:border-transparent" />
            </motion.div>
            
            {/* Submit Button */}
            <motion.button type="submit" disabled={status === 'loading'} className="w-full btn btn-primary" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </motion.button>
            
            {/* Success Message */}
            {status === 'success' && (
              <motion.p className="text-green-500 text-center" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                Message sent successfully!
              </motion.p>
            )}
            
            {/* Error Message */}
            {status === 'error' && (
              <motion.p className="text-red-500 text-center" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                Failed to send message. Please try again.
              </motion.p>
            )}
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
}
