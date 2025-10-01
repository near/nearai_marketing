import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import Script from 'next/script';

const GlowingText = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[#00EB9A]">{children}</span>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-4xl md:text-5xl font-bold mb-8 md:mb-12">{children}</h2>
);

const SectionSubtitle = ({ children }: { children: React.ReactNode }) => (
  <p className="text-2xl md:text-3xl font-light mb-12">{children}</p>
);

interface CTAButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  primary?: boolean;
  className?: string;
}

const CTAButton = ({ onClick, children, primary = false, className = '' }: CTAButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`
        inline-flex items-center justify-center px-8 py-3 rounded-lg font-medium transition-all
        ${
        primary
          ? 'bg-[#00EB9A] text-black hover:bg-[#00EB9A]/90 shadow-[#00EB9A]/30 shadow-lg hover:shadow-xl'
          : 'bg-black/30 text-white hover:text-[#00EB9A] hover:bg-black/40 border border-[#00EB9A]/20'
      }
        ${className}
        group
      `}
    >
      <span className="flex items-center">
        {children}
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </button>
  );
};

const CareersContent = () => {
  const openPositionsRef = useRef<HTMLDivElement>(null);

  const scrollToOpenPositions = () => {
    openPositionsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };


  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const loadGreenhouse = () => Grnhse.Iframe.load();

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 mb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-[#001A12]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white drop-shadow-[0_0_30px_rgba(0,235,154,0.3)]">
            Join Our Team
          </h1>
          <p
            className="text-2xl md:text-3xl font-light mx-auto max-w-3xl bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-[#AFD0C5] mb-10">
            Build the future of user-owned AI with us!
          </p>
          <div className="flex justify-center">
            <CTAButton primary onClick={scrollToOpenPositions}>
              See Open Positions
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionTitle>Our Vision</SectionTitle>
            <SectionSubtitle>
              One day, all people will have access to free AI that optimizes their{' '}
              <GlowingText>wellbeing</GlowingText>, not company profit.
            </SectionSubtitle>
            <p className="text-lg text-gray-300 mb-8">
              We're building technology that puts users first, not shareholders. Our mission is to
              create AI that is powerful, accessible, and aligned with human values. Join us on this
              journey to redefine the future of AI.
            </p>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 md:py-24 bg-black/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionTitle>Our Culture</SectionTitle>
            <p className="text-lg text-gray-300 mb-6">
              We're an in-person team that thrives on focus, collaboration, and creating meaningful impact together. We believe in giving our people the right environment and support to do their best work — not just side by side, but as part of a community that shares ideas, energy, and ambitions every day.
            </p>

            <p className="text-lg text-gray-300 mb-6">
              What you see below is how AI picture "teamwork": aliens at stand-ups, zero-gravity brainstorming, interplanetary baseball, and pizza parties that somehow break the laws of physics. Honestly? Not a bad guess.
            </p>

            <p className="text-lg text-gray-300 mb-6">
              Yes, we work on-site. No, our office isn't in space (yet). AI just has a vivid imagination.
            </p>

            <p className="text-lg text-gray-300 mb-12">
              In reality, our culture is built on the same spirit — creative, collaborative, a little unconventional. We show up every day in person to spark ideas, push boundaries, and occasionally laugh at what happens when you ask AI to "show us at work."
            </p>

            <div className="mt-16">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                <div
                  className="bg-black/40 border border-gray-800 rounded-lg overflow-hidden shadow-lg shadow-black/50 hover:shadow-[#004030]/30 transition-all duration-300">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src="/images/office.jpeg"
                      alt="AI-generated office space"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div
                  className="bg-black/40 border border-gray-800 rounded-lg overflow-hidden shadow-lg shadow-black/50 hover:shadow-[#004030]/30 transition-all duration-300">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src="/images/standup.jpeg"
                      alt="AI-generated team members in a meeting"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div
                  className="bg-black/40 border border-gray-800 rounded-lg overflow-hidden shadow-lg shadow-black/50 hover:shadow-[#004030]/30 transition-all duration-300">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src="/images/softball.jpeg"
                      alt="AI-generated team activity"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div
                  className="bg-black/40 border border-gray-800 rounded-lg overflow-hidden shadow-lg shadow-black/50 hover:shadow-[#004030]/30 transition-all duration-300">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src="/images/pizza.jpeg"
                      alt="AI-generated team lunch"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section ref={openPositionsRef} id="open-positions" className="py-16 md:py-24 bg-black/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto">
            <SectionTitle>Open Positions</SectionTitle>
            <p className="text-lg text-gray-300 mb-12">
              Join our team and help us build the future of user-owned AI. We're looking for passionate individuals who
              are excited about our mission.
            </p>

            {/* Greenhouse Jobs Board */}
            <div className="mt-10 bg-black/40 border border-gray-800 rounded-lg p-2">
              <div id="grnhse_app"></div>
            </div>
          </div>
        </div>
      </section>
      <Script src="https://boards.eu.greenhouse.io/embed/job_board/js?for=nearai" strategy="lazyOnload"
              onReady={loadGreenhouse} />
    </div>
  );
};

export default CareersContent;
