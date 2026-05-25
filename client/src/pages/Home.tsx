import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowRight, Github, Mail, MapPin } from "lucide-react";
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
 * Design Philosophy: Elegant Professional Modern
 * - Deep navy blue (#1e3a5f) as primary color
 * - Gold accents (#d4a574) for highlights
 * - Playfair Display for headings, Lato for body
 * - Soft shadows and subtle animations
 */

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const skills = [
    {
      category: "Networking",
      items: ["VLAN Configuration", "DHCP Server Setup", "NAT & Routing", "Cisco Packet Tracer", "Network Topology Design", "Inter-VLAN Routing"],
    },
    {
      category: "Cybersecurity",
      items: ["Intrusion Detection Systems", "SSH Brute-Force Detection", "Network Packet Analysis", "Firewall Configuration", "Behavioral Threat Detection", "Automated Response Systems"],
    },
    {
      category: "Infrastructure",
      items: ["Cisco Equipment Configuration", "Server Setup & Management", "VLAN Segmentation", "Network Security", "Lab Infrastructure Design", "Equipment Inventory Management"],
    },
    {
      category: "Tools & Technologies",
      items: ["Cisco Packet Tracer", "Scapy (Python)", "iptables", "Kali Linux", "Ubuntu Server", "VirtualBox", "Hydra", "GitHub"],
    },
  ];

  const projects = [
    {
      title: "CyberSentinel v2 - Intrusion Detection System",
      description: "Advanced behavioral intrusion detection prototype with SSH brute-force detection, real-time packet inspection, and automated firewall mitigation using Python and Scapy.",
      tags: ["Python", "Scapy", "SSH Detection", "Automated Response", "Network Security"],
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663382628638/WmRojeLpchBAbCWdyVAPFM/projects-showcase-nuYrFuXjrhnULQRkyUKLiG.webp",
      fullDescription: "CyberSentinel v2 represents an evolution from the initial behavioral intrusion detection prototype. The system monitors TCP SYN packets directed toward SSH (port 22) and tracks connection attempts within a 5-second sliding time window. Once the threshold is exceeded, the system automatically generates a CRITICAL severity alert, logs the event in structured JSON format, and dynamically inserts a firewall rule to block the attacker's IP address. Successfully tested against Hydra-based SSH brute-force attacks on Ubuntu Server.",
    },
    {
      title: "VLAN-DHCP-NAT Lab - Enterprise Network",
      description: "Complete enterprise network simulation in Cisco Packet Tracer featuring VLAN segmentation, DHCP server, NAT configuration, and inter-VLAN routing for admin and student networks.",
      tags: ["Cisco Packet Tracer", "VLAN", "DHCP", "NAT", "Routing", "Network Design"],
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663382628638/WmRojeLpchBAbCWdyVAPFM/skills-background-HVL74F6V2325d9BYjLDV4y.webp",
      fullDescription: "This comprehensive lab demonstrates the design and configuration of a real small business network. The network includes VLAN 10 (Administration) and VLAN 20 (Students), DHCP server configuration for automatic IP distribution, NAT configuration for internet access, and inter-VLAN routing. All tests passed including ping between VLANs, DHCP IP assignment, and internet connectivity verification.",
    },
    {
      title: "Laboratory Infrastructure Setup & Documentation",
      description: "Lead role in designing and implementing a complete networking and cybersecurity laboratory infrastructure for educational purposes including equipment installation, cabling, and configuration.",
      tags: ["Cisco", "Ubiquiti", "Infrastructure", "VLAN", "Proxmox", "Documentation"],
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663382628638/WmRojeLpchBAbCWdyVAPFM/hero-cybersecurity-dvbfngCY6SAPXZ4u5h4RAC.webp",
      fullDescription: "6-week internship project involving the complete setup of a laboratory infrastructure for networking and cybersecurity courses. Responsibilities included physical infrastructure planning, network cabling with proper documentation, equipment configuration (Cisco, Ubiquiti, WatchGuard), VLAN design and implementation, server setup on Proxmox, and comprehensive technical documentation. Successfully delivered a fully operational laboratory environment for student practical work.",
    },
  ];

  const certifications = [
    { name: "Cybersecurity Specialization", issuer: "Educational Institution", year: "2026" },
    { name: "Cisco Networking Fundamentals", issuer: "Cisco", year: "2025" },
    { name: "Ethical Hacking Fundamentals", issuer: "Educational Institution", year: "2025" },
    { name: "Network Security Essentials", issuer: "Educational Institution", year: "2026" },
  ];

  const testimonials = [
    {
      text: "Ismael demonstrated exceptional technical knowledge in setting up our laboratory infrastructure. His attention to detail and documentation was outstanding.",
      author: "Patrick Dambreville",
      role: "Supervisor, Educational Institution",
    },
    {
      text: "Impressive work on the CyberSentinel project. The implementation of service-aware detection shows deep understanding of network security principles.",
      author: "Meriem Oultache",
      role: "Supervisor, Educational Institution",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation onContactClick={() => window.location.href = "#contact"} />

      {/* Hero Section */}
      <HeroSection
        title="Ismael Baby"
        subtitle="Cybersecurity Student & Network Security Enthusiast. Specialized in intrusion detection systems, network infrastructure, and enterprise security architecture."
        backgroundImage="https://d2xsxph8kpxj0f.cloudfront.net/310519663382628638/WmRojeLpchBAbCWdyVAPFM/hero-cybersecurity-dvbfngCY6SAPXZ4u5h4RAC.webp"
        primaryButtonText="View My Projects"
        secondaryButtonText="GitHub Profile"
      />

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-secondary/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">About Me</h2>
              <div className="section-divider mb-6"></div>
              <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
                I'm a passionate cybersecurity professional with hands-on experience in network infrastructure, intrusion detection systems, and enterprise security architecture. Currently completing my cybersecurity specialization with focus on practical lab work and real-world security implementations.
              </p>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                My expertise spans network configuration, behavioral threat detection, automated response systems, and infrastructure design. I'm committed to building secure, resilient systems and staying ahead of emerging security threats.
              </p>
              <div className="flex gap-8 mb-8">
                <div>
                  <div className="text-3xl font-bold text-accent">15+</div>
                  <p className="text-foreground/60 text-sm">Projects Completed</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">25+</div>
                  <p className="text-foreground/60 text-sm">Labs Completed</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">2</div>
                  <p className="text-foreground/60 text-sm">Years Experience</p>
                </div>
              </div>
              <div className="flex gap-4">
                <a href="https://github.com/ismael-cybersec" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors">
                  <Github className="w-5 h-5" /> GitHub
                </a>
                <a href="mailto:ismael.baby@example.com" className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors">
                  <Mail className="w-5 h-5" /> Email
                </a>
                <div className="flex items-center gap-2 text-foreground/60">
                  <MapPin className="w-5 h-5" /> Canada
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663382628638/WmRojeLpchBAbCWdyVAPFM/skills-background-HVL74F6V2325d9BYjLDV4y.webp"
                alt="About"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 md:py-32">
        <div className="container">
          <SectionHeader title="Core Competencies" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup) => (
              <SkillCard key={skillGroup.category} {...skillGroup} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-32 bg-secondary/30">
        <div className="container">
          <SectionHeader title="Featured Projects" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} onClick={() => setSelectedProject(idx)} className="cursor-pointer">
                <ProjectCard {...project} />
              </div>
            ))}
          </div>

          {/* Project Details Modal */}
          {selectedProject !== null && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={() => setSelectedProject(null)}>
              <Card className="card-elegant max-w-2xl w-full max-h-96 overflow-y-auto">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">{projects[selectedProject].title}</h3>
                  <p className="text-foreground/80 mb-6 leading-relaxed">{projects[selectedProject].fullDescription}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {projects[selectedProject].tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-accent/10 text-accent border-accent/30">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-accent hover:text-accent/80 transition-colors underline-accent"
                  >
                    Close
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
          <SectionHeader title="Certifications & Training" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <CertificationCard key={cert.name} {...cert} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container">
          <SectionHeader title="Supervisor Feedback" />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <TestimonialCard key={idx} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Interested in discussing cybersecurity projects, network infrastructure, or collaboration opportunities? Feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://github.com/ismael-cybersec" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 w-full sm:w-auto">
                Visit GitHub <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
            <a href="mailto:ismael.baby@example.com">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto">
                Send Email
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
