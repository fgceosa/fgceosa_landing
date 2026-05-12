import RevealAnimation from '../animation/RevealAnimation';
import Image from 'next/image';
import Link from 'next/link';
import img1 from '@public/images/gallery_1.png';
import img2 from '@public/images/gallery_2.png';
import img3 from '@public/images/gallery_3.png';
import img4 from '@public/images/gallery_4.png';

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
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
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
    <section className="py-16 md:py-24 bg-[#F9FAFB] overflow-hidden">
      <div className="main-container px-4 sm:px-6 pt-15">
        <div className="mx-auto mb-20 max-w-[850px] text-center">
          {/* Entrance Badge */}
          <RevealAnimation delay={0.1}>
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="h-[2px] w-12 bg-secondary/20" />
              <div className="border-2 border-secondary/20 px-6 py-2.5 rounded-xl flex items-center gap-3 bg-white shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-5 text-secondary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.183 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                </svg>
                <span className="text-xs font-black uppercase tracking-[0.4em] text-secondary">WHAT WE DO</span>
              </div>
              <div className="h-[2px] w-12 bg-secondary/20" />
            </div>
          </RevealAnimation>

          <div>
            <RevealAnimation delay={0.2}>
              <h2 className="text-secondary font-bold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight">
                Empowering Alumni. <span className="text-black">Strengthening Community.</span>
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto mt-6 max-w-[550px] text-black/60 font-medium text-base md:text-lg leading-relaxed">
                Empowering our members while building a lasting legacy for our alma mater through strategic development and unity.
              </p>
            </RevealAnimation>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 pt-10">
          {data.map((item, index) => (
            <RevealAnimation key={index} delay={0.1 * (index + 1)}>
              <div className="group flex flex-col h-full overflow-visible rounded-[32px] border border-secondary/5 bg-white shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                <div className="relative h-60 rounded-t-[32px] overflow-visible">
                  <div className="absolute inset-0 rounded-t-[32px] overflow-hidden">
                    <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-linear-to-t from-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  {/* Icon at bottom middle of image */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-secondary text-white flex size-14 items-center justify-center rounded-2xl shadow-xl z-20 border-4 border-white transition-transform duration-500 group-hover:scale-110">
                    {item.icon}
                  </div>
                </div>
                <div className="p-8 pt-12 flex flex-col flex-1">
                  <h4 className="mb-3 text-xl font-black text-secondary tracking-tight">{item.title}</h4>
                  <p className="text-black/50 mb-8 text-sm leading-relaxed font-medium flex-1">
                    {item.text}
                  </p>
                  <Link href="#" className="inline-flex items-center gap-2 text-sm font-black text-secondary tracking-widest group/link">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="size-4 group-hover/link:translate-x-1.5 transition-transform duration-300">
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
