// src/pages/BlogPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';

const BlogPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      {/* ... (Back button and header remain the same) ... */}

      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-12">
        Gương Sáng Đảng Viên
      </h1>

      {/* MODIFIED: Replaced space-y-12 with grid and gap-12 for robust spacing */}
      <div className="grid gap-12">
        {blogPosts.map((post) => (
          <Link key={post.id} to={`/blog/${post.id}`}>
            <div
              className="bg-white/5 p-8 rounded-lg border border-white/10 shadow-lg backdrop-blur-sm 
                         transition-all duration-300 hover:bg-white/10 hover:border-white/20"
            >
              <h2 className="text-2xl font-bold text-white mb-2">
                {post.title}
              </h2>
              <div className="flex flex-wrap justify-between items-center text-sm text-gray-400 mb-4 gap-2">
                <span>Tác giả: {post.author}</span>
                <span>{post.date}</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {post.summary}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;