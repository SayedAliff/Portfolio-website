
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
// Assuming necessary variants are imported from animations.ts

const certificates = [
  {
    title: "JavaScript Algorithms",
    issuer: "Scrimba",
    img: "/certificates/scrimba-jsalgo.png",
  },
  {
    title: "Intro to SQL",
    issuer: "Scrimba",
    img: "/certificates/scrimba-sql.png",
  },

  {
    title: "Learn Typescript",
    issuer: "Scrimba",
    img: "/certificates/scrimba-ts.png",
  },
  {
    title: "Maximize Productivity With AI Tools",
    issuer: "Google",
    img: "/certificates/google-productivity.png",
  },
   {
    title: "IT Essentials: PC Hardware and Software",
    issuer: "Cisco Networking Academy",
    img: "/certificates/cisco-it-essentials.png",
  },
  {
    title: "Introduction to AI",
    issuer: "Google",
    img: "/certificates/google-intro-ai.png",
  },
  {
    title: "Build a Small Simulated Network With Cisco Packet Tracer",
    issuer: "Coursera",
    img: "/certificates/coursera-network.png",
  },
  {
    title: "Foundations of Cybersecurity",
    issuer: "Google",
    img: "/certificates/google-cybersecurity.png",
  },
  {
    title: "Introduction to Networking",
    issuer: "NVIDIA",
    img: "/certificates/nvidia-networking.png",
  },
  {
    title: "Network Security",
    issuer: "Cisco",
    img: "/certificates/cisco-security.png",
  },

  {
    title: "Technical Support Fundamentals",
    issuer: "Google",
    img: "/certificates/google-techsupport.png",
  },
  {
    title: "Use of Zoom in Facilitating Online Meeting/Class",
    issuer: "MuktoPaath",
    img: "/certificates/muktopaath-zoom.png",
  },
 
  {
    title: "Photography Basics",
    issuer: "MuktoPaath",
    img: "/certificates/muktopaath-photography.png",
  },
  
  
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-10">
        Certificates
      </h2>

      {/* FIX 1: Reduced gap from gap-10 to gap-8 for smaller size */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6"> 
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            
            // FIX 2: Added Framer Motion whileHover for smooth zoom
            whileHover={{ scale: 1.03 }} 
            
            // FIX 3: Added green glow and uniform border style (matching Projects card)
            className="bg-white dark:bg-dark/50 shadow-lg p-4 rounded-xl 
                       border border-gray-700/50 
                       hover:shadow-green-500/50 hover:shadow-xl transition-shadow duration-300"
          >
            <Image
              src={cert.img}
              width={600}
              height={400} 
              alt={cert.title}
              className="rounded-lg w-full h-auto border dark:border-neutral-700"
            />
            <h3 className="text-xl font-semibold mt-4">{cert.title}</h3>
            <p className="text-sm opacity-70">{cert.issuer}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}