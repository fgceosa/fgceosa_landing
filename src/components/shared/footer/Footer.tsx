'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';
import { footerLinks } from '@/data/footer-data';
import { cn } from '@/utils/cn';
import facebook from '@public/images/icons/facebook.svg';
import instagram from '@public/images/icons/instagram.svg';
import linkedin from '@public/images/icons/linkedin.svg';
import youtube from '@public/images/icons/youtube.svg';
import logoImg from '@public/images/fgceosa_logo.jpeg';
import Image from 'next/image';
import Link from 'next/link';
import FooterDivider from './FooterDivider';
import { useState } from 'react';

const FooterLinkGroup = ({
  title,
  links,
  index,
}: {
  title: string;
  links: { label: string; href: string; target?: string }[];
  index: number;
}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="w-full">
      <RevealAnimation delay={0.2 + index * 0.1}>
        <div className="py-6 lg:py-0">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="group flex w-full items-center justify-between text-left lg:block lg:cursor-default">
            <div className="relative inline-block pb-2">
              <p className="text-base font-bold tracking-wider text-white uppercase">{title}</p>
              <div
                className="absolute bottom-0 left-0 h-1 w-8 rounded-full transition-all duration-300 group-hover:w-12"
                style={{ backgroundColor: '#950C12' }}
              />
            </div>
            <span className={cn('transition-transform duration-300 lg:hidden', isOpen ? 'rotate-180' : '')}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </span>
          </button>

          <ul
            className={cn(
              'mt-6 space-y-4 overflow-hidden transition-all duration-300 lg:max-h-none lg:opacity-100',
              isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 lg:max-h-none lg:opacity-100',
            )}>
            {links.map(({ label, href, target }) => (
              <li key={label}>
                <Link
                  href={href}
                  target={target}
                  className="group flex items-center text-sm font-medium text-white/60 transition-all hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </RevealAnimation>
    </div>
  );
};

const Footer = ({ className }: { className?: string }) => {
  return (
    <footer className={cn('bg-secondary dark:bg-background-9 relative z-0 overflow-hidden text-white', className)}>
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col justify-between gap-16 pt-16 pb-12 lg:flex-row lg:gap-24 xl:pt-[100px]">
          {/* Logo & Description */}
          <RevealAnimation delay={0.1}>
            <div className="w-full space-y-8 lg:w-[400px]">
              <div className="flex items-center gap-4">
                <figure className="shrink-0">
                  <Image
                    src={logoImg}
                    alt="FGCEOSA Logo"
                    className="size-16 rounded-full border-2 border-white/10 object-cover shadow-xl"
                  />
                </figure>
                <div className="flex flex-col">
                  <span className="text-xl font-bold tracking-wider text-white">FGCEOSA</span>
                  <span className="text-[10px] leading-tight font-bold tracking-widest text-white/50 uppercase">
                    FGC Enugu <br /> Old Students Association
                  </span>
                </div>
              </div>
              <p className="max-w-[550px] text-base leading-relaxed font-normal text-white/50">
                Connecting generations of FGC Enugu alumni, fostering unity, and driving impactful change for our alma
                mater and community.
              </p>
            </div>
          </RevealAnimation>

          {/* Links Section - Responsive Grid that stacks vertically on smaller screens */}
          <div className="grid flex-1 grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            {footerLinks.map((item, index) => (
              <FooterLinkGroup key={item.title} title={item.title} links={item.links} index={index} />
            ))}

            {/* Stay Connected Section */}
            <div className="w-full py-6 lg:py-0">
              <RevealAnimation delay={0.5}>
                <div className="space-y-6">
                  <div className="relative inline-block pb-2">
                    <p className="text-base font-bold tracking-wider text-white uppercase">STAY CONNECTED</p>
                    <div
                      className="absolute bottom-0 left-0 h-1 w-8 rounded-full"
                      style={{ backgroundColor: '#950C12' }}
                    />
                  </div>

                  {/* Social Icons */}
                  <div className="flex items-center gap-4 pt-1">
                    <Link
                      target="_blank"
                      href="#"
                      className="group rounded-full border border-white/10 bg-white/5 transition-all hover:scale-110 hover:bg-white">
                      <Image
                        className="size-5 transition-all group-hover:brightness-0"
                        src={facebook}
                        alt="Facebook"
                        width={30}
                        height={30}
                      />
                    </Link>
                    <Link
                      target="_blank"
                      href="#"
                      className="group rounded-full border border-white/10 bg-white/5 transition-all hover:scale-110 hover:bg-white">
                      <Image
                        className="size-5 transition-all group-hover:brightness-0"
                        src={instagram}
                        alt="Instagram"
                        width={30}
                        height={30}
                      />
                    </Link>
                    <Link
                      target="_blank"
                      href="#"
                      className="group rounded-full border border-white/10 bg-white/5 transition-all hover:scale-110 hover:bg-white">
                      <Image
                        className="size-5 transition-all group-hover:brightness-0"
                        src={linkedin}
                        alt="LinkedIn"
                        width={30}
                        height={30}
                      />
                    </Link>
                    <Link
                      target="_blank"
                      href="#"
                      className="group rounded-full border border-white/10 bg-white/5 transition-all hover:scale-110 hover:bg-white">
                      <Image
                        className="size-5 transition-all group-hover:brightness-0"
                        src={youtube}
                        alt="Youtube"
                        width={30}
                        height={30}
                      />
                    </Link>
                  </div>

                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative mt-8 border-t border-white/10 pt-[20px] pb-[30px]">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-3">
            {/* Sect 1: Motto */}
            <RevealAnimation delay={0.7} offset={10}>
              <div className="space-y-1 text-center md:text-left">
                <p className="text-sm font-bold tracking-[0.2em] uppercase" style={{ color: '#D4AF37' }}>
                  PRO UNITATE
                </p>
                <p className="text-[10px] leading-relaxed font-medium tracking-widest text-white/40">
                  United by our past, <br className="hidden md:block" /> inspired to build the future.
                </p>
              </div>
            </RevealAnimation>

            {/* Sect 2: Logo & Values */}
            <RevealAnimation delay={0.8} offset={10}>
              <div className="flex flex-col items-center gap-2 text-center">
                <Image src={logoImg} alt="FGCEOSA Small Logo" className="size-8 opacity-40 contrast-125 grayscale" />
                <p className="text-[10px] font-bold tracking-[0.3em] text-white/40">Excellence • Discipline • Unity</p>
              </div>
            </RevealAnimation>

            {/* Sect 3: Legal & Copyright */}
            <RevealAnimation delay={0.9} offset={10}>
              <div className="flex flex-col items-center gap-2 text-center md:items-end md:text-right">
                <p className="text-[10px] font-bold tracking-wider text-white/50 uppercase">
                  © {new Date().getFullYear()} FGCEOSA. All rights reserved.
                </p>
                <div className="flex items-center gap-4">
                  <Link
                    href="#"
                    className="text-[10px] font-bold tracking-widest text-white/40 transition-colors hover:text-white">
                    Privacy Policy
                  </Link>
                  <span className="text-[10px] text-white/20">|</span>
                  <Link
                    href="#"
                    className="text-[10px] font-bold tracking-widest text-white/40 transition-colors hover:text-white">
                    Terms of Use
                  </Link>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.displayName = 'Footer';
export default Footer;
