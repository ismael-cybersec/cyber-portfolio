import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function ProjectExamenFinal() {
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
          <h1 className="text-5xl font-bold text-primary mb-4">Examen Final - Cybersécurité</h1>
          <p className="text-2xl text-accent mb-6">Évaluation Complète des Compétences en Cybersécurité</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-accent/20 text-accent border-accent/30">Examen</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Cybersécurité</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Évaluation</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Compétences</Badge>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-primary mb-6">Vue d'Ensemble de l'Examen</h2>
            
            <p className="text-foreground/80 leading-relaxed mb-6">
              L'examen final en cybersécurité représente une évaluation complète des compétences acquises tout au long du programme d'études. Cet examen a couvert tous les aspects essentiels de la cybersécurité, y compris les concepts théoriques, les compétences pratiques, et la capacité à appliquer les connaissances à des situations réelles. L'examen a été conçu pour évaluer non seulement la compréhension des concepts, mais aussi la capacité à résoudre des problèmes complexes de cybersécurité. Cette évaluation a validé la préparation pour une carrière en cybersécurité.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Structure de l'Examen</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              L'examen final était composé de plusieurs sections couvrant différents domaines de la cybersécurité :
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Section 1 - Fondamentaux de la Cybersécurité :</strong> Cette section a évalué la compréhension des concepts fondamentaux de la cybersécurité, y compris les types de menaces, les principes de sécurité, et les cadres de sécurité. Les questions ont couvert les concepts de confidentialité, d'intégrité, et de disponibilité (CIA), les types d'attaques, et les mesures de défense. Cette section a validé la compréhension théorique des principes de base.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Section 2 - Sécurité des Réseaux :</strong> Cette section a évalué la compréhension de la sécurité des réseaux, y compris les protocoles réseau, les pare-feu, les VPN, et les systèmes de détection d'intrusion. Les questions ont couvert la configuration des équipements réseau, l'identification des vulnérabilités réseau, et la mise en place de mesures de sécurité réseau. Cette section a validé la compréhension de la sécurité au niveau réseau.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Section 3 - Sécurité des Systèmes :</strong> Cette section a évalué la compréhension de la sécurité des systèmes d'exploitation, y compris la gestion des utilisateurs, les permissions, les politiques de sécurité, et le durcissement des systèmes. Les questions ont couvert la configuration sécurisée des systèmes, l'identification des vulnérabilités système, et la mise en place de mesures de sécurité système. Cette section a validé la compréhension de la sécurité au niveau système.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Section 4 - Sécurité des Applications :</strong> Cette section a évalué la compréhension de la sécurité des applications, y compris les vulnérabilités courantes (OWASP Top 10), les techniques de test de sécurité des applications, et les meilleures pratiques en développement sécurisé. Les questions ont couvert l'identification des vulnérabilités d'application, les techniques d'exploitation, et la mise en place de mesures de sécurité d'application. Cette section a validé la compréhension de la sécurité au niveau application.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Section 5 - Gestion des Risques et Conformité :</strong> Cette section a évalué la compréhension de la gestion des risques, de la conformité, et des cadres de sécurité. Les questions ont couvert l'évaluation des risques, la sélection des contrôles, la conformité aux standards (ISO 27001, NIST), et les implications légales. Cette section a validé la compréhension holistique de la sécurité informatique d'entreprise.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Composantes Pratiques</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              L'examen incluait également des composantes pratiques qui évaluaient la capacité à appliquer les connaissances à des situations réelles :
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Scénario 1 - Analyse de Vulnérabilité :</strong> Un scénario a présenté une infrastructure informatique avec plusieurs vulnérabilités. Les candidats devaient identifier les vulnérabilités, évaluer le risque, et recommander des mesures de mitigation. Ce scénario a évalué la capacité à effectuer une analyse de vulnérabilité complète.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Scénario 2 - Réponse aux Incidents :</strong> Un scénario a présenté un incident de sécurité en cours. Les candidats devaient identifier l'incident, contenir la menace, éradiquer la menace, et récupérer les systèmes. Ce scénario a évalué la capacité à répondre efficacement aux incidents de sécurité.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Scénario 3 - Conception d'une Architecture de Sécurité :</strong> Un scénario a demandé aux candidats de concevoir une architecture de sécurité pour une organisation. Les candidats devaient identifier les besoins de sécurité, sélectionner les contrôles appropriés, et documenter l'architecture. Ce scénario a évalué la capacité à concevoir une architecture de sécurité complète.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Domaines Couverts par l'Examen</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              L'examen a couvert les domaines suivants de la cybersécurité :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Concepts fondamentaux de la cybersécurité et principes de sécurité</li>
              <li>Types de menaces et techniques d'attaque</li>
              <li>Mesures de défense et contrôles de sécurité</li>
              <li>Sécurité des réseaux et protocoles réseau</li>
              <li>Sécurité des systèmes d'exploitation</li>
              <li>Sécurité des applications et développement sécurisé</li>
              <li>Cryptographie et gestion des clés</li>
              <li>Authentification et gestion des accès</li>
              <li>Gestion des risques et évaluation des risques</li>
              <li>Conformité et cadres de sécurité</li>
              <li>Réponse aux incidents et récupération après sinistre</li>
              <li>Sensibilisation à la sécurité et formation</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Préparation et Étude</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              La préparation à l'examen final a impliqué une révision complète de tous les matériels couverts tout au long du programme d'études. La préparation a inclus :
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Révision des Concepts Théoriques :</strong> Une révision complète de tous les concepts théoriques couverts dans les cours et les laboratoires. Cela a inclus la révision des notes de cours, des manuels, et des ressources en ligne. Une attention particulière a été accordée aux concepts qui sont apparus dans plusieurs cours et qui sont donc probablement importants pour l'examen.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Pratique des Compétences Pratiques :</strong> Une pratique régulière des compétences pratiques acquises dans les laboratoires. Cela a inclus la configuration des équipements réseau, l'installation et la configuration des systèmes d'exploitation, et la réalisation de tests de pénétration. La pratique a assuré que les compétences pratiques étaient bien maîtrisées.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Examens Pratiques :</strong> La réalisation d'examens pratiques pour évaluer la préparation. Les examens pratiques ont aidé à identifier les domaines faibles et à concentrer l'étude sur ces domaines. Les examens pratiques ont également aidé à se familiariser avec le format de l'examen et à gérer le temps efficacement.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Résultats et Réalisations</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              L'examen final a validé la compréhension complète des concepts de cybersécurité et la capacité à appliquer ces concepts à des situations réelles. Les résultats ont démontré une maîtrise des domaines clés de la cybersécurité et une préparation solide pour une carrière en cybersécurité. La réussite de l'examen a validé que les objectifs d'apprentissage du programme d'études avaient été atteints.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Apprentissages et Compétences Développées</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              L'examen final a permis de consolider et de valider toutes les compétences acquises tout au long du programme d'études :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Compréhension complète des concepts de cybersécurité</li>
              <li>Capacité à appliquer les concepts à des situations réelles</li>
              <li>Maîtrise des compétences pratiques en cybersécurité</li>
              <li>Capacité à résoudre des problèmes complexes de sécurité</li>
              <li>Compréhension holistique de la cybersécurité d'entreprise</li>
              <li>Préparation pour une carrière en cybersécurité</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Conclusion</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              L'examen final en cybersécurité a représenté un point culminant du programme d'études et a validé la préparation pour une carrière en cybersécurité. La réussite de l'examen a démontré une compréhension complète des concepts de cybersécurité et une capacité à appliquer ces concepts à des situations réelles. Cette expérience constitue une validation importante des compétences acquises et une confirmation de la préparation pour les rôles en cybersécurité.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
