import RevealAnimation from '../animation/RevealAnimation';

const MeetTheTeam = () => {
  return (
    <section className="py-24 bg-white dark:bg-background-7">
      <div className="main-container max-w-4xl mx-auto">
        <RevealAnimation delay={0.1} direction="up">
          <div className="bg-gradient-to-br from-gray-50 to-white dark:from-background-6 dark:to-background-7 rounded-3xl p-10 md:p-16 border border-gray-100 dark:border-background-5 shadow-sm text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/5 rounded-bl-[100%]"></div>

            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6">
              Meet the Team Behind <span className="text-secondary">FGCEOSA</span>
            </h2>

            <div className="space-y-6 text-lg text-black/70 dark:text-white/70 leading-relaxed max-w-2xl mx-auto">
              <p>
                We are not just a committee — we are alumni who share your memories, your values, and your commitment to FGC Enugu. Every member of Team SEAL volunteers their time, expertise, and passion.
              </p>
              <p>
                Our shared philosophy is simple: <strong className="text-black dark:text-white">"Serve first. Lead with impact. Leave FGCEOSA stronger than we found it."</strong>
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="p-5 bg-white dark:bg-background-7 rounded-xl border border-gray-100 dark:border-background-5">
                <div className="text-secondary text-2xl mb-2">🎯</div>
                <h4 className="font-bold text-black dark:text-white mb-1">Shared Mission</h4>
                <p className="text-sm text-black/60 dark:text-white/60">Every decision is guided by what benefits both alumni and FGC Enugu as a whole.</p>
              </div>
              <div className="p-5 bg-white dark:bg-background-7 rounded-xl border border-gray-100 dark:border-background-5">
                <div className="text-secondary text-2xl mb-2">🤝</div>
                <h4 className="font-bold text-black dark:text-white mb-1">Collaboration Culture</h4>
                <p className="text-sm text-black/60 dark:text-white/60">We believe in collective action — no single person runs FGCEOSA alone.</p>
              </div>
              <div className="p-5 bg-white dark:bg-background-7 rounded-xl border border-gray-100 dark:border-background-5">
                <div className="text-secondary text-2xl mb-2">💡</div>
                <h4 className="font-bold text-black dark:text-white mb-1">Innovation Mindset</h4>
                <p className="text-sm text-black/60 dark:text-white/60">We bring modern tools and strategies to a community with decades of heritage.</p>
              </div>
            </div>

          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default MeetTheTeam;
