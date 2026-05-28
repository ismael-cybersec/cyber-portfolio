import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function ProjectActiveDirectoryLabs() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation onContactClick={() => window.location.href = "#contact"} />

      <div className="container py-20">
        <Link href="/" className="text-accent hover:text-accent/80 transition-colors flex items-center gap-2">
  <ArrowLeft className="w-5 h-5" /> Retour au Portfolio
</Link>

        <article className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-primary mb-4">Active Directory Labs - Reconnaissance & Authentification</h1>
          <p className="text-xl text-foreground/70 mb-12">
            Laboratoires complets couvrant la reconnaissance Active Directory, l'énumération des services, l'analyse des protocoles d'authentification NTLM et Kerberos, et les attaques par password spraying avec une profondeur technique exceptionnelle.
          </p>

          {/* Introduction */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-accent mb-6">Introduction</h2>
            <p className="text-lg text-foreground/80 mb-4">
              Ces laboratoires font partie du cours SECS1028 - Cycle de vie du piratage informatique au Collège communautaire du Nouveau-Brunswick (CCNB). Ils couvrent deux domaines critiques de la sécurité Active Directory : la reconnaissance et l'énumération des services, ainsi que l'analyse approfondie des mécanismes d'authentification NTLM et Kerberos, incluant les vulnérabilités potentielles et les techniques d'exploitation.
            </p>
            <p className="text-lg text-foreground/80 mb-4">
              L'objectif pédagogique est de comprendre en profondeur comment fonctionne l'infrastructure Active Directory, comment énumérer les services disponibles, et comment les protocoles d'authentification peuvent être exploités par un attaquant. Ces connaissances sont essentielles pour tout professionnel de la cybersécurité travaillant dans un environnement d'entreprise.
            </p>
            <p className="text-lg text-foreground/80">
              Active Directory est le service d'annuaire central de Microsoft Windows Server qui gère l'authentification, l'autorisation et la gestion des ressources dans les environnements d'entreprise. Comprendre ses mécanismes de sécurité, ses vulnérabilités et les techniques d'exploitation est crucial pour les testeurs de pénétration, les administrateurs système et les professionnels de la sécurité informatique.
            </p>
          </section>

          {/* Lab 1 - Reconnaissance */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-accent mb-6">Laboratoire 1 : Reconnaissance Active Directory</h2>
            
            <h3 className="text-2xl font-bold text-primary mb-4">Énumération, Cartographie et Analyse de la Surface d'Attaque AD</h3>
            
            <p className="text-lg text-foreground/80 mb-6">
              Le premier laboratoire se concentre sur la reconnaissance active de l'infrastructure Active Directory. Cette phase est critique dans un test de pénétration car elle permet à un attaquant de cartographier l'environnement cible, d'identifier les services disponibles, et de détecter les points faibles potentiels. La reconnaissance est souvent la première étape d'une attaque réussie, car elle fournit à l'attaquant les informations nécessaires pour planifier les étapes suivantes.
            </p>

            <h4 className="text-xl font-bold text-primary mb-4">1.1 Identification du Domaine et des Contrôleurs de Domaine</h4>
            <p className="text-lg text-foreground/80 mb-4">
              La première étape consiste à identifier le domaine Active Directory et les contrôleurs de domaine qui le gèrent. Cette information est fondamentale car elle permet de comprendre la structure de l'infrastructure d'authentification. Un domaine Active Directory est une unité administrative logique qui contient des utilisateurs, des ordinateurs, des imprimantes et d'autres ressources réseau.
            </p>
            <p className="text-lg text-foreground/80 mb-4">
              Les contrôleurs de domaine (DC) sont les serveurs qui gèrent l'authentification et l'autorisation dans le domaine. Chaque domaine doit avoir au moins un contrôleur de domaine, mais les environnements d'entreprise en ont généralement plusieurs pour assurer la redondance et la disponibilité. Le premier contrôleur de domaine créé dans un domaine est appelé PDC (Primary Domain Controller) et joue un rôle spécial dans la gestion du domaine.
            </p>
            <p className="text-lg text-foreground/80 mb-4">
              Lors de ce laboratoire, des commandes ont été exécutées sur la machine client PC01 afin d'identifier les informations de base du domaine Active Directory. La commande nltest /dclist:desforest.local a révélé que le domaine est desforest.local (FQDN - Fully Qualified Domain Name), avec un contrôleur de domaine principal situé à DC01.desforest.local avec l'adresse IP 192.168.56.10.
            </p>
            <p className="text-lg text-foreground/80 mb-4">
              Ce serveur possède plusieurs rôles importants : il agit comme serveur SUS (Single Update Server), PDC (Primary Domain Controller), LDAP et KDC (Key Distribution Center). Le rôle SUS signifie que ce serveur est responsable de la synchronisation de l'heure dans le domaine. Le rôle PDC indique que c'est le contrôleur de domaine principal. LDAP (Lightweight Directory Access Protocol) est le protocole utilisé pour accéder à l'annuaire Active Directory. KDC (Key Distribution Center) est le service qui gère l'authentification Kerberos.
            </p>
            <p className="text-lg text-foreground/80 mb-6">
              Ces rôles sont essentiels pour le fonctionnement de l'infrastructure d'authentification et de l'annuaire Active Directory. Comprendre ces rôles permet à un attaquant de cibler les services critiques et de planifier des attaques plus efficaces. Par exemple, si le KDC est compromis, un attaquant pourrait potentiellement générer des tickets Kerberos falsifiés.
            </p>

            <h4 className="text-xl font-bold text-primary mb-4">1.2 Cartographie DNS du Domaine</h4>
            <p className="text-lg text-foreground/80 mb-4">
              La cartographie DNS est une étape cruciale de la reconnaissance. Elle permet d'identifier tous les services Active Directory disponibles dans le domaine en effectuant des requêtes DNS de type SRV (Service Records). Les enregistrements SRV sont des enregistrements DNS spéciaux qui identifient les services disponibles dans un domaine.
            </p>
            <p className="text-lg text-foreground/80 mb-4">
              Active Directory utilise DNS pour localiser les services critiques. Chaque service enregistre un enregistrement SRV dans DNS qui indique le nom du serveur qui fournit ce service et le port sur lequel il écoute. Par exemple, le service Kerberos enregistre un enregistrement SRV pour le port 88, le service LDAP pour le port 389, et ainsi de suite.
            </p>
            <p className="text-lg text-foreground/80 mb-4">
              Les résultats des requêtes DNS révèlent les services suivants disponibles dans le domaine desforest.local :
            </p>
            <ul className="list-disc list-inside text-lg text-foreground/80 mb-4 space-y-2">
              <li><strong>Service Kerberos (port 88)</strong> - Protocole d'authentification principal utilisé par Active Directory. Kerberos est un protocole d'authentification basé sur des tickets qui permet aux utilisateurs de s'authentifier sans envoyer leur mot de passe sur le réseau.</li>
              <li><strong>Service LDAP (port 389)</strong> - Protocole d'accès à l'annuaire utilisé pour interroger et modifier l'annuaire Active Directory. LDAP permet aux applications de rechercher des utilisateurs, des groupes et d'autres objets dans Active Directory.</li>
              <li><strong>Service Global Catalog (port 3268)</strong> - Service qui maintient une copie partielle de tous les objets dans la forêt Active Directory. Le Global Catalog permet de rechercher des objets dans tous les domaines de la forêt.</li>
              <li><strong>Serveur centralisé : dc01.desforest.local (192.168.56.10)</strong> - Adresse IP du contrôleur de domaine principal.</li>
            </ul>
            <p className="text-lg text-foreground/80 mb-4">
              Ces informations sont extrêmement importantes pour la phase de reconnaissance car elles permettent à un attaquant d'identifier les services disponibles, les ports utilisés, et les serveurs critiques à cibler pour des futures attaques. Par exemple, connaître que le service Kerberos est disponible sur le port 88 permet de cibler les attaques de type AS-REP Roasting ou Kerberoasting.
            </p>
            <p className="text-lg text-foreground/80 mb-6">
              L'AS-REP Roasting est une attaque qui cible les utilisateurs dont l'authentification Kerberos préalable n'est pas requise (UPN_OPTS_DONT_REQUIRE_PREAUTH). Ces utilisateurs peuvent envoyer une demande AS-REQ (Authentication Service Request) sans fournir de preuve d'identité, et le serveur répondra avec un ticket TGT (Ticket Granting Ticket) chiffré avec le hash du mot de passe de l'utilisateur. Un attaquant peut capturer ce ticket et le cracker hors ligne. Le Kerberoasting est une attaque similaire qui cible les comptes de service en demandant des tickets de service (TGS - Ticket Granting Service) et en les crackant hors ligne.
            </p>

            <h4 className="text-xl font-bold text-primary mb-4">1.3 Énumération des Utilisateurs du Domaine</h4>
            <p className="text-lg text-foreground/80 mb-4">
              Une fois la structure de base du domaine identifiée, l'étape suivante consiste à énumérer les utilisateurs du domaine. Cette information est critique car elle fournit une liste de cibles potentielles pour les attaques d'authentification. L'énumération des utilisateurs peut être effectuée de plusieurs façons, notamment en utilisant LDAP, en effectuant des tentatives d'authentification, ou en utilisant des outils spécialisés.
            </p>
            <p className="text-lg text-foreground/80 mb-4">
              Lors de ce laboratoire, des commandes PowerShell ont été utilisées pour énumérer les utilisateurs Active Directory, identifier les groupes de sécurité, et analyser les permissions et les rôles. PowerShell est un outil puissant pour administrer Active Directory et peut être utilisé pour effectuer des énumérations détaillées.
            </p>
            <p className="text-lg text-foreground/80 mb-4">
              La cmdlet Get-ADUser peut être utilisée pour énumérer les utilisateurs du domaine. Cette cmdlet retourne des informations détaillées sur chaque utilisateur, notamment le nom d'utilisateur, le nom complet, la description, le groupe principal, les groupes auxquels l'utilisateur appartient, et d'autres attributs. L'énumération révèle non seulement les utilisateurs standards, mais aussi les comptes de service qui sont souvent associés à des mots de passe faibles ou rarement modifiés.
            </p>
            <p className="text-lg text-foreground/80 mb-4">
              Les comptes de service sont particulièrement intéressants car ils sont souvent utilisés pour exécuter des services ou des applications. Ces comptes ont généralement des privilèges élevés et des mots de passe qui ne changent pas fréquemment. De plus, les comptes de service sont souvent documentés dans les fichiers de configuration ou les scripts, ce qui peut permettre à un attaquant de découvrir les mots de passe.
            </p>
            <p className="text-lg text-foreground/80 mb-6">
              L'énumération des groupes de sécurité est également importante car elle révèle la structure organisationnelle du domaine et les permissions associées à chaque groupe. Les groupes de sécurité sont utilisés pour gérer les permissions sur les ressources réseau. Un attaquant peut utiliser cette information pour identifier les groupes privilégiés et cibler les utilisateurs qui en sont membres.
            </p>

            <h4 className="text-xl font-bold text-primary mb-4">1.4 Analyse des Partages Réseau</h4>
            <p className="text-lg text-foreground/80 mb-4">
              L'identification des partages réseau disponibles est une étape importante de la reconnaissance. Ces partages peuvent contenir des données sensibles ou des configurations système qui pourraient être exploitées. Les partages réseau sont généralement accessibles via le protocole SMB (Server Message Block) sur le port 445.
            </p>
            <p className="text-lg text-foreground/80 mb-4">
              L'énumération des partages réseau implique d'identifier les ressources partagées, d'analyser les permissions d'accès, et d'identifier les données sensibles qui pourraient être accessibles. Cette information peut être utilisée pour planifier des attaques ultérieures ou pour identifier des vecteurs d'accès alternatifs.
            </p>
            <p className="text-lg text-foreground/80 mb-6">
              Les partages administratifs (C$, D$, ADMIN$, IPC$) sont particulièrement intéressants car ils permettent aux administrateurs de gérer les ordinateurs à distance. Un attaquant qui peut accéder à ces partages peut potentiellement exécuter des commandes à distance ou télécharger des fichiers sensibles.
            </p>

            <h4 className="text-xl font-bold text-primary mb-4">1.5 Énumération des Services et des Ports</h4>
            <p className="text-lg text-foreground/80 mb-4">
              L'énumération des services et des ports ouverts est une étape cruciale de la reconnaissance. Elle permet d'identifier les services disponibles sur les ordinateurs du domaine et les ports sur lesquels ils écoutent. Cette information peut être utilisée pour identifier les vulnérabilités potentielles et les vecteurs d'attaque.
            </p>
            <p className="text-lg text-foreground/80 mb-4">
              Les scans de ports peuvent être effectués à l'aide d'outils comme Nmap. Nmap est un outil de reconnaissance réseau puissant qui peut identifier les ports ouverts, les services en écoute, et les versions des services. Les résultats d'un scan Nmap peuvent révéler des services vulnérables ou mal configurés.
            </p>
            <p className="text-lg text-foreground/80 mb-6">
              Les ports courants utilisés par Active Directory incluent :
            </p>
            <ul className="list-disc list-inside text-lg text-foreground/80 mb-6 space-y-2">
              <li><strong>Port 53 (DNS)</strong> - Utilisé pour les requêtes DNS</li>
              <li><strong>Port 88 (Kerberos)</strong> - Utilisé pour l'authentification Kerberos</li>
              <li><strong>Port 135 (RPC)</strong> - Utilisé pour la communication RPC (Remote Procedure Call)</li>
              <li><strong>Port 139 (NetBIOS)</strong> - Utilisé pour NetBIOS over TCP/IP</li>
              <li><strong>Port 389 (LDAP)</strong> - Utilisé pour l'accès LDAP à l'annuaire</li>
              <li><strong>Port 445 (SMB)</strong> - Utilisé pour le partage de fichiers et l'impression</li>
              <li><strong>Port 3268 (Global Catalog)</strong> - Utilisé pour le Global Catalog LDAP</li>
              <li><strong>Port 3389 (RDP)</strong> - Utilisé pour le Bureau à distance</li>
            </ul>

            <h4 className="text-xl font-bold text-primary mb-4">1.6 Analyse des Politiques de Domaine</h4>
            <p className="text-lg text-foreground/80 mb-4">
              L'analyse des politiques de domaine est une étape importante de la reconnaissance. Les politiques de domaine définissent les règles de sécurité qui s'appliquent à tous les utilisateurs et ordinateurs du domaine. Ces politiques incluent les exigences en matière de mots de passe, les politiques de verrouillage de compte, les politiques de mise à jour, et d'autres paramètres de sécurité.
            </p>
            <p className="text-lg text-foreground/80 mb-4">
              Un attaquant peut utiliser les informations sur les politiques de domaine pour planifier ses attaques. Par exemple, si la politique de domaine exige des mots de passe d'au moins 8 caractères, un attaquant sait qu'il doit utiliser une liste de mots de passe qui contient des mots de passe d'au moins 8 caractères. Si la politique de verrouillage de compte est très restrictive, un attaquant doit être prudent pour ne pas déclencher le verrouillage de compte.
            </p>
            <p className="text-lg text-foreground/80 mb-6">
              Les politiques de domaine peuvent être consultées à l'aide de la commande gpresult ou en utilisant l'outil Group Policy Management Console (GPMC). Ces outils permettent de voir les politiques appliquées à un utilisateur ou un ordinateur spécifique.
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
              L'authentification NTLM est un protocole d'authentification utilisé dans les environnements Windows, particulièrement pour les connexions SMB (Server Message Block). NTLM est un protocole d'authentification basé sur un challenge-response qui a été développé par Microsoft. Bien que plus ancien que Kerberos, NTLM est toujours utilisé dans les environnements modernes pour la compatibilité rétroactive.
            </p>
            <p className="text-lg text-foreground/80 mb-4">
              Le processus d'authentification NTLM fonctionne comme suit : le client envoie une demande d'authentification au serveur. Le serveur répond avec un challenge (un nombre aléatoire). Le client utilise le hash du mot de passe de l'utilisateur pour chiffrer le challenge et envoie la réponse au serveur. Le serveur compare la réponse reçue avec la réponse qu'il aurait dû recevoir s'il avait le même hash du mot de passe. Si les réponses correspondent, l'authentification réussit.
            </p>
            <p className="text-lg text-foreground/80 mb-4">
              Lors de ce laboratoire, une authentification SMB a été réalisée depuis la machine client PC01 vers le contrôleur de domaine DC01 à l'aide de la commande net use. Une première tentative avec des identifiants valides a permis d'établir une connexion réussie vers la ressource réseau \dc01.desforest.local\PCS.
            </p>
            <p className="text-lg text-foreground/80 mb-4">
              L'analyse de cet événement dans l'Event Viewer du contrôleur de domaine a révélé un événement de sécurité de type 4624 (Successful Logon). Cet événement montre qu'il s'agit d'un logon de type 3 (Network Logon), ce qui correspond à une authentification à distance via le protocole SMB. Le type de connexion est valide pour accéder aux partages administratifs.
            </p>
            <p className="text-lg text-foreground/80 mb-4">
              L'événement 4624 contient des informations détaillées sur l'authentification, notamment le nom d'utilisateur, le domaine, l'adresse IP de la machine cliente, le type de logon, et le processus qui a initié la connexion. Ces informations peuvent être utilisées pour auditer les authentifications et détecter les activités suspectes.
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
              Le hash LM (LAN Manager) est basé sur l'algorithme DES et est limité à 14 caractères. Il est converti en majuscules et est insensible à la casse. Ce hash est considéré comme cryptographiquement obsolète et représente une faille de sécurité majeure. En raison de sa faible complexité, il peut être cracké très rapidement, même avec des ressources informatiques limitées. Le hash LM divise le mot de passe en deux moitiés de 7 caractères et chiffre chaque moitié séparément avec l'algorithme DES. Cette séparation rend le cracking encore plus facile car un attaquant peut cracker chaque moitié indépendamment.
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
            <p className="text-lg text-foreground/80 mb-4">
              Les versions NTLMv1 et NTLMv2 présentent des différences importantes en termes de sécurité. NTLMv1 est beaucoup plus vulnérable car il utilise des mécanismes faibles basés sur DES et ne protège pas efficacement contre les attaques de type replay ou cracking. NTLMv2 est plus résistant grâce à l'utilisation de HMAC-MD5 et l'ajout d'un timestamp et d'un blob, ce qui rend les attaques plus complexes et réduit les risques de réutilisation des données capturées.
            </p>
            <p className="text-lg text-foreground/80 mb-6">
              Cependant, même NTLMv2 présente des vulnérabilités. Une attaque courante est le relais NTLM, où un attaquant capture une authentification NTLM et la relaie vers un autre serveur. Cette attaque peut permettre à l'attaquant d'accéder à des ressources sans connaître le mot de passe de l'utilisateur.
            </p>

            <h4 className="text-xl font-bold text-primary mb-4">Partie B : Password Spraying</h4>
            
            <h5 className="text-lg font-bold text-primary mb-3">Tâche B.1 - Fichier users.txt et Vérification de la Politique sur Kali</h5>
            <p className="text-lg text-foreground/80 mb-4">
              Le password spraying est une technique d'attaque qui consiste à tester un nombre limité de mots de passe courants contre un grand nombre de comptes d'utilisateurs. Cette technique est particulièrement efficace car elle permet d'éviter les mécanismes de verrouillage de compte tout en augmentant les chances de trouver des comptes avec des mots de passe faibles.
            </p>
            <p className="text-lg text-foreground/80 mb-4">
              Contrairement à une attaque de force brute traditionnelle qui teste de nombreux mots de passe contre un seul compte (ce qui déclenche rapidement le verrouillage de compte), le password spraying teste un petit nombre de mots de passe contre de nombreux comptes. Cela permet à l'attaquant d'éviter le verrouillage de compte tout en augmentant les chances de trouver un compte avec un mot de passe faible.
            </p>
            <p className="text-lg text-foreground/80 mb-4">
              La préparation du password spraying commence par la création d'un fichier users.txt contenant les noms d'utilisateurs cibles. Ce fichier a été construit à partir des informations collectées lors du Laboratoire 1 (reconnaissance Active Directory). Le fichier contient 5 comptes utilisateurs du domaine desforest.local, incluant des utilisateurs standards ainsi que des comptes de service tels que svc_backup et svc_sql.
            </p>
            <p className="text-lg text-foreground/80 mb-4">
              Les comptes de service sont particulièrement intéressants dans le cadre d'une attaque car ils sont souvent associés à des mots de passe faibles ou rarement modifiés. De plus, ces comptes possèdent généralement des privilèges élevés dans l'infrastructure, ce qui les rend des cibles attrayantes pour un attaquant. Les comptes de service sont souvent créés avec des mots de passe par défaut ou des mots de passe simples pour faciliter l'administration.
            </p>
            <p className="text-lg text-foreground/80 mb-4">
              Avant de procéder au password spraying, il est crucial d'analyser la politique de verrouillage des comptes du domaine. Cette information permet de planifier l'attaque de manière à éviter de déclencher les mécanismes de verrouillage. La commande net accounts /domain a été utilisée pour récupérer cette information.
            </p>
            <p className="text-lg text-foreground/80 mb-4">
              Les résultats de cette commande révèlent les paramètres suivants :
            </p>
            <ul className="list-disc list-inside text-lg text-foreground/80 mb-4 space-y-2">
              <li><strong>Lockout threshold : 5 tentatives</strong> - Le compte sera verrouillé après 5 tentatives d'authentification échouées</li>
              <li><strong>Lockout duration : 30 minutes</strong> - Le compte restera verrouillé pendant 30 minutes</li>
              <li><strong>Lockout observation window : 30 minutes</strong> - La fenêtre d'observation est de 30 minutes, ce qui signifie que les tentatives échouées sont comptabilisées sur une période de 30 minutes</li>
            </ul>
            <p className="text-lg text-foreground/80 mb-4">
              Afin d'éviter tout verrouillage de compte, une marge de sécurité a été appliquée en limitant les tentatives à 4 essais maximum par fenêtre de 30 minutes. La stratégie adoptée consiste à espacer les tentatives et à utiliser une liste de mots de passe limités, ce qui permet de tester plusieurs comptes sans déclencher les mécanismes de verrouillage.
            </p>
            <p className="text-lg text-foreground/80 mb-6">
              Le password spraying peut être effectué à l'aide d'outils comme Kerbrute, Spray, ou des scripts personnalisés. Ces outils permettent de tester rapidement de nombreux comptes avec un nombre limité de mots de passe tout en respectant les politiques de verrouillage de compte.
            </p>

            <h5 className="text-lg font-bold text-primary mb-3">Tâche B.2 - Techniques de Password Spraying Avancées</h5>
            <p className="text-lg text-foreground/80 mb-4">
              Le password spraying peut être effectué de plusieurs façons, notamment en utilisant Kerberos, LDAP, ou SMB. Chaque méthode a ses avantages et ses inconvénients.
            </p>
            <p className="text-lg text-foreground/80 mb-4">
              <strong>Password Spraying via Kerberos :</strong> Cette méthode utilise le protocole Kerberos pour tester les mots de passe. Un attaquant envoie une demande AS-REQ (Authentication Service Request) avec le nom d'utilisateur et le mot de passe à tester. Le serveur Kerberos répondra avec un TGT (Ticket Granting Ticket) si le mot de passe est correct, ou avec une erreur si le mot de passe est incorrect. Cette méthode est efficace car elle ne génère pas d'événements de logon échoué dans les journaux d'événements (ou génère des événements différents qui peuvent être moins surveillés).
            </p>
            <p className="text-lg text-foreground/80 mb-4">
              <strong>Password Spraying via LDAP :</strong> Cette méthode utilise le protocole LDAP pour tester les mots de passe. Un attaquant se connecte au serveur LDAP avec le nom d'utilisateur et le mot de passe à tester. Si la connexion réussit, le mot de passe est correct. Cette méthode génère également des événements de logon dans les journaux d'événements.
            </p>
            <p className="text-lg text-foreground/80 mb-4">
              <strong>Password Spraying via SMB :</strong> Cette méthode utilise le protocole SMB pour tester les mots de passe. Un attaquant se connecte à un partage SMB avec le nom d'utilisateur et le mot de passe à tester. Si la connexion réussit, le mot de passe est correct. Cette méthode génère également des événements de logon dans les journaux d'événements.
            </p>
            <p className="text-lg text-foreground/80 mb-6">
              Le choix de la méthode dépend de l'environnement cible et des objectifs de l'attaquant. En général, le password spraying via Kerberos est préféré car il génère moins d'événements de logon échoué et est donc moins susceptible d'être détecté.
            </p>

            <h4 className="text-xl font-bold text-primary mb-4">Partie C : Analyse des Protocoles Kerberos</h4>
            
            <h5 className="text-lg font-bold text-primary mb-3">Tâche C.1 - Comprendre le Protocole Kerberos</h5>
            <p className="text-lg text-foreground/80 mb-4">
              Kerberos est un protocole d'authentification basé sur des tickets qui a été développé au MIT. Il est utilisé par Active Directory comme protocole d'authentification principal. Kerberos est considéré comme plus sécurisé que NTLM car il utilise des techniques de chiffrement plus modernes et ne transmet jamais le mot de passe sur le réseau.
            </p>
            <p className="text-lg text-foreground/80 mb-4">
              Le processus d'authentification Kerberos fonctionne comme suit : l'utilisateur envoie une demande AS-REQ (Authentication Service Request) au serveur Kerberos (KDC) avec son nom d'utilisateur. Le KDC vérifie le nom d'utilisateur et répond avec un TGT (Ticket Granting Ticket) chiffré avec le hash du mot de passe de l'utilisateur. L'utilisateur déchiffre le TGT avec son mot de passe et l'utilise pour demander des tickets de service (TGS - Ticket Granting Service) auprès du TGS (Ticket Granting Server).
            </p>
            <p className="text-lg text-foreground/80 mb-4">
              Le TGS répond avec un ticket de service chiffré avec le hash du mot de passe du compte de service. L'utilisateur utilise ce ticket de service pour accéder au service. Le service vérifie le ticket de service et accorde l'accès à l'utilisateur si le ticket est valide.
            </p>
            <p className="text-lg text-foreground/80 mb-6">
              Kerberos présente plusieurs avantages par rapport à NTLM : il n'envoie jamais le mot de passe sur le réseau, il utilise des techniques de chiffrement plus modernes, et il offre une meilleure scalabilité. Cependant, Kerberos présente également des vulnérabilités potentielles, notamment les attaques de type AS-REP Roasting et Kerberoasting.
            </p>

            <h5 className="text-lg font-bold text-primary mb-3">Tâche C.2 - Attaques Kerberos : AS-REP Roasting et Kerberoasting</h5>
            <p className="text-lg text-foreground/80 mb-4">
              L'AS-REP Roasting est une attaque qui cible les utilisateurs dont l'authentification Kerberos préalable n'est pas requise (UPN_OPTS_DONT_REQUIRE_PREAUTH). Ces utilisateurs peuvent envoyer une demande AS-REQ sans fournir de preuve d'identité, et le serveur répondra avec un TGT chiffré avec le hash du mot de passe de l'utilisateur. Un attaquant peut capturer ce TGT et le cracker hors ligne.
            </p>
            <p className="text-lg text-foreground/80 mb-4">
              Le Kerberoasting est une attaque similaire qui cible les comptes de service. Un attaquant demande un ticket de service (TGS) pour un compte de service spécifique. Le serveur Kerberos répond avec un ticket de service chiffré avec le hash du mot de passe du compte de service. Un attaquant peut capturer ce ticket et le cracker hors ligne.
            </p>
            <p className="text-lg text-foreground/80 mb-6">
              Ces attaques sont efficaces car les tickets Kerberos sont chiffrés avec les hash des mots de passe des utilisateurs ou des comptes de service. Si un attaquant peut capturer un ticket, il peut le cracker hors ligne sans être détecté. Les outils comme Hashcat et John the Ripper peuvent être utilisés pour cracker les tickets Kerberos.
            </p>
          </section>

          {/* Concepts Clés */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-accent mb-6">Concepts Clés et Apprentissages</h2>
            
            <h3 className="text-2xl font-bold text-primary mb-4">Reconnaissance Active Directory</h3>
            <p className="text-lg text-foreground/80 mb-4">
              La reconnaissance Active Directory est une phase critique de tout test de pénétration. Elle permet à un attaquant de cartographier l'infrastructure cible, d'identifier les services disponibles, et de détecter les points faibles potentiels. Les techniques de reconnaissance incluent l'énumération des domaines, des contrôleurs de domaine, des utilisateurs, des groupes, et des partages réseau.
            </p>
            <p className="text-lg text-foreground/80 mb-6">
              Une reconnaissance efficace peut fournir à un attaquant une mine d'informations qui peuvent être utilisées pour planifier des attaques ultérieures. C'est pourquoi il est important de limiter les informations disponibles publiquement et de surveiller les tentatives de reconnaissance.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4">Protocoles d'Authentification</h3>
            <p className="text-lg text-foreground/80 mb-4">
              La compréhension des protocoles d'authentification NTLM et Kerberos est essentielle pour identifier les vulnérabilités potentielles. NTLM est un protocole d'authentification plus ancien et moins sécurisé, tandis que Kerberos est un protocole plus moderne et plus sécurisé. Cependant, les deux protocoles présentent des vulnérabilités potentielles qui peuvent être exploitées par un attaquant.
            </p>
            <p className="text-lg text-foreground/80 mb-6">
              La migration de NTLM à Kerberos est une étape importante pour améliorer la sécurité d'un environnement Active Directory. Cependant, NTLM doit souvent être conservé pour la compatibilité rétroactive avec les applications et les systèmes hérités.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4">Attaques par Password Spraying</h3>
            <p className="text-lg text-foreground/80 mb-4">
              Le password spraying est une technique d'attaque efficace qui permet à un attaquant de contourner les mécanismes de verrouillage de compte tout en augmentant les chances de trouver des comptes avec des mots de passe faibles. Cette technique est particulièrement efficace dans les environnements d'entreprise où les politiques de mots de passe ne sont pas strictement appliquées.
            </p>
            <p className="text-lg text-foreground/80 mb-6">
              Le password spraying est souvent plus efficace qu'une attaque de force brute traditionnelle car il teste un petit nombre de mots de passe contre de nombreux comptes, ce qui augmente les chances de trouver un compte avec un mot de passe faible sans déclencher les mécanismes de verrouillage de compte.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4">Défense contre les Attaques Active Directory</h3>
            <p className="text-lg text-foreground/80 mb-4">
              La défense contre les attaques Active Directory nécessite une approche multicouche. Les administrateurs doivent mettre en place des politiques de sécurité strictes, surveiller les activités suspectes, et maintenir les systèmes à jour avec les derniers correctifs de sécurité.
            </p>
            <p className="text-lg text-foreground/80 mb-6">
              Les techniques de défense incluent l'implémentation d'une politique de mots de passe stricte, la limitation de l'énumération Active Directory, la surveillance des tentatives d'authentification échouées, l'implémentation de l'authentification multi-facteurs (MFA), et la désactivation de NTLM en faveur de Kerberos.
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
            
            <p className="text-lg text-foreground/80 mb-4">
              Le password spraying a démontré comment une attaque peut être planifiée et exécutée de manière à éviter les mécanismes de verrouillage de compte. Cette technique souligne l'importance d'une politique de mots de passe stricte et de la sensibilisation des utilisateurs aux risques de sécurité.
            </p>

            <p className="text-lg text-foreground/80 mb-6">
              En conclusion, ces laboratoires ont fourni une base solide pour comprendre la sécurité Active Directory et les techniques d'attaque et de défense. Les compétences acquises dans ces laboratoires sont essentielles pour les testeurs de pénétration, les administrateurs système, et les professionnels de la sécurité informatique.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4">Recommandations de Sécurité</h3>
            <ul className="list-disc list-inside text-lg text-foreground/80 space-y-3">
              <li><strong>Désactiver NTLM :</strong> Dans les environnements modernes, NTLM devrait être désactivé en faveur de Kerberos, qui offre une meilleure sécurité.</li>
              <li><strong>Implémenter une politique de mots de passe stricte :</strong> Les mots de passe doivent être longs, complexes, et changés régulièrement.</li>
              <li><strong>Monitorer les tentatives d'authentification échouées :</strong> Un nombre anormal de tentatives échouées peut indiquer une attaque en cours.</li>
              <li><strong>Utiliser l'authentification multi-facteurs (MFA) :</strong> MFA ajoute une couche de sécurité supplémentaire au-delà des mots de passe.</li>
              <li><strong>Limiter les privilèges des comptes de service :</strong> Les comptes de service doivent avoir le minimum de privilèges nécessaires pour fonctionner.</li>
              <li><strong>Effectuer des audits de sécurité réguliers :</strong> Les tests de pénétration et les audits de sécurité aident à identifier les vulnérabilités avant qu'elles ne soient exploitées.</li>
              <li><strong>Mettre à jour les systèmes régulièrement :</strong> Les correctifs de sécurité doivent être appliqués rapidement pour corriger les vulnérabilités connues.</li>
              <li><strong>Limiter l'énumération Active Directory :</strong> Les permissions doivent être configurées pour limiter les informations disponibles aux utilisateurs non autorisés.</li>
              <li><strong>Implémenter la détection des anomalies :</strong> Les systèmes de détection des anomalies peuvent identifier les activités suspectes qui pourraient indiquer une attaque.</li>
              <li><strong>Sensibiliser les utilisateurs :</strong> La sensibilisation des utilisateurs aux risques de sécurité est essentielle pour prévenir les attaques par ingénierie sociale.</li>
            </ul>
          </section>
        </article>
      </div>

      <Footer />
    </div>
  );
}
