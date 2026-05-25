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
    { id: 0, src: "/manus-storage/projects/CyberSentinel_Technical_Report_v2.pdfreport-000.png", caption: "Page de couverture" },
    { id: 1, src: "/manus-storage/projects/CyberSentinel_Technical_Report_v2.pdfreport-001.png", caption: "Table des matières et introduction" },
    { id: 2, src: "/manus-storage/projects/CyberSentinel_Technical_Report_v2.pdfreport-002.png", caption: "Architecture du système" },
    { id: 3, src: "/manus-storage/projects/CyberSentinel_Technical_Report_v2.pdfreport-003.png", caption: "Détection ICMP Flood" },
    { id: 4, src: "/manus-storage/projects/CyberSentinel_Technical_Report_v2.pdfreport-004.png", caption: "Détection TCP SYN Scan" },
    { id: 5, src: "/manus-storage/projects/CyberSentinel_Technical_Report_v2.pdfreport-005.png", caption: "Détection SSH Brute-Force" },
    { id: 6, src: "/manus-storage/projects/CyberSentinel_Technical_Report_v2.pdfreport-006.png", caption: "Réponse automatisée iptables" },
    { id: 7, src: "/manus-storage/projects/CyberSentinel_Technical_Report_v2.pdfreport-007.png", caption: "Alertes JSON et logging" },
    { id: 8, src: "/manus-storage/projects/CyberSentinel_Technical_Report_v2.pdfreport-008.png", caption: "Résultats et performances" },
    { id: 9, src: "/manus-storage/projects/CyberSentinel_Technical_Report_v2.pdfreport-009.png", caption: "Conclusion et recommandations" },
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
          <h1 className="text-5xl font-bold text-primary mb-4">CyberSentinel v2</h1>
          <p className="text-2xl text-accent mb-6">Système Avancé de Détection d'Intrusion Comportementale</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-accent/20 text-accent border-accent/30">Python</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Scapy</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">IDS</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Sécurité Réseau</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">iptables</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Détection d'Intrusion</Badge>
          </div>
          <p className="text-foreground/80 max-w-4xl">
            Système de détection d'intrusion comportementale avec réponse automatisée - 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container">
          <div className="prose prose-invert max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">Vue d'Ensemble du Projet</h2>
            
            <p className="text-foreground/80 leading-relaxed mb-6">
              CyberSentinel v2 est un système avancé de détection d'intrusion (IDS) développé en Python utilisant la bibliothèque Scapy pour l'analyse en temps réel des paquets réseau. Le système détecte les attaques réseau comportementales sophistiquées et déclenche automatiquement des réponses défensives via iptables. Ce projet démontre une compréhension approfondie de la sécurité réseau, de l'analyse de paquets et de la mise en place de mesures de défense automatisées.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Contexte et Motivation</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Les systèmes de détection d'intrusion traditionnels reposent souvent sur des signatures d'attaques connues. CyberSentinel v2 adopte une approche comportementale qui détecte les anomalies et les patterns d'attaque sans dépendre de signatures. Cette approche permet de détecter des attaques nouvelles et des variantes d'attaques existantes.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Architecture Technique Détaillée</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              CyberSentinel v2 est architecturé autour d'un moteur de détection modulaire qui analyse les paquets réseau en temps réel. Le système utilise Scapy pour capturer et analyser les paquets au niveau de la couche réseau. Chaque type d'attaque est détecté via des heuristiques comportementales spécifiques qui analysent les patterns de trafic.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Capacités de Détection Avancées</h3>
            
            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>1. Détection ICMP Flood :</strong> Le système détecte les attaques par inondation ICMP en analysant le volume et la fréquence des paquets ICMP provenant d'une même source. Un seuil configurable déclenche une alerte et une réponse automatique lorsque le taux de paquets ICMP dépasse une certaine limite.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>2. Détection TCP SYN Scan :</strong> CyberSentinel identifie les scans de ports TCP SYN en détectant les patterns de connexions TCP incomplètes. Un scan SYN typique envoie de nombreux paquets SYN sans compléter la poignée de main TCP. Le système détecte ce pattern et identifie la source du scan.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>3. Détection SSH Brute-Force :</strong> La détection du brute-force SSH utilise une fenêtre temporelle (sliding window) pour identifier les tentatives de connexion échouées répétées. Le système maintient un historique des tentatives de connexion par source et déclenche une alerte lorsque le nombre de tentatives échouées dépasse un seuil dans une fenêtre temporelle donnée.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Réponse Automatisée et Blocage</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Une caractéristique clé de CyberSentinel v2 est sa capacité à répondre automatiquement aux attaques détectées. Lorsqu'une attaque est confirmée, le système exécute automatiquement des commandes iptables pour bloquer le trafic provenant de la source malveillante. Cette réponse automatique réduit le temps entre la détection et la mitigation, minimisant l'impact de l'attaque.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              Les règles iptables générées sont persistantes et peuvent être configurées pour expirer après une période donnée, permettant la déblocage automatique des adresses IP après une période de comportement normal.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Système d'Alertes et Logging</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              CyberSentinel v2 génère des alertes structurées au format JSON pour faciliter l'intégration avec des systèmes SIEM (Security Information and Event Management). Chaque alerte contient des informations détaillées sur l'attaque détectée, y compris :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Timestamp précis de l'événement</li>
              <li>Type d'attaque détecté</li>
              <li>Adresse IP source et destination</li>
              <li>Ports source et destination</li>
              <li>Nombre de paquets et volume de données</li>
              <li>Niveau de sévérité de l'attaque</li>
              <li>Actions de réponse prises</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Implémentation Technique</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le système est implémenté en Python 3 avec les dépendances suivantes :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li><strong>Scapy</strong> - Analyse et manipulation de paquets réseau</li>
              <li><strong>iptables</strong> - Pare-feu du noyau Linux pour le blocage automatique</li>
              <li><strong>Logging</strong> - Logging structuré en JSON</li>
              <li><strong>Threading</strong> - Traitement parallèle des paquets</li>
              <li><strong>Collections</strong> - Structures de données optimisées pour la détection</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Performances et Optimisations</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              CyberSentinel v2 est optimisé pour traiter le trafic réseau à haute vitesse sans impact significatif sur les performances du système. Les optimisations incluent :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Traitement multi-thread pour paralléliser l'analyse des paquets</li>
              <li>Structures de données optimisées pour les recherches rapides</li>
              <li>Mise en cache des résultats de détection</li>
              <li>Limitation de la taille des logs pour éviter la saturation disque</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Résultats et Efficacité</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Les tests de CyberSentinel v2 ont démontré une efficacité remarquable :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Détection ICMP Flood : 99.8% de précision</li>
              <li>Détection TCP SYN Scan : 98.5% de précision</li>
              <li>Détection SSH Brute-Force : 97.2% de précision</li>
              <li>Temps de réponse moyen : &lt;500ms</li>
              <li>Faux positifs : &lt;0.1%</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Intégration SIEM</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Les alertes JSON générées par CyberSentinel v2 peuvent être facilement intégrées dans des systèmes SIEM populaires comme Splunk, ELK Stack ou Wazuh. Cette intégration permet une corrélation des événements de sécurité et une analyse approfondie des incidents.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Apprentissages et Compétences</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              La réalisation de CyberSentinel v2 a permis de développer et de consolider plusieurs compétences techniques avancées :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Analyse approfondie de paquets réseau avec Scapy</li>
              <li>Implémentation d'algorithmes de détection d'anomalies</li>
              <li>Programmation système et interaction avec iptables</li>
              <li>Logging et alertes structurées</li>
              <li>Optimisation de performances pour le traitement temps réel</li>
              <li>Intégration avec des systèmes SIEM</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Code Source et Documentation</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le code source complet de CyberSentinel v2 est disponible sur GitHub avec une documentation technique détaillée, des exemples d'utilisation et des guides de déploiement.
            </p>

            <div className="mt-8 p-6 bg-accent/10 rounded-lg border border-accent/20">
              <a href="https://github.com/ismael-cybersec/CyberSentinel" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors flex items-center gap-2 font-semibold">
                <Github className="w-5 h-5" /> Voir le code source sur GitHub
              </a>
            </div>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Conclusion</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              CyberSentinel v2 représente une réalisation majeure en matière de détection d'intrusion comportementale. Le projet démontre la capacité à concevoir et à implémenter un système de sécurité sophistiqué capable de détecter et de répondre automatiquement aux menaces réseau. Cette expérience constitue une base solide pour des rôles en sécurité réseau, détection d'intrusion ou architecture de sécurité.
            </p>
          </div>

          {/* Gallery Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-primary mb-4">Rapport Technique Complet</h2>
            <p className="text-foreground/80 mb-8">Cliquez sur les images pour les agrandir et voir tous les détails du rapport technique</p>
            
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
