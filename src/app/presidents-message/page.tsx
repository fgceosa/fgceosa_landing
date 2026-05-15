import PresidentBanner from '@/components/presidents-message/PresidentBanner';
import PresidentMessage from '@/components/presidents-message/PresidentMessage';
import PresidentCTA from '@/components/presidents-message/PresidentCTA';
import Navbar from '@/components/shared/navbar/Navbar';
import Footer from '@/components/shared/footer/Footer';

export const metadata = {
  title: "President's Message | FGCEOSA",
  description: "A message from the Global President of the Federal Government College Enugu Old Students Association (FGCEOSA).",
};

export default function PresidentsMessagePage() {
  return (
    <main className="min-h-screen dark:bg-background-7 bg-white overflow-x-hidden">
      <PresidentBanner />
      <PresidentMessage />
      <PresidentCTA />
    </main>
  );
}
