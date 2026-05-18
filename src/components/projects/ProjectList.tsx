import RevealAnimation from '@/components/animation/RevealAnimation';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'Modern Library Renovation',
    category: 'Completed',
    description: 'A complete overhaul of the school library, providing modern study spaces and digital learning resources.',
    image: '/images/library_renovation.png',
  },
  {
    id: 2,
    title: 'Solar Power Installation',
    category: 'Ongoing',
    description: 'Implementing sustainable solar energy solutions to provide 24/7 electricity to classrooms.',
    image: '/images/solar_power_project.png',
  },
  {
    id: 3,
    title: 'Sports Complex Upgrade',
    category: 'Planned',
    description: 'Proposed renovation of the sports field, including a new running track and basketball court.',
    image: '/images/sports_complex_upgrade.png',
  },
];

const ProjectList = () => {
  return (
    <section className="py-10 bg-secondary/5 dark:bg-background-6">
      <div className="main-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-5">
          <div className="max-w-2xl">
            <RevealAnimation delay={0.1}>
              <h4 className="dark:text-accent font-black mb-4 capitalize text-black">projects making a difference</h4>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.2}>
            <Link
              href="/projects/all"
              className="flex items-center gap-2 text-secondary px-8 py-4 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-[#d4af37] transition-all"
            >
              View All Projects <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="size-5 shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path></svg>
            </Link>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <RevealAnimation key={project.id} delay={0.1 * (index + 1)} direction="up">
              <div className="group bg-white dark:bg-background-7 rounded-[32px] overflow-hidden border border-secondary/10 hover:shadow-2xl transition-all duration-500">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-secondary text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <h6 className="font-black text-black dark:text-accent transition-colors">
                    {project.title}
                  </h6>
                  <p className="text-black/60 dark:text-white/60 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center gap-2 text-secondary font-bold text-xs uppercase tracking-widest hover:gap-3 transition-all"
                  >
                    <span>Project Details</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectList;
