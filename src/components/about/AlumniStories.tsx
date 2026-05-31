import React from 'react';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

// Note: Using placeholder images from the excos folder since they exist and show real people
import nadozieImg from '@public/images/excos/nadozie.jpeg';
import amaraImg from '@public/images/excos/Amara-Nzelu-Erikume-1st-Vice-President-resized.jpg';
import chidiogoImg from '@public/images/excos/Chidiogo-Ezejiofor-Financial-Secretary-resized.jpg';

interface StoryProps {
  name: string;
  gradYear: string;
  role: string;
  achievement: string;
  story: string;
  image: any;
  delay: number;
}

const StoryCard = ({ name, gradYear, role, achievement, story, image, delay }: StoryProps) => (
  <RevealAnimation delay={delay} direction="up">
    <div className="bg-white dark:bg-background-7 rounded-3xl overflow-hidden shadow-lg border border-gray-100 dark:border-background-6 group h-full flex flex-col">
      <div className="relative h-64 overflow-hidden">
        <Image 
          src={image} 
          alt={name} 
          fill 
          className="object-cover group-hover:scale-105 transition-transform duration-700" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div className="absolute bottom-4 left-6 right-6">
          <div className="inline-block bg-secondary text-white text-xs font-bold px-2 py-1 rounded mb-2">
            Class of {gradYear}
          </div>
          <h3 className="text-2xl font-bold text-white">{name}</h3>
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="mb-4 pb-4 border-b border-gray-100 dark:border-background-5">
          <div className="text-secondary font-semibold text-sm mb-1">Current Role</div>
          <div className="text-black dark:text-white font-medium">{role}</div>
        </div>
        
        <div className="mb-4 pb-4 border-b border-gray-100 dark:border-background-5">
          <div className="text-secondary font-semibold text-sm mb-1">Notable Achievement</div>
          <div className="text-black/80 dark:text-white/80 text-sm">{achievement}</div>
        </div>
        
        <div className="mt-auto">
          <p className="text-black/70 dark:text-white/70 italic text-sm">
            "{story}"
          </p>
        </div>
      </div>
    </div>
  </RevealAnimation>
);

const AlumniStories = () => {
  return (
    <section className="py-24 bg-white dark:bg-background-6 relative">
      <div className="main-container">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <RevealAnimation delay={0.1}>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-4">
                <span>Alumni Spotlight</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-6">
                A Network of <span className="text-secondary">Excellence</span>
              </h2>
              <p className="text-lg text-black/70 dark:text-white/70">
                Our alumni are making waves across the globe in every sector. Meet a few of the people who make our community extraordinary.
              </p>
            </div>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <StoryCard 
            delay={0.2}
            name="Nnadozie Eze"
            gradYear="1993"
            role="Managing Partner, XYZ Consulting"
            achievement="Led the $5M tech hub initiative in West Africa."
            story="FGCEOSA provided me with the initial seed of mentorship that shaped my career. Giving back now is a privilege, not an obligation."
            image={nadozieImg}
          />
          <StoryCard 
            delay={0.3}
            name="Amara Nzelu-Erikume"
            gradYear="1998"
            role="Chief Medical Director, HealthPlus Group"
            achievement="Established 3 free community clinics in Enugu."
            story="The discipline from FGC Enugu carried me through med school. Through the alumni network, I found the partners to launch my first clinic."
            image={amaraImg}
          />
          <StoryCard 
            delay={0.4}
            name="Chidiogo Ezejiofor"
            gradYear="2004"
            role="VP of Engineering, GlobalFinTech"
            achievement="Pioneered mobile payment security protocols."
            story="When I relocated to the UK, it was an older alumnus who helped me navigate the job market. That's the power of this community."
            image={chidiogoImg}
          />
        </div>
      </div>
    </section>
  );
};

export default AlumniStories;
