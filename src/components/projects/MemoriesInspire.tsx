'use client';

import { useState } from 'react';
import RevealAnimation from '@/components/animation/RevealAnimation';
import Image from 'next/image';

const filterOptions = ['All', 'Events & Programs', 'Reviews', 'Projects', 'Achievements'];

const memoryItems = [
  { id: 1, category: 'Events & Programs', title: '2023 Annual Reunion', image: '/images/gallery_1.png' },
  { id: 2, category: 'Projects', title: 'Library Commissioning', image: '/images/library_renovation.png' },
  { id: 3, category: 'Achievements', title: 'Top Sports Award', image: '/images/sports_complex_upgrade.png' },
  { id: 4, category: 'Reviews', title: 'Student Testimonial', image: '/images/gallery_2.png' },
  { id: 5, category: 'Events & Programs', title: 'Mentorship Session', image: '/images/alumni_mentorship_session.png' },
  { id: 6, category: 'Achievements', title: 'Excellence in STEM', image: '/images/gallery_3.png' },
];

const MemoriesInspire = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredItems = activeFilter === 'All'
    ? memoryItems
    : memoryItems.filter(item => item.category === activeFilter);

  return (
    <section className="py-12 bg-white dark:bg-background-7">
      <div className="main-container">
        <div className="text-center mb-16 space-y-8">
          <RevealAnimation delay={0.1}>
            <h2 className="text-black dark:text-accent font-black capitalize">Memories that inspire</h2>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {filterOptions.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 ${activeFilter === filter
                    ? 'bg-secondary text-white shadow-xl scale-105'
                    : 'bg-secondary/5 text-secondary hover:bg-secondary/10'
                    }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <RevealAnimation key={item.id} delay={0.1} direction="up">
              <div className="group relative aspect-[4/3] rounded-[32px] overflow-hidden bg-secondary/5 shadow-lg border border-secondary/5">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-[#d4af37] text-[10px] font-black uppercase tracking-widest mb-2">{item.category}</span>
                  <h4 className="text-white text-xl font-black">{item.title}</h4>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemoriesInspire;
