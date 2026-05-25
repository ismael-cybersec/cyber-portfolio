import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function ProjectVortexCore() {
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
        <div className="container max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-primary mb-6">Vue d'Ensemble du Projet</h2>
            
            <p className="text-foreground/80 leading-relaxed mb-6">
              VortexCore est un projet d'infrastructure ambitieux qui démontre la conception et l'implémentation d'une architecture de virtualisation d'entreprise hautement disponible et performante. Le projet a été développé dans le contexte d'une compétition de cybersécurité (CYBER-CCNB 2026) et a remporté la 2e place avec un trophée d'argent, reconnaissant l'excellence technique et l'innovation apportées. Ce projet représente un accomplissement majeur en matière de conception d'infrastructure, de résolution de problèmes complexes et de mise en place de solutions d'entreprise robustes et scalables.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Contexte et Objectifs</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              L'objectif principal du projet VortexCore était de concevoir et de déployer une infrastructure de virtualisation robuste, scalable et hautement disponible capable de supporter les opérations critiques de plusieurs équipes virtuelles. Le cluster devait intégrer des technologies modernes de virtualisation, de stockage distribué et de gestion des ressources pour fournir une plateforme fiable aux équipes SOC (Security Operations Center), IAM (Identity and Access Management) et CyberRange. Le projet devait également démontrer une compréhension profonde des principes d'architecture d'entreprise, de la gestion des ressources et de la continuité de service.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              Les défis spécifiques à relever incluaient la conception d'une architecture capable de supporter plus de 50 machines virtuelles simultanément, la mise en place d'une haute disponibilité garantissant une disponibilité de 99.9%, la configuration d'un stockage distribué performant et sécurisé, et la résolution de problèmes complexes d'infrastructure en environnement de production.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Architecture Technique Détaillée</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              L'architecture de VortexCore repose sur un cluster Proxmox VE composé de 3 nœuds physiques interconnectés via une infrastructure réseau redondante. Chaque nœud est équipé de ressources matérielles robustes incluant des processeurs multi-cœurs haute performance, une mémoire RAM généreuse (minimum 64 GB par nœud), et des connexions réseau redondantes pour assurer la continuité de service en cas de défaillance. Le cluster utilise Corosync pour la synchronisation des nœuds et Pacemaker pour l'orchestration de la haute disponibilité, garantissant que les machines virtuelles sont automatiquement migrées en cas de défaillance d'un nœud.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              La topologie réseau du cluster est conçue avec une redondance complète. Les nœuds sont interconnectés via des liens réseau multiples (bonding) pour éviter un point de défaillance unique. Le cluster utilise également un réseau de gestion séparé pour les communications de cluster, isolé du trafic des machines virtuelles. Cette séparation améliore les performances et la sécurité en empêchant le trafic de cluster d'être affecté par le trafic des machines virtuelles.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Stockage Distribué et RAID</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le système de stockage central utilise une baie UNAS Pro 8 (8 baies de disques) configurée avec une stratégie RAID hybride optimisée pour les opérations d'entreprise. Les données critiques sont protégées par RAID 10 (mirroring + striping) pour les opérations transactionnelles, offrant une performance élevée et une redondance complète. Chaque disque peut défaillir sans perte de données, et les performances restent acceptables même en mode dégradé. Le stockage archivistique utilise RAID 5 pour optimiser la capacité tout en maintenant une redondance adéquate. RAID 5 distribue les données et les informations de parité sur plusieurs disques, permettant la récupération en cas de défaillance d'un seul disque.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              Cette configuration hybride garantit la redondance des données, la performance et la disponibilité du service même en cas de défaillance matérielle. Les disques sont également configurés avec des alertes de SMART (Self-Monitoring, Analysis and Reporting Technology) pour détecter les défaillances imminentes avant qu'elles ne deviennent critiques. Les disques défaillants peuvent être remplacés à chaud sans arrêt du service.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              Le stockage NFS partagé permet à tous les nœuds du cluster d'accéder aux machines virtuelles et aux données de manière transparente. Cette architecture facilite la migration en direct des machines virtuelles entre les nœuds sans interruption de service. Les performances du stockage NFS sont optimisées via plusieurs mécanismes : utilisation de connexions Gigabit Ethernet redondantes, configuration d'un cache de lecture/écriture sur les nœuds, et optimisation des paramètres NFS pour les workloads de virtualisation.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Haute Disponibilité et Résilience</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              VortexCore intègre plusieurs mécanismes de haute disponibilité pour garantir la continuité de service. Le clustering Proxmox VE permet la migration automatique des machines virtuelles en cas de défaillance d'un nœud. Lorsqu'un nœud défaille, le cluster détecte automatiquement la défaillance via les heartbeats Corosync et déclenche la migration des machines virtuelles vers les nœuds restants. Ce processus est automatisé et transparent pour les utilisateurs, minimisant l'impact sur les services.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              Les sauvegardes automatiques sont exécutées régulièrement pour tous les environnements virtuels, avec des points de restauration multiples pour assurer la récupération en cas de sinistre. Les sauvegardes sont stockées sur un système de stockage séparé pour éviter une perte totale de données en cas de défaillance du stockage principal. Les sauvegardes sont testées régulièrement pour assurer leur intégrité et leur récupérabilité.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Équipes Virtuelles Supportées</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              L'infrastructure VortexCore supporte trois équipes virtuelles principales, chacune avec ses propres ressources isolées et ses propres politiques de sécurité :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-3">
              <li><strong>SOC (Security Operations Center)</strong> - Équipe dédiée à la surveillance et à la détection des menaces de sécurité. Cette équipe utilise des outils comme Wazuh, Splunk et d'autres SIEM pour monitorer le trafic réseau et les événements de sécurité. Le cluster fournit les ressources nécessaires pour exécuter ces outils de surveillance en temps réel.</li>
              <li><strong>IAM (Identity and Access Management)</strong> - Équipe responsable de la gestion des identités et des accès. Cette équipe gère les politiques d'authentification et d'autorisation pour l'ensemble de l'infrastructure. Le cluster fournit les ressources pour exécuter les serveurs d'authentification et les bases de données d'identités.</li>
              <li><strong>CyberRange</strong> - Environnement d'entraînement et de simulation pour les exercices de cybersécurité. Cet environnement permet aux équipes de s'entraîner sur des scénarios d'attaque réalistes dans un environnement contrôlé et isolé.</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Défis Techniques Rencontrés et Solutions</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le projet a présenté plusieurs défis techniques complexes qui ont nécessité des solutions innovantes et une compréhension profonde des technologies d'infrastructure :
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>1. Défaillance Matérielle et Récupération :</strong> Lors de la phase de test, une défaillance matérielle sur l'un des nœuds a causé une perte de synchronisation du cluster. Le disque dur du nœud défaillant s'est corrompu, causant l'arrêt du nœud et la perte de la synchronisation Corosync. La solution a impliqué la reconfiguration complète du nœud défaillant, y compris la réinstallation du système d'exploitation, la resynchronisation des données via NFS et la validation de la résilience du cluster. Cette expérience a démontré l'importance d'une architecture hautement disponible et de procédures de récupération bien documentées.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>2. Blocage NFS par WatchGuard :</strong> Le pare-feu WatchGuard bloquait initialement le trafic NFS entre les nœuds et le stockage, causant une indisponibilité complète du stockage partagé. Le problème a été identifié en analysant les logs du pare-feu et en remarquant que les paquets NFS étaient bloqués. La résolution a nécessité la configuration précise des règles de pare-feu pour autoriser les ports NFS (111 pour RPC, 2049 pour NFS) tout en maintenant la sécurité du réseau. Des règles supplémentaires ont été ajoutées pour autoriser les services NFS auxiliaires comme le portmapper.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>3. Erreurs Corosync :</strong> La synchronisation du cluster Corosync a rencontré des problèmes de quorum lors de la configuration initiale. Le quorum est un mécanisme qui empêche les partitions réseau de causer une divergence dans l'état du cluster. Avec 3 nœuds, le quorum nécessite au moins 2 nœuds pour être actif. La solution a impliqué l'ajustement des paramètres de timeout et la validation de la connectivité réseau entre les nœuds. Les timeouts ont été augmentés pour accommoder les variations de latence réseau, et les paramètres de détection de défaillance ont été affinés.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>4. Erreurs APT et Dépendances :</strong> Des conflits de dépendances système ont été rencontrés lors de l'installation de certains paquets. Proxmox VE utilise un système de paquets Debian complexe avec de nombreuses dépendances. La résolution a impliqué l'identification et la correction des dépendances manquantes, ainsi que la mise à jour des sources de paquets. Certains paquets ont dû être installés dans un ordre spécifique pour éviter les conflits de dépendances.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Performances et Résultats</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              L'infrastructure VortexCore démontre des performances exceptionnelles qui dépassent les exigences d'entreprise :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Temps de réponse inférieur à 10ms pour les opérations de stockage, garantissant une performance élevée pour les applications transactionnelles</li>
              <li>Disponibilité de 99.9% grâce à la haute disponibilité du cluster et aux mécanismes de basculement automatique</li>
              <li>Capacité de support pour plus de 50 machines virtuelles simultanées avec une dégradation minimale des performances</li>
              <li>Récupération automatique en moins de 30 secondes en cas de défaillance de nœud, minimisant l'impact sur les services</li>
              <li>Throughput de stockage supérieur à 500 MB/s, permettant des opérations de sauvegarde et de migration rapides</li>
              <li>Consommation d'énergie optimisée grâce à la virtualisation et à la consolidation des serveurs</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Sécurité et Conformité</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              L'infrastructure intègre plusieurs mesures de sécurité pour protéger les données et les services :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Contrôle d'accès basé sur les rôles (RBAC) pour Proxmox VE, limitant l'accès aux fonctions d'administration</li>
              <li>Authentification SSH avec clés cryptographiques, éliminant les risques de brute-force par mot de passe</li>
              <li>Chiffrement des données en transit via TLS pour les communications de gestion et les transferts de données</li>
              <li>Audit et logging complets de toutes les opérations, permettant la traçabilité et l'investigation des incidents</li>
              <li>Conformité avec les standards de sécurité d'entreprise et les bonnes pratiques de l'industrie</li>
              <li>Isolation des équipes virtuelles via des réseaux virtuels séparés et des politiques de pare-feu</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Apprentissages et Compétences Développées</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              La réalisation du projet VortexCore a permis de développer et de consolider plusieurs compétences techniques avancées :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Conception et implémentation d'architectures de virtualisation hautement disponibles et scalables</li>
              <li>Configuration avancée de Proxmox VE et du clustering avec Corosync et Pacemaker</li>
              <li>Gestion de stockage distribué avec NFS et RAID, y compris l'optimisation des performances</li>
              <li>Troubleshooting de problèmes complexes d'infrastructure, y compris l'analyse des logs et la résolution de conflits réseau</li>
              <li>Documentation technique détaillée et communication d'architecture avec les stakeholders</li>
              <li>Gestion de projets d'infrastructure complexes, y compris la planification, la mise en œuvre et le testing</li>
              <li>Compréhension des principes de haute disponibilité et de résilience dans les architectures d'entreprise</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Impact et Reconnaissance</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le projet VortexCore a reçu une reconnaissance significative de la part de la communauté de cybersécurité et des experts en infrastructure. La 2e place à CYBER-CCNB 2026 avec un trophée d'argent valide l'excellence technique et l'innovation apportées au projet. Cette reconnaissance démontre la capacité à concevoir et à implémenter des solutions d'infrastructure complexes qui répondent aux exigences d'entreprise.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Conclusion</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              VortexCore représente une réalisation majeure en matière d'infrastructure de virtualisation d'entreprise. Le projet démontre la capacité à concevoir, à implémenter et à maintenir une infrastructure complexe et hautement disponible. La reconnaissance du projet par la 2e place à CYBER-CCNB 2026 valide l'excellence technique et l'innovation apportées. Cette expérience constitue une base solide pour des rôles d'infrastructure senior, d'architecture cloud ou de gestion de projets d'infrastructure complexes. Les compétences développées lors de ce projet sont directement applicables à des rôles en administration d'infrastructure, architecture système ou gestion de centres de données.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
