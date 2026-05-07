import { MobileMenuGroup } from '@/components/shared/mobile-menu/MobileMenu';
import { FooterOneData } from '@/interface';

export const mobileMenuData: MobileMenuGroup[] = [
  {
    id: 'home',
    title: 'Home',
    href: '/',
  },
  {
    id: 'about',
    title: 'About Us',
    href: '/about',
  },
  {
    id: 'membership',
    title: 'Membership',
    href: '/membership',
  },
  {
    id: 'events',
    title: 'Events',
    href: '/events',
  },
  {
    id: 'news',
    title: 'News & Announcements',
    href: '/blog',
  },
  {
    id: 'gallery',
    title: 'Gallery',
    href: '/gallery',
  },
  {
    id: 'contact',
    title: 'Contact Us',
    href: '/contact-us',
  },
];

export const footerData: FooterOneData[] = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Career', href: '/career' },
      { label: 'Case Studies', href: '/case-study' },
      { label: 'Contact Us', href: '/contact-us' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'FAQ', href: '/faq' },
      { label: 'Documentation', href: '/documentation' },
      { label: 'Tutorial', href: '/tutorial' },
      { label: 'Community', href: '/community' },
    ],
  },
  {
    title: 'Legal Policies',
    links: [
      { label: 'Terms & Conditions', href: '/terms-conditions' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Refund Policy', href: '/refund-policy' },
      { label: 'GDPR Compliance', href: '/gdpr' },
      { label: 'Affiliate Policy', href: '/affiliate-policy' },
    ],
  },
];
