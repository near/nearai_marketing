// src/lib/policyUtils.ts
import fs from 'fs';
import path from 'path';

interface PolicyContentResult {
  extractedTitle: string | null;
  processedContent: string;
}

/**
 * Reads the content of a policy markdown file, potentially extracting the H1.
 * Should ONLY be called from server-side functions like getStaticProps.
 */
export const getPolicyContent = (policyFile: string): PolicyContentResult => {
  const filePath = path.join(process.cwd(), 'src', 'content', 'policies', policyFile);
  try {
    const fullContent = fs.readFileSync(filePath, 'utf8');
    const lines = fullContent.split('\n');
    const firstLine = lines[0]?.trim();
    const h1Match = firstLine?.match(/^#\s+(.*)/) || firstLine?.match(/^\*\*(.*)\*\*$/);

    if (h1Match && h1Match[1]) {
      // H1 found, extract title and return rest of content
      const extractedTitle = h1Match[1].trim();
      const processedContent = lines.slice(1).join('\n');
      return { extractedTitle, processedContent };
    } else {
      // No H1 on the first line, return full content and null title
      return { extractedTitle: null, processedContent: fullContent };
    }

  } catch (error) {
    console.error(`Error reading policy file ${policyFile}:`, error);
    // Return empty state on error
    return { extractedTitle: null, processedContent: '' };
  }
};
