import { useEffect, useRef, useState } from "react";
import { Target, Eye, Award } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 circuit-bg opacity-5"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className={`max-w-4xl mx-auto space-y-16 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          {/* Tentang Kami */}
          <div className="text-center space-y-6">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl font-bold mb-2">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Tentang Kami
                </span>
              </h2>
              <div className="h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              PT Baraka Daya Unggul adalah perusahaan penyedia solusi teknologi terpadu untuk institusi pendidikan dan pemerintahan. 
              Kami melayani pengadaan B2B (Business to Business) dan B2G (Business to Government) dengan menyediakan 
              perangkat IT, multimedia, robotika, serta layanan konsultasi dan instalasi yang komprehensif.
            </p>
          </div>

          {/* Visi & Misi Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Visi */}
            <div className="group relative p-8 rounded-2xl bg-card border border-primary/20 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_hsl(var(--primary)/0.2)]">
              <div className="absolute -top-6 left-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all duration-300">
                  <Eye className="w-6 h-6 text-background" />
                </div>
              </div>
              
              <div className="space-y-4 pt-8">
                <h3 className="text-2xl font-bold text-foreground">Visi</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Menjadi mitra terpercaya dalam pengadaan teknologi untuk institusi pendidikan dan pemerintahan di Indonesia,
                  memberikan solusi terpadu yang berkualitas tinggi dan mendukung transformasi digital nasional.
                </p>
              </div>
            </div>

            {/* Misi */}
            <div className="group relative p-8 rounded-2xl bg-card border border-secondary/20 hover:border-secondary/50 transition-all duration-500 hover:shadow-[0_0_40px_hsl(var(--secondary)/0.2)]">
              <div className="absolute -top-6 left-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center shadow-lg group-hover:shadow-[0_0_30px_hsl(var(--secondary)/0.5)] transition-all duration-300">
                  <Target className="w-6 h-6 text-background" />
                </div>
              </div>
              
              <div className="space-y-4 pt-8">
                <h3 className="text-2xl font-bold text-foreground">Misi</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <Award className="w-5 h-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Melayani pengadaan B2B & B2G dengan standar kualitas terbaik</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="w-5 h-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Menyediakan solusi teknologi terintegrasi untuk pendidikan dan industri</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="w-5 h-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Memberikan layanan konsultasi, instalasi, dan dukungan purna jual terpercaya</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Glowing divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
    </section>
  );
};

export default About;
