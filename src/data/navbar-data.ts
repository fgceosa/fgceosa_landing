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
      //   ],
      // },
      // {
      //   id: 'exco',
      //   title: 'Exco',
      //   submenu: [
      { id: 'constitution', label: 'The Constitution', href: '/constitution' },
      { id: 'exco-officers', label: 'Exco Officers', href: '/exco-officers' },
    ],
  },
  {
    id: 'alumni-world',
    title: 'Alumni World',
    submenu: [
      { id: 'projects', label: 'Project & Programmes', href: '/projects' },
      { id: 'spotlight', label: 'Alumni Spotlight', href: '#' },
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
