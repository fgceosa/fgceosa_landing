import RevealAnimation from '@/components/animation/RevealAnimation';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'Modern Library Renovation',
    category: 'Completed',
    description:
      'A complete overhaul of the school library, providing modern study spaces and digital learning resources.',
    image: '/images/library_renovation_nigeria.png',
  },
  {
    id: 2,
    title: 'Solar Power Installation',
    category: 'Ongoing',
    description: 'Implementing sustainable solar energy solutions to provide 24/7 electricity to classrooms.',
    image: '/images/solar_power_nigeria.jpg',
  },
  {
    id: 3,
    title: 'Sports Complex Upgrade',
    category: 'Planned',
    description: 'Proposed renovation of the sports field, including a new running track and basketball court.',
    image: '/images/sports_complex_nigeria.jpg',
  },
];

const ProjectList = () => {
  return (
    <section className="bg-secondary/5 dark:bg-background-6 py-10">
      <div className="main-container">
        <div className="mb-5 flex flex-col justify-between md:flex-row md:items-end">
          <div className="max-w-2xl">
            <RevealAnimation delay={0.1}>
              <h4 className="dark:text-accent mb-4 font-black text-black capitalize">projects making a difference</h4>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.2}>
            <Link
              href="/projects/all"
              className="text-secondary flex items-center gap-2 rounded-xl px-8 py-4 text-sm font-black tracking-widest uppercase transition-all hover:bg-[#d4af37]">
              View All Projects{' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="size-5 shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path>
              </svg>
            </Link>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <RevealAnimation key={project.id} delay={0.1 * (index + 1)} direction="up">
              <div className="group dark:bg-background-7 border-secondary/10 overflow-hidden rounded-[32px] border bg-white transition-all duration-500 hover:shadow-2xl">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-secondary rounded-full px-4 py-1.5 text-[10px] font-black tracking-widest text-white uppercase">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="space-y-4 p-8">
                  <h6 className="dark:text-accent font-black text-black transition-colors">{project.title}</h6>
                  <p className="text-sm leading-relaxed text-black/60 dark:text-white/60">{project.description}</p>
                  <Link
                    href={`#`}
                    className="text-secondary inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase transition-all hover:gap-3">
                    <span>Project Details</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                      stroke="currentColor"
                      className="size-4">
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
