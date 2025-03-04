'use client'

import { useEffect, useState } from "react";
import Footer from "../Footer";
import Link from 'next/link';
import Navbar from '../Navbar';

export default function BlogListClient({ posts }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
  }, []);
  return (
    <div className="animate-gradient font-[family-name:var(--font-mali)] grid grid-rows-[auto_1fr_20px] items-center justify-items-center min-h-screen p-2 sm:p-4 md:p-10 pb-10 gap-4 sm:gap-6 font-[family-name:var(--font-geist-sans)]">
        <Navbar/>
        <main className="flex flex-col gap-6 row-start-2 items-center w-full">
        <div className="flex flex-col gap-6 row-start-2 items-center w-full">
          <div className="flex flex-col lg:flex-row justify-center gap-4 w-full max-w-4xl"></div>
          <div className={`transform transition-all duration-1000 delay-400 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            } backdrop-blur-sm bg-gray-700/50 text-white p-4 sm:p-6 rounded-lg shadow-md w-full max-w-4xl border border-purple-400/10 ring-4 ring-purple-400/20`}>
            <div className="w-full flex flex-col items-center justify-center gap-4">
              <span className="text-3xl font-semibold text-purple-400 mb-8 mt-8 px-4 py-2 rounded-lg bg-purple-950/50 border border-purple-800/30">
                Blog Posts
              </span>
                    <div className="space-y-6 w-full">
                        {posts.map((post) => (
                        <article key={post.slug} className="w-full rounded-lg bg-gray-800/50 p-4 px-6 border border-purple-400/10 ring-4 ring-purple-400/20 transform transition-all duration-300 hover:scale-[1.02] hover:bg-gray-800/70 hover:ring-purple-400/40 hover:border-purple-400/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">
                            <Link href={`/blog/${post.slug}`} className="block space-y-2">
                            <h2 className="text-xl md:text-2xl font-semibold transition-colors duration-300 hover:text-purple-400">
                                {post.title || post.slug}
                            </h2>   
                            {post.date && (
                                <p className="text-purple-300 text-sm">
                                {new Date(post.date).toLocaleDateString()}
                                </p>
                            )}
                            <hr className="border-t-2 border-purple-400/30 my-4"/>
                            {post.description && (
                                <p className="text-purple-300 text-base">{post.description}</p>
                            )}
                            </Link>
                        </article>
                        ))}
                        {posts.length === 0 && (
                        <p className="text-purple-400">No blog posts found.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
        </main>
        <Footer/>   
    </div>
  );
} 