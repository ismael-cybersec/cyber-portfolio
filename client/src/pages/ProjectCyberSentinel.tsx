import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Github } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useState } from "react";

export default function ProjectCyberSentinel() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { id: 0, src: "/manus-storage/projects/CyberSentinel_Technical_Report_v2.pdfreport-002.png", caption: "Architecture du système" },
    { id: 1, src: "/manus-storage/projects/CyberSentinel_Technical_Report_v2.pdfreport-003.png", caption: "Détection ICMP Flood" },
    { id: 2, src: "/manus-storage/projects/CyberSentinel_Technical_Report_v2.pdfreport-004.png", caption: "Détection TCP SYN Scan" },
    { id: 3, src: "/manus-storage/projects/CyberSentinel_Technical_Report_v2.pdfreport-005.png", caption: "Détection SSH Brute-Force" },
    { id: 4, src: "/manus-storage/projects/CyberSentinel_Technical_Report_v2.pdfreport-006.png", caption: "Réponse automatisée iptables" },
    { id: 5, src: "/manus-storage/projects/CyberSentinel_Technical_Report_v2.pdfreport-007.png", caption: "Alertes JSON" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border">
        <div className="container">
          <div className="flex items-center gap-4 mb-6">
            <a href="/" className="text-accent hover:text-accent/80 transition-colors flex items-center gap-2">
              <ArrowLeft className="w-5 h-5" /> Retour
            </a>
          </div>
          <h1 className="text-5xl font-bold text-primary mb-4">CyberSentinel v2</h1>
          <p className="text-2xl text-accent mb-6">Système Avancé de Détection d'Intrusion</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-accent/20 text-accent border-accent/30">Python</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Scapy</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">IDS</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Sécurité Réseau</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">iptables</Badge>
          </div>
          <p className="text-foreground/80 max-w-3xl">
            Système de détection d'intrusion comportementale avec réponse automatisée - 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-primary mb-6">Description du Projet</h2>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                CyberSentinel v2 est un système avancé de détection d'intrusion (IDS) développé en Python utilisant la bibliothèque Scapy. Le système détecte les attaques réseau comportementales en temps réel et déclenche des réponses automatisées via iptables.
              </p>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                Ce projet démontre une compréhension approfondie de la sécurité réseau, de l'analyse de paquets et de la mise en place de mesures de défense automatisées. Le code source est disponible sur GitHub.
              </p>

              <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Capacités de Détection</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3">
                  <span className="text-accent">🔍</span>
                  <span className="text-foreground/80"><strong>ICMP Flood Detection</strong> - Détection des attaques par inondation ICMP</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">🔍</span>
                  <span className="text-foreground/80"><strong>TCP SYN Scan Detection</strong> - Identification des scans de ports SYN</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">🔍</span>
                  <span className="text-foreground/80"><strong>SSH Brute-Force Detection</strong> - Détection des tentatives de force brute SSH avec sliding window</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">🔍</span>
                  <span className="text-foreground/80"><strong>Réponse Automatisée</strong> - Blocage automatique via iptables</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">🔍</span>
                  <span className="text-foreground/80"><strong>Alertes JSON</strong> - Logging structuré pour intégration SIEM</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Architecture Technique</h3>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                Le système utilise Scapy pour l'analyse de paquets en temps réel. Chaque type d'attaque est détecté via des heuristiques comportementales :
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-accent">⚙</span>
                  <span className="text-foreground/80"><strong>Sliding Window</strong> - Fenêtre temporelle pour détection SSH brute-force</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">⚙</span>
                  <span className="text-foreground/80"><strong>Seuils d'Alerte</strong> - Paramètres configurables pour chaque type d'attaque</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">⚙</span>
                  <span className="text-foreground/80"><strong>Intégration iptables</strong> - Blocage automatique des sources malveillantes</span>
                </li>
              </ul>

              <div className="mt-8 p-6 bg-accent/10 rounded-lg border border-accent/20">
                <h4 className="font-semibold text-primary mb-2">Code Source</h4>
                <a href="https://github.com/ismael-cybersec/CyberSentinel" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors flex items-center gap-2">
                  <Github className="w-5 h-5" /> github.com/ismael-cybersec/CyberSentinel
                </a>
              </div>
            </div>

            <div>
              <Card className="card-elegant p-6 bg-card/50 sticky top-24">
                <h3 className="text-xl font-bold text-primary mb-4">Informations</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-foreground/60 text-sm mb-1">Année</p>
                    <p className="text-foreground/80 font-semibold">2025</p>
                  </div>
                  <div>
                    <p className="text-foreground/60 text-sm mb-1">Langage</p>
                    <p className="text-foreground/80 font-semibold">Python 3.11+</p>
                  </div>
                  <div>
                    <p className="text-foreground/60 text-sm mb-1">Dépendances</p>
                    <p className="text-foreground/80 font-semibold">Scapy, iptables</p>
                  </div>
                  <div>
                    <p className="text-foreground/60 text-sm mb-1">Type</p>
                    <p className="text-accent font-semibold">Système de Détection d'Intrusion</p>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-foreground/60 text-sm mb-3">Technologies</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">Python</Badge>
                      <Badge variant="secondary" className="text-xs">Scapy</Badge>
                      <Badge variant="secondary" className="text-xs">Sécurité</Badge>
                      <Badge variant="secondary" className="text-xs">IDS</Badge>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Gallery */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-primary mb-8">Captures d'Écran</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((img) => (
                <div
                  key={img.id}
                  onClick={() => setSelectedImage(img.id)}
                  className="cursor-pointer group"
                >
                  <Card className="card-elegant overflow-hidden">
                    <div className="relative h-48 bg-secondary overflow-hidden">
                      <img
                        src={img.src}
                        alt={img.caption}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                        <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity">Agrandir</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-foreground/70">{img.caption}</p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Modal */}
          {selectedImage !== null && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setSelectedImage(null)}>
              <div className="max-w-4xl w-full">
                <img
                  src={images[selectedImage].src}
                  alt={images[selectedImage].caption}
                  className="w-full rounded-lg shadow-2xl"
                />
                <p className="text-white text-center mt-4">{images[selectedImage].caption}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
