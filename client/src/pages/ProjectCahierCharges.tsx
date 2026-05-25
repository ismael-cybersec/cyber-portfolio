import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function ProjectCahierCharges() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border">
        <div className="container">
          <div className="flex items-center gap-4 mb-6">
            <a href="/" className="text-accent hover:text-accent/80 transition-colors flex items-center gap-2">
              <ArrowLeft className="w-5 h-5" /> Retour au Portfolio
            </a>
          </div>
          <h1 className="text-5xl font-bold text-primary mb-4">Cahier des Charges - Stage Laboratoire de Réseautique</h1>
          <p className="text-2xl text-accent mb-6">Spécifications et Planification du Stage</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-accent/20 text-accent border-accent/30">Cahier des Charges</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Stage</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Planification</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Spécifications</Badge>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-primary mb-6">Vue d'Ensemble du Cahier des Charges</h2>
            
            <p className="text-foreground/80 leading-relaxed mb-6">
              Le cahier des charges du stage au Laboratoire de Réseautique représente le document fondateur qui a défini les objectifs, les livrables, et les attentes pour l'ensemble du stage. Ce document a fourni une feuille de route claire pour les activités du stage et a établi les critères de succès pour évaluer la réussite du stage. Le cahier des charges a couvert les domaines d'étude, les compétences à développer, les projets à réaliser, et les résultats attendus. Ce document a été essentiel pour assurer l'alignement entre les objectifs du stage et les attentes de l'organisation d'accueil.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Contexte et Justification</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le stage au Laboratoire de Réseautique a été conçu pour fournir une expérience pratique dans les domaines clés de la réseautique et de la cybersécurité. Le laboratoire est un environnement d'apprentissage spécialisé équipé d'équipements réseau modernes et de logiciels de simulation. Le stage a offert l'opportunité d'appliquer les connaissances théoriques acquises en classe à des projets pratiques et de développer une expertise en configuration et en administration des réseaux informatiques. Le cahier des charges a établi le cadre pour transformer cette opportunité en apprentissage structuré et mesurable.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Objectifs Généraux du Stage</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Les objectifs généraux du stage incluaient :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Acquérir une expérience pratique en configuration et administration de réseaux informatiques</li>
              <li>Développer une compréhension approfondie des protocoles réseau et des technologies de réseautique</li>
              <li>Maîtriser l'utilisation des outils et des équipements réseau professionnels</li>
              <li>Développer une expertise en sécurité des réseaux et en meilleures pratiques de sécurité</li>
              <li>Acquérir des compétences en résolution de problèmes réseau complexes</li>
              <li>Développer des compétences en documentation technique et en communication professionnelle</li>
              <li>Préparer pour une carrière en réseautique ou en cybersécurité</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Domaines d'Étude</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le cahier des charges a défini les domaines d'étude suivants pour le stage :
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Réseautique Fondamentale :</strong> Étude des concepts fondamentaux de la réseautique, y compris les modèles OSI et TCP/IP, les protocoles réseau (IP, TCP, UDP), et l'adressage réseau. Cette étude a fourni les fondations théoriques nécessaires pour comprendre le fonctionnement des réseaux informatiques.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Configuration d'Équipements Réseau :</strong> Pratique dans la configuration des équipements réseau tels que les routeurs, les commutateurs, et les pare-feu. La configuration a inclus la mise en place des interfaces réseau, la configuration du routage, et la configuration des services réseau.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Administration de Réseaux :</strong> Apprentissage des tâches d'administration de réseaux, y compris la gestion des utilisateurs, la gestion des adresses IP, le monitoring du réseau, et la maintenance du réseau. Ces compétences sont essentielles pour gérer un réseau informatique en production.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Sécurité des Réseaux :</strong> Étude des mesures de sécurité réseau, y compris les pare-feu, les VPN, les systèmes de détection d'intrusion, et les meilleures pratiques en sécurité réseau. Cette étude a fourni une compréhension des menaces de sécurité réseau et des mesures de défense.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Virtualisation et Cloud :</strong> Introduction à la virtualisation des réseaux et aux technologies cloud. Cette étude a couvert les concepts de virtualisation, les hyperviseurs, et les services cloud.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Projets et Livrables</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le cahier des charges a défini les projets et les livrables suivants pour le stage :
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Projet 1 - Configuration d'une Infrastructure Réseau Complète :</strong> Concevoir et configurer une infrastructure réseau complète incluant routeurs, commutateurs, et pare-feu. Le projet a impliqué la planification de l'architecture réseau, la configuration des équipements, et le test de la fonctionnalité. Le livrable a inclus une documentation complète de l'architecture et des configurations.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Projet 2 - Mise en Place de la Sécurité Réseau :</strong> Implémenter les mesures de sécurité réseau pour protéger l'infrastructure réseau. Le projet a impliqué la configuration des pare-feu, la mise en place des VPN, et la configuration des systèmes de détection d'intrusion. Le livrable a inclus une politique de sécurité réseau et une documentation des mesures de sécurité.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Projet 3 - Monitoring et Administration du Réseau :</strong> Mettre en place les outils et les processus pour monitorer et administrer le réseau. Le projet a impliqué l'installation des outils de monitoring, la configuration des alertes, et la mise en place des processus d'administration. Le livrable a inclus une documentation des outils et des processus.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Projet 4 - Documentation Technique :</strong> Créer une documentation technique complète de l'infrastructure réseau. La documentation a inclus les diagrammes réseau, les configurations des équipements, les procédures d'administration, et les meilleures pratiques. Cette documentation a servi de référence pour l'administration future du réseau.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Compétences à Développer</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le cahier des charges a identifié les compétences suivantes à développer pendant le stage :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Configuration et administration des équipements réseau (Cisco)</li>
              <li>Conception d'architectures réseau</li>
              <li>Sécurité des réseaux et meilleures pratiques</li>
              <li>Monitoring et troubleshooting réseau</li>
              <li>Documentation technique professionnelle</li>
              <li>Communication et travail d'équipe</li>
              <li>Résolution de problèmes et pensée critique</li>
              <li>Gestion de projets</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Critères de Succès</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le cahier des charges a défini les critères de succès suivants pour évaluer la réussite du stage :
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Critère 1 - Réalisation des Projets :</strong> Tous les projets définis dans le cahier des charges ont été réalisés selon les spécifications. Les livrables ont été complétés à temps et ont répondu aux critères de qualité définis.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Critère 2 - Développement des Compétences :</strong> Les compétences définies dans le cahier des charges ont été développées et démontrées à travers les projets et les activités du stage. Les évaluations ont confirmé l'acquisition des compétences.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Critère 3 - Qualité de la Documentation :</strong> La documentation technique créée pendant le stage a été complète, claire, et professionnelle. La documentation a suivi les standards de documentation technique.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Critère 4 - Satisfaction du Superviseur :</strong> Le superviseur du stage a exprimé la satisfaction avec la performance et les réalisations pendant le stage. L'évaluation du superviseur a confirmé que les objectifs du stage ont été atteints.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Planification et Calendrier</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le cahier des charges a défini un calendrier pour les activités du stage :
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Semaine 1-2 : Orientation et Formation :</strong> Orientation au laboratoire, formation sur les équipements et les logiciels, et introduction aux projets du stage. Cette période a permis de se familiariser avec l'environnement de travail et les outils.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Semaine 3-6 : Projet 1 - Configuration d'Infrastructure :</strong> Travail sur le projet de configuration d'une infrastructure réseau complète. Cette période a inclus la planification, la configuration, et le test.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Semaine 7-10 : Projet 2 - Sécurité Réseau :</strong> Travail sur le projet de mise en place de la sécurité réseau. Cette période a inclus la conception des mesures de sécurité, la configuration, et le test.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Semaine 11-14 : Projet 3 - Monitoring et Administration :</strong> Travail sur le projet de monitoring et d'administration du réseau. Cette période a inclus l'installation des outils, la configuration, et la mise en place des processus.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Semaine 15-16 : Documentation et Finalisation :</strong> Finalisation de la documentation technique et préparation du rapport final du stage. Cette période a inclus la révision de la documentation et la préparation de la présentation finale.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Ressources et Support</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le cahier des charges a identifié les ressources et le support disponibles pour le stage :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Équipements réseau professionnels (routeurs Cisco, commutateurs, pare-feu)</li>
              <li>Logiciels de simulation réseau (Cisco Packet Tracer, GNS3)</li>
              <li>Accès à la documentation technique et aux ressources d'apprentissage</li>
              <li>Supervision et mentoring d'un superviseur expérimenté</li>
              <li>Accès aux laboratoires et aux installations du centre</li>
              <li>Support technique et assistance en cas de problème</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Conclusion</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le cahier des charges du stage au Laboratoire de Réseautique a fourni un cadre clair et structuré pour le stage. Le document a défini les objectifs, les projets, les compétences à développer, et les critères de succès. Le cahier des charges a assuré que le stage était bien planifié et que les attentes étaient claires pour toutes les parties impliquées. Le respect du cahier des charges a permis de réaliser un stage réussi et de développer les compétences essentielles en réseautique et en cybersécurité.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
