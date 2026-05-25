import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function ProjectStage() {
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
          <h1 className="text-5xl font-bold text-primary mb-4">Stage - Laboratoire de Réseautique</h1>
          <p className="text-2xl text-accent mb-6">Support Informatique et Configuration Réseau d'Entreprise</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-accent/20 text-accent border-accent/30">Support Informatique</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Réseaux</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Infrastructure</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Cisco</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Configuration</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Dépannage</Badge>
          </div>
          <p className="text-foreground/80 max-w-4xl">
            Stage en support informatique et réseautique - Laboratoire de Réseautique du CCNB - 2025-2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-primary mb-6">Vue d'Ensemble du Stage</h2>
            
            <p className="text-foreground/80 leading-relaxed mb-6">
              Le stage en laboratoire de réseautique représente une expérience pratique immersive dans le domaine du support informatique et de l'administration réseau d'entreprise. Ce stage a été réalisé au Collège communautaire du Nouveau-Brunswick (CCNB) et a fourni une opportunité précieuse d'appliquer les connaissances théoriques acquises en classe à des situations réelles d'infrastructure informatique. Le stage a couverts tous les aspects essentiels du support informatique, de la configuration réseau, de la gestion des systèmes et de la résolution de problèmes techniques complexes. Cette expérience a été fondamentale pour développer les compétences pratiques nécessaires à une carrière réussie en informatique et en cybersécurité.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Contexte et Objectifs du Stage</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le laboratoire de réseautique du CCNB est un environnement d'apprentissage pratique conçu pour préparer les étudiants aux défis réels de l'administration informatique et réseau. L'objectif principal du stage était de développer une compréhension pratique des technologies informatiques modernes et de maîtriser les compétences essentielles pour un rôle de support informatique junior ou d'administrateur réseau débutant. Les objectifs spécifiques incluaient :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Maîtriser le dépannage matériel et logiciel des postes de travail et des serveurs</li>
              <li>Acquérir une expérience pratique avec les technologies réseau Cisco et autres équipements réseau</li>
              <li>Apprendre la configuration et l'administration des serveurs Windows et Linux</li>
              <li>Développer les compétences en gestion des tickets d'assistance technique</li>
              <li>Comprendre les principes de sécurité informatique et de conformité</li>
              <li>Acquérir une expérience en virtualisation et en gestion des ressources informatiques</li>
              <li>Développer les compétences en documentation technique et communication</li>
              <li>Apprendre les meilleures pratiques en support utilisateur et service à la clientèle</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Responsabilités et Tâches Principales</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Durant le stage, j'ai été responsable de plusieurs tâches essentielles en support informatique et administration réseau :
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>1. Support Utilisateur et Dépannage :</strong> Fourniture d'assistance technique aux utilisateurs finaux pour la résolution de problèmes informatiques. Cela incluait le diagnostic et la résolution de problèmes logiciels, la configuration de postes de travail, l'installation de logiciels, la gestion des accès utilisateurs et la formation des utilisateurs sur les outils informatiques. J'ai traité des tickets d'assistance variés, allant des problèmes simples de connectivité à des problèmes plus complexes de configuration système. Une documentation détaillée était maintenue pour chaque ticket, permettant le suivi et la résolution efficace des problèmes.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>2. Configuration et Maintenance Réseau :</strong> Configuration et maintenance des équipements réseau Cisco, y compris les commutateurs et les routeurs. Cela incluait la configuration des VLAN, le routage inter-VLAN, la configuration des ACL pour la sécurité réseau, et la résolution de problèmes de connectivité réseau. J'ai également participé à la mise à jour des configurations réseau et à la documentation des changements pour assurer la traçabilité et la conformité.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>3. Installation et Configuration de Serveurs :</strong> Installation et configuration de serveurs Windows Server et Linux pour supporter les services informatiques. Cela incluait l'installation du système d'exploitation, la configuration des services réseau (DHCP, DNS, Active Directory), la gestion des utilisateurs et des groupes, et la configuration de la sécurité du serveur. J'ai également participé à la mise en place de sauvegardes et à la planification de la récupération après sinistre.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>4. Gestion des Ressources Informatiques :</strong> Gestion de l'inventaire informatique, y compris le suivi des équipements, des licences logicielles et des ressources informatiques. Cela incluait la documentation des équipements, la gestion des cycles de vie des équipements, et la planification des remplacements. J'ai également participé à l'optimisation des ressources informatiques pour améliorer l'efficacité et réduire les coûts.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>5. Virtualisation et Infrastructure :</strong> Configuration et gestion de l'infrastructure virtualisée utilisant Proxmox VE et VMware. Cela incluait la création et la gestion des machines virtuelles, la configuration du stockage virtuel, la gestion des ressources de calcul, et la mise en place de la haute disponibilité. J'ai également participé à la migration des services vers l'infrastructure virtualisée et à l'optimisation des performances.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>6. Sécurité Informatique :</strong> Implémentation et maintenance des mesures de sécurité informatique, y compris la configuration des pare-feu, la gestion des accès utilisateurs, la mise en place de politiques de sécurité, et la sensibilisation à la sécurité. J'ai également participé à des audits de sécurité et à l'identification des vulnérabilités informatiques.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Technologies et Outils Utilisés</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le stage a fourni une expérience pratique avec un large éventail de technologies et d'outils informatiques :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li><strong>Équipements Réseau Cisco :</strong> Configuration et dépannage de commutateurs Cisco (Catalyst 2960, 3560), routeurs Cisco (2911, 2921), et autres équipements réseau</li>
              <li><strong>Systèmes d'Exploitation :</strong> Windows Server 2016/2019/2022, Windows 10/11, Ubuntu Linux, CentOS</li>
              <li><strong>Virtualisation :</strong> Proxmox VE, VMware vSphere, VirtualBox, Hyper-V</li>
              <li><strong>Services Réseau :</strong> DHCP, DNS, Active Directory, NTP, SNMP</li>
              <li><strong>Sécurité :</strong> Pare-feu WatchGuard, Cisco ASA, VPN, certificats SSL/TLS</li>
              <li><strong>Outils de Diagnostic :</strong> Wireshark, Cisco CLI, PuTTY, Remote Desktop, TeamViewer</li>
              <li><strong>Gestion Informatique :</strong> Active Directory, Group Policy, WSUS, Antivirus/Antimalware</li>
              <li><strong>Documentation :</strong> Cisco Packet Tracer, Visio, documentation technique en Markdown</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Projets et Initiatives Principales</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Plusieurs projets majeurs ont été réalisés durant le stage :
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>1. Mise à Jour de l'Infrastructure Réseau :</strong> Participation à la mise à jour complète de l'infrastructure réseau du laboratoire, y compris le remplacement des équipements obsolètes, la reconfiguration des VLAN, et l'optimisation des performances réseau. Ce projet a impliqué la planification minutieuse, la coordination avec les équipes, et la documentation détaillée de tous les changements. Le projet a été réalisé avec un temps d'arrêt minimal et a amélioré significativement les performances et la fiabilité du réseau.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>2. Déploiement de Proxmox VE :</strong> Conception et déploiement d'une infrastructure de virtualisation basée sur Proxmox VE pour supporter les services du laboratoire. Ce projet a impliqué la sélection du matériel, l'installation et la configuration de Proxmox VE, la migration des services existants vers la plateforme virtualisée, et la mise en place de la haute disponibilité. Le projet a permis une meilleure utilisation des ressources informatiques et une amélioration de la flexibilité opérationnelle.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>3. Mise en Place d'Active Directory :</strong> Configuration et déploiement d'Active Directory pour la gestion centralisée des utilisateurs et des ressources informatiques. Cela incluait la création de la structure organisationnelle, la configuration des politiques de groupe, la gestion des accès utilisateurs, et la mise en place de la sécurité. Active Directory a amélioré significativement la gestion des utilisateurs et des ressources informatiques.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>4. Documentation Technique :</strong> Création et maintenance d'une documentation technique complète pour l'infrastructure informatique du laboratoire. Cela incluait la documentation des configurations réseau, des serveurs, des services, et des procédures de dépannage. Une documentation bien maintenue a facilité le dépannage et la maintenance de l'infrastructure.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Défis Rencontrés et Solutions</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le stage a présenté plusieurs défis techniques qui ont nécessité des solutions créatives et une compréhension approfondie des technologies informatiques :
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>1. Problèmes de Connectivité Réseau :</strong> Des problèmes intermittents de connectivité réseau ont été identifiés, causant des interruptions de service. L'investigation a révélé que le problème était causé par une configuration incorrecte des VLAN et par une saturation du lien réseau. La solution a impliqué la reconfiguration des VLAN, l'optimisation de la bande passante, et l'ajout de liens réseau supplémentaires. Ces changements ont éliminé les problèmes de connectivité et amélioré la stabilité du réseau.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>2. Performance du Serveur :</strong> Les serveurs présentaient des performances dégradées, causant des ralentissements des services. L'investigation a révélé que le problème était causé par une utilisation excessive des ressources (CPU, mémoire, disque). La solution a impliqué l'optimisation des services, l'ajout de ressources supplémentaires, et la virtualisation de certains services pour une meilleure utilisation des ressources. Ces changements ont amélioré significativement les performances du serveur.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>3. Sécurité et Conformité :</strong> Des vulnérabilités de sécurité ont été identifiées dans l'infrastructure informatique. La solution a impliqué l'implémentation de mesures de sécurité supplémentaires, y compris la mise à jour des systèmes, la configuration des pare-feu, la gestion des accès utilisateurs, et la mise en place de politiques de sécurité. Ces mesures ont amélioré significativement la posture de sécurité de l'infrastructure.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Apprentissages et Compétences Développées</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le stage a permis de développer et de consolider plusieurs compétences essentielles en support informatique et administration réseau :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Dépannage pratique de problèmes informatiques complexes et résolution efficace</li>
              <li>Configuration avancée d'équipements réseau Cisco et autres technologies réseau</li>
              <li>Administration de serveurs Windows Server et Linux</li>
              <li>Gestion de l'infrastructure virtualisée avec Proxmox VE et VMware</li>
              <li>Implémentation de mesures de sécurité informatique et de conformité</li>
              <li>Gestion des tickets d'assistance technique et suivi des problèmes</li>
              <li>Documentation technique détaillée et communication efficace</li>
              <li>Travail en équipe et collaboration avec d'autres professionnels informatiques</li>
              <li>Gestion du temps et des priorités dans un environnement de support actif</li>
              <li>Apprentissage continu et adaptation aux nouvelles technologies</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Impact et Reconnaissance</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le stage a eu un impact significatif sur le développement professionnel et a été reconnu par les superviseurs et les collègues. Les contributions au stage incluaient l'amélioration de l'infrastructure informatique, la mise en place de nouvelles technologies, et l'amélioration de la documentation technique. Ces contributions ont démontré une compréhension solide des technologies informatiques et une capacité à résoudre des problèmes complexes de manière efficace et professionnelle.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Conclusion</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le stage en laboratoire de réseautique a été une expérience formative et enrichissante qui a fourni une base solide pour une carrière en support informatique et administration réseau. L'expérience pratique acquise durant le stage a validé les connaissances théoriques et a développé les compétences pratiques nécessaires pour réussir dans le domaine informatique. Cette expérience constitue un atout majeur pour les rôles en support informatique junior, administrateur réseau débutant, ou technicien en infrastructure informatique. Les compétences développées lors de ce stage sont directement applicables à des environnements d'entreprise réels et sont hautement demandées par les employeurs dans le domaine des technologies de l'information.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
