import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
import SocialIcon, { Platform } from '../shared/SocialIcon';
import LinkButton from '../ui/button/LinkButton';

const teamMembers = [
  {
    name: 'Dr. Emeka Okafor',
    location: 'Lagos, Nigeria',
    image: '/images/executive_1.png',
    social: {
      linkedin: 'https://linkedin.com/',
    },
    delay: '0.4',
  },
  {
    name: 'Mrs. Chioma Adebayo',
    location: 'London, UK',
    image: '/images/executive_2.png',
    social: {
      linkedin: 'https://linkedin.com/',
    },
    delay: '0.5',
  },
  {
    name: 'Mr. Tunde Olawale',
    location: 'Abuja, Nigeria',
    image: '/images/executive_1.png',
    social: {
      linkedin: 'https://linkedin.com/',
    },
    delay: '0.6',
  },
  {
    name: 'Ms. Ngozi Okoro',
    location: 'Houston, USA',
    image: '/images/executive_2.png',
    social: {
      linkedin: 'https://linkedin.com/',
    },
    delay: '0.7',
  },
];

const Team = () => {
  return (
    <section className="bg-background-3 dark:bg-background-7 py-10 md:py-14">
      <div className="main-container">
        <div>
          {/* team heading section   */}
          <div className="mb-[30px] max-w-[620px] text-left md:w-full">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-cyan mb-5">Leadership</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="text-secondary font-bold leading-tight tracking-tight mb-3">Our Executive Council</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="text-black dark:text-white/80">
                The FGCEOSA leadership team is dedicated to fostering unity among alumni and
                driving impactful projects for our alma mater.
              </p>
            </RevealAnimation>
          </div>
          {/* team members  */}
          <div className="mb-7 grid grid-cols-1 items-center justify-center gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {teamMembers.map((member, index) => (
              <RevealAnimation key={member.name} delay={0.4 + index * 0.1}>
                <div className="mx-auto flex h-full w-full flex-col items-start justify-center space-y-6 rounded-2xl border border-secondary/10 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md dark:border-white/10 dark:bg-background-8">
                  {/* team member image */}
                  <figure className="flex size-[140px] items-center justify-center overflow-hidden rounded-full border-2 border-secondary/5 bg-[#d5dbe3]">
                    <Image
                      src={member.image}
                      className="size-full object-cover"
                      alt={`${member.name} profile img`}
                      loading="lazy"
                      width={140}
                      height={140}
                      quality={100}
                    />
                  </figure>

                  {/* team member info */}
                  <div className="space-y-4 text-left">
                    <div>
                      <h3 className="text-heading-6 font-bold text-secondary dark:text-white">{member.name}</h3>
                      <p className="text-tagline-3 font-medium text-black/60 dark:text-white/60">{member.location}</p>
                    </div>

                    {/* social links */}
                    <div className="flex items-center justify-start gap-2.5 pt-2">
                      {['facebook', 'dribble', 'github', 'linkedin'].map((platform) => {
                        const href = member.social[platform as keyof typeof member.social];
                        if (!href) {
                          return null;
                        }
                        return (
                          <Link
                            key={platform}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group border-secondary/10 dark:border-accent/10 hover:bg-secondary hover:border-secondary flex size-9 items-center justify-center rounded-full border p-2 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                            aria-label={`Follow ${member.name} on ${platform}`}>
                            <span className="text-secondary group-hover:text-white dark:text-white transition-colors duration-300">
                              <SocialIcon platform={platform as Platform} />
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
          {/* team btn  */}
          {/* <RevealAnimation delay={0.8}>
            <div className="flex items-center justify-center">
              <LinkButton
                href="/team"
                className="btn btn-md btn-secondary hover:btn-primary dark:btn-accent mx-auto block w-[90%] md:inline-block md:w-auto">
                View all members
              </LinkButton>
            </div>
          </RevealAnimation> */}
        </div>
      </div>
    </section>
  );
};

Team.displayName = 'Team';
export default Team;
