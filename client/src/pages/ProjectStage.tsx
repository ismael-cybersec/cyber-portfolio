import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function ProjectStage() {
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
          <h1 className="text-5xl font-bold text-primary mb-4">Stage - Laboratoire de Réseautique</h1>
          <p className="text-2xl text-accent mb-6">Mise en Place Complète d'une Infrastructure Réseau d'Entreprise</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-accent/20 text-accent border-accent/30">Stage</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Infrastructure</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Réseautique</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Projet Majeur</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">6 Semaines</Badge>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-primary mb-6">Vue d'Ensemble du Stage</h2>
            
            <p className="text-foreground/80 leading-relaxed mb-6">
              Le stage au Laboratoire de Réseautique a constitué un projet majeur de 6 semaines (27 avril au 5 juin 2026) visant à mettre en place une infrastructure réseau d'entreprise complète et fonctionnelle. Ce stage a couvert l'ensemble du cycle de vie d'un projet d'infrastructure : de la planification initiale à la mise en service finale, en passant par l'installation physique, le câblage, la configuration réseau, la sécurité et les tests complets. Le projet a impliqué la coordination avec plusieurs départements (Maintenance, TI), la gestion de contraintes physiques et techniques, et la documentation complète de l'infrastructure pour utilisation future.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Semaine 1 : Prise de Connaissance et Préparation (27/04 - 01/05)</h3>
            
            <p className="text-foreground/80 leading-relaxed mb-4">
              La première semaine a été consacrée à la prise de connaissance complète des lieux et des équipements disponibles. Cette phase était cruciale pour comprendre l'environnement physique, identifier les contraintes et planifier les étapes suivantes.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Activités Principales :</strong>
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Visite complète des salles de classe et du laboratoire pour identifier les espaces disponibles</li>
              <li>Identification et catalogage des équipements Cisco, Ubiquiti, serveurs, racks, outillage et accessoires</li>
              <li>Création d'un inventaire global physique des équipements par type et catégorie</li>
              <li>Inventaire détaillé incluant numéro de série, marque et numéro d'inventaire pour chaque équipement</li>
              <li>Réinitialisation des équipements réseau pour démarrer avec une configuration vierge</li>
              <li>Identification des emplacements optimaux pour les racks dans le laboratoire</li>
              <li>Ouverture de tickets de maintenance pour la fixation des racks au sol</li>
              <li>Supervision de la fixation des racks et mise à terre pour la sécurité</li>
              <li>Élaboration du document d'architecture v1 incluant plans des salles et schémas logiques de base</li>
              <li>Ouverture de tickets auprès des TI pour une ligne Internet directe et le passage des câbles</li>
              <li>Mise à jour de la documentation des serveurs et des plages d'adresses pour les VLANs</li>
              <li>Documentation des équipements Ubiquiti et WatchGuard</li>
              <li>Placement des patch panels pour l'interconnexion des câbles</li>
              <li>Placement des serveurs sur les racks selon le plan d'architecture</li>
              <li>Placement du premier UPS pour alimentation redondante des serveurs</li>
              <li>Placement du KVM (Keyboard Video Mouse) pour accès centralisé</li>
              <li>Placement du SAN (Storage Area Network) sur le rack avec les serveurs</li>
              <li>Placement du DAS (Direct Attached Storage) pour stockage supplémentaire</li>
              <li>Libération du Switch Ubiquiti et du point d'accès de l'armoire CYSE</li>
              <li>Réinitialisation du WatchGuard (pare-feu)</li>
            </ul>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Défis Identifiés :</strong> L'UPS s'éteignait régulièrement, soulevant des questions sur la charge ou le voltage de la prise murale. Une barre métallique devait être retirée du grand rack pour placer les supports des serveurs. Des vis et une barre métallique à découper étaient manquantes pour la fixation finale.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Livrables Semaine 1 :</strong>
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Document d'architecture v1 (topologie physique et logique, connexions, emplacements)</li>
              <li>Rapport v1 retraçant l'état initial, les contraintes identifiées et les premières décisions</li>
              <li>Inventaire complet des équipements</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Semaine 2-3 : Câblage et Connectivité (04/05 - 15/05)</h3>
            
            <p className="text-foreground/80 leading-relaxed mb-4">
              Les semaines 2 et 3 ont été consacrées au câblage complet du laboratoire, une tâche complexe impliquant la planification détaillée, la préparation des câbles et leur installation dans les salles de classe.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Activités Principales :</strong>
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Planification détaillée du câblage : répartition des câbles, chemins, longueurs et routes</li>
              <li>Identification des emplacements des connecteurs côté salle de classe (2 connecteurs par bureau d'étudiant, 4 pour bureaux enseignants)</li>
              <li>Préparation des câbles : étiquetage des deux extrémités, organisation par paquets</li>
              <li>Passage des câbles dans la salle 1106-D en respectant les règles de tirage et cheminements clairs</li>
              <li>Passage des câbles dans la salle 1109 en respectant les règles de tirage et cheminements clairs</li>
              <li>Passage de deux câbles du 1106-E vers le 1101-H pour Internet</li>
              <li>Passage de deux câbles du 1106-E vers le 1103 pour Internet</li>
              <li>Déplacement de l'équipement Juniper vers le 1106-E</li>
              <li>Tests de connectivité Internet</li>
              <li>Nettoyage des anciens câbles pour organisation</li>
              <li>Achat des goulottes, prises murales, crochets, trays pour finaliser le câblage</li>
              <li>Placement des crochets et trays pour support des câbles</li>
              <li>Demande d'une adresse IP publique statique auprès des TI</li>
              <li>Placement du deuxième UPS pour redondance complète</li>
              <li>Mise en place des câbles du faux plafond sur les crochets</li>
              <li>Alignement des câbles du 1106-E sur les trays</li>
              <li>Découpe des câbles selon les longueurs adéquates</li>
              <li>Pose des connecteurs RJ-45 aux deux extrémités de chaque câble</li>
              <li>Raccordement des câbles des salles aux patch panels avec étiquetage cohérent</li>
              <li>Tests de continuité pour vérifier chaque câble et identifier les erreurs</li>
              <li>Remplacement des câbles défectueux</li>
              <li>Organisation claire et professionnelle des racks</li>
            </ul>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Défis Rencontrés :</strong> L'achat des matériaux (goulottes, prises, crochets, trays) était en cours, retardant légèrement la finalisation. La coordination avec la maintenance pour le placement des crochets et trays a nécessité la création de tickets spécifiques.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Livrables Semaines 2-3 :</strong>
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Document d'architecture v2 (plan mis à jour, schéma, connexions, tableau d'étiquetage)</li>
              <li>Rapport v2 décrivant l'avancement, les constats, les écarts et les corrections</li>
              <li>Infrastructure de câblage complète et testée</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Semaine 4-5 : Configuration Réseau et Sécurité (18/05 - 29/05)</h3>
            
            <p className="text-foreground/80 leading-relaxed mb-4">
              Les semaines 4 et 5 ont marqué la transition de l'infrastructure physique à la configuration logique, avec mise en place du plan d'adressage, configuration des équipements réseau et mise en place de la sécurité.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Activités Principales :</strong>
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Élaboration du plan d'adressage par VLAN incluant VLANs étudiants, enseignants, sans fil</li>
              <li>Prévision de l'évolutivité avec possibilité d'ajouter des VLANs futurs</li>
              <li>Documentation détaillée des sous-réseaux : masques, passerelles, plages DHCP, adresses statiques</li>
              <li>Installation des équipements réseau et sécurité dans les racks</li>
              <li>Branchement de tous les équipements de l'infrastructure</li>
              <li>Branchement de l'alimentation principale et redondante de tous les équipements</li>
              <li>Intégration des équipements sans fil (points d'accès Ubiquiti)</li>
              <li>Configuration du réseau filaire (routeurs, commutateurs, VLAN)</li>
              <li>Configuration du réseau sans fil (SSID, sécurité WPA2/WPA3)</li>
              <li>Configuration des serveurs Proxmox pour virtualisation</li>
              <li>Gestion des accès : création de profils pour étudiants et enseignants</li>
              <li>Mise en place des accès d'administration sécurisés (SSH, console, accès web limité)</li>
              <li>Configuration des pare-feu WatchGuard pour sécurité réseau</li>
              <li>Mise en place de la segmentation réseau par VLAN</li>
              <li>Configuration du routage inter-VLAN</li>
              <li>Configuration des services DHCP pour attribution automatique d'adresses</li>
            </ul>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Livrables Semaines 4-5 :</strong>
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Plan d'adressage détaillé (VLAN, sous-réseaux, plages DHCP, adresses statiques)</li>
              <li>Documentation des accès (comptes administrateurs, mots de passe, notes de sécurité)</li>
              <li>Documentation technique complète de l'architecture réseau</li>
              <li>Manuel d'utilisation du laboratoire (architecture, rôles, règles de sécurité)</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Semaine 6 : Tests et Finalisation (01/06 - 05/06)</h3>
            
            <p className="text-foreground/80 leading-relaxed mb-4">
              La dernière semaine a été consacrée aux tests complets de l'infrastructure, aux ajustements finaux et à la documentation complète pour la remise du laboratoire opérationnel.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Tests Complets :</strong>
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Tests de connectivité : ping, routage, accès internet, VLAN, sans fil, serveurs</li>
              <li>Tests de performance de base : bande passante, Wi-Fi, latence</li>
              <li>Tests de scénarios pédagogiques : connexion multiple, changement de VLAN, accès aux serveurs</li>
              <li>Vérification et validation finale de l'inventaire</li>
              <li>Tests de basculement des UPS et redondance</li>
              <li>Tests de sécurité : vérification des pare-feu, ACL, segmentation VLAN</li>
            </ul>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Ajustements et Optimisations :</strong>
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Correction des erreurs identifiées (câblage, configuration, sécurité, documentation)</li>
              <li>Optimisations identifiées durant les tests</li>
              <li>Revue finale du projet avec superviseurs</li>
              <li>Validation fonctionnelle complète du laboratoire</li>
            </ul>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Documentation Finale :</strong>
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Version finale du document d'architecture</li>
              <li>Manuel d'utilisation complet du laboratoire (étudiants + enseignants)</li>
              <li>Inventaire à jour avec schéma de câblage et étiquetage</li>
              <li>Tableau des adresses IP réservées</li>
              <li>Procédures de maintenance minimale</li>
              <li>Procédures de dépannage courant</li>
            </ul>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Livrables Semaine 6 :</strong>
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Tests validés et rapport de tests complet</li>
              <li>Laboratoire opérationnel et documenté</li>
              <li>Documentation finale complète et mise à jour</li>
              <li>Présentation finale du projet</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Compétences Développées</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Ce stage a développé une large gamme de compétences professionnelles :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Planification et gestion de projets d'infrastructure complexes</li>
              <li>Installation et configuration d'équipements réseau professionnels</li>
              <li>Câblage structuré et respect des normes de l'industrie</li>
              <li>Configuration de réseaux VLAN et routage inter-VLAN</li>
              <li>Configuration de services DHCP et DNS</li>
              <li>Configuration de pare-feu et sécurité réseau</li>
              <li>Configuration de points d'accès sans fil</li>
              <li>Configuration de serveurs Proxmox pour virtualisation</li>
              <li>Tests et validation d'infrastructure réseau</li>
              <li>Documentation technique professionnelle</li>
              <li>Gestion des accès et sécurité des systèmes</li>
              <li>Coordination avec d'autres départements (Maintenance, TI)</li>
              <li>Résolution de problèmes techniques complexes</li>
              <li>Gestion des contraintes physiques et techniques</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Impact et Résultats</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le stage a abouti à la mise en place d'une infrastructure réseau d'entreprise complète et fonctionnelle, prête à être utilisée par les étudiants et enseignants. L'infrastructure supporte plusieurs VLANs, offre une redondance par UPS, dispose d'une sécurité appropriée via pare-feu, et est entièrement documentée pour utilisation et maintenance futures. Le laboratoire est maintenant un environnement d'apprentissage professionnel où les étudiants peuvent acquérir une expérience pratique en réseautique et cybersécurité. Ce projet a démontré la capacité à gérer un projet d'infrastructure complexe du début à la fin, en respectant les délais et en livrant une solution de qualité professionnelle.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Conclusion</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le stage au Laboratoire de Réseautique a constitué une expérience pratique complète et enrichissante couvrant tous les aspects de la mise en place d'une infrastructure réseau d'entreprise. De la planification initiale à la mise en service finale, en passant par l'installation physique, le câblage, la configuration réseau et les tests complets, ce projet a fourni une compréhension holistique de la réseautique professionnelle. Les compétences développées et l'expérience acquise constituent une base solide pour une carrière réussie en réseautique et en cybersécurité.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Emplacements pour Captures d'Écran</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              [Insérez ici les captures d'écran du document d'architecture v1 et v2]
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              [Insérez ici les photos de l'infrastructure physique : racks, équipements, câblage]
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              [Insérez ici les captures d'écran des configurations réseau : VLAN, routage, pare-feu]
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              [Insérez ici les résultats des tests de connectivité et performance]
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
