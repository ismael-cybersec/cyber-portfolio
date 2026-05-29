import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowRight, Github, Mail, MapPin, Phone, Linkedin, Send } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { SkillCard } from "@/components/SkillCard";
import { ProjectCard } from "@/components/ProjectCard";
import { CertificationCard } from "@/components/CertificationCard";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("https://formspree.io/f/xredjoda", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `Nouveau message de ${formData.name}`,
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="card-elegant p-8 bg-card/50">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Votre nom"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="votre.email@exemple.com"
            />
          </div>
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
            Sujet
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Sujet de votre message"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
            placeholder="Votre message..."
          />
        </div>
        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center px-6 py-3 bg-accent text-background font-semibold rounded-lg hover:bg-accent/90 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="h-5 w-5 mr-2" />
            {isSubmitting ? "Envoi en cours..." : "Envoyer"}
          </button>
          {submitStatus === "success" && (
            <p className="text-green-500 font-medium">✓ Message envoyé avec succès!</p>
          )}
          {submitStatus === "error" && (
            <p className="text-red-500 font-medium">✗ Erreur lors de l'envoi. Veuillez réessayer.</p>
          )}
        </div>
      </form>
    </Card>
  );
}

export default function Home() {

  const competences = [
    {
      category: "Support Informatique",
      items: ["Dépannage matériel et logiciel", "Diagnostic réseau", "Assistance technique", "Documentation", "Support utilisateur", "Gestion des tickets"],
    },
    {
      category: "Réseaux",
      items: ["TCP/IP", "VLAN", "DHCP", "NAT", "Cisco", "Ubiquiti", "WatchGuard", "Wi-Fi", "SSH", "ACL"],
    },
    {
      category: "Virtualisation & Systèmes",
      items: ["Proxmox VE", "VMware", "VirtualBox", "Windows Server", "Active Directory", "Clustering", "NFS", "RAID"],
    },
    {
      category: "Cybersécurité",
      items: ["Wireshark", "Wazuh", "Snort", "Kali Linux", "SIEM", "Pare-feux", "Sécurité réseau", "Surveillance réseau"],
    },
  ];

  const certifications = [
    { name: "Cisco Ethical Hacker", issuer: "Cisco", year: "2025" },
    { name: "Cisco Network Technician Career Path", issuer: "Cisco", year: "2025" },
    { name: "Cisco Cyber Threat Management", issuer: "Cisco", year: "2025" },
    { name: "TryHackMe - Cyber Security 101", issuer: "TryHackMe", year: "2025" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation onContactClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663382628638/WmRojeLpchBAbCWdyVAPFM/hero-cybersecurity-dvbfngCY6SAPXZ4u5h4RAC.webp"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/60"></div>
        </div>

        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">Ismael Baby</h1>
              <p className="text-2xl text-accent mb-4">Étudiant en Cybersécurité</p>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                Support informatique | Réseaux et infrastructures TI | Spécialisé en systèmes de détection d'intrusion et architecture de sécurité d'entreprise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center justify-center px-6 py-3 bg-accent text-background font-semibold rounded-lg hover:bg-accent/90 transition-colors duration-300"
                >
                  Voir Mes Projets <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center justify-center px-6 py-3 border border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-colors duration-300"
                >
                  Me Contacter
                </button>
              </div>
              <div className="flex gap-6">
                <a href="#" className="flex items-center gap-2 text-foreground/70 hover:text-accent transition-colors">
                  <Github className="h-5 w-5" />
                  <span>GitHub</span>
                </a>
                <a href="mailto:ismael@example.com" className="flex items-center gap-2 text-foreground/70 hover:text-accent transition-colors">
                  <Mail className="h-5 w-5" />
                  <span>Email</span>
                </a>
                <a href="#" className="flex items-center gap-2 text-foreground/70 hover:text-accent transition-colors">
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 rounded-full border-2 border-accent/30"></div>
                <div className="absolute inset-4 rounded-full border border-accent/20"></div>
                <img
                  src="/cyber-portfolio/moi.png"
                  alt="Ismael Baby"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* À Propos Section */}
      <section id="about" className="py-20 md:py-32 bg-secondary/20">
        <div className="container max-w-4xl">
          <SectionHeader title="À Propos" />
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <p className="text-lg text-foreground/80 leading-relaxed">
                Je suis un étudiant passionné en cybersécurité avec une expérience pratique approfondie en infrastructure réseau, virtualisation et sécurité informatique. Mes compétences couvrent le support informatique, les réseaux d'entreprise, la virtualisation avec Proxmox VE et les systèmes de détection d'intrusion avancés.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Actuellement, je me concentre sur le développement de solutions de sécurité robustes et l'apprentissage des techniques avancées de test de pénétration. Mon objectif est de devenir un expert en cybersécurité et de contribuer à la protection des infrastructures critiques.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-bold text-accent">2</div>
                <div>
                  <p className="text-sm text-foreground/60">Ans d'études</p>
                  <p className="text-foreground">En cybersécurité</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-4xl font-bold text-accent">15+</div>
                <div>
                  <p className="text-sm text-foreground/60">Projets et labs</p>
                  <p className="text-foreground">Complétés avec succès</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-4xl font-bold text-accent">4</div>
                <div>
                  <p className="text-sm text-foreground/60">Certifications</p>
                  <p className="text-foreground">Cisco et TryHackMe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compétences Section */}
      <section id="skills" className="py-20 md:py-32">
        <div className="container">
          <SectionHeader title="Compétences Principales" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {competences.map((comp) => (
              <SkillCard key={comp.category} category={comp.category} items={comp.items} />
            ))}
          </div>
        </div>
      </section>

      {/* Projets Section */}
      <section id="projects" className="py-20 md:py-32 bg-secondary/20">
        <div className="container">
          <SectionHeader title="Projets Vedettes" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/projects/stage" className="cursor-pointer">
              <ProjectCard
                title="Stage - Laboratoire de Réseautique"
                description="6 semaines de stage intensif en laboratoire de réseautique couvrant la mise en place complète d'une infrastructure réseau professionnelle avec câblage, configuration VLAN, DHCP, NAT et tests complets."
                tags={["Réseautique", "Cisco", "VLAN", "DHCP", "NAT", "Infrastructure"]}
                image="https://d2xsxph8kpxj0f.cloudfront.net/310519663382628638/WmRojeLpchBAbCWdyVAPFM/skills-background-wJKfmNjJQe9N7mKZ8VQxWq.webp"
              />
            </Link>
            <Link href="/projects/vortexcore" className="cursor-pointer">
              <ProjectCard
                title="VortexCore - Cluster Proxmox VE"
                description="Cluster Proxmox VE 3 nœuds avec stockage NFS partagé (UNAS Pro 8), RAID 10 et RAID 5, haute disponibilité et sauvegardes pour plusieurs équipes (SOC, IAM, CyberRange)."
                tags={["Proxmox VE", "Clustering", "NFS", "RAID", "Haute Disponibilité", "Infrastructure"]}
                image="https://d2xsxph8kpxj0f.cloudfront.net/310519663382628638/WmRojeLpchBAbCWdyVAPFM/projects-showcase-nuYrFuXjrhnULQRkyUKLiG.webp"
              />
            </Link>
            <Link href="/projects/ethical-hacking" className="cursor-pointer">
              <ProjectCard
                title="Projet d'Ethical Hacking"
                description="Tests de pénétration avancés, reconnaissance active et exploitation de vulnérabilités critiques avec Nmap, GoPhish et Wireshark."
                tags={["Ethical Hacking", "Pentest", "Nmap", "GoPhish", "Wireshark", "Sécurité"]}
                image="https://d2xsxph8kpxj0f.cloudfront.net/310519663382628638/WmRojeLpchBAbCWdyVAPFM/hero-cybersecurity-dvbfngCY6SAPXZ4u5h4RAC.webp"
              />
            </Link>
            <Link href="/projects/phishing" className="cursor-pointer">
              <ProjectCard
                title="Projet de Simulation de Phishing"
                description="Campagne de sensibilisation aux techniques d'ingénierie sociale et d'hameçonnage avec analyse des secteurs vulnérables au Canada."
                tags={["Phishing", "Sensibilisation", "Ingénierie Sociale", "SECS1026", "Groupe"]}
                image="https://d2xsxph8kpxj0f.cloudfront.net/310519663382628638/WmRojeLpchBAbCWdyVAPFM/hero-cybersecurity-dvbfngCY6SAPXZ4u5h4RAC.webp"
              />
            </Link>
            <Link href="/projects/active-directory-labs" className="cursor-pointer">
              <ProjectCard
                title="Active Directory Labs"
                description="Reconnaissance Active Directory complète, énumération des services, analyse des protocoles NTLM et Kerberos, password spraying et exploitation des vulnérabilités d'authentification."
                tags={["Active Directory", "NTLM", "Kerberos", "Reconnaissance", "SECS1028"]}
                image="https://d2xsxph8kpxj0f.cloudfront.net/310519663382628638/WmRojeLpchBAbCWdyVAPFM/hero-cybersecurity-dvbfngCY6SAPXZ4u5h4RAC.webp"
              />
            </Link>
            <Link href="/projects/yodeck" className="cursor-pointer">
              <ProjectCard
                title="Projet Yodeck - Affichage Dynamique"
                description="Système d'affichage dynamique centralisé sur Raspberry Pi 4 avec gestion de contenu web, virtualisation et déploiement professionnel."
                tags={["Yodeck", "Raspberry Pi", "Affichage Dynamique", "Virtualisation", "OSSE1087"]}
                image="https://d2xsxph8kpxj0f.cloudfront.net/310519663382628638/WmRojeLpchBAbCWdyVAPFM/hero-cybersecurity-dvbfngCY6SAPXZ4u5h4RAC.webp"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <SectionHeader title="Certifications & Formations" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <CertificationCard key={cert.name} name={cert.name} issuer={cert.issuer} year={cert.year} />
            ))}
          </div>
        </div>
      </section>

      {/* Récompenses Section */}
      <section className="py-20 md:py-32 bg-secondary/20">
        <div className="container">
          <SectionHeader title="Prix et Distinctions" />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="card-elegant p-6 bg-card/50">
              <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">2e Place</Badge>
              <h3 className="text-xl font-bold text-primary mb-2">CYBER-CCNB 2026 - VortexCore</h3>
              <p className="text-foreground/70 mb-2">Trophée d'argent</p>
              <p className="text-foreground/60 text-sm">Avril 2026 - Projet d'intégration en cybersécurité</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32">
        <div className="container max-w-2xl">
          <SectionHeader title="Me Contacter" />
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
