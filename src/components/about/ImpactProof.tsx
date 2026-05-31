import Image from 'next/image';
import studentImg from '@public/images/fgce-hero.png'; // We'll need a placeholder or real image
import RevealAnimation from '../animation/RevealAnimation';

interface ImpactStatProps {
  number: string;
  label: string;
  delay: number;
}

const ImpactStat = ({ number, label, delay }: ImpactStatProps) => (
  <RevealAnimation delay={delay}>
    <div className="border-l-4 border-secondary pl-6 py-2">
      <div className="text-4xl font-extrabold text-black dark:text-white mb-1">{number}</div>
      <div className="text-black/70 dark:text-white/70 font-medium">{label}</div>
    </div>
  </RevealAnimation>
);

const ImpactProof = () => {
  return (
    <section id="impact" className="py-24 bg-gray-50 dark:bg-background-7 relative">
      <div className="main-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LHS Image & Stats */}
          <div className="order-2 lg:order-1 relative">
            <RevealAnimation delay={0.2} direction="left">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square md:aspect-[4/3]">
                {/* Fallback image if specific one doesn't exist */}
                <Image 
                  src={studentImg}
                  alt="Students Benefiting from FGCEOSA"
                  fill
                  className="object-cover"
                />
              </div>
            </RevealAnimation>

            {/* Floating Stats Card */}
            <RevealAnimation delay={0.4} direction="up" className="absolute -bottom-10 -right-4 md:-right-10 w-[85%] md:w-3/4">
              <div className="bg-white dark:bg-background-6 p-8 rounded-2xl shadow-xl">
                <h4 className="text-xl font-bold text-black dark:text-white mb-6">Our Track Record</h4>
                <div className="space-y-6">
                  <ImpactStat delay={0.5} number="₦50M+" label="Invested in Infrastructure" />
                  <ImpactStat delay={0.6} number="75+" label="Scholarships Awarded" />
                </div>
              </div>
            </RevealAnimation>
          </div>

          {/* RHS Content */}
          <div className="order-1 lg:order-2 lg:pl-10">
            <RevealAnimation delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-6">
                <span>Real Results</span>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white leading-tight mb-8">
                Does FGCEOSA Actually <br className="hidden md:block" />
                <span className="text-secondary">Do Anything Meaningful?</span>
              </h2>
            </RevealAnimation>

            <div className="space-y-6 text-lg text-black/70 dark:text-white/70">
              <RevealAnimation delay={0.3}>
                <p>
                  We don't just talk about giving back; we measure our success in completed projects, empowered students, and connected alumni.
                </p>
              </RevealAnimation>
              
              <RevealAnimation delay={0.4}>
                <p>
                  Over the past decade, FGCEOSA chapters globally have funded the renovation of dormitories, equipped the school clinic, installed solar power systems, and provided continuous scholarships to deserving students.
                </p>
              </RevealAnimation>
              
              <RevealAnimation delay={0.5}>
                <p className="font-semibold text-black dark:text-white">
                  When you join FGCEOSA, you aren't just joining a directory. You are joining a powerful engine for positive change.
                </p>
              </RevealAnimation>

              <RevealAnimation delay={0.6}>
                <ul className="mt-8 space-y-4">
                  {[
                    "Equipped Science and Computer Labs",
                    "Ongoing Medical Interventions & Clinic Support",
                    "Annual Mentorship & Career Guidance Bootcamps",
                    "Emergency Relief Funds for Alumni in Need"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="bg-secondary/20 flex size-6 shrink-0 items-center justify-center rounded-full mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-secondary">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="font-medium text-black dark:text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </RevealAnimation>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ImpactProof;
