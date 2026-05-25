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
          <p className="text-2xl text-accent mb-6">Sécurité des Systèmes et Gestion des Risques - Analyse Approfondie</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-accent/20 text-accent border-accent/30">Sécurité Système</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Gestion des Risques</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Conformité</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">ISO 27001</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">NIST</Badge>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-primary mb-6">Vue d'Ensemble du Laboratoire</h2>
            
            <p className="text-foreground/80 leading-relaxed mb-6">
              Le laboratoire SECS1025 - Laboratoire 2 constitue une étude approfondie et pratique de la sécurité des systèmes informatiques et de la gestion des risques de sécurité. Ce laboratoire représente une progression significative par rapport au Laboratoire 1, en se concentrant sur l'analyse détaillée des risques, la conception de contrôles de sécurité, et la mise en conformité avec les frameworks de sécurité internationaux. Le laboratoire a fourni une expérience pratique complète dans l'évaluation des risques de sécurité, la conception d'architectures de sécurité robustes, et la mise en place de mesures de conformité réglementaire. À travers des projets pratiques et des études de cas réalistes, les étudiants ont acquis une compréhension holistique de la gestion de la sécurité informatique d'entreprise, essentielle pour les rôles de direction en sécurité.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Objectifs Pédagogiques du Laboratoire</h3>
            
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le laboratoire SECS1025 - Laboratoire 2 visait à atteindre plusieurs objectifs pédagogiques majeurs, construisant sur les fondamentaux du Laboratoire 1 :
            </p>

            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Maîtriser les méthodologies complètes d'évaluation des risques de sécurité (quantitative et qualitative)</li>
              <li>Développer la capacité à identifier et classifier les actifs informatiques critiques</li>
              <li>Apprendre à identifier, analyser et évaluer les menaces et vulnérabilités</li>
              <li>Concevoir des contrôles de sécurité appropriés et efficaces pour atténuer les risques</li>
              <li>Comprendre et appliquer les frameworks de sécurité majeurs (ISO 27001, NIST, CIS)</li>
              <li>Développer une politique de sécurité informatique complète et cohérente</li>
              <li>Mettre en place un programme de sensibilisation à la sécurité efficace</li>
              <li>Comprendre les implications légales, réglementaires et contractuelles de la sécurité</li>
              <li>Développer les compétences en gestion de la continuité d'activité et reprise après sinistre</li>
              <li>Acquérir une expérience en audit et conformité de sécurité</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Modules Détaillés du Cours</h3>

            <h4 className="text-xl font-bold text-accent mb-3 mt-6">Module 1 : Fondamentaux Avancés de la Gestion des Risques</h4>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Ce module a approfondi les concepts de gestion des risques au-delà des fondamentaux. Il a couvert les méthodologies avancées d'évaluation des risques, y compris les approches quantitatives et qualitatives. Les étudiants ont appris à utiliser les matrices de risque, les graphiques de probabilité-impact, et les modèles de calcul du risque. Le module a également expliqué comment les organisations peuvent maintenir un registre des risques, suivre l'évolution des risques, et adapter les stratégies d'atténuation. Les concepts clés incluaient la tolérance au risque, l'appétit pour le risque, et la prise de décision basée sur les risques.
            </p>

            <h4 className="text-xl font-bold text-accent mb-3 mt-6">Module 2 : Identification et Classification des Actifs</h4>
            <p className="text-foreground/80 leading-relaxed mb-4">
              L'identification correcte des actifs informatiques est fondamentale pour une gestion efficace de la sécurité. Ce module a couvert les méthodologies pour identifier tous les actifs informatiques critiques, y compris les serveurs, les données, les applications, les réseaux, et les personnes. Les étudiants ont appris à classifier les actifs en fonction de leur importance pour l'organisation, de leur sensibilité, et de leur criticité pour les opérations. Le module a également expliqué comment maintenir un inventaire des actifs à jour et comment utiliser cet inventaire pour la gestion de la sécurité. Les concepts clés incluaient la classification des données, la criticité des systèmes, et la valeur des actifs.
            </p>

            <h4 className="text-xl font-bold text-accent mb-3 mt-6">Module 3 : Analyse des Menaces et Vulnérabilités</h4>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Ce module a fourni une compréhension approfondie de l'identification et de l'analyse des menaces et vulnérabilités. Les étudiants ont appris à identifier les menaces potentielles (internes et externes), à analyser les motivations des attaquants, et à comprendre les vecteurs d'attaque. Le module a également couvert l'identification des vulnérabilités, y compris les vulnérabilités techniques, organisationnelles, et humaines. Les étudiants ont appris à utiliser les bases de données de vulnérabilités (CVE, NVD), les outils de scanning de vulnérabilités, et les tests de pénétration pour identifier les faiblesses. Le module a expliqué comment évaluer la probabilité qu'une menace exploite une vulnérabilité et comment calculer le risque résultant.
            </p>

            <h4 className="text-xl font-bold text-accent mb-3 mt-6">Module 4 : Conception et Sélection des Contrôles de Sécurité</h4>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Ce module a couvert la conception et la sélection des contrôles de sécurité pour atténuer les risques identifiés. Les étudiants ont appris les différents types de contrôles : préventifs (empêchent les incidents), détectifs (détectent les incidents), correctifs (corrigent les dommages), et dissuasifs (découragent les attaques). Le module a expliqué comment évaluer l'efficacité des contrôles, comment sélectionner les contrôles appropriés pour chaque risque, et comment optimiser le rapport coût-bénéfice. Les étudiants ont appris à concevoir des architectures de sécurité multicouches, à implémenter la défense en profondeur, et à assurer la redondance des contrôles critiques. Le module a également couvert l'évaluation continue de l'efficacité des contrôles et l'amélioration continue.
            </p>

            <h4 className="text-xl font-bold text-accent mb-3 mt-6">Module 5 : Frameworks de Sécurité Internationaux</h4>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Ce module a couvert les frameworks de sécurité majeurs utilisés mondialement pour structurer les programmes de sécurité. ISO 27001 a été étudié en détail, couvrant les 14 domaines de contrôle et les 114 contrôles spécifiques. Le NIST Cybersecurity Framework a été analysé, couvrant les cinq fonctions (Identifier, Protéger, Détecter, Répondre, Récupérer) et les catégories de contrôle. Les CIS Controls ont été examinés, couvrant les 20 contrôles critiques pour la sécurité. Le module a expliqué comment ces frameworks peuvent être utilisés pour développer une stratégie de sécurité cohérente, comment évaluer la conformité, et comment les organisations peuvent se conformer à plusieurs frameworks simultanément. Le module a également couvert les frameworks spécifiques à l'industrie (HIPAA, PCI-DSS, GDPR).
            </p>

            <h4 className="text-xl font-bold text-accent mb-3 mt-6">Module 6 : Développement de Politiques de Sécurité Informatique</h4>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Ce module a couvert le développement complet d'une politique de sécurité informatique d'entreprise. Les étudiants ont appris à développer une politique de sécurité générale qui définit la vision et les objectifs de sécurité de l'organisation. Le module a également couvert le développement de politiques spécifiques couvrant tous les aspects de la sécurité informatique : classification des données, gestion des accès, gestion des mots de passe, utilisation acceptable, gestion des incidents, continuité d'activité, et conformité. Les étudiants ont appris à écrire des politiques claires, compréhensibles, et applicables. Le module a expliqué comment communiquer les politiques aux utilisateurs, comment assurer la conformité, et comment mettre à jour les politiques au fur et à mesure que les menaces évoluent.
            </p>

            <h4 className="text-xl font-bold text-accent mb-3 mt-6">Module 7 : Programme de Sensibilisation à la Sécurité</h4>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Ce module a couvert la mise en place d'un programme de sensibilisation à la sécurité efficace. Les étudiants ont appris que les utilisateurs constituent souvent le maillon faible de la chaîne de sécurité, et que la sensibilisation est essentielle pour réduire les risques. Le module a expliqué comment développer un programme de formation efficace, comment communiquer les messages de sécurité de manière engageante, et comment mesurer l'efficacité du programme. Les étudiants ont appris à créer du contenu de formation adapté à différents rôles (administrateurs, utilisateurs, direction), à utiliser des simulations de phishing pour évaluer la conscience des utilisateurs, et à créer une culture de sécurité positive. Le module a également couvert les techniques de communication, la gestion du changement, et la motivation des utilisateurs à adopter des comportements sécuritaires.
            </p>

            <h4 className="text-xl font-bold text-accent mb-3 mt-6">Module 8 : Continuité d'Activité et Reprise après Sinistre</h4>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Ce module a couvert la planification de la continuité d'activité et de la reprise après sinistre. Les étudiants ont appris à identifier les processus critiques, à évaluer l'impact potentiel des interruptions, et à développer des plans de continuité. Le module a expliqué les concepts clés : RTO (Recovery Time Objective), RPO (Recovery Point Objective), et les stratégies de récupération. Les étudiants ont appris à concevoir des architectures résilientes, à mettre en place la redondance, et à tester régulièrement les plans de continuité. Le module a également couvert la gestion des crises, la communication en cas d'incident, et la récupération après un sinistre.
            </p>

            <h4 className="text-xl font-bold text-accent mb-3 mt-6">Module 9 : Audit et Conformité de Sécurité</h4>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Ce module a couvert les processus d'audit et de conformité de sécurité. Les étudiants ont appris à planifier et exécuter des audits de sécurité, à évaluer la conformité avec les politiques et les frameworks, et à identifier les écarts. Le module a expliqué comment utiliser les résultats des audits pour améliorer la posture de sécurité, comment documenter les résultats, et comment communiquer les résultats à la direction. Les étudiants ont appris les différents types d'audits (internes, externes, tiers), les méthodologies d'audit, et les outils d'audit. Le module a également couvert la gestion des non-conformités et les plans d'action corrective.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Projets Pratiques Détaillés</h3>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Projet 1 - Évaluation Complète des Risques de Sécurité :</strong> Les étudiants ont effectué une évaluation complète des risques de sécurité pour une organisation fictive réaliste. L'évaluation a impliqué l'identification de tous les actifs informatiques critiques, l'identification des menaces potentielles (internes et externes), l'identification des vulnérabilités existantes, et le calcul du risque pour chaque combinaison menace-vulnérabilité. Les étudiants ont utilisé à la fois des méthodologies quantitatives (calcul numérique du risque) et qualitatives (matrices de risque). Les résultats ont été documentés dans un rapport d'évaluation des risques complet incluant un registre des risques, des recommandations de mitigation, et un plan de traitement des risques.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Projet 2 - Conception d'une Architecture de Sécurité Complète :</strong> Les étudiants ont conçu une architecture de sécurité complète pour une entreprise basée sur les risques identifiés dans le Projet 1. L'architecture a inclus la sélection des contrôles de sécurité appropriés pour chaque risque, la conception de la mise en œuvre technique, la planification de la maintenance, et l'estimation des coûts. L'architecture a été documentée avec des diagrammes détaillés, des descriptions techniques, et des justifications pour chaque décision. Les étudiants ont également développé un plan de mise en œuvre incluant les étapes, les délais, et les ressources nécessaires.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Projet 3 - Développement d'une Politique de Sécurité Informatique Complète :</strong> Les étudiants ont développé une politique de sécurité informatique complète pour une organisation. La politique a couvert tous les aspects de la sécurité informatique, y compris la politique générale de sécurité, la classification des données, la gestion des accès, la gestion des mots de passe, l'utilisation acceptable, la gestion des incidents, la continuité d'activité, et la conformité. La politique a été écrite de manière claire et compréhensible pour tous les utilisateurs, avec des exemples concrets et des procédures détaillées. Les étudiants ont également développé un plan de communication pour assurer que les utilisateurs comprennent et respectent les politiques.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Projet 4 - Audit de Conformité et Rapport de Conformité :</strong> Les étudiants ont effectué un audit de conformité pour une organisation fictive, évaluant la conformité avec ISO 27001 et le NIST Cybersecurity Framework. L'audit a impliqué l'évaluation de chaque contrôle, l'identification des écarts, et l'évaluation du niveau de maturité. Les résultats ont été documentés dans un rapport de conformité détaillé incluant un résumé exécutif, une évaluation détaillée de chaque domaine de contrôle, des recommandations d'amélioration, et un plan d'action corrective.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Outils et Technologies Utilisés</h3>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Outils d'Évaluation des Risques :</strong> Les étudiants ont utilisé des outils d'évaluation des risques pour faciliter le calcul et la documentation des risques. Ces outils ont permis de créer des matrices de risque, de calculer les scores de risque, et de générer des rapports d'évaluation des risques.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Outils de Gestion de la Conformité :</strong> Les étudiants ont utilisé des outils de gestion de la conformité pour suivre la conformité avec les frameworks de sécurité, documenter les contrôles, et générer des rapports de conformité.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Outils de Documentation :</strong> Les étudiants ont utilisé des outils de documentation pour créer des politiques, des procédures, et des rapports professionnels.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Compétences Développées</h3>

            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Maîtrise des méthodologies d'évaluation des risques quantitatives et qualitatives</li>
              <li>Capacité à identifier et classifier les actifs informatiques critiques</li>
              <li>Compétences en identification et analyse des menaces et vulnérabilités</li>
              <li>Capacité à concevoir des contrôles de sécurité appropriés et efficaces</li>
              <li>Compréhension approfondie des frameworks de sécurité majeurs (ISO 27001, NIST, CIS)</li>
              <li>Capacité à développer une politique de sécurité informatique complète</li>
              <li>Compétences en mise en place d'un programme de sensibilisation à la sécurité</li>
              <li>Compréhension des implications légales et réglementaires de la sécurité</li>
              <li>Capacité à planifier la continuité d'activité et la reprise après sinistre</li>
              <li>Compétences en audit et conformité de sécurité</li>
              <li>Capacité à communiquer les concepts de sécurité complexes à différents publics</li>
              <li>Compétences en gestion de projet et en gestion du changement</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Résultats et Impact</h3>

            <p className="text-foreground/80 leading-relaxed mb-4">
              Le laboratoire SECS1025 - Laboratoire 2 a fourni une formation complète et pratique dans la gestion des risques de sécurité et la conception de contrôles de sécurité. Les projets pratiques ont permis aux étudiants d'appliquer les concepts théoriques à des situations réalistes, développant une expérience concrète en gestion de la sécurité informatique d'entreprise. Les compétences développées constituent une base solide pour les rôles de direction en sécurité informatique, tels que CISO (Chief Information Security Officer), responsable de la sécurité informatique, ou auditeur de sécurité.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              Le laboratoire a également développé la capacité à penser stratégiquement en matière de sécurité, à comprendre les implications commerciales des décisions de sécurité, et à communiquer efficacement avec la direction sur les questions de sécurité. Ces compétences en leadership et en communication sont essentielles pour les rôles de direction en sécurité informatique.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Conclusion</h3>

            <p className="text-foreground/80 leading-relaxed mb-4">
              Le laboratoire SECS1025 - Laboratoire 2 représente une étape importante dans le développement professionnel en sécurité informatique. En fournissant une compréhension approfondie de la gestion des risques, de la conception de contrôles de sécurité, et de la conformité réglementaire, ce laboratoire prépare les étudiants à des rôles de direction en sécurité informatique. Les compétences et connaissances acquises lors de ce laboratoire sont directement applicables aux défis de sécurité réels auxquels les organisations font face, et constituent une base solide pour une carrière réussie en cybersécurité et gestion de la sécurité informatique.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Emplacements pour Captures d'Écran</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              [Insérez ici les captures d'écran des matrices de risque et évaluations]
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              [Insérez ici les diagrammes d'architecture de sécurité]
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              [Insérez ici les documents de politique de sécurité]
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              [Insérez ici les rapports d'audit et de conformité]
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
