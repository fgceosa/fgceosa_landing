import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import Image from 'next/image';
import img1 from '@public/images/gallery_1.png';
import img2 from '@public/images/gallery_2.png';
import img3 from '@public/images/gallery_3.png';
import img4 from '@public/images/gallery_4.png';

const GalleryCTA = () => {
  return (
    <section className="bg-secondary relative overflow-hidden py-20 lg:py-32">
      {/* Decorative gradients */}
       <div className="absolute top-0 right-0 h-full w-full opacity-10 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] h-[800px] w-[800px] rounded-full bg-white blur-[120px]" />
       </div>

      <div className="main-container relative z-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* LHS Content */}
          <div className="space-y-10 text-center lg:text-left">
            <div className="space-y-6">
              <RevealAnimation delay={0.1}>
                <h2 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl leading-tight">
                  Relive the Moments <br />
                  <span className="text-white/60 text-xl md:text-2xl lg:text-3xl">View our photo gallery</span>
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <p className="text-white/70 text-base md:text-lg max-w-[500px] mx-auto lg:mx-0">
                  Explore decades of memories, reunions, and impact. Our gallery captures the enduring spirit of the FGCEOSA community.
                </p>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.3}>
              <LinkButton
                href="/gallery"
                className="btn btn-white btn-lg rounded-md font-bold px-10 hover:bg-white/90">
                View Photo Gallery
              </LinkButton>
            </RevealAnimation>
          </div>

          {/* RHS Stacking Photos */}
          <div className="relative h-[400px] w-full md:h-[500px] lg:h-[600px]">
            <RevealAnimation delay={0.4} direction="right">
              <div className="relative h-full w-full">
                {/* Photo 1 - Top Left */}
                <div className="absolute top-0 left-0 w-[55%] h-[55%] p-2 transform -rotate-6 transition-all hover:rotate-0 hover:scale-110 hover:z-50 duration-500">
                   <div className="w-full h-full rounded-2xl border-4 md:border-8 border-white shadow-2xl overflow-hidden bg-white">
                      <Image src={img1} alt="Alumni 1" className="w-full h-full object-cover" />
                   </div>
                </div>
                {/* Photo 2 - Top Right */}
                <div className="absolute top-8 right-0 w-[50%] h-[50%] p-2 transform rotate-12 transition-all hover:rotate-0 hover:scale-110 hover:z-50 duration-500">
                   <div className="w-full h-full rounded-2xl border-4 md:border-8 border-white shadow-2xl overflow-hidden bg-white">
                      <Image src={img2} alt="Alumni 2" className="w-full h-full object-cover" />
                   </div>
                </div>
                {/* Photo 3 - Bottom Left */}
                <div className="absolute bottom-8 left-8 w-[50%] h-[50%] p-2 transform rotate-3 transition-all hover:rotate-0 hover:scale-110 hover:z-50 duration-500">
                   <div className="w-full h-full rounded-2xl border-4 md:border-8 border-white shadow-2xl overflow-hidden bg-white">
                      <Image src={img3} alt="Alumni 3" className="w-full h-full object-cover" />
                   </div>
                </div>
                {/* Photo 4 - Bottom Right */}
                <div className="absolute bottom-0 right-12 w-[55%] h-[55%] p-2 transform -rotate-12 transition-all hover:rotate-0 hover:scale-110 hover:z-50 duration-500">
                   <div className="w-full h-full rounded-2xl border-4 md:border-8 border-white shadow-2xl overflow-hidden bg-white">
                      <Image src={img4} alt="Alumni 4" className="w-full h-full object-cover" />
                   </div>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryCTA;
