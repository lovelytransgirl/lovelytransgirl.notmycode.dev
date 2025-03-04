'use client'

import Link from 'next/link';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import { useEffect, useState } from 'react';

export default function BlogPostContent({ post }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="animate-gradient font-[family-name:var(--font-mali)] grid grid-rows-[auto_1fr_20px] items-center justify-items-center min-h-screen p-2 sm:p-4 md:p-10 pb-10 gap-4 sm:gap-6 font-[family-name:var(--font-geist-sans)]">
      <Navbar/>
      <main className="flex flex-col gap-6 row-start-2 items-center w-full">
      <div className={`transform transition-all duration-1000 delay-400 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} backdrop-blur-sm bg-gray-700/50 text-white p-4 sm:p-6 rounded-lg shadow-md w-full max-w-4xl border border-purple-400/10 ring-4 ring-purple-400/20`}>
          <div className="w-full flex flex-col items-start justify-start gap-4">
            <article className="prose prose-invert prose-purple lg:prose-xl max-w-none">
              <div className="text-4xl font-bold text-purple-400 text-left">
                {post.title || post.slug}
              </div>
              <div className="mt-2 text-sm text-gray-400 items-center justify-center mb-2">
                {post.date?.toLocaleDateString()}
                <hr className="border-t-2 border-purple-400/30 my-4" />
              </div>
              <div 
                className="markdown-content prose-headings:text-purple-400 prose-a:text-pink-400 prose-strong:text-blue-300 text-left"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>
          </div>
        </div>
        <Footer/>
      </main>
    </div>
  );
}