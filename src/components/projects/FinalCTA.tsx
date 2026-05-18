import RevealAnimation from '@/components/animation/RevealAnimation';
import Link from 'next/link';

const FinalCTA = () => {
  return (
    <section className="py-12 bg-white dark:bg-background-7">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <div className="bg-secondary/5 border border-secondary/10 rounded-[20px] p-10 flex md:flex-row flex-col items-center justify-between text-center space-y-8 relative overflow-hidden">
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/10 blur-3xl rounded-full"></div>

            <div className="bg-secondary p-6 rounded-full text-white shadow-xl shadow-[#d4af37]/20">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
              </svg>
            </div>

            <div className="space-y-4 max-w-2xl text-left">
              <h2 className="text-black dark:text-accent font-black capitalize leading-tight">be part of the impact</h2>
              <p className="text-black/60 dark:text-white/60 font-medium">
                Your contribution, no matter how small, helps us build a stronger community and a better future for our alma mater. Join thousands of alumni making a difference.
              </p>
            </div>

            <Link
              href="/signup"
              className="bg-secondary text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-[#d4af37] transition-all shadow-2xl hover:-translate-y-1"
            >
              Join FGCEOSA Today
            </Link>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default FinalCTA;
