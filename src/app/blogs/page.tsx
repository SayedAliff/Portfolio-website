'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/utils/animations';
import Blogs from '@/app/components/Blogs';

export default function BlogsPage() {
  return (
    <div className="container max-w-7xl mx-auto py-12">

      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        {...fadeInUp}
      >
        Blogs
      </motion.h1>

      {/* Load Blogs Component */}
      <Blogs />

    </div>
  );
}
