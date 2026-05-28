import HeroImageCenter from '@public/images/fgc-building.jpg';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const HeroImages = () => {
  return (
    <div className="relative z-0 flex h-auto min-h-[300px] w-full justify-center md:h-[400px] md:justify-end lg:h-[400px]">
      <RevealAnimation delay={0.2} offset={100} useSpring={true} duration={2}>
        <div className="relative overflow-hidden rounded-[10px] shadow-2xl">
          <Image
            src={HeroImageCenter}
            alt="FGCEOSA Hero"
            className="h-[200px] w-full object-cover transition-transform duration-700 hover:scale-105 md:h-[400px]"
            priority
            loading="eager"
          />
        </div>
      </RevealAnimation>
    </div>
  );
};

export default HeroImages;
