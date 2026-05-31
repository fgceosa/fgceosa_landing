import HeroImageCenter from '@public/images/fgc-building-new.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const HeroImages = () => {
  return (
    <div className="relative z-0 w-full h-[300px] md:h-full md:min-h-[500px] lg:min-h-[600px] mb-8 md:mb-0">
      <RevealAnimation delay={0.2} offset={100} useSpring={true} duration={2}>
        <div className="relative w-full h-[300px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-[16px] shadow-2xl">
          <Image
            src={HeroImageCenter}
            alt="Federal Government College Enugu"
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            priority
            loading="eager"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </RevealAnimation>
    </div>
  );
};

export default HeroImages;
