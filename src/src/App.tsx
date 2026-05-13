/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { 
  Menu, 
  X, 
  ChevronRight, 
  Star, 
  CheckCircle2, 
  Home, 
  Briefcase, 
  Users, 
  Heart, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  Phone, 
  Mail, 
  MapPin,
  Calendar,
  ShoppingBag,
  Car,
  GlassWater as WindowIcon,
  Stethoscope as ClinicIcon,
  School
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { AuroraHeroComponent } from "./components/ui/aurora-flow";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Startseite", href: "#" },
    { name: "Leistungen", href: "#services" },
    { name: "Über uns", href: "#about" },
    { name: "Kontakt", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled ? "bg-white/95 border-gray-100 py-4 md:py-6" : "bg-transparent border-white/20 py-6 md:py-8"}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-brand-dark rounded-full flex items-center justify-center">
             <div className="w-4 h-4 md:w-5 md:h-5 rounded-sm border-2 border-brand-mint rotate-45"></div>
          </div>
          <span className={`text-xl md:text-2xl font-display font-bold tracking-tight transition-colors ${isScrolled ? "text-brand-dark" : "text-white"}`}>
            Hand in Hand <span className="text-brand-mint">T&V</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className={`hidden md:flex items-center gap-8 font-medium text-sm uppercase tracking-widest transition-colors ${isScrolled ? "text-brand-dark" : "text-white/90"}`}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-brand-mint transition-colors">
              {link.name}
            </a>
          ))}
        </div>
        
        <div className="hidden md:block">
          <a href="mailto:handinhand.tv1@gmail.com" className={`inline-block px-6 py-2 rounded-xl font-bold text-sm tracking-widest transition-all ${isScrolled ? "border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white" : "border-2 border-white text-white hover:bg-white hover:text-brand-dark"}`}>
            Anfragen
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className={`md:hidden transition-colors ${isScrolled ? "text-brand-dark" : "text-white"}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium p-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
                <a href="mailto:handinhand.tv1@gmail.com" className="btn-primary w-full text-center">Jetzt anfragen</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <AuroraHeroComponent>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-48 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8 max-w-3xl"
          >
            <div className="inline-flex badge mb-0 bg-white/20 text-white border-white/30 backdrop-blur-md">
              Ihr Partner in Bremen
            </div>
            <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight animate-aurora-glow">
              Sauberkeit plus <br/>Alltagshilfe <br/><span className="text-brand-mint italic">mit Herz</span>
            </h1>
            <p className="text-white/80 text-base md:text-xl leading-relaxed mx-auto max-w-lg">
              Professionalität trifft menschliche Wärme. Wir unterstützen Sie im Alltag und sorgen für strahlende Sauberkeit in Ihrem Zuhause oder Büro.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="mailto:handinhand.tv1@gmail.com" className="w-full sm:w-auto bg-white text-brand-dark px-8 py-4 rounded-2xl font-bold text-lg shadow-xl transition-transform hover:scale-105 active:scale-95 leading-none text-center">
                Kostenlos anfragen
              </a>
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-xs md:text-sm text-white/60 font-medium tracking-tight">Rufen Sie uns an</span>
                <span className="text-white font-bold text-lg tracking-tight">+49 176 30414399</span>
              </div>
            </div>

            <div className="mt-12 flex flex-col items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://picsum.photos/seed/user${i}/100/100`} 
                    alt="Kunde" 
                    className="w-12 h-12 rounded-full border-4 border-white object-cover"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <div>
                <div className="flex text-yellow-400 mb-1 justify-center">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-sm font-medium text-white/70 tracking-wide">Über 500+ glückliche Haushalte</p>
              </div>
            </div>
          </motion.div>
        </div>
      </AuroraHeroComponent>
    </section>
  );
};

const ServicesGrid = () => {
  const services = [
    { title: "Privat-Reinigung", icon: <Home size={24} />, desc: "Ihr Zuhause ist bei uns in den besten Händen. Glanz für jeden Raum.", delay: 0.1 },
    { title: "Büro-Reinigung", icon: <Briefcase size={24} />, desc: "Schaffen Sie eine produktive Umgebung für Ihr Team durch Sauberkeit.", delay: 0.2 },
    { title: "Fenster-Reinigung", icon: <WindowIcon size={24} />, desc: "Kristallklare Durchblicke für Ihr Haus oder Ihr Unternehmen.", delay: 0.3 },
    { title: "Praxis-Reinigung", icon: <ClinicIcon size={24} />, desc: "Höchste Hygienestandards für medizinische Einrichtungen.", delay: 0.4 },
    { title: "Schul- & Kita", icon: <School size={24} />, desc: "Saubere Räume für unsere Kleinsten zum Spielen und Lernen.", delay: 0.5 },
    { title: "Alltagshilfe", icon: <Users size={24} />, desc: "Persönliche Unterstützung bei den kleinen und großen Hürden im Alltag.", delay: 0.6 },
    { title: "Einkaufshilfe", icon: <ShoppingBag size={24} />, desc: "Wir erledigen Ihre Einkäufe oder begleiten Sie dabei gerne.", delay: 0.7 },
    { title: "Fahrdienst", icon: <Car size={24} />, desc: "Sichere Begleitung zu Terminen, Ärzten oder Veranstaltungen.", delay: 0.8 },
  ];

  return (
    <section id="services" className="py-20 md:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-light flex items-center justify-center group-hover:bg-brand-dark transition-colors duration-300 flex-shrink-0">
                <div className="text-brand-dark group-hover:text-brand-mint transition-colors">
                  {service.icon}
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-brand-dark leading-tight text-sm md:text-base">{service.title}</h3>
                <p className="text-[10px] md:text-xs text-slate-400">Professionell & Kompetent</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <div className="space-y-6 md:space-y-8">
          <div className="badge mx-auto">Ganz persönlich</div>
          <h3 className="text-3xl md:text-5xl font-display text-brand-dark leading-tight">Wir reichen Ihnen die <span className="text-brand-mint">Hand</span> im Alltag.</h3>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Im Gegensatz zu klassischen Reinigungsfirmen liegt unser Fokus nicht nur auf starren Dienstleistungen, sondern auf den Menschen dahinter. "Hand in Hand" bedeutet für uns gegenseitiges Vertrauen und Unterstützung.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 text-left mt-12">
            {[
              { title: "Qualität mit Herz", desc: "Wir reinigen nicht nur, wir sorgen uns um Ihr Wohlbefinden." },
              { title: "Vertrauen & Diskretion", desc: "Zertifiziertes Personal, dem Sie Ihre Schlüssel anvertrauen können." },
              { title: "Bremen & Umgebung", desc: "Lokal verwurzelt, flexibel und immer persönlich für Sie da." }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-mint/10 rounded-full flex items-center justify-center text-brand-mint">
                  <ShieldCheck />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <a href="mailto:handinhand.tv1@gmail.com" className="btn-primary inline-block">Lernen Sie uns kennen</a>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatsBar = () => {
  return (
    <div className="bg-brand-dark py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-mint opacity-5 blur-[100px] -translate-x-1/2" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative z-10">
        {[
          { label: "Haushalte", val: "200+" },
          { label: "Stunden", val: "3000+" },
          { label: "Zufriedenheit", val: "99%" },
        ].map((stat, i) => (
          <div key={i} className="text-white">
            <div className="text-4xl md:text-5xl font-display font-extrabold mb-3 tracking-tighter text-brand-mint">{stat.val}</div>
            <div className="text-[10px] md:text-xs opacity-50 font-bold uppercase tracking-widest">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: "Sabine M.", role: "Seniorin", text: "Die Hilfe beim Einkaufen und der wöchentliche Hausputz haben mir so viel Lebensqualität zurückgegeben. Ein wunderbares Team!", img: "https://picsum.photos/seed/p1/100/100" },
    { name: "Klaus H.", role: "Unternehmer", text: "Professionell, pünktlich und absolut diskret. Unsere Büroräume glänzen jeden Morgen. Absolut empfehlenswert.", img: "https://picsum.photos/seed/p2/100/100" },
    { name: "Familie Weber", role: "Vollzeit-Eltern", text: "Die Unterhaltsreinigung ist einfach erstklassig. Alles glänzt, sogar die schwierigsten Ecken werden nicht vergessen. Absolute Empfehlung!", img: "https://picsum.photos/seed/p3/100/100" },
  ];

  return (
    <section id="reviews" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-widest text-brand-mint font-bold mb-4">Referenzen</h2>
          <h3 className="text-4xl font-display text-brand-dark mb-4">Das sagen unsere Kunden</h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between"
            >
              <div>
                <div className="flex text-yellow-400 mb-6 font-display">
                   {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-600 italic mb-8 leading-relaxed">"{rev.text}"</p>
              </div>
              <div className="flex items-center gap-4">
                <img src={rev.img} alt={rev.name} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="font-bold text-brand-dark">{rev.name}</h4>
                  <p className="text-xs text-brand-mint font-semibold uppercase">{rev.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactDetailsSection = () => {
  return (
    <section id="contact-info" className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-start">
        <div className="space-y-12">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display text-brand-dark mb-10 leading-tight">Kontakt aufnehmen</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4 md:gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-brand-light rounded-2xl flex items-center justify-center text-brand-dark group-hover:bg-brand-dark group-hover:text-brand-mint transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Telefon</p>
                  <p className="text-lg md:text-xl font-bold text-brand-dark">+49 176 30414399</p>
                  <p className="text-lg md:text-xl font-bold text-brand-dark">+49 0172 6035384</p>
                </div>
              </div>

              <div className="flex items-start gap-4 md:gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-brand-light rounded-2xl flex items-center justify-center text-brand-dark group-hover:bg-brand-dark group-hover:text-brand-mint transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">E-Mail</p>
                  <p className="text-lg md:text-xl font-bold text-brand-dark underline decoration-brand-mint/30 hover:decoration-brand-mint transition-all">
                    handinhand.tv1@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 md:gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-brand-light rounded-2xl flex items-center justify-center text-brand-dark group-hover:bg-brand-dark group-hover:text-brand-mint transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Adresse</p>
                  <p className="text-lg md:text-xl font-bold text-brand-dark">Bürgermeister-Kürten-Str 39</p>
                  <p className="text-lg md:text-xl font-bold text-brand-dark">28779 Bremen</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="relative rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl h-[400px] md:h-[500px] bg-slate-100 border-4 md:border-8 border-white"
        >
          {/* Map Placeholder with visual style inspired by image */}
          <div className="absolute inset-0 bg-[#E2F0F1] overflow-hidden">
             {/* Abstract map lines */}
             <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-1/4 left-0 w-full h-[2px] bg-brand-dark rotate-12"></div>
                <div className="absolute top-1/2 left-0 w-full h-[2px] bg-brand-dark -rotate-6"></div>
                <div className="absolute top-0 left-1/3 w-[2px] h-full bg-brand-dark rotate-3"></div>
                <div className="absolute top-0 left-2/3 w-[2px] h-full bg-brand-dark -rotate-12"></div>
             </div>
             
             {/* Map Content Overlay (Simulating search result) */}
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                   <div className="absolute -top-16 -left-1/2 w-48 bg-white p-3 rounded-xl shadow-xl border border-slate-100 whitespace-nowrap z-10 transition-transform hover:scale-105">
                      <p className="text-xs font-bold text-brand-dark">Hand in Hand T&V</p>
                      <p className="text-[10px] text-slate-400">Bürgermeister-Kürten-Str 39</p>
                   </div>
                   <div className="w-12 h-12 bg-brand-mint rounded-full flex items-center justify-center text-white border-4 border-white shadow-lg animate-bounce">
                      <div className="w-4 h-4 bg-white rounded-sm rotate-45"></div>
                   </div>
                   <div className="absolute top-12 left-1/2 -translate-x-1/2 w-12 h-4 bg-black/10 rounded-[100%] blur-sm"></div>
                </div>
             </div>
             
             {/* Realistic map appearance */}
             <img 
               src="https://maps.googleapis.com/maps/api/staticmap?center=Bürgermeister-Kürten-Str+39+28779+Bremen&zoom=15&size=800x800&scale=2&maptype=roadmap&markers=color:0x48C9B0%7CBürgermeister-Kürten-Str+39+28779+Bremen&key=" 
               alt="Map Area"
               className="w-full h-full object-cover opacity-60 mix-blend-multiply"
             />
          </div>
          
          <div className="absolute bottom-6 right-6 flex flex-col gap-2">
             <button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center text-brand-dark font-bold hover:bg-brand-mint hover:text-white transition-all">+</button>
             <button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center text-brand-dark font-bold hover:bg-brand-mint hover:text-white transition-all">-</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section id="contact" className="py-24 bg-white px-4">
      <div className="max-w-5xl mx-auto relative overflow-hidden bg-brand-dark rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-mint opacity-20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-teal opacity-10 blur-3xl rounded-full" />
        
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">
            Bereit für ein saubereres & <br /> entspannteres Leben?
          </h2>
          <p className="text-lg opacity-70 mb-12 max-w-2xl mx-auto">
            Holen Sie sich jetzt Ihr unverbindliches Angebot. Wir beraten Sie gerne persönlich in einem kostenlosen Erstgespräch.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a href="mailto:handinhand.tv1@gmail.com" className="btn-primary w-full sm:w-auto text-center">Kostenlos Anfragen</a>
            <a href="tel:+4917630414399" className="flex items-center gap-3 text-xl font-bold hover:text-brand-mint transition-all">
              <div className="p-3 bg-white/10 rounded-full">
                <Phone size={24} />
              </div>
              +49 176 30414399
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-light border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-brand-mint rounded-lg flex items-center justify-center text-white">
              <Heart size={18} fill="currentColor" />
            </div>
            <span className="text-xl font-display font-bold">Hand in Hand</span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            Ihre Experten für professionelle Reinigung und Alltagshilfe in Bremen. Wir bringen Qualität und Herzlichkeit in Ihren Alltag.
          </p>
          <div className="flex gap-4">
             {/* Social Placeholder Icons */}
             {[1,2,3].map(i => (
               <div key={i} className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-brand-mint hover:text-white transition-all cursor-pointer shadow-sm">
                 <Sparkles size={18} />
               </div>
             ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold text-brand-dark mb-6 text-lg">Leistungen</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><a href="#" className="hover:text-brand-mint">Privatreinigung</a></li>
            <li><a href="#" className="hover:text-brand-mint">Büroreinigung</a></li>
            <li><a href="#" className="hover:text-brand-mint">Alltagshilfe</a></li>
            <li><a href="#" className="hover:text-brand-mint">Fahrdienst</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-brand-dark mb-6 text-lg">Unternehmen</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><a href="#" className="hover:text-brand-mint">Über uns</a></li>
            <li><a href="#" className="hover:text-brand-mint">Karriere</a></li>
            <li><a href="#" className="hover:text-brand-mint">Datenschutz</a></li>
            <li><a href="#" className="hover:text-brand-mint">Impressum</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-brand-dark mb-6 text-lg">Kontakt</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-brand-mint" />
              Bremen, Deutschland
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-brand-mint" />
              <a href="mailto:handinhand.tv1@gmail.com" className="hover:text-brand-mint transition-colors">handinhand.tv1@gmail.com</a>
            </li>
            <li className="flex items-center gap-3">
              <Calendar size={18} className="text-brand-mint" />
              Mo - Fr: 08:00 - 18:00
            </li>
          </ul>
        </div>
      </div>
      
      <div className="bg-white py-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:row-nowrap justify-between items-center text-xs text-gray-400 font-medium tracking-wider">
          <p>© {new Date().getFullYear()} Hand in Hand T&V. Alle Rechte vorbehalten.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
             <a href="#" className="hover:text-brand-mint">AGB</a>
             <a href="#" className="hover:text-brand-mint">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const BeforeAndAfter = () => {
  const comparisons = [
    {
      title: "Küche",
      desc: "Tiefenreinigung aller Oberflächen und Schränke.",
      before: "https://picsum.photos/seed/kitchen-before/800/600",
      after: "https://picsum.photos/seed/kitchen-after/800/600"
    },
    {
      title: "Badezimmer",
      desc: "Kalkentfernung und strahlender Glanz für Ihre Armaturen.",
      before: "https://picsum.photos/seed/bath-before/800/600",
      after: "https://picsum.photos/seed/bath-after/800/600"
    },
    {
      title: "Wohnbereich",
      desc: "Professionelle Bodenpflege und Staubentfernung.",
      before: "https://picsum.photos/seed/living-before/800/600",
      after: "https://picsum.photos/seed/living-after/800/600"
    }
  ];

  return (
    <section className="py-20 md:py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <div className="badge">Unsere Projekte</div>
          <h3 className="text-3xl md:text-5xl font-display text-brand-dark mb-6">Vorher & Nachher</h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Überzeugen Sie sich selbst von der Qualität unserer Arbeit. Wir lassen keine Wünsche offen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {comparisons.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-xl mb-6 flex">
                <div className="relative w-1/2 h-full">
                   <img src={item.before} alt="Vorher" className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
                   <div className="absolute top-4 left-4 bg-brand-dark/80 text-white text-[10px] uppercase font-bold px-2 py-1 rounded backdrop-blur-sm">Vorher</div>
                </div>
                <div className="relative w-1/2 h-full border-l-2 border-white">
                   <img src={item.after} alt="Nachher" className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
                   <div className="absolute top-4 right-4 bg-brand-mint text-white text-[10px] uppercase font-bold px-2 py-1 rounded shadow-lg">Nachher</div>
                </div>
              </div>
              <h4 className="text-xl font-bold text-brand-dark mb-2 tracking-tight">{item.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <main className="min-h-screen selection:bg-brand-mint/30 selection:text-brand-dark">
      <Navbar />
      <Hero />
      <StatsBar />
      <ServicesGrid />
      <AboutSection />
      <BeforeAndAfter />
      <Testimonials />
      <CTASection />
      <ContactDetailsSection />
      <Footer />
    </main>
  );
}

