import HeroImageCenter from '@public/images/fgce-hero.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const HeroImages = () => {
  return (
    <div className="relative z-0 h-auto min-h-[350px] w-full flex justify-center md:justify-end md:h-[450px] lg:h-[500px]">
      <RevealAnimation delay={0.2} offset={100} useSpring={true} duration={2}>
        <figure className="relative -z-1 w-[90%] max-w-[450px] md:right-[-100px] md:w-[500px] lg:right-[-120px] lg:w-[600px] xl:right-[-150px] xl:w-[750px] mt-6 md:mt-0">
          <Image
            src={HeroImageCenter}
            alt="FGCEOSA Hero"
            className="w-full shadow-[0_20px_80px_rgba(108,2,9,0.2)] rounded-2xl border-4 border-white/10"
            priority
            loading="eager"
          />
        </figure>
      </RevealAnimation>
    </div>
  );
};

export default HeroImages;
