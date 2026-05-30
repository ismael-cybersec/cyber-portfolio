import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

export default function ProjectYodeck() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <button
            onClick={() => setLocation("/")}
            className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour au Portfolio
          </button>
          <h1 className="text-xl font-bold text-accent">Projet Yodeck</h1>
        </div>
      </nav>

      <main className="container py-12 max-w-4xl">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4 text-accent">Projet Yodeck - OSSE1087</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Système d'Affichage Dynamique Centralisé sur Raspberry Pi avec Gestion de Contenu Web
          </p>
          <div className="prose prose-invert max-w-none">
            <p className="text-base leading-relaxed text-foreground/90">
              Le Projet Yodeck représente une implémentation complète d'un système d'affichage dynamique (Digital Signage) utilisant la plateforme Yodeck sur un Raspberry Pi 4. Ce projet, réalisé en collaboration avec Joel Allain, Christelle Zeufack et Adi Habachi sous la supervision de Christian Gilles Kalla au Collège Communautaire du Nouveau-Brunswick, démontre l'intégration de technologies embarquées, de virtualisation et de gestion centralisée de contenu pour créer une solution d'affichage moderne et flexible.
            </p>
          </div>
          <img src="/cyber-portfolio/2.png" alt="Ae" className="w-full rounded-lg border border-accent/30 mt-6" />
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-accent">1. Vue d'Ensemble du Projet Yodeck</h2>
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-base leading-relaxed text-foreground/90">
              Yodeck est une plateforme de gestion d'affichage dynamique qui permet de contrôler et de gérer le contenu affiché sur des écrans à distance. Le système fonctionne en utilisant un Raspberry Pi 4 comme serveur d'affichage local, capable de recevoir des mises à jour de contenu via Internet et d'afficher dynamiquement des images, vidéos, et informations en temps réel. Cette approche révolutionnaire transforme les écrans statiques en outils de communication interactifs et adaptatifs.
            </p>
            <p className="text-base leading-relaxed text-foreground/90">
              L'objectif principal du projet était de mettre en place une infrastructure complète d'affichage dynamique, en commençant par une phase de test en environnement virtuel, suivie du déploiement physique sur du matériel Raspberry Pi. Cette approche méthodique garantit la stabilité et la fiabilité du système avant son déploiement en production.
            </p>
            <p className="text-base leading-relaxed text-foreground/90">
              Le système Yodeck offre plusieurs avantages significatifs par rapport aux solutions d'affichage traditionnelles : gestion centralisée du contenu depuis n'importe quel endroit, support d'une large gamme de formats, et scalabilité exceptionnelle permettant de gérer des centaines d'écrans depuis une seule interface.
            </p>
          </div>
          <img src="/cyber-portfolio/3.png" alt="Tableau de bord Yodeck" className="w-full rounded-lg border border-accent/30 mt-6" />
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-accent">2. Contexte et Motivation du Projet</h2>
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-base leading-relaxed text-foreground/90">
              Dans le contexte éducatif actuel, les institutions ont besoin de solutions d'affichage modernes pour communiquer efficacement avec les étudiants, le personnel et les visiteurs. Les tableaux d'affichage traditionnels sont statiques et nécessitent une mise à jour manuelle, ce qui est inefficace et coûteux en termes de temps et de ressources. Le projet Yodeck répond à ce besoin en fournissant une solution numérique flexible et évolutive.
            </p>
            <p className="text-base leading-relaxed text-foreground/90">
              La motivation derrière ce projet était d'explorer comment les technologies embarquées modernes, comme le Raspberry Pi, peuvent être utilisées pour créer des solutions professionnelles d'affichage. Le Raspberry Pi 4 offre un excellent rapport performance/coût, consomme très peu d'énergie, et dispose d'une communauté active de développeurs.
            </p>
            <p className="text-base leading-relaxed text-foreground/90">
              De plus, ce projet illustre l'importance de la virtualisation dans le processus de développement et de test. En testant d'abord le système dans un environnement virtuel avant le déploiement physique, nous avons pu identifier et résoudre les problèmes potentiels sans risquer d'endommager le matériel réel.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-accent">3. Outils et Matériel Utilisés</h2>
          <div className="prose prose-invert max-w-none space-y-6">
            <h3 className="text-2xl font-semibold text-accent/80 mt-6">3.1 Matériel Physique</h3>
            <p className="text-base leading-relaxed text-foreground/90">
              Le cœur du système repose sur le Raspberry Pi 4, un ordinateur monocarte extrêmement puissant pour sa taille et son coût. Le Raspberry Pi 4 dispose d'un processeur ARM Cortex-A72 quad-core cadencé à 1,5 GHz, de 4 Go à 8 Go de RAM, et de connectivité Gigabit Ethernet ainsi que WiFi 802.11ac.
            </p>
            <p className="text-base leading-relaxed text-foreground/90">
              La carte SD joue un rôle crucial dans le système, servant de stockage principal pour le système d'exploitation et l'application Yodeck. Nous avons utilisé une carte SD de haute capacité (32 Go ou plus) pour assurer suffisamment d'espace pour le système d'exploitation et le cache de contenu.
            </p>

            <h3 className="text-2xl font-semibold text-accent/80 mt-6">3.2 Infrastructure Logicielle</h3>
            <p className="text-base leading-relaxed text-foreground/90">
              Pour la phase de test en environnement virtuel, nous avons utilisé Proxmox VE, une plateforme de virtualisation open-source basée sur KVM et LXC. Nous avons créé une machine virtuelle Ubuntu Server 20.04 LTS pour simuler l'environnement de production avant le déploiement sur le Raspberry Pi physique.
            </p>
            <p className="text-base leading-relaxed text-foreground/90">
              Yodeck lui-même est une application web basée sur le cloud qui gère l'affichage de contenu sur les appareils clients. L'application s'exécute sur le Raspberry Pi et communique avec les serveurs Yodeck dans le cloud pour récupérer les mises à jour de contenu.
            </p>

            <h3 className="text-2xl font-semibold text-accent/80 mt-6">3.3 Outils de Flashage et de Configuration</h3>
            <p className="text-base leading-relaxed text-foreground/90">
              balenaEtcher est un outil de flashage de carte SD open-source qui simplifie considérablement le processus d'écriture d'images sur des cartes SD. L'interface graphique intuitive permet même aux utilisateurs non techniques de flasher correctement une image en quelques clics.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-accent">4. Étape 1 : Essai du Projet dans un Environnement Virtuel</h2>
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-base leading-relaxed text-foreground/90">
              La première étape du projet consistait à tester l'application Yodeck dans un environnement virtuel avant de la déployer sur le matériel Raspberry Pi physique. Cette approche méthodique nous a permis de valider la configuration du système et de résoudre les problèmes potentiels dans un environnement contrôlé.
            </p>
            <p className="text-base leading-relaxed text-foreground/90">
              Nous avons créé une machine virtuelle Ubuntu Server 20.04 LTS sur Proxmox VE avec 2 processeurs virtuels, 2 Go de RAM, et 20 Go d'espace disque. Cette configuration était suffisante pour tester Yodeck et valider que l'application fonctionnait correctement.
            </p>
            <p className="text-base leading-relaxed text-foreground/90">
              L'avantage principal de cette approche est qu'elle nous a permis de tester rapidement différentes configurations sans risquer d'endommager le matériel physique. Les machines virtuelles peuvent être sauvegardées et restaurées facilement, ce qui facilite le débogage et l'itération.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-accent">5. Étape 2 : Déploiement du Software Yodeck sur le Raspberry Pi</h2>
          <div className="prose prose-invert max-w-none space-y-6">
            <h3 className="text-2xl font-semibold text-accent/80 mt-6">5.1 Téléchargement du Firmware Yodeck</h3>
            <p className="text-base leading-relaxed text-foreground/90">
              La première étape du déploiement physique consistait à télécharger le firmware Yodeck depuis le site officiel. Le firmware est fourni sous la forme d'une image ISO compressée qui contient le système d'exploitation Linux optimisé pour Yodeck et toutes les dépendances nécessaires.
            </p>

            <h3 className="text-2xl font-semibold text-accent/80 mt-6">5.2 Décompression du Fichier ISO</h3>
            <p className="text-base leading-relaxed text-foreground/90">
              Après le téléchargement, nous avons décompressé le fichier ZIP pour obtenir l'image ISO. La décompression a produit l'image ISO principale (environ 3,4 Go) qui allait être flashée sur la carte SD.
            </p>

            <h3 className="text-2xl font-semibold text-accent/80 mt-6">5.3 Flashage de la Carte SD avec balenaEtcher</h3>
            <p className="text-base leading-relaxed text-foreground/90">
              Avec l'image ISO décompressée, nous avons utilisé balenaEtcher pour flasher l'image sur la carte SD. Le processus était simple : lancer balenaEtcher, sélectionner l'image ISO, choisir la carte SD comme destination, et cliquer sur "Flash". Le processus a pris environ 10-15 minutes.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-accent">6. Étape 3 : Installation de Yodeck sur Raspberry Pi</h2>
          <div className="prose prose-invert max-w-none space-y-6">
            <h3 className="text-2xl font-semibold text-accent/80 mt-6">6.1 Configuration Matérielle Initiale</h3>
            <p className="text-base leading-relaxed text-foreground/90">
              Avec la carte SD flashée, nous avons procédé à la configuration matérielle du Raspberry Pi 4 : connexion des câbles HDMI pour l'affichage, branchement du câble Ethernet pour la connectivité réseau, et connexion de l'alimentation. Le Raspberry Pi a démarré automatiquement et a commencé à exécuter le système d'exploitation Yodeck.
            </p>

            <h3 className="text-2xl font-semibold text-accent/80 mt-6">6.2 Configuration Réseau et WiFi</h3>
            <p className="text-base leading-relaxed text-foreground/90">
              Une fois le système démarré, nous avons configuré la connectivité réseau. L'interface de configuration de Yodeck affichait un écran de bienvenue demandant la configuration du réseau. Nous avons sélectionné le réseau WiFi disponible, entré le mot de passe, et attendu que le Raspberry Pi se connecte.
            </p>
            <img src="/cyber-portfolio/4.png" alt="Écran de configuration réseau Yodeck" className="w-full rounded-lg border border-accent/30 my-4" />

            <h3 className="text-2xl font-semibold text-accent/80 mt-6">6.3 Activation et Enregistrement du Compte Yodeck</h3>
            <p className="text-base leading-relaxed text-foreground/90">
              Pour activer le Raspberry Pi en tant que client Yodeck, l'interface de configuration affichait un code d'enregistrement unique pour cet appareil. Nous avons utilisé ce code pour enregistrer l'appareil auprès du compte Yodeck via le site web. Une fois enregistré, l'appareil était lié au compte et pouvait recevoir des mises à jour de contenu.
            </p>
            <img src="/cyber-portfolio/5.png" alt="Code d'enregistrement Yodeck sur l'écran" className="w-full rounded-lg border border-accent/30 my-4" />

            <h3 className="text-2xl font-semibold text-accent/80 mt-6">6.4 Affichage du Contenu Dynamique</h3>
            <p className="text-base leading-relaxed text-foreground/90">
              Une fois l'appareil enregistré et connecté, il était prêt à afficher du contenu dynamique. Nous avons configuré plusieurs types de contenu depuis le tableau de bord Yodeck, notamment la météo en temps réel pour Dieppe, NB et un flux RSS personnalisé.
            </p>
            <img src="/cyber-portfolio/6.png" alt="Configuration de l'application météo Yodeck" className="w-full rounded-lg border border-accent/30 my-4" />
            <img src="/cyber-portfolio/7.png" alt="Configuration du flux RSS personnalisé" className="w-full rounded-lg border border-accent/30 my-4" />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-accent">7. Résultats et Validation du Système</h2>
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-base leading-relaxed text-foreground/90">
              Le projet Yodeck a été complété avec succès. Le Raspberry Pi 4 exécutait l'application Yodeck de manière stable et fiable, affichant le contenu configuré sur l'écran HDMI. Le système était capable de recevoir des mises à jour de contenu en temps réel et de les afficher sans interruption.
            </p>
            <p className="text-base leading-relaxed text-foreground/90">
              Les résultats de validation ont confirmé que tous les objectifs du projet avaient été atteints. Le système fonctionnait correctement en environnement virtuel et en déploiement physique. La connectivité réseau était stable, et le contenu s'affichait correctement sur l'écran.
            </p>
            <img src="/cyber-portfolio/8.png" alt="Affichage final : météo et actualités en temps réel" className="w-full rounded-lg border border-accent/30 my-4" />
            <p className="text-base leading-relaxed text-foreground/90">
              L'affichage final montrait en temps réel la météo de Dieppe, NB (7°C, nuageux) avec les prévisions sur plusieurs jours, l'heure actuelle, et les dernières actualités via le flux RSS. Ce résultat démontre parfaitement la puissance et la flexibilité de la solution Yodeck.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-accent">8. Défis Rencontrés et Solutions Apportées</h2>
          <div className="prose prose-invert max-w-none space-y-6">
            <h3 className="text-2xl font-semibold text-accent/80 mt-6">8.1 Défi : Compatibilité du Matériel</h3>
            <p className="text-base leading-relaxed text-foreground/90">
              L'un des défis initiaux était de s'assurer que l'image Yodeck était compatible avec le Raspberry Pi 4. Nous avons résolu ce problème en vérifiant la compatibilité avant le déploiement et en utilisant l'image spécifique pour le Raspberry Pi 4.
            </p>

            <h3 className="text-2xl font-semibold text-accent/80 mt-6">8.2 Défi : Configuration Réseau</h3>
            <p className="text-base leading-relaxed text-foreground/90">
              La configuration du WiFi a nécessité une attention particulière pour s'assurer que le Raspberry Pi se connectait au bon réseau et que la qualité du signal était suffisante. Nous avons résolu ce problème en testant la connectivité WiFi dans différents emplacements.
            </p>

            <h3 className="text-2xl font-semibold text-accent/80 mt-6">8.3 Défi : Gestion de la Puissance</h3>
            <p className="text-base leading-relaxed text-foreground/90">
              Le Raspberry Pi 4 consomme jusqu'à 15 watts sous charge complète, ce qui nécessite une alimentation appropriée. Nous avons utilisé une alimentation USB-C de haute qualité capable de fournir au moins 3 ampères.
            </p>

            <h3 className="text-2xl font-semibold text-accent/80 mt-6">8.4 Défi : Performance et Stabilité</h3>
            <p className="text-base leading-relaxed text-foreground/90">
              Nous avons résolu les problèmes de performance en optimisant les paramètres du système, en utilisant une carte SD haute performance, et en testant le système avec différents types de contenu.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-accent">9. Apprentissages et Compétences Acquises</h2>
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-base leading-relaxed text-foreground/90">
              Ce projet a fourni une expérience pratique précieuse dans plusieurs domaines clés. Nous avons acquis une compréhension approfondie de la virtualisation, du déploiement de systèmes embarqués, et de la gestion de contenu numérique.
            </p>
            <p className="text-base leading-relaxed text-foreground/90">
              Nous avons appris comment utiliser efficacement les outils de virtualisation pour tester et valider les systèmes avant le déploiement en production, et acquis une expérience pratique avec les systèmes embarqués, en particulier le Raspberry Pi.
            </p>
            <p className="text-base leading-relaxed text-foreground/90">
              Nous avons également développé des compétences en résolution de problèmes et en débogage, en identifiant et en résolvant les défis techniques rencontrés lors du déploiement du système.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-accent">10. Applications Pratiques et Cas d'Usage</h2>
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-base leading-relaxed text-foreground/90">
              Le système d'affichage dynamique Yodeck peut être utilisé dans une variété de contextes : dans les environnements éducatifs pour afficher les horaires des cours et les annonces importantes, dans les environnements commerciaux pour afficher les promotions et les menus, et dans les hôpitaux pour afficher les informations de salle d'attente.
            </p>
            <p className="text-base leading-relaxed text-foreground/90">
              La flexibilité et la scalabilité du système Yodeck le rendent adapté à pratiquement n'importe quel contexte où l'affichage dynamique de contenu est utile. La capacité à gérer des centaines d'écrans à partir d'une seule interface le rend extrêmement efficace et rentable.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-accent">11. Conclusion</h2>
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-base leading-relaxed text-foreground/90">
              Le Projet Yodeck a démontré avec succès comment les technologies modernes peuvent être intégrées pour créer des solutions d'affichage dynamique pratiques et efficaces. En combinant la puissance du Raspberry Pi 4, la flexibilité de la plateforme Yodeck, et une approche méthodique de virtualisation et de déploiement, nous avons créé un système capable d'afficher du contenu dynamique en temps réel.
            </p>
            <p className="text-base leading-relaxed text-foreground/90">
              Ce projet a également illustré l'importance de tester les systèmes en environnement virtuel avant le déploiement en production. Cette approche a minimisé les risques et assuré que le système fonctionnait correctement dès le déploiement physique.
            </p>
            <p className="text-base leading-relaxed text-foreground/90">
              Les compétences et les connaissances acquises lors de ce projet sont directement applicables à de nombreux domaines de l'informatique. Que ce soit dans le déploiement de systèmes embarqués, la virtualisation, ou la gestion de contenu numérique, les principes utilisés dans ce projet sont fondamentaux pour le succès dans l'industrie IT moderne.
            </p>
          </div>
        </section>

        <div className="mt-12 pt-8 border-t border-border">
          <button
            onClick={() => setLocation("/")}
            className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour au Portfolio
          </button>
        </div>
      </main>
    </div>
  );
}
