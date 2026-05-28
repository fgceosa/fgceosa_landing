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
    <section className="dark:bg-background-6 relative pt-5">
      <div className="main-container">
        <div className="mb-7 grid grid-cols-1 items-center gap-y-14 lg:grid-cols-2 lg:gap-x-[97px]">
          {/* LHS Content */}
          <div className="lg:order-1">
            <RevealAnimation delay={0.1} className="flex justify-center lg:justify-start">
              <div className="border-secondary mb-6 inline-block rounded-lg border-2 bg-white px-4 py-2 shadow-sm">
                <span className="text-secondary font-bold tracking-wider uppercase">About FGCEOSA</span>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <h2 className="mb-6 text-center leading-tight font-bold tracking-tight text-black lg:text-left dark:text-white">
                A Legacy That <br />
                <span className="text-secondary relative inline-block">
                  Lives On
                  <span className="bg-secondary absolute -bottom-2 left-0 h-1.5 w-20 rounded-full" />
                </span>
              </h2>
            </RevealAnimation>

            <RevealAnimation delay={0.3}>
              <p className="dark:text-accent/80 mb-8 text-center text-lg leading-relaxed text-black lg:text-left">
                Founded by the enduring values of excellence, discipline and unity instilled at FGC Enugu, FGCEOSA
                connects past students across generations and borders{' '}
              </p>
            </RevealAnimation>

            <RevealAnimation delay={0.4}>
              <ul className="mb-10 space-y-4">
                {bulletPoints.map((point, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="bg-secondary flex size-6 shrink-0 items-center justify-center rounded-full">
                      <CheckIcon className="size-4 fill-white" />
                    </div>
                    <span className="dark:text-accent font-medium text-black">{point}</span>
                  </li>
                ))}
              </ul>
            </RevealAnimation>

            <RevealAnimation delay={0.5}>
              <LinkButton
                href="/about"
                insideSpan={false}
                className="btn btn-secondary btn-md md:btn-lg flex w-fit shrink-0 items-center gap-2 rounded-md px-5 font-bold md:px-8">
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
                <div className="absolute right-4 bottom-6 left-4 md:right-8 md:bottom-12 md:left-8">
                  <div className="bg-secondary relative flex min-h-[160px] items-center rounded-2xl p-6 shadow-xl md:p-10">
                    <div className="w-full sm:pr-[120px] md:pr-[180px] lg:pr-[220px]">
                      <p className="relative text-base leading-snug font-medium text-white italic md:text-xl lg:text-2xl">
                        <span className="absolute -top-4 -left-2 font-serif text-4xl opacity-50 md:-top-8 md:-left-4 md:text-6xl">
                          "
                        </span>
                        <span className="block">United by our past. Inspired to build the future.</span>
                      </p>
                    </div>

                    {/* Desktop Logo (Absolute & Overflowing) */}
                    <div className="border-secondary absolute top-1/2 -right-4 z-10 hidden -translate-y-1/2 rounded-full border-[6px] bg-white p-2 shadow-2xl sm:block md:-right-10 md:border-[10px] md:p-3">
                      <Image
                        src={logoImg}
                        alt="Logo"
                        className="size-28 rounded-full object-cover md:size-40 lg:size-48"
                      />
                    </div>
                  </div>

                  {/* Mobile Logo (Positioned below the box for better responsiveness) */}
                  <div className="-mt-6 flex justify-center sm:hidden">
                    <div className="border-secondary z-20 rounded-full border-4 bg-white p-1 shadow-xl">
                      <Image src={logoImg} alt="Logo" className="size-20 rounded-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
