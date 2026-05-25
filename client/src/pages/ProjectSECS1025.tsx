import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function ProjectSECS1025() {
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
          <h1 className="text-5xl font-bold text-primary mb-4">SECS1025 - Laboratoire 2</h1>
          <p className="text-2xl text-accent mb-6">Sécurité des Systèmes et Gestion des Risques</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-accent/20 text-accent border-accent/30">Sécurité Système</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Gestion des Risques</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Conformité</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Audit</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Laboratoire</Badge>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-primary mb-6">Vue d'Ensemble du Laboratoire</h2>
            
            <p className="text-foreground/80 leading-relaxed mb-6">
              Le laboratoire SECS1025 - Laboratoire 2 représente une étude approfondie de la sécurité des systèmes informatiques et de la gestion des risques de sécurité. Ce laboratoire a fourni une expérience pratique dans l'évaluation des risques de sécurité, la conception de contrôles de sécurité, et la mise en place de mesures de conformité. Le laboratoire a couvert les principes fondamentaux de la gestion des risques, les frameworks de sécurité (ISO 27001, NIST), et les meilleures pratiques en sécurité informatique. Cette expérience a été fondamentale pour développer une compréhension holistique de la sécurité informatique d'entreprise.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Objectifs du Laboratoire</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Les objectifs principaux du laboratoire SECS1025 incluaient :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Comprendre les principes fondamentaux de la gestion des risques</li>
              <li>Apprendre à effectuer une évaluation des risques de sécurité</li>
              <li>Concevoir des contrôles de sécurité appropriés</li>
              <li>Mettre en place des mesures de conformité</li>
              <li>Comprendre les frameworks de sécurité (ISO 27001, NIST)</li>
              <li>Développer une politique de sécurité informatique</li>
              <li>Mettre en place un programme de sensibilisation à la sécurité</li>
              <li>Comprendre les implications légales et réglementaires</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Contenu du Laboratoire</h3>
            
            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Module 1 - Principes de Gestion des Risques :</strong> Ce module a couvert les principes fondamentaux de la gestion des risques, y compris l'identification des risques, l'évaluation des risques, la mitigation des risques, et le suivi des risques. Le module a expliqué comment les organisations peuvent identifier les menaces potentielles, évaluer la probabilité et l'impact de ces menaces, et mettre en place des contrôles pour réduire les risques. Le module a également expliqué comment les organisations peuvent maintenir une posture de risque acceptable.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Module 2 - Évaluation des Risques de Sécurité :</strong> Ce module a fourni une formation pratique dans l'évaluation des risques de sécurité. Les participants ont appris à effectuer une évaluation des risques complète, y compris l'identification des actifs, l'identification des menaces, l'identification des vulnérabilités, l'évaluation de la probabilité et de l'impact, et le calcul du risque. Le module a également expliqué comment utiliser les résultats de l'évaluation des risques pour prioriser les efforts de sécurité.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Module 3 - Conception des Contrôles de Sécurité :</strong> Ce module a couvert la conception des contrôles de sécurité pour atténuer les risques identifiés. Le module a expliqué les différents types de contrôles (préventifs, détectifs, correctifs), et comment sélectionner les contrôles appropriés pour chaque risque. Le module a également expliqué comment évaluer l'efficacité des contrôles et comment les améliorer.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Module 4 - Frameworks de Sécurité :</strong> Ce module a couvert les frameworks de sécurité majeurs, y compris ISO 27001, NIST Cybersecurity Framework, et CIS Controls. Le module a expliqué comment ces frameworks peuvent être utilisés pour développer une stratégie de sécurité cohérente et pour évaluer la maturité de la sécurité. Le module a également expliqué comment les organisations peuvent se conformer à ces frameworks.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Module 5 - Politique de Sécurité Informatique :</strong> Ce module a couvert le développement d'une politique de sécurité informatique complète. Le module a expliqué comment développer des politiques qui reflètent les objectifs de sécurité de l'organisation, comment communiquer les politiques aux utilisateurs, et comment appliquer les politiques. Le module a également expliqué comment mettre à jour les politiques au fur et à mesure que les menaces évoluent.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Module 6 - Sensibilisation à la Sécurité :</strong> Ce module a couvert la mise en place d'un programme de sensibilisation à la sécurité. Le module a expliqué comment développer un programme de formation efficace, comment communiquer les messages de sécurité, et comment mesurer l'efficacité du programme. Le module a également expliqué comment créer une culture de sécurité positive dans l'organisation.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Projets Pratiques</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le laboratoire a impliqué plusieurs projets pratiques pour appliquer les concepts théoriques :
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Projet 1 - Évaluation des Risques d'Entreprise :</strong> Les participants ont effectué une évaluation complète des risques de sécurité pour une entreprise fictive. L'évaluation a impliqué l'identification des actifs critiques, l'identification des menaces potentielles, l'identification des vulnérabilités, et le calcul du risque pour chaque combinaison menace-vulnérabilité. Les résultats ont été documentés dans un rapport d'évaluation des risques complet.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Projet 2 - Conception d'une Architecture de Sécurité :</strong> Les participants ont conçu une architecture de sécurité complète pour une entreprise basée sur les risques identifiés. L'architecture a inclus la sélection des contrôles de sécurité appropriés, la conception de la mise en œuvre, et la planification de la maintenance. L'architecture a été documentée avec des diagrammes et des descriptions détaillées.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Projet 3 - Développement d'une Politique de Sécurité :</strong> Les participants ont développé une politique de sécurité informatique complète pour une organisation. La politique a couvert tous les aspects de la sécurité informatique, y compris la classification des données, la gestion des accès, la gestion des incidents, et la conformité. La politique a été écrite de manière claire et compréhensible pour tous les utilisateurs.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Apprentissages et Compétences Développées</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le laboratoire a permis de développer une compréhension holistique de la sécurité informatique d'entreprise :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Compréhension approfondie des principes de gestion des risques</li>
              <li>Capacité à effectuer une évaluation complète des risques de sécurité</li>
              <li>Compétences en conception de contrôles de sécurité</li>
              <li>Compréhension des frameworks de sécurité majeurs</li>
              <li>Capacité à développer une politique de sécurité efficace</li>
              <li>Compréhension des implications légales et réglementaires</li>
              <li>Capacité à communiquer les concepts de sécurité complexes</li>
              <li>Compréhension de la gestion de la sécurité informatique d'entreprise</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Conclusion</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le laboratoire SECS1025 - Laboratoire 2 a fourni une formation complète dans la gestion des risques de sécurité et la conception de contrôles de sécurité. Cette expérience constitue une base solide pour une carrière en gestion de la sécurité informatique, en audit de sécurité, ou en conformité. Les compétences développées lors de ce laboratoire sont essentielles pour les rôles de direction en sécurité informatique et sont hautement demandées dans l'industrie.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
