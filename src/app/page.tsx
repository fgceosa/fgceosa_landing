import AboutUs from '@/components/home/AboutUs';
import Accessibility from '@/components/home/Accessibility';
import Blog from '@/components/home/Blog';
import CTA from '@/components/home/CTA';
import FAQ from '@/components/home/FAQ';
import GalleryCTA from '@/components/home/GalleryCTA';
import NewsEvents from '@/components/home/NewsEvents';
import OurImpact from '@/components/home/OurImpact';
import Statistics from '@/components/home/Statistics';
import Testimonials from '@/components/home/Testimonials';
import WhatWeDo from '@/components/home/WhatWeDo';
import { defaultMetadata } from '@/utils/generateMetaData';
import Hero from '@/components/home/Hero';
import HeroFeatures from '@/components/home/HeroFeatures';
import { Metadata } from 'next';

import ConnectionBanner from '@/components/home/ConnectionBanner';
import AboutFeatures from '@/components/home/AboutFeatures';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Home - FGCEOSA',
};

const page = () => {
  return (
    <main className="dark:bg-background-7 bg-white overflow-x-hidden">
      <Hero />
      <HeroFeatures />
      {/* <div className="bg-secondary h-[100px] w-full rounded-t-[10px] relative z-0" /> */}
      <AboutUs />
      <AboutFeatures />
      <WhatWeDo />
      <Statistics />
      <OurImpact />
      <GalleryCTA />
      <ConnectionBanner />
      <NewsEvents />
    </main>
  );
};

export default page;
