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
  },
  {
    id: '2',
    title: 'Years of Excellence',
    value: '50+',
    description: 'Preserving the heritage of FGC Enugu.',
  },
  {
    id: '3',
    title: 'Impactful Projects',
    value: '100+',
    description: 'Completed projects for the alma mater.',
  },
  {
    id: '4',
    title: 'Regional Chapters',
    value: '12+',
    description: 'Active chapters supporting members locally.',
  },
  {
    id: '5',
    title: 'Scholarships Awarded',
    value: '200+',
    description: 'Empowering the next generation of students.',
  },
];

const Statistics = () => {
  return (
    <section className="bg-background-2 dark:bg-background-5 relative overflow-hidden pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]">
      <div className="main-container mb-10">
          <div className="mx-auto max-w-[850px] space-y-5 text-center">
            <RevealAnimation delay={0.1}>
              <h2 className="text-black dark:text-white font-bold text-xl md:text-2xl lg:text-3xl">
                Empowering alumni <span className="text-secondary">strengthening community</span>
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
                    'hover:bg-secondary hover:dark:bg-background-8 border-stroke-4 dark:border-stroke-6 group relative z-0 flex min-h-[270px] w-full min-w-[360px] flex-col justify-between gap-y-8 overflow-hidden rounded-[20px] border p-8 transition-all duration-500 ease-in-out',
                    index === 0 && 'ml-8',
                  )}>
                  <div className="pointer-events-none absolute -top-[85%] -right-[60%] -z-10 size-[500px] transform opacity-0 transition-all duration-700 ease-out select-none group-hover:scale-105 group-hover:opacity-100">
                    <Image src={gradient24Img} alt="gradient" />
                  </div>
                  <div className="transform transition-all duration-500 ease-in-out group-hover:translate-y-[-4px]">
                    <p className="mb-2 text-base transition-colors duration-500 ease-in-out group-hover:text-white">
                      {item.title}
                    </p>
                    <h3 className="group-hover:text-white text-secondary dark:text-accent transition-colors duration-500 ease-in-out text-2xl md:text-3xl">
                      {item.value}
                    </h3>
                  </div>
                  <p className="group-hover:text-accent/60 text-secondary/60 dark:text-accent/60 transform transition-all duration-500 ease-in-out group-hover:translate-y-[4px]">
                    {item.description}
                  </p>
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
