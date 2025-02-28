import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import React from 'react';

import { MetaTags } from '@/components/MetaTags';
import PageWrapper from '@/components/pages/NearAI/PageWrapper';
import { blogPosts } from '@/data/blog-posts';

const BlogIndex = () => {
  return (
    <PageWrapper withAnimation={true}>
      <MetaTags title="NEAR AI - Blog" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-24">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">NEAR AI Blog</h1>
          <p className="text-xl text-[#AFD0C5]">Updates and insights from the NEAR AI team</p>
        </header>

        <div className="grid gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block p-8 rounded-xl border border-[#00EB9A]/20 bg-black/30
                       backdrop-blur-sm hover:bg-black/40 transition-all group"
            >
              <div className="flex items-center gap-4 mb-4 text-sm text-[#AFD0C5]">
                <span>{post.author.name}</span>
                <span>•</span>
                <time dateTime={post.date}>{format(parseISO(post.date), 'MMMM d, yyyy')}</time>
              </div>

              <h2 className="text-2xl font-bold mb-3">{post.title}</h2>

              <p className="text-[#AFD0C5]">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default BlogIndex;
