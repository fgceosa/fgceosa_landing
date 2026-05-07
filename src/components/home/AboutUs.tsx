import { CheckIcon } from '@/icons';
import fgcBuildingImg from '@public/images/fgce-hero.png';
import logoImg from '@public/images/fgceosa_logo.jpeg';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const AboutUs = () => {
  const bulletPoints = [
    'Connecting alumni across generations worldwide.',
    'Supporting the development of our alma mater.',
    'Fostering professional and personal growth.',
    'Preserving the rich history of FGCE.',
  ];

  return (
    <section className="dark:bg-background-6 pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]">
      <div className="main-container">
        <div className="grid grid-cols-1 items-center gap-y-14 lg:grid-cols-2 lg:gap-x-[97px]">
          {/* LHS Content */}
          <div className="order-2 lg:order-1">
            <RevealAnimation delay={0.1}>
              <div className="bg-white mb-6 inline-block rounded-lg border-2 border-secondary px-4 py-2 shadow-sm">
                <span className="text-secondary font-bold uppercase tracking-wider">About FGCEOSA</span>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <h2 className="mb-6 text-black dark:text-white leading-tight font-bold tracking-tight text-3xl md:text-4xl lg:text-5xl">
                A Legacy That{' '}


                <span className="relative inline-block text-secondary">
                  Lives On
                  <div className="absolute -bottom-2 left-0 h-1.5 w-full bg-secondary rounded-full" />
                </span>
              </h2>
            </RevealAnimation>


            <RevealAnimation delay={0.3}>
              <p className="text-black dark:text-accent/80 mb-8 text-lg leading-relaxed">
                The Federal Government College Enugu Old Students Association (FGCEOSA) is a vibrant community of alumni
                dedicated to excellence, unity, and the continuous progress of our great alma mater.
              </p>
            </RevealAnimation>

            <RevealAnimation delay={0.4}>
              <ul className="mb-10 space-y-4">
                {bulletPoints.map((point, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="bg-secondary flex size-6 shrink-0 items-center justify-center rounded-md">
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
                className="btn btn-secondary btn-md flex shrink-0 items-center gap-2 rounded-md font-bold px-5 md:btn-lg md:px-6 w-fit">
                <div className="flex items-center gap-3 whitespace-nowrap">
                  <div className="bg-white p-0.5 rounded-full shrink-0">
                    <Image src={logoImg} alt="Logo" className="size-6 object-contain rounded-full" />
                  </div>
                  <span>Learn More About Us</span>
                </div>
              </LinkButton>
            </RevealAnimation>
          </div>

          {/* RHS Image */}
          <div className="order-1 lg:order-2">
            <RevealAnimation delay={0.4} direction="right">
              <div className="relative overflow-hidden rounded-[30px] shadow-2xl">
                <Image
                  src={fgcBuildingImg}
                  alt="FGCE Building"
                  className="h-[500px] w-full object-cover transition-transform duration-700 hover:scale-105 md:h-[600px]"
                />

                {/* Quote Overlay */}
                <div className="absolute bottom-8 left-8 right-8 rounded-2xl bg-black/40 p-6 backdrop-blur-md border border-white/20 flex items-center gap-6">
                  <div className="bg-white p-2 rounded-full shrink-0 shadow-lg">
                    <Image src={logoImg} alt="Logo" className="size-12 object-contain" />
                  </div>
                  <p className="text-white italic text-lg leading-tight font-medium">
                    "Pro Unitate: A bond that transcends time and space, uniting us in excellence and service."
                  </p>
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

