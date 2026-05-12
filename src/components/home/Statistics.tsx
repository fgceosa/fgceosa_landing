import { cn } from '@/utils/cn';
import gradient24Img from '@public/images/ns-img-512.png';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';

const data = [
  {
    id: '1',
    title: 'Alumni Network',
    value: '5,000+',
    description: 'Connected alumni across the globe.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    ),
  },
  {
    id: '2',
    title: 'Years of Excellence',
    value: '50+',
    description: 'Preserving the heritage of FGC Enugu.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
      </svg>
    ),
  },
  {
    id: '3',
    title: 'Impactful Projects',
    value: '100+',
    description: 'Completed projects for the alma mater.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 .621-.504 1.125-1.125 1.125H4.875c-.621 0-1.125-.504-1.125-1.125v-4.25m16.5 0a2.25 2.25 0 0 0-2.25-2.25H5.625a2.25 2.25 0 0 0-2.25 2.25m16.5 0v2.25a2.25 2.25 0 0 1-2.25 2.25H5.625a2.25 2.25 0 0 1-2.25-2.25v-2.25m13.5-3V4.625c0-.621-.504-1.125-1.125-1.125H8.25c-.621 0-1.125.504-1.125 1.125v4.25" />
      </svg>
    ),
  },
  {
    id: '4',
    title: 'Regional Chapters',
    value: '12+',
    description: 'Active chapters supporting members locally.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
  },
  {
    id: '5',
    title: 'Scholarships Awarded',
    value: '200+',
    description: 'Empowering the next generation of students.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
  },
];

const Statistics = () => {
  return (
    <section className="bg-background-2 dark:bg-background-5 relative overflow-hidden py-16 md:py-12">
      <div className="main-container mb-10">
        <div className="mx-auto max-w-[850px] space-y-5 text-center">
          <RevealAnimation delay={0.1}>
            <h2 className="text-black dark:text-white font-bold">
              Our Community <span className="text-secondary">in numbers.</span>
            </h2>
          </RevealAnimation>
        </div>
      </div>

      <RevealAnimation delay={0.1}>
        <div className="relative">
          <div className="dark:from-background-5 absolute top-0 left-0 z-40 h-full w-[15%] bg-gradient-to-r from-background-2 to-transparent md:w-[20%]" />
          <div className="dark:from-background-5 absolute top-0 right-0 z-40 h-full w-[15%] bg-gradient-to-l from-background-2 to-transparent md:w-[20%]" />

          <Marquee pauseOnHover={true} autoFill={true}>
            <div className="mb-14 flex items-center justify-center max-md:gap-x-8 max-md:gap-y-[42px] md:gap-8">
              {data.map((item, index) => (
                <div
                  key={item.id}
                  className={cn(
                    'hover:bg-secondary hover:dark:bg-background-8 border-stroke-4 dark:border-stroke-6 group relative z-0 flex min-h-[200px] w-full min-w-[280px] flex-col justify-between gap-y-6 overflow-hidden rounded-[20px] border p-6 transition-all duration-500 ease-in-out',
                    index === 0 && 'ml-8',
                  )}>
                  <div className="pointer-events-none absolute -top-[85%] -right-[60%] -z-10 size-[500px] transform opacity-0 transition-all duration-700 ease-out select-none group-hover:scale-105 group-hover:opacity-100">
                    <Image src={gradient24Img} alt="gradient" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="bg-secondary/10 text-secondary p-3 rounded-xl group-hover:bg-white group-hover:text-secondary transition-colors duration-500">
                      {item.icon}
                    </div>
                  </div>

                  <div className="transform transition-all duration-500 ease-in-out group-hover:translate-y-[-4px]">
                    <h3 className="group-hover:text-white text-secondary dark:text-accent font-black transition-colors duration-500 ease-in-out text-xl md:text-2xl">
                      {item.value}
                    </h3>
                    <p className="mb-1 text-sm font-medium transition-colors duration-500 ease-in-out group-hover:text-white/80">
                      {item.title}
                    </p>

                    <p className="group-hover:text-white/60 text-black dark:text-accent/60 text-xs transform transition-all duration-500 ease-in-out group-hover:translate-y-[4px]">
                      {item.description}
                    </p>
                  </div>

                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default Statistics;
