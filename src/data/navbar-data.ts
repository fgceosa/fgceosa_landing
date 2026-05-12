import { MobileMenuGroup } from '@/components/shared/mobile-menu/MobileMenu';
import { FooterOneData } from '@/interface';

export const mobileMenuData: MobileMenuGroup[] = [
  // {
  //   id: 'home',
  //   title: 'Home',
  //   href: '/',
  // },
  {
    id: 'about',
    title: 'About',
    submenu: [
      { id: 'about-fgce', label: 'About FGCE', href: '/about' },
      { id: 'presidents-message', label: "President's Message", href: '/presidents-message' },
      { id: 'membership', label: 'Membership', href: '/membership' },
      //   ],
      // },
      // {
      //   id: 'exco',
      //   title: 'Exco',
      //   submenu: [
      { id: 'constitution', label: 'The Constitution', href: '/constitution' },
      { id: 'exco-officers', label: 'Exco Officers', href: '/exco-officers' },
      { id: 'financial-report', label: 'Financial Report', href: '/financial-report' },
    ],
  },
  {
    id: 'alumni-world',
    title: 'Alumni World',
    submenu: [
      { id: 'projects', label: 'Project & Programmes', href: '/projects' },
      { id: 'spotlight', label: 'Alumni Spotlight', href: '/spotlight' },
    ],
  },
  {
    id: 'news-events',
    title: 'News and Events',
    submenu: [
      { id: 'reunion', label: 'Reunion Current Year', href: '/reunion' },
      { id: 'fgce-50', label: 'FGCE @ 50', href: '/fgce-at-50' },
    ],
  },
  {
    id: 'community',
    title: 'Community',
    submenu: [
      { id: 'directory', label: 'Business Directory', href: '/directory' },
      { id: 'groups', label: 'Groups', href: '/groups' },
    ],
  },
  {
    id: 'contact',
    title: 'Contact Us',
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
      { label: 'Financial Report', href: '/financial-report' },
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
