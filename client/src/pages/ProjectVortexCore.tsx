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
          <h1 className="text-5xl font-bold text-foreground mb-4">VortexCore</h1>
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

            <h2 className="text-3xl font-bold text-foreground mb-6">Vue d'Ensemble du Projet</h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              VortexCore est un projet d'infrastructure ambitieux qui démontre la conception et l'implémentation d'une architecture de virtualisation d'entreprise hautement disponible et performante. Le projet a été développé dans le contexte d'une compétition de cybersécurité (CYBER-CCNB 2026) et a remporté la 2e place avec un trophée d'argent, reconnaissant l'excellence technique et l'innovation apportées.
            </p>

            <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Contexte et Objectifs</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              L'objectif principal du projet VortexCore était de concevoir et de déployer une infrastructure de virtualisation robuste, scalable et hautement disponible capable de supporter les opérations critiques de plusieurs équipes virtuelles. Le cluster devait intégrer des technologies modernes de virtualisation, de stockage distribué et de gestion des ressources pour fournir une plateforme fiable aux équipes SOC, IAM et CyberRange.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Les défis spécifiques à relever incluaient la conception d'une architecture capable de supporter plus de 50 machines virtuelles simultanément, la mise en place d'une haute disponibilité garantissant une disponibilité de 99.9%, et la résolution de problèmes complexes d'infrastructure en environnement de production.
            </p>

            <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Architecture Technique Détaillée</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              L'architecture de VortexCore repose sur un cluster Proxmox VE composé de 3 nœuds physiques interconnectés via une infrastructure réseau redondante. Chaque nœud est équipé de ressources matérielles robustes incluant des processeurs multi-cœurs haute performance (Intel Xeon Gold 6526Y — 64 cœurs), 251 GiB de RAM par nœud, et des connexions réseau redondantes pour assurer la continuité de service en cas de défaillance.
            </p>
          
            <p className="text-foreground/80 leading-relaxed mb-4">
              La topologie réseau du cluster est conçue avec une redondance complète. Les nœuds sont interconnectés via des liens réseau multiples pour éviter un point de défaillance unique. Le cluster utilise également un réseau de gestion séparé pour les communications de cluster, isolé du trafic des machines virtuelles.
            </p>
            <img src="/cyber-portfolio/20.png" alt="Topologie réseau du cluster VortexCore — Nodes 1, 2, 3 + UNAS Stockage" className="w-full rounded-lg border border-accent/30 my-6" />
          

            <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Stockage Distribué et RAID</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le système de stockage central utilise une baie UNAS Pro 8 configurée avec une stratégie RAID hybride. Les données critiques sont protégées par RAID 10 (mirroring + striping) pour les opérations transactionnelles. Le stockage archivistique utilise RAID 5 pour optimiser la capacité tout en maintenant une redondance adéquate.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le stockage NFS partagé (vortexops-NFS) permet à tous les nœuds du cluster d'accéder aux machines virtuelles et aux données de manière transparente, facilitant la migration en direct sans interruption de service.
            </p>

            <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Haute Disponibilité et Résilience</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              VortexCore intègre plusieurs mécanismes de haute disponibilité. Le clustering Proxmox VE permet la migration automatique des machines virtuelles en cas de défaillance d'un nœud. Lorsqu'un nœud défaille, le cluster détecte automatiquement la défaillance via les heartbeats Corosync et déclenche la migration des machines virtuelles vers les nœuds restants.
            </p>

            <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Équipes Virtuelles Supportées</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              L'infrastructure VortexCore supporte trois équipes virtuelles principales, chacune avec ses propres ressources isolées :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-3">
              <li><strong>SOC (Security Operations Center)</strong> — VMs 110, 111, 112 (vortexsoc) : surveillance et détection des menaces avec Wazuh, DFIR-Iris.</li>
              <li><strong>IAM (Identity and Access Management)</strong> — VMs 102, 103, 104, 105 (vortexiam) : Windows Server AD, AD Backup, Ubuntu Server, Windows 11.</li>
              <li><strong>CyberRange</strong> — VMs 100, 106, 108, 114 (vortexrange) : Kali-vortex, OPNsense, UbuntuServer, Ubuntu2 pour les exercices offensifs/défensifs.</li>
              <li><strong>NetSec</strong> — VMs 107, 109 (vortexnetsec) : OPNSense-G3, UbuntuTest-G3.</li>
              <li><strong>Services</strong> — VMs 120-125, 1000 (vortexservices) : iRedmail, SRV-file, Bastion-SSH, Graylog, Vitrine-web, Rev-Poxy, template Debian12.</li>
            </ul>
            <img src="/cyber-portfolio/19.png" alt="Liste complète des machines virtuelles par nœud avec leurs équipes" className="w-full rounded-lg border border-accent/30 my-6" />
           
            <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Défis Techniques Rencontrés et Solutions</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>1. Défaillance Matérielle et Récupération :</strong> Une défaillance matérielle sur l'un des nœuds a causé une perte de synchronisation du cluster. La solution a impliqué la reconfiguration complète du nœud, la réinstallation du système d'exploitation, et la resynchronisation des données via NFS.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>2. Blocage NFS par WatchGuard :</strong> Le pare-feu WatchGuard bloquait initialement le trafic NFS. La résolution a nécessité la configuration précise des règles pour autoriser les ports NFS (111 RPC, 2049 NFS) tout en maintenant la sécurité.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>3. Erreurs Corosync :</strong> Des problèmes de quorum lors de la configuration initiale ont été résolus en ajustant les paramètres de timeout et en validant la connectivité réseau entre les nœuds.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>4. Erreurs APT et Dépendances :</strong> Des conflits de dépendances ont été résolus en identifiant les dépendances manquantes et en mettant à jour les sources de paquets dans l'ordre correct.
            </p>

            <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Performances et Résultats</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              L'infrastructure VortexCore démontre des performances exceptionnelles :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>64 cœurs Intel Xeon Gold 6526Y (2 sockets) par nœud</li>
              <li>251.59 GiB de RAM par nœud — utilisation stable à ~15%</li>
              <li>Temps de réponse inférieur à 10ms pour les opérations de stockage</li>
              <li>Disponibilité de 99.9% grâce à la haute disponibilité</li>
              <li>Récupération automatique en moins de 30 secondes en cas de défaillance</li>
              <li>Throughput de stockage supérieur à 500 MB/s</li>
            </ul>
            <img src="/cyber-portfolio/18.png" alt="Statistiques en temps réel du node3-vortexcore — 64 CPUs, 251 GiB RAM" className="w-full rounded-lg border border-accent/30 my-6" />

            <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Sécurité et Conformité</h3>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Contrôle d'accès basé sur les rôles (RBAC) pour Proxmox VE</li>
              <li>Authentification SSH avec clés cryptographiques</li>
              <li>Chiffrement des données en transit via TLS</li>
              <li>Audit et logging complets de toutes les opérations</li>
              <li>Isolation des équipes virtuelles via des réseaux virtuels séparés</li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Impact et Reconnaissance — CYBER-CCNB 2026</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le projet VortexCore a reçu une reconnaissance significative lors de la compétition CYBER-CCNB 2026. La 2e place avec un trophée d'argent valide l'excellence technique et l'innovation apportées.
            </p>
            <img src="/cyber-portfolio/13.jpeg" alt="Présentation de VortexCore à l'audience CYBER-CCNB 2026" className="w-full rounded-lg border border-accent/30 my-6" />
            <img src="/cyber-portfolio/11.jpeg" alt="Dashboard de monitoring Proxmox en temps réel lors de la présentation" className="w-full rounded-lg border border-accent/30 my-6" />
            <img src="/cyber-portfolio/14.jpeg" alt="L'équipe VortexCore devant le rack d'infrastructure" className="w-full rounded-lg border border-accent/30 my-6" />
            <img src="/cyber-portfolio/10.jpeg" alt="L'équipe VortexCore avec les trophées d'argent CYBER-CCNB 2026" className="w-full rounded-lg border border-accent/30 my-6" />
            <img src="/cyber-portfolio/12.jpeg" alt="Remise du certificat à Ismael Baby" className="w-full rounded-lg border border-accent/30 my-6" />

            <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Apprentissages et Compétences Développées</h3>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Conception et implémentation d'architectures de virtualisation hautement disponibles</li>
              <li>Configuration avancée de Proxmox VE et du clustering avec Corosync et Pacemaker</li>
              <li>Gestion de stockage distribué avec NFS et RAID</li>
              <li>Troubleshooting de problèmes complexes d'infrastructure</li>
              <li>Documentation technique détaillée et communication d'architecture</li>
              <li>Gestion de projets d'infrastructure complexes</li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Conclusion</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              VortexCore représente une réalisation majeure en matière d'infrastructure de virtualisation d'entreprise. Le projet démontre la capacité à concevoir, implémenter et maintenir une infrastructure complexe et hautement disponible. La reconnaissance par la 2e place à CYBER-CCNB 2026 valide l'excellence technique et l'innovation apportées.
            </p>
            <img src="/cyber-portfolio/15.jpeg" alt="Certificat Jeune Excellence CCNB — Baby Ismael" className="w-full rounded-lg border border-accent/30 my-6" />

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
