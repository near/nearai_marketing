import React from 'react';

// Import all blog post content components 
import AITPAnnouncementPost from '@/components/blog-posts/AITPAnnouncementPost';
import OpenAgentsAlliancePost from '@/components/blog-posts/OpenAgentsAlliancePost';
import ProofOfResponsePost from '@/components/blog-posts/ProofOfResponsePost';
import TEEInfrastructurePost from '@/components/blog-posts/TEEInfrastructurePost';
import ResearchHubPost from '@/components/blog-posts/ResearchHubPost';
import AssistantPost from '@/components/blog-posts/AssistantPost';

// Map of slug to content component
export const contentComponents: Record<string, React.ComponentType<any>> = {
  'building-next-gen-near-ai-infrastructure-with-tees': TEEInfrastructurePost,
  'aitp-announcement': AITPAnnouncementPost,
  'proof-of-response-announcement': ProofOfResponsePost,
  'introducing-the-open-agents-alliance': OpenAgentsAlliancePost,
  'near-ai-research-hub-launch': ResearchHubPost,
  'near-ai-assistant-alpha': AssistantPost,
};

export interface BlogPostMeta {
  slug: keyof typeof contentComponents;
  title: string;
  excerpt: string;
  date: string;
  author: {
    name: string;
  };
  description?: string;
}

// All blog posts in chronological order (newest first)
export const blogPosts: BlogPostMeta[] = [
  {
    slug: 'introducing-the-open-agents-alliance',
    title: 'Introducing the Open Agents Alliance',
    excerpt: 'At ETHDenver 2025, the NEAR AI team introduced an exciting collaboration of forward-thinking teams: the Open Agents Alliance (OAA), an initiative to deliver powerful, open source AI services to all users by combining infrastructure.',
    date: '2025-02-27',
    author: {
      name: 'Jay Zalowitz',
    },
  },
  {
    slug: 'aitp-announcement',
    title: 'Introducing AITP: Agent Interaction & Transaction Protocol to enable inter-agent payments & communication',
    excerpt: 'NEAR AI is releasing today a Request for Comments (RFC) of AITP: Agent Interaction and Transaction Protocol, enabling AI agents to communicate securely across trust boundaries.',
    date: '2025-02-25',
    author: {
      name: 'Illia Polosukhin',
    },
  },
  {
    slug: 'proof-of-response-announcement',
    title: 'Announcing Proof of Response',
    excerpt: 'A novel primitive in decentralized systems to guarantee liveness and responsiveness of services',
    date: '2025-02-18',
    author: {
      name: 'Alex Skidanov',
    },
  },
  {
    slug: 'building-next-gen-near-ai-infrastructure-with-tees',
    title: 'Building Next-Gen NEAR AI Infrastructure with TEEs',
    excerpt: 'Enabling Fully Private, Verifiable AI Agents with Phala Network',
    date: '2025-01-20',
    author: {
      name: 'Illia Polosukhin',
    },
  },
  {
    slug: 'near-ai-research-hub-launch',
    title: 'NEAR AI Launches Research Hub to Build the Next Frontier AI Model',
    excerpt: 'NEAR.AI is building the next generation frontier AI model with 1.4T parameters.',
    date: '2024-11-10',
    author: {
      name: 'Illia Polosukhin',
    },
    description: 'NEAR.AI is building the next generation frontier AI model with 1.4T parameters.',
  },
  {
    slug: 'near-ai-assistant-alpha',
    title: 'NEAR AI Assistant is in Alpha: User-Owned AI in Action',
    excerpt: 'Experience the first version of NEAR AI Assistant, designed to execute actions on your behalf.',
    date: '2024-11-10',
    author: {
      name: 'Illia Polosukhin',
    },
    description: 'Experience the first version of NEAR AI Assistant, designed to execute actions on your behalf.',
  },
];

/**
 * Get the previous and next blog posts for navigation
 */
export function getPrevNextPosts(currentSlug: string): { prev: BlogPostMeta | null; next: BlogPostMeta | null } {
  const currentIndex = blogPosts.findIndex(post => post.slug === currentSlug);
  
  if (currentIndex === -1) {
    return { prev: null, next: null };
  }

  // Previous post is the one before (chronologically earlier) the current post
  const prev = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
  
  // Next post is the one after (chronologically later) the current post
  const next = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;  
  
  return { prev, next };
}

/**
 * Get a blog post by slug
 */
export function getBlogPostBySlug(slug: string): BlogPostMeta | undefined {
  return blogPosts.find(post => post.slug === slug);
}
