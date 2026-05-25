import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function ProjectIntegration() {
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
          <h1 className="text-5xl font-bold text-primary mb-4">Projet d'Intégration</h1>
          <p className="text-2xl text-accent mb-6">Infrastructure de Cybersécurité Complète pour VortexOps Inc.</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-accent/20 text-accent border-accent/30">Cybersécurité</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Infrastructure</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Projet Capstone</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Proxmox VE</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">SIEM</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Sécurité</Badge>
          </div>
          <p className="text-foreground/80 max-w-4xl">
            Projet d'intégration capstone en cybersécurité - Janvier à Avril 2026 - CYBER-CCNB 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-primary mb-6">Vue d'Ensemble du Projet</h2>
            
            <p className="text-foreground/80 leading-relaxed mb-6">
              Le projet d'intégration en cybersécurité représente l'aboutissement des études en cybersécurité au CCNB. Ce projet capstone a impliqué la conception et la mise en œuvre d'une infrastructure de cybersécurité complète pour une entreprise fictive (VortexOps Inc.). Le projet a couvert tous les aspects essentiels de la cybersécurité d'entreprise, y compris l'architecture de sécurité, la détection d'intrusion, la gestion des identités, et la conformité aux standards de sécurité. Ce projet a démontré une compréhension holistique de la cybersécurité et la capacité à concevoir et à implémenter une infrastructure sécurisée et résiliente.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Contexte et Objectifs du Projet</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le projet d'intégration a été conçu comme un projet capstone pour valider les compétences acquises durant le programme d'études en cybersécurité. L'objectif principal était de concevoir une infrastructure de cybersécurité complète capable de protéger les actifs informatiques d'une entreprise contre les menaces de sécurité modernes. Les objectifs spécifiques incluaient :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Concevoir une architecture de sécurité robuste et scalable pour une entreprise</li>
              <li>Mettre en place des systèmes de détection d'intrusion (IDS) et de prévention d'intrusion (IPS)</li>
              <li>Implémenter une gestion centralisée des identités et des accès (IAM)</li>
              <li>Déployer une infrastructure de virtualisation hautement disponible (VortexCore)</li>
              <li>Mettre en place un système SIEM (Security Information and Event Management) pour la surveillance de sécurité</li>
              <li>Implémenter des mesures de conformité aux standards de sécurité (ISO 27001, NIST)</li>
              <li>Documenter l'architecture et les procédures de sécurité</li>
              <li>Démontrer la capacité à gérer un projet complexe de cybersécurité</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Architecture de Sécurité Globale</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              L'architecture de sécurité du projet d'intégration repose sur un modèle de défense en profondeur (defense in depth) qui implémente plusieurs couches de sécurité pour protéger les actifs informatiques. Cette approche garantit que même si une couche de sécurité est compromise, d'autres couches continuent à protéger l'infrastructure.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Couche 1 - Sécurité Périmétrique :</strong> La première couche de sécurité comprend les pare-feu de périmètre (WatchGuard, Cisco ASA) qui contrôlent le trafic entrant et sortant. Les pare-feu sont configurés avec des règles de sécurité strictes qui autorisent uniquement le trafic légitime et bloquent les attaques connues. Les pare-feu utilisent également des techniques avancées comme l'inspection approfondie des paquets (DPI) pour détecter les menaces au niveau applicatif.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Couche 2 - Détection et Prévention d'Intrusion :</strong> La deuxième couche comprend les systèmes de détection d'intrusion (IDS) et de prévention d'intrusion (IPS) qui analysent le trafic réseau pour identifier les attaques. CyberSentinel v2 fournit une détection comportementale avancée qui identifie les patterns d'attaque sans dépendre de signatures. Les systèmes IDS/IPS génèrent des alertes qui sont envoyées au système SIEM pour une analyse centralisée.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Couche 3 - Sécurité des Hôtes :</strong> La troisième couche comprend les mesures de sécurité au niveau des hôtes (serveurs et postes de travail), y compris les antivirus/antimalware, les pare-feu personnels, et les systèmes de détection d'intrusion au niveau de l'hôte (HIDS). Les hôtes sont également durcis en supprimant les services inutiles, en appliquant les correctifs de sécurité, et en configurant les politiques de sécurité.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Couche 4 - Gestion des Identités et des Accès :</strong> La quatrième couche comprend les systèmes de gestion des identités et des accès (IAM) qui contrôlent qui peut accéder à quelles ressources. Active Directory fournit une gestion centralisée des utilisateurs et des groupes. L'authentification multi-facteurs (MFA) est implémentée pour les accès sensibles, ajoutant une couche de sécurité supplémentaire.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Couche 5 - Surveillance et Réponse :</strong> La cinquième couche comprend les systèmes de surveillance de sécurité (SIEM) et les procédures de réponse aux incidents. Le système SIEM collecte les événements de sécurité de tous les composants de l'infrastructure et effectue une analyse centralisée pour identifier les incidents de sécurité. Les équipes de sécurité utilisent les alertes du SIEM pour enquêter et répondre rapidement aux incidents.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Composants Clés du Projet</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le projet d'intégration intègre plusieurs composants clés de cybersécurité :
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>1. VortexCore - Infrastructure Virtualisée :</strong> Le cluster Proxmox VE (VortexCore) fournit l'infrastructure de virtualisation pour supporter les services de sécurité. Ce cluster hautement disponible héberge les machines virtuelles pour les équipes SOC, IAM et CyberRange. La haute disponibilité du cluster garantit que les services de sécurité restent disponibles même en cas de défaillance matérielle.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>2. CyberSentinel v2 - Détection d'Intrusion :</strong> Le système CyberSentinel v2 fournit une détection d'intrusion comportementale avancée. Le système détecte les attaques réseau (ICMP flood, TCP SYN scan, SSH brute-force) et déclenche automatiquement des réponses défensives. Les alertes du système sont envoyées au SIEM pour une analyse centralisée.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>3. SOC (Security Operations Center) :</strong> L'équipe SOC est responsable de la surveillance continue de la sécurité de l'infrastructure. L'équipe utilise le système SIEM pour monitorer les événements de sécurité, identifier les incidents, et coordonner la réponse aux incidents. Le SOC fonctionne 24/7 pour assurer une surveillance continue.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>4. IAM (Identity and Access Management) :</strong> Le système IAM gère les identités et les accès pour l'infrastructure. Active Directory fournit une gestion centralisée des utilisateurs et des groupes. Les politiques d'accès sont configurées pour appliquer le principe du moindre privilège, limitant l'accès aux ressources au minimum nécessaire pour accomplir les tâches.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>5. CyberRange - Environnement d'Entraînement :</strong> Le CyberRange fournit un environnement d'entraînement isolé pour les exercices de cybersécurité. Les équipes peuvent s'entraîner sur des scénarios d'attaque réalistes dans un environnement contrôlé sans risque pour l'infrastructure de production.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Processus de Conception et Implémentation</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le projet a suivi un processus structuré de conception et d'implémentation :
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Phase 1 - Analyse des Besoins :</strong> La première phase a impliqué l'analyse détaillée des besoins de sécurité pour VortexOps Inc. Les besoins ont été documentés, y compris les actifs à protéger, les menaces potentielles, et les objectifs de sécurité. Une évaluation des risques a été effectuée pour identifier les risques de sécurité prioritaires.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Phase 2 - Conception de l'Architecture :</strong> La deuxième phase a impliqué la conception détaillée de l'architecture de sécurité. L'architecture a été conçue en utilisant le modèle de défense en profondeur pour assurer une protection multicouche. Des diagrammes d'architecture ont été créés pour visualiser les composants et les flux de données.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Phase 3 - Implémentation :</strong> La troisième phase a impliqué l'implémentation de l'architecture de sécurité. Les composants ont été installés et configurés selon la conception. Les tests ont été effectués pour assurer que chaque composant fonctionne correctement et que l'architecture globale offre la protection prévue.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Phase 4 - Tests et Validation :</strong> La quatrième phase a impliqué des tests complets et la validation de l'architecture de sécurité. Des tests de pénétration ont été effectués pour identifier les vulnérabilités. Des tests de charge ont été effectués pour assurer que l'infrastructure peut gérer le trafic attendu. Des tests de récupération après sinistre ont été effectués pour assurer que l'infrastructure peut récupérer après une défaillance.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Phase 5 - Documentation et Déploiement :</strong> La cinquième phase a impliqué la documentation complète de l'architecture et des procédures de sécurité. Une documentation technique détaillée a été créée pour faciliter la maintenance et le dépannage. Des procédures opérationnelles ont été documentées pour guider les équipes de sécurité.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Résultats et Réalisations</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le projet d'intégration a atteint tous les objectifs définis et a dépassé les attentes :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>✓ Architecture de sécurité complète implémentée avec défense en profondeur</li>
              <li>✓ Détection d'intrusion avancée opérationnelle et fonctionnelle</li>
              <li>✓ Gestion des identités et des accès centralisée et sécurisée</li>
              <li>✓ Infrastructure virtualisée hautement disponible et performante</li>
              <li>✓ Système SIEM opérationnel pour la surveillance centralisée</li>
              <li>✓ Conformité aux standards de sécurité (ISO 27001, NIST)</li>
              <li>✓ Documentation technique complète et procédures de sécurité</li>
              <li>✓ 2e place à CYBER-CCNB 2026 avec reconnaissance de l'excellence technique</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Apprentissages et Compétences Développées</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le projet d'intégration a permis de développer et de consolider une compréhension holistique de la cybersécurité d'entreprise :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Conception d'architectures de sécurité complètes et multicouches</li>
              <li>Intégration de multiples composants de sécurité dans une infrastructure cohérente</li>
              <li>Gestion de projets complexes de cybersécurité</li>
              <li>Communication et présentation de concepts de sécurité complexes</li>
              <li>Compréhension holistique de la cybersécurité d'entreprise</li>
              <li>Capacité à identifier et à résoudre les défis de sécurité</li>
              <li>Documentation technique et procédures opérationnelles</li>
              <li>Leadership et collaboration dans un environnement de projet</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Conclusion</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le projet d'intégration en cybersécurité représente l'aboutissement des études en cybersécurité et démontre une compréhension complète des principes et des pratiques de cybersécurité d'entreprise. Le projet a validé la capacité à concevoir et à implémenter une infrastructure de sécurité complète capable de protéger les actifs informatiques contre les menaces modernes. La reconnaissance du projet par la 2e place à CYBER-CCNB 2026 valide l'excellence technique et l'innovation apportées. Cette expérience constitue une base solide pour une carrière réussie en cybersécurité, que ce soit en tant qu'architecte de sécurité, ingénieur de sécurité, ou responsable de la sécurité informatique.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
