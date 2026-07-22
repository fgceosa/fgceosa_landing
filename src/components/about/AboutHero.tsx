import fgcBuildingImg from '@public/images/fgce-hero.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const AboutHero = () => {
  return (
    <section className="relative dark:bg-background-6 pt-10 pb-20">
      <div className="main-container">
        <div className="grid grid-cols-1 items-center gap-y-14 lg:grid-cols-2 lg:gap-x-12 mb-7">
          {/* LHS Content */}
          <div className="lg:order-1 flex flex-col justify-center h-full">
            <RevealAnimation delay={0.1}>
              <div className="bg-white mb-6 inline-block rounded-lg border-2 border-secondary px-4 py-2 shadow-sm">
                <span className="text-secondary font-bold uppercase tracking-wider">About FGCEOSA</span>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <h1 className="mb-6 text-black dark:text-white leading-tight font-extrabold tracking-tight text-4xl md:text-5xl lg:text-6xl">
                A Global Alumni Network Built on <span className="text-secondary">Legacy</span>, <span className="text-secondary">Connection</span>, and <span className="text-secondary">Impact</span>
              </h1>
            </RevealAnimation>

            <RevealAnimation delay={0.3}>
              <p className="text-black dark:text-accent/80 mb-8 text-lg md:text-xl leading-relaxed font-medium">
                FGCEOSA connects thousands of alumni of Federal Government College Enugu across generations and continents — empowering careers, mentorship, and lifelong community impact.
              </p>
            </RevealAnimation>

            <RevealAnimation delay={0.4}>
              <div className="flex flex-wrap gap-4">
                <LinkButton
                  href="/signup"
                  insideSpan={false}
                  className="btn btn-secondary btn-md md:btn-lg rounded-md font-bold px-6 md:px-8 w-fit text-white">
                  <span className="!normal-case !first-letter:normal-case inline-flex items-center">
                    <span className="mr-1.5">Join</span>
                    <span className="uppercase">FGCEOSA</span>
                  </span>
                </LinkButton>
                <LinkButton
                  href="#impact"
                  insideSpan={false}
                  className="btn bg-white dark:bg-background-5 text-secondary border-2 border-secondary hover:bg-secondary hover:text-white transition-colors duration-300 btn-md md:btn-lg rounded-md font-bold px-6 md:px-8 w-fit">
                  Explore Our Impact
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>

          {/* RHS Image */}
          <div className="lg:order-2 h-full">
            <RevealAnimation delay={0.4} direction="right">
              <div className="relative overflow-hidden rounded-[30px] shadow-2xl h-full min-h-[400px] lg:min-h-[600px]">
                <Image
                  src={fgcBuildingImg}
                  alt="FGCE Alumni Gathered"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                {/* Gradient overlay for better text readability if we add text inside later */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
