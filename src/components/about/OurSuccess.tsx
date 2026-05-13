import { projectAchievements } from '@/data/achievements';
import RevealAnimation from '../animation/RevealAnimation';
import OurAchievements from '../shared/OurAchievements';

const OurSuccess = () => {
  return (
    <section className="py-5 md:py-5">
      <div className="main-container">
        <div className="mb-14 space-y-3 text-center md:mb-[70px]">
          <RevealAnimation delay={0.2}>
            <h2 className="text-secondary font-bold leading-tight tracking-tight">Over five decades of excellence.</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto max-w-[744px] text-black">
              With more than ten years of hands-on experience, we’ve built a strong foundation of knowledge, skill, and
              trust in our industry. Over the years, we’ve navigated evolving trends, embraced new technologies, and
            </p>
          </RevealAnimation>
        </div>
        {/* <OurAchievements achievements={projectAchievements} /> */}
      </div>
    </section>
  );
};
OurSuccess.displayName = 'OurSuccess';
export default OurSuccess;
