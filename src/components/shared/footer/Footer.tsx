import RevealAnimation from '@/components/animation/RevealAnimation';
import { footerLinks } from '@/data/footer-data';
import { cn } from '@/utils/cn';
import behance from '@public/images/icons/behance.svg';
import dribbble from '@public/images/icons/dribbble.svg';
import facebook from '@public/images/icons/facebook.svg';
import instagram from '@public/images/icons/instagram.svg';
import linkedin from '@public/images/icons/linkedin.svg';
import youtube from '@public/images/icons/youtube.svg';
import gradientImg from '@public/images/ns-img-532.png';
import darkLogo from '@public/images/shared/logo-dark.svg';
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from '../ThemeToggle';
import FooterDivider from './FooterDivider';

import logoImg from '@public/images/fgceosa_logo.jpeg';

const Footer = ({ className }: { className?: string }) => {
  return (
    <footer className={cn('bg-[#3a0104] dark:bg-background-9 relative z-0 overflow-hidden text-white', className)}>
      <div className="main-container px-5">
        <div className="grid grid-cols-12 justify-between gap-x-0 gap-y-16 pt-16 pb-12 xl:pt-[90px]">
          <RevealAnimation delay={0.1}>
            <div className="col-span-12 xl:col-span-3">
              <div className="max-w-[306px]">
                <figure className="mb-6">
                  <Image src={logoImg} alt="FGCEOSA Logo" className="size-20 rounded-full object-cover border-2 border-white/10" />
                </figure>
                <p className="text-white/60 text-sm mt-4 mb-7 font-normal leading-relaxed">
                  Connecting generations of FGC Enugu alumni, fostering unity, and driving impactful change for our alma mater and community.
                </p>
              </div>
            </div>
          </RevealAnimation>

          <div className="col-span-12 grid grid-cols-12 gap-x-0 gap-y-12 xl:col-span-9">
            {footerLinks.map(({ title, links }, index) => (
              <div className="col-span-12 sm:col-span-6 md:col-span-3" key={title}>
                <RevealAnimation delay={0.2 + index * 0.1}>
                  <div className="space-y-6">
                    <p className="text-lg font-bold text-white">{title}</p>
                    <ul className="space-y-4">
                      {links.map(({ label, href }) => (
                        <li key={label}>
                          <Link href={href} className="text-white/60 hover:text-white transition-colors text-sm">
                            {label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </RevealAnimation>
              </div>
            ))}

            {/* Stay Connected Section */}
            <div className="col-span-12 sm:col-span-6 md:col-span-3">
              <RevealAnimation delay={0.5}>
                <div className="space-y-6">
                  <p className="text-lg font-bold text-white">Stay Connected</p>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Subscribe to our newsletter for the latest updates and events.
                  </p>
                  <form className="relative max-w-[280px]">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full bg-white/5 border border-white/10 rounded-md py-3 px-4 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/30"
                    />
                    <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-[#3a0104] size-8 rounded flex items-center justify-center hover:bg-white/90 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </button>
                  </form>

                  {/* Social Icons moved here */}
                  <div className="flex items-center gap-4 pt-2">
                    <Link target="_blank" href="https://www.facebook.com" className="hover:opacity-80 transition-opacity">
                      <Image className="size-5 invert" src={facebook} alt="Facebook" />
                    </Link>
                    <Link target="_blank" href="https://www.instagram.com" className="hover:opacity-80 transition-opacity">
                      <Image className="size-5 invert" src={instagram} alt="Instagram" />
                    </Link>
                    <Link target="_blank" href="https://www.linkedin.com" className="hover:opacity-80 transition-opacity">
                      <Image className="size-5 invert" src={linkedin} alt="LinkedIn" />
                    </Link>
                    <Link target="_blank" href="https://www.youtube.com" className="hover:opacity-80 transition-opacity">
                      <Image className="size-5 invert" src={youtube} alt="Youtube" />
                    </Link>
                  </div>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>

        <div className="relative pt-[26px] pb-[42px] text-center">
          <FooterDivider className="bg-white/5" />
          <RevealAnimation delay={0.7} offset={10} start="top 105%">
            <p className="text-white/30 text-xs font-normal">
              Copyright © 2024 FGCEOSA. All rights reserved. Pro Unitate.
            </p>
          </RevealAnimation>
        </div>
      </div>
    </footer>
  );
};

Footer.displayName = 'Footer';
export default Footer;
