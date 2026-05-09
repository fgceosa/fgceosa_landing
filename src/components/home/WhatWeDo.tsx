import RevealAnimation from '../animation/RevealAnimation';
import Image from 'next/image';
import Link from 'next/link';
import img1 from '@public/images/ns-img-323.png';
import img2 from '@public/images/ns-img-324.png';
import img3 from '@public/images/ns-img-325.png';
import img4 from '@public/images/ns-img-326.png';

const data = [
  {
    image: img1,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    ),
    title: 'Networking & Mentorship',
    text: 'Connecting alumni across generations for career growth and professional guidance.',
  },
  {
    image: img2,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
      </svg>
    ),
    title: 'Alma Mater Support',
    text: 'Collaborating to improve infrastructure and learning standards at FGC Enugu.',
  },
  {
    image: img3,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.5 4.5L21.75 7m-1.5 12h1.5V5.25" />
      </svg>
    ),
    title: 'Welfare & Empowerment',
    text: 'Supporting members through exclusive benefits and community assistance programs.',
  },
  {
    image: img4,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.183 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    title: 'Events & Reunions',
    text: 'Organizing impactful gatherings to celebrate our shared heritage and unity.',
  },
];

const WhatWeDo = () => {
  return (
    <section className="pt-40 pb-20 md:pt-56 md:pb-32 lg:pt-[180px] lg:pb-[100px]">
      <div className="main-container">
        <div className="mx-auto mb-14 max-w-[850px] space-y-5 text-center">
          <RevealAnimation delay={0.1}>
             <div className="bg-white mb-6 inline-block rounded-lg border-2 border-secondary px-4 py-2 shadow-sm">
                <span className="text-secondary font-bold uppercase tracking-wider">What We Do</span>
              </div>
          </RevealAnimation>
          <div>
            <RevealAnimation delay={0.2}>
              <h2 className="mb-3">Our Core Initiatives</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto max-w-[520px]">Dedicated to the growth of our members and the excellence of our alma mater.</p>
            </RevealAnimation>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {data.map((item, index) => (
            <RevealAnimation key={index} delay={0.1 * (index + 1)}>
              <div className="group overflow-hidden rounded-2xl border border-stroke-4 bg-white shadow-sm transition-all duration-300 hover:shadow-xl dark:border-stroke-6 dark:bg-background-5">
                <div className="relative h-48 overflow-hidden">
                  <Image src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <div className="bg-secondary/10 text-secondary mb-4 flex size-12 items-center justify-center rounded-lg transition-colors group-hover:bg-secondary group-hover:text-white">
                    {item.icon}
                  </div>
                  <h4 className="mb-3 text-xl font-bold">{item.title}</h4>
                  <p className="text-secondary/60 dark:text-accent/80 mb-6 text-sm leading-relaxed">
                    {item.text}
                  </p>
                  <Link href="/learn-more" className="text-secondary flex items-center gap-2 text-sm font-bold transition-all hover:gap-3">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
