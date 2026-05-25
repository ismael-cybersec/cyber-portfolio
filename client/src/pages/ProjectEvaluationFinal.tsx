import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function ProjectEvaluationFinal() {
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
          <h1 className="text-4xl font-bold text-accent mb-4">Évaluation Final : Hacking éthique et Contre-mesures</h1>
          <div className="space-y-2 text-muted-foreground text-sm">
            <p><strong>Étudiant :</strong> Ismael Baby</p>
            <p><strong>Cours :</strong> Hacking éthique et Contre-mesures</p>
            <p><strong>Professeur :</strong> Kevin MONKAM</p>
            <p><strong>Établissement :</strong> CCNB - Campus Dieppe</p>
            <p><strong>Date :</strong> 30-11-2025</p>
          </div>
        </div>

        {/* Introduction */}
        <section className="mb-12 space-y-4">
          <h2 className="text-2xl font-bold text-accent">Introduction</h2>
          <p className="text-justify leading-relaxed">
            L'évaluation final du cours "Hacking éthique et Contre-mesures" représente une démonstration pratique des compétences acquises en matière de test de pénétration, d'exploitation de vulnérabilités et de mise en place de mesures de sécurité. Cette évaluation combine plusieurs étapes de développement d'une infrastructure web vulnérable et de sa compromission, illustrant les principes fondamentaux du hacking éthique et de la défense contre les attaques.
          </p>
        </section>

        {/* ÉTAPE 1 */}
        <section className="mb-12 space-y-6">
          <h2 className="text-2xl font-bold text-accent">ÉTAPE 1 : DÉPLOIEMENT DU SERVEUR</h2>
          <p className="text-justify leading-relaxed">
            La première étape de l'évaluation consistait à déployer une infrastructure web fonctionnelle sur une machine Ubuntu Server. Cette étape démontre la capacité à configurer et administrer les composants essentiels d'une infrastructure web moderne.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-accent">1.1 INSTALLATION D'UBUNTU SERVER</h3>
            <p className="text-justify leading-relaxed">
              Ubuntu Server 22.04 LTS a été installé sur une machine virtuelle. Ubuntu Server est une distribution Linux populaire pour les serveurs en production, offrant stabilité, sécurité et support à long terme.
            </p>

            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Configuration réalisée :</h4>
              <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                <li>Déploiement d'une machine virtuelle Ubuntu Server 22.04 LTS</li>
                <li>Configuration réseau avec adresse IP statique</li>
                <li>Configuration du hostname et des paramètres système</li>
                <li>Mise à jour des packages système</li>
              </ul>
            </div>

            <div className="bg-muted p-4 rounded-lg border border-border">
              <p className="text-sm font-mono text-muted-foreground">
                [Espace pour capture d'écran : Installation d'Ubuntu Server]
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-accent">1.2 INSTALLATION DES COMPOSANTS WEB</h3>
            <p className="text-justify leading-relaxed">
              Les composants essentiels d'une infrastructure web ont été installés : Apache2 (serveur web), PHP (langage de scripting côté serveur) et MySQL (système de gestion de base de données).
            </p>

            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Composants installés :</h4>
              <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                <li><strong>Apache2 :</strong> Serveur web HTTP/HTTPS pour servir les pages web</li>
                <li><strong>PHP :</strong> Langage de scripting côté serveur pour développer des applications web dynamiques</li>
                <li><strong>MySQL :</strong> Système de gestion de base de données pour stocker les données de l'application</li>
              </ul>
            </div>

            <div className="bg-muted p-4 rounded-lg border border-border">
              <p className="text-sm font-mono text-muted-foreground">
                [Espace pour capture d'écran : Installation d'Apache, PHP et MySQL]
              </p>
            </div>

            <p className="text-justify leading-relaxed">
              <strong>Vérification du déploiement :</strong> Une fois l'installation terminée, le serveur web a été vérifié en accédant à la page par défaut d'Apache via un navigateur web. La page par défaut confirme que le serveur Apache fonctionne correctement.
            </p>

            <div className="bg-muted p-4 rounded-lg border border-border">
              <p className="text-sm font-mono text-muted-foreground">
                [Espace pour capture d'écran : Page par défaut d'Apache]
              </p>
            </div>
          </div>
        </section>

        {/* ÉTAPE 2 */}
        <section className="mb-12 space-y-6">
          <h2 className="text-2xl font-bold text-accent">ÉTAPE 2 : CRÉATION D'UNE PAGE HTML/CSS POUR L'UPLOAD</h2>
          <p className="text-justify leading-relaxed">
            La deuxième étape consistait à créer une page HTML avec un formulaire d'upload de fichiers. Cette page servira de point d'entrée pour l'exploitation ultérieure.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-accent">2.1 CONCEPTION DE LA PAGE HTML</h3>
            <p className="text-justify leading-relaxed">
              Une page HTML a été créée avec un formulaire d'upload simple. Le formulaire inclut un champ d'entrée pour sélectionner un fichier et un bouton pour soumettre le formulaire.
            </p>

            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Éléments de la page :</h4>
              <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                <li>Titre de la page</li>
                <li>Formulaire HTML avec méthode POST</li>
                <li>Champ d'entrée de fichier (type="file")</li>
                <li>Bouton de soumission</li>
              </ul>
            </div>

            <div className="bg-muted p-4 rounded-lg border border-border">
              <p className="text-sm font-mono text-muted-foreground">
                [Espace pour capture d'écran : Page HTML avec formulaire d'upload]
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-accent">2.2 AJOUT DE STYLES CSS</h3>
            <p className="text-justify leading-relaxed">
              Des styles CSS ont été ajoutés pour améliorer l'apparence de la page. Le design inclut des couleurs, des espacements et des effets de hover pour rendre la page plus attrayante.
            </p>

            <div className="bg-muted p-4 rounded-lg border border-border">
              <p className="text-sm font-mono text-muted-foreground">
                [Espace pour capture d'écran : Page HTML stylisée avec CSS]
              </p>
            </div>
          </div>
        </section>

        {/* ÉTAPE 3 */}
        <section className="mb-12 space-y-6">
          <h2 className="text-2xl font-bold text-accent">ÉTAPE 3 : DÉVELOPPEMENT DU SCRIPT PHP D'UPLOAD</h2>
          <p className="text-justify leading-relaxed">
            La troisième étape consistait à développer un script PHP qui reçoit et stocke les fichiers uploadés. Ce script contient intentionnellement des vulnérabilités de sécurité pour démontrer les risques de l'upload de fichiers non sécurisé.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-accent">3.1 STRUCTURE DU SCRIPT PHP</h3>
            <p className="text-justify leading-relaxed">
              Le script PHP reçoit le fichier uploadé, effectue quelques vérifications basiques et le stocke dans un répertoire accessible via le web.
            </p>

            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Fonctionnalités du script :</h4>
              <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                <li>Réception du fichier uploadé via $_FILES</li>
                <li>Vérification basique du fichier (taille, type)</li>
                <li>Stockage du fichier dans le répertoire /uploads</li>
                <li>Affichage d'un message de succès ou d'erreur</li>
              </ul>
            </div>

            <div className="bg-muted p-4 rounded-lg border border-border">
              <p className="text-sm font-mono text-muted-foreground">
                [Espace pour capture d'écran : Code PHP du script d'upload]
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-accent">3.2 VULNÉRABILITÉS INTENTIONNELLES</h3>
            <p className="text-justify leading-relaxed">
              Le script PHP contient plusieurs vulnérabilités de sécurité intentionnelles pour démontrer les risques de l'upload de fichiers non sécurisé :
            </p>

            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Vulnérabilités :</h4>
              <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                <li><strong>Pas de restriction sur le type de fichier :</strong> N'importe quel type de fichier peut être uploadé</li>
                <li><strong>Pas de validation du contenu du fichier :</strong> Le contenu du fichier n'est pas vérifié</li>
                <li><strong>Répertoire accessible via le web :</strong> Les fichiers uploadés sont stockés dans un répertoire accessible via HTTP</li>
                <li><strong>Pas de renommage du fichier :</strong> Le fichier conserve son nom original</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-accent">3.3 CRÉATION DU RÉPERTOIRE D'UPLOAD</h3>
            <p className="text-justify leading-relaxed">
              Le répertoire /var/www/html/uploads a été créé avec les permissions 777 pour permettre l'écriture de fichiers. Cette configuration est intentionnellement insécurisée pour démontrer les risques.
            </p>

            <div className="bg-muted p-4 rounded-lg border border-border">
              <p className="text-sm font-mono text-muted-foreground">
                [Espace pour capture d'écran : Création du répertoire uploads avec permissions 777]
              </p>
            </div>
          </div>
        </section>

        {/* ÉTAPE 4 */}
        <section className="mb-12 space-y-6">
          <h2 className="text-2xl font-bold text-accent">ÉTAPE 4 : EXPLOITATION AVEC PENTESTMONKEY PHP SHELL</h2>
          <p className="text-justify leading-relaxed">
            La quatrième étape consistait à exploiter les vulnérabilités du script PHP en uploadant un shell PHP malveillant. Pentestmonkey PHP Reverse Shell est un script PHP populaire utilisé par les testeurs de pénétration pour obtenir un accès shell à un serveur web.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-accent">4.1 PRÉPARATION DU PENTESTMONKEY PHP SHELL</h3>
            <p className="text-justify leading-relaxed">
              Le Pentestmonkey PHP Reverse Shell a été configuré avec l'adresse IP de l'attaquant et le port d'écoute. Ce shell établira une connexion inverse vers la machine de l'attaquant.
            </p>

            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Configuration du shell :</h4>
              <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                <li>Adresse IP de l'attaquant (LHOST)</li>
                <li>Port d'écoute (LPORT)</li>
                <li>Type de shell (bash, sh, etc.)</li>
              </ul>
            </div>

            <div className="bg-muted p-4 rounded-lg border border-border">
              <p className="text-sm font-mono text-muted-foreground">
                [Espace pour capture d'écran : Configuration du Pentestmonkey PHP Shell]
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-accent">4.2 UPLOAD DU SHELL</h3>
            <p className="text-justify leading-relaxed">
              Le Pentestmonkey PHP Shell a été uploadé via le formulaire d'upload. Comme le script PHP ne valide pas le type de fichier, le shell PHP a été accepté et stocké dans le répertoire /uploads.
            </p>

            <div className="bg-muted p-4 rounded-lg border border-border">
              <p className="text-sm font-mono text-muted-foreground">
                [Espace pour capture d'écran : Upload du Pentestmonkey PHP Shell]
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-accent">4.3 EXÉCUTION DU SHELL</h3>
            <p className="text-justify leading-relaxed">
              Une fois uploadé, le shell PHP a été exécuté en accédant à son URL via le navigateur web. L'exécution du shell a établi une connexion inverse vers la machine de l'attaquant.
            </p>

            <div className="bg-muted p-4 rounded-lg border border-border">
              <p className="text-sm font-mono text-muted-foreground">
                [Espace pour capture d'écran : Accès au shell PHP uploadé]
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-accent">4.4 ÉTABLISSEMENT D'UNE CONNEXION INVERSE</h3>
            <p className="text-justify leading-relaxed">
              Une fois le shell exécuté, une connexion inverse a été établie vers la machine de l'attaquant. Cette connexion fournit un accès shell complet au serveur web compromis.
            </p>

            <div className="bg-muted p-4 rounded-lg border border-border">
              <p className="text-sm font-mono text-muted-foreground">
                [Espace pour capture d'écran : Connexion inverse établie avec le shell]
              </p>
            </div>

            <p className="text-justify leading-relaxed">
              <strong>Accès obtenu :</strong> Une fois la connexion établie, l'attaquant a accès complet au serveur web. L'attaquant peut exécuter des commandes système, explorer le système de fichiers, et effectuer d'autres actions malveillantes.
            </p>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12 space-y-4">
          <h2 className="text-2xl font-bold text-accent">Conclusion</h2>
          <p className="text-justify leading-relaxed">
            L'évaluation final a démontré avec succès les compétences acquises en matière de déploiement d'infrastructure web, de développement d'applications web et d'exploitation de vulnérabilités. Cette évaluation illustre l'importance critique de la sécurité dans le développement web et la nécessité de valider et de sécuriser tous les uploads de fichiers. Les techniques démontrées dans cette évaluation sont essentielles pour les professionnels de la cybersécurité qui doivent identifier et corriger les vulnérabilités dans les applications web.
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
