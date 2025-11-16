"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
}

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch("/api/blogs");
        const data = await res.json();
        setBlogs(data.blogs || []);
      } catch (err) {
        console.error("Error loading blogs", err);
      }
    }
    fetchBlogs();
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">Blogs</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {blogs.map((blog) => (
          <motion.article
            key={blog.slug}
            
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden p-6 border border-gray-200 dark:border-gray-700"
          >
            <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{blog.description}</p>

            <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
              <span>{blog.date}</span>
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">{blog.category}</span>
            </div>

            <Link
              href={`/blogs/${blog.slug}`}
              className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
            >
              Read More →
            </Link>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
