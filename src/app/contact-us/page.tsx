import ContactBanner from '@/components/contact-us/ContactBanner';
import ContactFormSection from '@/components/contact-us/ContactFormSection';
import ContactCTASection from '@/components/contact-us/ContactCTASection';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Contact Us - FGCEOSA',
  description: 'Get in touch with the Federal Government College Enugu Old Students Association. We are here to help and connect with our alumni.',
};

const ContactUs = () => {
  return (
    <main className="dark:bg-background-7 bg-white overflow-x-hidden">
      <ContactBanner />
      <ContactFormSection />
      <ContactCTASection />
    </main>
  );
};

export default ContactUs;
