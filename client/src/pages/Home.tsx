import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { SectionHeader } from "@/components/SectionHeader";
import { SkillCard } from "@/components/SkillCard";
import { ProjectCard } from "@/components/ProjectCard";
import { CertificationCard } from "@/components/CertificationCard";
import { TestimonialCard } from "@/components/TestimonialCard";

/**
 * Design Philosophy: Elegant Professional Modern
 * - Deep navy blue (#1e3a5f) as primary color
 * - Gold accents (#d4a574) for highlights
 * - Playfair Display for headings, Lato for body
 * - Soft shadows and subtle animations
 */

export default function Home() {
  const skills = [
    { category: "Security", items: ["Penetration Testing", "Vulnerability Assessment", "Security Audits", "Risk Management"] },
    { category: "Infrastructure", items: ["Network Security", "Firewall Configuration", "IDS/IPS", "Cloud Security"] },
    { category: "Compliance", items: ["GDPR", "ISO 27001", "HIPAA", "SOC 2"] },
    { category: "Tools", items: ["Metasploit", "Burp Suite", "Wireshark", "Nessus"] },
  ];

  const projects = [
    {
      title: "Enterprise Security Assessment",
      description: "Comprehensive security audit for Fortune 500 company identifying critical vulnerabilities and remediation strategies.",
      tags: ["Penetration Testing", "Risk Analysis", "Reporting"],
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663382628638/WmRojeLpchBAbCWdyVAPFM/projects-showcase-nuYrFuXjrhnULQRkyUKLiG.webp",
    },
    {
      title: "Cloud Infrastructure Hardening",
      description: "Designed and implemented zero-trust security architecture for multi-cloud environment with 99.9% uptime.",
      tags: ["Cloud Security", "Infrastructure", "DevSecOps"],
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663382628638/WmRojeLpchBAbCWdyVAPFM/skills-background-HVL74F6V2325d9BYjLDV4y.webp",
    },
    {
      title: "Incident Response Framework",
      description: "Developed comprehensive incident response procedures reducing mean time to resolution by 60%.",
      tags: ["Incident Response", "Process Design", "Training"],
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663382628638/WmRojeLpchBAbCWdyVAPFM/hero-cybersecurity-dvbfngCY6SAPXZ4u5h4RAC.webp",
    },
  ];

  const certifications = [
    { name: "CISSP", issuer: "ISC²", year: "2023" },
    { name: "CEH", issuer: "EC-Council", year: "2022" },
    { name: "OSCP", issuer: "Offensive Security", year: "2022" },
    { name: "Security+", issuer: "CompTIA", year: "2021" },
  ];

  const testimonials = [
    {
      text: "Exceptional expertise in identifying security vulnerabilities. Their recommendations significantly improved our security posture.",
      author: "Sarah Johnson",
      role: "CISO, Tech Corp",
    },
    {
      text: "Professional, thorough, and results-oriented. Highly recommended for any organization serious about cybersecurity.",
      author: "Michael Chen",
      role: "VP Operations, Financial Services",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation onContactClick={() => window.location.href = "#contact"} />

      {/* Hero Section */}
      <HeroSection
        title="Cybersecurity Expert"
        subtitle="Protecting digital assets and building resilient security infrastructure for enterprises worldwide."
        backgroundImage="https://d2xsxph8kpxj0f.cloudfront.net/310519663382628638/WmRojeLpchBAbCWdyVAPFM/hero-cybersecurity-dvbfngCY6SAPXZ4u5h4RAC.webp"
        primaryButtonText="View My Work"
        secondaryButtonText="Download CV"
      />

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-secondary/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">About Me</h2>
              <div className="section-divider mb-6"></div>
              <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
                With over 10 years of experience in cybersecurity, I've helped organizations of all sizes build and maintain robust security frameworks.
              </p>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                My expertise spans penetration testing, security architecture, compliance management, and incident response. I'm passionate about staying ahead of emerging threats and helping teams develop a strong security culture.
              </p>
              <div className="flex gap-8">
                <div>
                  <div className="text-3xl font-bold text-accent">50+</div>
                  <p className="text-foreground/60 text-sm">Projects Completed</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">100+</div>
                  <p className="text-foreground/60 text-sm">Vulnerabilities Found</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">4</div>
                  <p className="text-foreground/60 text-sm">Certifications</p>
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
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <SectionHeader title="Certifications" />
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
          <SectionHeader title="What Clients Say" />
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Secure Your Infrastructure?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss how I can help strengthen your security posture and protect your digital assets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2">
              Schedule Consultation <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
