import HeroImageCenter from '@public/images/fgc-building.jpg';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const HeroImages = () => {
  return (
    <div className="relative z-0 h-auto min-h-[300px] w-full flex justify-center md:justify-end md:h-[450px] lg:h-[550px]">
      <RevealAnimation delay={0.2} offset={100} useSpring={true} duration={2}>
        <figure className="relative -z-1 w-full max-w-[550px] md:right-[-120px] md:w-[600px] mt-6 md:mt-0">
          <Image
            src={HeroImageCenter}
            alt="FGCEOSA Hero"
            className="w-full shadow-[0_25px_100px_rgba(108,2,9,0.25)]"
            priority
            loading="eager"
          />
        </figure>
      </RevealAnimation>
    </div>
  );
};

export default HeroImages;
