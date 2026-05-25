import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useState } from "react";

export default function ProjectVortexCore() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { id: 0, src: "/manus-storage/projects/vortexcore-000.png", caption: "Page de couverture du rapport" },
    { id: 1, src: "/manus-storage/projects/vortexcore-001.png", caption: "Table des matières" },
    { id: 2, src: "/manus-storage/projects/vortexcore-002.png", caption: "Introduction et contexte du projet" },
    { id: 3, src: "/manus-storage/projects/vortexcore-003.png", caption: "Architecture du cluster Proxmox VE" },
    { id: 4, src: "/manus-storage/projects/vortexcore-004.png", caption: "Configuration des nœuds physiques" },
    { id: 5, src: "/manus-storage/projects/vortexcore-005.png", caption: "Stockage NFS et configuration RAID" },
    { id: 6, src: "/manus-storage/projects/vortexcore-006.png", caption: "Haute disponibilité et clustering" },
    { id: 7, src: "/manus-storage/projects/vortexcore-007.png", caption: "Sauvegardes et restauration" },
    { id: 8, src: "/manus-storage/projects/vortexcore-008.png", caption: "Monitoring et alertes" },
    { id: 9, src: "/manus-storage/projects/vortexcore-009.png", caption: "Gestion des ressources et performance" },
    { id: 10, src: "/manus-storage/projects/vortexcore-010.png", caption: "Sécurité et contrôle d'accès" },
    { id: 11, src: "/manus-storage/projects/vortexcore-011.png", caption: "Documentation technique" },
    { id: 12, src: "/manus-storage/projects/vortexcore-012.png", caption: "Défis et solutions" },
    { id: 13, src: "/manus-storage/projects/vortexcore-013.png", caption: "Résultats et performances" },
    { id: 14, src: "/manus-storage/projects/vortexcore-014.png", caption: "Conclusion et recommandations" },
    { id: 15, src: "/manus-storage/projects/vortexcore-015.png", caption: "Annexes techniques" },
    { id: 16, src: "/manus-storage/projects/vortexcore-016.png", caption: "Diagrammes d'architecture détaillés" },
    { id: 17, src: "/manus-storage/projects/vortexcore-017.png", caption: "Configuration avancée" },
    { id: 18, src: "/manus-storage/projects/vortexcore-018.png", caption: "Procédures de maintenance" },
    { id: 19, src: "/manus-storage/projects/vortexcore-019.png", caption: "Plan de continuité de service" },
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
          <h1 className="text-5xl font-bold text-primary mb-4">VortexCore</h1>
          <p className="text-2xl text-accent mb-6">Cluster Proxmox VE - Infrastructure Virtualisée Hautement Disponible</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-accent/20 text-accent border-accent/30">Proxmox VE</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Clustering</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">NFS</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">RAID</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Haute Disponibilité</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Infrastructure</Badge>
          </div>
          <p className="text-foreground/80 max-w-4xl">
            Projet d'intégration en cybersécurité réalisé pour VortexOps Inc. - Janvier à Avril 2026 - 2e place CYBER-CCNB 2026 (Trophée d'argent)
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container">
          <div className="prose prose-invert max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">Vue d'Ensemble du Projet</h2>
            
            <p className="text-foreground/80 leading-relaxed mb-6">
              VortexCore est un projet d'infrastructure ambitieux qui démontre la conception et l'implémentation d'une architecture de virtualisation d'entreprise hautement disponible et performante. Le projet a été développé dans le contexte d'une compétition de cybersécurité (CYBER-CCNB 2026) et a remporté la 2e place avec un trophée d'argent, reconnaissant l'excellence technique et l'innovation apportées.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Contexte et Objectifs</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              L'objectif principal du projet VortexCore était de concevoir et de déployer une infrastructure de virtualisation robuste, scalable et hautement disponible capable de supporter les opérations critiques de plusieurs équipes virtuelles. Le cluster devait intégrer des technologies modernes de virtualisation, de stockage distribué et de gestion des ressources pour fournir une plateforme fiable aux équipes SOC (Security Operations Center), IAM (Identity and Access Management) et CyberRange.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Architecture Technique Détaillée</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              L'architecture de VortexCore repose sur un cluster Proxmox VE composé de 3 nœuds physiques interconnectés. Chaque nœud est équipé de ressources matérielles robustes incluant des processeurs multi-cœurs, une mémoire RAM généreuse et des connexions réseau redondantes. Le cluster utilise Corosync pour la synchronisation des nœuds et Pacemaker pour l'orchestration de la haute disponibilité.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Stockage Distribué et RAID</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le système de stockage central utilise une baie UNAS Pro 8 (8 baies de disques) configurée avec une stratégie RAID hybride. Les données critiques sont protégées par RAID 10 pour les opérations transactionnelles, tandis que le stockage archivistique utilise RAID 5 pour optimiser la capacité. Cette configuration garantit la redondance des données, la performance et la disponibilité du service même en cas de défaillance matérielle.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              Le stockage NFS partagé permet à tous les nœuds du cluster d'accéder aux machines virtuelles et aux données de manière transparente. Cette architecture facilite la migration en direct des machines virtuelles entre les nœuds sans interruption de service.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Haute Disponibilité et Résilience</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              VortexCore intègre plusieurs mécanismes de haute disponibilité pour garantir la continuité de service. Le clustering Proxmox VE permet la migration automatique des machines virtuelles en cas de défaillance d'un nœud. Les sauvegardes automatiques sont exécutées régulièrement pour tous les environnements virtuels, avec des points de restauration multiples pour assurer la récupération en cas de sinistre.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Équipes Virtuelles Supportées</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              L'infrastructure VortexCore supporte trois équipes virtuelles principales :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li><strong>SOC (Security Operations Center)</strong> - Équipe dédiée à la surveillance et à la détection des menaces de sécurité</li>
              <li><strong>IAM (Identity and Access Management)</strong> - Équipe responsable de la gestion des identités et des accès</li>
              <li><strong>CyberRange</strong> - Environnement d'entraînement et de simulation pour les exercices de cybersécurité</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Défis Techniques Rencontrés et Solutions</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le projet a présenté plusieurs défis techniques complexes qui ont nécessité des solutions innovantes :
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>1. Défaillance Matérielle et Récupération :</strong> Lors de la phase de test, une défaillance matérielle sur l'un des nœuds a causé une perte de synchronisation du cluster. La solution a impliqué la reconfiguration du nœud défaillant, la resynchronisation des données via NFS et la validation de la résilience du cluster.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>2. Blocage NFS par WatchGuard :</strong> Le pare-feu WatchGuard bloquait initialement le trafic NFS entre les nœuds et le stockage. La résolution a nécessité la configuration précise des règles de pare-feu pour autoriser les ports NFS (111, 2049) tout en maintenant la sécurité du réseau.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>3. Erreurs Corosync :</strong> La synchronisation du cluster Corosync a rencontré des problèmes de quorum lors de la configuration initiale. La solution a impliqué l'ajustement des paramètres de timeout et la validation de la connectivité réseau entre les nœuds.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>4. Erreurs APT et Dépendances :</strong> Des conflits de dépendances système ont été rencontrés lors de l'installation de certains paquets. La résolution a impliqué l'identification et la correction des dépendances manquantes, ainsi que la mise à jour des sources de paquets.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Performances et Résultats</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              L'infrastructure VortexCore démontre des performances exceptionnelles :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Temps de réponse inférieur à 10ms pour les opérations de stockage</li>
              <li>Disponibilité de 99.9% grâce à la haute disponibilité du cluster</li>
              <li>Capacité de support pour plus de 50 machines virtuelles simultanées</li>
              <li>Récupération automatique en moins de 30 secondes en cas de défaillance de nœud</li>
              <li>Throughput de stockage supérieur à 500 MB/s</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Sécurité et Conformité</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              L'infrastructure intègre plusieurs mesures de sécurité pour protéger les données et les services :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Contrôle d'accès basé sur les rôles (RBAC) pour Proxmox VE</li>
              <li>Authentification SSH avec clés cryptographiques</li>
              <li>Chiffrement des données en transit via TLS</li>
              <li>Audit et logging complets de toutes les opérations</li>
              <li>Conformité avec les standards de sécurité d'entreprise</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Apprentissages et Compétences Développées</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              La réalisation du projet VortexCore a permis de développer et de consolider plusieurs compétences techniques avancées :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Conception et implémentation d'architectures de virtualisation hautement disponibles</li>
              <li>Configuration avancée de Proxmox VE et du clustering</li>
              <li>Gestion de stockage distribué avec NFS et RAID</li>
              <li>Troubleshooting de problèmes complexes d'infrastructure</li>
              <li>Documentation technique détaillée et communication d'architecture</li>
              <li>Gestion de projets d'infrastructure complexes</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Conclusion</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              VortexCore représente une réalisation majeure en matière d'infrastructure de virtualisation d'entreprise. Le projet démontre la capacité à concevoir, à implémenter et à maintenir une infrastructure complexe et hautement disponible. La reconnaissance du projet par la 2e place à CYBER-CCNB 2026 valide l'excellence technique et l'innovation apportées. Cette expérience constitue une base solide pour des rôles d'infrastructure senior ou d'architecture cloud.
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
