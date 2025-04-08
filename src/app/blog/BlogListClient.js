'use client'

import Footer from "../Footer";
import Link from 'next/link';
import Navbar from '../Navbar';

export default function BlogListClient({ posts }) {
  return (
    <div className="font-[family-name:var(--font-mali)] grid grid-rows-[auto_1fr_20px] items-center justify-items-center min-h-screen p-2 sm:p-4 md:p-10 pb-10 gap-4 sm:gap-6 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="flex flex-col gap-6 row-start-2 items-center w-full">
        <div className="flex flex-col gap-6 row-start-2 items-center w-full">
          <div className="flex flex-col lg:flex-row justify-center gap-4 w-full max-w-4xl"></div>
          <div className="bg-surface0 text-text p-4 sm:p-6 rounded-lg shadow-md w-full max-w-4xl border border-lavender/10">
            <div className="w-full flex flex-col items-center justify-center gap-4">
              <span className="text-3xl font-semibold text-lavender mb-8 mt-8 px-4 py-2 rounded-lg bg-surface1 border border-lavender/20">
                Blog Posts
              </span>
              <div className="space-y-6 w-full">
                {posts.map((post) => (
                  <article key={post.slug} className="w-full rounded-lg bg-surface1 p-4 px-6 border border-lavender/10 hover:bg-surface2">
                    <Link href={`/blog/${post.slug}`} className="block space-y-2">
                      <h2 className="text-xl md:text-2xl font-semibold text-lavender hover:text-blue">
                        {post.title || post.slug}
                      </h2>
                      {post.date && (
                        <p className="text-subtext1 text-sm">
                          {new Date(post.date).toLocaleDateString()}
                        </p>
                      )}
                      <hr className="border-t-2 border-lavender/30 my-4" />
                      {post.description && (
                        <p className="text-subtext1 text-base">{post.description}</p>
                      )}
                    </Link>
                  </article>
                ))}
                {posts.length === 0 && (
                  <p className="text-lavender">No blog posts found.</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}