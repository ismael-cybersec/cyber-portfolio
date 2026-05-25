import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowRight, Github, Mail, MapPin, Phone, Linkedin } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { SectionHeader } from "@/components/SectionHeader";
import { SkillCard } from "@/components/SkillCard";
import { ProjectCard } from "@/components/ProjectCard";
import { CertificationCard } from "@/components/CertificationCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { useState } from "react";

/**
 * Design Philosophy: Elegant Professional Modern - Dark Theme
 * - Deep navy blue (#1e3a5f) as primary color
 * - Gold accents (#d4a574) for highlights
 * - Playfair Display for headings, Lato for body
 * - Soft shadows and subtle animations
 * - Dark background with light text for readability
 */

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

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

  const projets = [
    {
      titre: "VortexCore - Cluster Proxmox VE",
      description: "Cluster Proxmox VE 3 nœuds avec stockage NFS partagé (UNAS Pro 8), RAID 10 et RAID 5, haute disponibilité et sauvegardes pour plusieurs équipes (SOC, IAM, CyberRange).",
      tags: ["Proxmox VE", "Clustering", "NFS", "RAID", "Haute Disponibilité", "Infrastructure"],
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663382628638/WmRojeLpchBAbCWdyVAPFM/projects-showcase-nuYrFuXjrhnULQRkyUKLiG.webp",
      descriptionComplete: "Projet d'intégration en cybersécurité (VortexOps Inc.). Cluster Proxmox VE avec 3 nœuds physiques, stockage NFS partagé (UNAS Pro 8), RAID 10 et RAID 5 pour haute disponibilité et sauvegardes pour plusieurs équipes (SOC, IAM, CyberRange). Résolution de problèmes complexes : corosync, défaillance matérielle, blocage NFS par WatchGuard, erreurs APT. 2e place CYBER-CCNB 2026 - Trophée d'argent.",
    },
    {
      titre: "CyberSentinel - Système de Détection d'Intrusion",
      description: "Système de détection d'intrusion en Python/Scapy avec détection comportementale (ICMP flood, TCP SYN scan, SSH brute-force) et réponse automatisée via iptables.",
      tags: ["Python", "Scapy", "Détection d'Intrusion", "iptables", "Alertes JSON", "Sécurité Réseau"],
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663382628638/WmRojeLpchBAbCWdyVAPFM/skills-background-HVL74F6V2325d9BYjLDV4y.webp",
      descriptionComplete: "Système de détection d'intrusion avec détection comportementale : ICMP flood, TCP SYN scan, SSH brute-force avec sliding window, réponse automatisée via iptables et alertes JSON. Disponible sur github.com/ismael-cybersec/CyberSentinel",
    },
    {
      titre: "Simulation de Sensibilisation à l'Hameçonnage",
      description: "Conception et déploiement d'une campagne d'hameçonnage éducative à grande échelle ciblant les étudiants du CCNB (5 campus).",
      tags: ["Sensibilisation", "Sécurité", "Hameçonnage", "Analyse Comportementale", "Éducation"],
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663382628638/WmRojeLpchBAbCWdyVAPFM/hero-cybersecurity-dvbfngCY6SAPXZ4u5h4RAC.webp",
      descriptionComplete: "Création d'un environnement de connexion simulé à des fins de sensibilisation. Analyse du comportement des utilisateurs face à une simulation d'hameçonnage. Projet réalisé dans un contexte réel avec impact sur plusieurs campus.",
    },
  ];

  const certifications = [
    { name: "Cisco Ethical Hacker", issuer: "Cisco", year: "2025" },
    { name: "Cisco Network Technician Career Path", issuer: "Cisco", year: "2025" },
    { name: "Cisco Cyber Threat Management", issuer: "Cisco", year: "2025" },
    { name: "TryHackMe - Cyber Security 101", issuer: "TryHackMe", year: "2025" },
  ];

  const temoignages = [
    {
      text: "Ismael a démontré une connaissance technique exceptionnelle lors de la mise en place de notre infrastructure de laboratoire. Son attention aux détails et sa documentation étaient remarquables.",
      author: "Patrick Dambreville",
      role: "Superviseur, CCNB",
    },
    {
      text: "Travail impressionnant sur le projet VortexCore. L'implémentation du cluster Proxmox montre une compréhension profonde des principes d'infrastructure.",
      author: "Meriem Oultache",
      role: "Superviseur, CCNB",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation onContactClick={() => window.location.href = "#contact"} />

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
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2">
                  Voir Mes Projets <ArrowRight className="w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Télécharger CV
                </Button>
              </div>
              <div className="flex gap-6">
                <a href="https://github.com/ismael-cybersec" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors">
                  <Github className="w-5 h-5" /> GitHub
                </a>
                <a href="mailto:babyismael03@gmail.com" className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors">
                  <Mail className="w-5 h-5" /> Email
                </a>
                <a href="https://linkedin.com/in/ismael-abdallah-baby-5b7304318" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors">
                  <Linkedin className="w-5 h-5" /> LinkedIn
                </a>
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl"></div>
                <img
                  src="/manus-storage/ismael-profile.png"
                  alt="Ismael Baby"
                  className="relative w-full h-full object-cover rounded-full shadow-2xl border-4 border-accent/30"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* À Propos Section */}
      <section id="about" className="py-20 md:py-32 bg-secondary/20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">À Propos de Moi</h2>
              <div className="section-divider mb-6"></div>
              <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
                Je suis un étudiant en cybersécurité au CCNB avec une expérience pratique en support informatique, réseaux et infrastructures TI. Actuellement en stage en support informatique et réseautique où je participe à l'installation, la configuration et le dépannage d'environnements informatiques.
              </p>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Je suis intéressé par les postes de soutien technique, support TI et infrastructures junior. Mon expertise couvre la virtualisation, la configuration de réseaux d'entreprise, et les systèmes de détection d'intrusion.
              </p>
              <div className="flex gap-8 mb-8">
                <div>
                  <div className="text-3xl font-bold text-accent">15+</div>
                  <p className="text-foreground/60 text-sm">Projets Complétés</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">25+</div>
                  <p className="text-foreground/60 text-sm">Labs Complétés</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">2</div>
                  <p className="text-foreground/60 text-sm">Ans d'Expérience</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 text-foreground/70">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-accent" /> Moncton, NB
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-accent" /> (506) 962-1855
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-accent" /> babyismael03@gmail.com
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663382628638/WmRojeLpchBAbCWdyVAPFM/skills-background-HVL74F6V2325d9BYjLDV4y.webp"
                alt="À Propos"
                className="rounded-lg shadow-lg"
              />
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projets.map((projet, idx) => (
              <div key={idx} onClick={() => setSelectedProject(idx)} className="cursor-pointer">
                <ProjectCard
                  title={projet.titre}
                  description={projet.description}
                  tags={projet.tags}
                  image={projet.image}
                />
              </div>
            ))}
          </div>

          {/* Détails du Projet Modal */}
          {selectedProject !== null && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70" onClick={() => setSelectedProject(null)}>
              <Card className="card-elegant max-w-2xl w-full max-h-96 overflow-y-auto bg-card text-card-foreground">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">{projets[selectedProject].titre}</h3>
                  <p className="text-foreground/80 mb-6 leading-relaxed">{projets[selectedProject].descriptionComplete}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {projets[selectedProject].tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-accent/10 text-accent border-accent/30">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-accent hover:text-accent/80 transition-colors underline-accent"
                  >
                    Fermer
                  </button>
                </div>
              </Card>
            </div>
          )}
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
            <Card className="card-elegant p-6 bg-card/50">
              <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">Reconnaissance</Badge>
              <h3 className="text-xl font-bold text-primary mb-2">Prix Jeune Excellence</h3>
              <p className="text-foreground/70 mb-2">Reconnaissance du dynamisme et de l'engagement</p>
              <p className="text-foreground/60 text-sm">Avril 2026 - CYBER-CCNB 2026</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Témoignages Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <SectionHeader title="Retours des Superviseurs" />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {temoignages.map((temoignage, idx) => (
              <TestimonialCard key={idx} {...temoignage} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Parlons de Cybersécurité</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Intéressé par une collaboration, un stage ou une opportunité d'emploi ? N'hésitez pas à me contacter !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://github.com/ismael-cybersec" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 w-full sm:w-auto">
                Visiter GitHub <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
            <a href="mailto:babyismael03@gmail.com">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto">
                Envoyer un Email
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
