import RevealAnimation from '../animation/RevealAnimation';

const PresidentProfile = () => {
  return (
    <section className="py-20 bg-white dark:bg-background-7 relative">
      <div className="main-container max-w-4xl mx-auto">
        
        <RevealAnimation delay={0.1} direction="up">
          <div className="bg-gray-50 dark:bg-background-6 rounded-3xl p-8 md:p-12 border border-gray-100 dark:border-background-5 shadow-sm">
            <h3 className="text-secondary dark:text-accent font-bold text-xl mb-6 flex items-center gap-3">
              <span className="size-2 bg-[#d4af37] rounded-full"></span>
              About the President
            </h3>
            
            <div className="space-y-6 text-black/80 dark:text-white/80 leading-relaxed">
              <p>
                Engr. Nnadozie Eze is a proud alumnus of Federal Government College Enugu (Class of 1993). Under his leadership, Team SEAL operates with the core philosophy of "Powering Progress Together." 
              </p>
              
              <div className="my-6 p-6 bg-white dark:bg-background-7 rounded-2xl border-l-4 border-secondary">
                <h4 className="font-bold text-black dark:text-white mb-2">Leadership Philosophy</h4>
                <p className="text-sm italic">
                  "Leadership in an alumni association is not about authority; it's about service. It is about creating the platforms where our incredibly talented members can connect, collaborate, and give back effectively."
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div>
                  <h4 className="font-bold text-black dark:text-white mb-2 text-sm uppercase tracking-widest text-secondary">Key Focus Areas</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm font-medium">
                    <li>Institutional Development</li>
                    <li>Alumni Welfare & Networking</li>
                    <li>Global Chapter Unity</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-black dark:text-white mb-2 text-sm uppercase tracking-widest text-secondary">Connect</h4>
                  <a href="mailto:president@fgceosa.com" className="inline-flex items-center gap-2 text-sm font-medium hover:text-secondary transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    Reach out to the President
                  </a>
                </div>
              </div>

            </div>
          </div>
        </RevealAnimation>

      </div>
    </section>
  );
};

export default PresidentProfile;
