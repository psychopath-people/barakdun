import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import EducationPrograms from "@/components/EducationPrograms";
import EventGallery from "@/components/EventGallery";
import ECatalog from "@/components/ECatalog";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <EducationPrograms />
      <EventGallery />
      <ECatalog />
      <Footer />
    </div>
  );
};

export default Index;
