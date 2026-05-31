import ExcoHero from '@/components/exco-officers/ExcoHero';
import WhatExcoDoes from '@/components/exco-officers/WhatExcoDoes';
import LeadershipHierarchy from '@/components/exco-officers/LeadershipHierarchy';
import LeadershipImpact from '@/components/exco-officers/LeadershipImpact';
import MeetTheTeam from '@/components/exco-officers/MeetTheTeam';

export default function ExcoOfficersPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-background-9">
      <ExcoHero />
      <WhatExcoDoes />
      <LeadershipHierarchy />
      <LeadershipImpact />
      <MeetTheTeam />
    </main>
  );
}
