import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function ProjectEvaluationFinal() {
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
          <h1 className="text-5xl font-bold text-primary mb-4">Évaluation Final - Synthèse des Apprentissages</h1>
          <p className="text-2xl text-accent mb-6">Réflexion Critique sur les Compétences Acquises</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-accent/20 text-accent border-accent/30">Évaluation</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Réflexion</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Apprentissages</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Synthèse</Badge>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-primary mb-6">Vue d'Ensemble de l'Évaluation</h2>
            
            <p className="text-foreground/80 leading-relaxed mb-6">
              L'évaluation final représente une réflexion critique sur les apprentissages acquis tout au long du programme d'études en cybersécurité. Cette évaluation a impliqué une synthèse de toutes les compétences, connaissances, et expériences acquises, ainsi qu'une réflexion sur la croissance personnelle et professionnelle. L'évaluation a fourni l'opportunité de documenter les réalisations, d'identifier les domaines de croissance, et de planifier les prochaines étapes de la carrière en cybersécurité.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Synthèse des Apprentissages</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              L'évaluation a impliqué une synthèse complète de tous les apprentissages acquis :
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Compétences Techniques Acquises :</strong> Le programme d'études a fourni une formation complète dans les compétences techniques essentielles en cybersécurité. Les compétences acquises incluent la configuration et l'administration des équipements réseau (Cisco), la gestion des systèmes d'exploitation (Windows Server, Linux), la virtualisation (Proxmox VE, VMware), la détection d'intrusion (Snort, Wazuh), et les tests de pénétration (Kali Linux, Metasploit). Ces compétences techniques constituent la base pour une carrière réussie en cybersécurité.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Compétences Conceptuelles Acquises :</strong> Le programme d'études a fourni une compréhension profonde des concepts fondamentaux de la cybersécurité. Les concepts acquis incluent les principes de sécurité (CIA), les types de menaces et d'attaques, les mesures de défense, la gestion des risques, la conformité, et les cadres de sécurité (ISO 27001, NIST). Cette compréhension conceptuelle est essentielle pour appliquer les compétences techniques de manière efficace et pour adapter les solutions de sécurité à différents contextes.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Expérience Pratique Acquise :</strong> Le programme d'études a fourni une expérience pratique extensive à travers les laboratoires et les projets. L'expérience pratique a inclus la configuration d'infrastructures complètes, la résolution de problèmes techniques complexes, la conception de solutions de sécurité, et la gestion de projets. Cette expérience pratique a transformé les connaissances théoriques en compétences pratiques applicables.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Croissance Personnelle et Professionnelle</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Au-delà des compétences techniques et conceptuelles, le programme d'études a contribué à une croissance personnelle et professionnelle significative :
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Développement de la Pensée Critique :</strong> Le programme d'études a développé la capacité à penser de manière critique et à résoudre des problèmes complexes. Les laboratoires et les projets ont présenté des problèmes sans solutions évidentes, nécessitant une analyse approfondie et une pensée créative. Cette capacité de pensée critique est essentielle pour identifier les vulnérabilités de sécurité et concevoir des solutions efficaces.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Développement de la Communication :</strong> Le programme d'études a développé les compétences en communication à travers la documentation technique, les présentations de projets, et la collaboration en équipe. La capacité à communiquer efficacement les concepts techniques complexes est essentielle pour travailler dans une équipe de sécurité et pour communiquer avec les parties prenantes non techniques.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Développement du Leadership :</strong> Le programme d'études a développé les compétences en leadership à travers les projets de groupe et la gestion de projets. La capacité à diriger une équipe et à coordonner les efforts collectifs est essentielle pour les rôles de leadership en cybersécurité.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Développement de l'Éthique Professionnelle :</strong> Le programme d'études a développé une compréhension de l'éthique professionnelle en cybersécurité. Les concepts éthiques incluent le respect de la vie privée, la responsabilité, la transparence, et l'intégrité. Cette éthique professionnelle est fondamentale pour exercer la cybersécurité de manière responsable.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Réalisations Majeures</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le programme d'études a inclus plusieurs réalisations majeures qui démontrent la croissance et la maîtrise :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Conception et déploiement d'une infrastructure de cybersécurité complète (VortexCore)</li>
              <li>Développement d'un système de détection d'intrusion avancé (CyberSentinel v2)</li>
              <li>Conception d'une campagne de sensibilisation à la sécurité à grande échelle</li>
              <li>Configuration complète d'Active Directory et gestion des identités</li>
              <li>Réussite de l'examen final en cybersécurité</li>
              <li>2e place à CYBER-CCNB 2026 pour le projet d'intégration</li>
              <li>Création d'une documentation technique complète pour les projets</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Domaines de Force</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              L'évaluation a identifié plusieurs domaines de force qui constituent des avantages compétitifs :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li><strong>Infrastructure et Virtualisation :</strong> Maîtrise complète de la conception et du déploiement d'infrastructures virtualisées hautement disponibles</li>
              <li><strong>Détection d'Intrusion :</strong> Compréhension approfondie des systèmes de détection d'intrusion et des techniques de détection comportementale</li>
              <li><strong>Gestion des Identités :</strong> Compétences complètes en configuration et administration d'Active Directory</li>
              <li><strong>Sécurité des Réseaux :</strong> Maîtrise de la configuration sécurisée des équipements réseau et des principes de sécurité réseau</li>
              <li><strong>Gestion de Projets :</strong> Capacité à gérer des projets complexes de cybersécurité de manière efficace</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Domaines de Croissance</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              L'évaluation a également identifié plusieurs domaines où une croissance continue est souhaitable :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li><strong>Sécurité des Applications :</strong> Approfondissement des connaissances en sécurité des applications et en techniques de test de sécurité des applications</li>
              <li><strong>Forensique Numérique :</strong> Développement des compétences en forensique numérique et en analyse des incidents</li>
              <li><strong>Conformité et Audit :</strong> Approfondissement des connaissances en conformité réglementaire et en audit de sécurité</li>
              <li><strong>Gestion des Risques Avancée :</strong> Développement d'une expertise en gestion des risques à l'échelle de l'entreprise</li>
              <li><strong>Certifications Professionnelles :</strong> Obtention de certifications reconnues dans l'industrie (CEH, CISSP, OSCP)</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Prochaines Étapes et Objectifs Futurs</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              L'évaluation finale a fourni une base pour planifier les prochaines étapes de la carrière en cybersécurité :
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Court Terme (0-6 mois) :</strong> Obtenir des certifications professionnelles reconnues (CEH, CompTIA Security+) pour valider les compétences et améliorer la crédibilité professionnelle. Chercher un rôle d'entrée en cybersécurité (analyste de sécurité, administrateur de sécurité) pour appliquer les compétences acquises dans un environnement professionnel.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Moyen Terme (6-18 mois) :</strong> Accumuler une expérience professionnelle en cybersécurité et développer une expertise dans un domaine spécifique (détection d'intrusion, gestion des identités, sécurité des applications). Contribuer à des projets de sécurité majeurs et démontrer la capacité à gérer des projets complexes.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Long Terme (18+ mois) :</strong> Progresser vers des rôles de leadership en cybersécurité (architecte de sécurité, responsable de la sécurité informatique). Obtenir des certifications avancées (CISSP, OSCP) pour valider l'expertise avancée. Contribuer à la communauté de la cybersécurité à travers la publication, l'enseignement, ou la participation à des conférences.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Conclusion</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              L'évaluation final en cybersécurité a fourni une synthèse complète des apprentissages acquis et une validation de la préparation pour une carrière en cybersécurité. Le programme d'études a fourni une base solide en compétences techniques, en concepts théoriques, et en expérience pratique. La croissance personnelle et professionnelle a préparé à relever les défis d'une carrière en cybersécurité. Les réalisations majeures et les domaines de force constituent des avantages compétitifs significants. Avec une planification stratégique et un engagement envers l'apprentissage continu, une carrière réussie et gratifiante en cybersécurité est bien à portée de main.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
