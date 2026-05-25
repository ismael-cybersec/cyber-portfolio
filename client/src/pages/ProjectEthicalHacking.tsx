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
          <p className="text-lg text-muted-foreground">Tests de Pénétration Avancés, Reconnaissance Active et Exploitation de Vulnérabilités Critiques</p>
        </div>

        {/* Introduction */}
        <section className="mb-12 space-y-4">
          <h2 className="text-2xl font-bold text-accent">Introduction et Contexte du Projet</h2>
          <p className="text-justify leading-relaxed">
            Ce projet d'ethical hacking représente une étude complète, pratique et approfondie des techniques avancées de test de pénétration, de reconnaissance active, d'identification de vulnérabilités critiques et d'exploitation. À travers une série d'étapes structurées, progressives et méthodologiquement rigoureuses, nous avons exploré les techniques professionnelles de découverte de machines, d'énumération détaillée des services, d'identification des vulnérabilités critiques et non patchées, de campagnes de phishing sophistiquées et d'analyse approfondie du trafic réseau. Ce projet documente les procédures détaillées, les découvertes techniques précises, les analyses approfondies et les résultats concrets obtenus lors de ce test de pénétration complet et réaliste.
          </p>
          <p className="text-justify leading-relaxed">
            L'objectif principal de ce projet est de démontrer une compréhension complète des techniques d'attaque utilisées par les attaquants malveillants, tout en respectant les principes éthiques du hacking éthique. Les techniques et les outils utilisés dans ce projet sont les mêmes que ceux utilisés par les professionnels de la sécurité pour identifier et corriger les vulnérabilités avant que les attaquants malveillants ne les exploitent. Ce projet illustre l'importance critique de la sécurité informatique, de la gestion des vulnérabilités et de la mise en place de défenses robustes contre les attaques sophistiquées.
          </p>
        </section>

        {/* ÉTAPE 1 */}
        <section className="mb-12 space-y-6">
          <h2 className="text-2xl font-bold text-accent">ÉTAPE 1 : RECONNAISSANCE ACTIVE ET CARTOGRAPHIE COMPLÈTE DU RÉSEAU</h2>
          <p className="text-justify leading-relaxed">
            La première étape critique et fondamentale de tout test de pénétration professionnel consiste à effectuer une reconnaissance active complète et à cartographier entièrement toutes les machines actives sur le réseau cible. Cette phase de reconnaissance passive et active fournit une vue d'ensemble complète, détaillée et précise de l'infrastructure réseau. La reconnaissance active implique l'envoi de paquets réseau spécifiquement conçus pour identifier les hôtes actifs et les services en cours d'exécution. Cette phase est absolument cruciale car elle détermine le succès des phases ultérieures du test de pénétration. Sans une reconnaissance complète et précise, le testeur de pénétration pourrait manquer des cibles importantes ou des vecteurs d'attaque critiques.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-accent">1.1 DÉCOUVERTE COMPLÈTE DES MACHINES SUR LE RÉSEAU CIBLE</h3>
            <p className="text-justify leading-relaxed">
              La première étape de la reconnaissance active consiste à découvrir et identifier toutes les machines actives et réactives sur le réseau cible. Pour ce faire, nous avons utilisé Nmap (Network Mapper), l'outil de scan réseau le plus populaire et le plus puissant utilisé par les professionnels de la sécurité du monde entier. Nmap est un outil open-source gratuit qui permet de scanner les réseaux, d'identifier les hôtes actifs, de détecter les ports ouverts et d'énumérer les services en cours d'exécution.
            </p>
            <p className="text-justify leading-relaxed">
              <strong>Méthodologie de scan ICMP Ping :</strong> Nous avons utilisé Nmap avec un scan de découverte ICMP ping sur le sous-réseau cible 192.168.100.0/24. Cette technique envoie des pings ICMP (Internet Control Message Protocol) à toutes les 256 adresses IP du sous-réseau (de 192.168.100.0 à 192.168.100.255) pour identifier les hôtes actifs et réactifs. Le protocole ICMP est un protocole de couche 3 (couche réseau) qui est utilisé pour les diagnostics réseau et la gestion des erreurs. Lorsqu'une machine reçoit un ping ICMP, elle répond généralement avec un paquet ICMP Echo Reply, indiquant que la machine est active et réactive.
            </p>
            <p className="text-justify leading-relaxed">
              <strong>Avantages du scan ICMP Ping :</strong> Le scan ICMP ping est une technique non-intrusive et relativement discrète qui permet une découverte rapide des machines actives sans déclencher les alarmes des systèmes de détection d'intrusion avancés. Contrairement aux scans de ports bruyants qui tentent de se connecter à des ports spécifiques, le ping ICMP génère un trafic réseau minimal et passe souvent inaperçu par les pare-feu et les systèmes de détection. Cette technique est donc idéale pour la phase initiale de reconnaissance lorsque le testeur de pénétration souhaite rester aussi discret que possible.
            </p>
            <p className="text-justify leading-relaxed">
              <strong>Résultats de la découverte :</strong> Les résultats de la découverte ICMP ping ont révélé la présence de 5 machines actives et réactives sur le réseau cible 192.168.100.0/24. Chacune de ces machines a été identifiée avec précision par son adresse IP (IPv4), son adresse MAC (Media Access Control) qui identifie de manière unique la carte réseau, et son temps de réponse en millisecondes. Cette information est cruciale car elle permet au testeur de pénétration de comprendre la topologie du réseau, de déterminer les cibles prioritaires basées sur leur importance apparente, et de planifier les phases ultérieures du test de pénétration.
            </p>
            <div className="bg-muted p-4 rounded-lg border border-border">
              <p className="text-sm font-mono text-muted-foreground">
                [Espace pour capture d'écran : Résultats du scan Nmap de découverte ICMP ping montrant les 5 machines actives]
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-accent">1.2 SCAN COMPLET, DÉTAILLÉ ET ÉNUMÉRATION APPROFONDIE DE CHAQUE CIBLE</h3>
            <p className="text-justify leading-relaxed">
              Une fois les machines découvertes et cartographiées, nous avons procédé à un scan complet, détaillé et approfondi de chaque cible pour identifier avec précision les ports ouverts, les services en cours d'exécution, les versions exactes des logiciels, les systèmes d'exploitation et les configurations. Cette énumération détaillée et approfondie est absolument essentielle pour identifier les vulnérabilités potentielles que nous pourrions exploiter lors des phases ultérieures du test de pénétration. Sans cette énumération complète, le testeur de pénétration ne pourrait pas identifier les vecteurs d'attaque disponibles.
            </p>
            <p className="text-justify leading-relaxed">
              <strong>Technique de scan complet :</strong> Nous avons utilisé Nmap avec des options avancées et optimisées incluant la détection du système d'exploitation (-O), la détection des versions de services (-sV), les scripts NSE (Nmap Scripting Engine) pour l'énumération avancée et l'identification des vulnérabilités, et les options d'optimisation pour un scan rapide mais complet et précis. Le scan complet teste les 65535 ports TCP pour identifier tous les ports ouverts et les services en cours d'exécution.
            </p>

            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">1.2.1 Scan Détaillé et Approfondi de Metasploitable (192.168.100.20)</h4>
              <p className="text-justify leading-relaxed">
                Metasploitable est une distribution Linux intentionnellement vulnérable basée sur Ubuntu, spécialement conçue et développée à des fins de formation, d'apprentissage et de test de pénétration. Cette machine contient délibérément et intentionnellement de nombreuses vulnérabilités connues et non patchées pour permettre aux étudiants et aux professionnels de la sécurité de pratiquer les techniques d'exploitation dans un environnement contrôlé, légal et sûr. Metasploitable est devenue la machine d'apprentissage standard pour les cours de cybersécurité et les certifications comme le CEH (Certified Ethical Hacker). Le scan complet de cette machine a révélé un nombre exceptionnellement élevé de ports ouverts et de services vulnérables, confirmant son statut de cible idéale pour la formation et l'apprentissage.
              </p>
              <div className="bg-muted p-4 rounded-lg border border-border">
                <p className="text-sm font-mono text-muted-foreground">
                  [Espace pour capture d'écran : Résultats du scan Nmap complet pour Metasploitable montrant tous les ports ouverts]
                </p>
              </div>
              <p className="text-justify leading-relaxed">
                <strong>Ports ouverts et services détectés (liste complète et détaillée) :</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm ml-4">
                <li><strong>21/tcp - FTP - vsftpd 2.3.4 :</strong> Serveur FTP (File Transfer Protocol) très vulnérable avec connexion anonyme autorisée. vsftpd 2.3.4 contient une vulnérabilité critique de backdoor qui permet l'exécution de code arbitraire. CRITIQUE.</li>
                <li><strong>22/tcp - SSH - OpenSSH 4.7p1 :</strong> Service SSH (Secure Shell) pour l'accès distant sécurisé. OpenSSH 4.7p1 est une version très ancienne avec plusieurs vulnérabilités connues. Authentification par mot de passe possible.</li>
                <li><strong>23/tcp - Telnet - Linux telnetd :</strong> Service Telnet pour l'accès distant. Telnet transmet tous les données en clair sans chiffrement, y compris les identifiants. TRÈS CRITIQUE - Transmission en clair.</li>
                <li><strong>25/tcp - SMTP - Postfix smtpd :</strong> Service SMTP (Simple Mail Transfer Protocol) pour l'envoi d'emails. Postfix peut être configuré pour relayer les emails, permettant l'envoi d'emails spoofés.</li>
                <li><strong>53/tcp - DNS - ISC BIND 9.4.2 :</strong> Service DNS (Domain Name System) pour la résolution de noms. ISC BIND 9.4.2 est très vulnérable et permet les transferts de zone (zone transfer) pour énumérer tous les enregistrements DNS.</li>
                <li><strong>80/tcp - HTTP - Apache httpd 2.2.8 :</strong> Serveur web HTTP pour servir les pages web. Apache 2.2.8 contient plusieurs vulnérabilités web critiques. Plusieurs applications web vulnérables sont hébergées sur ce serveur.</li>
                <li><strong>111/tcp - RPC - rpcbind :</strong> Service RPC (Remote Procedure Call) pour l'appel de procédures distantes. RPC permet l'énumération des services RPC disponibles et peut révéler des informations sensibles.</li>
                <li><strong>139/tcp - NetBIOS - Samba smbd 3.X 4.X :</strong> Service NetBIOS pour le partage de fichiers réseau. Samba permet l'énumération des partages réseau et des utilisateurs du système.</li>
                <li><strong>445/tcp - SMB - Samba smbd 3.0.20 :</strong> Service SMB (Server Message Block) pour le partage de fichiers et d'imprimantes. Samba 3.0.20 contient plusieurs vulnérabilités SMB critiques exploitables à distance.</li>
                <li><strong>512/tcp - exec :</strong> Service exec pour l'exécution de commandes distantes sans authentification. CRITIQUE - Permet l'exécution de commandes arbitraires sans identifiants.</li>
                <li><strong>513/tcp - login :</strong> Service login pour la connexion distante sans authentification. CRITIQUE - Permet la connexion distante sans mot de passe.</li>
                <li><strong>514/tcp - shell :</strong> Service shell pour l'accès shell distant sans authentification. CRITIQUE - Permet l'accès shell complet sans identifiants.</li>
                <li><strong>1099/tcp - Java RMI :</strong> Interface Java RMI (Remote Method Invocation) pour l'appel de méthodes Java distantes. Permet l'accès à l'interface RMI Java et l'exécution de code Java arbitraire.</li>
                <li><strong>1524/tcp - ingreslock :</strong> Service ingreslock qui fournit un shell root direct sans authentification. CRITIQUE - Accès root complet sans identifiants.</li>
                <li><strong>2049/tcp - NFS :</strong> Service NFS (Network File System) pour le partage de fichiers réseau. NFS permet l'énumération des partages NFS et l'accès aux fichiers partagés.</li>
                <li><strong>2121/tcp - FTP - ProFTPD 1.3.1 :</strong> Serveur FTP alternatif ProFTPD. ProFTPD 1.3.1 contient plusieurs vulnérabilités critiques exploitables.</li>
                <li><strong>3306/tcp - MySQL - 5.0.51a :</strong> Service MySQL pour la gestion de base de données. MySQL 5.0.51a est très vulnérable et permet l'accès à la base de données et l'exécution de commandes système.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">1.2.2 Scan Détaillé et Approfondi de OWASP BWA (192.168.100.30)</h4>
              <p className="text-justify leading-relaxed">
                OWASP BWA (Broken Web Applications) est une machine Linux spécialement conçue et développée par l'OWASP (Open Web Application Security Project) pour contenir des applications web intentionnellement vulnérables. Cette machine inclut plusieurs applications web populaires avec des vulnérabilités délibérément introduites pour permettre l'apprentissage des techniques d'exploitation web. OWASP BWA contient des applications web vulnérables comme WebGoat, WebScarab, Mutillidae et d'autres. Le scan détaillé a révélé un système Linux 2.6.x avec plusieurs services web et de base de données actifs.
              </p>
              <div className="bg-muted p-4 rounded-lg border border-border">
                <p className="text-sm font-mono text-muted-foreground">
                  [Espace pour capture d'écran : Résultats du scan Nmap complet pour OWASP BWA]
                </p>
              </div>
              <p className="text-justify leading-relaxed">
                <strong>Système d'exploitation détecté :</strong> Linux 2.6.17 - 2.6.30 (noyau Linux hérité avec plusieurs vulnérabilités kernel critiques non patchées)
              </p>
              <p className="text-justify leading-relaxed">
                <strong>Services principaux détectés et analysés :</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm ml-4">
                <li><strong>Port 22/tcp - SSH - OpenSSH 5.3p1 :</strong> Service SSH pour l'accès distant sécurisé. OpenSSH 5.3p1 est une version ancienne avec plusieurs vulnérabilités connues.</li>
                <li><strong>Port 80/tcp - HTTP - Apache 2.2.14 :</strong> Serveur web principal hébergeant les applications web vulnérables OWASP. Apache 2.2.14 contient plusieurs vulnérabilités critiques.</li>
                <li><strong>Port 139/tcp - SMB - Samba 3.X-4.X :</strong> Service SMB pour le partage réseau. Partages énumérables.</li>
                <li><strong>Port 143/tcp - IMAP - Courrier Imap4 :</strong> Service IMAP pour la messagerie. Permet l'accès aux emails.</li>
                <li><strong>Port 443/tcp - HTTPS - Apache 2.2.14 :</strong> Serveur web sécurisé OWASP avec certificat auto-signé.</li>
                <li><strong>Port 5001/tcp - Java - Serialization :</strong> Service Java avec sérialisation. Permet l'exécution de code Java arbitraire.</li>
                <li><strong>Port 8080/tcp - HTTP - Apache Tomcat :</strong> Serveur Tomcat hébergeant des applications JSP vulnérables.</li>
                <li><strong>Port 8081/tcp - HTTP - Jetty 6.1.25 :</strong> Serveur web Jetty avec applications web vulnérables.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">1.2.3 Scan Détaillé et Approfondi de Windows XP (192.168.100.40)</h4>
              <p className="text-justify leading-relaxed">
                Windows XP est un système d'exploitation hérité lancé en 2001 et n'ayant plus de support officiel depuis le 8 avril 2014. Ce système est connu pour contenir un nombre exceptionnellement élevé de vulnérabilités critiques non patchées. Windows XP a été l'un des systèmes d'exploitation les plus populaires au monde, avec des centaines de millions d'installations. Cependant, en raison de son ancienneté et de l'absence de support, Windows XP reste une cible privilégiée pour les attaquants malveillants et les testeurs de pénétration. Le scan détaillé de cette machine a révélé plusieurs ports ouverts et services potentiellement exploitables. Windows XP reste une cible privilégiée pour les testeurs de pénétration en raison de ses nombreuses vulnérabilités bien documentées et facilement exploitables.
              </p>
              <div className="bg-muted p-4 rounded-lg border border-border">
                <p className="text-sm font-mono text-muted-foreground">
                  [Espace pour capture d'écran : Résultats du scan Nmap complet pour Windows XP]
                </p>
              </div>
              <p className="text-justify leading-relaxed">
                <strong>Vulnérabilités critiques identifiées sur Windows XP :</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm ml-4">
                <li><strong>MS08-067 (NetBIOS RCE) :</strong> Vulnérabilité critique dans le service NetBIOS permettant l'exécution de code arbitraire à distance. Exploitée par le ver Conficker.</li>
                <li><strong>MS06-040 (Server Service RCE) :</strong> Vulnérabilité critique permettant l'exécution de code arbitraire via le service Server.</li>
                <li><strong>Partages administrateur par défaut :</strong> Les partages administrateur (C$, ADMIN$, IPC$) peuvent être énumérés et exploités.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">1.2.4 Scan Détaillé et Approfondi de Windows 7 (192.168.100.50)</h4>
              <p className="text-justify leading-relaxed">
                Windows 7 est un système d'exploitation plus moderne que Windows XP, lancé en 2009 avec des améliorations de sécurité significatives. Cependant, Windows 7 n'a également plus de support officiel depuis le 14 janvier 2020 et peut toujours contenir des vulnérabilités non patchées. Le scan détaillé a révélé les services et ports ouverts sur cette machine, offrant des opportunités d'exploitation potentielles. Windows 7 est généralement plus sécurisé que Windows XP, mais contient toujours plusieurs vulnérabilités exploitables.
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
          <h2 className="text-2xl font-bold text-accent">ÉTAPE 2 : IDENTIFICATION ET ANALYSE APPROFONDIE DES VULNÉRABILITÉS CRITIQUES</h2>
          <p className="text-justify leading-relaxed">
            Après la phase complète de reconnaissance et d'énumération détaillée, nous avons procédé à l'identification systématique et à l'analyse approfondie des vulnérabilités potentielles sur chaque machine cible. Cette phase critique implique l'analyse détaillée et méthodique des informations collectées pour identifier les failles de sécurité exploitables. Les machines Metasploitable et OWASP BWA contiennent intentionnellement de nombreuses vulnérabilités connues et documentées, tandis que Windows XP et Windows 7 contiennent des failles de sécurité critiques non patchées. L'identification précise et complète des vulnérabilités est essentielle pour déterminer quelles cibles peuvent être exploitées et dans quel ordre procéder pour maximiser l'impact du test de pénétration.
          </p>
          <p className="text-justify leading-relaxed">
            <strong>Classification des vulnérabilités :</strong> Les vulnérabilités identifiées ont été classifiées selon leur sévérité en utilisant l'échelle CVSS (Common Vulnerability Scoring System). Les vulnérabilités critiques (CVSS 9.0-10.0) permettent l'exécution de code arbitraire à distance sans authentification. Les vulnérabilités élevées (CVSS 7.0-8.9) permettent l'accès à des données sensibles ou l'exécution de code avec authentification. Les vulnérabilités moyennes (CVSS 4.0-6.9) permettent l'accès limité ou la divulgation d'informations. Les vulnérabilités faibles (CVSS 0.1-3.9) ont un impact minimal.
          </p>
        </section>

        {/* ÉTAPE 3 */}
        <section className="mb-12 space-y-6">
          <h2 className="text-2xl font-bold text-accent">ÉTAPE 3 : CAMPAGNE DE PHISHING SOPHISTIQUÉE ET INGÉNIERIE SOCIALE</h2>
          <p className="text-justify leading-relaxed">
            Une campagne de phishing avancée et sophistiquée a été lancée pour tester la sensibilisation des utilisateurs à la sécurité et pour démontrer comment les attaquants utilisent l'ingénierie sociale pour obtenir des identifiants d'utilisateurs et accéder aux systèmes. GoPhish, un framework open-source de phishing professionnel et très puissant, a été utilisé pour créer, déployer et suivre la campagne de phishing. Cette campagne a démontré de manière concrète comment les attaquants peuvent contourner les défenses techniques sophistiquées en exploitant la psychologie humaine et la confiance des utilisateurs.
          </p>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent">3.1 Déploiement Complet et Configuration Avancée de GoPhish</h3>
            <p className="text-justify leading-relaxed">
              GoPhish est un framework de phishing open-source puissant, flexible et très populaire qui permet de créer des campagnes de phishing sophistiquées et réalistes. GoPhish a été développé spécifiquement pour les testeurs de pénétration et les professionnels de la sécurité pour tester la sensibilisation des utilisateurs à la sécurité. Après le lancement du service GoPhish, l'interface de gestion web était accessible sur le port 3333. Cette interface fournit un tableau de bord complet et intuitif pour configurer tous les aspects de la campagne de phishing, y compris les profils d'expéditeur, les modèles d'email, les pages de landing et le suivi détaillé des résultats.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent">3.2 CRÉATION DU PROFIL EXPÉDITEUR CRÉDIBLE ET CONVAINCANT</h3>
            <p className="text-justify leading-relaxed">
              Un profil d'expéditeur convaincant et crédible a été créé pour que les emails de phishing semblent provenir d'une source légitime et de confiance. Cette étape est critique et absolument essentielle car elle augmente considérablement les chances que les destinataires ouvrent l'email et cliquent sur les liens malveillants. Le profil d'expéditeur inclut l'adresse email spoofée, le nom d'affichage convaincant, et d'autres détails qui rendent l'email plus crédible et convaincant. L'adresse email a été choisie pour ressembler à une adresse officielle d'une organisation de confiance.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent">3.3 CRÉATION DU MODÈLE D'EMAIL PROFESSIONNEL ET PERSUASIF</h3>
            <p className="text-justify leading-relaxed">
              Un modèle d'email professionnel, convaincant et persuasif a été créé pour que les messages de phishing ressemblent à des communications légitimes provenant d'une organisation de confiance. Le modèle contient un lien vers la page de phishing qui capture les identifiants des utilisateurs. Le modèle inclut également des éléments de design professionnels, des logos authentiques, et un texte persuasif qui rendent l'email plus convaincant et augmentent considérablement les taux de clics. Le texte de l'email utilise des techniques d'ingénierie sociale pour créer un sentiment d'urgence et de confiance.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent">3.4 CRÉATION DE LA PAGE DE LANDING PAGE CONVAINCANTE ET RÉALISTE</h3>
            <p className="text-justify leading-relaxed">
              Une page de landing page professionnelle, convaincante et réaliste a été créée pour capturer les identifiants des utilisateurs. Cette page imite une page de connexion légitime d'une organisation de confiance pour tromper les utilisateurs. La page est hébergée sur un serveur contrôlé par l'attaquant et capture automatiquement tous les identifiants saisis par les utilisateurs victimes. La page de landing page est conçue pour ressembler exactement à la page de connexion légitime, y compris les logos, les couleurs et la mise en page.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent">3.5 IMPORTATION ET SEGMENTATION DÉTAILLÉE DES CIBLES</h3>
            <p className="text-justify leading-relaxed">
              Les adresses email des cibles ont été importées dans GoPhish et segmentées en groupes pour permettre un suivi détaillé et une analyse granulaire des résultats. Ces cibles recevront les emails de phishing. L'importation peut se faire manuellement ou via un fichier CSV contenant les adresses email. La segmentation permet de suivre les résultats par groupe et d'identifier les groupes d'utilisateurs les plus vulnérables au phishing.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent">3.6 LANCEMENT ET SUIVI DÉTAILLÉ DE LA CAMPAGNE</h3>
            <p className="text-justify leading-relaxed">
              La campagne de phishing a été lancée avec succès. Les emails de phishing ont été envoyés aux cibles, et les résultats ont été suivis en temps réel via l'interface de GoPhish. Les résultats incluent le nombre d'emails envoyés, le nombre d'emails ouverts, le nombre de clics sur les liens, le nombre d'identifiants capturés, et d'autres métriques détaillées. Le suivi détaillé permet d'identifier les utilisateurs qui ont cliqué sur les liens et saisi leurs identifiants.
            </p>
          </div>
        </section>

        {/* ÉTAPE 4 */}
        <section className="mb-12 space-y-6">
          <h2 className="text-2xl font-bold text-accent">ÉTAPE 4 : ANALYSE APPROFONDIE ET DÉTAILLÉE DU TRAFIC RÉSEAU</h2>
          <p className="text-justify leading-relaxed">
            Une capture réseau complète et détaillée a été effectuée pour analyser en profondeur le trafic réseau et identifier les identifiants transmis en clair. Cette analyse permet de démontrer les risques critiques de sécurité liés à la transmission de données non chiffrées sur le réseau. L'analyse du fichier de capture réseau (.pcap) révèle les échanges de données détaillés et les informations sensibles qui peuvent être facilement interceptées par les attaquants malveillants. Cette étape démontre l'importance critique du chiffrement des données en transit.
          </p>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent">4.1 Capture Complète et Analyse Détaillée avec Wireshark</h3>
            <p className="text-justify leading-relaxed">
              Le fichier de capture réseau (.pcap) a été analysé en détail avec Wireshark, un analyseur de protocoles réseau puissant, complet et très populaire. Wireshark permet d'examiner chaque paquet réseau capturé avec ses détails complets, y compris les en-têtes de protocole, les données utiles, et les informations de session. Cela permet d'identifier précisément les échanges de données et les identifiants transmis en clair. Wireshark est l'outil standard utilisé par les professionnels de la sécurité pour l'analyse du trafic réseau.
            </p>
            <div className="bg-muted p-4 rounded-lg border border-border">
              <p className="text-sm font-mono text-muted-foreground">
                [Espace pour capture d'écran : Analyse détaillée Wireshark du fichier .pcap montrant les paquets capturés]
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent">4.2 Identification Précise des Échanges Contenant des Identifiants en Clair</h3>
            <p className="text-justify leading-relaxed">
              L'analyse approfondie du fichier .pcap a révélé les échanges contenant des identifiants en clair. Ces échanges démontrent comment les identifiants peuvent être capturés facilement sur le réseau sans chiffrement. Les protocoles non sécurisés comme HTTP, Telnet et FTP transmettent les identifiants sans aucun chiffrement, ce qui les rend extrêmement vulnérables à l'interception et à l'utilisation malveillante par les attaquants. Cette démonstration illustre l'importance critique de l'utilisation de protocoles sécurisés comme HTTPS, SSH et SFTP.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent">4.3 Extraction Complète et Documentation des Identifiants Capturés</h3>
            <p className="text-justify leading-relaxed">
              Les identifiants complets (nom d'utilisateur et mot de passe) ont été extraits de la capture réseau avec succès. Cette démonstration pratique et concrète illustre l'importance critique du chiffrement des données en transit. Les attaquants peuvent facilement intercepter et utiliser les identifiants transmis en clair pour accéder aux systèmes, aux bases de données et aux données sensibles de l'organisation. Cette extraction d'identifiants démontre un risque de sécurité critique.
            </p>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12 space-y-4">
          <h2 className="text-2xl font-bold text-accent">Conclusion et Recommandations de Sécurité</h2>
          <p className="text-justify leading-relaxed">
            Ce projet d'ethical hacking a démontré avec succès les différentes phases d'un test de pénétration professionnel complet et réaliste, de la reconnaissance active à l'exploitation finale. Les techniques de phishing sophistiquées et l'analyse approfondie du trafic réseau ont illustré les risques de sécurité critiques auxquels les organisations sont confrontées quotidiennement. Ces compétences et connaissances sont absolument essentielles pour les professionnels de la cybersécurité qui doivent identifier, évaluer et corriger les vulnérabilités avant que les attaquants malveillants ne les exploitent. La compréhension approfondie de ces techniques d'attaque est également cruciale pour mettre en place des défenses efficaces et des stratégies de sécurité robustes.
          </p>
          <p className="text-justify leading-relaxed">
            <strong>Recommandations de sécurité :</strong> Sur la base de ce test de pénétration, les recommandations suivantes sont proposées : (1) Mettre à jour tous les systèmes d'exploitation et les logiciels vers les versions les plus récentes et patchées. (2) Implémenter le chiffrement des données en transit (HTTPS, SSH, SFTP) pour tous les services. (3) Désactiver les protocoles non sécurisés (Telnet, FTP, HTTP) et les remplacer par des alternatives sécurisées. (4) Implémenter une authentification multi-facteurs (MFA) pour tous les accès critiques. (5) Mettre en place une formation de sensibilisation à la sécurité pour tous les utilisateurs. (6) Implémenter un système de détection d'intrusion (IDS) pour détecter les attaques. (7) Effectuer des tests de pénétration réguliers pour identifier les vulnérabilités.
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
