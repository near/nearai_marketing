// src/components/pages/NearAI/Footer.tsx
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-gray-800 mt-24 py-8 text-sm text-[#AFD0C5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span>&copy; {currentYear} NEAR AI. All rights reserved.</span>
        <div className="flex gap-4">
          <Link href="/careers" className="hover:text-white">
            Careers
          </Link>
          <Link href="/privacy-policy" className="hover:text-white">
            Privacy Policy
          </Link>
          <Link href="/cookie-policy" className="hover:text-white">
            Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
