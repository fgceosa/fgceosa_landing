import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import HeroFeatures from './HeroFeatures';
import HeroImages from './HeroImages';

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-[130px] pb-[100px] lg:pb-[200px]">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 -z-1 h-full w-full opacity-40 blur-[100px]">
        <div className="bg-secondary absolute top-0 right-0 h-[700px] w-[700px] rounded-full translate-x-1/4 -translate-y-1/4"></div>
      </div>
      <div className="absolute top-0 left-0 -z-1 h-full w-full opacity-50 blur-[120px]">
        <div className="bg-secondary absolute bottom-0 left-0 h-[600px] w-[600px] rounded-full -translate-x-1/4 translate-y-1/4"></div>
      </div>

      {/* Central Divider Glow */}
      <div className="absolute top-1/2 left-[55%] -z-1 h-full w-full -translate-x-1/2 -translate-y-1/2 opacity-60 blur-[120px]">
        <div
          style={{ backgroundColor: '#CA9B9C' }}
          className="absolute top-1/2 left-1/2 h-[900px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        ></div>
      </div>

      <div className="main-container">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 lg:gap-x-12">
          <div className="md:pr-10 lg:pr-16">
            <div className="space-y-10 md:space-y-14">
              <div className="space-y-5 text-center md:text-left">
                <RevealAnimation delay={0.1}>
                  <span className="badge border-secondary bg-white text-secondary uppercase border-2 font-bold rounded-md">
                    PRO UNITATE
                  </span>
                </RevealAnimation>
                <div className="space-y-4">
                  <RevealAnimation delay={0.2}>
                    <h2 className="text-3xl font-bold text-black md:text-4xl lg:text-5xl xl:text-6xl">
                      Stronger Together.{' '}
                      <br />
                      United Forever.{' '}
                      <br />
                      <span className="font-bold text-secondary">Pro Unitate.</span>
                    </h2>
                  </RevealAnimation>
                  <RevealAnimation delay={0.3}>
                    <p className="mx-auto max-w-[550px] text-sm text-black md:mx-0 md:text-base">
                      FGCEOSA is a global community of proud alumni of Federal Government College Enugu, connecting
                      generations, empowering members and creating lasting impact.
                    </p>
                  </RevealAnimation>
                </div>
              </div>
              <RevealAnimation delay={0.4}>
                <div className="flex flex-wrap items-center justify-center gap-3 md:flex-nowrap md:justify-start">
                  <LinkButton
                    href="/signup"
                    insideSpan={false}
                    className="btn btn-secondary btn-md flex shrink-0 items-center gap-2 rounded-md font-bold px-5 md:btn-lg md:px-6">
                    <div className="flex items-center gap-2 whitespace-nowrap">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="size-5 shrink-0">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a5.97 5.97 0 0 0-.942 3.197M12 10.5a3.375 3.375 0 1 0 0-6.75 3.375 3.375 0 0 0 0 6.75ZM12 10.5a3.375 3.375 0 1 0 0-6.75 3.375 3.375 0 0 0 0 6.75Zm-5.625 2.625a3.375 3.375 0 1 0 0-6.75 3.375 3.375 0 0 0 0 6.75Zm11.25 0a3.375 3.375 0 1 0 0-6.75 3.375 3.375 0 0 0 0 6.75Z"
                        />
                      </svg>
                      <span>Join the Community</span>
                    </div>
                  </LinkButton>
                  <LinkButton
                    href="/about"
                    insideSpan={false}
                    className="btn btn-outline border-secondary text-secondary hover:bg-secondary hover:text-accent btn-lg flex shrink-0 items-center gap-2 rounded-md font-bold px-6">
                    <div className="flex items-center gap-2 whitespace-nowrap">
                      <span>Learn More</span>
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
                </div>
              </RevealAnimation>
            </div>
          </div>

          <HeroImages />
        </div>
      </div>
      <HeroFeatures />
    </section>
  );
};

export default Hero;
