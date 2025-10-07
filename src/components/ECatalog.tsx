import { useEffect, useRef, useState } from "react";
import { ShoppingCart, Package, Truck, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ECatalog = () => {
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

  const platforms = [
    {
      name: "INAPROC",
      description: "Sistem pengadaan pemerintah nasional",
      icon: ShoppingCart,
      link: "#",
      color: "from-primary to-accent",
    },
    {
      name: "SIPLah",
      description: "Platform belanja sekolah Kemendikbud",
      icon: Package,
      link: "#",
      color: "from-accent to-secondary",
    },
    {
      name: "E-Purchasing",
      description: "Katalog elektronik LKPP",
      icon: Truck,
      link: "#",
      color: "from-secondary to-primary",
    },
  ];

  const benefits = [
    { icon: Shield, text: "Produk TKDN Tersertifikasi" },
    { icon: Truck, text: "Gratis Ongkir Nasional" },
    { icon: Package, text: "Garansi Resmi Prinsipal" },
    { icon: Sparkles, text: "Support 24/7" },
  ];

  return (
    <section id="catalog" ref={sectionRef} className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background circuit pattern */}
      <div className="absolute inset-0 circuit-bg opacity-5"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center space-y-4 mb-16 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              E-Katalog Pengadaan
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Akses mudah melalui platform pengadaan resmi pemerintah
          </p>
        </div>

        {/* Platform Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {platforms.map((platform, index) => (
            <Card
              key={index}
              className={`group relative p-8 text-center bg-card border border-primary/20 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)] cursor-pointer ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-5 rounded-lg transition-opacity duration-500`}></div>

              <div className="relative space-y-4">
                {/* Icon */}
                <div className="inline-flex items-center justify-center">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${platform.color} flex items-center justify-center shadow-lg group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all duration-300 group-hover:scale-110 animate-glow-pulse`}>
                    <platform.icon className="w-10 h-10 text-background" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">{platform.name}</h3>
                  <p className="text-sm text-muted-foreground">{platform.description}</p>
                </div>

                {/* Button */}
                <Button
                  variant="outline"
                  className="w-full border-primary/30 hover:bg-primary hover:text-background transition-all duration-300"
                >
                  Lihat Katalog
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className={`max-w-4xl mx-auto ${isVisible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "0.4s" }}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-xl bg-card/50 border border-primary/10 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg mb-3">
                  <benefit.icon className="w-6 h-6 text-background" />
                </div>
                <p className="text-sm font-medium text-foreground">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 ${isVisible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "0.6s" }}>
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary text-background hover:shadow-[0_0_40px_hsl(var(--primary)/0.6)] transition-all duration-300 px-8"
          >
            Request Penawaran Khusus
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ECatalog;
