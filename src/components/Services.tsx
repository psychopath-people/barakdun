import { useEffect, useRef, useState } from "react";
import { Monitor, Video, Cog, Package, Wrench, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Monitor,
      title: "Perangkat IT Pendidikan",
      description: "Komputer, laptop, server, dan infrastruktur IT lengkap untuk institusi pendidikan dengan garansi resmi",
      gradient: "from-primary to-accent",
    },
    {
      icon: Video,
      title: "Multimedia & Audio Visual",
      description: "Proyektor interaktif, smart board, sistem konferensi, dan perangkat presentasi modern",
      gradient: "from-accent to-secondary",
    },
    {
      icon: Cog,
      title: "Mesin Praktik Industri",
      description: "Peralatan laboratorium, mesin CNC, robotika Makeblock, dan equipment praktik kejuruan",
      gradient: "from-secondary to-primary",
    },
    {
      icon: Package,
      title: "Persewaan Equipment",
      description: "Layanan rental perangkat IT dan multimedia untuk event, pelatihan, dan kebutuhan temporer",
      gradient: "from-primary to-secondary",
    },
    {
      icon: Wrench,
      title: "Instalasi & Maintenance",
      description: "Jasa instalasi, konfigurasi, dan pemeliharaan infrastruktur teknologi pendidikan",
      gradient: "from-secondary to-accent",
    },
    {
      icon: Shield,
      title: "Konsultasi & Support",
      description: "Konsultasi TKDN, perencanaan proyek, dan dukungan teknis 24/7 dari tim ahli kami",
      gradient: "from-accent to-primary",
    },
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 circuit-bg opacity-5"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center space-y-4 mb-16 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Produk & Layanan
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Solusi pengadaan B2B & B2G untuk institusi pendidikan, pemerintahan, dan perusahaan
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group relative p-6 bg-card border border-primary/20 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)] hover:-translate-y-2 cursor-pointer ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-lg transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className="relative mb-4">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all duration-300 group-hover:scale-110`}>
                  <service.icon className="w-8 h-8 text-background" />
                </div>
              </div>

              {/* Content */}
              <div className="relative space-y-3">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Hover indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-lg"></div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className={`mt-16 text-center ${isVisible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "0.6s" }}>
          <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-foreground">Garansi Resmi • Gratis Ongkir Nasional • Support 24/7</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
