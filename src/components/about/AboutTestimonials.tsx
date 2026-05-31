'use client';

import { QuoteIcon } from '@/icons';
import Image from 'next/image';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import RevealAnimation from '../animation/RevealAnimation';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import avatar1 from '@public/images/excos/Chinyere-Atalaor-Legal-Adviser.jpg';
import avatar2 from '@public/images/excos/Peter-Ohabuenyiauditor.jpg';
import avatar3 from '@public/images/excos/sec-gen-obinna-anikwe-1.jpg';

const testimonials = [
  {
    id: 1,
    name: 'Chinyere Atalaor',
    role: 'Legal Adviser | Class of 1993',
    image: avatar1,
    quote: 'FGCEOSA helped me reconnect with classmates after 20 years. The bond remains unbreakable, and it feels great to support our school. It’s more than an association; it’s family.',
  },
  {
    id: 2,
    name: 'Peter Ohabuenyi',
    role: 'Auditor | Class of 2004',
    image: avatar2,
    quote: 'The mentorship network played a key role in my career transition. Alumni are always ready to lift others and share opportunities. Joining was the best career move I made.',
  },
  {
    id: 3,
    name: 'Obinna Anikwe',
    role: 'Secretary General | Class of 1988',
    image: avatar3,
    quote: 'Through FGCEOSA, I contributed to a school project I’m proud of. Supporting students through the scholarship program gives me a direct way to give back to the institution that shaped me.',
  },
];

const AboutTestimonials = () => {
  return (
    <section className="py-24 bg-white dark:bg-background-6 relative">
      <div className="main-container">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <RevealAnimation delay={0.1}>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-4">
                <span>Member Voices</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-6">
                Hear from Our <span className="text-secondary">Community</span>
              </h2>
            </div>
          </RevealAnimation>
        </div>

        <RevealAnimation delay={0.2} direction="up">
          <div className="max-w-4xl mx-auto">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              className="about-testimonial-swiper !pb-14"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="bg-gray-50 dark:bg-background-7 rounded-3xl p-8 md:p-12 text-center mx-4 md:mx-12 relative shadow-sm border border-gray-100 dark:border-background-5">
                    <div className="w-12 h-12 text-secondary/20 absolute top-6 left-6">
                      <QuoteIcon />
                    </div>
                    
                    <p className="text-lg md:text-xl xl:text-2xl text-black/80 dark:text-white/80 leading-relaxed italic mb-8 relative z-10">
                      "{testimonial.quote}"
                    </p>
                    
                    <div className="flex flex-col items-center justify-center">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-secondary mb-4 shadow-md">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="text-xl font-bold text-black dark:text-white">{testimonial.name}</h4>
                      <p className="text-secondary font-medium">{testimonial.role}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </RevealAnimation>

      </div>
    </section>
  );
};

export default AboutTestimonials;
