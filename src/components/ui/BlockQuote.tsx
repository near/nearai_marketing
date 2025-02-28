import type { ReactNode } from 'react';
import React from 'react';

interface BlockQuoteProps {
  quote: ReactNode;
  author: string;
}

const BlockQuote: React.FC<BlockQuoteProps> = ({ quote, author }) => {
  return (
    <div className="border-l-4 border-[#00EB9A] pl-6 py-2 bg-[#00EB9A]/5 rounded-r-lg">
      <div className="text-lg italic text-[#AFD0C5] mb-4">{quote}</div>
      <p className="text-[#00EB9A] font-medium">––{author}</p>
    </div>
  );
};

export default BlockQuote;
