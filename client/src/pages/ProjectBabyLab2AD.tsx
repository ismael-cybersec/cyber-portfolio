import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function ProjectBabyLab2AD() {
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
          <h1 className="text-5xl font-bold text-foreground mb-4">Baby Lab 2 - Active Directory Avancé</h1>
          <p className="text-2xl text-accent mb-6">Gestion Avancée d'Active Directory et Sécurité</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-accent/20 text-accent border-accent/30">Active Directory</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Sécurité</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">GPO</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Réplication</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Laboratoire Avancé</Badge>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-foreground mb-6">Vue d'Ensemble du Laboratoire</h2>
            
            <p className="text-foreground/80 leading-relaxed mb-6">
              Le laboratoire Baby Lab 2 - Active Directory Avancé représente une étude approfondie des aspects avancés d'Active Directory, y compris la réplication, la sécurité avancée, la gestion des sites, et la récupération après sinistre. Ce laboratoire a fourni une expérience pratique dans la conception d'une infrastructure Active Directory hautement disponible et sécurisée. Le laboratoire a couvert les concepts avancés d'Active Directory et les meilleures pratiques en administration d'AD à grande échelle. Cette expérience a été fondamentale pour développer les compétences en gestion d'une infrastructure Active Directory complexe.
            </p>

            <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Objectifs du Laboratoire</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Les objectifs principaux du laboratoire Baby Lab 2 - AD Avancé incluaient :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Comprendre la réplication d'Active Directory</li>
              <li>Configurer les sites et les liaisons de sites</li>
              <li>Mettre en place la sécurité avancée d'Active Directory</li>
              <li>Configurer les politiques de groupe avancées</li>
              <li>Gérer les forêts et les domaines multiples</li>
              <li>Mettre en place la haute disponibilité d'Active Directory</li>
              <li>Planifier et mettre en œuvre la récupération après sinistre</li>
              <li>Dépanner les problèmes complexes d'Active Directory</li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Réplication d'Active Directory</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le laboratoire a couvert en détail le mécanisme de réplication d'Active Directory, qui est essentiel pour maintenir la cohérence des données dans une infrastructure Active Directory distribuée :
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Réplication Intra-Site :</strong> La réplication intra-site est la réplication entre contrôleurs de domaine au sein d'un même site. Cette réplication est optimisée pour les connexions réseau à haut débit et utilise la réplication complète des modifications. La réplication intra-site se produit automatiquement selon un calendrier défini.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Réplication Inter-Site :</strong> La réplication inter-site est la réplication entre contrôleurs de domaine dans différents sites. Cette réplication est optimisée pour les connexions réseau à faible bande passante et utilise la compression des données. La réplication inter-site peut être configurée pour utiliser des horaires spécifiques pour minimiser l'utilisation de la bande passante.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Topologie de Réplication :</strong> La topologie de réplication définit comment les contrôleurs de domaine répliquent les données entre eux. Le service KCC (Knowledge Consistency Checker) génère automatiquement la topologie de réplication pour assurer la convergence des données. La topologie peut être visualisée et modifiée à l'aide des outils d'administration d'Active Directory.
            </p>

            <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Gestion des Sites et des Liaisons de Sites</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le laboratoire a impliqué la configuration des sites et des liaisons de sites pour optimiser la réplication et l'authentification dans une infrastructure Active Directory distribuée :
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Création des Sites :</strong> Les sites ont été créés pour représenter les emplacements physiques de l'organisation. Chaque site contient un ensemble de sous-réseaux qui définissent les adresses IP associées au site. Les contrôleurs de domaine ont été assignés aux sites appropriés pour assurer que les clients se connectent aux contrôleurs de domaine locaux.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Configuration des Liaisons de Sites :</strong> Les liaisons de sites ont été configurées pour définir la connectivité réseau entre les sites. Les liaisons de sites définissent le coût de la réplication, la fréquence de réplication, et le protocole de réplication. Les liaisons de sites ont été configurées pour refléter la topologie réseau réelle et pour optimiser la réplication.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Optimisation de la Réplication :</strong> La réplication a été optimisée en configurant les horaires de réplication, les coûts de liaisons, et les protocoles de réplication. L'optimisation a assuré que la réplication se produit efficacement sans surcharger les liaisons réseau.
            </p>

            <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Sécurité Avancée d'Active Directory</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le laboratoire a couvert les mesures de sécurité avancées pour protéger Active Directory contre les menaces de sécurité :
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Délégation Administrative :</strong> La délégation administrative a été configurée pour permettre aux administrateurs de déléguer des tâches administratives spécifiques à d'autres utilisateurs. La délégation a été configurée en utilisant le principe du moindre privilège pour assurer que les utilisateurs n'ont que les permissions nécessaires.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Sécurité du Schéma :</strong> Le schéma d'Active Directory a été protégé contre les modifications non autorisées. L'accès au schéma a été limité aux administrateurs d'entreprise. Les modifications du schéma ont été documentées et approuvées avant d'être appliquées.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Audit de Sécurité :</strong> L'audit de sécurité a été configuré pour enregistrer les événements importants d'Active Directory. Les événements auditées incluaient les modifications de schéma, les modifications d'administrateurs, et les accès aux objets sensibles. Les journaux d'audit ont été examinés régulièrement pour identifier les activités suspectes.
            </p>

            <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Politiques de Groupe Avancées</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le laboratoire a couvert les politiques de groupe avancées pour appliquer des configurations complexes aux utilisateurs et aux ordinateurs :
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Filtrage des GPO :</strong> Le filtrage des GPO a été configuré pour appliquer les politiques à des groupes d'utilisateurs ou d'ordinateurs spécifiques. Le filtrage a utilisé les groupes de sécurité pour contrôler l'application des politiques. Les filtres WMI ont été utilisés pour appliquer les politiques en fonction des attributs des ordinateurs.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Héritage des GPO :</strong> L'héritage des GPO a été configuré pour assurer que les politiques définies à des niveaux supérieurs de la hiérarchie d'OU sont appliquées aux niveaux inférieurs. Le blocage d'héritage a été utilisé pour empêcher l'application de certaines politiques à des OU spécifiques.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Ordre d'Application des GPO :</strong> L'ordre d'application des GPO a été configuré pour assurer que les politiques sont appliquées dans l'ordre correct. Les politiques appliquées en dernier ont la priorité sur les politiques appliquées antérieurement.
            </p>

            <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Haute Disponibilité et Récupération après Sinistre</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le laboratoire a couvert la planification et la mise en œuvre de la haute disponibilité et de la récupération après sinistre pour Active Directory :
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Redondance des Contrôleurs de Domaine :</strong> Plusieurs contrôleurs de domaine ont été déployés pour assurer la redondance. En cas de défaillance d'un contrôleur de domaine, les autres contrôleurs de domaine continuent à fournir les services d'authentification et de réplication.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Sauvegarde et Restauration :</strong> Les sauvegardes régulières d'Active Directory ont été effectuées pour permettre la récupération après sinistre. Les sauvegardes ont inclus l'état du système et la base de données Active Directory. Les procédures de restauration ont été testées régulièrement pour assurer qu'elles fonctionnent correctement.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Plan de Récupération après Sinistre :</strong> Un plan de récupération après sinistre a été développé pour guider la récupération d'Active Directory en cas de sinistre. Le plan incluait les étapes de récupération, les responsabilités, et les délais de récupération cibles.
            </p>

            <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Apprentissages et Compétences Développées</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le laboratoire a permis de développer les compétences avancées en administration d'Active Directory :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Compréhension approfondie de la réplication d'Active Directory</li>
              <li>Capacité à configurer les sites et les liaisons de sites</li>
              <li>Compétences en sécurité avancée d'Active Directory</li>
              <li>Capacité à configurer les politiques de groupe avancées</li>
              <li>Compréhension de la gestion des forêts et des domaines multiples</li>
              <li>Capacité à planifier et à mettre en œuvre la haute disponibilité</li>
              <li>Compétences en récupération après sinistre</li>
              <li>Capacité à dépanner les problèmes complexes d'Active Directory</li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Conclusion</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le laboratoire Baby Lab 2 - Active Directory Avancé a fourni une formation complète dans les aspects avancés d'Active Directory. Cette expérience constitue une base solide pour des rôles d'administrateur système senior ou d'architecte d'infrastructure. Les compétences développées lors de ce laboratoire sont essentielles pour gérer une infrastructure Active Directory complexe et hautement disponible et sont hautement demandées dans l'industrie informatique.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
