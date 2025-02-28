import { format, parseISO } from 'date-fns';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Link from 'next/link';
import React from 'react';

import { MetaTags } from '@/components/MetaTags';
import { BlogWrapper } from '@/components/pages/NearAI/PageWrapper';
import { rfps } from '@/data/rfps';

export const getServerSideProps = (async (req) => {
  const slug = req.query.slug as string;
  const rfp = rfps.find((item) => item.slug === slug);

  if (!rfp)
    return {
      notFound: true,
    };

  return { props: { rfp } };
}) satisfies GetServerSideProps<{ rfp: (typeof rfps)[number] }>;

export default function RfpPost({ rfp }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <BlogWrapper>
      <MetaTags 
        title={`NEAR AI - ${rfp.title}`}
        description={rfp.excerpt}
      />
      <div className="mx-auto px-6 md:px-8 space-y-12">
        <div className="mb-8">
          <Link href="/rfps" className="inline-flex items-center text-[#00EB9A] hover:text-white transition-colors gap-2 py-2 px-4 bg-[#00EB9A]/10 hover:bg-[#00EB9A]/20 rounded-lg">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to RFPs</span>
          </Link>
        </div>
        
        <header className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">{rfp.title}</h1>

          <div className="flex items-center justify-center gap-4">
            <div className="text-center">
              <div className="font-medium text-white">{rfp.author.name}</div>
              <time className="text-sm text-[#AFD0C5]">{format(parseISO(rfp.date), 'MMMM d, yyyy')}</time>
            </div>
          </div>
        </header>

        <div
          className="space-y-12"
          dangerouslySetInnerHTML={{
            __html: rfp.content,
          }}
        />

        <a
          href={rfp.submitProposalUrl}
          target="_blank"
          className={`
            inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg
            bg-[#00EB9A] text-black font-medium
            hover:bg-[#00EB9A]/80 transition-colors
            mx-auto block w-fit
          `}
        >
          Submit Proposal <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </BlogWrapper>
  );
}
