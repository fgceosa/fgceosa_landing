import AboutUs from '@/components/home/AboutUs';
import Accessibility from '@/components/home/Accessibility';
import Blog from '@/components/home/Blog';
import CTA from '@/components/home/CTA';
import FAQ from '@/components/home/FAQ';
import Hero from '@/components/home/Hero';
import HeroFeatures from '@/components/home/HeroFeatures';
import Services from '@/components/home/Services';
import Statistics from '@/components/home/Statistics';
import Testimonials from '@/components/home/Testimonials';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Home - FGCEOSA',
};

const page = () => {
  return (
    <main className="dark:bg-background-7 bg-white overflow-x-hidden">
      <div className="relative">
        <Hero />
        <div className="absolute left-1/2 bottom-0 w-full -translate-x-1/2 translate-y-1/2 z-20">
          <HeroFeatures />
        </div>
      </div>
      <Statistics />
      <AboutUs />
      <Services />

      <Accessibility />
      <Testimonials />
      <Blog />
      <FAQ />
      <CTA />
    </main>
  );
};

export default page;
