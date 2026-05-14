import AboutCTA from '@/components/about/CTA';
import OurMission from '@/components/about/OurMission';
import OurSuccess from '@/components/about/OurSuccess';
import Team from '@/components/about/Team';
import VisionStatement from '@/components/about/VisionStatement';
import WhyChooseUs from '@/components/about/WhyChooseUs';
import AboutUs from '@/components/home/AboutUs';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'About Us - FGCEOSA',
};

const page = () => {
  return (
    <main className="bg-white dark:bg-background-7 pt-[120px]">
      <AboutUs />
      <VisionStatement />
      <OurMission />
      <OurSuccess />
      <WhyChooseUs />
      <Team />
    </main>
  );
};

export default page;
