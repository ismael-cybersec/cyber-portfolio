import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function ProjectVortexCore() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border">
        <div className="container">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/" className="text-accent hover:text-accent/80 transition-colors flex items-center gap-2">
              <ArrowLeft className="w-5 h-5" /> Retour au Portfolio
            </Link>
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

      <section className="py-20">
        <div className="container max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none">

            <h2 className="text-3xl font-bold text-primary mb-6">Vue d'Ensemble du Projet</h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              VortexCore est un projet d'infrastructure ambitieux qui démontre la conception et l'implémentation d'une architecture de virtualisation d'entreprise hautement disponible et performante. Le projet a été développé dans le contexte d'une compétition de cybersécurité (CYBER-CCNB 2026) et a remporté la 2e place avec un trophée d'argent, reconnaissant l'excellence technique et l'innovation apportées. Ce projet représente un accomplissement majeur en matière de conception d'infrastructure, de résolution de problèmes complexes et de mise en place de solutions d'entreprise robustes et scalables.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Contexte et Objectifs</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              L'objectif principal du projet VortexCore était de concevoir et de déployer une infrastructure de virtualisation robuste, scalable et hautement disponible capable de supporter les opérations critiques de plusieurs équipes virtuelles. Le cluster devait intégrer des technologies modernes de virtualisation, de stockage distribué et de gestion des ressources pour fournir une plateforme fiable aux équipes SOC, IAM et CyberRange.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Les défis spécifiques à relever incluaient la conception d'une architecture capable de supporter plus de 50 machines virtuelles simultanément, la mise en place d'une haute disponibilité garantissant une disponibilité de 99.9%, la configuration d'un stockage distribué performant et sécurisé, et la résolution de problèmes complexes d'infrastructure en environnement de production.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Architecture Technique Détaillée</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              L'architecture de VortexCore repose sur un cluster Proxmox VE composé de 3 nœuds physiques interconnectés via une infrastructure réseau redondante. Chaque nœud est équipé de ressources matérielles robustes incluant des processeurs multi-cœurs haute performance, une mémoire RAM généreuse (minimum 64 GB par nœud), et des connexions réseau redondantes pour assurer la continuité de service en cas de défaillance. Le cluster utilise Corosync pour la synchronisation des nœuds et Pacemaker pour l'orchestration de la haute disponibilité.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              La topologie réseau du cluster est conçue avec une redondance complète. Les nœuds sont interconnectés via des liens réseau multiples (bonding) pour éviter un point de défaillance unique. Le cluster utilise également un réseau de gestion séparé pour les communications de cluster, isolé du trafic des machines virtuelles.
            </p>
            <img src="/cyber-portfolio/14.jpeg" alt="L'équipe VortexCore devant le rack d'infrastructure" className="w-full rounded-lg border border-accent/30 my-6" />

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Stockage Distribué et RAID</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le système de stockage central utilise une baie UNAS Pro 8 (8 baies de disques) configurée avec une stratégie RAID hybride optimisée pour les opérations d'entreprise. Les données critiques sont protégées par RAID 10 (mirroring + striping) pour les opérations transactionnelles, offrant une performance élevée et une redondance complète. Le stockage archivistique utilise RAID 5 pour optimiser la capacité tout en maintenant une redondance adéquate.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Cette configuration hybride garantit la redondance des données, la performance et la disponibilité du service même en cas de défaillance matérielle. Les disques sont configurés avec des alertes SMART pour détecter les défaillances imminentes et peuvent être remplacés à chaud sans arrêt du service.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le stockage NFS partagé permet à tous les nœuds du cluster d'accéder aux machines virtuelles et aux données de manière transparente, facilitant la migration en direct des machines virtuelles entre les nœuds sans interruption de service.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Haute Disponibilité et Résilience</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              VortexCore intègre plusieurs mécanismes de haute disponibilité pour garantir la continuité de service. Le clustering Proxmox VE permet la migration automatique des machines virtuelles en cas de défaillance d'un nœud. Lorsqu'un nœud défaille, le cluster détecte automatiquement la défaillance via les heartbeats Corosync et déclenche la migration des machines virtuelles vers les nœuds restants.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Les sauvegardes automatiques sont exécutées régulièrement pour tous les environnements virtuels, avec des points de restauration multiples pour assurer la récupération en cas de sinistre. Les sauvegardes sont stockées sur un système de stockage séparé et testées régulièrement pour assurer leur intégrité.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Équipes Virtuelles Supportées</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              L'infrastructure VortexCore supporte trois équipes virtuelles principales, chacune avec ses propres ressources isolées et ses propres politiques de sécurité :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-3">
              <li><strong>SOC (Security Operations Center)</strong> — Équipe dédiée à la surveillance et à la détection des menaces de sécurité, utilisant des outils comme Wazuh et Splunk pour monitorer le trafic réseau et les événements de sécurité en temps réel.</li>
              <li><strong>IAM (Identity and Access Management)</strong> — Équipe responsable de la gestion des identités et des accès, gérant les politiques d'authentification et d'autorisation pour l'ensemble de l'infrastructure.</li>
              <li><strong>CyberRange</strong> — Environnement d'entraînement et de simulation pour les exercices de cybersécurité dans un environnement contrôlé et isolé.</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Défis Techniques Rencontrés et Solutions</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>1. Défaillance Matérielle et Récupération :</strong> Lors de la phase de test, une défaillance matérielle sur l'un des nœuds a causé une perte de synchronisation du cluster. La solution a impliqué la reconfiguration complète du nœud défaillant, la réinstallation du système d'exploitation, et la resynchronisation des données via NFS.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>2. Blocage NFS par WatchGuard :</strong> Le pare-feu WatchGuard bloquait initialement le trafic NFS entre les nœuds et le stockage. La résolution a nécessité la configuration précise des règles de pare-feu pour autoriser les ports NFS (111 pour RPC, 2049 pour NFS) tout en maintenant la sécurité du réseau.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>3. Erreurs Corosync :</strong> La synchronisation du cluster a rencontré des problèmes de quorum lors de la configuration initiale. La solution a impliqué l'ajustement des paramètres de timeout et la validation de la connectivité réseau entre les nœuds.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>4. Erreurs APT et Dépendances :</strong> Des conflits de dépendances système ont été rencontrés lors de l'installation de certains paquets. La résolution a impliqué l'identification et la correction des dépendances manquantes ainsi que la mise à jour des sources de paquets.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Performances et Résultats</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              L'infrastructure VortexCore démontre des performances exceptionnelles qui dépassent les exigences d'entreprise :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Temps de réponse inférieur à 10ms pour les opérations de stockage</li>
              <li>Disponibilité de 99.9% grâce à la haute disponibilité du cluster</li>
              <li>Capacité de support pour plus de 50 machines virtuelles simultanées</li>
              <li>Récupération automatique en moins de 30 secondes en cas de défaillance de nœud</li>
              <li>Throughput de stockage supérieur à 500 MB/s</li>
            </ul>
            <img src="/cyber-portfolio/11.jpeg" alt="Dashboard de monitoring Proxmox en temps réel lors de la présentation" className="w-full rounded-lg border border-accent/30 my-6" />

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Sécurité et Conformité</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              L'infrastructure intègre plusieurs mesures de sécurité :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Contrôle d'accès basé sur les rôles (RBAC) pour Proxmox VE</li>
              <li>Authentification SSH avec clés cryptographiques</li>
              <li>Chiffrement des données en transit via TLS</li>
              <li>Audit et logging complets de toutes les opérations</li>
              <li>Isolation des équipes virtuelles via des réseaux virtuels séparés</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Impact et Reconnaissance — CYBER-CCNB 2026</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le projet VortexCore a reçu une reconnaissance significative lors de la compétition CYBER-CCNB 2026. La 2e place avec un trophée d'argent valide l'excellence technique et l'innovation apportées au projet. Cette reconnaissance démontre la capacité à concevoir et à implémenter des solutions d'infrastructure complexes qui répondent aux exigences d'entreprise.
            </p>
            <img src="/cyber-portfolio/13.jpeg" alt="Présentation de VortexCore à l'audience CYBER-CCNB 2026" className="w-full rounded-lg border border-accent/30 my-6" />
            <img src="/cyber-portfolio/10.jpeg" alt="L'équipe VortexCore avec les trophées d'argent CYBER-CCNB 2026" className="w-full rounded-lg border border-accent/30 my-6" />
            <img src="/cyber-portfolio/12.jpeg" alt="Remise du certificat à Ismael Baby" className="w-full rounded-lg border border-accent/30 my-6" />

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Apprentissages et Compétences Développées</h3>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Conception et implémentation d'architectures de virtualisation hautement disponibles</li>
              <li>Configuration avancée de Proxmox VE et du clustering avec Corosync et Pacemaker</li>
              <li>Gestion de stockage distribué avec NFS et RAID</li>
              <li>Troubleshooting de problèmes complexes d'infrastructure</li>
              <li>Documentation technique détaillée et communication d'architecture</li>
              <li>Gestion de projets d'infrastructure complexes</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Conclusion</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              VortexCore représente une réalisation majeure en matière d'infrastructure de virtualisation d'entreprise. Le projet démontre la capacité à concevoir, à implémenter et à maintenir une infrastructure complexe et hautement disponible. La reconnaissance par la 2e place à CYBER-CCNB 2026 valide l'excellence technique et l'innovation apportées. Les compétences développées lors de ce projet sont directement applicables à des rôles en administration d'infrastructure, architecture système ou gestion de centres de données.
            </p>
            <img src="/cyber-portfolio/15.jpeg" alt="Certificat Jeune Excellence CCNB - Baby Ismael" className="w-full rounded-lg border border-accent/30 my-6" />

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
