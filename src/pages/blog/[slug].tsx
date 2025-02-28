import type { GetStaticPaths, GetStaticProps } from 'next';
import type { ParsedUrlQuery } from 'querystring';
import React from 'react';

import BlogPost from '@/components/pages/NearAI/BlogPost';
import { blogPosts, contentComponents, getBlogPostBySlug, getPrevNextPosts } from '@/data/blog-posts';

interface BlogPostPageProps {
  slug: string;
}

interface Params extends ParsedUrlQuery {
  slug: string;
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ slug }) => {
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  const { prev, next } = getPrevNextPosts(slug);
  const ContentComponent = contentComponents[slug];

  if (!ContentComponent) {
    return <div>Content component not found for this post</div>;
  }

  return (
    <BlogPost
      title={post.title}
      date={post.date}
      author={{ name: post.author.name }}
      prevPost={prev ? { slug: prev.slug, title: prev.title } : undefined}
      nextPost={next ? { slug: next.slug, title: next.title } : undefined}
    >
      <ContentComponent />
    </BlogPost>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = blogPosts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false, // Return 404 for paths not returned by getStaticPaths
  };
};

export const getStaticProps: GetStaticProps<BlogPostPageProps, Params> = async ({ params }) => {
  if (!params?.slug) {
    return { notFound: true };
  }

  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return { notFound: true };
  }

  return {
    props: {
      slug: params.slug,
    },
  };
};

export default BlogPostPage;
