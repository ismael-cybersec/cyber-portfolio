import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function ProjectOSSE() {
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
          <h1 className="text-5xl font-bold text-primary mb-4">Projet OSSE - Offensive Security Specialist</h1>
          <p className="text-2xl text-accent mb-6">Spécialisation en Sécurité Offensive et Tests de Pénétration</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-accent/20 text-accent border-accent/30">Offensive Security</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Tests de Pénétration</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Exploitation</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Projet Spécialisé</Badge>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-primary mb-6">Vue d'Ensemble du Projet</h2>
            
            <p className="text-foreground/80 leading-relaxed mb-6">
              Le projet OSSE (Offensive Security Specialist) représente une spécialisation avancée en sécurité offensive et tests de pénétration. Ce projet a fourni une formation complète dans les techniques de sécurité offensive, y compris la reconnaissance, l'énumération, l'exploitation, et la post-exploitation. Le projet a impliqué la participation à des exercices de tests de pénétration réalistes et la démonstration de la capacité à identifier et à exploiter les vulnérabilités de sécurité. Cette expérience a validé la compréhension avancée de la sécurité offensive et la préparation pour des rôles en tests de pénétration professionnels.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Objectifs du Projet</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Les objectifs principaux du projet OSSE incluaient :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Maîtriser les techniques avancées de sécurité offensive</li>
              <li>Développer une expertise en tests de pénétration</li>
              <li>Apprendre à utiliser les outils professionnels de sécurité offensive</li>
              <li>Développer la capacité à effectuer des tests de pénétration complets</li>
              <li>Apprendre à documenter les résultats des tests de pénétration</li>
              <li>Comprendre les implications légales et éthiques de la sécurité offensive</li>
              <li>Développer une expertise en exploitation de vulnérabilités</li>
              <li>Préparer pour les certifications de sécurité offensive (CEH, OSCP)</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Phases du Projet</h3>
            
            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Phase 1 - Reconnaissance Avancée :</strong> Cette phase a impliqué des techniques avancées de reconnaissance pour collecter des informations sur les cibles. Les techniques incluaient la reconnaissance passive (recherche d'informations publiques), la reconnaissance active (scans de ports, énumération de services), et l'utilisation d'outils avancés de reconnaissance. La reconnaissance a fourni les informations nécessaires pour identifier les vecteurs d'attaque potentiels.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Phase 2 - Énumération Détaillée :</strong> Cette phase a impliqué une énumération détaillée des services et des systèmes pour identifier les vulnérabilités potentielles. L'énumération a inclus l'identification des versions de logiciels, des configurations, et des services actifs. Les outils utilisés incluaient Nmap, Nessus, OpenVAS, et d'autres outils d'énumération spécialisés.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Phase 3 - Analyse des Vulnérabilités :</strong> Cette phase a impliqué l'analyse des informations collectées pour identifier les vulnérabilités de sécurité. L'analyse a inclus la recherche de vulnérabilités connues, l'identification des configurations faibles, et l'analyse des failles de sécurité applicatives. Les vulnérabilités ont été classées par sévérité et impact potentiel.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Phase 4 - Exploitation :</strong> Cette phase a impliqué l'exploitation des vulnérabilités identifiées pour démontrer leur impact réel. L'exploitation a inclus l'utilisation d'exploits publics, le développement d'exploits personnalisés, et l'utilisation de techniques d'exploitation avancées. Chaque exploitation a été documentée pour démontrer le vecteur d'attaque et l'impact.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Phase 5 - Post-Exploitation :</strong> Cette phase a impliqué les activités de post-exploitation pour démontrer l'impact complet d'une compromission. Les activités incluaient le maintien de l'accès, l'escalade de privilèges, la collecte de données sensibles, et la couverture des traces. La post-exploitation a démontré comment les attaquants peuvent maximiser l'impact d'une compromission réussie.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Outils et Techniques Avancés</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le projet a impliqué l'utilisation d'outils et de techniques avancés de sécurité offensive :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li><strong>Metasploit Framework :</strong> Framework d'exploitation avancé pour développer et exécuter des exploits</li>
              <li><strong>Burp Suite Professional :</strong> Outil de test de sécurité des applications web avancé</li>
              <li><strong>Kali Linux :</strong> Distribution Linux spécialisée avec tous les outils de sécurité offensive</li>
              <li><strong>Exploitation de Vulnérabilités Zéro-Day :</strong> Techniques pour exploiter les vulnérabilités non encore corrigées</li>
              <li><strong>Développement d'Exploits Personnalisés :</strong> Création d'exploits personnalisés pour les vulnérabilités spécifiques</li>
              <li><strong>Techniques d'Évasion :</strong> Techniques pour contourner les mesures de sécurité (IDS/IPS, antivirus)</li>
              <li><strong>Techniques de Pivot :</strong> Techniques pour se déplacer latéralement dans un réseau compromis</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Scénarios de Tests de Pénétration</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le projet a impliqué plusieurs scénarios de tests de pénétration réalistes :
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Scénario 1 - Test de Pénétration Externe :</strong> Test de pénétration d'une infrastructure accessible depuis Internet. Le test a impliqué la reconnaissance de l'infrastructure externe, l'identification des services accessibles, l'exploitation des vulnérabilités, et l'obtention d'un accès au réseau interne. Ce scénario a démontré comment les attaquants externes peuvent compromettre une organisation.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Scénario 2 - Test de Pénétration Interne :</strong> Test de pénétration d'une infrastructure interne à partir d'un accès utilisateur limité. Le test a impliqué l'escalade de privilèges, le pivot vers d'autres systèmes, et l'accès aux données sensibles. Ce scénario a démontré comment les menaces internes peuvent compromettre une organisation.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Scénario 3 - Test de Pénétration des Applications Web :</strong> Test de pénétration des applications web pour identifier les vulnérabilités (OWASP Top 10). Le test a impliqué l'identification des vulnérabilités d'injection, des vulnérabilités d'authentification, et des vulnérabilités de gestion de session. Ce scénario a démontré comment les applications mal développées peuvent être compromises.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Documentation et Rapports</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le projet a impliqué la création de rapports professionnels de tests de pénétration :
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Rapport Exécutif :</strong> Un résumé non technique du test de pénétration destiné aux cadres supérieurs. Le rapport incluait les résultats clés, les risques identifiés, et les recommandations prioritaires. Le rapport exécutif a fourni une vue d'ensemble rapide de la posture de sécurité.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Rapport Technique :</strong> Un rapport détaillé des résultats du test de pénétration destiné aux équipes techniques. Le rapport incluait la description complète de chaque vulnérabilité, les étapes de reproduction, l'impact potentiel, et les recommandations de remédiation. Le rapport technique a fourni les informations nécessaires pour corriger les vulnérabilités.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Preuve de Concept :</strong> Des preuves de concept documentées pour chaque vulnérabilité exploitée. Les preuves de concept ont démontré comment chaque vulnérabilité a été exploitée et l'impact réel de l'exploitation.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Apprentissages et Compétences Développées</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le projet a permis de développer une expertise avancée en sécurité offensive :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Maîtrise des techniques avancées de sécurité offensive</li>
              <li>Expertise en tests de pénétration professionnels</li>
              <li>Capacité à utiliser les outils professionnels de sécurité offensive</li>
              <li>Compétences en exploitation de vulnérabilités avancées</li>
              <li>Capacité à développer des exploits personnalisés</li>
              <li>Compétences en documentation et en rapports professionnels</li>
              <li>Compréhension des implications légales et éthiques</li>
              <li>Préparation pour les certifications de sécurité offensive</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Conclusion</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le projet OSSE a fourni une formation complète en sécurité offensive et tests de pénétration professionnels. Cette expérience constitue une base solide pour une carrière en sécurité offensive, en tests de pénétration, ou en gestion des vulnérabilités. Les compétences développées lors de ce projet sont hautement demandées dans l'industrie de la cybersécurité et sont essentielles pour les rôles de sécurité offensive avancés. La certification OSSE ou des certifications similaires (CEH, OSCP) validerait davantage l'expertise en sécurité offensive.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
