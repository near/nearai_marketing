// src/components/policy/PolicyPage.tsx
import type { NextPage } from 'next';
import ReactMarkdown from 'react-markdown';

import PageWrapper from '@/components/pages/NearAI/PageWrapper'; // Correct import

export interface PolicyPageProps {
  content: string;
  title: string;
}

const PolicyPage: NextPage<PolicyPageProps> = ({ content, title }) => {
  return (
    <PageWrapper withAnimation={false}> {/* Use PageWrapper, disable animation for static pages */}
      {/* TODO: Add MetaTags component here if needed for policy pages */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-24 prose prose-invert 
         prose-p:mb-12 prose-h1:text-4xl prose-h1:mb-12 prose-h2:text-3xl prose-h2:mt-24 prose-h2:mb-12 prose-h2:text-[#00EB9A] 
         prose-ul:my-12 prose-li:my-4 prose-a:text-[#00EB9A] hover:prose-a:text-white"> {/* Use BlogWrapper styles for now */}
        <h1>{title}</h1>
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </PageWrapper>
  );
};

export default PolicyPage;
