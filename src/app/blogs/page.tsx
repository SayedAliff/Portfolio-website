

'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
// Assuming these imports are correctly defined in your animations file
import { fadeInUp, fadeIn, staggerContainer } from '@/utils/animations'; 
import { FaCalendar, FaTag } from 'react-icons/fa';

// Dummy Data Structure (Add actual data fetching/structure if needed)
const blogs = [
  { 
    slug: 'post-1', 
    title: 'How to Optimize Next.js for Performance', 
    date: 'March 21, 2025', 
    tags: ['Next.js', 'Vercel', 'Performance'],
    excerpt: 'A deep dive into server components and caching strategies...',
  },
  { 
    slug: 'post-2', 
    title: 'Mastering Backend Development with C#', 
    date: 'April 5, 2025', 
    tags: ['C#', '.NET', 'Backend'],
    excerpt: 'Exploring asynchronous programming and entity framework in C#...',
  },
];

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
        Insights, tutorials, and stories from my journey as a developer.
      </p>

      {/* Blog Post Grid */}
      <motion.div 
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {blogs.map((blog, index) => (
          
          <motion.article
            key={index}
            className="bg-white dark:bg-dark/50 rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
            variants={fadeInUp} 
            whileHover={{ scale: 1.03 }} // 👈 FIX: Direct 'whileHover' applied to eliminate conflict
          >
            <div className="p-6">
              <Link href={`/blogs/${blog.slug}`} className="text-xl font-semibold hover:text-primary transition-colors">
                {blog.title}
              </Link>
              <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mt-2 mb-4">
                <span className="flex items-center gap-1">
                  <FaCalendar className="h-3 w-3" /> {blog.date}
                </span>
              </div>
              <p className="text-secondary mb-4 line-clamp-3">{blog.excerpt}</p>
              
              <div className="flex flex-wrap gap-2">
                {blog.tags.map(tag => (
                  <span key={tag} className="flex items-center gap-1 text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">
                    <FaTag className="h-3 w-3" /> {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
}