import { MobileMenuGroup } from '@/components/shared/mobile-menu/MobileMenu';
import { FooterOneData } from '@/interface';

export const mobileMenuData: MobileMenuGroup[] = [
  {
    id: 'about-us',
    title: 'About Us',
    href: '/about',
  },
  {
    id: 'presidents-message',
    title: "President's Message",
    href: '/presidents-message',
  },
  {
    id: 'constitution',
    title: 'The Constitution',
    href: '/constitution',
  },
  {
    id: 'projects',
    title: 'Projects',
    href: '/projects',
  },
  {
    id: 'leadership',
    title: 'Leadership',
    href: '/exco-officers',
  },
  {
    id: 'contact',
    title: 'Contact',
    href: '/contact-us',
  },
];

export const footerData: FooterOneData[] = [
  {
    title: 'Quick Links',
    links: [
      { label: 'About FGCE', href: '/about' },
      { label: 'Exco Officers', href: '/exco-officers' },
      { label: 'Projects', href: '/projects' },
      { label: 'Contact Us', href: '/contact-us' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'The Constitution', href: '/constitution' },
      { label: 'Business Directory', href: '/directory' },
      { label: 'Forum', href: '/forum' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms & Conditions', href: '/terms-conditions' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Membership Policy', href: '/membership' },
    ],
  },
];
