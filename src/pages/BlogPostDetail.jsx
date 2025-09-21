// src/pages/BlogPostDetail.jsx

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import ReactMarkdown from 'react-markdown'; // 1. Import ReactMarkdown

const BlogPostDetail = () => {
  const { postId } = useParams(); // Gets the 'postId' from the URL
  const post = blogPosts.find(p => p.id === parseInt(postId));

  // Handle case where post is not found
  if (!post) {
    return (
      <div className="text-center text-white p-10">
        <h1 className="text-3xl font-bold">404 - Post Not Found</h1>
        <Link to="/blog" className="text-white/80 hover:text-white mt-4 inline-block">
          Return to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-white">
     <div className="mb-12">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-white/80 font-semibold transition-colors hover:text-white"
        >
          <ArrowLeftIcon className="h-5 w-5" />
          Quay lại danh sách
        </Link>
      </div>
      <article>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          {post.title}
        </h1>
        <div className="flex flex-wrap justify-between items-center text-sm text-gray-400 mb-8 gap-2">
          <span>Tác giả: {post.author}</span>
          <span>{post.date}</span>
        </div>

        {post.imageUrl && (
          <img 
            src={post.imageUrl} 
            alt={post.title}
            className="w-full h-96 object-cover rounded-lg mb-8 shadow-lg"
          />
        )}

        <div className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed">
          {/* MODIFIED: Added a components prop to handle links */}
          <ReactMarkdown
            components={{
              // This function will be used to render every <a> tag
              a: ({node, ...props}) => <a {...props} target="_blank" rel="noopener noreferrer" />
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  );
};

export default BlogPostDetail;