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
    { id: 0, src: "/manus-storage/projects/VLAN-DHCP-NAT_Rapport_Cybersecurite_ismael-cybersec(2)-000.png", caption: "Page de couverture" },
    { id: 1, src: "/manus-storage/projects/VLAN-DHCP-NAT_Rapport_Cybersecurite_ismael-cybersec(2)-001.png", caption: "Table des matières" },
    { id: 2, src: "/manus-storage/projects/VLAN-DHCP-NAT_Rapport_Cybersecurite_ismael-cybersec(2)-002.png", caption: "Introduction et objectifs" },
    { id: 3, src: "/manus-storage/projects/VLAN-DHCP-NAT_Rapport_Cybersecurite_ismael-cybersec(2)-003.png", caption: "Topologie réseau détaillée" },
    { id: 4, src: "/manus-storage/projects/VLAN-DHCP-NAT_Rapport_Cybersecurite_ismael-cybersec(2)-004.png", caption: "Configuration des VLAN" },
    { id: 5, src: "/manus-storage/projects/VLAN-DHCP-NAT_Rapport_Cybersecurite_ismael-cybersec(2)-005.png", caption: "Routage inter-VLAN" },
    { id: 6, src: "/manus-storage/projects/VLAN-DHCP-NAT_Rapport_Cybersecurite_ismael-cybersec(2)-006.png", caption: "Configuration DHCP" },
    { id: 7, src: "/manus-storage/projects/VLAN-DHCP-NAT_Rapport_Cybersecurite_ismael-cybersec(2)-007.png", caption: "Configuration NAT/PAT" },
    { id: 8, src: "/manus-storage/projects/VLAN-DHCP-NAT_Rapport_Cybersecurite_ismael-cybersec(2)-008.png", caption: "ACL et sécurité réseau" },
    { id: 9, src: "/manus-storage/projects/VLAN-DHCP-NAT_Rapport_Cybersecurite_ismael-cybersec(2)-009.png", caption: "Tests et validation" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border">
        <div className="container">
          <div className="flex items-center gap-4 mb-6">
            <a href="/" className="text-accent hover:text-accent/80 transition-colors flex items-center gap-2">
              <ArrowLeft className="w-5 h-5" /> Retour au Portfolio
            </a>
          </div>
          <h1 className="text-5xl font-bold text-primary mb-4">VLAN - DHCP - NAT Lab</h1>
          <p className="text-2xl text-accent mb-6">Configuration Complète d'un Réseau d'Entreprise Sécurisé</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-accent/20 text-accent border-accent/30">VLAN</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">DHCP</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">NAT</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Cisco</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">ACL</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Sécurité Réseau</Badge>
          </div>
          <p className="text-foreground/80 max-w-4xl">
            Simulation complète d'une infrastructure réseau d'entreprise avec segmentation VLAN, services DHCP et NAT - 2024
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container">
          <div className="prose prose-invert max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">Vue d'Ensemble du Projet</h2>
            
            <p className="text-foreground/80 leading-relaxed mb-6">
              Le projet VLAN-DHCP-NAT Lab est une simulation complète d'une infrastructure réseau d'entreprise moderne utilisant Cisco Packet Tracer. Ce laboratoire démontre la conception et l'implémentation d'une architecture réseau sécurisée, scalable et hautement disponible. Le projet couvre tous les aspects essentiels de l'administration réseau d'entreprise, y compris la segmentation VLAN, le routage inter-VLAN, les services DHCP, la translation d'adresses (NAT) et le contrôle d'accès (ACL).
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Contexte et Objectifs Pédagogiques</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Ce laboratoire a été conçu pour démontrer les compétences essentielles en administration réseau d'entreprise. Les objectifs principaux incluent :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Comprendre la segmentation réseau via VLAN et ses avantages en sécurité</li>
              <li>Configurer le routage inter-VLAN pour permettre la communication contrôlée entre segments</li>
              <li>Déployer des services DHCP pour l'attribution automatique d'adresses IP</li>
              <li>Implémenter NAT/PAT pour la translation d'adresses et l'accès Internet</li>
              <li>Créer des ACL pour contrôler le trafic réseau et appliquer des politiques de sécurité</li>
              <li>Valider et tester la configuration complète</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Architecture Réseau Détaillée</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              L'architecture du laboratoire VLAN-DHCP-NAT est basée sur un modèle d'entreprise typique avec plusieurs départements. La topologie comprend :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li><strong>Commutateur d'accès (Access Switch)</strong> - Connecte les postes de travail et les périphériques des utilisateurs</li>
              <li><strong>Commutateur de distribution (Distribution Switch)</strong> - Interconnecte les commutateurs d'accès et le routeur</li>
              <li><strong>Routeur d'entreprise (Enterprise Router)</strong> - Gère le routage inter-VLAN et la connexion Internet</li>
              <li><strong>Serveur DHCP</strong> - Fournit les adresses IP automatiquement</li>
              <li><strong>Serveur Web</strong> - Simule un serveur d'entreprise</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Segmentation VLAN</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le réseau est segmenté en quatre VLAN distincts, chacun représentant un département ou une fonction d'entreprise :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li><strong>VLAN 10 (Management)</strong> - Adressage : 192.168.10.0/24 - Pour les administrateurs réseau et IT</li>
              <li><strong>VLAN 20 (Finance)</strong> - Adressage : 192.168.20.0/24 - Pour le département finance</li>
              <li><strong>VLAN 30 (IT)</strong> - Adressage : 192.168.30.0/24 - Pour le département informatique</li>
              <li><strong>VLAN 40 (Guest)</strong> - Adressage : 192.168.40.0/24 - Pour les visiteurs et accès temporaire</li>
            </ul>

            <p className="text-foreground/80 leading-relaxed mb-4">
              Cette segmentation offre plusieurs avantages en sécurité et gestion réseau :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Isolation du trafic entre départements</li>
              <li>Réduction de la portée des broadcasts</li>
              <li>Amélioration des performances réseau</li>
              <li>Facilitation de l'application des politiques de sécurité</li>
              <li>Simplification de la gestion réseau</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Routage Inter-VLAN (Router-on-a-Stick)</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              La communication entre VLAN est réalisée via la technique "Router-on-a-Stick" où un seul port du routeur est connecté au commutateur via un lien trunk. Le routeur configure des sous-interfaces pour chaque VLAN et route le trafic entre eux.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              Configuration du routeur :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Interface physique configurée en mode trunk</li>
              <li>Sous-interface pour VLAN 10 : 192.168.10.1/24</li>
              <li>Sous-interface pour VLAN 20 : 192.168.20.1/24</li>
              <li>Sous-interface pour VLAN 30 : 192.168.30.1/24</li>
              <li>Sous-interface pour VLAN 40 : 192.168.40.1/24</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Services DHCP</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Un serveur DHCP est configuré pour fournir automatiquement des adresses IP à chaque VLAN. Cette configuration permet aux utilisateurs de se connecter au réseau sans configuration manuelle d'adresse IP.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              Configuration DHCP par VLAN :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li><strong>VLAN 10</strong> - Pool : 192.168.10.100-192.168.10.200, Passerelle : 192.168.10.1</li>
              <li><strong>VLAN 20</strong> - Pool : 192.168.20.100-192.168.20.200, Passerelle : 192.168.20.1</li>
              <li><strong>VLAN 30</strong> - Pool : 192.168.30.100-192.168.30.200, Passerelle : 192.168.30.1</li>
              <li><strong>VLAN 40</strong> - Pool : 192.168.40.100-192.168.40.200, Passerelle : 192.168.40.1</li>
            </ul>

            <p className="text-foreground/80 leading-relaxed mb-4">
              Chaque pool DHCP inclut également :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Serveurs DNS (8.8.8.8 et 8.8.4.4)</li>
              <li>Durée de bail : 24 heures</li>
              <li>Exclusions pour les adresses statiques</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Translation d'Adresses (NAT/PAT)</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              NAT (Network Address Translation) est configuré sur le routeur pour permettre aux utilisateurs internes d'accéder à Internet. Le routeur traduit les adresses IP privées internes en une adresse IP publique (ou un pool d'adresses publiques) pour les communications externes.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              Configuration NAT :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Interface interne (Inside) : Interface connectée aux VLAN</li>
              <li>Interface externe (Outside) : Interface connectée à Internet</li>
              <li>Adresse IP publique pour NAT : 203.0.113.1 (exemple)</li>
              <li>Type de NAT : PAT (Port Address Translation) pour multiplexer plusieurs utilisateurs</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Contrôle d'Accès (ACL)</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Les ACL (Access Control Lists) sont utilisées pour contrôler le trafic entre VLAN et appliquer les politiques de sécurité. Les règles ACL implémentées incluent :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li><strong>ACL 100</strong> - Autorise le trafic du VLAN Finance vers le serveur Web</li>
              <li><strong>ACL 101</strong> - Autorise le trafic du VLAN IT vers tous les VLAN</li>
              <li><strong>ACL 102</strong> - Restreint le trafic du VLAN Guest (accès Internet uniquement)</li>
              <li><strong>ACL 103</strong> - Autorise le trafic du VLAN Management vers tous les VLAN</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Tests et Validation</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Plusieurs tests ont été effectués pour valider la configuration :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li><strong>Test DHCP</strong> - Vérification de l'attribution automatique d'adresses IP</li>
              <li><strong>Test de routage</strong> - Ping entre VLAN pour vérifier la connectivité</li>
              <li><strong>Test NAT</strong> - Accès à Internet depuis les VLAN internes</li>
              <li><strong>Test ACL</strong> - Vérification des restrictions de trafic</li>
              <li><strong>Test de performance</strong> - Mesure de la latence et du throughput</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Résultats Obtenus</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Tous les objectifs du laboratoire ont été atteints avec succès :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>✓ Segmentation VLAN fonctionnelle avec 4 VLAN distincts</li>
              <li>✓ Routage inter-VLAN opérationnel</li>
              <li>✓ Services DHCP attribuant correctement les adresses IP</li>
              <li>✓ NAT/PAT permettant l'accès Internet</li>
              <li>✓ ACL appliquant les politiques de sécurité</li>
              <li>✓ Tous les tests de connectivité réussis</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Apprentissages et Compétences Développées</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Ce laboratoire a permis de développer et de consolider plusieurs compétences essentielles en administration réseau :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Configuration avancée de commutateurs Cisco (VLAN, trunk, spanning-tree)</li>
              <li>Configuration de routeurs Cisco (routage, sous-interfaces, NAT, ACL)</li>
              <li>Déploiement et configuration de services DHCP</li>
              <li>Conception d'architectures réseau sécurisées</li>
              <li>Troubleshooting et validation de configurations réseau</li>
              <li>Compréhension des protocoles réseau (IP, VLAN, DHCP, NAT)</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Conclusion</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le laboratoire VLAN-DHCP-NAT démontre une compréhension complète des technologies réseau d'entreprise essentielles. Le projet couvre tous les aspects de la conception et de l'implémentation d'une infrastructure réseau moderne, sécurisée et scalable. Cette expérience constitue une base solide pour des rôles en administration réseau, architecture réseau ou sécurité réseau.
            </p>
          </div>

          {/* Gallery Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-primary mb-4">Rapport Complet - Captures d'Écran</h2>
            <p className="text-foreground/80 mb-8">Cliquez sur les images pour les agrandir et voir tous les détails du rapport</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((img) => (
                <div
                  key={img.id}
                  onClick={() => setSelectedImage(img.id)}
                  className="cursor-pointer group"
                >
                  <Card className="card-elegant overflow-hidden h-full">
                    <div className="relative h-64 bg-secondary overflow-hidden">
                      <img
                        src={img.src}
                        alt={img.caption}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                        <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-semibold">Voir en grand</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-foreground/70 line-clamp-2">{img.caption}</p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Modal */}
          {selectedImage !== null && (
            <div 
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90" 
              onClick={() => setSelectedImage(null)}
            >
              <div className="max-w-6xl w-full max-h-[90vh] flex flex-col">
                <img
                  src={images[selectedImage].src}
                  alt={images[selectedImage].caption}
                  className="w-full h-full object-contain rounded-lg"
                />
                <p className="text-white text-center mt-4 text-sm">{images[selectedImage].caption}</p>
                <p className="text-white/60 text-center mt-2 text-xs">Image {selectedImage + 1} sur {images.length} - Cliquez pour fermer</p>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
