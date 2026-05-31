import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

// --- Data ---
interface Officer {
  name: string;
  role: string;
  classOf: string;
  house: string;
  image: string;
  impact: string;
}

const president: Officer = {
  name: 'Nnadozie Eze',
  role: 'The President',
  classOf: '1993',
  house: 'Honesty',
  image: '/images/excos/nadozie.jpeg',
  impact: 'Championing "Powering Progress Together" — driving infrastructure, mentorship, and global alumni unity.',
};

const vicePresidents: Officer[] = [
  {
    name: 'Amara Nzelu-Erikume',
    role: '1st Vice President',
    classOf: '1998',
    house: 'Independence',
    image: '/images/excos/Amara-Nzelu-Erikume-1st-Vice-President-resized.jpg',
    impact: 'Spearheading alumni medical outreach and welfare programs.',
  },
  {
    name: 'Odera Udutchay',
    role: '2nd Vice President',
    classOf: '2007',
    house: 'Honesty',
    image: '/images/excos/Odera-Udutchay-2nd-Vice-President-resized.jpg',
    impact: 'Connecting the diaspora network for global chapter initiatives.',
  },
];

const departmentHeads: { department: string; officers: Officer[] }[] = [
  {
    department: 'Secretariat',
    officers: [
      { name: 'Obinna Anikwe', role: 'Secretary General', classOf: '1991', house: 'Peace', image: '/images/excos/sec-gen-obinna-anikwe-1.jpg', impact: 'Streamlining association governance and chapter relations.' },
      { name: 'Chibueze Ogodo', role: 'Asst. Secretary General', classOf: '1998', house: 'Liberty', image: '/images/excos/Chibueze-Ogodo-asst-sec-gen-resized.jpg', impact: 'Coordinating communications across all alumni channels.' },
    ],
  },
  {
    department: 'Finance',
    officers: [
      { name: 'Ifeanyi Mbah', role: 'Treasurer', classOf: '1997', house: 'National', image: '/images/Kingsley-Mbah-Treasurer-resized.jpg', impact: 'Ensuring transparent management of all FGCEOSA funds.' },
      { name: 'Chidiogo Ezejiofor', role: 'Financial Secretary', classOf: '1983', house: 'Liberty', image: '/images/excos/Chidiogo-Ezejiofor-Financial-Secretary-resized.jpg', impact: 'Driving financial accountability and record keeping.' },
      { name: 'Peter Ohabuenyi', role: 'Internal Auditor', classOf: '2000', house: 'Independence', image: '/images/excos/Peter-Ohabuenyiauditor.jpg', impact: 'Independent verification of all financial activities.' },
    ],
  },
  {
    department: 'Welfare & Publicity',
    officers: [
      { name: 'Paul Ojinta', role: 'Publicity & Welfare Secretary', classOf: '1993', house: 'Liberty', image: '/images/excos/Paul-Ojinta-Welfare-Publicity-Secretary-resized.jpg', impact: "Amplifying FGCEOSA's story and supporting alumni welfare." },
      { name: 'Prince Okezie Nnabueze', role: 'Asst. Publicity & Welfare Secretary', classOf: '2004', house: 'Independence', image: '/images/excos/Prince-Nnabueze-Okezie-Assistant-Welfare-Publicity-Secretary-resized.jpg', impact: 'Managing digital communications and event awareness.' },
    ],
  },
  {
    department: 'Operations & Legal',
    officers: [
      { name: "Umar Sa'ad", role: 'Provost', classOf: '1993', house: 'Liberty', image: '/images/excos/Umar-Saad.jpg', impact: 'Maintaining order and protocol at all official gatherings.' },
      { name: 'Chinyere Okoli', role: 'Legal Adviser', classOf: '1997', house: 'National', image: '/images/excos/Chinyere-Atalaor-Legal-Adviser.jpg', impact: "Protecting FGCEOSA's legal interests and constitutional integrity." },
      { name: 'Jekwu Ozoemene', role: 'Ex-Officio', classOf: '1990', house: 'Peace', image: '/images/excos/Dr.-Jekwu-Ozoemene', impact: 'Providing continuity and institutional memory from past administrations.' },
    ],
  },
];

// --- Components ---

const SmallCard = ({ officer, delay }: { officer: Officer; delay: number }) => (
  <RevealAnimation delay={delay} direction="up">
    <div className="bg-white dark:bg-background-7 rounded-2xl p-5 border border-gray-100 dark:border-background-5 hover:border-secondary/30 hover:shadow-lg transition-all duration-300 h-full flex flex-col items-center text-center">
      <div className="w-24 h-24 rounded-full overflow-hidden border-3 border-secondary/20 mb-4 bg-gray-200 flex-shrink-0">
        <Image src={officer.image} alt={officer.name} width={96} height={96} className="w-full h-full object-cover" />
      </div>
      <h4 className="font-bold text-black dark:text-white text-base mb-0.5">{officer.name}</h4>
      <p className="text-secondary font-semibold text-xs uppercase tracking-wider mb-2">{officer.role}</p>
      <div className="flex items-center justify-center gap-3 text-xs text-black/50 dark:text-white/50 font-medium mb-3">
        <span>Class of {officer.classOf}</span>
        <span>·</span>
        <span>{officer.house}</span>
      </div>
      <p className="text-black/60 dark:text-white/60 text-xs italic leading-relaxed mt-auto">"{officer.impact}"</p>
    </div>
  </RevealAnimation>
);

const LeadershipHierarchy = () => {
  return (
    <section className="py-24 bg-white dark:bg-background-7">
      <div className="main-container">

        {/* --- Tier 1: President --- */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <RevealAnimation delay={0.1}>
              <span className="inline-block px-3 py-1 rounded-full bg-[#d4af37]/10 text-[#d4af37] font-bold text-xs uppercase tracking-widest mb-3">The President</span>
            </RevealAnimation>
          </div>
          <RevealAnimation delay={0.2} direction="up">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-secondary to-secondary/90 rounded-3xl p-8 md:p-12 shadow-2xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-60 h-60 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
              <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-white/20 shadow-xl flex-shrink-0 bg-white/10">
                  <Image src={president.image} alt={president.name} width={208} height={208} className="w-full h-full object-cover" />
                </div>
                <div className="text-center md:text-left flex-grow">
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-1">{president.name}</h3>
                  <p className="text-[#d4af37] font-bold uppercase tracking-widest text-sm mb-4">{president.role} · 2021–2023</p>
                  <div className="flex items-center justify-center md:justify-start gap-3 text-white/60 text-sm font-medium mb-5">
                    <span>🎓 Class of {president.classOf}</span>
                    <span>·</span>
                    <span>🏠 {president.house} House</span>
                  </div>
                  <div className="bg-white/10 p-5 rounded-xl">
                    <p className="text-white/90 italic leading-relaxed">"{president.impact}"</p>
                  </div>
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>

        {/* --- Tier 2: Vice Presidents --- */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <RevealAnimation delay={0.1}>
              <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary font-bold text-xs uppercase tracking-widest mb-3">Vice Presidents</span>
            </RevealAnimation>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {vicePresidents.map((vp, i) => (
              <RevealAnimation key={i} delay={0.2 + i * 0.1} direction="up">
                <div className="bg-gray-50 dark:bg-background-6 rounded-2xl p-7 border border-gray-200 dark:border-background-5 hover:border-secondary/40 hover:shadow-lg transition-all duration-300 text-center">
                  <div className="w-28 h-28 rounded-full overflow-hidden border-3 border-secondary/20 mx-auto mb-4 bg-gray-200">
                    <Image src={vp.image} alt={vp.name} width={112} height={112} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="font-bold text-black dark:text-white text-xl mb-1">{vp.name}</h4>
                  <p className="text-secondary font-semibold text-xs uppercase tracking-wider mb-2">{vp.role}</p>
                  <div className="flex items-center justify-center gap-3 text-xs text-black/50 dark:text-white/50 font-medium mb-3">
                    <span>Class of {vp.classOf}</span>
                    <span>·</span>
                    <span>{vp.house} House</span>
                  </div>
                  <p className="text-black/60 dark:text-white/60 text-sm italic">"{vp.impact}"</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>

        {/* --- Tier 3 & 4: Department Heads --- */}
        {departmentHeads.map((dept, di) => (
          <div key={di} className="mb-16">
            <div className="text-center mb-8">
              <RevealAnimation delay={0.1}>
                <span className="inline-block px-3 py-1 rounded-full bg-gray-100 dark:bg-background-6 text-black/60 dark:text-white/60 font-bold text-xs uppercase tracking-widest">{dept.department}</span>
              </RevealAnimation>
            </div>
            <div className={`grid grid-cols-1 sm:grid-cols-2 ${dept.officers.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2 max-w-3xl mx-auto'} gap-6`}>
              {dept.officers.map((off, oi) => (
                <SmallCard key={oi} officer={off} delay={0.15 + oi * 0.08} />
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default LeadershipHierarchy;
