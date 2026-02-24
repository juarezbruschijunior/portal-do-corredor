/* ============================================================
   HOME PAGE — Portal do Corredor: Treinamento de Alta Performance
   Design: Athletic Dark Performance (Brutalist Sportswear)
   Sections: Hero → Pace Calc → Tiros Calc → Zones → Methodology → References → Footer
   ============================================================ */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PaceCalculator from "@/components/PaceCalculator";
import TirosCalculator from "@/components/TirosCalculator";
import TrainingZones from "@/components/TrainingZones";
import Methodology from "@/components/Methodology";
import References from "@/components/References";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[oklch(0.08_0.005_285)]">
      {/* Fixed navigation with top ad banner */}
      <Navbar />

      {/* Main content — offset for fixed navbar (navbar ~100px: 40px ad + 60px nav) */}
      <main>
        {/* Hero — full bleed with dark overlay */}
        <HeroSection />

        {/* Pace Calculator */}
        <PaceCalculator />

        {/* Tiros Calculator */}
        <TirosCalculator />

        {/* Training Zones */}
        <TrainingZones />

        {/* Methodology */}
        <Methodology />

        {/* References */}
        <References />
      </main>

      {/* Footer with developer credit */}
      <Footer />
    </div>
  );
}
