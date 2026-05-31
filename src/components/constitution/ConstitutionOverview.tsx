import RevealAnimation from '../animation/RevealAnimation';

interface PillarProps {
  icon: string;
  title: string;
  description: string;
  details: string[];
  delay: number;
}

const Pillar = ({ icon, title, description, details, delay }: PillarProps) => (
  <RevealAnimation delay={delay} direction="up">
    <div className="bg-white dark:bg-background-7 rounded-2xl p-7 shadow-sm border border-gray-100 dark:border-background-5 h-full hover:shadow-md hover:border-secondary/30 transition-all duration-300">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-black dark:text-white mb-3">{title}</h3>
      <p className="text-black/70 dark:text-white/70 text-sm mb-4 leading-relaxed">{description}</p>
      <ul className="space-y-2">
        {details.map((d, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-black/60 dark:text-white/60">
            <span className="text-secondary font-bold mt-0.5">›</span>
            {d}
          </li>
        ))}
      </ul>
    </div>
  </RevealAnimation>
);

const ConstitutionOverview = () => {
  return (
    <section id="overview" className="py-24 bg-white dark:bg-background-7">
      <div className="main-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <RevealAnimation delay={0.1}>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-4">
                <span>Constitution Overview</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-6">
                How We Are <span className="text-secondary">Governed</span> — In Plain Language
              </h2>
              <p className="text-lg text-black/70 dark:text-white/70">
                You shouldn't need a lawyer to understand your own alumni association. Here is what the constitution says in clear terms.
              </p>
            </div>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Pillar
            delay={0.2}
            icon="🏛️"
            title="Governance Structure"
            description="FGCEOSA is governed by a democratically elected Executive Council (EXCO) accountable to the general membership."
            details={[
              'President leads the national EXCO',
              'Vice Presidents support specific mandates',
              'AGM (Annual General Meeting) is the highest decision-making body',
              'All EXCO roles have defined term limits',
            ]}
          />
          <Pillar
            delay={0.3}
            icon="🤝"
            title="Membership"
            description="Any person who attended Federal Government College Enugu is eligible for membership. It is free and voluntary."
            details={[
              'Open to all FGC Enugu ex-students',
              'Membership is free of charge',
              'Members have voting rights at meetings',
              'Members have rights to run for office',
            ]}
          />
          <Pillar
            delay={0.4}
            icon="🌐"
            title="Chapters"
            description="FGCEOSA operates through local and international chapters that connect alumni within the same city or region."
            details={[
              'Chapters are officially recognized by the national EXCO',
              'Each chapter elects its own local leaders',
              'Chapters report to national governance',
              'International chapters follow the same rules',
            ]}
          />
          <Pillar
            delay={0.5}
            icon="🗳️"
            title="Decision Making"
            description="Major decisions require broad consensus. The constitution prevents unilateral action by any individual leader."
            details={[
              'Voting follows defined quorum rules',
              'Financial approvals require dual authorization',
              'Elections are conducted transparently',
              'Members can raise motions at AGMs',
            ]}
          />
          <Pillar
            delay={0.6}
            icon="📝"
            title="Amendments"
            description="The constitution can be updated, but only through a deliberate, inclusive process to protect against arbitrary changes."
            details={[
              'Proposals must be submitted in advance',
              'Amendments require supermajority approval',
              'Changes are ratified at the AGM',
              'All amendments are documented and published',
            ]}
          />
          <Pillar
            delay={0.7}
            icon="💰"
            title="Finances"
            description="FGCEOSA's finances are governed by strict rules to ensure transparency and accountability in all expenditure."
            details={[
              'Annual budgets require EXCO approval',
              'External audits verify accounts yearly',
              'No personal gain from association funds',
              'Financial reports shared with members',
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default ConstitutionOverview;
