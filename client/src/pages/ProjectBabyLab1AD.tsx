import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function ProjectBabyLab1AD() {
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
          <h1 className="text-5xl font-bold text-primary mb-4">Baby Lab 1 - Active Directory</h1>
          <p className="text-2xl text-accent mb-6">Configuration et Administration d'Active Directory</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-accent/20 text-accent border-accent/30">Active Directory</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Windows Server</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Gestion d'Identités</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Laboratoire</Badge>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-primary mb-6">Vue d'Ensemble du Laboratoire</h2>
            
            <p className="text-foreground/80 leading-relaxed mb-6">
              Le laboratoire Baby Lab 1 - Active Directory représente une introduction pratique à la configuration et à l'administration d'Active Directory (AD). Ce laboratoire a fourni une expérience pratique dans la mise en place d'une infrastructure Active Directory, la gestion des utilisateurs et des groupes, la configuration des politiques de groupe, et la sécurisation d'Active Directory. Le laboratoire a couvert les concepts fondamentaux d'Active Directory et les meilleures pratiques en administration d'AD. Cette expérience a été fondamentale pour développer les compétences en gestion des identités et des accès.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Objectifs du Laboratoire</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Les objectifs principaux du laboratoire Baby Lab 1 - AD incluaient :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Comprendre l'architecture et la structure d'Active Directory</li>
              <li>Installer et configurer Active Directory</li>
              <li>Créer et gérer les utilisateurs et les groupes</li>
              <li>Configurer les politiques de groupe (GPO)</li>
              <li>Gérer les permissions et les accès</li>
              <li>Mettre en place la sécurité d'Active Directory</li>
              <li>Dépanner les problèmes d'Active Directory</li>
              <li>Comprendre les meilleures pratiques en administration d'AD</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Architecture d'Active Directory</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le laboratoire a commencé par une compréhension approfondie de l'architecture d'Active Directory. Active Directory est un service d'annuaire centralisé qui gère les identités et les accès dans une organisation. L'architecture d'Active Directory comprend plusieurs composants clés :
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Domaine :</strong> Un domaine est une unité administrative d'Active Directory qui regroupe les utilisateurs, les ordinateurs, et les ressources. Un domaine a un nom unique (par exemple, contoso.com) et est administré par un ensemble de contrôleurs de domaine. Les utilisateurs d'un domaine peuvent accéder aux ressources du domaine en utilisant leurs identifiants de domaine.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Forêt :</strong> Une forêt est un ensemble de domaines qui partagent un schéma et un catalogue global communs. Une forêt peut contenir un ou plusieurs domaines. Les domaines d'une forêt peuvent avoir une relation de confiance pour permettre l'accès aux ressources entre domaines.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Contrôleur de Domaine :</strong> Un contrôleur de domaine est un serveur Windows Server qui héberge une copie de la base de données Active Directory. Les contrôleurs de domaine gèrent l'authentification des utilisateurs et l'application des politiques de groupe. Un domaine peut avoir plusieurs contrôleurs de domaine pour la redondance et la performance.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Unité Organisationnelle (OU) :</strong> Une unité organisationnelle est un conteneur dans Active Directory qui peut contenir des utilisateurs, des ordinateurs, et d'autres objets. Les OU sont utilisées pour organiser les objets et pour appliquer les politiques de groupe à des groupes d'objets.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Configuration d'Active Directory</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le laboratoire a impliqué la configuration complète d'une infrastructure Active Directory :
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Installation du Contrôleur de Domaine :</strong> La première étape a impliqué l'installation de Windows Server et la promotion du serveur en contrôleur de domaine. Cette étape a inclus la création d'un nouveau domaine et la configuration des paramètres de domaine. Le contrôleur de domaine a été configuré pour héberger la base de données Active Directory et pour gérer l'authentification des utilisateurs.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Création de la Structure d'OU :</strong> La deuxième étape a impliqué la création d'une structure d'unités organisationnelles qui reflète la structure organisationnelle de l'entreprise. La structure d'OU a été conçue pour faciliter la gestion des utilisateurs et des ordinateurs et pour appliquer les politiques de groupe de manière efficace.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Création des Utilisateurs et des Groupes :</strong> La troisième étape a impliqué la création des utilisateurs et des groupes dans Active Directory. Les utilisateurs ont été créés avec les paramètres appropriés, y compris les mots de passe, les appartenances aux groupes, et les attributs personnalisés. Les groupes ont été créés pour faciliter la gestion des permissions.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Configuration des Politiques de Groupe :</strong> La quatrième étape a impliqué la configuration des politiques de groupe (GPO) pour appliquer les paramètres de sécurité et de configuration aux utilisateurs et aux ordinateurs. Les GPO ont été configurées pour appliquer les politiques de mot de passe, les paramètres de sécurité, et les configurations de logiciels.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Gestion des Utilisateurs et des Groupes</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le laboratoire a couvert les meilleures pratiques en gestion des utilisateurs et des groupes :
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Création et Gestion des Utilisateurs :</strong> Les utilisateurs ont été créés avec les paramètres appropriés, y compris les noms d'utilisateur, les mots de passe, les appartenances aux groupes, et les informations de contact. Les utilisateurs ont été organisés dans les OU appropriées pour faciliter la gestion et l'application des politiques.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Création et Gestion des Groupes :</strong> Les groupes ont été créés pour faciliter la gestion des permissions et l'application des politiques. Les groupes ont été organisés par fonction ou par département pour faciliter la gestion. Les groupes imbriqués ont été utilisées pour créer une hiérarchie de groupes qui reflète la structure organisationnelle.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Gestion des Permissions :</strong> Les permissions ont été configurées pour contrôler l'accès aux ressources partagées. Le principe du moindre privilège a été appliqué pour assurer que les utilisateurs n'ont accès qu'aux ressources nécessaires pour accomplir leurs tâches. Les permissions ont été documentées pour faciliter la maintenance et l'audit.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Sécurité d'Active Directory</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le laboratoire a couvert les mesures de sécurité essentielles pour protéger Active Directory :
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Politiques de Mot de Passe :</strong> Des politiques de mot de passe fortes ont été configurées pour assurer que les utilisateurs utilisent des mots de passe sécurisés. Les politiques incluaient des exigences de longueur minimale, de complexité, et d'expiration des mots de passe.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Authentification Multi-Facteurs :</strong> L'authentification multi-facteurs a été configurée pour les accès sensibles pour ajouter une couche de sécurité supplémentaire. Cela a inclus l'utilisation de jetons de sécurité ou d'applications d'authentification.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Audit et Logging :</strong> L'audit et le logging ont été configurés pour enregistrer les événements importants d'Active Directory. Cela a inclus l'enregistrement des modifications d'utilisateurs, des modifications de groupes, et des tentatives de connexion échouées.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Apprentissages et Compétences Développées</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le laboratoire a permis de développer les compétences essentielles en administration d'Active Directory :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Compréhension approfondie de l'architecture d'Active Directory</li>
              <li>Capacité à installer et à configurer Active Directory</li>
              <li>Compétences en gestion des utilisateurs et des groupes</li>
              <li>Capacité à configurer les politiques de groupe</li>
              <li>Compréhension des meilleures pratiques en sécurité d'AD</li>
              <li>Capacité à dépanner les problèmes d'Active Directory</li>
              <li>Compréhension de la gestion des identités et des accès</li>
              <li>Compétences en administration de Windows Server</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Conclusion</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le laboratoire Baby Lab 1 - Active Directory a fourni une introduction pratique complète à la configuration et à l'administration d'Active Directory. Cette expérience constitue une base solide pour des rôles d'administrateur système ou d'administrateur réseau. Les compétences développées lors de ce laboratoire sont essentielles pour gérer les identités et les accès dans une organisation et sont hautement demandées dans l'industrie informatique.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
