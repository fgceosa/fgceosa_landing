import { FooterData } from '@/interface';

export const footerLinks: FooterData[] = [
  {
    title: 'Quick Links',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Impact', href: '/impact' },
      { label: 'News & Events', href: '/news-events' },
      { label: 'Photo Gallery', href: '/gallery' },
      { label: 'Contact Us', href: '/contact-us' },
    ],
  },
  {
    title: 'Membership',
    links: [
      { label: 'Join FGCEOSA', href: '/join' },
      { label: 'Membership Benefits', href: '/benefits' },
      { label: 'Member Directory', href: '/directory' },
    ],
  },
  {
    title: 'Get Involved',
    links: [
      { label: 'Donate', href: '/donate' },
      { label: 'Mentorship', href: '/mentorship' },
      { label: 'Project Sponsorship', href: '/sponsorship' },
    ],
  },
];
