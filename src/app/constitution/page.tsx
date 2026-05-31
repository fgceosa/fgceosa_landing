import ConstitutionHero from '@/components/constitution/ConstitutionHero';
import WhyItMatters from '@/components/constitution/WhyItMatters';
import ConstitutionOverview from '@/components/constitution/ConstitutionOverview';
import KeyHighlightsExpanded from '@/components/constitution/KeyHighlightsExpanded';
import TrustLegitimacy from '@/components/constitution/TrustLegitimacy';
import DocumentAccess from '@/components/constitution/DocumentAccess';
import WhatThisMeansForYou from '@/components/constitution/WhatThisMeansForYou';
import ConstitutionCTA from '@/components/constitution/ConstitutionCTA';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Constitution — FGCEOSA Governance Framework',
  description: 'Explore how FGCEOSA is governed, structured, and operated. Read the constitution summary or download the full document.',
};

export default function ConstitutionPage() {
  return (
    <main className="bg-white dark:bg-background-7 overflow-x-hidden">
      <ConstitutionHero />
      <WhyItMatters />
      <ConstitutionOverview />
      <KeyHighlightsExpanded />
      <TrustLegitimacy />
      <DocumentAccess />
      <WhatThisMeansForYou />
      <ConstitutionCTA />
    </main>
  );
}
