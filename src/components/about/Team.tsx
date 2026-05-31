import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
import SocialIcon, { Platform } from '../shared/SocialIcon';

// Graduation Cap Icon representing the graduating year
const GradCapIcon = () => (
  <svg className="size-4 text-cyan-600 dark:text-cyan-400 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84a50.58 50.58 0 0 0-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
  </svg>
);

// House Icon representing the FGCE school house
const HouseIcon = () => (
  <svg className="size-4 text-rose-600 dark:text-rose-400 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>
);

const teamMembers = [
  {
    name: 'Nnadozie Eze',
    role: 'The President – 2021-2023',
    year: '1993',
    house: 'Honesty',
    image: '/images/excos/nadozie.jpeg',
    social: { linkedin: 'https://linkedin.com/' },
  },
  {
    name: 'Amara Nzelu-Erikume',
    role: '1st Vice President – 2021-2023',
    year: '1998',
    house: 'Independence',
    image: '/images/excos/Amara-Nzelu-Erikume-1st-Vice-President-resized.jpg',
    social: { linkedin: 'https://linkedin.com/' },
  },
  {
    name: 'Odera Udutchay',
    role: '2nd Vice President – 2021-2023',
    year: '2007',
    house: 'Honesty',
    image: '/images/excos/Odera-Udutchay-2nd-Vice-President-resized.jpg',
    social: { linkedin: 'https://linkedin.com/' },
  },
  {
    name: 'Obinna Anikwe',
    role: 'Secretary General – 2021-2023',
    year: '1991',
    house: 'Peace',
    image: '/images/excos/sec-gen-obinna-anikwe-1.jpg',
    social: { linkedin: 'https://linkedin.com/' },
  },
  {
    name: 'Chibueze Ogodo',
    role: 'Assistant Secretary General – 2021-2023',
    year: '1998',
    house: 'Liberty',
    image: '/images/excos/Chibueze-Ogodo-asst-sec-gen-resized.jpg',
    social: { linkedin: 'https://linkedin.com/' },
  },
  {
    name: 'Ifeanyi Mbah',
    role: 'Treasurer – 2021-2023',
    year: '1997',
    house: 'National',
    image: '/images/Kingsley-Mbah-Treasurer-resized.jpg',
    social: { linkedin: 'https://linkedin.com/' },
  },
  {
    name: 'Chidiogo Ezejiofor',
    role: 'Financial Secretary – 2021-2023',
    year: '1983',
    house: 'Liberty',
    image: '/images/excos/Chidiogo-Ezejiofor-Financial-Secretary-resized.jpg',
    social: { linkedin: 'https://linkedin.com/' },
  },
  {
    name: 'Paul Ojinta',
    role: 'Publicity And Welfare Secretary – 2021-2023',
    year: '1993',
    house: 'Liberty',
    image: '/images/excos/Paul-Ojinta-Welfare-Publicity-Secretary-resized.jpg',
    social: { linkedin: 'https://linkedin.com/' },
  },
  {
    name: 'Prince Okezie Nnabueze',
    role: 'Assistant Publicity And Welfare Secretary – 2021-2023',
    year: '2004',
    house: 'Independence',
    image: '/images/excos/Prince-Nnabueze-Okezie-Assistant-Welfare-Publicity-Secretary-resized.jpg',
    social: { linkedin: 'https://linkedin.com/' },
  },
  {
    name: 'Peter Ohabuenyi',
    role: 'Internal Auditor – 2021-2023',
    year: '2000',
    house: 'Independence',
    image: '/images/excos/Peter-Ohabuenyiauditor.jpg',
    social: { linkedin: 'https://linkedin.com/' },
  },
  {
    name: "Umar Sa'ad",
    role: 'Provost – 2021-2023',
    year: '1993',
    house: 'Liberty',
    image: '/images/excos/Umar-Saad.jpg',
    social: { linkedin: 'https://linkedin.com/' },
  },
  {
    name: 'Chinyere Okoli',
    role: 'Legal Adviser – 2021-2023',
    year: '1997',
    house: 'National',
    image: '/images/excos/Chinyere-Atalaor-Legal-Adviser.jpg',
    social: { linkedin: 'https://linkedin.com/' },
  },
  {
    name: 'Jekwu Ozoemene',
    role: 'Ex-Officio – 2021-2023',
    year: '1990',
    house: 'Peace',
    image: '/images/excos/Dr.-Jekwu-Ozoemene',
    social: { linkedin: 'https://linkedin.com/' },
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
              <h2 className="text-secondary mb-3 leading-tight font-bold tracking-tight">Our Executive Council</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="text-black dark:text-white/80">
                The FGCEOSA leadership team is dedicated to fostering unity among alumni and driving impactful projects
                for our alma mater.
              </p>
            </RevealAnimation>
          </div>
          {/* team members  */}
          <div className="mb-7 grid grid-cols-1 items-center justify-center gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {teamMembers.map((member, index) => (
              <RevealAnimation key={member.name} delay={0.1 + (index % 4) * 0.05}>
                <div className="border-secondary/10 dark:bg-background-8 mx-auto flex h-full w-full flex-col items-center justify-between space-y-6 rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md dark:border-white/10 text-center">
                  <div className="flex flex-col items-center space-y-4 w-full">
                    {/* role title */}
                    <span className="text-[10px] md:text-[11px] font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest leading-none border border-cyan-500/20 px-2.5 py-1 rounded-full bg-cyan-500/5">
                      {member.role.split(' – ')[0]}
                    </span>

                    {/* team member image */}
                    <figure className="border-secondary/5 flex size-[150px] items-center justify-center overflow-hidden rounded-full border-2 bg-[#d5dbe3] shadow-inner shrink-0">
                      <Image
                        src={member.image}
                        className="size-full object-cover"
                        alt={`${member.name} profile img`}
                        loading="lazy"
                        width={150}
                        height={150}
                        quality={100}
                      />
                    </figure>

                    {/* team member info */}
                    <div className="space-y-1 w-full">
                      <h3 className="text-base md:text-lg text-secondary font-bold dark:text-white leading-snug">{member.name}</h3>
                      <p className="text-xs text-black/50 dark:text-white/40 font-medium">2021 - 2023</p>
                    </div>

                    {/* Year & House Info */}
                    <div className="flex items-center justify-center gap-4 py-2 border-y border-gray-100 dark:border-white/5 w-full text-xs">
                      <div className="flex items-center gap-1.5 font-semibold text-black/70 dark:text-white/70">
                        <GradCapIcon />
                        <span>{member.year}</span>
                      </div>
                      <div className="h-4 w-px bg-gray-200 dark:bg-white/10"></div>
                      <div className="flex items-center gap-1.5 font-semibold text-black/70 dark:text-white/70">
                        <HouseIcon />
                        <span>{member.house}</span>
                      </div>
                    </div>
                  </div>

                  {/* social links */}
                  <div className="flex items-center justify-center gap-2.5 pt-2">
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
                          className="group border-secondary/10 dark:border-accent/10 hover:bg-cyan-600 hover:border-cyan-600 flex size-8 items-center justify-center rounded-full border p-2 transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:scale-105"
                          aria-label={`Follow ${member.name} on ${platform}`}>
                          <span className="text-secondary transition-colors duration-300 group-hover:text-white dark:text-white">
                            <SocialIcon platform={platform as Platform} />
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

Team.displayName = 'Team';
export default Team;
