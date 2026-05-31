'use client';

import RevealAnimation from '../animation/RevealAnimation';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: 'Scholarship Schemes',
    metric: '75+ Students Funded',
    description: 'Empowering secondary school students with tuition support, boarding fees, and academic materials to ensure no brilliant mind is left behind.',
    image: '/images/alumni_mentorship_session.png',
  },
  {
    title: 'Library Modernization',
    metric: '10,000+ Books & Digital Hub',
    description: 'Renovating the school library into a state-of-the-art learning resource centre, fully equipped with digital research facilities.',
    image: '/images/library_renovation.png',
  },
  {
    title: 'Solar Power Installation',
    metric: 'Uninterrupted Power for Labs',
    description: 'Providing sustainable energy solutions to key classrooms and laboratories, enabling students to perform practical exams without blackout worries.',
    image: '/images/solar_power_project.png',
  },
  {
    title: 'Sports Complex Renovation',
    metric: 'Upgraded Multi-sport Facilities',
    description: 'Restoring basketball courts, athletic tracks, and assembly arenas to foster physical health, teamwork, and recreational excellence.',
    image: '/images/sports_complex_upgrade.png',
  },
];

const CommunityImpact = () => {
  return (
    <section id="projects" className="bg-white dark:bg-background-7 py-16 md:py-20 border-b border-gray-100 dark:border-white/5 scroll-mt-24">
      <div className="main-container">
        <div className="mx-auto mb-16 max-w-[850px] text-center space-y-4">
          <RevealAnimation delay={0.1}>
            <div className="bg-secondary/5 border-secondary/10 inline-flex items-center gap-2 rounded-full border px-4 py-2">
              <span className="text-secondary text-[10px] font-black tracking-[0.2em] uppercase">
                Community Impact
              </span>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="text-black dark:text-white font-bold leading-tight">
              Transforming Our <span className="text-secondary">Alma Mater.</span>
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto mt-6 max-w-[580px] text-black/60 dark:text-white/60 text-base md:text-lg">
              Through scholarships, infrastructure modernization, and mentorship, we are building a better environment for the next generation of leaders.
            </p>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <RevealAnimation key={index} delay={0.1 * (index + 1)}>
              <div className="group bg-white dark:bg-background-8 border border-secondary/5 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col sm:flex-row h-full">
                <div className="relative w-full sm:w-56 h-56 sm:h-auto shrink-0 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-black text-secondary dark:text-cyan-400 uppercase tracking-widest block mb-2">
                      {project.metric}
                    </span>
                    <h4 className="text-xl font-bold text-black dark:text-white mb-3 group-hover:text-secondary transition-colors duration-300">
                      {project.title}
                    </h4>
                    <p className="text-sm text-black/60 dark:text-white/60 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="pt-6 border-t border-secondary/5 mt-6">
                    <Link href="/projects" className="inline-flex items-center gap-2 text-xs font-black text-secondary uppercase tracking-widest group/link">
                      View Project Details
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="size-3.5 group-hover/link:translate-x-1.5 transition-transform duration-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityImpact;
