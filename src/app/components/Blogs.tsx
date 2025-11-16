'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/utils/animations';

export default function Blogs() {
  return (
    <div className="container max-w-7xl mx-auto py-12">

      <motion.h1 
        className="text-4xl font-bold mb-8 text-center"
        {...fadeInUp}
      >
        Blogs
      </motion.h1>

      <p className="text-lg text-secondary max-w-3xl mx-auto text-center mb-16">
        No blog posts available right now. I will add content soon.
      </p>

      {/* Future Blog Grid Here */}
      <div className="text-center text-secondary">
        <i>Coming soon...</i>
      </div>

    </div>
  );
}
