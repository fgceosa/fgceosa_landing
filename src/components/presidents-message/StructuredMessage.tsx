import RevealAnimation from '../animation/RevealAnimation';

const StructuredMessage = () => {
  return (
    <section className="py-20 bg-white dark:bg-background-7 relative">
      <div className="main-container max-w-4xl mx-auto">
        
        {/* Section 1: Opening Vision */}
        <div className="mb-16">
          <RevealAnimation delay={0.1}>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-secondary font-bold uppercase tracking-widest text-sm">01 / Welcome</span>
                <div className="h-px bg-gray-200 dark:bg-background-6 flex-grow"></div>
              </div>
              <h2 className="text-3xl font-bold text-black dark:text-white mb-6">Dear fellow FGCE Alumni,</h2>
              <div className="prose prose-lg dark:prose-invert max-w-none text-black/80 dark:text-white/80 leading-relaxed space-y-4 font-medium">
                <p>
                  Welcome to our shared digital home. It is an honor to address you as President of an association built on the foundation of excellence we all experienced at Federal Government College, Enugu. 
                </p>
                <p>
                  Whether you graduated 5 years ago or 40 years ago, our bond remains the same. We share a unique heritage, and today, that heritage is evolving into a powerful global engine for progress.
                </p>
              </div>
            </div>
          </RevealAnimation>
        </div>

        {/* Highlight Callout */}
        <RevealAnimation delay={0.2}>
          <div className="my-12 p-8 md:p-10 bg-secondary/5 rounded-3xl border-l-4 border-secondary relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 text-[150px] font-serif text-secondary/10 leading-none h-32 w-32">"</div>
            <p className="text-xl md:text-2xl font-bold text-secondary dark:text-accent relative z-10 italic leading-snug">
              Our large and diverse alumni membership base is not just a directory—it is a source of immense strength. 
            </p>
          </div>
        </RevealAnimation>

        {/* Section 2: Mission Reminder */}
        <div className="mb-16">
          <RevealAnimation delay={0.3}>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-secondary font-bold uppercase tracking-widest text-sm">02 / Our Core Purpose</span>
                <div className="h-px bg-gray-200 dark:bg-background-6 flex-grow"></div>
              </div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-6">Why We Exist</h3>
              <div className="prose prose-lg dark:prose-invert max-w-none text-black/80 dark:text-white/80 leading-relaxed space-y-4">
                <p>
                  Our objective is simple and direct: to support one another and uplift our alma mater. We achieve this by promoting close relations across generations, initiating programs that benefit both alumni careers and the school's development, and acting as a united front to preserve the rich legacy of FGC Enugu.
                </p>
              </div>
            </div>
          </RevealAnimation>
        </div>

        {/* Section 3: What We Have Achieved */}
        <div className="mb-16">
          <RevealAnimation delay={0.4}>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-secondary font-bold uppercase tracking-widest text-sm">03 / Progress Made</span>
                <div className="h-px bg-gray-200 dark:bg-background-6 flex-grow"></div>
              </div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-6">Building Impact Together</h3>
              <div className="prose prose-lg dark:prose-invert max-w-none text-black/80 dark:text-white/80 leading-relaxed space-y-6">
                <p>
                  Under the theme of <strong>"Powering Progress Together"</strong>, Team SEAL has not relented in its efforts. Over the past year, we have made tangible, valuable impacts in the FGCE community. 
                </p>
                <ul className="space-y-3 font-medium bg-gray-50 dark:bg-background-6 p-6 rounded-2xl border border-gray-100 dark:border-background-5 list-none pl-6">
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">✦</span>
                    Funded several major infrastructural and capacity development projects at the school.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">✦</span>
                    Launched robust mentorship programs bridging the gap between experienced professionals and recent graduates.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">✦</span>
                    Revitalized the annual Speech Day and prize-giving ceremonies to celebrate outstanding student performance.
                  </li>
                </ul>
              </div>
            </div>
          </RevealAnimation>
        </div>

        {/* Section 4: Current Focus */}
        <div className="mb-16">
          <RevealAnimation delay={0.5}>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-secondary font-bold uppercase tracking-widest text-sm">04 / Our Priorities Now</span>
                <div className="h-px bg-gray-200 dark:bg-background-6 flex-grow"></div>
              </div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-6">Where Our Energy Is Going</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 border border-gray-200 dark:border-background-6 rounded-2xl hover:border-secondary transition-colors">
                  <h4 className="font-bold text-black dark:text-white text-lg mb-2">Mentorship & Careers</h4>
                  <p className="text-black/70 dark:text-white/70 text-sm">Expanding professional networks to ensure every young alumnus has a guide in their industry.</p>
                </div>
                <div className="p-6 border border-gray-200 dark:border-background-6 rounded-2xl hover:border-secondary transition-colors">
                  <h4 className="font-bold text-black dark:text-white text-lg mb-2">Chapter Expansion</h4>
                  <p className="text-black/70 dark:text-white/70 text-sm">Strengthening our local chapters globally so that no matter where you move, you find an FGCEOSA family.</p>
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>

        {/* Section 5: Future Direction */}
        <div className="mb-16">
          <RevealAnimation delay={0.6}>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-secondary font-bold uppercase tracking-widest text-sm">05 / Looking Ahead</span>
                <div className="h-px bg-gray-200 dark:bg-background-6 flex-grow"></div>
              </div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-6">The Road Forward</h3>
              <div className="prose prose-lg dark:prose-invert max-w-none text-black/80 dark:text-white/80 leading-relaxed space-y-4">
                <p>
                  As a prominent member of the Unity Schools Old Students Association (USOSA), we are committed to advancing national unity through quality access to education. Our EXCO will continue to seek and implement innovative ways to improve welfare conditions and promote valuable collaboration amongst all alumni.
                </p>
              </div>
            </div>
          </RevealAnimation>
        </div>

        {/* Section 6: Call to Action (Direct Message) */}
        <div className="mt-20 pt-10 border-t border-gray-200 dark:border-background-6">
          <RevealAnimation delay={0.7}>
            <div>
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start justify-between">
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-4">My Request to You</h3>
                  <p className="text-lg text-black/80 dark:text-white/80 font-medium leading-relaxed mb-6">
                    This association is only as strong as your participation. You will do well to support this administration by playing an active role in your local Alumni Chapter or Class Set. Reconnect, share your expertise, and let us build this legacy together.
                  </p>
                  <p className="text-secondary font-bold uppercase tracking-widest">Pro Unitate FGCE!</p>
                </div>
                <div className="flex-shrink-0 text-center md:text-right space-y-1">
                  <p className="text-3xl font-script text-secondary mb-2">Nnadozie Eze</p>
                  <p className="font-bold text-black dark:text-white text-lg">Engr. Nnadozie Eze</p>
                  <p className="text-black/50 dark:text-white/50 text-xs font-bold uppercase tracking-widest">Class of 1993</p>
                  <p className="text-black/50 dark:text-white/50 text-xs font-bold uppercase tracking-widest">President, FGCEOSA National EXCO</p>
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>

      </div>
    </section>
  );
};

export default StructuredMessage;
