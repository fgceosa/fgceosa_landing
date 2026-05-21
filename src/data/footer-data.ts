import { FooterData } from '@/interface';

export const footerLinks: FooterData[] = [
  {
    title: 'Quick Links',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Impact', href: '#' },
      { label: 'Contact Us', href: '/contact-us' },
    ],
  },
  {
    title: 'Membership',
    links: [
      { label: 'Join FGCEOSA', href: '/signup' },
      { label: 'Chapters', href: '#' },
      { label: 'Member Directory', href: '#' },
    ],
  },
  {
    title: 'Get Involved',
    links: [
      { label: 'Donate', href: '#' },
      { label: 'Volunteer', href: '#' },
    ],
  },
];
