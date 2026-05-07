import HeroImageCenter from '@public/images/fgce-hero.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const HeroImages = () => {
  return (
    <div className="relative z-0 ml-auto h-[650px] w-full max-w-[724px]">
      <RevealAnimation delay={0.2} offset={100} useSpring={true} duration={2}>
        <figure className="absolute top-[50px] left-0 -z-1 w-full max-w-full md:left-[-50px] lg:w-[650px] xl:w-[800px]">
          <Image
            src={HeroImageCenter}
            alt="FGCEOSA Hero"
            className="w-full shadow-[0_0_100px_rgba(108,2,9,0.2)] dark:shadow-[0_0_100px_rgba(108,2,9,0.4)]"
          />
        </figure>
      </RevealAnimation>
    </div>
  );
};

export default HeroImages;
