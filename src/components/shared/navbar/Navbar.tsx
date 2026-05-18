// crypto marketing navbar
'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import { MobileMenuProvider } from '@/context/MobileMenuContext';
import { mobileMenuData } from '@/data/navbar-data';
import { useNavbarScroll } from '@/hooks/useScrollHeader';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileMenu from '../mobile-menu/MobileMenu';
import MobileMenuButton from '../mobile-menu/MobileMenuButton';
import NavbarDropdown from './NavbarDropdown';

const Navbar = () => {
  const { isScrolled } = useNavbarScroll(150);
  const pathname = usePathname();

  return (
    <MobileMenuProvider>
      <header
        className={cn(
          'fixed top-0 left-1/2 z-50 mx-auto w-full -translate-x-1/2 transition-all duration-500',
          isScrolled ? 'bg-secondary py-3 shadow-lg' : 'bg-secondary/90 py-5',
        )}>
        <RevealAnimation direction="up" offset={100} delay={0.1} instant>
          <div className="main-container flex items-center justify-between">
            <div className="flex items-center justify-center">
              <Link href="/" className="group flex items-center gap-3">
                <figure className="border-accent/20 size-10 shrink-0 overflow-hidden rounded-full border-2 bg-white transition-transform duration-500 group-hover:scale-110 md:size-12">
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
                  <span className="text-heading-6 text-accent font-bold tracking-tight">FGCEOSA</span>
                  <span className="md:text-tagline-3 text-accent/80 text-[9px] font-medium tracking-wider uppercase">
                    FGC Enugu Ex-students association
                  </span>
                </div>
              </Link>
            </div>

            <nav className="hidden items-center lg:flex">
              <ul className="flex items-center gap-1 xl:gap-2">
                {mobileMenuData.map((item) => {
                  const isActive = item.href === pathname || item.submenu?.some((sub) => sub.href === pathname);

                  return item.submenu ? (
                    <NavbarDropdown key={item.id} title={item.title} submenu={item.submenu} isActive={!!isActive} />
                  ) : (
                    <li key={item.id}>
                      <Link
                        href={item.href || '#'}
                        className={cn(
                          'text-tagline-2 group relative px-2 py-2 font-medium transition-all duration-200 xl:px-3',
                          isActive ? 'text-accent' : 'text-accent/80 hover:text-accent',
                        )}>
                        {item.title}
                        {/* Gold Bar Active State */}
                        <span
                          className={cn(
                            'absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 bg-[#d4af37] transition-all duration-300',
                            isActive ? 'w-full' : 'w-0 group-hover:w-1/2',
                          )}></span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <Link
                href="/login"
                className="text-tagline-2 text-accent flex items-center gap-1.5 rounded-md border-1 border-white/60 px-3 py-1.5 font-medium transition-all duration-200 hover:border-white">
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
                className="btn btn-sm btn-primary text-secondary hover:bg-accent py-1.4 rounded-md border-none bg-white px-4 font-bold">
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
