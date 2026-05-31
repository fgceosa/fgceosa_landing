import { MobileMenuGroup } from '@/components/shared/mobile-menu/MobileMenu';
import { FooterOneData } from '@/interface';

export const mobileMenuData: MobileMenuGroup[] = [
  {
    id: 'about',
    title: 'About',
    submenu: [
      { id: 'about-us', label: 'About Us', href: '/about' },
      { id: 'presidents-message', label: "President's Message", href: '/presidents-message' },
      { id: 'constitution', label: 'The Constitution', href: '/constitution' },
    ],
  },
  {
    id: 'community',
    title: 'Community',
    submenu: [
      { id: 'directory', label: 'Alumni Directory', href: '/directory' },
      { id: 'chapters', label: 'Chapters', href: '#' },
      { id: 'spotlight', label: 'Alumni Spotlight', href: '#spotlight' },
    ],
  },
  {
    id: 'impact',
    title: 'Impact',
    submenu: [
      { id: 'projects', label: 'Projects', href: '/projects' },
      { id: 'scholarships', label: 'Scholarships', href: '/projects#scholarships' },
    ],
  },
  {
    id: 'events',
    title: 'Events',
    href: '#events',
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
