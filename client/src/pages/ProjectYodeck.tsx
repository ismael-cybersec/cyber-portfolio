import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

export default function ProjectYodeck() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
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

      {/* Main Content */}
      <main className="container py-12 max-w-4xl">
        {/* Header */}
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
        </div>

        {/* Section 1: Vue d'Ensemble du Projet */}
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
              Le système Yodeck offre plusieurs avantages significatifs par rapport aux solutions d'affichage traditionnelles. Premièrement, il permet une gestion centralisée du contenu depuis n'importe quel endroit avec une connexion Internet. Deuxièmement, il supporte une large gamme de formats de contenu, y compris les images, vidéos, flux RSS, et pages web. Troisièmement, il offre une scalabilité exceptionnelle, permettant de gérer des centaines d'écrans à partir d'une seule interface de contrôle.
            </p>
          </div>
        </section>

        {/* Section 2: Contexte et Motivation */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-accent">2. Contexte et Motivation du Projet</h2>
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-base leading-relaxed text-foreground/90">
              Dans le contexte éducatif actuel, les institutions ont besoin de solutions d'affichage modernes pour communiquer efficacement avec les étudiants, le personnel et les visiteurs. Les tableaux d'affichage traditionnels sont statiques et nécessitent une mise à jour manuelle, ce qui est inefficace et coûteux en termes de temps et de ressources. Le projet Yodeck répond à ce besoin en fournissant une solution numérique flexible et évolutive.
            </p>
            <p className="text-base leading-relaxed text-foreground/90">
              La motivation derrière ce projet était d'explorer comment les technologies embarquées modernes, comme le Raspberry Pi, peuvent être utilisées pour créer des solutions professionnelles d'affichage. Le Raspberry Pi 4 offre un excellent rapport performance/coût, consomme très peu d'énergie, et dispose d'une communauté active de développeurs. Ces caractéristiques en font une plateforme idéale pour les projets d'affichage dynamique.
            </p>
            <p className="text-base leading-relaxed text-foreground/90">
              De plus, ce projet illustre l'importance de la virtualisation dans le processus de développement et de test. En testant d'abord le système dans un environnement virtuel avant le déploiement physique, nous avons pu identifier et résoudre les problèmes potentiels sans risquer d'endommager le matériel réel. Cette approche est une meilleure pratique dans l'industrie IT et démontre une compréhension approfondie des cycles de développement logiciel.
            </p>
          </div>
        </section>

        {/* Section 3: Outils et Matériel Utilisés */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-accent">3. Outils et Matériel Utilisés</h2>
          <div className="prose prose-invert max-w-none space-y-6">
            <h3 className="text-2xl font-semibold text-accent/80 mt-6">3.1 Matériel Physique</h3>
            <p className="text-base leading-relaxed text-foreground/90">
              Le cœur du système repose sur le Raspberry Pi 4, un ordinateur monocarte extrêmement puissant pour sa taille et son coût. Le Raspberry Pi 4 dispose d'un processeur ARM Cortex-A72 quad-core cadencé à 1,5 GHz, de 4 Go à 8 Go de RAM, et de connectivité Gigabit Ethernet ainsi que WiFi 802.11ac. Cette configuration offre des performances suffisantes pour exécuter Yodeck et gérer l'affichage de contenu multimédia complexe.
            </p>
            <p className="text-base leading-relaxed text-foreground/90">
              La carte SD joue un rôle crucial dans le système, servant de stockage principal pour le système d'exploitation et l'application Yodeck. Nous avons utilisé une carte SD de haute capacité (généralement 32 Go ou plus) pour assurer suffisamment d'espace pour le système d'exploitation, l'application Yodeck, et le cache de contenu. La vitesse de la carte SD est également importante, car elle affecte directement les performances de démarrage et de chargement du système.
            </p>
            <p className="text-base leading-relaxed text-foreground/90">
              Le lecteur de carte SD est un périphérique externe utilisé pour écrire l'image du système d'exploitation sur la carte SD. Cet outil est essentiel lors de la configuration initiale du Raspberry Pi, car il permet de flasher l'image Yodeck directement sur la carte SD depuis un ordinateur de bureau ou portable.
            </p>

            <h3 className="text-2xl font-semibold text-accent/80 mt-6">3.2 Infrastructure Logicielle</h3>
            <p className="text-base leading-relaxed text-foreground/90">
              Pour la phase de test en environnement virtuel, nous avons utilisé Proxmox VE, une plateforme de virtualisation open-source basée sur KVM et LXC. Proxmox offre une interface web intuitive pour gérer les machines virtuelles et les conteneurs, ce qui facilite grandement le processus de test et de développement. Nous avons créé une machine virtuelle Ubuntu Server 20.04 LTS pour simuler l'environnement de production avant le déploiement sur le Raspberry Pi physique.
            </p>
            <p className="text-base leading-relaxed text-foreground/90">
              Ubuntu Server a été choisi comme système d'exploitation pour la machine virtuelle en raison de sa stabilité, de sa sécurité, et de sa large adoption dans les environnements de production. Ubuntu Server est une distribution Linux légère et efficace, idéale pour les serveurs et les systèmes embarqués. Elle offre également un excellent support pour les outils de virtualisation et les applications cloud-native.
            </p>
            <p className="text-base leading-relaxed text-foreground/90">
              Yodeck lui-même est une application web basée sur le cloud qui gère l'affichage de contenu sur les appareils clients. L'application Yodeck s'exécute sur le Raspberry Pi et communique avec les serveurs Yodeck dans le cloud pour récupérer les mises à jour de contenu et envoyer les informations de statut de l'appareil.
            </p>

            <h3 className="text-2xl font-semibold text-accent/80 mt-6">3.3 Outils de Flashage et de Configuration</h3>
            <p className="text-base leading-relaxed text-foreground/90">
              balenaEtcher est un outil de flashage de carte SD open-source qui simplifie considérablement le processus d'écriture d'images sur des cartes SD. L'interface graphique intuitive de balenaEtcher permet même aux utilisateurs non techniques de flasher correctement une image sur une carte SD en quelques clics. L'outil offre également des fonctionnalités de validation pour s'assurer que l'image a été écrite correctement sans corruption de données.
            </p>
            <p className="text-base leading-relaxed text-foreground/90">
              L'application Yodeck elle-même fournit une interface web pour la configuration initiale de l'appareil. Cette interface permet de configurer les paramètres réseau, de connecter l'appareil à un compte Yodeck, et de commencer à recevoir des mises à jour de contenu.
            </p>
          </div>
        </section>

        {/* Section 4: Étape 1 - Test en Environnement Virtuel */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-accent">4. Étape 1 : Essai du Projet dans un Environnement Virtuel</h2>
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-base leading-relaxed text-foreground/90">
              La première étape du projet consistait à tester l'application Yodeck dans un environnement virtuel avant de la déployer sur le matériel Raspberry Pi physique. Cette approche méthodique nous a permis de valider la configuration du système, de tester les procédures d'installation, et de résoudre les problèmes potentiels dans un environnement contrôlé.
            </p>
            <p className="text-base leading-relaxed text-foreground/90">
              Nous avons créé une machine virtuelle Ubuntu Server 20.04 LTS sur Proxmox VE avec les spécifications suivantes : 2 processeurs virtuels, 2 Go de RAM, et 20 Go d'espace disque. Cette configuration était suffisante pour tester Yodeck et valider que l'application fonctionnait correctement dans un environnement Linux standard.
            </p>
            <p className="text-base leading-relaxed text-foreground/90">
              L'avantage principal de cette approche de virtualisation est qu'elle nous a permis de tester rapidement différentes configurations sans risquer d'endommager le matériel physique. De plus, les machines virtuelles peuvent être sauvegardées et restaurées facilement, ce qui facilite le processus de débogage et d'itération.
            </p>
            <p className="text-base leading-relaxed text-foreground/90">
              Pendant cette phase, nous avons pu vérifier que tous les composants du système fonctionnaient correctement ensemble, que la connectivité réseau était établie, et que l'application Yodeck pouvait se connecter aux serveurs Yodeck dans le cloud pour récupérer les mises à jour de contenu.
            </p>
          </div>
        </section>

        {/* Section 5: Étape 2 - Déploiement du Software Yodeck */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-accent">5. Étape 2 : Déploiement du Software Yodeck sur le Raspberry Pi</h2>
          <div className="prose prose-invert max-w-none space-y-6">
            <h3 className="text-2xl font-semibold text-accent/80 mt-6">5.1 Téléchargement du Firmware Yodeck</h3>
            <p className="text-base leading-relaxed text-foreground/90">
              La première étape du déploiement physique consistait à télécharger le firmware Yodeck depuis le site officiel de Yodeck. Le firmware est fourni sous la forme d'une image ISO compressée qui contient le système d'exploitation Linux optimisé pour Yodeck, l'application Yodeck elle-même, et tous les dépendances nécessaires pour faire fonctionner le système.
            </p>
            <p className="text-base leading-relaxed text-foreground/90">
              Le processus de téléchargement est simple et direct : nous avons accédé au site web de Yodeck, navigué vers la section de téléchargement, et sélectionné l'image appropriée pour le Raspberry Pi 4. Le fichier ISO téléchargé était compressé au format ZIP pour réduire la taille du fichier et accélérer le téléchargement.
            </p>

            <h3 className="text-2xl font-semibold text-accent/80 mt-6">5.2 Décompression du Fichier ISO</h3>
            <p className="text-base leading-relaxed text-foreground/90">
              Après le téléchargement, nous avons décompressé le fichier ZIP pour obtenir l'image ISO. Cette étape était nécessaire car les fichiers ISO ne peuvent pas être flashés directement sur une carte SD s'ils sont compressés. Nous avons utilisé un gestionnaire d'archives standard pour extraire le fichier ISO du fichier ZIP.
            </p>
            <p className="text-base leading-relaxed text-foreground/90">
              La décompression a produit deux fichiers : l'image ISO principale (environ 3,4 Go) et un fichier compressé ZIP supplémentaire. L'image ISO principale était le fichier que nous allions flasher sur la carte SD.
            </p>

            <h3 className="text-2xl font-semibold text-accent/80 mt-6">5.3 Flashage de la Carte SD avec balenaEtcher</h3>
            <p className="text-base leading-relaxed text-foreground/90">
              Avec l'image ISO décompressée, nous avons utilisé balenaEtcher pour flasher l'image sur la carte SD. Le processus était simple et sécurisé : nous avons lancé balenaEtcher, sélectionné l'image ISO, choisi la carte SD comme destination, et cliqué sur le bouton "Flash". balenaEtcher a ensuite écrit l'image sur la carte SD et validé l'intégrité des données.
            </p>
            <p className="text-base leading-relaxed text-foreground/90">
              balenaEtcher offre plusieurs avantages par rapport aux outils de flashage traditionnels. Premièrement, il détecte automatiquement les cartes SD connectées et prévient les erreurs d'écriture sur les mauvais appareils. Deuxièmement, il valide l'intégrité des données après l'écriture pour s'assurer que l'image a été flashée correctement. Troisièmement, il offre une interface graphique intuitive qui rend le processus accessible même aux utilisateurs non techniques.
            </p>
            <p className="text-base leading-relaxed text-foreground/90">
              Le processus de flashage a pris environ 10-15 minutes, selon la vitesse de la carte SD et du lecteur de carte SD. Une fois le flashage terminé, nous avions une carte SD prête à être utilisée dans le Raspberry Pi 4.
            </p>
          </div>
        </section>

        {/* Section 6: Étape 3 - Installation et Configuration */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-accent">6. Étape 3 : Installation de Yodeck sur Raspberry Pi</h2>
          <div className="prose prose-invert max-w-none space-y-6">
            <h3 className="text-2xl font-semibold text-accent/80 mt-6">6.1 Configuration Matérielle Initiale</h3>
            <p className="text-base leading-relaxed text-foreground/90">
              Avec la carte SD flashée, nous avons procédé à la configuration matérielle du Raspberry Pi 4. Cela impliquait de connecter les câbles HDMI pour l'affichage, de brancher le câble Ethernet pour la connectivité réseau, et de connecter l'alimentation. Le Raspberry Pi 4 a démarré automatiquement et a commencé à exécuter le système d'exploitation Yodeck.
            </p>
            <p className="text-base leading-relaxed text-foreground/90">
              Le premier démarrage du Raspberry Pi a pris environ 2-3 minutes, car le système d'exploitation effectuait une initialisation complète et configurait les paramètres du système. Pendant ce temps, l'écran affichait des messages de démarrage et des informations de statut.
            </p>

            <h3 className="text-2xl font-semibold text-accent/80 mt-6">6.2 Configuration Réseau et WiFi</h3>
            <p className="text-base leading-relaxed text-foreground/90">
              Une fois le système d'exploitation démarré, nous avons configuré la connectivité réseau. Le Raspberry Pi était initialement connecté via Ethernet, ce qui fournissait une connexion réseau stable. Cependant, pour une flexibilité maximale, nous avons également configuré la connectivité WiFi.
            </p>
            <p className="text-base leading-relaxed text-foreground/90">
              L'interface de configuration de Yodeck affichait un écran de bienvenue demandant la configuration du réseau. Nous avons sélectionné le réseau WiFi disponible, entré le mot de passe, et attendu que le Raspberry Pi se connecte. Une fois connecté, le système affichait une adresse IP et était prêt pour la configuration suivante.
            </p>

            <h3 className="text-2xl font-semibold text-accent/80 mt-6">6.3 Activation et Enregistrement du Compte Yodeck</h3>
            <p className="text-base leading-relaxed text-foreground/90">
              Pour activer le Raspberry Pi en tant que client Yodeck, nous avons dû l'enregistrer auprès d'un compte Yodeck. L'interface de configuration affichait un code QR unique pour cet appareil. Nous avons scanné ce code QR avec un smartphone ou une tablette, ce qui nous a dirigés vers le site web de Yodeck pour l'enregistrement.
            </p>
            <p className="text-base leading-relaxed text-foreground/90">
              Alternativement, nous aurions pu utiliser le code d'activation unique fourni par l'interface pour enregistrer l'appareil manuellement. Une fois l'appareil enregistré, il était lié au compte Yodeck et pouvait recevoir des mises à jour de contenu depuis le tableau de bord Yodeck.
            </p>

            <h3 className="text-2xl font-semibold text-accent/80 mt-6">6.4 Affichage du Contenu Dynamique</h3>
            <p className="text-base leading-relaxed text-foreground/90">
              Une fois l'appareil enregistré et connecté, il était prêt à afficher du contenu dynamique. L'écran HDMI connecté au Raspberry Pi affichait maintenant le contenu configuré dans le tableau de bord Yodeck. Ce contenu pouvait être des images, des vidéos, des flux RSS, ou des pages web.
            </p>
            <p className="text-base leading-relaxed text-foreground/90">
              L'avantage clé de cette configuration était que nous pouvions maintenant mettre à jour le contenu affiché à partir de n'importe quel endroit avec une connexion Internet. Il suffisait de se connecter au tableau de bord Yodeck, de modifier le contenu, et les changements s'affichaient automatiquement sur l'écran du Raspberry Pi en quelques secondes.
            </p>
          </div>
        </section>

        {/* Section 7: Résultats et Validation */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-accent">7. Résultats et Validation du Système</h2>
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-base leading-relaxed text-foreground/90">
              Le projet Yodeck a été complété avec succès, et le système d'affichage dynamique était maintenant opérationnel. Le Raspberry Pi 4 exécutait l'application Yodeck de manière stable et fiable, affichant le contenu configuré sur l'écran HDMI. Le système était capable de recevoir des mises à jour de contenu en temps réel et de les afficher sans interruption.
            </p>
            <p className="text-base leading-relaxed text-foreground/90">
              Les résultats de validation ont confirmé que tous les objectifs du projet avaient été atteints. Le système fonctionnait correctement en environnement virtuel et en déploiement physique. La connectivité réseau était stable, l'application Yodeck communiquait correctement avec les serveurs cloud, et le contenu s'affichait correctement sur l'écran.
            </p>
            <p className="text-base leading-relaxed text-foreground/90">
              De plus, nous avons testé la capacité du système à gérer différents types de contenu, y compris les images statiques, les vidéos, et les pages web. Tous les types de contenu s'affichaient correctement et se mettaient à jour en temps réel lorsque des modifications étaient apportées via le tableau de bord Yodeck.
            </p>
          </div>
        </section>

        {/* Section 8: Défis et Solutions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-accent">8. Défis Rencontrés et Solutions Apportées</h2>
          <div className="prose prose-invert max-w-none space-y-6">
            <h3 className="text-2xl font-semibold text-accent/80 mt-6">8.1 Défi : Compatibilité du Matériel</h3>
            <p className="text-base leading-relaxed text-foreground/90">
              L'un des défis initiaux était de s'assurer que l'image Yodeck était compatible avec le Raspberry Pi 4. Bien que Yodeck soit conçu pour fonctionner sur le Raspberry Pi, il existe plusieurs variantes du Raspberry Pi avec des configurations matérielles différentes. Nous avons résolu ce problème en vérifiant la compatibilité avant le déploiement et en utilisant l'image spécifique pour le Raspberry Pi 4.
            </p>

            <h3 className="text-2xl font-semibold text-accent/80 mt-6">8.2 Défi : Configuration Réseau</h3>
            <p className="text-base leading-relaxed text-foreground/90">
              Un autre défi était de configurer correctement la connectivité réseau du Raspberry Pi. Bien que la connexion Ethernet ait fonctionné sans problème, la configuration du WiFi a nécessité une attention particulière pour s'assurer que le Raspberry Pi se connectait au bon réseau et que la qualité du signal était suffisante. Nous avons résolu ce problème en testant la connectivité WiFi dans différents emplacements et en optimisant le placement du Raspberry Pi pour une meilleure réception du signal.
            </p>

            <h3 className="text-2xl font-semibold text-accent/80 mt-6">8.3 Défi : Gestion de la Puissance</h3>
            <p className="text-base leading-relaxed text-foreground/90">
              La gestion de la puissance était également un défi important. Le Raspberry Pi 4 consomme jusqu'à 15 watts sous charge complète, ce qui nécessite une alimentation appropriée. Nous avons utilisé une alimentation USB-C de haute qualité capable de fournir au moins 3 ampères pour assurer une alimentation stable et fiable du Raspberry Pi.
            </p>

            <h3 className="text-2xl font-semibold text-accent/80 mt-6">8.4 Défi : Performance et Stabilité</h3>
            <p className="text-base leading-relaxed text-foreground/90">
              Un dernier défi était de s'assurer que le système restait stable et performant lors de l'affichage de contenu multimédia complexe. Nous avons résolu ce problème en optimisant les paramètres du système, en utilisant une carte SD haute performance, et en testant le système avec différents types de contenu pour identifier et résoudre les goulots d'étranglement potentiels.
            </p>
          </div>
        </section>

        {/* Section 9: Apprentissages et Compétences Acquises */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-accent">9. Apprentissages et Compétences Acquises</h2>
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-base leading-relaxed text-foreground/90">
              Ce projet a fourni une expérience pratique précieuse dans plusieurs domaines clés de l'informatique et de l'ingénierie des systèmes. Nous avons acquis une compréhension approfondie de la virtualisation, du déploiement de systèmes embarqués, et de la gestion de contenu numérique.
            </p>
            <p className="text-base leading-relaxed text-foreground/90">
              Premièrement, nous avons appris comment utiliser efficacement les outils de virtualisation pour tester et valider les systèmes avant le déploiement en production. Cette compétence est extrêmement précieuse dans l'industrie IT, où les erreurs de déploiement peuvent avoir des conséquences coûteuses.
            </p>
            <p className="text-base leading-relaxed text-foreground/90">
              Deuxièmement, nous avons acquis une expérience pratique avec les systèmes embarqués, en particulier le Raspberry Pi. Nous avons appris comment configurer, déployer et maintenir des systèmes embarqués dans des environnements réels, ce qui est une compétence de plus en plus demandée dans l'industrie.
            </p>
            <p className="text-base leading-relaxed text-foreground/90">
              Troisièmement, nous avons compris comment les systèmes d'affichage dynamique modernes fonctionnent et comment ils peuvent être utilisés pour améliorer la communication et l'engagement dans les environnements commerciaux et éducatifs.
            </p>
            <p className="text-base leading-relaxed text-foreground/90">
              Enfin, nous avons développé des compétences en résolution de problèmes et en débogage, en identifiant et en résolvant les défis techniques rencontrés lors du déploiement du système.
            </p>
          </div>
        </section>

        {/* Section 10: Applications Pratiques et Cas d'Usage */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-accent">10. Applications Pratiques et Cas d'Usage</h2>
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-base leading-relaxed text-foreground/90">
              Le système d'affichage dynamique Yodeck peut être utilisé dans une variété de contextes et d'applications pratiques. Dans les environnements éducatifs, il peut être utilisé pour afficher les horaires des cours, les annonces importantes, et les informations de campus. Dans les environnements commerciaux, il peut être utilisé pour afficher les promotions, les menus de restaurants, et les informations de produits.
            </p>
            <p className="text-base leading-relaxed text-foreground/90">
              Les hôpitaux et les cliniques peuvent utiliser le système pour afficher les informations de salle d'attente, les numéros de patients, et les informations de santé. Les aéroports et les gares peuvent l'utiliser pour afficher les horaires de départ et d'arrivée, et les informations de porte. Les magasins de détail peuvent l'utiliser pour afficher les prix, les promotions, et les informations de produits.
            </p>
            <p className="text-base leading-relaxed text-foreground/90">
              La flexibilité et la scalabilité du système Yodeck le rendent adapté à pratiquement n'importe quel contexte où l'affichage dynamique de contenu est utile. La capacité à gérer des centaines d'écrans à partir d'une seule interface de contrôle rend le système extrêmement efficace et rentable pour les organisations de toutes tailles.
            </p>
          </div>
        </section>

        {/* Section 11: Conclusion */}
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
              Les compétences et les connaissances acquises lors de ce projet sont directement applicables à de nombreux domaines de l'informatique et de l'ingénierie des systèmes. Que ce soit dans le déploiement de systèmes embarqués, la virtualisation, ou la gestion de contenu numérique, les principes et les pratiques utilisés dans ce projet sont fondamentaux pour le succès dans l'industrie IT moderne.
            </p>
          </div>
        </section>

        {/* Back Button */}
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
