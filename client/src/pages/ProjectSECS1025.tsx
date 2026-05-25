import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function ProjectSECS1025() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="container py-12 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2 mb-6">
              <ArrowLeft className="h-4 w-4" />
              Retour aux projets
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-accent mb-4">SECS1025 - Laboratoire 2 : Opération Double Impact</h1>
          <div className="space-y-2 text-muted-foreground text-sm">
            <p><strong>Étudiant :</strong> Ismael Baby</p>
            <p><strong>Cours :</strong> Sécurité des Systèmes et Gestion des Risques</p>
            <p><strong>Établissement :</strong> Collège communautaire du Nouveau-Brunswick – Campus Dieppe</p>
            <p><strong>Titre du Projet :</strong> Opération Double Impact</p>
          </div>
        </div>

        {/* Introduction */}
        <section className="mb-12 space-y-4">
          <h2 className="text-2xl font-bold text-accent">Introduction</h2>
          <p className="text-justify leading-relaxed">
            Le laboratoire SECS1025 - Laboratoire 2 intitulé "Opération Double Impact" représente une étude de cas complète d'un scénario d'attaque multi-étapes contre une infrastructure informatique. Ce laboratoire simule une attaque réaliste combinant plusieurs techniques de compromission, de mouvement latéral et d'exploitation. À travers ce scénario, les étudiants ont développé une compréhension profonde des techniques d'attaque avancées et des stratégies de défense correspondantes.
          </p>
        </section>

        {/* ÉTAPE 1 */}
        <section className="mb-12 space-y-6">
          <h2 className="text-2xl font-bold text-accent">ÉTAPE 1 : COMPROMISSION DE WINDOWS XP</h2>
          <p className="text-justify leading-relaxed">
            La première étape de l'opération "Double Impact" consistait à compromettre une machine Windows XP vulnérable. Windows XP est un système d'exploitation hérité connu pour ses nombreuses vulnérabilités critiques non patchées. Cette étape démontre comment les systèmes hérités peuvent être exploités pour obtenir un accès initial à une infrastructure.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-accent">1.1 IDENTIFICATION DE LA VULNÉRABILITÉ MS08-067</h3>
            <p className="text-justify leading-relaxed">
              La vulnérabilité MS08-067 est une faille critique dans le service NetBIOS de Windows qui permet l'exécution de code arbitraire. Cette vulnérabilité affecte Windows XP, Windows Vista et les versions antérieures de Windows Server. La vulnérabilité a été découverte et exploitée par le ver Conficker, l'un des vers les plus destructeurs de l'histoire de l'informatique.
            </p>
            <p className="text-justify leading-relaxed">
              <strong>Impact de la vulnérabilité :</strong> Un attaquant peut envoyer un paquet spécialement conçu au port 445 (SMB) pour déclencher un débordement de tampon et exécuter du code arbitraire avec les privilèges du service NetBIOS (généralement SYSTEM).
            </p>
            <div className="bg-muted p-4 rounded-lg border border-border">
              <p className="text-sm font-mono text-muted-foreground">
                [Espace pour capture d'écran : Scan Nmap montrant le port 445 ouvert sur Windows XP]
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-accent">1.2 EXPLOITATION AVEC METASPLOIT</h3>
            <p className="text-justify leading-relaxed">
              Metasploit est un framework d'exploitation open-source qui contient des exploits pour des milliers de vulnérabilités connues. Pour exploiter MS08-067, nous avons utilisé le module d'exploitation Metasploit correspondant.
            </p>

            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Procédure d'exploitation :</h4>
              <ol className="list-decimal list-inside space-y-2 text-sm ml-4">
                <li>Lancer Metasploit Framework</li>
                <li>Charger le module d'exploitation MS08-067</li>
                <li>Configurer l'adresse IP cible (Windows XP)</li>
                <li>Configurer l'adresse IP de l'attaquant (pour le reverse shell)</li>
                <li>Configurer le port d'écoute pour la connexion inverse</li>
                <li>Exécuter l'exploit</li>
              </ol>
            </div>

            <div className="bg-muted p-4 rounded-lg border border-border">
              <p className="text-sm font-mono text-muted-foreground">
                [Espace pour capture d'écran : Console Metasploit avec l'exploit MS08-067 en cours d'exécution]
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-accent">1.3 OBTENTION D'UNE SESSION METERPRETER</h3>
            <p className="text-justify leading-relaxed">
              Une fois l'exploit exécuté avec succès, une session Meterpreter a été établie. Meterpreter est un shell de charge utile avancé qui fournit un accès interactif au système compromis. Meterpreter s'exécute entièrement en mémoire, ce qui le rend difficile à détecter par les antivirus traditionnels.
            </p>

            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Capacités de Meterpreter :</h4>
              <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                <li>Exécution de commandes système</li>
                <li>Navigation dans le système de fichiers</li>
                <li>Téléchargement et téléversement de fichiers</li>
                <li>Capture d'écran et enregistrement de clavier</li>
                <li>Escalade de privilèges</li>
                <li>Création de sessions persistantes</li>
                <li>Accès aux processus en cours d'exécution</li>
                <li>Injection de code dans les processus</li>
              </ul>
            </div>

            <div className="bg-muted p-4 rounded-lg border border-border">
              <p className="text-sm font-mono text-muted-foreground">
                [Espace pour capture d'écran : Session Meterpreter active sur Windows XP]
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-accent">1.4 EXFILTRATION DE DONNÉES</h3>
            <p className="text-justify leading-relaxed">
              Une fois l'accès établi, des données sensibles ont été exfiltrées du système compromis. L'exfiltration de données est une étape critique d'une attaque, car elle permet à l'attaquant d'accéder aux informations sensibles de la victime.
            </p>

            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Types de données exfiltrées :</h4>
              <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                <li>Fichiers de configuration système</li>
                <li>Fichiers de base de données locales</li>
                <li>Fichiers de documents utilisateur</li>
                <li>Identifiants stockés localement</li>
                <li>Historique de navigation web</li>
                <li>Emails et communications</li>
              </ul>
            </div>

            <div className="bg-muted p-4 rounded-lg border border-border">
              <p className="text-sm font-mono text-muted-foreground">
                [Espace pour capture d'écran : Fichiers exfiltrés depuis Windows XP]
              </p>
            </div>
          </div>
        </section>

        {/* ÉTAPE 2 */}
        <section className="mb-12 space-y-6">
          <h2 className="text-2xl font-bold text-accent">ÉTAPE 2 : MISE EN PLACE D'UN SERVEUR C2 MYTHIC</h2>
          <p className="text-justify leading-relaxed">
            La deuxième étape de l'opération "Double Impact" consistait à mettre en place un serveur Command and Control (C2) Mythic. Un serveur C2 est une infrastructure utilisée par les attaquants pour contrôler les machines compromises et orchestrer les attaques. Mythic est un framework C2 open-source moderne qui offre des capacités avancées de contrôle et de communication.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-accent">2.1 DÉPLOIEMENT DU SERVEUR MYTHIC</h3>
            <p className="text-justify leading-relaxed">
              Le serveur Mythic a été déployé sur une machine contrôlée par l'attaquant. Mythic fournit une interface web pour gérer les agents compromis, orchestrer les attaques et collecter les données exfiltrées. Le serveur Mythic inclut plusieurs composants :
            </p>

            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Composants de Mythic :</h4>
              <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                <li><strong>Serveur Mythic :</strong> Composant central qui gère les communications et les agents</li>
                <li><strong>Interface Web :</strong> Interface graphique pour contrôler les agents et visualiser les données</li>
                <li><strong>Base de Données :</strong> Stockage des informations sur les agents, les tâches et les données exfiltrées</li>
                <li><strong>Agents :</strong> Logiciels malveillants installés sur les machines compromises</li>
                <li><strong>Payloads :</strong> Code exécutable généré pour les agents</li>
              </ul>
            </div>

            <div className="bg-muted p-4 rounded-lg border border-border">
              <p className="text-sm font-mono text-muted-foreground">
                [Espace pour capture d'écran : Interface web de Mythic]
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-accent">2.2 CONFIGURATION DES AGENTS</h3>
            <p className="text-justify leading-relaxed">
              Les agents Mythic ont été configurés pour communiquer avec le serveur C2. Les agents utilisent divers protocoles de communication (HTTP, HTTPS, DNS, etc.) pour établir des connexions avec le serveur C2 tout en évitant la détection.
            </p>

            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Protocoles de communication :</h4>
              <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                <li><strong>HTTP/HTTPS :</strong> Communication web standard, difficile à distinguer du trafic web légitime</li>
                <li><strong>DNS :</strong> Utilisation du protocole DNS pour exfiltrer des données et recevoir des commandes</li>
                <li><strong>WebSocket :</strong> Communication bidirectionnelle en temps réel</li>
                <li><strong>Custom Protocols :</strong> Protocoles personnalisés pour éviter la détection</li>
              </ul>
            </div>

            <div className="bg-muted p-4 rounded-lg border border-border">
              <p className="text-sm font-mono text-muted-foreground">
                [Espace pour capture d'écran : Configuration des agents Mythic]
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-accent">2.3 ORCHESTRATION DES ATTAQUES</h3>
            <p className="text-justify leading-relaxed">
              Une fois les agents configurés, le serveur Mythic a été utilisé pour orchestrer les attaques contre les machines compromises. Les attaquants peuvent envoyer des commandes aux agents pour effectuer diverses actions sur les systèmes compromis.
            </p>

            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Types de commandes exécutables :</h4>
              <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                <li>Exécution de commandes système</li>
                <li>Escalade de privilèges</li>
                <li>Mouvement latéral vers d'autres machines</li>
                <li>Exfiltration de données</li>
                <li>Installation de logiciels malveillants supplémentaires</li>
                <li>Couverture des traces d'attaque</li>
              </ul>
            </div>

            <div className="bg-muted p-4 rounded-lg border border-border">
              <p className="text-sm font-mono text-muted-foreground">
                [Espace pour capture d'écran : Orchestration des attaques via Mythic]
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12 space-y-4">
          <h2 className="text-2xl font-bold text-accent">Conclusion</h2>
          <p className="text-justify leading-relaxed">
            Le laboratoire SECS1025 - Laboratoire 2 "Opération Double Impact" a démontré un scénario d'attaque réaliste combinant l'exploitation de vulnérabilités connues, l'établissement de sessions de contrôle à distance et la mise en place d'une infrastructure C2 pour le contrôle persistant. Cette étude de cas illustre l'importance critique de la gestion des vulnérabilités, de la mise à jour des systèmes et de la mise en place de défenses avancées contre les attaques multi-étapes. Les compétences développées lors de ce laboratoire sont essentielles pour les professionnels de la sécurité qui doivent comprendre comment les attaquants opèrent et comment mettre en place des défenses efficaces.
          </p>
        </section>

        {/* Navigation Footer */}
        <div className="flex justify-between pt-8 border-t border-border">
          <Link href="/">
            <Button variant="outline">← Retour aux projets</Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
