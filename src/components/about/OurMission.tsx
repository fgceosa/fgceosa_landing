import authorAvatarBgImg from '@public/images/ns-author-avatar-bg.png';
import avatar1Img from '@public/images/ns-avatar-1.png';
import avatar2Img from '@public/images/ns-avatar-2.png';
import avatar3Img from '@public/images/ns-avatar-3.png';
import avatar7Img from '@public/images/ns-avatar-7.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const OurMission = () => {
  return (
    <section className="relative py-10 md:py-14">
      <div className="main-container">
        <div className="grid grid-cols-1 items-center gap-y-14 lg:grid-cols-2 lg:gap-x-[97px]">
          <div>
            <RevealAnimation delay={0.1}>
              <span className="badge badge-cyan mb-5"> Our Mission </span>
            </RevealAnimation>
            <div className="space-y-3 md:max-w-[540px]">
              <RevealAnimation delay={0.2}>
                <h2 className="text-secondary font-bold leading-tight tracking-tight">To help alumni connect and grow through networking and mentorship.</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="text-black dark:text-white/80">
                  We help our members turn lifelong connections into impactful opportunities—one meetup, one mentorship,
                  and one project at a time.
                </p>
              </RevealAnimation>
            </div>
          </div>
          <RevealAnimation delay={0.4}>
            <div className="bg-white dark:bg-background-5 w-full rounded-[32px] shadow-2xl border border-secondary/5">
              <figure className="relative h-[350px] md:h-[450px] w-full overflow-hidden rounded-[28px]">
                <Image
                  src="/images/alumni_mentorship_session.png"
                  alt="Alumni Mentorship"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-secondary/60 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h4 className="text-white mb-2">Mentorship Program</h4>
                  <p className="text-sm text-white/80">Connecting experienced alumni with current students and young graduates.</p>
                </div>
              </figure>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

OurMission.displayName = 'OurMission';
export default OurMission;
