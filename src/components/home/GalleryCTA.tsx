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
    <section className="overflow-hidden bg-white py-16 md:py-12">
      <div className="main-container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">
          {/* LHS - Content Section */}
          <div className="order-1 space-y-8 text-center md:space-y-10 lg:col-span-5 lg:text-left">
            <div className="space-y-6">
              <RevealAnimation delay={0.1}>
                <div className="bg-secondary/5 border-secondary/10 inline-flex items-center gap-2 rounded-full border px-4 py-2">
                  <div className="bg-secondary size-2 animate-pulse rounded-full" />
                  <span className="text-secondary text-[10px] font-black tracking-[0.2em] uppercase">
                    Our Legacy in Pictures
                  </span>
                </div>
              </RevealAnimation>

              <RevealAnimation delay={0.2}>
                <h2 className="leading-[1.1] font-bold tracking-tight text-black">
                  One Family. Many Journeys. <br className="hidden md:block" />
                  <span className="text-secondary font-serif">Unbreakable bond.</span>
                </h2>
              </RevealAnimation>

              <RevealAnimation delay={0.3}>
                <p className="mx-auto max-w-[450px] text-base leading-relaxed font-medium text-black/60 md:text-lg lg:mx-0">
                  From campus life to global achievements, our shared journey inspire generations.{' '}
                </p>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.4}>
              <div className="flex flex-col items-center justify-center gap-6 sm:flex-row lg:justify-start">
                <Link
                  href="#"
                  className="group bg-secondary relative flex w-full items-center justify-center gap-4 rounded-2xl px-10 py-5 text-lg font-bold text-white transition-all duration-500 hover:scale-105 hover:shadow-2xl sm:w-auto">
                  View Photo Gallery
                  <div className="flex size-7 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-1.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                      stroke="currentColor"
                      className="size-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </div>
                </Link>
              </div>
            </RevealAnimation>

            {/* Micro Stats */}
            <RevealAnimation delay={0.5}>
              <div className="border-secondary/5 flex items-center justify-center gap-8 border-t pt-8 lg:justify-start">
                <div>
                  <p className="text-secondary text-2xl font-black">1,200+</p>
                  <p className="text-secondary/40 text-[10px] font-bold tracking-widest uppercase">Photos</p>
                </div>
                <div>
                  <p className="text-secondary text-2xl font-black">45+</p>
                  <p className="text-secondary/40 text-[10px] font-bold tracking-widest uppercase">Years</p>
                </div>
                <div>
                  <p className="text-secondary text-2xl font-black">150+</p>
                  <p className="text-secondary/40 text-[10px] font-bold tracking-widest uppercase">Events</p>
                </div>
              </div>
            </RevealAnimation>
          </div>

          {/* RHS - Dynamic Image Mosaic */}
          <div className="order-2 lg:col-span-7">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6">
              {/* Column 1 */}
              <RevealAnimation delay={0.2} direction="up">
                <div className="space-y-4 md:space-y-6">
                  <div className="group relative h-[180px] overflow-hidden rounded-3xl shadow-lg transition-all duration-500 hover:shadow-2xl sm:h-[250px] md:h-[300px]">
                    <Image
                      src={img1}
                      alt="Gallery 1"
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="group relative h-[120px] overflow-hidden rounded-3xl shadow-lg transition-all duration-500 hover:shadow-2xl sm:h-[180px] md:h-[200px]">
                    <Image
                      src={img2}
                      alt="Gallery 2"
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>
              </RevealAnimation>

              {/* Column 2 - Main Hero Image */}
              <RevealAnimation delay={0.3} direction="up">
                <div className="space-y-4 pt-6 sm:pt-12 md:space-y-6">
                  <div className="hover:shadow-secondary/20 group relative h-[220px] overflow-hidden rounded-[32px] border-4 border-white shadow-2xl transition-all duration-500 sm:h-[320px] md:h-[380px]">
                    <Image
                      src={awardImg}
                      alt="Special Moment"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="from-secondary/80 absolute inset-0 flex items-end bg-linear-to-t to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <span className="text-[10px] font-black tracking-[0.2em] text-white uppercase">
                        Impact & Excellence
                      </span>
                    </div>
                  </div>
                  <div className="group relative h-[150px] overflow-hidden rounded-3xl shadow-lg transition-all duration-500 hover:shadow-2xl sm:h-[220px] md:h-[250px]">
                    <Image
                      src={img3}
                      alt="Gallery 3"
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>
              </RevealAnimation>

              {/* Column 3 - Only visible from sm and up */}
              <RevealAnimation delay={0.4} direction="up">
                <div className="hidden space-y-4 sm:block md:space-y-6">
                  <div className="group relative h-[150px] overflow-hidden rounded-3xl shadow-lg transition-all duration-500 hover:shadow-2xl sm:h-[200px] md:h-[220px]">
                    <Image
                      src={img4}
                      alt="Gallery 4"
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="group relative h-[200px] overflow-hidden rounded-3xl shadow-lg transition-all duration-500 hover:shadow-2xl sm:h-[280px] md:h-[320px]">
                    <Image
                      src={img1}
                      alt="Gallery 5"
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
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
