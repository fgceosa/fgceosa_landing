import Image from 'next/image';
import oldPhoto from '@public/images/fgce-hero.png'; // Using placeholder from community impact
import RevealAnimation from '../animation/RevealAnimation';

const OriginStory = () => {
  return (
    <section className="py-20 bg-white dark:bg-background-7 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-secondary/5 rounded-bl-[100px] -z-10"></div>
      
      <div className="main-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <RevealAnimation delay={0.2} direction="left">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/10 rounded-xl -z-10"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] max-h-[600px]">
                {/* We'll use a placeholder for now, since we need a storytelling image. */}
                {/* Fallback to something like a community picture if the specific one isn't available. */}
                <Image 
                  src={oldPhoto}
                  alt="FGCEOSA Origins"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white dark:bg-background-6 p-6 rounded-2xl shadow-xl max-w-[280px]">
                <div className="text-secondary text-5xl font-serif mb-2">"</div>
                <p className="text-black dark:text-white font-medium italic">Our story started with a simple belief: the bond forged in Enugu doesn't end at graduation.</p>
              </div>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.3} direction="right">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary font-semibold text-sm">
                <span>Our Heritage</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white leading-tight">
                From a School in Enugu to a <span className="text-secondary">Global Movement</span>
              </h2>

              <div className="space-y-4 text-lg text-black/70 dark:text-white/70">
                <p>
                  Federal Government College Enugu was more than just an educational institution; it was a crucible where lifelong friendships were forged and a shared identity was born. But as graduation passed and alumni scattered across the globe, we realized a profound need.
                </p>
                <p>
                  We needed a way to stay connected, not just to reminisce about the past, but to support one another in the present and build for the future. We saw young alumni entering the workforce needing mentorship, and we saw our beloved alma mater needing infrastructure and resources.
                </p>
                <p className="font-semibold text-black dark:text-white">
                  Thus, FGCEOSA was formed. 
                </p>
                <p>
                  What started as local chapter reunions has evolved into a powerful global network. Today, we are a thriving ecosystem of professionals, leaders, and change-makers dedicated to lifting each other up and giving back to the place that shaped us.
                </p>
              </div>
            </div>
          </RevealAnimation>

        </div>
      </div>
    </section>
  );
};

export default OriginStory;
