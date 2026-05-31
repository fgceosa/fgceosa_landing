'use client';

import { NavigationArrow, QuoteIcon } from '@/icons';
import { cn } from '@/utils/cn';
import avatar1 from '@public/images/excos/Chinyere-Atalaor-Legal-Adviser.jpg';
import avatar2 from '@public/images/excos/Peter-Ohabuenyiauditor.jpg';
import avatar3 from '@public/images/excos/sec-gen-obinna-anikwe-1.jpg';
import Image, { StaticImageData } from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import RevealAnimation from '../animation/RevealAnimation';

interface TestimonialReview {
  id: number;
  name: string;
  position: string;
  image: StaticImageData;
  text: string;
}

const testimonialReviews: TestimonialReview[] = [
  {
    id: 1,
    name: 'Chinyere Atalaor',
    position: 'Legal Adviser | Class of 1993',
    image: avatar1,
    text: 'FGCEOSA helped me reconnect with classmates after 20 years. The bond remains unbreakable, and it feels great to support our school.',
  },
  {
    id: 2,
    name: 'Peter Ohabuenyi',
    position: 'Auditor | Class of 2004',
    image: avatar2,
    text: "The mentorship network played a key role in my career transition. Alumni are always ready to lift others and share opportunities.",
  },
  {
    id: 3,
    name: 'Obinna Anikwe',
    position: 'Secretary General | Class of 1988',
    image: avatar3,
    text: "Supporting students through the FGCEOSA scholarship program gives me a direct way to give back to the institution that shaped me.",
  },
];

const Testimonials = () => {
  return (
    <section className="dark:bg-background-5 pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]">
      <div className="main-container">
        <div className="mx-auto mb-[70px] max-w-[850px] space-y-5 text-center">
          <RevealAnimation delay={0.1}>
            <div className="bg-secondary/5 border-secondary/10 inline-flex items-center gap-2 rounded-full border px-4 py-2 justify-center mx-auto">
              <span className="text-secondary text-[10px] font-black tracking-[0.2em] uppercase">Testimonials</span>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="text-black dark:text-white font-bold leading-tight">What Our <span className="text-secondary">Alumni Say</span></h2>
          </RevealAnimation>
        </div>
        <RevealAnimation delay={0.3}>
          <div className="relative">
            <div className="single-card-reviews-swiper">
              <Swiper
                className="swiper blog-article-swiper"
                slidesPerView={1}
                loop={true}
                effect="slide"
                speed={1000}
                spaceBetween={40}
                modules={[Autoplay, Navigation]}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                navigation={{
                  prevEl: '.single-card-reviews-prev',
                  nextEl: '.single-card-reviews-next',
                }}
                pagination={{
                  el: '.pagination-bullets',
                  clickable: true,
                  type: 'bullets',
                }}
                scrollbar={false}>
                <div className="swiper-wrapper">
                  {testimonialReviews.map((review) => (
                    <SwiperSlide key={review.id} className="swiper-slide">
                      <div className="flex items-center justify-center gap-8">
                        {/* Author Image */}
                        <figure
                          className={cn(
                            'size-[150px] overflow-hidden rounded-[53px] border-[0.5px] md:size-[300px]',
                            'border-stroke-4 dark:border-stroke-8 bg-(image:--color-gradient-9)',
                          )}>
                          <Image
                            src={review.image}
                            alt={`${review.name} testimonial`}
                            className="size-full object-cover"
                          />
                        </figure>

                        {/* Testimonial Content */}
                        <blockquote className="space-y-3 md:space-y-6">
                          <QuoteIcon />
                          <div className="space-y-3 md:space-y-4">
                            <p className="text-secondary dark:text-accent max-w-[385px]">{review.text}</p>
                            <div>
                              <h3 className="text-secondary dark:text-accent text-lg font-medium">{review.name}</h3>
                              <p className="text-secondary/60 dark:text-accent/60 text-tagline-2">{review.position}</p>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                    </SwiperSlide>
                  ))}
                </div>
              </Swiper>

              {/* Navigation Arrows */}
              <NavigationArrow direction="prev" className="single-card-reviews-prev left-0" />
              <NavigationArrow direction="next" className="single-card-reviews-next right-0" />
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Testimonials;
