'use client'

import Link from 'next/link';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import './BlogPostContent.css';

export default function BlogPostContent({ post }) {
  return (
    <div className="font-[family-name:var(--font-mali)] grid grid-rows-[auto_1fr_20px] items-center justify-items-center min-h-screen p-2 sm:p-4 md:p-10 pb-10 gap-4 sm:gap-6 font-[family-name:var(--font-geist-sans)]">
      <Navbar/>
      <main className="flex flex-col gap-6 row-start-2 items-center w-full">
        <div className="bg-surface0 text-text p-4 sm:p-6 rounded-lg shadow-md w-full max-w-4xl border border-lavender/10">
          <div className="w-full flex flex-col items-start justify-start gap-4">
            <article className="prose prose-invert lg:prose-xl max-w-none">
              <div className="text-4xl font-bold text-lavender text-left">
                {post.title || post.slug}
              </div>
              <div className="mt-2 text-sm text-subtext1 items-center justify-center mb-2">
                {post.date?.toLocaleDateString()}
                <hr className="border-t-2 border-lavender/30 my-4" />
              </div>
              <div 
                className="markdown-content prose-headings:text-lavender prose-a:text-blue prose-strong:text-green text-left break-words whitespace-normal w-full overflow-hidden"
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