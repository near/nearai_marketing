import { format, parseISO } from 'date-fns';
import { ArrowLeft, ArrowRight, Facebook, Link as LinkIcon, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import { MetaTags } from '@/components/MetaTags';
import { BlogWrapper } from '@/components/pages/NearAI/PageWrapper';

interface BlogPostProps {
  title: string;
  date: string;
  author: {
    name: string;
  };
  children: React.ReactNode;
  prevPost?: {
    slug: string;
    title: string;
  };
  nextPost?: {
    slug: string;
    title: string;
  };
}

const ShareButton = ({ href, icon: Icon, label }: { href: string; icon: React.ElementType; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 text-[#AFD0C5] hover:text-[#00EB9A] hover:bg-[#00EB9A]/10
              rounded-lg transition-all flex items-center gap-2"
    aria-label={`Share on ${label}`}
  >
    <Icon className="w-5 h-5" />
    <span className="sr-only">{label}</span>
  </a>
);

const SocialShare = ({ url, title }: { url: string; title: string }) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="flex items-center gap-2 justify-center mt-24 mb-12">
      <span className="text-[#AFD0C5] mr-2">Share:</span>
      <ShareButton
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        icon={Twitter}
        label="Twitter"
      />
      <ShareButton
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        icon={Linkedin}
        label="LinkedIn"
      />
      <ShareButton
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        icon={Facebook}
        label="Facebook"
      />
      <button
        onClick={() => {
          navigator.clipboard.writeText(url);
          // Could add a toast notification here
        }}
        className="p-2 text-[#AFD0C5] hover:text-[#00EB9A] hover:bg-[#00EB9A]/10
                   rounded-lg transition-all"
        aria-label="Copy link"
      >
        <LinkIcon className="w-5 h-5" />
      </button>
    </div>
  );
};

const PostNavigation = ({
  prevPost,
  nextPost,
}: {
  prevPost?: BlogPostProps['prevPost'];
  nextPost?: BlogPostProps['nextPost'];
}) => {
  if (!prevPost && !nextPost) return null;

  return (
    <div className="mt-12 pt-8 border-t border-[#00EB9A]/20 grid grid-cols-1 md:grid-cols-2 gap-6">
      {prevPost ? (
        <Link
          href={`/blog/${prevPost.slug}`}
          className="group flex items-center gap-3 p-6 rounded-xl border border-[#00EB9A]/20 bg-black/30 
                     backdrop-blur-sm hover:bg-black/40 transition-all"
        >
          <ArrowLeft className="w-5 h-5 text-[#00EB9A] group-hover:transform group-hover:-translate-x-1 transition-transform" />
          <div>
            <div className="text-sm text-[#AFD0C5] mb-1">Previous</div>
            <div className="font-medium group-hover:text-[#00EB9A] transition-colors">{prevPost.title}</div>
          </div>
        </Link>
      ) : (
        <div className="hidden md:block" />
      )}

      {nextPost ? (
        <Link
          href={`/blog/${nextPost.slug}`}
          className="group flex items-center justify-end gap-3 p-6 rounded-xl border border-[#00EB9A]/20 bg-black/30 
                     backdrop-blur-sm hover:bg-black/40 transition-all"
        >
          <div className="text-right">
            <div className="text-sm text-[#AFD0C5] mb-1">Next</div>
            <div className="font-medium group-hover:text-[#00EB9A] transition-colors">{nextPost.title}</div>
          </div>
          <ArrowRight className="w-5 h-5 text-[#00EB9A] group-hover:transform group-hover:translate-x-1 transition-transform" />
        </Link>
      ) : (
        <div className="hidden md:block" />
      )}
    </div>
  );
};

const BlogPost = ({ title, date, author, children, prevPost, nextPost }: BlogPostProps) => {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  // Extract a meta description from the first paragraph if it's a string
  let description = '';
  if (React.Children.count(children) > 0) {
    const firstChild = React.Children.toArray(children)[0];
    if (
      React.isValidElement(firstChild) &&
      firstChild.props.children &&
      typeof firstChild.props.children === 'string'
    ) {
      description = firstChild.props.children.slice(0, 160) + '...';
    }
  }

  return (
    <BlogWrapper>
      <MetaTags title={`NEAR AI - ${title}`} description={description || undefined} image={undefined} />
      <div className="mx-auto px-6 md:px-8">
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-[#00EB9A] hover:text-white transition-colors gap-2 py-2 px-4 bg-[#00EB9A]/10 hover:bg-[#00EB9A]/20 rounded-lg"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to all posts</span>
          </Link>
        </div>

        <header className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">{title}</h1>

          <div className="flex items-center justify-center gap-4">
            <div className="text-center">
              <div className="font-medium text-white">{author.name}</div>
              <time className="text-sm text-[#AFD0C5]">{format(parseISO(date), 'MMMM d, yyyy')}</time>
            </div>
          </div>
        </header>

        <div className="space-y-12">{children}</div>

        <SocialShare url={currentUrl} title={title} />

        <PostNavigation prevPost={prevPost} nextPost={nextPost} />
      </div>
    </BlogWrapper>
  );
};

export default BlogPost;
