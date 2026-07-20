import ProjectsHero from '@/components/projects/ProjectsHero';
import ProgramsImpact from '@/components/projects/ProgramsImpact';
import ProjectList from '@/components/projects/ProjectList';
import ImpactNumbers from '@/components/projects/ImpactNumbers';
import MemoriesInspire from '@/components/projects/MemoriesInspire';
import FinalCTA from '@/components/projects/FinalCTA';
import Navbar from '@/components/shared/navbar/Navbar';
import Footer from '@/components/shared/footer/Footer';

export const metadata = {
  title: "Projects & Programmes | FGCEOSA",
  description: "Explore the various projects and programmes initiated by the All Federal Government College Enugu Ex-Students Association (aka FGCEOSA) to support our alma mater.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen dark:bg-background-7 bg-white overflow-x-hidden">
      <ProjectsHero />
      <ProgramsImpact />
      <ProjectList />
      <ImpactNumbers />
      <MemoriesInspire />
      <FinalCTA />
    </main>
  );
}
