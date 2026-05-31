'use client';

import RevealAnimation from '../animation/RevealAnimation';
import Image from 'next/image';
import Link from 'next/link';

const leaders = [
  {
    name: 'Nnadozie Eze',
    role: 'National President',
    bio: 'Class of 1993 | Honesty House',
    image: '/images/excos/nadozie.jpeg',
  },
  {
    name: 'Amara Nzelu-Erikume',
    role: '1st Vice President',
    bio: 'Class of 1998 | Independence House',
    image: '/images/excos/Amara-Nzelu-Erikume-1st-Vice-President-resized.jpg',
  },
  {
    name: 'Obinna Anikwe',
    role: 'Secretary General',
    bio: 'Class of 1991 | Peace House',
    image: '/images/excos/sec-gen-obinna-anikwe-1.jpg',
  },
];

const LeadershipSpotlight = () => {
  return (
    <section className="bg-white dark:bg-background-7 py-16 md:py-20 border-b border-gray-100 dark:border-white/5">
      <div className="main-container">
        <div className="mx-auto mb-16 max-w-[850px] text-center space-y-4">
          <RevealAnimation delay={0.1}>
            <div className="bg-secondary/5 border-secondary/10 inline-flex items-center gap-2 rounded-full border px-4 py-2">
              <span className="text-secondary text-[10px] font-black tracking-[0.2em] uppercase">
                Leadership Spotlight
              </span>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="text-black dark:text-white font-bold leading-tight">
              Driven by Vision. <span className="text-secondary">Led by Commitment.</span>
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto max-w-[600px] text-black/60 dark:text-white/60 text-base md:text-lg">
              Meet the executive leadership dedicating their time and effort to unite FGCE alumni and support our alma mater.
            </p>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {leaders.map((leader, index) => (
            <RevealAnimation key={index} delay={0.1 * (index + 1)}>
              <div className="group bg-white dark:bg-background-8 rounded-2xl overflow-hidden border border-secondary/5 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 text-center p-6 flex flex-col items-center">
                <div className="relative h-44 w-44 rounded-full overflow-hidden mb-6 border-4 border-secondary/10 group-hover:border-secondary transition-all duration-500">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold text-black dark:text-white mb-1">
                  {leader.name}
                </h4>
                <p className="text-sm font-bold text-secondary dark:text-cyan-400 uppercase tracking-widest mb-2">
                  {leader.role}
                </p>
                <p className="text-xs text-black/50 dark:text-white/60">
                  {leader.bio}
                </p>
              </div>
            </RevealAnimation>
          ))}
        </div>

        <div className="flex justify-center">
          <RevealAnimation delay={0.4}>
            <Link
              href="/exco-officers"
              className="group relative flex items-center justify-center gap-4 bg-secondary text-white px-8 py-4 rounded-[16px] font-black text-sm hover:shadow-2xl hover:bg-secondary/90 transition-all duration-500">
              Meet The Leadership Team
              <div className="flex items-center justify-center size-6 bg-white text-secondary rounded-full group-hover:translate-x-1.5 transition-transform duration-500 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="size-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSpotlight;
