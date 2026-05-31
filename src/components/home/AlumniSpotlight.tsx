'use client';

import RevealAnimation from '../animation/RevealAnimation';
import Image from 'next/image';
import Link from 'next/link';

const alumni = [
  {
    name: 'Nnadozie Eze',
    classSet: 'Class of 1993 | Honesty House',
    role: 'National President & Business Leader',
    story: 'Leading the alumni association with integrity and vision. Nnadozie has dedicated years to coordinating global chapters, promoting mentorship, and executing multi-million naira infrastructure projects at our alma mater.',
    image: '/images/excos/nadozie.jpeg',
  },
  {
    name: 'Amara Nzelu-Erikume',
    classSet: 'Class of 1998 | Independence House',
    role: '1st Vice President & Energy Executive',
    story: 'Amara coordinates partnerships and welfare programs across the association. She is deeply passionate about mentoring young class sets and driving female alumni empowerment initiatives.',
    image: '/images/excos/Amara-Nzelu-Erikume-1st-Vice-President-resized.jpg',
  },
  {
    name: 'Odera Udutchay',
    classSet: 'Class of 2007 | Honesty House',
    role: '2nd Vice President & Tech Entrepreneur',
    story: 'Representing a bridge between generations. Odera leads digital transformation and engagement strategies for the global community, keeping young alumni connected and active.',
    image: '/images/excos/Odera-Udutchay-2nd-Vice-President-resized.jpg',
  },
];

const AlumniSpotlight = () => {
  return (
    <section id="spotlight" className="bg-[#F9FAFB] dark:bg-background-6 py-16 md:py-20 border-b border-gray-100 dark:border-white/5 scroll-mt-24">
      <div className="main-container">
        <div className="mx-auto mb-16 max-w-[850px] text-center space-y-4">
          <RevealAnimation delay={0.1}>
            <div className="bg-secondary/5 border-secondary/10 inline-flex items-center gap-2 rounded-full border px-4 py-2">
              <span className="text-secondary text-[10px] font-black tracking-[0.2em] uppercase">
                Alumni Spotlight
              </span>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="text-black dark:text-white font-bold leading-tight">
              Inspiring Journeys. <span className="text-secondary">Global Impact.</span>
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto max-w-[600px] text-black/60 dark:text-white/60 text-base md:text-lg">
              Meet some of our outstanding alumni who are making waves in their respective fields and carrying the Pro Unitate legacy forward.
            </p>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {alumni.map((person, index) => (
            <RevealAnimation key={index} delay={0.1 * (index + 1)}>
              <div className="group bg-white dark:bg-background-8 rounded-2xl overflow-hidden border border-secondary/5 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full">
                <div className="relative h-72 w-full overflow-hidden">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover transition-transform duration-750 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-secondary text-white text-[10px] font-black px-3 py-1.5 rounded-lg uppercase tracking-wider shadow-md">
                    {person.classSet}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-black dark:text-white mb-1 group-hover:text-secondary transition-colors duration-300">
                      {person.name}
                    </h4>
                    <p className="text-xs font-bold text-secondary dark:text-cyan-400 uppercase tracking-widest mb-4">
                      {person.role}
                    </p>
                    <p className="text-sm text-black/60 dark:text-white/60 leading-relaxed italic">
                      "{person.story}"
                    </p>
                  </div>
                  <div className="pt-6 border-t border-secondary/5 mt-6">
                    <Link href="#" className="inline-flex items-center gap-2 text-xs font-black text-secondary uppercase tracking-widest group/link">
                      Read Full Story
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="size-3.5 group-hover/link:translate-x-1.5 transition-transform duration-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlumniSpotlight;
