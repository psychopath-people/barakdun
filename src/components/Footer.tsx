import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import circuitPattern from "@/assets/circuit-pattern.jpg";

const Footer = () => {
  const partners = [
    { name: "Intel" },
    { name: "Axioo" },
    { name: "Makeblock" },
    { name: "Microsoft" },
    { name: "HP" },
    { name: "Lenovo" },
    { name: "ASUS" },
    { name: "Epson" },
  ];

  return (
    <footer id="contact" className="relative bg-background border-t border-primary/20 overflow-hidden">
      {/* Circuit background */}
      <div className="absolute inset-0 opacity-10">
        <img src={circuitPattern} alt="" className="w-full h-full object-cover" />
      </div>
      
      {/* Neon glow effect */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-background">BD</span>
              </div>
              <div>
                <div className="text-lg font-bold text-foreground">BARAKA DAYA</div>
                <div className="text-xs text-muted-foreground">UNGGUL</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Mitra terpercaya dalam transformasi digital pendidikan Indonesia melalui teknologi robotika dan AI.
            </p>
            {/* Social Media */}
            <div className="flex space-x-3">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-card border border-primary/20 hover:border-primary/50 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              {["Tentang Kami", "Layanan", "Program Pendidikan", "Event", "E-Katalog"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 inline-flex items-center group"
                  >
                    <span className="w-0 h-px bg-primary group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-foreground">Layanan Kami</h3>
            <ul className="space-y-3">
              {[
                "Perangkat IT Pendidikan",
                "Multimedia & AV",
                "Robotika Makeblock",
                "Intel® SFI Training",
                "Instalasi & Support",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 inline-flex items-center group"
                  >
                    <span className="w-0 h-px bg-primary group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-foreground">Kontak Kami</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div className="text-sm text-muted-foreground">
                  <p className="font-semibold text-foreground mb-1">Alamat Kantor</p>
                  <p>Jl. Raya Gresik No. 123</p>
                  <p>Gresik, Jawa Timur 61111</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="text-sm text-muted-foreground">
                  <p className="font-semibold text-foreground mb-1">Email</p>
                  <a href="mailto:info@barakadaya.co.id" className="hover:text-primary transition-colors">
                    info@barakadaya.co.id
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div className="text-sm text-muted-foreground">
                  <p className="font-semibold text-foreground mb-1">WhatsApp</p>
                  <a href="https://wa.me/62812345678" className="hover:text-primary transition-colors">
                    +62 812-3456-789
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="py-8 border-t border-primary/10">
          <p className="text-center text-sm text-muted-foreground mb-6">Partner Resmi</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="px-6 py-3 rounded-lg bg-card/50 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)]"
              >
                <span className="text-sm font-semibold text-muted-foreground">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 PT Baraka Daya Unggul. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom neon line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
    </footer>
  );
};

export default Footer;
