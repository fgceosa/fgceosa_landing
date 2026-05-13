import { CheckIcon } from '@/icons';
import fgcBuildingImg from '@public/images/fgce-hero.png';
import logoImg from '@public/images/fgceosa_logo.jpeg';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import AboutFeatures from './AboutFeatures';
import LinkButton from '../ui/button/LinkButton';

const AboutUs = () => {
  const bulletPoints = [
    'Promoting life long connections.',
    'Supporting the alma mater.',
    'Fostering professional and personal growth.',
    'Preserving the rich history of FGCE.',
  ];

  return (
    <section className="relative dark:bg-background-6 pt-10 pb-72">

      <div className="main-container">
        <div className="grid grid-cols-1 items-center gap-y-14 lg:grid-cols-2 lg:gap-x-[97px] mb-7">
          {/* LHS Content */}
          <div className="lg:order-1">
            <RevealAnimation delay={0.1}>
              <div className="bg-white mb-6 inline-block rounded-lg border-2 border-secondary px-4 py-2 shadow-sm">
                <span className="text-secondary font-bold uppercase tracking-wider">About FGCEOSA</span>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <h2 className="mb-6 text-black dark:text-white leading-tight font-bold tracking-tight">
                A Legacy That <br />
                <span className="relative inline-block text-secondary">
                  Lives On
                  <span className="absolute -bottom-2 left-0 h-1.5 w-20 bg-secondary rounded-full" />
                </span>
              </h2>
            </RevealAnimation>

            <RevealAnimation delay={0.3}>
              <p className="text-black dark:text-accent/80 mb-8 text-lg leading-relaxed">
                Founded by the enduring values of excellence, discipline and unity instilled at FGC Enugu, FGCEOSA connects past students across generations and borders             </p>
            </RevealAnimation>

            <RevealAnimation delay={0.4}>
              <ul className="mb-10 space-y-4">
                {bulletPoints.map((point, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="bg-secondary flex size-6 shrink-0 items-center justify-center rounded-full">
                      <CheckIcon className="size-4 fill-white" />
                    </div>
                    <span className="text-black dark:text-accent font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </RevealAnimation>

            <RevealAnimation delay={0.5}>
              <LinkButton
                href="/about"
                insideSpan={false}
                className="btn btn-secondary btn-md flex shrink-0 items-center gap-2 rounded-md font-bold px-5 md:btn-lg md:px-8 w-fit">
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <span>Learn More About Us</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    className="size-5 shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </LinkButton>
            </RevealAnimation>
          </div>

          {/* RHS Image */}
          <div className="lg:order-2">

            <RevealAnimation delay={0.4} direction="right">
              <div className="relative overflow-hidden rounded-[30px] shadow-2xl">
                <Image
                  src={fgcBuildingImg}
                  alt="FGCE Building"
                  className="h-[400px] w-full object-cover transition-transform duration-700 hover:scale-105 md:h-[600px]"
                />


                {/* Quote Overlay */}
                <div className="absolute bottom-6 left-4 right-4 md:bottom-12 md:left-8 md:right-8">
                  <div className="relative rounded-2xl bg-secondary p-6 md:p-10 shadow-xl min-h-[160px] flex items-center">
                    <div className="w-full sm:pr-[120px] md:pr-[180px] lg:pr-[220px]">
                      <p className="text-white italic text-base md:text-xl lg:text-2xl leading-snug font-medium relative">
                        <span className="text-4xl md:text-6xl absolute -top-4 md:-top-8 -left-2 md:-left-4 opacity-50 font-serif">"</span>
                        <span className="block">United by our past. Inspired to build the future.</span>
                      </p>
                    </div>

                    {/* Desktop Logo (Absolute & Overflowing) */}
                    <div className="absolute -right-4 md:-right-10 top-1/2 -translate-y-1/2 bg-white p-2 md:p-3 rounded-full shadow-2xl z-10 hidden sm:block border-[6px] md:border-[10px] border-secondary">
                      <Image
                        src={logoImg}
                        alt="Logo"
                        className="size-28 md:size-40 lg:size-48 object-cover rounded-full"
                      />
                    </div>
                  </div>

                  {/* Mobile Logo (Positioned below the box for better responsiveness) */}
                  <div className="flex justify-center -mt-6 sm:hidden">
                    <div className="bg-white p-1 rounded-full shadow-xl border-4 border-secondary z-20">
                      <Image
                        src={logoImg}
                        alt="Logo"
                        className="size-20 object-cover rounded-full"
                      />
                    </div>
                  </div>
                </div>



              </div>
            </RevealAnimation>
          </div>

        </div>
      </div>

      {/* Floating Features Section */}
      <div className="absolute left-1/2 bottom-0 w-full -translate-x-1/2 translate-y-1/2 z-20 pt-15">
        <AboutFeatures />
      </div>
    </section>
  );
};

export default AboutUs;
