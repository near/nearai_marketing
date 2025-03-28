import { MetaTags } from '@/components/MetaTags';
import PageWrapper from '@/components/pages/NearAI/PageWrapper';
import CareersContent from '@/components/pages/NearAI/CareersContent';

const CareersPage = () => {
  return (
    <PageWrapper withAnimation={true}>
      <MetaTags title="Careers at NEAR AI - Join Our Team" description="Build the future of user-owned AI with us. Explore career opportunities at NEAR AI." />
      <CareersContent />
    </PageWrapper>
  );
};

export default CareersPage;
