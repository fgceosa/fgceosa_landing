// crypto marketing navbar
'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import { MobileMenuProvider } from '@/context/MobileMenuContext';
import { mobileMenuData } from '@/data/navbar-data';
import { useNavbarScroll } from '@/hooks/useScrollHeader';
import { cn } from '@/utils/cn';
import logoDark from '@public/images/shared/logo-dark.svg';
import logoIcon from '@public/images/shared/logo.svg';
import mainLogo from '@public/images/shared/main-logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import MobileMenu from '../mobile-menu/MobileMenu';
import MobileMenuButton from '../mobile-menu/MobileMenuButton';
import CompanyMenu from './CompanyMenu';
import PartnershipMenu from './PartnershipMenu';
import PeopleAndCultureMenu from './PeopleAndCultureMenu';
import ResourcesMenu from './ResourcesMenu';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Membership', href: '/membership' },
  { label: 'Events', href: '/events' },
  { label: 'News & Announcements', href: '/blog' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact Us', href: '/contact-us' },
];

const Navbar = () => {
  const { isScrolled } = useNavbarScroll(150);

  return (
    <MobileMenuProvider>
      <header
        className={cn(
          'lp:!max-w-[1440px] fixed top-0 left-1/2 z-50 mx-auto w-full -translate-x-1/2 transition-all duration-500',
          isScrolled ? 'bg-secondary py-3 shadow-lg' : 'bg-secondary/90 py-5',
        )}>
        <RevealAnimation direction="up" offset={100} delay={0.1} instant>
          <div className="main-container flex items-center justify-between">
            <div className="flex items-center justify-center">
              <Link href="/" className="flex items-center gap-3">
                <figure className="size-12 shrink-0 overflow-hidden rounded-full border-2 border-accent/20 bg-white">
                  <Image
                    src="/images/fgceosa_logo.jpeg"
                    alt="FGCEOSA Logo"
                    width={60}
                    height={60}
                    className="size-full object-contain"
                    priority
                  />
                </figure>
                <div className="flex flex-col leading-tight">
                  <span className="text-heading-6 font-bold tracking-tight text-accent">FGCEOSA</span>
                  <span className="text-tagline-3 font-medium tracking-wider text-accent/80 uppercase">
                    FGC Enugu Ex-students association
                  </span>
                </div>
              </Link>
            </div>

            <nav className="hidden items-center lg:flex">
              <ul className="flex items-center gap-1">
                {navItems.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-tagline-2 text-accent/80 hover:text-accent px-2 py-2 font-medium transition-all duration-200">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <Link
                href="/login"
                className="text-tagline-2 text-accent border-white/60 hover:border-white flex items-center gap-1.5 rounded-md border-1 px-3 py-1.5 font-medium transition-all duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="size-4">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
                <span>Login</span>
              </Link>
              <Link
                href="/signup"
                className="btn btn-sm btn-primary bg-white text-secondary hover:bg-accent rounded-md border-none font-bold px-4 py-1.4">
                <span className="capitalize">Join Now</span>
              </Link>
            </div>

            <div className="lg:hidden">
              <MobileMenuButton />
            </div>
          </div>
        </RevealAnimation>
      </header>
      <MobileMenu menuData={mobileMenuData} />
    </MobileMenuProvider>
  );
};

Navbar.displayName = 'Navbar';
export default Navbar;
