import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function ProjectLabsAdditionnels() {
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
          <h1 className="text-5xl font-bold text-foreground mb-4">Labs et Projets Additionnels</h1>
          <p className="text-2xl text-accent mb-6">Collection de Laboratoires et Projets Pratiques</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-accent/20 text-accent border-accent/30">Labs</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Projets</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Pratique</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Apprentissage</Badge>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-foreground mb-6">Vue d'Ensemble des Labs Additionnels</h2>
            
            <p className="text-foreground/80 leading-relaxed mb-6">
              Au-delà des projets majeurs documentés, j'ai réalisé plusieurs laboratoires et projets additionnels qui ont contribué au développement de compétences spécialisées en cybersécurité. Ces labs ont couvert des domaines variés de la sécurité informatique et ont fourni une expérience pratique dans des technologies et des concepts spécifiques. Chaque lab a présenté des défis uniques et a contribué à une compréhension holistique de la cybersécurité. Cette collection de labs représente une progression logique à travers les domaines clés de la cybersécurité, du fondamental au spécialisé.
            </p>

            <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Baby Lab 1 AD - Active Directory Fondamentaux</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Ce laboratoire a fourni une introduction pratique complète à la configuration et à l'administration d'Active Directory. Le lab a couvert l'installation d'Active Directory sur Windows Server, la création d'utilisateurs et de groupes, la configuration des politiques de groupe (GPO), et la gestion des permissions. Le laboratoire a impliqué la création d'une structure d'unités organisationnelles (OU) reflétant une structure organisationnelle réelle, la configuration des stratégies de mot de passe, et la mise en place de la sécurité de base. Cette expérience a établi les fondations essentielles pour la gestion des identités et des accès dans un environnement d'entreprise. Les compétences développées incluaient la compréhension de l'architecture d'Active Directory, la capacité à gérer les utilisateurs et les groupes, et la compréhension des politiques de groupe.
            </p>

            <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Baby Lab 2 AD - Active Directory Avancé</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Ce laboratoire a approfondi les concepts d'Active Directory avec des sujets avancés et complexes. Le lab a couvert la réplication d'Active Directory entre plusieurs contrôleurs de domaine, la gestion des sites et des liaisons de sites pour optimiser la réplication, la sécurité avancée d'Active Directory, les politiques de groupe avancées avec filtrage WMI et héritage, et la mise en place de la haute disponibilité. Le laboratoire a impliqué la conception d'une infrastructure Active Directory distribuée géographiquement, la configuration de la réplication inter-site, et la mise en place de mesures de sécurité avancées. Cette expérience a développé une expertise en administration d'Active Directory complexe et hautement disponible. Les compétences développées incluaient la compréhension approfondie de la réplication, la capacité à concevoir des infrastructures distribuées, et la maîtrise de la sécurité avancée d'Active Directory.
            </p>

            <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Ethical Hacking Lab - Tests de Pénétration Pratiques</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Ce laboratoire a fourni une formation pratique complète en techniques de sécurité offensive et de tests de pénétration. Le lab a couvert les phases complètes d'un test de pénétration : la reconnaissance passive et active, l'énumération détaillée des services, l'identification des vulnérabilités, l'exploitation des vulnérabilités, et les activités de post-exploitation. Les participants ont appris à utiliser des outils professionnels comme Metasploit Framework pour l'exploitation, Burp Suite pour le test des applications web, et Kali Linux comme plateforme principale. Le laboratoire a impliqué des scénarios réalistes d'attaque et a enseigné comment les attaquants pensent et opèrent. Cette expérience a développé les compétences essentielles pour les tests de pénétration professionnels. Les compétences développées incluaient la maîtrise des outils de sécurité offensive, la compréhension des vecteurs d'attaque, et la capacité à effectuer des tests de pénétration complets.
            </p>

            <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">SECS1025 Laboratoire 2 - Sécurité des Systèmes et Gestion des Risques</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Ce laboratoire a couvert les aspects holistiques de la sécurité des systèmes d'exploitation et la gestion des risques de sécurité. Le lab a impliqué l'évaluation complète des risques de sécurité pour une organisation fictive, la conception des contrôles de sécurité appropriés, et la mise en place de mesures de conformité. Le laboratoire a couvert les frameworks de sécurité majeurs (ISO 27001, NIST), les meilleures pratiques en sécurité informatique, et la gestion de la sécurité informatique d'entreprise. Le lab a impliqué la création d'une politique de sécurité informatique complète, la mise en place d'un programme de sensibilisation à la sécurité, et la planification de la récupération après sinistre. Cette expérience a fourni une compréhension holistique de la sécurité informatique d'entreprise. Les compétences développées incluaient la capacité à effectuer une évaluation complète des risques, la compréhension des frameworks de sécurité, et la capacité à concevoir une stratégie de sécurité complète.
            </p>

            <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Examen Final - Évaluation Complète des Compétences</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              L'examen final a évalué la compréhension complète de tous les concepts de cybersécurité couverts dans le programme d'études. L'examen a inclus des questions théoriques couvrant les fondamentaux de la cybersécurité, la sécurité des réseaux, la sécurité des systèmes, la sécurité des applications, et la gestion des risques. L'examen a également inclus des scénarios pratiques qui ont demandé l'application des connaissances à des situations réelles. Les scénarios incluaient l'analyse de vulnérabilité, la réponse aux incidents, et la conception d'une architecture de sécurité. La réussite de l'examen a validé la préparation pour une carrière en cybersécurité. Les compétences validées incluaient la compréhension complète des concepts de cybersécurité, la capacité à appliquer les concepts à des situations réelles, et la maîtrise des compétences pratiques en cybersécurité.
            </p>

            <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Évaluation Final - Réflexion Critique et Synthèse</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              L'évaluation final a fourni l'opportunité de réfléchir profondément sur les apprentissages acquis et d'identifier les domaines de croissance future. L'évaluation a inclus une synthèse complète des compétences développées, une analyse des réalisations majeures, une identification des domaines de force et des domaines de croissance, et une planification stratégique des prochaines étapes de la carrière. L'évaluation a couvert la croissance personnelle et professionnelle, le développement de la pensée critique, les compétences en communication, et le développement du leadership. Cette réflexion a fourni une base pour la planification stratégique de la carrière et l'identification des domaines pour l'apprentissage continu. Les apprentissages incluaient une compréhension de la trajectoire de carrière, l'identification des opportunités de croissance, et la planification des certifications professionnelles futures.
            </p>

            <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Progression et Intégration des Labs</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Ces labs additionnels ont suivi une progression logique qui a construit les compétences de manière progressive. La progression a commencé par les fondamentaux d'Active Directory, puis a progressé vers les concepts avancés. Le Ethical Hacking Lab a fourni les compétences en sécurité offensive, tandis que le SECS1025 Lab a fourni une compréhension holistique de la sécurité informatique d'entreprise. L'examen final a validé la compréhension complète, et l'évaluation final a fourni l'opportunité de réfléchir et de planifier l'avenir. Cette progression logique a assuré que les compétences ont été construites sur des fondations solides et que chaque lab a contribué à une compréhension globale de la cybersécurité.
            </p>

            <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Apprentissages Clés et Compétences Développées</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              L'ensemble de ces labs et projets additionnels a fourni une formation complète et équilibrée en cybersécurité :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Maîtrise des concepts fondamentaux et avancés de cybersécurité</li>
              <li>Expertise en gestion des identités et des accès (Active Directory)</li>
              <li>Compétences avancées en sécurité offensive et tests de pénétration</li>
              <li>Compréhension complète de la gestion des risques et de la conformité</li>
              <li>Capacité à appliquer les concepts théoriques à des situations pratiques complexes</li>
              <li>Compétences en pensée critique et résolution de problèmes</li>
              <li>Compréhension holistique de la cybersécurité d'entreprise</li>
              <li>Préparation complète pour une carrière professionnelle en cybersécurité</li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Impact sur la Carrière</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              La réalisation de ces labs additionnels a eu un impact significatif sur la préparation pour une carrière en cybersécurité. Les compétences développées sont directement applicables aux rôles professionnels en cybersécurité. L'expérience pratique extensive a fourni une confiance dans l'application des compétences. La progression logique à travers les domaines clés de la cybersécurité a fourni une compréhension holistique qui est rare chez les candidats débutants. Les compétences développées et la compréhension holistique constituent des avantages compétitifs significants sur le marché du travail en cybersécurité.
            </p>

            <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Conclusion</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Les labs et projets additionnels ont complété la formation en cybersécurité et ont fourni une expérience pratique extensive couvrant tous les domaines majeurs de la cybersécurité. Ces expériences ont développé les compétences essentielles pour une carrière réussie en cybersécurité et ont préparé pour les défis du monde professionnel. La combinaison de la théorie, de la pratique, et de la réflexion critique a créé une base solide pour une carrière longue et réussie en cybersécurité. Les labs et projets représentent un investissement significatif dans le développement professionnel et constituent une démonstration claire de l'engagement envers l'excellence en cybersécurité.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
