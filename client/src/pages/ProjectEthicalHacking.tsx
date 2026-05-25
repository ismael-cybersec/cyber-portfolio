import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function ProjectEthicalHacking() {
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
          <h1 className="text-4xl font-bold text-accent mb-4">Projet d'Ethical Hacking</h1>
          <p className="text-lg text-muted-foreground">Tests de Pénétration Avancés et Exploitation de Vulnérabilités</p>
        </div>

        {/* Introduction */}
        <section className="mb-12 space-y-4">
          <h2 className="text-2xl font-bold text-accent">Introduction</h2>
          <p className="text-justify leading-relaxed">
            Ce projet d'ethical hacking représente une étude complète et pratique des techniques de test de pénétration, de reconnaissance active, d'identification de vulnérabilités et d'exploitation. À travers une série d'étapes structurées et progressives, nous avons exploré les techniques avancées de découverte de machines, d'énumération détaillée des services, d'identification des vulnérabilités critiques, de campagnes de phishing sophistiquées et d'analyse approfondie du trafic réseau. Ce projet documente les procédures détaillées, les découvertes techniques précises et les résultats obtenues lors de ce test de pénétration complet.
          </p>
        </section>

        {/* ÉTAPE 1 */}
        <section className="mb-12 space-y-6">
          <h2 className="text-2xl font-bold text-accent">ÉTAPE 1 : RECONNAISSANCE ACTIVE ET CARTOGRAPHIE DU RÉSEAU</h2>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-accent">1.1 DÉCOUVERTE DES MACHINES SUR LE RÉSEAU CIBLE</h3>
            <p className="text-justify leading-relaxed">
              La première étape critique de tout test de pénétration professionnel consiste à découvrir et cartographier toutes les machines actives sur le réseau cible. Cette phase de reconnaissance passive et active fournit une vue d'ensemble complète de l'infrastructure réseau. Pour ce faire, nous avons utilisé Nmap (Network Mapper) avec un scan de découverte ICMP ping sur le sous-réseau cible 192.168.100.0/24. Cette technique envoie des pings ICMP (Internet Control Message Protocol) à toutes les adresses IP du sous-réseau pour identifier les hôtes actifs et réactifs.
            </p>
            <p className="text-justify leading-relaxed">
              <strong>Méthodologie :</strong> Le scan ICMP ping est une technique non-intrusive qui permet une découverte rapide des machines actives sans déclencher les alarmes des systèmes de détection d'intrusion. Contrairement aux scans de ports bruyants, le ping ICMP génère un trafic réseau minimal et passe souvent inaperçu par les pare-feu et les systèmes de détection.
            </p>
            <p className="text-justify leading-relaxed">
              Les résultats de la découverte ont révélé la présence de 5 machines actives et réactives sur le réseau cible. Chacune de ces machines a été identifiée avec précision par son adresse IP (IPv4), son adresse MAC (Media Access Control) et son temps de réponse. Cette phase de reconnaissance est absolument cruciale car elle permet au testeur de pénétration de cartographier l'infrastructure réseau, de déterminer les cibles prioritaires et de planifier les phases suivantes du test de pénétration.
            </p>
            <div className="bg-muted p-4 rounded-lg border border-border">
              <p className="text-sm font-mono text-muted-foreground">
                [Espace pour capture d'écran : Résultats du scan Nmap de découverte ICMP ping]
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-accent">1.2 SCAN COMPLET ET ÉNUMÉRATION DÉTAILLÉE DE CHAQUE CIBLE</h3>
            <p className="text-justify leading-relaxed">
              Une fois les machines découvertes et cartographiées, nous avons procédé à un scan complet et détaillé de chaque cible pour identifier avec précision les ports ouverts, les services en cours d'exécution, les versions exactes des logiciels et les systèmes d'exploitation. Cette énumération détaillée est essentielle pour identifier les vulnérabilités potentielles que nous pourrions exploiter lors des phases ultérieures du test de pénétration.
            </p>
            <p className="text-justify leading-relaxed">
              <strong>Technique de scan :</strong> Nous avons utilisé Nmap avec des options avancées incluant la détection du système d'exploitation (-O), la détection des versions de services (-sV), les scripts NSE (Nmap Scripting Engine) pour l'énumération avancée, et les options d'optimisation pour un scan rapide mais complet.
            </p>

            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">1.2.1 Scan Détaillé de Metasploitable (192.168.100.20)</h4>
              <p className="text-justify leading-relaxed">
                Metasploitable est une distribution Linux intentionnellement vulnérable, spécialement conçue à des fins de formation, d'apprentissage et de test de pénétration. Cette machine contient délibérément de nombreuses vulnérabilités connues et non patchées pour permettre aux étudiants et aux professionnels de la sécurité de pratiquer les techniques d'exploitation dans un environnement contrôlé et légal. Le scan complet de cette machine a révélé un nombre exceptionnellement élevé de ports ouverts et de services vulnérables, confirmant son statut de cible idéale pour la formation.
              </p>
              <div className="bg-muted p-4 rounded-lg border border-border">
                <p className="text-sm font-mono text-muted-foreground">
                  [Espace pour capture d'écran : Résultats du scan Nmap complet pour Metasploitable]
                </p>
              </div>
              <p className="text-justify leading-relaxed">
                <strong>Ports ouverts et services détectés (liste complète) :</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                <li>21/tcp - FTP - vsftpd 2.3.4 (Connexion anonyme autorisée - CRITIQUE)</li>
                <li>22/tcp - SSH - OpenSSH 4.7p1 (Authentification par mot de passe possible)</li>
                <li>23/tcp - Telnet - Linux telnetd (Transmission en clair - CRITIQUE)</li>
                <li>25/tcp - SMTP - Postfix smtpd (Relai SMTP possible)</li>
                <li>53/tcp - DNS - ISC BIND 9.4.2 (Zone transfer possible)</li>
                <li>80/tcp - HTTP - Apache httpd 2.2.8 (Plusieurs vulnérabilités web)</li>
                <li>111/tcp - RPC - rpcbind (Énumération RPC possible)</li>
                <li>139/tcp - NetBIOS - Samba smbd 3.X 4.X (Partages réseau énumérables)</li>
                <li>445/tcp - SMB - Samba smbd 3.0.20 (Vulnérabilités SMB critiques)</li>
                <li>512/tcp - exec (Commandes distantes sans authentification)</li>
                <li>513/tcp - login (Connexion distante sans authentification)</li>
                <li>514/tcp - shell (Shell distant sans authentification)</li>
                <li>1099/tcp - Java RMI (Accès à l'interface RMI Java)</li>
                <li>1524/tcp - ingreslock (Shell root direct - CRITIQUE)</li>
                <li>2049/tcp - NFS (Partages NFS énumérables)</li>
                <li>2121/tcp - FTP - ProFTPD 1.3.1 (Vulnérabilités ProFTPD)</li>
                <li>3306/tcp - MySQL - 5.0.51a (Accès à la base de données)</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">1.2.2 Scan Détaillé de OWASP BWA (192.168.100.30)</h4>
              <p className="text-justify leading-relaxed">
                OWASP BWA (Broken Web Applications) est une machine Linux spécialement conçue pour contenir des applications web intentionnellement vulnérables. Cette machine inclut plusieurs applications web populaires avec des vulnérabilités délibérément introduites pour permettre l'apprentissage des techniques d'exploitation web. Le scan détaillé a révélé un système Linux 2.6.x avec plusieurs services web et de base de données actifs.
              </p>
              <div className="bg-muted p-4 rounded-lg border border-border">
                <p className="text-sm font-mono text-muted-foreground">
                  [Espace pour capture d'écran : Résultats du scan Nmap complet pour OWASP BWA]
                </p>
              </div>
              <p className="text-justify leading-relaxed">
                <strong>Système d'exploitation détecté :</strong> Linux 2.6.17 - 2.6.30 (noyau Linux hérité avec vulnérabilités kernel)
              </p>
              <p className="text-justify leading-relaxed">
                <strong>Services principaux détectés et analysés :</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                <li>Port 22/tcp - SSH - OpenSSH 5.3p1 (Accès distant sécurisé, mais version vulnérable)</li>
                <li>Port 80/tcp - HTTP - Apache 2.2.14 (Site principal OWASP avec applications web vulnérables)</li>
                <li>Port 139/tcp - SMB - Samba 3.X-4.X (Partages réseau énumérables)</li>
                <li>Port 143/tcp - IMAP - Courrier Imap4 (Service de messagerie)</li>
                <li>Port 443/tcp - HTTPS - Apache 2.2.14 (Site sécurisé OWASP)</li>
                <li>Port 5001/tcp - Java - Serialization (Service Java avec sérialisation)</li>
                <li>Port 8080/tcp - HTTP - Apache Tomcat (Applications JSP vulnérables)</li>
                <li>Port 8081/tcp - HTTP - Jetty 6.1.25 (Serveur web Jetty avec applications)</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">1.2.3 Scan Détaillé de Windows XP (192.168.100.40)</h4>
              <p className="text-justify leading-relaxed">
                Windows XP est un système d'exploitation hérité lancé en 2001 et n'ayant plus de support officiel depuis 2014. Ce système est connu pour contenir un nombre exceptionnellement élevé de vulnérabilités critiques non patchées. Le scan détaillé de cette machine a révélé plusieurs ports ouverts et services potentiellement exploitables. Windows XP reste une cible privilégiée pour les testeurs de pénétration en raison de ses nombreuses vulnérabilités bien documentées et facilement exploitables.
              </p>
              <div className="bg-muted p-4 rounded-lg border border-border">
                <p className="text-sm font-mono text-muted-foreground">
                  [Espace pour capture d'écran : Résultats du scan Nmap complet pour Windows XP]
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">1.2.4 Scan Détaillé de Windows 7 (192.168.100.50)</h4>
              <p className="text-justify leading-relaxed">
                Windows 7 est un système d'exploitation plus moderne que Windows XP, lancé en 2009 avec des améliorations de sécurité significatives. Cependant, Windows 7 n'a également plus de support officiel depuis janvier 2020 et peut toujours contenir des vulnérabilités non patchées. Le scan détaillé a révélé les services et ports ouverts sur cette machine, offrant des opportunités d'exploitation potentielles.
              </p>
              <div className="bg-muted p-4 rounded-lg border border-border">
                <p className="text-sm font-mono text-muted-foreground">
                  [Espace pour capture d'écran : Résultats du scan Nmap complet pour Windows 7]
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ÉTAPE 2 */}
        <section className="mb-12 space-y-6">
          <h2 className="text-2xl font-bold text-accent">ÉTAPE 2 : IDENTIFICATION ET ANALYSE APPROFONDIE DES VULNÉRABILITÉS</h2>
          <p className="text-justify leading-relaxed">
            Après la phase complète de reconnaissance et d'énumération, nous avons procédé à l'identification systématique et à l'analyse approfondie des vulnérabilités potentielles sur chaque machine cible. Cette phase critique implique l'analyse détaillée des informations collectées pour identifier les failles de sécurité exploitables. Les machines Metasploitable et OWASP BWA contiennent intentionnellement de nombreuses vulnérabilités connues, tandis que Windows XP et Windows 7 contiennent des failles de sécurité critiques non patchées. L'identification précise des vulnérabilités est essentielle pour déterminer quelles cibles peuvent être exploitées et dans quel ordre procéder pour maximiser l'impact du test de pénétration.
          </p>
        </section>

        {/* ÉTAPE 3 */}
        <section className="mb-12 space-y-6">
          <h2 className="text-2xl font-bold text-accent">ÉTAPE 3 : CAMPAGNE DE PHISHING SOPHISTIQUÉE</h2>
          <p className="text-justify leading-relaxed">
            Une campagne de phishing avancée a été lancée pour tester la sensibilisation des utilisateurs à la sécurité et pour démontrer comment les attaquants utilisent l'ingénierie sociale pour obtenir des identifiants d'utilisateurs. GoPhish, un framework open-source de phishing professionnel, a été utilisé pour créer, déployer et suivre la campagne de phishing. Cette campagne a démontré comment les attaquants peuvent contourner les défenses techniques en exploitant la psychologie humaine.
          </p>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent">3.1 Déploiement et Configuration de GoPhish</h3>
            <p className="text-justify leading-relaxed">
              GoPhish est un framework de phishing open-source puissant et flexible qui permet de créer des campagnes de phishing sophistiquées. Après le lancement du service GoPhish, l'interface de gestion web était accessible sur le port 3333. Cette interface fournit un tableau de bord complet pour configurer tous les aspects de la campagne de phishing, y compris les profils d'expéditeur, les modèles d'email, les pages de landing et le suivi des résultats.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent">3.2 CRÉATION DU PROFIL EXPÉDITEUR CRÉDIBLE</h3>
            <p className="text-justify leading-relaxed">
              Un profil d'expéditeur convaincant a été créé pour que les emails de phishing semblent provenir d'une source légitime et de confiance. Cette étape est critique car elle augmente considérablement les chances que les destinataires ouvrent l'email et cliquent sur les liens malveillants. Le profil d'expéditeur inclut l'adresse email spoofée, le nom d'affichage, et d'autres détails qui rendent l'email plus crédible et convaincant.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent">3.3 CRÉATION DU MODÈLE D'EMAIL SOPHISTIQUÉ</h3>
            <p className="text-justify leading-relaxed">
              Un modèle d'email professionnel et convaincant a été créé pour que les messages de phishing ressemblent à des communications légitimes provenant d'une organisation de confiance. Le modèle contient un lien vers la page de phishing qui capture les identifiants des utilisateurs. Le modèle inclut également des éléments de design, des logos, et un texte persuasif qui rendent l'email plus convaincant et augmentent les taux de clics.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent">3.4 CRÉATION DE LA PAGE DE LANDING PAGE CONVAINCANTE</h3>
            <p className="text-justify leading-relaxed">
              Une page de landing page professionnelle a été créée pour capturer les identifiants des utilisateurs. Cette page imite une page de connexion légitime d'une organisation de confiance pour tromper les utilisateurs. La page est hébergée sur un serveur contrôlé par l'attaquant et capture automatiquement tous les identifiants saisis par les utilisateurs victimes.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent">3.5 IMPORTATION ET SEGMENTATION DES CIBLES</h3>
            <p className="text-justify leading-relaxed">
              Les adresses email des cibles ont été importées dans GoPhish et segmentées en groupes pour permettre un suivi détaillé et une analyse granulaire des résultats. Ces cibles recevront les emails de phishing. L'importation peut se faire manuellement ou via un fichier CSV contenant les adresses email.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent">3.6 LANCEMENT ET SUIVI DE LA CAMPAGNE</h3>
            <p className="text-justify leading-relaxed">
              La campagne de phishing a été lancée avec succès. Les emails de phishing ont été envoyés aux cibles, et les résultats ont été suivis en temps réel via l'interface de GoPhish. Les résultats incluent le nombre d'emails envoyés, le nombre d'emails ouverts, le nombre de clics sur les liens, le nombre d'identifiants capturés, et d'autres métriques détaillées.
            </p>
          </div>
        </section>

        {/* ÉTAPE 4 */}
        <section className="mb-12 space-y-6">
          <h2 className="text-2xl font-bold text-accent">ÉTAPE 4 : ANALYSE APPROFONDIE DU TRAFIC RÉSEAU</h2>
          <p className="text-justify leading-relaxed">
            Une capture réseau complète a été effectuée pour analyser en détail le trafic réseau et identifier les identifiants transmis en clair. Cette analyse permet de démontrer les risques critiques de sécurité liés à la transmission de données non chiffrées sur le réseau. L'analyse du fichier de capture réseau (.pcap) révèle les échanges de données détaillés et les informations sensibles qui peuvent être facilement interceptées par les attaquants.
          </p>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent">4.1 Capture et Analyse Détaillée avec Wireshark</h3>
            <p className="text-justify leading-relaxed">
              Le fichier de capture réseau (.pcap) a été analysé en détail avec Wireshark, un analyseur de protocoles réseau puissant et complet. Wireshark permet d'examiner chaque paquet réseau capturé avec ses détails complets, y compris les en-têtes de protocole, les données utiles, et les informations de session. Cela permet d'identifier précisément les échanges de données et les identifiants transmis en clair.
            </p>
            <div className="bg-muted p-4 rounded-lg border border-border">
              <p className="text-sm font-mono text-muted-foreground">
                [Espace pour capture d'écran : Analyse détaillée Wireshark du fichier .pcap]
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent">4.2 Identification des Échanges Contenant des Identifiants</h3>
            <p className="text-justify leading-relaxed">
              L'analyse approfondie du fichier .pcap a révélé les échanges contenant des identifiants en clair. Ces échanges démontrent comment les identifiants peuvent être capturés facilement sur le réseau sans chiffrement. Les protocoles non sécurisés comme HTTP, Telnet et FTP transmettent les identifiants sans aucun chiffrement, ce qui les rend extrêmement vulnérables à l'interception et à l'utilisation malveillante par les attaquants.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent">4.3 Extraction et Documentation des Identifiants</h3>
            <p className="text-justify leading-relaxed">
              Les identifiants complets (nom d'utilisateur et mot de passe) ont été extraits de la capture réseau avec succès. Cette démonstration pratique illustre l'importance critique du chiffrement des données en transit. Les attaquants peuvent facilement intercepter et utiliser les identifiants transmis en clair pour accéder aux systèmes, aux bases de données et aux données sensibles de l'organisation.
            </p>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12 space-y-4">
          <h2 className="text-2xl font-bold text-accent">Conclusion</h2>
          <p className="text-justify leading-relaxed">
            Ce projet d'ethical hacking a démontré avec succès les différentes phases d'un test de pénétration professionnel complet, de la reconnaissance active à l'exploitation finale. Les techniques de phishing sophistiquées et l'analyse approfondie du trafic réseau ont illustré les risques de sécurité critiques auxquels les organisations sont confrontées quotidiennement. Ces compétences et connaissances sont absolument essentielles pour les professionnels de la cybersécurité qui doivent identifier, évaluer et corriger les vulnérabilités avant que les attaquants malveillants ne les exploitent. La compréhension approfondie de ces techniques d'attaque est également cruciale pour mettre en place des défenses efficaces et des stratégies de sécurité robustes.
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
