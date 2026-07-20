import ContactHero from '@/components/contact-us/ContactHero';
import ContactFormSection from '@/components/contact-us/ContactFormSection';
import ContactCTASection from '@/components/contact-us/ContactCTASection';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Contact Us - FGCEOSA',
  description: 'Get in touch with the All Federal Government College Enugu Ex-Students Association (aka FGCEOSA). We are here to help and connect with our alumni.',
};

const ContactUs = () => {
  return (
    <main className="dark:bg-background-8 bg-white overflow-x-hidden">
      <ContactHero />
      <ContactFormSection />
      <ContactCTASection />
    </main>
  );
};

export default ContactUs;
