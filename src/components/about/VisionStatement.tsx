import vision1Img from '@public/images/ns-img-353.png';
import vision2Img from '@public/images/ns-img-354.png';
import vision3Img from '@public/images/ns-img-355.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const VisionStatement = () => {
  return (
    <section className="pt-12 pb-14 ">
      <div className="main-container space-y-14 md:space-y-[70px]">
        <div className="mx-auto max-w-[780px] space-y-3 text-center">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-cyan mb-5">Passion meets purpose</span>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <h2 className="text-secondary font-bold leading-tight tracking-tight mx-auto sm:mx-0">FGCEOSA is defining the future of our alumni network.</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <p className="text-black dark:text-white/80 mx-auto sm:mx-0">
              Driven by the values of excellence and unity, FGCEOSA stands at the forefront of alumni engagement,
              connecting graduates across generations and borders. By fostering professional growth and supporting
              our alma mater, we build a legacy that lasts.
            </p>
          </RevealAnimation>
        </div>
        <article className="grid grid-cols-1 md:grid-cols-2 justify-center gap-8">
          <RevealAnimation delay={0.5} instant>
            <figure className="relative h-[300px] md:h-[450px] overflow-hidden rounded-[20px] shadow-xl">
              <Image
                src="/images/alumni_reunion.png"
                alt="FGCEOSA Global Reunion"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </figure>
          </RevealAnimation>
          <div className="space-y-8">
            <RevealAnimation delay={0.6} instant>
              <div className="bg-secondary/5 p-8 rounded-[20px] border border-secondary/10 h-full flex flex-col justify-center">
                <h3 className="text-secondary mb-4">Our Vision</h3>
                <p className="text-lg leading-relaxed font-medium text-black/70">
                  To be a world-class alumni association that fosters a lifelong bond among members,
                  empowering them to excel in their endeavors while significantly contributing to the
                  holistic development of our alma mater.
                </p>
              </div>
            </RevealAnimation>
          </div>
        </article>
      </div>
    </section>
  );
};

VisionStatement.displayName = 'VisionStatement';
export default VisionStatement;
