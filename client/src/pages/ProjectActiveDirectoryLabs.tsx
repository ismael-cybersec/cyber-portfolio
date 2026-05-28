import { ArrowLeft } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function ProjectActiveDirectoryLabs() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation onContactClick={() => window.location.href = "#contact"} />

      <div className="container py-20">
        <a href="/" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
          <ArrowLeft size={20} />
          Retour au portfolio
        </a>

        <article className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-primary mb-4">Active Directory Labs - Reconnaissance & Authentification</h1>
          <p className="text-xl text-foreground/70 mb-12">
            Laboratoires complets couvrant la reconnaissance Active Directory, l'énumération des services, l'analyse des protocoles d'authentification NTLM et Kerberos, et les attaques par password spraying.
          </p>

          {/* Introduction */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-accent mb-6">Introduction</h2>
            <p className="text-lg text-foreground/80 mb-4">
              Ces laboratoires font partie du cours SECS1028 - Cycle de vie du piratage informatique au Collège communautaire du Nouveau-Brunswick (CCNB). Ils couvrent deux domaines critiques de la sécurité Active Directory : la reconnaissance et l'énumération des services, ainsi que l'analyse approfondie des mécanismes d'authentification NTLM et Kerberos, incluant les vulnérabilités potentielles et les techniques d'exploitation.
            </p>
            <p className="text-lg text-foreground/80">
              L'objectif pédagogique est de comprendre en profondeur comment fonctionne l'infrastructure Active Directory, comment énumérer les services disponibles, et comment les protocoles d'authentification peuvent être exploités par un attaquant. Ces connaissances sont essentielles pour tout professionnel de la cybersécurité travaillant dans un environnement d'entreprise.
            </p>
          </section>

          {/* Lab 1 - Reconnaissance */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-accent mb-6">Laboratoire 1 : Reconnaissance Active Directory</h2>
            
            <h3 className="text-2xl font-bold text-primary mb-4">Énumération, Cartographie et Analyse de la Surface d'Attaque AD</h3>
            
            <p className="text-lg text-foreground/80 mb-6">
              Le premier laboratoire se concentre sur la reconnaissance active de l'infrastructure Active Directory. Cette phase est critique dans un test de pénétration car elle permet à un attaquant de cartographier l'environnement cible, d'identifier les services disponibles, et de détecter les points faibles potentiels.
            </p>

            <h4 className="text-xl font-bold text-primary mb-4">1.1 Identification du Domaine et des Contrôleurs de Domaine</h4>
            <p className="text-lg text-foreground/80 mb-4">
              La première étape consiste à identifier le domaine Active Directory et les contrôleurs de domaine qui le gèrent. Cette information est fondamentale car elle permet de comprendre la structure de l'infrastructure d'authentification.
            </p>
            <p className="text-lg text-foreground/80 mb-4">
              Lors de ce laboratoire, des commandes ont été exécutées sur la machine client PC01 afin d'identifier les informations de base du domaine Active Directory. La commande nltest /dclist:desforest.local a révélé que le domaine est desforest.local (FQDN - Fully Qualified Domain Name), avec un contrôleur de domaine principal situé à DC01.desforest.local avec l'adresse IP 192.168.56.10.
            </p>
            <p className="text-lg text-foreground/80 mb-6">
              Ce serveur possède plusieurs rôles importants : il agit comme serveur SUS (Single Update Server), PDC (Primary Domain Controller), LDAP et KDC (Key Distribution Center). Ces rôles sont essentiels pour le fonctionnement de l'infrastructure d'authentification et de l'annuaire Active Directory.
            </p>

            <h4 className="text-xl font-bold text-primary mb-4">1.2 Cartographie DNS du Domaine</h4>
            <p className="text-lg text-foreground/80 mb-4">
              La cartographie DNS est une étape cruciale de la reconnaissance. Elle permet d'identifier tous les services Active Directory disponibles dans le domaine en effectuant des requêtes DNS de type SRV (Service Records).
            </p>
            <p className="text-lg text-foreground/80 mb-4">
              Les résultats des requêtes DNS révèlent les services suivants disponibles dans le domaine desforest.local :
            </p>
            <ul className="list-disc list-inside text-lg text-foreground/80 mb-6 space-y-2">
              <li>Service Kerberos accessible via le port 88 (kerberos_tcp.desforest.local)</li>
              <li>Service LDAP disponible sur le port 389 (ldap_tcp.desforest.local)</li>
              <li>Service Global Catalog accessible via le port 3268 (gc_tcp.desforest.local)</li>
              <li>Serveur centralisé : dc01.desforest.local avec l'adresse IP 192.168.56.10</li>
            </ul>
            <p className="text-lg text-foreground/80 mb-4">
              Ces informations sont extrêmement importantes pour la phase de reconnaissance car elles permettent à un attaquant d'identifier les services disponibles, les ports utilisés, et les serveurs critiques à cibler pour des futures attaques. Par exemple, connaître que le service Kerberos est disponible sur le port 88 permet de cibler les attaques de type AS-REP Roasting ou Kerberoasting.
            </p>

            <h4 className="text-xl font-bold text-primary mb-4">1.3 Énumération des Utilisateurs du Domaine</h4>
            <p className="text-lg text-foreground/80 mb-4">
              Une fois la structure de base du domaine identifiée, l'étape suivante consiste à énumérer les utilisateurs du domaine. Cette information est critique car elle fournit une liste de cibles potentielles pour les attaques d'authentification.
            </p>
            <p className="text-lg text-foreground/80 mb-6">
              Lors de ce laboratoire, des commandes PowerShell ont été utilisées pour énumérer les utilisateurs Active Directory, identifier les groupes de sécurité, et analyser les permissions et les rôles. Cette énumération révèle non seulement les utilisateurs standards, mais aussi les comptes de service qui sont souvent associés à des mots de passe faibles ou rarement modifiés.
            </p>

            <h4 className="text-xl font-bold text-primary mb-4">1.4 Analyse des Partages Réseau</h4>
            <p className="text-lg text-foreground/80 mb-4">
              L'identification des partages réseau disponibles est une étape importante de la reconnaissance. Ces partages peuvent contenir des données sensibles ou des configurations système qui pourraient être exploitées.
            </p>
            <p className="text-lg text-foreground/80 mb-6">
              L'énumération des partages réseau implique d'identifier les ressources partagées, d'analyser les permissions d'accès, et d'identifier les données sensibles qui pourraient être accessibles. Cette information peut être utilisée pour planifier des attaques ultérieures ou pour identifier des vecteurs d'accès alternatifs.
            </p>
          </section>

          {/* Lab 2 - Authentification */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-accent mb-6">Laboratoire 2 : Authentification NTLM & Kerberos</h2>
            
            <h3 className="text-2xl font-bold text-primary mb-4">Password Spraying, NTLM Analysis et Kerberos Exploitation</h3>
            
            <p className="text-lg text-foreground/80 mb-6">
              Le deuxième laboratoire approfondit l'analyse des protocoles d'authentification NTLM et Kerberos, en mettant l'accent sur les vulnérabilités potentielles et les techniques d'exploitation. Ce laboratoire couvre également les attaques par password spraying et l'analyse des structures de hash NTLM.
            </p>

            <h4 className="text-xl font-bold text-primary mb-4">Partie A : Comprendre l'Authentification NTLM</h4>
            
            <h5 className="text-lg font-bold text-primary mb-3">Tâche A.1 - Observer le Flux NTLM en Pratique</h5>
            <p className="text-lg text-foreground/80 mb-4">
              L'authentification NTLM est un protocole d'authentification utilisé dans les environnements Windows, particulièrement pour les connexions SMB (Server Message Block). Comprendre le flux NTLM est essentiel pour identifier les vulnérabilités potentielles.
            </p>
            <p className="text-lg text-foreground/80 mb-4">
              Lors de ce laboratoire, une authentification SMB a été réalisée depuis la machine client PC01 vers le contrôleur de domaine DC01 à l'aide de la commande net use. Une première tentative avec des identifiants valides a permis d'établir une connexion réussie vers la ressource réseau \dc01.desforest.local\PCS.
            </p>
            <p className="text-lg text-foreground/80 mb-4">
              L'analyse de cet événement dans l'Event Viewer du contrôleur de domaine a révélé un événement de sécurité de type 4624 (Successful Logon). Cet événement montre qu'il s'agit d'un logon de type 3 (Network Logon), ce qui correspond à une authentification à distance via le protocole SMB. Le type de connexion est valide pour accéder aux partages administratifs.
            </p>
            <p className="text-lg text-foreground/80 mb-4">
              Une deuxième tentative a été effectuée avec un mot de passe incorrect. Cette tentative a généré un événement 4625 (Failed Logon), indiquant que l'authentification a échoué. Le message d'erreur système 1326 indique que le nom d'utilisateur ou le mot de passe est incorrect.
            </p>
            <p className="text-lg text-foreground/80 mb-6">
              Ces expériences démontrent comment le protocole NTLM fonctionne dans un environnement Active Directory. Par défaut, certaines connexions SMB utilisent NTLM comme mécanisme d'authentification, particulièrement lorsque la résolution du nom ne correspond pas exactement au SPN (Service Principal Name) attendu, ou lorsque l'accès est effectué via une adresse IP ou un nom non pleinement qualifié. NTLM agit alors comme un mécanisme de repli (fallback) lorsque Kerberos ne peut pas être utilisé.
            </p>

            <h5 className="text-lg font-bold text-primary mb-3">Tâche A.2 - Analyser la Structure du Hash NTLM</h5>
            <p className="text-lg text-foreground/80 mb-4">
              La compréhension de la structure des hash NTLM est cruciale pour comprendre comment les attaques de cracking de mots de passe fonctionnent. Le protocole NTLM repose sur deux types de hash : le hash LM et le hash NT.
            </p>
            <p className="text-lg text-foreground/80 mb-4">
              Le hash LM (LAN Manager) est basé sur l'algorithme DES et est limité à 14 caractères. Il est converti en majuscules et est insensible à la casse. Ce hash est considéré comme cryptographiquement obsolète et représente une faille de sécurité majeure. En raison de sa faible complexité, il peut être cracké très rapidement, même avec des ressources informatiques limitées.
            </p>
            <p className="text-lg text-foreground/80 mb-4">
              Le hash NT est basé sur l'algorithme MD4 appliqué au mot de passe en Unicode. Contrairement au hash LM, le hash NT est sensible à la casse et est beaucoup plus robuste. Cependant, il présente toujours des vulnérabilités potentielles, particulièrement dans le contexte du protocole NTLMv1.
            </p>
            <p className="text-lg text-foreground/80 mb-4">
              Un point important à noter est que le hash NT n'est jamais transmis directement sur le réseau. Au lieu de cela, il est utilisé pour générer une réponse dans un processus de type challenge-response. Le client calcule cette réponse en utilisant la fonction HMAC-MD5, où le hash NT sert de clé, et le challenge du serveur est combiné à des données supplémentaires.
            </p>
            <p className="text-lg text-foreground/80 mb-4">
              Le format d'un hash NTLMv2 capturé par un outil comme Responder suit généralement la structure suivante :
            </p>
            <p className="text-lg text-foreground/80 mb-4 font-mono bg-secondary/20 p-4 rounded">
              utilisateur:domaine:challenge_serveur:réponse_HMAC:blob_ntlmv2
            </p>
            <p className="text-lg text-foreground/80 mb-4">
              Ce format est exploitable pour le cracking offline car toutes les informations nécessaires pour tester les mots de passe sont présentes. Cependant, il est important de noter que ce n'est pas le hash NT brut qui est capturé, ce qui rend les attaques de type Pass-the-Hash plus difficiles.
            </p>
            <p className="text-lg text-foreground/80 mb-6">
              Les versions NTLMv1 et NTLMv2 présentent des différences importantes en termes de sécurité. NTLMv1 est beaucoup plus vulnérable car il utilise des mécanismes faibles basés sur DES et ne protège pas efficacement contre les attaques de type replay ou cracking. NTLMv2 est plus résistant grâce à l'utilisation de HMAC-MD5 et l'ajout d'un timestamp et d'un blob, ce qui rend les attaques plus complexes et réduit les risques de réutilisation des données capturées.
            </p>

            <h4 className="text-xl font-bold text-primary mb-4">Partie B : Password Spraying</h4>
            
            <h5 className="text-lg font-bold text-primary mb-3">Tâche B.1 - Fichier users.txt et Vérification de la Politique sur Kali</h5>
            <p className="text-lg text-foreground/80 mb-4">
              Le password spraying est une technique d'attaque qui consiste à tester un nombre limité de mots de passe courants contre un grand nombre de comptes d'utilisateurs. Cette technique est particulièrement efficace car elle permet d'éviter les mécanismes de verrouillage de compte tout en augmentant les chances de trouver des comptes avec des mots de passe faibles.
            </p>
            <p className="text-lg text-foreground/80 mb-4">
              La préparation du password spraying commence par la création d'un fichier users.txt contenant les noms d'utilisateurs cibles. Ce fichier a été construit à partir des informations collectées lors du Laboratoire 1 (reconnaissance Active Directory). Le fichier contient 5 comptes utilisateurs du domaine desforest.local, incluant des utilisateurs standards ainsi que des comptes de service tels que svc_backup et svc_sql.
            </p>
            <p className="text-lg text-foreground/80 mb-4">
              Les comptes de service sont particulièrement intéressants dans le cadre d'une attaque car ils sont souvent associés à des mots de passe faibles ou rarement modifiés. De plus, ces comptes possèdent généralement des privilèges élevés dans l'infrastructure, ce qui les rend des cibles attrayantes pour un attaquant.
            </p>
            <p className="text-lg text-foreground/80 mb-4">
              Avant de procéder au password spraying, il est crucial d'analyser la politique de verrouillage des comptes du domaine. Cette information permet de planifier l'attaque de manière à éviter de déclencher les mécanismes de verrouillage. La commande net accounts /domain a été utilisée pour récupérer cette information.
            </p>
            <p className="text-lg text-foreground/80 mb-4">
              Les résultats de cette commande révèlent les paramètres suivants :
            </p>
            <ul className="list-disc list-inside text-lg text-foreground/80 mb-4 space-y-2">
              <li>Lockout threshold : 5 tentatives avant verrouillage du compte</li>
              <li>Lockout duration : 30 minutes (durée du verrouillage)</li>
              <li>Lockout observation window : 30 minutes (fenêtre d'observation)</li>
            </ul>
            <p className="text-lg text-foreground/80 mb-6">
              Afin d'éviter tout verrouillage de compte, une marge de sécurité a été appliquée en limitant les tentatives à 4 essais maximum par fenêtre de 30 minutes. La stratégie adoptée consiste à espacer les tentatives et à utiliser une liste de mots de passe limités, ce qui permet de tester plusieurs comptes sans déclencher les mécanismes de verrouillage.
            </p>
          </section>

          {/* Concepts Clés */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-accent mb-6">Concepts Clés et Apprentissages</h2>
            
            <h3 className="text-2xl font-bold text-primary mb-4">Reconnaissance Active Directory</h3>
            <p className="text-lg text-foreground/80 mb-6">
              La reconnaissance Active Directory est une phase critique de tout test de pénétration. Elle permet à un attaquant de cartographier l'infrastructure cible, d'identifier les services disponibles, et de détecter les points faibles potentiels. Les techniques de reconnaissance incluent l'énumération des domaines, des contrôleurs de domaine, des utilisateurs, des groupes, et des partages réseau.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4">Protocoles d'Authentification</h3>
            <p className="text-lg text-foreground/80 mb-6">
              La compréhension des protocoles d'authentification NTLM et Kerberos est essentielle pour identifier les vulnérabilités potentielles. NTLM est un protocole d'authentification plus ancien et moins sécurisé, tandis que Kerberos est un protocole plus moderne et plus sécurisé. Cependant, les deux protocoles présentent des vulnérabilités potentielles qui peuvent être exploitées par un attaquant.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4">Attaques par Password Spraying</h3>
            <p className="text-lg text-foreground/80 mb-6">
              Le password spraying est une technique d'attaque efficace qui permet à un attaquant de contourner les mécanismes de verrouillage de compte tout en augmentant les chances de trouver des comptes avec des mots de passe faibles. Cette technique est particulièrement efficace dans les environnements d'entreprise où les politiques de mots de passe ne sont pas strictement appliquées.
            </p>
          </section>

          {/* Résultats et Conclusions */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-accent mb-6">Résultats et Conclusions</h2>
            
            <p className="text-lg text-foreground/80 mb-4">
              Ces laboratoires ont fourni une compréhension approfondie de la reconnaissance Active Directory et des protocoles d'authentification NTLM et Kerberos. Les techniques et les concepts appris sont essentiels pour tout professionnel de la cybersécurité travaillant dans un environnement d'entreprise.
            </p>
            
            <p className="text-lg text-foreground/80 mb-4">
              La reconnaissance Active Directory a démontré l'importance de bien comprendre l'infrastructure cible avant de procéder à des attaques. L'énumération des services, des utilisateurs, et des partages réseau fournit à un attaquant une vue d'ensemble de l'environnement cible et des vecteurs d'attaque potentiels.
            </p>
            
            <p className="text-lg text-foreground/80 mb-4">
              L'analyse des protocoles d'authentification a révélé les vulnérabilités potentielles dans les mécanismes d'authentification NTLM et Kerberos. La compréhension de ces vulnérabilités est cruciale pour mettre en place des défenses efficaces et pour identifier les faiblesses dans l'infrastructure d'authentification.
            </p>
            
            <p className="text-lg text-foreground/80 mb-6">
              Le password spraying a démontré comment une attaque peut être planifiée et exécutée de manière à éviter les mécanismes de verrouillage de compte. Cette technique souligne l'importance d'une politique de mots de passe stricte et de la sensibilisation des utilisateurs aux risques de sécurité.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4">Recommandations de Sécurité</h3>
            <ul className="list-disc list-inside text-lg text-foreground/80 space-y-3">
              <li><strong>Désactiver NTLM :</strong> Dans les environnements modernes, NTLM devrait être désactivé en faveur de Kerberos, qui offre une meilleure sécurité.</li>
              <li><strong>Implémenter une politique de mots de passe stricte :</strong> Les mots de passe doivent être longs, complexes, et changés régulièrement.</li>
              <li><strong>Monitorer les tentatives d'authentification échouées :</strong> Un nombre anormal de tentatives échouées peut indiquer une attaque en cours.</li>
              <li><strong>Utiliser l'authentification multi-facteurs (MFA) :</strong> MFA ajoute une couche de sécurité supplémentaire au-delà des mots de passe.</li>
              <li><strong>Limiter les privilèges des comptes de service :</strong> Les comptes de service doivent avoir le minimum de privilèges nécessaires pour fonctionner.</li>
              <li><strong>Effectuer des audits de sécurité réguliers :</strong> Les tests de pénétration et les audits de sécurité aident à identifier les vulnérabilités avant qu'elles ne soient exploitées.</li>
            </ul>
          </section>

          {/* Emplacements pour captures d'écran */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-accent mb-6">Captures d'Écran et Démonstrations</h2>
            
            <p className="text-lg text-foreground/80 mb-6">
              Les sections suivantes sont réservées pour l'insertion de captures d'écran et de démonstrations visuelles des laboratoires. Ces images aideront à illustrer les concepts et les techniques décrites ci-dessus.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4">Laboratoire 1 : Reconnaissance</h3>
            <div className="bg-secondary/20 rounded-lg p-8 mb-6 text-center text-foreground/60">
              <p>Espace réservé pour les captures d'écran de reconnaissance (nltest, nslookup, énumération DNS, etc.)</p>
            </div>

            <h3 className="text-2xl font-bold text-primary mb-4">Laboratoire 2 : Authentification NTLM</h3>
            <div className="bg-secondary/20 rounded-lg p-8 mb-6 text-center text-foreground/60">
              <p>Espace réservé pour les captures d'écran d'authentification NTLM (Event Viewer, Wireshark, etc.)</p>
            </div>

            <h3 className="text-2xl font-bold text-primary mb-4">Laboratoire 2 : Password Spraying</h3>
            <div className="bg-secondary/20 rounded-lg p-8 mb-6 text-center text-foreground/60">
              <p>Espace réservé pour les captures d'écran de password spraying (Kali, résultats d'attaque, etc.)</p>
            </div>
          </section>
        </article>
      </div>

      <Footer />
    </div>
  );
}
