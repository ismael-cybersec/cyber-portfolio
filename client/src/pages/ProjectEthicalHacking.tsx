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
          <h1 className="text-4xl font-bold text-accent mb-4">Laboratoire 1 : Hacking éthique et Contre-mesures</h1>
          <div className="space-y-2 text-muted-foreground text-sm">
            <p><strong>Étudiant :</strong> Ismael Baby</p>
            <p><strong>Cours :</strong> Hacking éthique et Contre-mesures</p>
            <p><strong>Enseignant :</strong> Kevin MONKAM</p>
            <p><strong>Établissement :</strong> Collège communautaire du Nouveau-Brunswick – Campus Dieppe</p>
            <p><strong>Période du laboratoire :</strong> 14-10-2025 au 17-10-2025</p>
            <p><strong>Date de remise :</strong> 20-10-2025</p>
          </div>
        </div>

        {/* Introduction */}
        <section className="mb-12 space-y-4">
          <h2 className="text-2xl font-bold text-accent">Introduction</h2>
          <p className="text-justify leading-relaxed">
            Ce laboratoire pratique en hacking éthique et contre-mesures vise à développer les compétences en test de pénétration et en reconnaissance active. À travers une série d'étapes structurées, nous avons exploré les techniques de découverte de machines, d'identification de vulnérabilités, de campagnes de phishing et d'analyse de trafic réseau. Ce rapport documente les procédures, les découvertes et les résultats obtenus lors de ce laboratoire.
          </p>
        </section>

        {/* ÉTAPE 1 */}
        <section className="mb-12 space-y-6">
          <h2 className="text-2xl font-bold text-accent">ÉTAPE 1 : RECONNAISSANCE ACTIVE</h2>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-accent">1.1 DÉCOUVERTE DES MACHINES SUR LE RÉSEAU</h3>
            <p className="text-justify leading-relaxed">
              La première étape de tout test de pénétration consiste à découvrir les machines actives sur le réseau cible. Pour ce faire, nous avons utilisé Nmap avec un scan de découverte simple sur le sous-réseau 192.168.100.0/24. Cette commande envoie des pings ICMP à toutes les adresses IP du sous-réseau pour identifier les hôtes actifs.
            </p>
            <p className="text-justify leading-relaxed">
              Les résultats ont révélé la présence de 5 machines actives sur le réseau. Chacune de ces machines a été identifiée avec son adresse IP et son adresse MAC. Cette phase de reconnaissance est cruciale car elle permet au testeur de pénétration de cartographier le réseau et de déterminer les cibles potentielles pour les phases suivantes.
            </p>
            <div className="bg-muted p-4 rounded-lg border border-border">
              <p className="text-sm font-mono text-muted-foreground">
                [Espace pour capture d'écran : Résultats du scan Nmap de découverte]
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-accent">1.2 SCAN COMPLET DE CHAQUE CIBLE</h3>
            <p className="text-justify leading-relaxed">
              Une fois les machines découvertes, nous avons procédé à un scan complet de chaque cible pour identifier les ports ouverts, les services en cours d'exécution et les versions des logiciels. Cela nous permet d'identifier les vulnérabilités potentielles que nous pourrions exploiter.
            </p>

            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">1.2.1 Scan de Metasploitable (192.168.100.20)</h4>
              <p className="text-justify leading-relaxed">
                Metasploitable est une machine Linux intentionnellement vulnérable, conçue à des fins de formation et de test de pénétration. Le scan de cette machine a révélé un grand nombre de ports ouverts et de services vulnérables.
              </p>
              <div className="bg-muted p-4 rounded-lg border border-border">
                <p className="text-sm font-mono text-muted-foreground">
                  [Espace pour capture d'écran : Résultats du scan Nmap pour Metasploitable]
                </p>
              </div>
              <p className="text-justify leading-relaxed">
                <strong>Ports ouverts et services détectés :</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                <li>21/tcp - FTP - vsftpd 2.3.4 (Anonymous login allowed)</li>
                <li>22/tcp - SSH - OpenSSH 4.7p1</li>
                <li>23/tcp - Telnet - Linux telnetd</li>
                <li>25/tcp - SMTP - Postfix smtpd</li>
                <li>53/tcp - DNS - ISC BIND 9.4.2</li>
                <li>80/tcp - HTTP - Apache httpd 2.2.8</li>
                <li>111/tcp - RPC - rpcbind</li>
                <li>139/tcp - NetBIOS - Samba smbd 3.X 4.X</li>
                <li>445/tcp - NetBIOS - Samba smbd 3.0.20</li>
                <li>512/tcp - exec</li>
                <li>513/tcp - login</li>
                <li>514/tcp - shell</li>
                <li>1099/tcp - Java RMI</li>
                <li>1524/tcp - ingreslock (root shell)</li>
                <li>2049/tcp - NFS</li>
                <li>2121/tcp - FTP - ProFTPD 1.3.1</li>
                <li>3306/tcp - MySQL - 5.0.51a</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">1.2.2 Scan de OWASPBWA (192.168.100.30)</h4>
              <p className="text-justify leading-relaxed">
                OWASP BWA (Broken Web Applications) est une machine Linux contenant des applications web intentionnellement vulnérables. Le scan a révélé un système Linux 2.6.x avec plusieurs services web et de base de données.
              </p>
              <div className="bg-muted p-4 rounded-lg border border-border">
                <p className="text-sm font-mono text-muted-foreground">
                  [Espace pour capture d'écran : Résultats du scan Nmap pour OWASP BWA]
                </p>
              </div>
              <p className="text-justify leading-relaxed">
                <strong>Système détecté :</strong> Linux 2.6.17 - 2.6.30
              </p>
              <p className="text-justify leading-relaxed">
                <strong>Services principaux détectés :</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                <li>Port 22/tcp - SSH - OpenSSH 5.3p1 (Accès distant)</li>
                <li>Port 80/tcp - HTTP - Apache 2.2.14 (Site principal OWASP)</li>
                <li>Port 139/tcp - SMB - Samba 3.X-4.X (Partages réseau)</li>
                <li>Port 143/tcp - IMAP - Courrier Imap4 (Email)</li>
                <li>Port 443/tcp - HTTPS - Apache 2.2.14 (Site sécurisé OWASP)</li>
                <li>Port 5001/tcp - Java - Serialization (Service Java)</li>
                <li>Port 8080/tcp - HTTP - Apache Tomcat (Applications JSP)</li>
                <li>Port 8081/tcp - HTTP - Jetty 6.1.25 (Applications web)</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">1.2.3 Scan de Windows XP (192.168.100.40)</h4>
              <p className="text-justify leading-relaxed">
                Windows XP est un système d'exploitation hérité connu pour ses nombreuses vulnérabilités. Le scan de cette machine a révélé des ports ouverts et des services potentiellement exploitables.
              </p>
              <div className="bg-muted p-4 rounded-lg border border-border">
                <p className="text-sm font-mono text-muted-foreground">
                  [Espace pour capture d'écran : Résultats du scan Nmap pour Windows XP]
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">1.2.4 Scan de Windows 7 (192.168.100.50)</h4>
              <p className="text-justify leading-relaxed">
                Windows 7 est un système d'exploitation plus moderne que Windows XP, mais il peut toujours contenir des vulnérabilités. Le scan a révélé les services et ports ouverts sur cette machine.
              </p>
              <div className="bg-muted p-4 rounded-lg border border-border">
                <p className="text-sm font-mono text-muted-foreground">
                  [Espace pour capture d'écran : Résultats du scan Nmap pour Windows 7]
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ÉTAPE 2 */}
        <section className="mb-12 space-y-6">
          <h2 className="text-2xl font-bold text-accent">ÉTAPE 2 : IDENTIFICATION DE LA VULNÉRABILITÉ</h2>
          <p className="text-justify leading-relaxed">
            Après la phase de reconnaissance, nous avons identifié les vulnérabilités potentielles sur chaque machine. Les machines Metasploitable et OWASP BWA contiennent de nombreuses vulnérabilités intentionnelles, tandis que Windows XP et Windows 7 contiennent des failles de sécurité connues. L'identification des vulnérabilités est une étape critique qui permet aux testeurs de pénétration de déterminer quelles cibles peuvent être exploitées.
          </p>
        </section>

        {/* ÉTAPE 3 */}
        <section className="mb-12 space-y-6">
          <h2 className="text-2xl font-bold text-accent">ÉTAPE 3 : CAMPAGNE DE PHISHING</h2>
          <p className="text-justify leading-relaxed">
            Une campagne de phishing a été lancée pour tester la sensibilisation des utilisateurs à la sécurité. GoPhish, un framework open-source de phishing, a été utilisé pour créer et déployer la campagne. Cette campagne a démontré comment les attaquants utilisent l'ingénierie sociale pour obtenir des identifiants d'utilisateurs.
          </p>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent">3.1 Lancer GoPhish</h3>
            <p className="text-justify leading-relaxed">
              GoPhish est un framework de phishing open-source qui permet de créer des campagnes de phishing sophistiquées. Après le lancement du service, l'interface de gestion était accessible sur le port 3333. Cette interface permet de configurer tous les aspects de la campagne de phishing.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent">3.2 CRÉATION DU PROFIL EXPÉDITEUR</h3>
            <p className="text-justify leading-relaxed">
              Un profil d'expéditeur a été créé pour que les emails de phishing semblent provenir d'une source légitime. Cela augmente les chances que les destinataires cliquent sur les liens ou ouvrent les pièces jointes. Le profil d'expéditeur inclut l'adresse email, le nom d'affichage et d'autres détails qui rendent l'email plus crédible.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent">3.3 CRÉATION DU MODÈLE D'EMAIL</h3>
            <p className="text-justify leading-relaxed">
              Un modèle d'email a été créé pour que les messages de phishing ressemblent à des communications légitimes. Le modèle contient un lien vers la page de phishing qui capture les identifiants des utilisateurs. Le modèle inclut également des éléments de design qui rendent l'email plus convaincant.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent">3.4 CRÉATION DE LA PAGE DE LANDING PAGE</h3>
            <p className="text-justify leading-relaxed">
              Une page de landing page a été créée pour capturer les identifiants des utilisateurs. Cette page imite une page de connexion légitime pour tromper les utilisateurs. La page est hébergée sur un serveur contrôlé par l'attaquant et capture tous les identifiants saisis.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent">3.5 IMPORTATION DES CIBLES</h3>
            <p className="text-justify leading-relaxed">
              Les adresses email des cibles ont été importées dans GoPhish. Ces cibles recevront les emails de phishing. L'importation peut se faire manuellement ou via un fichier CSV contenant les adresses email.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent">5. LANCEMENT DE LA CAMPAGNE</h3>
            <p className="text-justify leading-relaxed">
              La campagne de phishing a été lancée. Les emails de phishing ont été envoyés aux cibles, et les résultats ont été suivis via l'interface de GoPhish. Les résultats incluent le nombre d'emails envoyés, le nombre d'emails ouverts, le nombre de clics sur les liens, et le nombre d'identifiants capturés.
            </p>
          </div>
        </section>

        {/* ÉTAPE 4 */}
        <section className="mb-12 space-y-6">
          <h2 className="text-2xl font-bold text-accent">ÉTAPE 4 : ANALYSE DE CAPTURE RÉSEAU (.pcap)</h2>
          <p className="text-justify leading-relaxed">
            Une capture réseau a été effectuée pour analyser le trafic réseau et identifier les identifiants transmis en clair. Cette analyse permet de démontrer les risques de sécurité liés à la transmission de données non chiffrées. L'analyse du fichier .pcap révèle les échanges de données et les informations sensibles qui peuvent être interceptées.
          </p>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent">4.1 Analysez le fichier .pcap trouvé à l'aide de wireshark</h3>
            <p className="text-justify leading-relaxed">
              Le fichier de capture réseau (.pcap) a été analysé avec Wireshark, un analyseur de protocoles réseau. Cela permet d'identifier les échanges de données et les identifiants transmis en clair. Wireshark affiche tous les paquets capturés avec leurs détails complets, y compris les en-têtes et les données utiles.
            </p>
            <div className="bg-muted p-4 rounded-lg border border-border">
              <p className="text-sm font-mono text-muted-foreground">
                [Espace pour capture d'écran : Analyse Wireshark du fichier .pcap]
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent">4.2 Identifiez les échanges contenant des identifiants</h3>
            <p className="text-justify leading-relaxed">
              L'analyse du fichier .pcap a révélé les échanges contenant des identifiants. Ces échanges montrent comment les identifiants peuvent être capturés en clair sur le réseau. Les protocoles non sécurisés comme HTTP, Telnet et FTP transmettent les identifiants sans chiffrement, ce qui les rend vulnérables à l'interception.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent">4.3 Récupérez le nom d'utilisateur et le mot de passe présents dans la capture</h3>
            <p className="text-justify leading-relaxed">
              Les identifiants (nom d'utilisateur et mot de passe) ont été extraits de la capture réseau. Cette démonstration illustre l'importance du chiffrement des données en transit. Les attaquants peuvent facilement intercepter et utiliser les identifiants transmis en clair pour accéder aux systèmes et aux données sensibles.
            </p>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12 space-y-4">
          <h2 className="text-2xl font-bold text-accent">Conclusion</h2>
          <p className="text-justify leading-relaxed">
            Ce laboratoire a permis de démontrer les différentes phases d'un test de pénétration, de la reconnaissance active à l'exploitation. Les techniques de phishing et l'analyse de trafic réseau ont illustré les risques de sécurité auxquels les organisations sont confrontées. Ces compétences sont essentielles pour les professionnels de la cybersécurité qui doivent identifier et corriger les vulnérabilités avant que les attaquants ne les exploitent. La compréhension de ces techniques est également importante pour mettre en place des défenses efficaces contre les attaques.
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
