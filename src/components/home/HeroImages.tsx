import HeroImageCenter from '@public/images/fgce-hero.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const HeroImages = () => {
  return (
    <div className="relative z-0 h-[400px] w-full flex justify-end">
      <RevealAnimation delay={0.2} offset={100} useSpring={true} duration={2}>
        <figure className="relative top-[10px] right-[-100px] -z-1 w-[500px] md:right-[-120px] md:w-[550px] lg:right-[-150px] lg:w-[650px] xl:right-[-200px] xl:w-[750px]">
          <Image
            src={HeroImageCenter}
            alt="FGCEOSA Hero"
            className="w-full shadow-[0_0_150px_rgba(108,2,9,0.15)]"
            priority
            loading="eager"
          />
        </figure>
      </RevealAnimation>
    </div>
  );
};

export default HeroImages;
