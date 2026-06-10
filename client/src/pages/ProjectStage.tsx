import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function ProjectStage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border">
        <div className="container">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/" className="text-accent hover:text-accent/80 transition-colors flex items-center gap-2">
              <ArrowLeft className="w-5 h-5" /> Retour au Portfolio
            </Link>
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-4">Stage - Laboratoire de Réseautique</h1>
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
          <div className="prose prose-invert max-w-none space-y-8">

            {/* INTRODUCTION */}
            <div className="bg-secondary/20 p-8 rounded-lg border border-border">
              <h2 className="text-3xl font-bold text-foreground mb-4">Vue d'Ensemble Complète du Stage</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Le stage au Laboratoire de Réseautique du Collège communautaire du Nouveau-Brunswick, Campus Dieppe, a constitué un projet majeur d'une durée de six semaines intensives, s'étendant du 27 avril 2026 au 5 juin 2026. Ce projet ambitieux visait à concevoir, mettre en place et configurer une infrastructure réseau d'entreprise complète et fonctionnelle, capable de supporter les besoins pédagogiques d'un établissement d'enseignement moderne. Le projet a englobé l'ensemble du cycle de vie d'une infrastructure réseau : de la planification initiale et l'évaluation des ressources disponibles, en passant par l'installation physique des équipements, le câblage structuré, la configuration logique des systèmes réseau, la mise en place de la sécurité, jusqu'à la validation complète et la documentation finale.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Ce stage a impliqué une coordination complexe avec plusieurs départements de l'établissement, notamment les équipes de maintenance pour les travaux physiques, les équipes TI pour la connectivité Internet et l'infrastructure informatique, et les superviseurs du projet pour l'orientation stratégique.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                L'objectif principal du stage était de créer un environnement de laboratoire pédagogique moderne, fonctionnel et opérationnel, capable de supporter les besoins des étudiants et des enseignants, tout en intégrant les meilleures pratiques en matière de sécurité informatique, de performance réseau, et de scalabilité pour la croissance future.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Ce stage a offert une expérience pratique inestimable dans la gestion de projets d'infrastructure complexes, la résolution de problèmes techniques sophistiqués, la coordination entre équipes multidisciplinaires, et la documentation professionnelle des systèmes informatiques.
              </p>
              <img src="/cyber-portfolio/31.jpeg" alt="Ismael Baby dans le laboratoire de réseautique CCNB" className="w-full rounded-lg border border-accent/30 my-4" />
            </div>

            {/* SEMAINE 1 */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6 border-b border-accent/30 pb-4">
                Semaine 1 : Prise de Connaissance et Mise en Place Physique (27/04/2026 - 01/05/2026)
              </h2>

              <div className="space-y-6">
                <div className="bg-secondary/20 p-6 rounded-lg border border-border">
                  <h3 className="text-2xl font-bold text-accent mb-4">Phase 1 : Familiarisation Approfondie avec l'Environnement</h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    La première étape du stage a consisté à effectuer une prise de connaissance complète et systématique des lieux, des équipements disponibles, et des contraintes physiques de l'environnement. Cette phase était cruciale pour établir une base solide pour toutes les phases ultérieures du projet. La prise de connaissance des salles de classe et du laboratoire a impliqué une exploration détaillée de chaque espace, l'identification des points d'accès potentiels, l'évaluation précise de l'espace disponible pour l'installation des racks, et la compréhension complète de la disposition générale des installations.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Cette reconnaissance préalable a permis d'identifier les contraintes architecturales spécifiques, telles que la présence de faux plafonds, les limitations d'espace dans certaines salles, les points d'accès aux services informatiques existants, et les opportunités d'optimisation de l'espace.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    La prise de connaissance des équipements a compris une inspection détaillée et systématique de tout le matériel disponible, incluant les équipements réseau Cisco (switches, routeurs), les équipements Ubiquiti (points d'accès sans fil), les serveurs, les racks, les systèmes de stockage (SAN, DAS), les équipements d'alimentation (UPS), les équipements de gestion (KVM), et l'outillage divers.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    L'évaluation de l'état des équipements a révélé que certains appareils nécessitaient une réinitialisation complète avant leur utilisation, tandis que d'autres présentaient des signes d'usure ou de configuration antérieure qui devrait être effacée.
                  </p>
                  <img src="/cyber-portfolio/stage-rack-kvm.jpeg" alt="Rack avec KVM et serveurs" className="w-full rounded-lg border border-accent/30 my-4" />
                </div>

                <div className="bg-secondary/20 p-6 rounded-lg border border-border">
                  <h3 className="text-2xl font-bold text-accent mb-4">Phase 2 : Inventaire Détaillé et Organisation Systématique</h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    L'organisation et l'inventaire global physique des équipements par type ont constitué une tâche fondamentale et chronophage pour assurer une gestion efficace des ressources tout au long du projet. Cette phase a impliqué le tri systématique et la catégorisation de tous les équipements disponibles, leur regroupement par type (switches réseau, routeurs, serveurs, câbles, accessoires, etc.), et l'établissement d'une base de données centralisée pour le suivi et la gestion.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    L'inventaire détaillé avec numéro de série, marque et numéro d'inventaire pour chaque équipement a été une exigence critique pour la gestion des actifs informatiques et la conformité administrative de l'établissement. Chaque équipement a été documenté avec précision, incluant des informations détaillées telles que le fabricant exact, le modèle spécifique, le numéro de série unique, la date d'acquisition estimée, l'état général (neuf, bon, acceptable, défectueux), et les notes spéciales.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    La complétion de l'inventaire pour les serveurs, le KVM, les SAN et les UPS a été identifiée comme une priorité, car ces composants sont critiques pour l'infrastructure et nécessitent une documentation précise pour assurer la continuité de service.
                  </p>
                </div>

                <div className="bg-secondary/20 p-6 rounded-lg border border-border">
                  <h3 className="text-2xl font-bold text-accent mb-4">Phase 3 : Réinitialisation Complète des Équipements Réseau</h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    La réinitialisation des équipements réseau a été une étape essentielle et incontournable pour garantir un démarrage propre de l'infrastructure, sans configuration préalable conflictuelle ou résiduelle. Cette opération a impliqué le retour systématique de tous les équipements réseau (switches, routeurs, points d'accès) à leur configuration d'usine par défaut.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    La réinitialisation des équipements Cisco a impliqué l'accès à la console de chaque appareil via un câble de console, l'effacement complet de la configuration en mémoire flash, l'effacement de la configuration en NVRAM, et le redémarrage forcé pour charger la configuration par défaut d'usine.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    La vérification post-réinitialisation a confirmé que chaque équipement affichait le message de démarrage standard et était prêt pour la configuration initiale.
                  </p>
                  <img src="/cyber-portfolio/30.jpeg" alt="Ismael Baby — configuration des serveurs via KVM" className="w-full rounded-lg border border-accent/30 my-4" />
                </div>

                <div className="bg-secondary/20 p-6 rounded-lg border border-border">
                  <h3 className="text-2xl font-bold text-accent mb-4">Phase 4 : Identification et Installation Physique des Racks</h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    L'identification des emplacements optimaux des racks dans le laboratoire a été une décision critique qui affecte directement la performance globale de l'infrastructure, la facilité de maintenance, et la sécurité physique. Les racks devaient être positionnés de manière à optimiser le flux d'air pour la ventilation des équipements, minimiser les longueurs de câbles, faciliter l'accès pour la maintenance régulière, et assurer la sécurité physique des équipements.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    L'ouverture de tickets pour la maintenance a été un processus administratif crucial pour coordonner les travaux avec les équipes de maintenance de l'établissement. La fixation des racks au sol a impliqué l'utilisation de boulons d'ancrage appropriés et la vérification de la solidité de la structure du sol.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    La mise à la terre des racks a été une exigence de sécurité critique pour prévenir les chocs électriques, les dommages aux équipements causés par les surtensions, et les risques d'incendie.
                  </p>
                  <img src="/cyber-portfolio/stage-rack-complet.jpeg" alt="Armoire complète avec équipements réseau" className="w-full rounded-lg border border-accent/30 my-4" />
                  <img src="/cyber-portfolio/35.jpeg" alt="Ismael Baby devant le rack de serveurs installé" className="w-full rounded-lg border border-accent/30 my-4" />
                  <img src="/cyber-portfolio/40.jpeg" alt="UPS Eaton installés dans le rack" className="w-full rounded-lg border border-accent/30 my-4" />
                </div>

                <div className="bg-secondary/20 p-6 rounded-lg border border-border">
                  <h3 className="text-2xl font-bold text-accent mb-4">Phase 5 : Résolution des Défis Techniques et Obstacles</h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Plusieurs défis techniques significatifs ont été identifiés et adressés au cours de cette première semaine. Le besoin d'enlever la barre métallique au milieu du grand rack pour placer les supports des serveurs a démontré la nécessité d'adapter l'infrastructure physique existante aux besoins spécifiques du nouveau projet.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Le problème critique de l'UPS qui s'éteignait régulièrement a soulevé des questions importantes concernant l'alimentation électrique et la fiabilité des équipements. Plusieurs hypothèses ont été formulées et investigées : soit l'UPS nécessitait une charge complète, soit la prise murale ne fournissait pas le voltage correct, soit l'UPS présentait un défaut matériel.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    La question du changement potentiel d'emplacement de la prise de l'UPS a démontré la nécessité de planifier les connexions électriques avec soin, en tenant compte de la longueur des câbles d'alimentation et de la distribution équilibrée de l'alimentation dans le laboratoire.
                  </p>
                </div>

                <div className="bg-secondary/20 p-6 rounded-lg border border-border">
                  <h3 className="text-2xl font-bold text-accent mb-4">Phase 6 : Documentation Initiale et Planification Stratégique</h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    L'élaboration d'un premier document d'architecture v1 a été une étape fondamentale qui a établi la base de toutes les phases ultérieures du projet. Ce document critique devait inclure un plan détaillé de chaque salle, un schéma logique de base montrant les connexions réseau prévues, et une liste des équipements à installer.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    La mise à jour du document des serveurs et des plages d'adresses pour les VLANs a impliqué la planification initiale de la segmentation réseau, définissant les différents VLANs et les plages d'adresses IP associées.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    La documentation Ubiquiti et WatchGuard a impliqué la compilation des manuels techniques, des guides de configuration, des procédures de déploiement, et des meilleures pratiques spécifiques à ces équipements.
                  </p>
                </div>

                <div className="bg-secondary/20 p-6 rounded-lg border border-border">
                  <h3 className="text-2xl font-bold text-accent mb-4">Phase 7 : Placement Stratégique des Équipements dans les Racks</h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Le placement des équipements dans les racks a dû être planifié avec soin pour optimiser l'accès, la ventilation, la gestion des câbles, et la facilité de maintenance. Le placement des patch panels, des serveurs, du KVM, du SAN et du DAS a suivi une hiérarchie logique basée sur les meilleures pratiques de l'industrie.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Le placement du premier UPS pour les serveurs a été une décision critique, car cet équipement devait être facilement accessible pour la maintenance, la surveillance, et les interventions d'urgence.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    La libération du Switch Ubiquiti et du point d'accès de l'armoire CYSE et leur remplacement avec le matériel du 1103 a illustré la nécessité de consolider et d'optimiser l'utilisation des équipements disponibles.
                  </p>
                  <img src="/cyber-portfolio/stage-rack-cisco.jpeg" alt="Rack Legrand avec équipements Cisco" className="w-full rounded-lg border border-accent/30 my-4" />
                </div>

                <div className="bg-secondary/20 p-6 rounded-lg border border-border">
                  <h3 className="text-2xl font-bold text-accent mb-4">Livrables Complets de la Semaine 1</h3>
                  <ul className="list-disc list-inside space-y-3 text-foreground/80">
                    <li>Document d'architecture v1 incluant la topologie physique détaillée et la topologie logique de base</li>
                    <li>Plan détaillé des salles avec emplacements précis des racks et des équipements</li>
                    <li>Schéma complet des connexions prévues avec légende et notes explicatives</li>
                    <li>Inventaire complété pour la majorité des équipements avec numéros de série et états</li>
                    <li>Rapport v1 retraçant l'état initial de l'infrastructure et les contraintes identifiées</li>
                    <li>Documentation des premières décisions prises et justifications techniques</li>
                    <li>Identification complète des défis techniques et des solutions proposées</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* SEMAINE 2-3 */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6 border-b border-accent/30 pb-4">
                Semaines 2-3 : Câblage Structuré et Connectivité (04/05/2026 - 15/05/2026)
              </h2>

              <div className="space-y-6">
                <div className="bg-secondary/20 p-6 rounded-lg border border-border">
                  <h3 className="text-2xl font-bold text-accent mb-4">Phase 1 : Planification Détaillée et Stratégique du Câblage</h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    La planification du câblage a été une tâche extrêmement complexe qui a nécessité une compréhension approfondie de la topologie du réseau, des distances précises entre les équipements, des contraintes physiques de l'environnement, et des normes de câblage structuré. Cette phase a impliqué la création d'un plan détaillé montrant la répartition systématique des câbles et les chemins spécifiques à travers le bâtiment.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    L'identification précise des emplacements des connecteurs côté salle de classe a été une étape critique. Chaque bureau d'étudiant devait avoir au minimum deux connecteurs, tandis que les bureaux des enseignants devaient avoir quatre connecteurs pour supporter des configurations plus complexes.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    La préparation minutieuse des câbles a impliqué l'étiquetage précis des deux extrémités de chaque câble, l'organisation des câbles par paquet pour faciliter le passage et l'installation ultérieure.
                  </p>
                </div>

                <div className="bg-secondary/20 p-6 rounded-lg border border-border">
                  <h3 className="text-2xl font-bold text-accent mb-4">Phase 2 : Passage des Câbles et Respect Strict des Normes Professionnelles</h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Le passage des câbles dans les salles 1106-D et 1109 a dû respecter les règles strictes de tirage de câbles pour assurer une installation professionnelle, durable, et conforme aux normes de l'industrie. Les règles de tirage incluent le rayon de courbure minimum pour les câbles Ethernet et l'évitement des sources d'interférences électromagnétiques.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Le passage de deux câbles du 1106-E vers le 1101-H pour Internet et de deux câbles du 1106-E vers le 1103 pour Internet a illustré la nécessité de planifier les connexions de liaison montante avec soin et redondance.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    Le déplacement de l'équipement Juniper vers le 1106-E a démontré la nécessité d'adapter la disposition physique des équipements en fonction des besoins de connectivité et de performance.
                  </p>
                  <img src="/cyber-portfolio/stage-rack-reseau.jpeg" alt="Baie de brassage avec câblage structuré" className="w-full rounded-lg border border-accent/30 my-4" />
                  <img src="/cyber-portfolio/38.jpeg" alt="Rack Legrand avec équipements Cisco installés" className="w-full rounded-lg border border-accent/30 my-4" />
                </div>

                <div className="bg-secondary/20 p-6 rounded-lg border border-border">
                  <h3 className="text-2xl font-bold text-accent mb-4">Phase 3 : Tests de Connectivité Internet et Nettoyage</h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Le test de connectivité Internet a vérifié que la connexion fonctionne correctement et que la bande passante disponible est suffisante pour les besoins du laboratoire. Cette phase a impliqué le test de la vitesse de téléchargement et de chargement, la vérification de la latence, et la mesure de la stabilité de la connexion.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Le nettoyage des anciens câbles a éliminé le désordre visuel et physique, facilité la maintenance future, et amélioré la sécurité générale en éliminant les obstacles potentiels.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    L'achat des matériaux de finition (goulottes, prises murales, crochets, trays et autres accessoires) a été essentiel pour compléter l'installation des câbles de manière professionnelle et durable.
                  </p>
                  <img src="/cyber-portfolio/stage-rack-proxmox.jpeg" alt="Rack de serveurs Proxmox" className="w-full rounded-lg border border-accent/30 my-4" />
                </div>

                <div className="bg-secondary/20 p-6 rounded-lg border border-border">
                  <h3 className="text-2xl font-bold text-accent mb-4">Phase 4 : Installation Précise des Connecteurs et Tests de Continuité</h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    La pose des connecteurs RJ-45 aux deux extrémités de chaque câble a nécessité de la précision extrême. Chaque connecteur a dû être installé correctement en suivant rigoureusement la norme TIA/EIA 568B pour assurer la compatibilité complète et la performance optimale du réseau.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Le raccordement des câbles des salles aux patch panels avec étiquetage cohérent et professionnel a établi la base de la gestion future du réseau. Chaque port du patch panel a dû être étiqueté de manière claire et durable.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    Les tests de continuité pour chaque câble ont vérifié que chaque connexion fonctionne correctement. Un testeur de continuité professionnel a vérifié que les huit paires de fils sont correctement connectées et que l'ordre des couleurs suit la norme.
                  </p>
                </div>

                <div className="bg-secondary/20 p-6 rounded-lg border border-border">
                  <h3 className="text-2xl font-bold text-accent mb-4">Phase 5 : Organisation Finale et Demande d'Adresse IP Publique</h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    L'organisation claire et professionnelle des racks a été essentielle pour faciliter la maintenance régulière et la formation du personnel. Cette organisation a impliqué le placement logique des équipements et l'étiquetage complet de tous les ports et connexions.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    La demande d'une adresse IP publique statique auprès des équipes TI a permis à l'infrastructure du laboratoire d'être accessible de l'extérieur pour des fins pédagogiques, de démonstration, ou de maintenance à distance.
                  </p>
                </div>

                <div className="bg-secondary/20 p-6 rounded-lg border border-border">
                  <h3 className="text-2xl font-bold text-accent mb-4">Livrables Complets des Semaines 2-3</h3>
                  <ul className="list-disc list-inside space-y-3 text-foreground/80">
                    <li>Document d'architecture v2 avec plan détaillé mis à jour et schéma complet des connexions</li>
                    <li>Tableau d'étiquetage complet et précis pour tous les câbles et prises</li>
                    <li>Rapport v2 décrivant l'avancement détaillé, les constats techniques et les corrections apportées</li>
                    <li>Infrastructure de câblage complète, testée et validée</li>
                    <li>Tous les connecteurs RJ-45 installés et testés aux deux extrémités</li>
                    <li>Tests de continuité validés pour tous les câbles avec documentation des résultats</li>
                    <li>Documentation photographique de l'installation pour référence future</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* SEMAINE 4-5 */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6 border-b border-accent/30 pb-4">
                Semaines 4-5 : Configuration Réseau Avancée et Sécurité (18/05/2026 - 29/05/2026)
              </h2>

              <div className="space-y-6">
                <div className="bg-secondary/20 p-6 rounded-lg border border-border">
                  <h3 className="text-2xl font-bold text-accent mb-4">Phase 1 : Plan d'Adressage par VLAN et Segmentation Réseau</h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Le plan d'adressage par VLAN a été un élément critique et fondamental de la conception réseau. Ce plan détaillé a inclus des VLANs distincts pour les étudiants, les enseignants, l'administration, la gestion réseau, et les services sans fil. Chaque VLAN a eu sa propre plage d'adresses IP, son propre masque de sous-réseau, sa passerelle par défaut, et ses propres règles de sécurité et de routage.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    La prévision de l'évolutivité a été essentielle pour assurer que le plan d'adressage peut s'adapter à la croissance future de l'infrastructure sans nécessiter une refonte complète.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    Les informations détaillées des sous-réseaux ont inclus les masques de sous-réseau précis, les passerelles par défaut, les plages d'adresses pour DHCP, et les adresses statiques affectées aux équipements critiques.
                  </p>
                </div>

                <div className="bg-secondary/20 p-6 rounded-lg border border-border">
                  <h3 className="text-2xl font-bold text-accent mb-4">Phase 2 : Installation et Branchement Complet des Équipements</h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    L'installation des équipements réseau et sécurité dans les racks a suivi une séquence logique et bien planifiée qui assure la stabilité structurelle, l'accessibilité pour la maintenance, et la performance optimale.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Le branchement de l'alimentation principale et redondante de tous les équipements a été une tâche critique. Les équipements critiques ont été connectés à au moins deux UPS différentes pour assurer la redondance et la continuité de service.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    L'intégration des équipements sans fil a impliqué l'installation physique des points d'accès Ubiquiti dans les salles de classe et leur connexion au réseau filé via les câbles Ethernet préalablement installés.
                  </p>
                  <img src="/cyber-portfolio/stage-rack-reseau.jpeg" alt="Rack réseau avec WatchGuard et Ubiquiti" className="w-full rounded-lg border border-accent/30 my-4" />
                  <img src="/cyber-portfolio/39.jpeg" alt="SAN Dell PowerVault ME5012 et extension MD1400" className="w-full rounded-lg border border-accent/30 my-4" />
                </div>

                <div className="bg-secondary/20 p-6 rounded-lg border border-border">
                  <h3 className="text-2xl font-bold text-accent mb-4">Phase 3 : Configuration Avancée du Réseau Filaire et Sans Fil</h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    La configuration du réseau filaire a impliqué la configuration détaillée des switches Cisco, des routeurs, et des pare-feux WatchGuard. Cette configuration complexe a compris la création des VLANs sur les switches, la configuration du routage inter-VLAN, la configuration des ports de liaison montante pour la connexion à Internet, et la configuration des ACL pour contrôler le trafic.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    La configuration du réseau sans fil a impliqué la configuration détaillée des points d'accès Ubiquiti, la création des SSIDs, la configuration de la sécurité sans fil WPA2/WPA3, et l'intégration avec le réseau filaire.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    La configuration des serveurs Proxmox a impliqué l'installation du système d'exploitation de virtualisation, la configuration de la mise en réseau pour l'intégration avec les VLANs, et la préparation des serveurs pour héberger les machines virtuelles pédagogiques.
                  </p>
                  <img src="/cyber-portfolio/stage-rack-proxmox.jpeg" alt="Rack de serveurs Proxmox" className="w-full rounded-lg border border-accent/30 my-4" />
                  <img src="/cyber-portfolio/32.jpeg" alt="Rack réseau avec WatchGuard M270 et switches Ubiquiti — vue finale" className="w-full rounded-lg border border-accent/30 my-4" />
                </div>

                <div className="bg-secondary/20 p-6 rounded-lg border border-border">
                  <h3 className="text-2xl font-bold text-accent mb-4">Phase 4 : Gestion des Accès et Mise en Place de la Sécurité</h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    La gestion des accès a impliqué la création de profils de compte distincts pour les étudiants et les enseignants, avec des permissions appropriées et granulaires pour chaque groupe. Les étudiants ont eu accès aux ressources pédagogiques essentielles, tandis que les enseignants ont eu des permissions plus étendues pour gérer les ressources du laboratoire.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    La mise en place des accès d'administration sécurisés a été une exigence critique. Les protocoles sécurisés tels que SSH ont été utilisés pour tous les accès à distance, et les connexions HTTP non sécurisées ont été désactivées.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    L'accès à la console des équipements réseau a été protégé par des mots de passe forts et des mécanismes d'authentification. L'accès web aux équipements a été limité à des adresses IP autorisées et a utilisé HTTPS pour assurer le chiffrement des données sensibles.
                  </p>
                </div>

                <div className="bg-secondary/20 p-6 rounded-lg border border-border">
                  <h3 className="text-2xl font-bold text-accent mb-4">Livrables Complets des Semaines 4-5</h3>
                  <ul className="list-disc list-inside space-y-3 text-foreground/80">
                    <li>Plan d'adressage détaillé avec tous les VLANs, sous-réseaux, masques et plages DHCP</li>
                    <li>Documentation complète des accès avec comptes administrateurs et procédures de sécurité</li>
                    <li>Documentation technique complète et détaillée de l'architecture réseau</li>
                    <li>Manuel d'utilisation du laboratoire pour les étudiants et les enseignants</li>
                    <li>Configuration validée et testée de tous les équipements réseau</li>
                    <li>Serveurs Proxmox opérationnels, configurés et prêts pour la virtualisation</li>
                    <li>Documentation des politiques de sécurité et des contrôles d'accès</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* SEMAINE 6 */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6 border-b border-accent/30 pb-4">
                Semaine 6 : Tests Complets, Validation et Finalisation (01/06/2026 - 05/06/2026)
              </h2>

              <div className="space-y-6">
                <div className="bg-secondary/20 p-6 rounded-lg border border-border">
                  <h3 className="text-2xl font-bold text-accent mb-4">Phase 1 : Tests Exhaustifs de Connectivité et Performance</h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Les tests de connectivité ont constitué la phase critique de validation de l'infrastructure complète. Ces tests ont inclus des vérifications ping pour assurer que tous les équipements sont accessibles, des tests de routage pour vérifier que les paquets sont correctement acheminés entre les VLANs, et des tests d'accès Internet.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Les tests de VLAN ont vérifié que les appareils sur différents VLANs peuvent communiquer uniquement s'ils sont autorisés à le faire selon les règles de routage configurées, et que l'isolation des VLANs fonctionne correctement.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    Les tests d'accès aux serveurs ont vérifié que les machines virtuelles hébergées sur Proxmox peuvent être accessibles et que les performances sont satisfaisantes sous charge normale.
                  </p>
                </div>

                <div className="bg-secondary/20 p-6 rounded-lg border border-border">
                  <h3 className="text-2xl font-bold text-accent mb-4">Phase 2 : Tests de Performance et Optimisation</h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Les tests de performance de base ont impliqué la mesure précise de la bande passante disponible sur le réseau filaire et sans fil, la mesure de la latence, et la vérification que les performances répondent aux exigences spécifiées.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Les tests de scénarios pédagogiques ont simulé des situations réelles d'utilisation du laboratoire, telles que plusieurs étudiants se connectant simultanément au réseau et accédant aux serveurs virtuels.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    Les tests de basculement des UPS et de redondance ont assuré que les mécanismes de secours fonctionnent correctement et que la continuité de service est maintenue en cas de défaillance de composants critiques.
                  </p>
                </div>

                <div className="bg-secondary/20 p-6 rounded-lg border border-border">
                  <h3 className="text-2xl font-bold text-accent mb-4">Phase 3 : Ajustements, Optimisations et Corrections Finales</h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    La correction des erreurs identifiées durant les tests a été une étape essentielle. Les erreurs identifiées ont pu inclure des câbles mal connectés, des configurations incorrectes, des problèmes de sécurité, ou des performances insuffisantes.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Les optimisations ont pu inclure l'ajustement des paramètres de performance, l'optimisation de la distribution de charge, l'amélioration de la sécurité, ou l'optimisation de la configuration des équipements.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    La vérification et la validation finale de l'inventaire ont assuré que tous les équipements sont correctement documentés, que l'inventaire est à jour et précis, et que tous les numéros de série sont enregistrés.
                  </p>
                </div>

                <div className="bg-secondary/20 p-6 rounded-lg border border-border">
                  <h3 className="text-2xl font-bold text-accent mb-4">Phase 4 : Documentation Finale Complète et Exhaustive</h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    La rédaction de la documentation finale a assuré que l'infrastructure est bien documentée pour la maintenance future. Cette documentation complète a inclus une version finale du document d'architecture, un manuel d'utilisation complet pour les étudiants et les enseignants, et un inventaire à jour avec un schéma de câblage détaillé.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    L'étiquetage complet et durable de tous les équipements, câbles et ports a été essentiel pour faciliter la maintenance future. Chaque port du patch panel, chaque câble et chaque équipement a été clairement étiqueté avec une identification unique.
                  </p>
                </div>

                <div className="bg-secondary/20 p-6 rounded-lg border border-border">
                  <h3 className="text-2xl font-bold text-accent mb-4">Phase 5 : Présentation Finale et Remise du Projet</h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    La présentation finale du projet a démontré que l'infrastructure est opérationnelle, fiable, et répond à tous les objectifs du projet. Cette présentation a inclus une démonstration pratique des fonctionnalités clés et une discussion des défis surmontés.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    La remise du matériel fonctionnel et opérationnel a marqué la fin officielle du stage. À ce stade, l'infrastructure était complètement fonctionnelle, bien documentée, et prête à être utilisée par les étudiants et les enseignants.
                  </p>
                </div>

                <div className="bg-secondary/20 p-6 rounded-lg border border-border">
                  <h3 className="text-2xl font-bold text-accent mb-4">Livrables Complets de la Semaine 6</h3>
                  <ul className="list-disc list-inside space-y-3 text-foreground/80">
                    <li>Tests validés et rapport de tests complet avec résultats détaillés</li>
                    <li>Laboratoire complètement opérationnel et documenté, prêt pour l'utilisation</li>
                    <li>Documentation finale complète et mise à jour pour tous les systèmes</li>
                    <li>Version finale du document d'architecture avec tous les détails techniques</li>
                    <li>Manuel d'utilisation complet pour les étudiants et les enseignants</li>
                    <li>Inventaire final à jour avec schéma de câblage détaillé et étiquetage complet</li>
                    <li>Rapport final du projet avec résumé des accomplissements et leçons apprises</li>
                    <li>Procédures de maintenance et de dépannage documentées</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CONCLUSION */}
            <div className="bg-secondary/20 p-8 rounded-lg border border-accent/30">
              <h2 className="text-3xl font-bold text-foreground mb-4">Conclusion et Apprentissages Majeurs</h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                Le stage en laboratoire de réseautique a représenté une expérience complète, enrichissante et transformatrice dans la gestion de projets d'infrastructure réseau complexes. Ce projet ambitieux a permis d'acquérir des compétences pratiques essentielles dans tous les aspects critiques de la mise en place d'une infrastructure réseau moderne.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                Les défis techniques rencontrés, tels que la gestion des problèmes d'alimentation électrique, l'optimisation de l'espace physique limité, la coordination complexe avec les équipes de maintenance, et la résolution de problèmes de connectivité, ont fourni des leçons précieuses sur la résolution de problèmes pratiques dans un environnement réel.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                La documentation complète et professionnelle de l'infrastructure a été un élément crucial du succès du projet. Une documentation claire et détaillée facilite la maintenance future, permet aux nouveaux administrateurs de comprendre rapidement l'infrastructure, et assure la continuité de service.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                Ce stage a démontré l'importance critique de la planification minutieuse, de la coordination efficace entre les équipes multidisciplinaires, et de la validation rigoureuse de tous les systèmes avant la mise en production. Les compétences acquises seront directement applicables pour une carrière réussie en informatique, en réseautique et en cybersécurité.
              </p>
              <img src="/cyber-portfolio/37.jpeg" alt="Rack de serveurs final — infrastructure complète et opérationnelle" className="w-full rounded-lg border border-accent/30 mt-4" />
            </div>

            {/* MÉDIAS ET RAPPORT */}
            <div className="bg-secondary/20 p-8 rounded-lg border border-accent/30">
              <h2 className="text-3xl font-bold text-foreground mb-6">Vidéo du Laboratoire et Rapport Final</h2>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-accent mb-4">Vidéo — Démonstration de l'Infrastructure</h3>
                <video
                  controls
                  className="w-full rounded-lg border border-accent/30"
                  style={{ maxHeight: '500px' }}
                >
                  <source src="/cyber-portfolio/34.mp4" type="video/mp4" />
                  Votre navigateur ne supporte pas la lecture vidéo.
                </video>
              </div>

          
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
