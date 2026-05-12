import RevealAnimation from '../animation/RevealAnimation';
import Image from 'next/image';
import Link from 'next/link';
import img1 from '@public/images/gallery_1.png';
import img2 from '@public/images/gallery_2.png';
import img3 from '@public/images/gallery_3.png';
import img4 from '@public/images/gallery_4.png';
import awardImg from '@public/images/ns-img-464.png';

const GalleryCTA = () => {
  return (
    <section className="py-16 md:py-12 bg-white overflow-hidden">
      <div className="main-container px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* LHS - Content Section */}
          <div className="lg:col-span-5 space-y-8 md:space-y-10 text-center lg:text-left order-1">
            <div className="space-y-6">
              <RevealAnimation delay={0.1}>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/5 rounded-full border border-secondary/10">
                  <div className="size-2 bg-secondary rounded-full animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">Our Legacy in Pictures</span>
                </div>
              </RevealAnimation>

              <RevealAnimation delay={0.2}>
                <h2 className="text-black font-bold leading-[1.1] tracking-tight">
                  One Family. Many Journeys. <br className="hidden md:block" />
                  <span className="text-secondary font-serif">Unbreakable bond.</span>
                </h2>
              </RevealAnimation>

              <RevealAnimation delay={0.3}>
                <p className="text-black/60 text-base md:text-lg max-w-[450px] mx-auto lg:mx-0 font-medium leading-relaxed">
                  From campus life to global achievements, our shared journey inspire generations.                </p>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.4}>
              <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
                <Link href="/gallery" className="group relative flex items-center justify-center gap-4 bg-secondary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 w-full sm:w-auto">
                  View Photo Gallery
                  <div className="flex items-center justify-center size-7 bg-white/20 rounded-full group-hover:translate-x-1.5 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="size-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </div>
                </Link>

              </div>
            </RevealAnimation>

            {/* Micro Stats */}
            <RevealAnimation delay={0.5}>
              <div className="flex items-center justify-center lg:justify-start gap-8 pt-8 border-t border-secondary/5">
                <div>
                  <p className="text-2xl font-black text-secondary">1,200+</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/40">Photos</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-secondary">45+</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/40">Years</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-secondary">150+</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/40">Events</p>
                </div>
              </div>
            </RevealAnimation>
          </div>

          {/* RHS - Dynamic Image Mosaic */}
          <div className="lg:col-span-7 order-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
              {/* Column 1 */}
              <RevealAnimation delay={0.2} direction="up">
                <div className="space-y-4 md:space-y-6">
                  <div className="relative h-[180px] sm:h-[250px] md:h-[300px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
                    <Image src={img1} alt="Gallery 1" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="relative h-[120px] sm:h-[180px] md:h-[200px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
                    <Image src={img2} alt="Gallery 2" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                </div>
              </RevealAnimation>

              {/* Column 2 - Main Hero Image */}
              <RevealAnimation delay={0.3} direction="up">
                <div className="space-y-4 md:space-y-6 pt-6 sm:pt-12">
                  <div className="relative h-[220px] sm:h-[320px] md:h-[380px] rounded-[32px] overflow-hidden shadow-2xl hover:shadow-secondary/20 transition-all duration-500 group border-4 border-white">
                    <Image src={awardImg} alt="Special Moment" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-linear-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                      <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">Impact & Excellence</span>
                    </div>
                  </div>
                  <div className="relative h-[150px] sm:h-[220px] md:h-[250px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
                    <Image src={img3} alt="Gallery 3" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                </div>
              </RevealAnimation>

              {/* Column 3 - Only visible from sm and up */}
              <RevealAnimation delay={0.4} direction="up">
                <div className="hidden sm:block space-y-4 md:space-y-6">
                  <div className="relative h-[150px] sm:h-[200px] md:h-[220px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
                    <Image src={img4} alt="Gallery 4" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="relative h-[200px] sm:h-[280px] md:h-[320px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
                    <Image src={img1} alt="Gallery 5" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                </div>
              </RevealAnimation>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GalleryCTA;
