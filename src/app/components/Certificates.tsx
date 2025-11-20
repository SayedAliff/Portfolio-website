"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const certificates = [
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
    title: "Generative AI: Prompt Engineering Basics",
    issuer: "IBM",
    img: "/certificates/ibm.png",
  },
  {
    title: "Intro to SQL",
    issuer: "Scrimba",
    img: "/certificates/scrimba-sql.png",
  },
  {
    title: "Introduction to Networking",
    issuer: "NVIDIA",
    img: "/certificates/nvidia-networking.png",
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
    title: "Network Security",
    issuer: "Cisco",
    img: "/certificates/cisco-security.png",
  },
  {
    title: "Use AI as a Creative or Expert Partner",
    issuer: "Google",
    img: "/certificates/google.png",
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
    title: "IT Essentials: PC Hardware and Software",
    issuer: "Cisco Networking Academy",
    img: "/certificates/cisco-it-essentials.png",
  },
  {
    title: "Photography Basics",
    issuer: "MuktoPaath",
    img: "/certificates/muktopaath-photography.png",
  },
  {
    title: "Introduction to AI",
    issuer: "Google",
    img: "/certificates/google-intro-ai.png",
  },
  {
    title: "JavaScript Algorithms",
    issuer: "Scrimba",
    img: "/certificates/scrimba-jsalgo.png",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-10">
        Certificates
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-neutral-900 shadow-lg p-4 rounded-xl border dark:border-neutral-700 hover:scale-[1.02] transition"
          >
            <Image
              src={cert.img}
              width={500}
              height={350}
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
