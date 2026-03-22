import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Pillars from "@/components/landing/Pillars";
import Gallery from "@/components/landing/Gallery";
import Bio from "@/components/landing/Bio";
import TriageForm from "@/components/landing/TriageForm";
import Footer from "@/components/landing/Footer";

export default function Index() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Pillars />
        <Gallery />
        <Bio />
        <TriageForm />
      </main>
      <Footer />
    </div>
  );
}
