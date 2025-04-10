import type { GetStaticProps } from 'next';

import type { PolicyPageProps } from '@/components/policy/PolicyPage';
import PolicyPage from '@/components/policy/PolicyPage';
import { getPolicyContent } from '@/lib/policyUtils'; 

export const getStaticProps: GetStaticProps<PolicyPageProps> = async () => {
  const policyFile = 'privacy-policy.md';
  const pageTitle = 'Privacy Policy'; // Fallback title
  const { extractedTitle, processedContent } = getPolicyContent(policyFile); 

  if (!processedContent && !extractedTitle) { // Check if reading failed (both are null/empty)
    return { notFound: true };
  }

  const title = extractedTitle ?? pageTitle; // Use extracted title or fallback

  return {
    props: {
      content: processedContent, // Pass the processed content (string)
      title: title,              // Pass the determined title (string)
    },
  };
};

export default PolicyPage;
