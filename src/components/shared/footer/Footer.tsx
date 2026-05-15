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

const FooterLinkGroup = ({ title, links, index }: { title: string; links: { label: string; href: string }[]; index: number }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="w-full">
      <RevealAnimation delay={0.2 + index * 0.1}>
        <div className="py-6 lg:py-0">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-between w-full lg:cursor-default lg:block text-left group"
          >
            <div className="relative inline-block pb-2">
              <p className="text-base font-bold text-white uppercase tracking-wider">{title}</p>
              <div className="absolute bottom-0 left-0 w-8 h-1 rounded-full group-hover:w-12 transition-all duration-300" style={{ backgroundColor: "#950C12" }} />
            </div>
            <span className={cn("lg:hidden transition-transform duration-300", isOpen ? "rotate-180" : "")}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </span>
          </button>

          <ul className={cn(
            "mt-6 space-y-4 overflow-hidden transition-all duration-300 lg:max-h-none lg:opacity-100",
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 lg:max-h-none lg:opacity-100"
          )}>
            {links.map(({ label, href }) => (
              <li key={label}>
                <Link href={href} className="group flex items-center text-white/60 hover:text-white transition-all text-sm font-medium">
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
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-24 pt-16 pb-12 xl:pt-[100px]">
          {/* Logo & Description */}
          <RevealAnimation delay={0.1}>
            <div className="w-full lg:w-[400px] space-y-8">
              <div className="flex items-center gap-4">
                <figure className="shrink-0">
                  <Image src={logoImg} alt="FGCEOSA Logo" className="size-16 rounded-full object-cover border-2 border-white/10 shadow-xl" />
                </figure>
                <div className="flex flex-col">
                  <span className="text-xl font-bold tracking-wider text-white">FGCEOSA</span>
                  <span className="text-[10px] font-bold leading-tight text-white/50 tracking-widest uppercase">
                    FGC Enugu <br /> Old Students Association
                  </span>
                </div>
              </div>
              <p className="text-white/50 text-base font-normal leading-relaxed max-w-[550px]">
                Connecting generations of FGC Enugu alumni, fostering unity, and driving impactful change for our alma mater and community.
              </p>
            </div>
          </RevealAnimation>

          {/* Links Section - Responsive Grid that stacks vertically on smaller screens */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {footerLinks.map((item, index) => (
              <FooterLinkGroup key={item.title} title={item.title} links={item.links} index={index} />
            ))}

            {/* Stay Connected Section */}
            <div className="w-full py-6 lg:py-0">
              <RevealAnimation delay={0.5}>
                <div className="space-y-6">
                  <div className="relative inline-block pb-2">
                    <p className="text-base font-bold text-white uppercase tracking-wider">STAY CONNECTED</p>
                    <div className="absolute bottom-0 left-0 w-8 h-1 rounded-full" style={{ backgroundColor: "#950C12" }} />
                  </div>

                  {/* Social Icons */}
                  <div className="flex items-center gap-4 pt-1">
                    <Link target="_blank" href="#" className="group hover:scale-110 transition-all bg-white/5 rounded-full hover:bg-white border border-white/10">
                      <Image className="size-5 transition-all group-hover:brightness-0" src={facebook} alt="Facebook" width={30} height={30} />
                    </Link>
                    <Link target="_blank" href="#" className="group hover:scale-110 transition-all bg-white/5 rounded-full hover:bg-white border border-white/10">
                      <Image className="size-5 transition-all group-hover:brightness-0" src={instagram} alt="Instagram" width={30} height={30} />
                    </Link>
                    <Link target="_blank" href="#" className="group hover:scale-110 transition-all bg-white/5 rounded-full hover:bg-white border border-white/10">
                      <Image className="size-5 transition-all group-hover:brightness-0" src={linkedin} alt="LinkedIn" width={30} height={30} />
                    </Link>
                    <Link target="_blank" href="#" className="group hover:scale-110 transition-all bg-white/5 rounded-full hover:bg-white border border-white/10">
                      <Image className="size-5 transition-all group-hover:brightness-0" src={youtube} alt="Youtube" width={30} height={30} />
                    </Link>
                  </div>

                  <p className="text-white/50 text-sm leading-relaxed">
                    Subscribe to our newsletter for the latest updates.
                  </p>

                  <form className="relative max-w-[280px] group">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full bg-white/5 border border-white/10 rounded-lg py-3.5 px-4 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-all focus:bg-white/10"
                    />
                    <button className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-white text-secondary h-9 px-3 rounded-md flex items-center justify-center hover:bg-white/90 transition-all hover:scale-105 active:scale-95 shadow-[0_4px_0_0_#d1d5db] active:shadow-none active:translate-y-[-40%]">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </button>
                  </form>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative pt-[20px] pb-[30px] border-t border-white/10 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-10">
            {/* Sect 1: Motto */}
            <RevealAnimation delay={0.7} offset={10}>
              <div className="space-y-1 text-center md:text-left">
                <p className="text-sm font-bold tracking-[0.2em] uppercase" style={{ color: "#D4AF37" }}>PRO UNITATE</p>
                <p className="text-[10px] text-white/40 font-medium tracking-widest leading-relaxed">
                  United by our past, <br className="hidden md:block" /> inspired to build the future.
                </p>
              </div>
            </RevealAnimation>

            {/* Sect 2: Logo & Values */}
            <RevealAnimation delay={0.8} offset={10}>
              <div className="flex flex-col items-center gap-2 text-center">
                <Image src={logoImg} alt="FGCEOSA Small Logo" className="size-8 opacity-40 grayscale contrast-125" />
                <p className="text-[10px] text-white/40 font-bold tracking-[0.3em]">
                  Excellence • Discipline • Unity
                </p>
              </div>
            </RevealAnimation>

            {/* Sect 3: Legal & Copyright */}
            <RevealAnimation delay={0.9} offset={10}>
              <div className="flex flex-col items-center md:items-end gap-2 text-center md:text-right">
                <p className="text-[10px] text-white/50 font-bold uppercase tracking-wider">
                  © {new Date().getFullYear()} FGCEOSA. All rights reserved.
                </p>
                <div className="flex items-center gap-4">
                  <Link href="#" className="text-[10px] text-white/40 hover:text-white transition-colors font-bold tracking-widest">
                    Privacy Policy
                  </Link>
                  <span className="text-white/20 text-[10px]">|</span>
                  <Link href="#" className="text-[10px] text-white/40 hover:text-white transition-colors font-bold tracking-widest">
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
