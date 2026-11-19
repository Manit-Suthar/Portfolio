import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutEducation from "@/components/AboutEducation";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import AchievementsContact from "@/components/AchievementsContact";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#08090D] text-[#F5F5F5] selection:bg-[#22C55E]/25 selection:text-[#22C55E]">
      {/* Static Futuristic Background from /background.png */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 filter brightness-90 contrast-110"
          style={{ backgroundImage: `url('/background.png')` }}
        />
        {/* Deep atmospheric overlay for crisp readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#08090D]/75 via-[#08090D]/40 to-[#08090D]/95" />
        <div className="ambient-green" />
        <div className="ambient-purple" />
      </div>

      {/* Floating Centered Glass Pill Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="relative z-10 flex flex-col">
        <Hero />
        <AboutEducation />
        <Experience />
        <Projects />
        <Skills />
        <AchievementsContact />
      </main>
    </div>
  );
}
