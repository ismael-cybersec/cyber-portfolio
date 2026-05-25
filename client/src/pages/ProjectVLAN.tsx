import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useState } from "react";

export default function ProjectVLAN() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { id: 0, src: "/manus-storage/projects/VLAN-DHCP-NAT_Rapport_Cybersecurite_ismael-cybersec(2)-002.png", caption: "Topologie réseau VLAN" },
    { id: 1, src: "/manus-storage/projects/VLAN-DHCP-NAT_Rapport_Cybersecurite_ismael-cybersec(2)-003.png", caption: "Configuration des VLAN" },
    { id: 2, src: "/manus-storage/projects/VLAN-DHCP-NAT_Rapport_Cybersecurite_ismael-cybersec(2)-004.png", caption: "Routage inter-VLAN" },
    { id: 3, src: "/manus-storage/projects/VLAN-DHCP-NAT_Rapport_Cybersecurite_ismael-cybersec(2)-005.png", caption: "Configuration DHCP" },
    { id: 4, src: "/manus-storage/projects/VLAN-DHCP-NAT_Rapport_Cybersecurite_ismael-cybersec(2)-006.png", caption: "Configuration NAT" },
    { id: 5, src: "/manus-storage/projects/VLAN-DHCP-NAT_Rapport_Cybersecurite_ismael-cybersec(2)-007.png", caption: "ACL et Sécurité" },
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
          <h1 className="text-5xl font-bold text-primary mb-4">VLAN - DHCP - NAT Lab</h1>
          <p className="text-2xl text-accent mb-6">Configuration Réseau d'Entreprise</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-accent/20 text-accent border-accent/30">VLAN</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">DHCP</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">NAT</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Cisco</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">ACL</Badge>
          </div>
          <p className="text-foreground/80 max-w-3xl">
            Simulation complète d'un réseau d'entreprise avec segmentation VLAN, services DHCP et NAT - 2024
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
                Ce laboratoire simule une infrastructure réseau d'entreprise complète utilisant Cisco Packet Tracer. Le projet démontre la configuration de VLAN pour la segmentation réseau, la mise en place de services DHCP pour l'attribution automatique d'adresses IP, et la configuration de NAT pour la translation d'adresses.
              </p>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                L'objectif principal est de créer une architecture réseau sécurisée et scalable, séparant les différents départements de l'entreprise en VLAN distincts tout en permettant la communication contrôlée entre eux.
              </p>

              <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Composants Configurés</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3">
                  <span className="text-accent">🔧</span>
                  <span className="text-foreground/80"><strong>VLAN Segmentation</strong> - Création de 4 VLAN (Management, Finance, IT, Guest)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">🔧</span>
                  <span className="text-foreground/80"><strong>Routage Inter-VLAN</strong> - Configuration du routeur pour communication VLAN</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">🔧</span>
                  <span className="text-foreground/80"><strong>Serveur DHCP</strong> - Attribution automatique d'adresses IP par VLAN</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">🔧</span>
                  <span className="text-foreground/80"><strong>NAT/PAT</strong> - Translation d'adresses pour accès Internet</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">🔧</span>
                  <span className="text-foreground/80"><strong>ACL (Access Control Lists)</strong> - Contrôle d'accès entre VLAN</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Architecture Réseau</h3>
              <div className="bg-secondary/30 p-6 rounded-lg border border-border mb-6">
                <p className="text-foreground/80 mb-3 font-semibold">Plan d'Adressage :</p>
                <ul className="space-y-2 text-foreground/70 text-sm">
                  <li>• VLAN 10 (Management) : 192.168.10.0/24</li>
                  <li>• VLAN 20 (Finance) : 192.168.20.0/24</li>
                  <li>• VLAN 30 (IT) : 192.168.30.0/24</li>
                  <li>• VLAN 40 (Guest) : 192.168.40.0/24</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Objectifs d'Apprentissage</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-accent">✓</span>
                  <span className="text-foreground/80">Comprendre la segmentation réseau avec VLAN</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">✓</span>
                  <span className="text-foreground/80">Configurer le routage inter-VLAN (Router-on-a-Stick)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">✓</span>
                  <span className="text-foreground/80">Déployer des services DHCP pour chaque VLAN</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">✓</span>
                  <span className="text-foreground/80">Implémenter NAT pour l'accès Internet</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">✓</span>
                  <span className="text-foreground/80">Créer des ACL pour contrôler le trafic réseau</span>
                </li>
              </ul>
            </div>

            <div>
              <Card className="card-elegant p-6 bg-card/50 sticky top-24">
                <h3 className="text-xl font-bold text-primary mb-4">Informations</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-foreground/60 text-sm mb-1">Année</p>
                    <p className="text-foreground/80 font-semibold">2024</p>
                  </div>
                  <div>
                    <p className="text-foreground/60 text-sm mb-1">Outil</p>
                    <p className="text-foreground/80 font-semibold">Cisco Packet Tracer</p>
                  </div>
                  <div>
                    <p className="text-foreground/60 text-sm mb-1">Durée</p>
                    <p className="text-foreground/80 font-semibold">8-10 heures</p>
                  </div>
                  <div>
                    <p className="text-foreground/60 text-sm mb-1">Niveau</p>
                    <p className="text-accent font-semibold">Intermédiaire</p>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-foreground/60 text-sm mb-3">Technologies</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">VLAN</Badge>
                      <Badge variant="secondary" className="text-xs">DHCP</Badge>
                      <Badge variant="secondary" className="text-xs">NAT</Badge>
                      <Badge variant="secondary" className="text-xs">Cisco</Badge>
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
