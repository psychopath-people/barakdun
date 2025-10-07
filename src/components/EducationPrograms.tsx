import { useEffect, useRef, useState } from "react";
import { GraduationCap, Users, Award, BookOpen, Cpu, Zap } from "lucide-react";
import roboticsImage from "@/assets/robotics-education.jpg";

const EducationPrograms = () => {
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

  const programs = [
    {
      icon: GraduationCap,
      title: "Intel® Skills for Innovation (SFI)",
      description: "Program sertifikasi guru dalam integrasi teknologi AI, robotika, dan pembelajaran digital",
      features: ["Pelatihan Bersertifikat", "Kurikulum Intel®", "Mentoring Berkelanjutan"],
    },
    {
      icon: Cpu,
      title: "Robotika & Coding Makeblock",
      description: "Workshop robotika edukatif dengan platform Makeblock untuk STEM education",
      features: ["Kit Robotika Lengkap", "Kurikulum Terstruktur", "Kompetisi Nasional"],
    },
    {
      icon: Users,
      title: "Pelatihan Guru & Admin",
      description: "Program capacity building untuk pendidik dan administrator sekolah",
      features: ["Training of Trainers", "Sertifikasi Kompetensi", "Follow-up Support"],
    },
  ];

  const timeline = [
    { phase: "Fase 1", title: "Konsultasi & Pemetaan Kebutuhan", duration: "1-2 Minggu" },
    { phase: "Fase 2", title: "Penyiapan Infrastruktur & Pelatihan", duration: "2-4 Minggu" },
    { phase: "Fase 3", title: "Implementasi Program Pembelajaran", duration: "Berkelanjutan" },
    { phase: "Fase 4", title: "Evaluasi & Sertifikasi", duration: "Per Semester" },
  ];

  return (
    <section id="education" ref={sectionRef} className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-30">
        <img src={roboticsImage} alt="Education" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center space-y-4 mb-16 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 backdrop-blur-sm mb-4">
            <Zap className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">Intel® Skills for Innovation Partner</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Program Pendidikan
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Program pelatihan dan sertifikasi untuk transformasi kompetensi digital pendidik dan peserta didik
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)] ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="space-y-6">
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all duration-300 group-hover:scale-110">
                  <program.icon className="w-8 h-8 text-background" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground">{program.title}</h3>
                  <p className="text-sm text-muted-foreground">{program.description}</p>
                </div>

                {/* Features */}
                <ul className="space-y-2">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <BookOpen className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className={`max-w-4xl mx-auto ${isVisible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "0.5s" }}>
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="text-foreground">Roadmap </span>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Implementasi Program
            </span>
          </h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary"></div>

            {/* Timeline items */}
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative pl-20 group">
                  {/* Timeline dot */}
                  <div className="absolute left-4 top-2 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all duration-300">
                    <Award className="w-4 h-4 text-background" />
                  </div>

                  {/* Content */}
                  <div className="p-6 rounded-xl bg-card border border-primary/20 group-hover:border-primary/50 transition-all duration-300 group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <h4 className="text-lg font-bold text-primary">{item.phase}</h4>
                      <span className="text-sm text-muted-foreground">{item.duration}</span>
                    </div>
                    <p className="text-foreground">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationPrograms;
