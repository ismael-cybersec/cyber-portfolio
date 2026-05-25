import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function ProjectEthicalHacking() {
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
          <h1 className="text-5xl font-bold text-primary mb-4">Ethical Hacking Lab</h1>
          <p className="text-2xl text-accent mb-6">Tests de Pénétration et Exploitation de Vulnérabilités</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-accent/20 text-accent border-accent/30">Ethical Hacking</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Tests de Pénétration</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Kali Linux</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Exploitation</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Sécurité Offensive</Badge>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-primary mb-6">Vue d'Ensemble du Lab</h2>
            
            <p className="text-foreground/80 leading-relaxed mb-6">
              Le laboratoire d'Ethical Hacking représente une formation pratique approfondie dans les techniques de tests de pénétration et d'exploitation de vulnérabilités. Ce lab a fourni une expérience pratique avec les outils et techniques utilisés par les professionnels de la sécurité offensive pour identifier et exploiter les vulnérabilités de sécurité. Le lab a couvert tous les aspects essentiels du hacking éthique, y compris la reconnaissance, l'énumération, l'exploitation, et la post-exploitation. Cette expérience a été fondamentale pour développer une compréhension complète des techniques d'attaque et des défenses contre ces attaques.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Objectifs du Laboratoire</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Les objectifs principaux du laboratoire d'Ethical Hacking incluaient :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Maîtriser les techniques de reconnaissance et d'énumération</li>
              <li>Apprendre à identifier les vulnérabilités de sécurité</li>
              <li>Développer les compétences en exploitation de vulnérabilités</li>
              <li>Comprendre les techniques de post-exploitation</li>
              <li>Utiliser les outils de hacking éthique (Kali Linux, Metasploit, Burp Suite)</li>
              <li>Documenter les résultats des tests de pénétration</li>
              <li>Développer une éthique professionnelle en hacking éthique</li>
              <li>Comprendre les implications légales et éthiques du hacking</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Phases du Laboratoire</h3>
            
            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Phase 1 - Reconnaissance :</strong> La première phase du laboratoire a impliqué la reconnaissance des cibles. Cette phase incluait la collecte d'informations sur les cibles (adresses IP, noms de domaine, services actifs, versions de logiciels). Les techniques utilisées incluaient les scans WHOIS, les scans DNS, les scans de ports (Nmap), et la recherche d'informations publiques. La reconnaissance est une étape critique qui fournit les informations nécessaires pour les phases ultérieures du test de pénétration.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Phase 2 - Énumération :</strong> La deuxième phase a impliqué l'énumération détaillée des services et des systèmes. Cette phase incluait l'identification des services actifs, des versions de logiciels, des utilisateurs, des partages réseau, et d'autres informations détaillées. Les outils utilisés incluaient Nmap, Nessus, OpenVAS, et d'autres outils d'énumération. L'énumération fournit les informations détaillées nécessaires pour identifier les vulnérabilités.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Phase 3 - Identification des Vulnérabilités :</strong> La troisième phase a impliqué l'identification des vulnérabilités de sécurité. Cette phase incluait l'analyse des informations collectées pour identifier les vulnérabilités potentielles. Les vulnérabilités identifiées incluaient les services non patchés, les configurations faibles, les services inutiles, et les failles de sécurité applicatives. Les outils utilisés incluaient les scanners de vulnérabilités (Nessus, OpenVAS) et l'analyse manuelle.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Phase 4 - Exploitation :</strong> La quatrième phase a impliqué l'exploitation des vulnérabilités identifiées. Cette phase incluait l'utilisation d'exploits pour obtenir un accès non autorisé aux systèmes. Les outils utilisés incluaient Metasploit, des exploits personnalisés, et des techniques d'exploitation manuelles. L'exploitation a démontré l'impact réel des vulnérabilités et la nécessité de les corriger.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Phase 5 - Post-Exploitation :</strong> La cinquième phase a impliqué les activités de post-exploitation. Cette phase incluait le maintien de l'accès, l'escalade de privilèges, la collecte de données sensibles, et la couverture des traces. Ces activités ont démontré l'impact complet d'une compromission de sécurité et l'importance de la détection et de la réponse aux incidents.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Outils et Technologies Utilisés</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le laboratoire a fourni une expérience pratique avec les outils professionnels de hacking éthique :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li><strong>Kali Linux :</strong> Distribution Linux spécialisée pour les tests de pénétration et le hacking éthique</li>
              <li><strong>Nmap :</strong> Outil de scan de ports et de découverte de réseau</li>
              <li><strong>Metasploit :</strong> Framework d'exploitation pour développer et exécuter des exploits</li>
              <li><strong>Burp Suite :</strong> Outil de test de sécurité des applications web</li>
              <li><strong>Wireshark :</strong> Analyseur de protocoles réseau</li>
              <li><strong>Nessus/OpenVAS :</strong> Scanners de vulnérabilités</li>
              <li><strong>John the Ripper :</strong> Outil de craquage de mots de passe</li>
              <li><strong>Hydra :</strong> Outil de brute-force pour les services réseau</li>
              <li><strong>SQLmap :</strong> Outil d'exploitation d'injections SQL</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Scénarios d'Attaque Pratiqués</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le laboratoire a impliqué plusieurs scénarios d'attaque réalistes :
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>1. Exploitation de Services Non Patchés :</strong> Identification et exploitation de services non patchés avec des vulnérabilités connues. Cela a démontré l'importance critique de la gestion des correctifs et de la mise à jour régulière des systèmes.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>2. Attaques par Injection SQL :</strong> Identification et exploitation de vulnérabilités d'injection SQL dans les applications web. Cela a démontré comment les applications mal développées peuvent être compromises et comment les données sensibles peuvent être extraites.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>3. Craquage de Mots de Passe :</strong> Craquage de mots de passe faibles en utilisant des techniques de brute-force et de dictionnaire. Cela a démontré l'importance des politiques de mots de passe forts et de l'authentification multi-facteurs.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>4. Escalade de Privilèges :</strong> Techniques d'escalade de privilèges pour obtenir un accès administrateur à partir d'un accès utilisateur limité. Cela a démontré comment les attaquants peuvent augmenter leur impact après un accès initial.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>5. Attaques par Phishing et Social Engineering :</strong> Création de campagnes de phishing et utilisation de techniques de social engineering pour obtenir des informations d'identification. Cela a démontré comment les attaquants exploitent la psychologie humaine plutôt que les failles techniques.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Apprentissages et Compétences Développées</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le laboratoire a permis de développer une compréhension profonde des techniques de hacking éthique et des défenses contre ces techniques :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Maîtrise des outils de hacking éthique professionnels</li>
              <li>Compréhension approfondie des techniques d'attaque</li>
              <li>Capacité à identifier et à exploiter les vulnérabilités</li>
              <li>Compréhension des défenses contre les attaques</li>
              <li>Capacité à documenter les résultats des tests de pénétration</li>
              <li>Compréhension des implications légales et éthiques</li>
              <li>Développement d'une éthique professionnelle en hacking éthique</li>
              <li>Compréhension holistique de la sécurité informatique</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Conclusion</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le laboratoire d'Ethical Hacking a fourni une formation pratique approfondie dans les techniques de tests de pénétration et d'exploitation de vulnérabilités. Cette expérience constitue une base solide pour une carrière en sécurité offensive, en tests de pénétration, ou en gestion des vulnérabilités. Les compétences développées lors de ce laboratoire sont hautement demandées dans l'industrie de la cybersécurité et sont essentielles pour comprendre comment les attaquants compromettent les systèmes et comment les défendre efficacement.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
