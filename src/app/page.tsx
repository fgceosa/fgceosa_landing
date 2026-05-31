import Hero from '@/components/home/Hero';
import ImpactSnapshot from '@/components/home/ImpactSnapshot';
import WhyJoin from '@/components/home/WhyJoin';
import AlumniSpotlight from '@/components/home/AlumniSpotlight';
import CommunityImpact from '@/components/home/CommunityImpact';
import Testimonials from '@/components/home/Testimonials';
import NewsEvents from '@/components/home/NewsEvents';
import LeadershipSpotlight from '@/components/home/LeadershipSpotlight';
import FinalCTA from '@/components/home/FinalCTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Home - FGCEOSA',
};

const page = () => {
  return (
    <main className="dark:bg-background-7 bg-white overflow-x-hidden">
      <Hero />
      <ImpactSnapshot />
      <WhyJoin />
      <AlumniSpotlight />
      <CommunityImpact />
      <Testimonials />
      <NewsEvents />
      <LeadershipSpotlight />
      <FinalCTA />
    </main>
  );
};

export default page;
