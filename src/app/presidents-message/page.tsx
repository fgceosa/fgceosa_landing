import LeadershipHero from '@/components/presidents-message/LeadershipHero';
import KeyHighlights from '@/components/presidents-message/KeyHighlights';
import StructuredMessage from '@/components/presidents-message/StructuredMessage';
import AlumniImpact from '@/components/presidents-message/AlumniImpact';
import PresidentProfile from '@/components/presidents-message/PresidentProfile';
import FinalLeadershipCTA from '@/components/presidents-message/FinalLeadershipCTA';

export const metadata = {
  title: "President's Message | FGCEOSA",
  description: "A message from the Global President of the Federal Government College Enugu Old Students Association (FGCEOSA).",
};

export default function PresidentsMessagePage() {
  return (
    <main className="min-h-screen dark:bg-background-7 bg-white overflow-x-hidden">
      <LeadershipHero />
      <KeyHighlights />
      <StructuredMessage />
      <AlumniImpact />
      <PresidentProfile />
      <FinalLeadershipCTA />
    </main>
  );
}
