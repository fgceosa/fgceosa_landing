import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
import SocialIcon, { Platform } from '../shared/SocialIcon';

const teamMembers = [
  {
    name: 'Nnadozie Eze',
    role: 'The President',
    profession: 'Managing Partner',
    industry: 'Consulting & Strategy',
    location: 'Lagos, Nigeria',
    impact: 'Championing the $2M endowment fund for FGC Enugu.',
    image: '/images/excos/nadozie.jpeg',
    social: { linkedin: 'https://linkedin.com/' },
  },
  {
    name: 'Amara Nzelu-Erikume',
    role: '1st Vice President',
    profession: 'Chief Medical Director',
    industry: 'Healthcare',
    location: 'Enugu, Nigeria',
    impact: 'Spearheading the alumni medical outreach program.',
    image: '/images/excos/Amara-Nzelu-Erikume-1st-Vice-President-resized.jpg',
    social: { linkedin: 'https://linkedin.com/' },
  },
  {
    name: 'Odera Udutchay',
    role: '2nd Vice President',
    profession: 'Senior IT Consultant',
    industry: 'Technology',
    location: 'London, UK',
    impact: 'Connecting the diaspora network for global initiatives.',
    image: '/images/excos/Odera-Udutchay-2nd-Vice-President-resized.jpg',
    social: { linkedin: 'https://linkedin.com/' },
  },
  {
    name: 'Obinna Anikwe',
    role: 'Secretary General',
    profession: 'Legal Partner',
    industry: 'Corporate Law',
    location: 'Abuja, Nigeria',
    impact: 'Streamlining association governance and chapter relations.',
    image: '/images/excos/sec-gen-obinna-anikwe-1.jpg',
    social: { linkedin: 'https://linkedin.com/' },
  }
];

const LeadershipTeam = () => {
  return (
    <section className="bg-background-3 dark:bg-background-7 py-24">
      <div className="main-container">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <RevealAnimation delay={0.1}>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-4">
                <span>Leadership</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-6">
                Guided by <span className="text-secondary">Experience</span>
              </h2>
              <p className="text-lg text-black/70 dark:text-white/70">
                Our Executive Council comprises industry leaders dedicated to fostering unity among alumni and driving impactful projects.
              </p>
            </div>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <RevealAnimation key={member.name} delay={0.2 + index * 0.1} direction="up">
              <div className="bg-white dark:bg-background-8 rounded-2xl p-6 shadow-md border border-gray-100 dark:border-background-6 hover:shadow-xl transition-all duration-300 flex flex-col h-full relative overflow-hidden group">
                
                {/* Decorative background for the image area */}
                <div className="absolute top-0 left-0 w-full h-32 bg-secondary/10 group-hover:bg-secondary/20 transition-colors duration-300"></div>

                <div className="relative flex flex-col items-center mt-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-background-8 shadow-lg mb-4 z-10 bg-gray-200">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-black dark:text-white">{member.name}</h3>
                    <div className="text-secondary font-semibold text-sm">{member.role}</div>
                  </div>
                </div>

                <div className="flex-grow flex flex-col justify-between pt-4 border-t border-gray-100 dark:border-background-6 mt-2">
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-black/40 dark:text-white/40 shrink-0 mt-0.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                      </svg>
                      <div>
                        <div className="text-xs text-black/50 dark:text-white/50 uppercase tracking-wider font-semibold">Profession</div>
                        <div className="text-black/80 dark:text-white/80 text-sm font-medium">{member.profession}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-black/40 dark:text-white/40 shrink-0 mt-0.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                      <div>
                        <div className="text-xs text-black/50 dark:text-white/50 uppercase tracking-wider font-semibold">Location</div>
                        <div className="text-black/80 dark:text-white/80 text-sm font-medium">{member.location}</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-secondary/5 p-3 rounded-lg mb-4">
                    <p className="text-sm text-black/70 dark:text-white/70 italic text-center">
                      "{member.impact}"
                    </p>
                  </div>

                  {/* Social links */}
                  <div className="flex justify-center mt-auto">
                    {member.social.linkedin && (
                      <Link
                        href={member.social.linkedin}
                        target="_blank"
                        className="text-secondary/60 hover:text-secondary transition-colors"
                      >
                        <SocialIcon platform="linkedin" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/team" className="inline-flex items-center justify-center px-6 py-3 border-2 border-secondary text-secondary font-bold rounded-lg hover:bg-secondary hover:text-white transition-colors">
            View Full Executive Council
          </Link>
        </div>

      </div>
    </section>
  );
};

export default LeadershipTeam;
