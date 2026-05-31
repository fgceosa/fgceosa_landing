import AboutHero from '@/components/about/AboutHero';
import InstantTrustStrip from '@/components/about/InstantTrustStrip';
import OriginStory from '@/components/about/OriginStory';
import MissionVision from '@/components/about/MissionVision';
import WhatWeDo from '@/components/about/WhatWeDo';
import ImpactProof from '@/components/about/ImpactProof';
import AlumniStories from '@/components/about/AlumniStories';
import WhyJoinAbout from '@/components/about/WhyJoinAbout';
import LeadershipTeam from '@/components/about/LeadershipTeam';
import AboutTestimonials from '@/components/about/AboutTestimonials';
import AboutFinalCTA from '@/components/about/AboutFinalCTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'About Us - FGCEOSA',
};

const page = () => {
  return (
    <main className="bg-white dark:bg-background-7 pt-[120px]">
      <AboutHero />
      <InstantTrustStrip />
      <OriginStory />
      <MissionVision />
      <WhatWeDo />
      <ImpactProof />
      <AlumniStories />
      <WhyJoinAbout />
      <LeadershipTeam />
      <AboutTestimonials />
      <AboutFinalCTA />
    </main>
  );
};

export default page;
