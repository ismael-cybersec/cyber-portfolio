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
          <div className="prose prose-invert max-w-none space-y-8">
            
            {/* INTRODUCTION COMPLÈTE */}
            <div className="bg-secondary/20 p-8 rounded-lg border border-border">
              <h2 className="text-3xl font-bold text-primary mb-4">Vue d'Ensemble Complète du Stage</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Le stage au Laboratoire de Réseautique du Collège communautaire du Nouveau-Brunswick, Campus Dieppe, a constitué un projet majeur d'une durée de six semaines intensives, s'étendant du 27 avril 2026 au 5 juin 2026. Ce projet ambitieux visait à concevoir, mettre en place et configurer une infrastructure réseau d'entreprise complète et fonctionnelle, capable de supporter les besoins pédagogiques d'un établissement d'enseignement moderne. Le projet a englobé l'ensemble du cycle de vie d'une infrastructure réseau : de la planification initiale et l'évaluation des ressources disponibles, en passant par l'installation physique des équipements, le câblage structuré, la configuration logique des systèmes réseau, la mise en place de la sécurité, jusqu'à la validation complète et la documentation finale.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Ce stage a impliqué une coordination complexe avec plusieurs départements de l'établissement, notamment les équipes de maintenance pour les travaux physiques, les équipes TI pour la connectivité Internet et l'infrastructure informatique, et les superviseurs du projet pour l'orientation stratégique. La gestion des contraintes physiques, telles que l'espace limité dans les salles de classe, la nécessité de préserver la continuité de service pour les utilisateurs existants, et les limitations d'alimentation électrique, a nécessité une planification minutieuse et une résolution créative de problèmes.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                L'objectif principal du stage était de créer un environnement de laboratoire pédagogique moderne, fonctionnel et opérationnel, capable de supporter les besoins des étudiants et des enseignants, tout en intégrant les meilleures pratiques en matière de sécurité informatique, de performance réseau, et de scalabilité pour la croissance future. Le projet devait également produire une documentation complète et professionnelle permettant la maintenance et l'évolution future de l'infrastructure.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Ce stage a offert une expérience pratique inestimable dans la gestion de projets d'infrastructure complexes, la résolution de problèmes techniques sophistiqués, la coordination entre équipes multidisciplinaires, et la documentation professionnelle des systèmes informatiques. Les compétences acquises couvrent l'ensemble du spectre de la gestion d'infrastructure réseau, depuis la planification stratégique jusqu'à la mise en service opérationnelle et la documentation de maintenance.
              </p>
            </div>

            {/* SEMAINE 1 - EXTRÊMEMENT DÉTAILLÉE */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6 border-b border-accent/30 pb-4">
                Semaine 1 : Prise de Connaissance et Mise en Place Physique (27/04/2026 - 01/05/2026)
              </h2>

              <div className="space-y-6">
                <div className="bg-secondary/20 p-6 rounded-lg border border-border">
                  <h3 className="text-2xl font-bold text-accent mb-4">Phase 1 : Familiarisation Approfondie avec l'Environnement</h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    La première étape du stage a consisté à effectuer une prise de connaissance complète et systématique des lieux, des équipements disponibles, et des contraintes physiques de l'environnement. Cette phase était cruciale pour établir une base solide pour toutes les phases ultérieures du projet. La prise de connaissance des salles de classe et du laboratoire a impliqué une exploration détaillée de chaque espace, l'identification des points d'accès potentiels, l'évaluation précise de l'espace disponible pour l'installation des racks, et la compréhension complète de la disposition générale des installations.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Cette reconnaissance préalable a permis d'identifier les contraintes architecturales spécifiques, telles que la présence de faux plafonds, les limitations d'espace dans certaines salles, les points d'accès aux services informatiques existants, et les opportunités d'optimisation de l'espace. La documentation photographique et les mesures précises ont été prises pour chaque espace, créant une base de données visuelle et métrique pour la planification ultérieure.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    La prise de connaissance des équipements a compris une inspection détaillée et systématique de tout le matériel disponible, incluant les équipements réseau Cisco (switches, routeurs), les équipements Ubiquiti (points d'accès sans fil), les serveurs, les racks, les systèmes de stockage (SAN, DAS), les équipements d'alimentation (UPS), les équipements de gestion (KVM), et l'outillage divers. Cette inspection a permis d'évaluer l'état général de chaque équipement, d'identifier les éléments défectueux ou nécessitant une maintenance préalable, et de planifier les acquisitions supplémentaires si nécessaire.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    L'évaluation de l'état des équipements a révélé que certains appareils nécessitaient une réinitialisation complète avant leur utilisation, tandis que d'autres présentaient des signes d'usure ou de configuration antérieure qui devrait être effacée. Cette évaluation initiale a fourni des informations critiques pour la planification des tâches de préparation des équipements.
                  </p>
                  <img src="/manus-storage/WhatsAppImage2026-05-27at22.43.30(3)_44cc41fd.jpeg" alt="Travail pratique de configuration" className="w-full rounded-lg border border-accent/30 my-4" />
                </div>

                <div className="bg-secondary/20 p-6 rounded-lg border border-border">
                  <h3 className="text-2xl font-bold text-accent mb-4">Phase 2 : Inventaire Détaillé et Organisation Systématique</h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    L'organisation et l'inventaire global physique des équipements par type ont constitué une tâche fondamentale et chronophage pour assurer une gestion efficace des ressources tout au long du projet. Cette phase a impliqué le tri systématique et la catégorisation de tous les équipements disponibles, leur regroupement par type (switches réseau, routeurs, serveurs, câbles, accessoires, etc.), et l'établissement d'une base de données centralisée pour le suivi et la gestion.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    L'inventaire détaillé avec numéro de série, marque et numéro d'inventaire pour chaque équipement a été une exigence critique pour la gestion des actifs informatiques et la conformité administrative de l'établissement. Chaque équipement a été documenté avec précision, incluant des informations détaillées telles que le fabricant exact, le modèle spécifique, le numéro de série unique, la date d'acquisition estimée, l'état général (neuf, bon, acceptable, défectueux), et les notes spéciales concernant l'historique de maintenance ou les problèmes connus.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Cette documentation détaillée a facilité le suivi des équipements tout au long du projet, la gestion des garanties et des contrats de maintenance, et la planification des remplacements futurs. La création d'une feuille de calcul centralisée a permis une consultation rapide de l'inventaire et a fourni une base pour les rapports d'inventaire requis par l'établissement.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    La complétion de l'inventaire pour les serveurs, le KVM (Keyboard-Video-Mouse switch), les SAN (Storage Area Network) et les UPS (Uninterruptible Power Supply) a été identifiée comme une priorité, car ces composants sont critiques pour l'infrastructure et nécessitent une documentation précise pour assurer la continuité de service et faciliter les opérations de maintenance future.
                  </p>
                </div>

                <div className="bg-secondary/20 p-6 rounded-lg border border-border">
                  <h3 className="text-2xl font-bold text-accent mb-4">Phase 3 : Réinitialisation Complète des Équipements Réseau</h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    La réinitialisation des équipements réseau a été une étape essentielle et incontournable pour garantir un démarrage propre de l'infrastructure, sans configuration préalable conflictuelle ou résiduelle. Cette opération a impliqué le retour systématique de tous les équipements réseau (switches, routeurs, points d'accès) à leur configuration d'usine par défaut, éliminant ainsi toute configuration antérieure qui pourrait interférer avec la nouvelle infrastructure ou créer des problèmes de sécurité.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    La réinitialisation des équipements Cisco a impliqué l'accès à la console de chaque appareil via un câble de console, l'authentification avec les identifiants par défaut, l'effacement complet de la configuration en mémoire flash (flash memory), l'effacement de la configuration en NVRAM (Non-Volatile RAM), et le redémarrage forcé pour charger la configuration par défaut d'usine. Cette procédure garantit que chaque équipement commence avec une ardoise vierge, permettant une configuration contrôlée et prévisible lors des phases ultérieures du projet.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    La vérification post-réinitialisation a confirmé que chaque équipement affichait le message de démarrage standard et était prêt pour la configuration initiale. Cette étape a également permis de tester la connectivité console et de vérifier que chaque appareil répondait aux commandes de base.
                  </p>
                </div>

                <div className="bg-secondary/20 p-6 rounded-lg border border-border">
                  <h3 className="text-2xl font-bold text-accent mb-4">Phase 4 : Identification et Installation Physique des Racks</h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    L'identification des emplacements optimaux des racks dans le laboratoire a été une décision critique qui affecte directement la performance globale de l'infrastructure, la facilité de maintenance, et la sécurité physique. Les racks devaient être positionnés de manière à optimiser le flux d'air pour la ventilation des équipements, minimiser les longueurs de câbles pour réduire les pertes de signal et les problèmes d'interférences, faciliter l'accès pour la maintenance régulière, et assurer la sécurité physique des équipements.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Cette phase a impliqué l'évaluation systématique de plusieurs emplacements potentiels dans le laboratoire, la prise en compte de facteurs tels que la proximité des sources d'alimentation électrique, l'accès aux services informatiques existants, l'espace disponible pour la circulation et la maintenance, et la proximité des salles de classe qui devaient être connectées. La sélection du site optimal a été basée sur une analyse détaillée de ces critères techniques et pratiques.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    L'ouverture de tickets pour la maintenance a été un processus administratif crucial pour coordonner les travaux avec les équipes de maintenance de l'établissement. Le ticket pour la fixation des racks au sol a été particulièrement important, car les racks devaient être solidement ancrés pour des raisons de sécurité et de stabilité structurelle. Une fixation inadéquate pourrait entraîner des risques graves de basculement, en particulier dans les environnements où les équipements sont soumis à des vibrations, des mouvements sismiques, ou à des chocs accidentels.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    La fixation des racks au sol a impliqué l'utilisation de boulons d'ancrage appropriés, la vérification de la solidité de la structure du sol, et l'assurance que les boulons étaient serrés à la tension correcte. Une fois les racks fixés, une vérification complète de la verticalité (à l'aide d'un niveau de précision) et de la stabilité structurelle a été effectuée pour assurer que les équipements pouvaient être montés en toute sécurité sans risque de basculement.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    La mise à la terre des racks a été une exigence de sécurité critique et non négociable pour prévenir les chocs électriques, les dommages aux équipements causés par les surtensions, et les risques d'incendie. Cette opération a impliqué la connexion d'un conducteur de terre de faible résistance du rack au système de mise à la terre principal de l'établissement. Une mise à la terre appropriée protège les équipements contre les surtensions transitoires, les décharges électrostatiques, et les défauts d'isolation électrique.
                  </p>
                  <img src="/manus-storage/WhatsAppImage2026-05-27at22.43.30_56c4e582.jpeg" alt="Armoire complète avec équipements réseau" className="w-full rounded-lg border border-accent/30 my-4" />
                </div>

                <div className="bg-secondary/20 p-6 rounded-lg border border-border">
                  <h3 className="text-2xl font-bold text-accent mb-4">Phase 5 : Résolution des Défis Techniques et Obstacles</h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Plusieurs défis techniques significatifs ont été identifiés et adressés au cours de cette première semaine, illustrant la complexité réelle des projets d'infrastructure. Le besoin d'enlever la barre métallique au milieu du grand rack pour placer les supports des serveurs a démontré la nécessité d'adapter l'infrastructure physique existante aux besoins spécifiques du nouveau projet. Cette modification structurelle a dû être planifiée et exécutée avec soin pour ne pas compromettre l'intégrité structurelle du rack ou créer des problèmes de sécurité.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Le problème critique de l'UPS qui s'éteignait régulièrement a soulevé des questions importantes concernant l'alimentation électrique et la fiabilité des équipements. Plusieurs hypothèses ont été formulées et investigées : soit l'UPS nécessitait une charge complète pour fonctionner correctement (les UPS doivent généralement être chargées avant la première utilisation), soit la prise murale ne fournissait pas le voltage correct (une vérification du voltage de la prise a été nécessaire), soit l'UPS présentait un défaut matériel. Cette investigation a mis en évidence l'importance critique de vérifier les spécifications électriques de chaque installation et de tester tous les équipements d'alimentation avant de les intégrer à l'infrastructure critique.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    La question du changement potentiel d'emplacement de la prise de l'UPS sur le mur d'en face a démontré la nécessité de planifier les connexions électriques avec soin, en tenant compte de la longueur des câbles d'alimentation, de la charge électrique totale, de la distribution équilibrée de l'alimentation dans le laboratoire, et de la conformité aux codes électriques applicables.
                  </p>
                </div>

                <div className="bg-secondary/20 p-6 rounded-lg border border-border">
                  <h3 className="text-2xl font-bold text-accent mb-4">Phase 6 : Documentation Initiale et Planification Stratégique</h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    L'élaboration d'un premier document d'architecture v1 a été une étape fondamentale qui a établi la base de toutes les phases ultérieures du projet. Ce document critique devait inclure un plan détaillé de chaque salle, un schéma logique de base montrant les connexions réseau prévues, une description claire de la topologie générale de l'infrastructure, et une liste des équipements à installer.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    La mise à jour du document des serveurs et des plages d'adresses pour les VLANs a impliqué la planification initiale de la segmentation réseau. Cette documentation critique devait définir les différents VLANs (VLAN des étudiants, VLAN des enseignants, VLAN sans fil, VLAN de gestion, VLAN de sécurité, etc.) et les plages d'adresses IP associées à chaque VLAN, en tenant compte des besoins de croissance future.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    La documentation Ubiquiti et WatchGuard a impliqué la compilation systématique des manuels techniques, des guides de configuration, des procédures de déploiement, et des meilleures pratiques spécifiques à ces équipements. Cette documentation de référence a été essentielle lors des phases de configuration ultérieures et a servi de base pour la formation du personnel de maintenance.
                  </p>
                </div>

                <div className="bg-secondary/20 p-6 rounded-lg border border-border">
                  <h3 className="text-2xl font-bold text-accent mb-4">Phase 7 : Placement Stratégique des Équipements dans les Racks</h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Le placement des équipements dans les racks a dû être planifié avec soin pour optimiser l'accès, la ventilation, la gestion des câbles, et la facilité de maintenance. Le placement des patch panels, des serveurs, du KVM, du SAN et du DAS sur les racks a suivi une hiérarchie logique basée sur les meilleures pratiques de l'industrie : les équipements de distribution (switches, routeurs) généralement placés en haut pour faciliter l'accès et minimiser la longueur des câbles de liaison montante, les serveurs au milieu, et les équipements de stockage en bas pour des raisons de stabilité et de charge.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Le placement du premier UPS pour les serveurs a été une décision critique, car cet équipement devait être facilement accessible pour la maintenance, la surveillance, et les interventions d'urgence. La capacité de l'UPS devait correspondre à la charge totale des équipements qu'il protège, en tenant compte des pics de consommation électrique et en laissant une marge de sécurité.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    La libération du Switch Ubiquiti et du point d'accès de l'armoire CYSE et leur remplacement avec le matériel du 1103 a illustré la nécessité de consolider et d'optimiser l'utilisation des équipements disponibles. Cette réorganisation a permis une meilleure utilisation de l'espace, une simplification de la gestion des équipements, et une réduction de la complexité générale de l'infrastructure.
                  </p>
                  <img src="/manus-storage/WhatsAppImage2026-05-27at22.43.30(5)_19630f19.jpeg" alt="Travail sur l'armoire réseau" className="w-full rounded-lg border border-accent/30 my-4" />
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

            {/* SEMAINE 2-3 - EXTRÊMEMENT DÉTAILLÉE */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6 border-b border-accent/30 pb-4">
                Semaines 2-3 : Câblage Structuré et Connectivité (04/05/2026 - 15/05/2026)
              </h2>

              <div className="space-y-6">
                <div className="bg-secondary/20 p-6 rounded-lg border border-border">
                  <h3 className="text-2xl font-bold text-accent mb-4">Phase 1 : Planification Détaillée et Stratégique du Câblage</h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    La planification du câblage a été une tâche extrêmement complexe qui a nécessité une compréhension approfondie de la topologie du réseau, des distances précises entre les équipements, des contraintes physiques de l'environnement, et des normes de câblage structuré. Cette phase a impliqué la création d'un plan détaillé montrant la répartition systématique des câbles, les chemins spécifiques que les câbles suivront à travers le bâtiment, les longueurs estimées pour chaque segment de câble, et les routes alternatives en cas d'obstacles.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    L'identification précise des emplacements des connecteurs côté salle de classe a été une étape critique qui affecte directement la flexibilité et la facilité d'utilisation du laboratoire pour les années à venir. Chaque bureau d'étudiant devait avoir au minimum deux connecteurs (un pour le câble de données Ethernet, un pour le câble de téléphone ou d'autres services), tandis que les bureaux des enseignants devaient avoir quatre connecteurs pour supporter des configurations plus complexes et des besoins futurs.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    La préparation minutieuse des câbles a impliqué l'étiquetage précis des deux extrémités de chaque câble avec un système de codification clair et cohérent, l'organisation des câbles par paquet pour faciliter le passage et l'installation ultérieure, et la vérification de la longueur correcte pour chaque segment. Cette préparation méthodique a accéléré considérablement le processus d'installation et a réduit les erreurs de connexion.
                  </p>
                </div>

                <div className="bg-secondary/20 p-6 rounded-lg border border-border">
                  <h3 className="text-2xl font-bold text-accent mb-4">Phase 2 : Passage des Câbles et Respect Strict des Normes Professionnelles</h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Le passage des câbles dans les salles 1106-D et 1109 a dû respecter les règles strictes et bien établies de tirage de câbles pour assurer une installation professionnelle, durable, et conforme aux normes de l'industrie. Les règles de tirage incluent le rayon de courbure minimum pour les câbles Ethernet (généralement 4 fois le diamètre du câble pour les câbles Cat5e/Cat6), l'évitement systématique des sources de chaleur et d'interférences électromagnétiques, et le maintien de cheminements clairs, organisés, et faciles à tracer.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Le passage de deux câbles du 1106-E vers le 1101-H pour Internet et de deux câbles du 1106-E vers le 1103 pour Internet a illustré la nécessité de planifier les connexions de liaison montante (uplink) avec soin et redondance. Ces connexions critiques devaient être redondantes pour assurer la disponibilité du service Internet même en cas de défaillance d'une ligne, et elles devaient être séparées physiquement pour minimiser les risques de défaillance simultanée causée par un incident physique unique.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    Le déplacement de l'équipement Juniper vers le 1106-E a démontré la nécessité d'adapter la disposition physique des équipements en fonction des besoins de connectivité et de performance. Cet équipement critique devait être positionné de manière à minimiser la longueur des câbles de liaison montante, à réduire les pertes de signal, et à faciliter l'accès pour la maintenance et les mises à jour.
                  </p>
                  <img src="/manus-storage/WhatsAppImage2026-05-27at22.43.30.jpeg" alt="Baie de brassage Legrand avec câblage structuré" className="w-full rounded-lg border border-accent/30 my-4" />
                </div>

                <div className="bg-secondary/20 p-6 rounded-lg border border-border">
                  <h3 className="text-2xl font-bold text-accent mb-4">Phase 3 : Tests de Connectivité Internet et Nettoyage</h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Le test de connectivité Internet a été une étape critique qui a vérifié que la connexion à Internet fonctionne correctement et que la bande passante disponible est suffisante pour les besoins du laboratoire. Cette phase a impliqué le test détaillé de la vitesse de téléchargement et de chargement, la vérification de la latence (délai de réponse), la mesure de la stabilité de la connexion, et l'assurance que la connexion est fiable et capable de supporter les charges pédagogiques attendues.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Le nettoyage des anciens câbles a été une tâche importante qui a éliminé le désordre visuel et physique, facilité la maintenance future, et amélioré la sécurité générale en éliminant les obstacles potentiels. L'élimination appropriée des câbles obsolètes a suivi les protocoles de recyclage et de gestion des déchets électroniques établis par l'établissement.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    L'achat des matériaux de finition (goulottes, prises murales, crochets, trays et autres accessoires) a été essentiel pour compléter l'installation des câbles de manière professionnelle et durable. Ces matériaux ont permis une organisation claire des câbles, une protection contre les dommages physiques, une amélioration de l'esthétique générale, et une facilitation de la maintenance future.
                  </p>
                  <img src="/manus-storage/WhatsAppImage2026-05-27at22.43.30(4)_3a528060.jpeg" alt="Configuration du firewall WatchGuard" className="w-full rounded-lg border border-accent/30 my-4" />
                </div>

                <div className="bg-secondary/20 p-6 rounded-lg border border-border">
                  <h3 className="text-2xl font-bold text-accent mb-4">Phase 4 : Installation Précise des Connecteurs et Tests de Continuité</h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    La pose des connecteurs RJ-45 aux deux extrémités de chaque câble a été une tâche qui a nécessité de la précision extrême et une compétence technique élevée. Chaque connecteur a dû être installé correctement en suivant rigoureusement la norme TIA/EIA 568B pour assurer la compatibilité complète et la performance optimale du réseau. Le nombre total de connecteurs à installer comprenait 2 connecteurs par bureau d'étudiant (pour un nombre total de bureaux à déterminer), 4 connecteurs pour les bureaux des enseignants, et 2 connecteurs pour les points d'accès sans fil.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Le raccordement des câbles des salles aux patch panels avec étiquetage cohérent et professionnel a été une étape qui a établi la base de la gestion future du réseau. Chaque port du patch panel a dû être étiqueté de manière claire, cohérente et durable, permettant aux administrateurs réseau d'identifier rapidement les connexions, de dépanner les problèmes efficacement, et de gérer les modifications futures.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    Les tests de continuité pour chaque câble ont été essentiels pour vérifier que chaque connexion fonctionne correctement et que les performances répondent aux spécifications. Un testeur de continuité de câble professionnel a été utilisé pour vérifier que les huit paires de fils dans chaque câble Ethernet sont correctement connectées aux deux extrémités et que l'ordre des couleurs suit la norme. Tout câble présentant une continuité incorrecte, une résistance excessive, ou une atténuation de signal a été remplacé.
                  </p>
                </div>

                <div className="bg-secondary/20 p-6 rounded-lg border border-border">
                  <h3 className="text-2xl font-bold text-accent mb-4">Phase 5 : Organisation Finale et Demande d'Adresse IP Publique</h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    L'organisation claire et professionnelle des racks a été essentielle pour faciliter la maintenance régulière, la gestion future de l'infrastructure, et la formation du personnel. Cette organisation a impliqué le placement logique des équipements, la gestion claire et systématique des câbles (utilisation de chemins de câbles, de clips, et de supports), et l'étiquetage complet et durable de tous les ports et connexions.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    La demande d'une adresse IP publique statique auprès des équipes TI a été une étape administrative qui a permis à l'infrastructure du laboratoire d'être accessible de l'extérieur si nécessaire pour des fins pédagogiques, de démonstration, ou de maintenance à distance. Cette adresse IP statique a dû être configurée sur le pare-feu ou le routeur de liaison montante pour permettre les connexions entrantes appropriées tout en maintenant la sécurité.
                  </p>
                </div>

                <div className="bg-secondary/20 p-6 rounded-lg border border-border">
                  <h3 className="text-2xl font-bold text-accent mb-4">Livrables Complets des Semaines 2-3</h3>
                  <ul className="list-disc list-inside space-y-3 text-foreground/80">
                    <li>Document d'architecture v2 avec plan détaillé mis à jour et schéma complet des connexions</li>
                    <li>Tableau d'étiquetage complet et précis pour tous les câbles et prises</li>
                    <li>Rapport v2 décrivant l'avancement détaillé, les constats techniques, les écarts identifiés et les corrections apportées</li>
                    <li>Infrastructure de câblage complète, testée et validée</li>
                    <li>Tous les connecteurs RJ-45 installés et testés aux deux extrémités</li>
                    <li>Tests de continuité validés pour tous les câbles avec documentation des résultats</li>
                    <li>Documentation photographique de l'installation pour référence future</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* SEMAINE 4-5 - EXTRÊMEMENT DÉTAILLÉE */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6 border-b border-accent/30 pb-4">
                Semaines 4-5 : Configuration Réseau Avancée et Sécurité (18/05/2026 - 29/05/2026)
              </h2>

              <div className="space-y-6">
                <div className="bg-secondary/20 p-6 rounded-lg border border-border">
                  <h3 className="text-2xl font-bold text-accent mb-4">Phase 1 : Plan d'Adressage par VLAN et Segmentation Réseau</h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Le plan d'adressage par VLAN a été un élément critique et fondamental de la conception réseau qui détermine comment le réseau sera segmenté, organisé, et géré. Ce plan détaillé a dû inclure des VLANs distincts pour les étudiants, les enseignants, l'administration, la gestion réseau, les services sans fil, et potentiellement d'autres services spécialisés. Chaque VLAN a dû avoir sa propre plage d'adresses IP, son propre masque de sous-réseau, sa propre passerelle par défaut, et ses propres règles de sécurité et de routage.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    La prévision de l'évolutivité a été essentielle pour assurer que le plan d'adressage peut s'adapter à la croissance future de l'infrastructure sans nécessiter une refonte complète. Le plan a dû laisser de l'espace significatif pour l'ajout de nouveaux VLANs, l'expansion des plages d'adresses existantes, et l'intégration de nouveaux services et technologies.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    Les informations détaillées des sous-réseaux (VLAN) ont inclus les masques de sous-réseau précis, les passerelles par défaut, les plages d'adresses pour DHCP (Dynamic Host Configuration Protocol), et les adresses statiques affectées aux équipements critiques (serveurs, routeurs, pare-feu). Cette documentation détaillée a facilité la configuration initiale et la gestion future du réseau.
                  </p>
                </div>

                <div className="bg-secondary/20 p-6 rounded-lg border border-border">
                  <h3 className="text-2xl font-bold text-accent mb-4">Phase 2 : Installation et Branchement Complet des Équipements</h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    L'installation des équipements réseau et sécurité dans les racks a dû suivre une séquence logique et bien planifiée qui assure la stabilité structurelle, l'accessibilité pour la maintenance, et la performance optimale. Les équipements ont dû être installés en commençant généralement par le haut du rack et en descendant, en veillant à laisser suffisamment d'espace pour la ventilation adéquate et l'accès aux câbles pour les modifications futures.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Le branchement des équipements de l'infrastructure a impliqué la connexion systématique de tous les câbles réseau (câbles Ethernet pour les connexions de données), les câbles de console (pour l'accès d'administration), et les câbles de gestion (pour la surveillance et le contrôle). Chaque connexion a dû être vérifiée pour assurer qu'elle était correcte, sécurisée, et conforme aux normes.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Le branchement de l'alimentation principale et redondante de tous les équipements a été une tâche critique qui assure la disponibilité et la résilience de l'infrastructure. Les équipements critiques ont dû être connectés à au moins deux UPS différentes pour assurer la redondance et la continuité de service en cas de défaillance d'une UPS. La distribution de la charge électrique a dû être équilibrée pour éviter la surcharge d'une seule UPS et assurer une performance optimale.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    L'intégration des équipements sans fil a impliqué l'installation physique des points d'accès Ubiquiti dans les salles de classe et leur connexion au réseau filé via les câbles Ethernet préalablement installés. Les points d'accès ont dû être positionnés de manière stratégique pour assurer une couverture radio optimale et pour minimiser les interférences avec d'autres appareils sans fil.
                  </p>
                  <img src="/manus-storage/WhatsAppImage2026-05-27at22.43.30(2)_ef982c2c.jpeg" alt="Travail sur l'armoire réseau" className="w-full rounded-lg border border-accent/30 my-4" />
                </div>

                <div className="bg-secondary/20 p-6 rounded-lg border border-border">
                  <h3 className="text-2xl font-bold text-accent mb-4">Phase 3 : Configuration Avancée du Réseau Filaire et Sans Fil</h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    La configuration du réseau filaire a impliqué la configuration détaillée des switches Cisco, des routeurs, et des pare-feux WatchGuard pour créer la topologie réseau prévue et assurer la performance optimale. Cette configuration complexe a compris la création des VLANs sur les switches, la configuration du routage inter-VLAN pour permettre la communication entre les VLANs, la configuration des ports de liaison montante (uplink) pour la connexion à Internet, et la configuration des protocoles de sécurité tels que les ACL (Access Control Lists) pour contrôler le trafic.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    La configuration du réseau sans fil a impliqué la configuration détaillée des points d'accès Ubiquiti, la création des réseaux sans fil (SSIDs - Service Set Identifiers), la configuration de la sécurité sans fil (WPA2 ou WPA3 avec mots de passe forts), et l'intégration du réseau sans fil avec le réseau filaire pour assurer une expérience utilisateur transparente. Les paramètres sans fil ont dû être optimisés pour assurer une couverture radio adéquate, une performance satisfaisante, et une sécurité robuste.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    La configuration des serveurs Proxmox a impliqué l'installation du système d'exploitation de virtualisation, la configuration de la mise en réseau pour l'intégration avec les VLANs, la configuration du stockage pour les machines virtuelles, et la préparation des serveurs pour héberger les machines virtuelles pédagogiques. Proxmox est une plateforme de virtualisation open-source puissante qui permet de créer et de gérer des machines virtuelles et des conteneurs pour les besoins pédagogiques.
                  </p>
                  <img src="/manus-storage/WhatsAppImage2026-05-27at22.43.30(1)_151d404e.jpeg" alt="Armoire Proxmox avec serveurs de virtualisation" className="w-full rounded-lg border border-accent/30 my-4" />
                </div>

                <div className="bg-secondary/20 p-6 rounded-lg border border-border">
                  <h3 className="text-2xl font-bold text-accent mb-4">Phase 4 : Gestion des Accès et Mise en Place de la Sécurité</h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    La gestion des accès a impliqué la création de profils de compte distincts pour les étudiants et les enseignants, avec des permissions appropriées et granulaires pour chaque groupe. Les étudiants ont dû avoir accès aux ressources pédagogiques essentielles mais pas aux outils d'administration qui pourraient compromettre l'infrastructure. Les enseignants ont dû avoir des permissions plus étendues pour gérer les ressources du laboratoire, créer des environnements de test, et superviser les activités des étudiants.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    La mise en place des accès d'administration sécurisés a été une exigence critique et non négociable pour protéger l'infrastructure contre les accès non autorisés, les modifications malveillantes, et les sabotages potentiels. Les accès d'administration ont dû être limités à un petit nombre d'administrateurs de confiance, et tous les accès ont dû être enregistrés et audités pour la conformité et la sécurité. Les protocoles sécurisés tels que SSH (Secure Shell) ont dû être utilisés pour tous les accès à distance, et les connexions HTTP non sécurisées ont dû être désactivées.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    L'accès à la console des équipements réseau a dû être protégé par des mots de passe forts et des mécanismes d'authentification multi-facteurs si possible. L'accès web aux équipements a dû être limité à des adresses IP autorisées et a dû utiliser HTTPS plutôt que HTTP pour assurer le chiffrement des données sensibles.
                  </p>
                </div>

                <div className="bg-secondary/20 p-6 rounded-lg border border-border">
                  <h3 className="text-2xl font-bold text-accent mb-4">Livrables Complets des Semaines 4-5</h3>
                  <ul className="list-disc list-inside space-y-3 text-foreground/80">
                    <li>Plan d'adressage détaillé avec tous les VLANs, sous-réseaux, masques et plages DHCP</li>
                    <li>Documentation complète des accès avec comptes administrateurs, mots de passe sécurisés et procédures de sécurité</li>
                    <li>Documentation technique complète et détaillée de l'architecture réseau</li>
                    <li>Manuel d'utilisation du laboratoire pour les étudiants et les enseignants</li>
                    <li>Configuration validée et testée de tous les équipements réseau</li>
                    <li>Serveurs Proxmox opérationnels, configurés et prêts pour la virtualisation</li>
                    <li>Documentation des politiques de sécurité et des contrôles d'accès</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* SEMAINE 6 - EXTRÊMEMENT DÉTAILLÉE */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6 border-b border-accent/30 pb-4">
                Semaine 6 : Tests Complets, Validation et Finalisation (01/06/2026 - 05/06/2026)
              </h2>

              <div className="space-y-6">
                <div className="bg-secondary/20 p-6 rounded-lg border border-border">
                  <h3 className="text-2xl font-bold text-accent mb-4">Phase 1 : Tests Exhaustifs de Connectivité et Performance</h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Les tests de connectivité ont constitué la phase critique de validation de l'infrastructure complète. Ces tests complets ont inclus des vérifications ping pour assurer que tous les équipements sont accessibles et réactifs, des tests de routage pour vérifier que les paquets sont correctement acheminés entre les VLANs, et des tests d'accès Internet pour assurer que la connexion à Internet fonctionne correctement et de manière fiable.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Les tests de VLAN ont impliqué la vérification détaillée que les appareils sur différents VLANs peuvent communiquer uniquement s'ils sont autorisés à le faire selon les règles de routage configurées, et que l'isolation des VLANs fonctionne correctement pour assurer la sécurité et la séparation des domaines. Les tests sans fil ont impliqué la vérification que les appareils sans fil peuvent se connecter aux points d'accès, obtenir une adresse IP via DHCP, et accéder aux ressources réseau appropriées.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    Les tests d'accès aux serveurs ont impliqué la vérification que les machines virtuelles hébergées sur Proxmox peuvent être accessibles et que les performances sont satisfaisantes. Ces tests ont inclus des tests de charge pour assurer que l'infrastructure peut gérer la charge attendue lors de l'utilisation pédagogique normale.
                  </p>
                </div>

                <div className="bg-secondary/20 p-6 rounded-lg border border-border">
                  <h3 className="text-2xl font-bold text-accent mb-4">Phase 2 : Tests de Performance et Optimisation</h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Les tests de performance de base ont impliqué la mesure précise de la bande passante disponible sur le réseau filaire et sans fil, la mesure de la latence (délai de réponse), et la vérification que les performances répondent aux exigences spécifiées. Ces tests ont dû être effectués à différents moments de la journée pour identifier les goulots d'étranglement potentiels et les variations de performance.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Les tests de scénarios pédagogiques ont impliqué la simulation de situations réelles d'utilisation du laboratoire, telles que plusieurs étudiants se connectant simultanément au réseau, le changement de VLAN, et l'accès aux serveurs virtuels. Ces tests réalistes ont aidé à identifier les problèmes qui pourraient survenir lors de l'utilisation réelle du laboratoire et à valider que l'infrastructure peut supporter la charge attendue.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    Les tests de basculement des UPS et de redondance ont assuré que les mécanismes de secours fonctionnent correctement et que la continuité de service est maintenue en cas de défaillance de composants critiques. Ces tests ont validé que les équipements critiques peuvent basculer vers les UPS de secours sans perte de service.
                  </p>
                </div>

                <div className="bg-secondary/20 p-6 rounded-lg border border-border">
                  <h3 className="text-2xl font-bold text-accent mb-4">Phase 3 : Ajustements, Optimisations et Corrections Finales</h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    La correction des erreurs identifiées durant les tests a été une étape essentielle pour assurer que l'infrastructure fonctionne correctement et de manière fiable. Les erreurs identifiées ont pu inclure des câbles mal connectés, des configurations incorrectes, des problèmes de sécurité, ou des performances insuffisantes. Chaque erreur a dû être documentée, analysée, et corrigée de manière systématique.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Les optimisations identifiées durant les tests ont pu inclure l'ajustement des paramètres de performance, l'optimisation de la distribution de charge, l'amélioration de la sécurité, ou l'optimisation de la configuration des équipements. Ces optimisations ont dû être documentées et justifiées pour faciliter la maintenance future et les améliorations ultérieures.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    La vérification et la validation finale de l'inventaire ont assuré que tous les équipements sont correctement documentés, que l'inventaire est à jour et précis, et que tous les numéros de série et les informations de configuration sont enregistrés. Cette validation a été importante pour la gestion des actifs, la planification des remplacements futurs, et la conformité administrative.
                  </p>
                </div>

                <div className="bg-secondary/20 p-6 rounded-lg border border-border">
                  <h3 className="text-2xl font-bold text-accent mb-4">Phase 4 : Documentation Finale Complète et Exhaustive</h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    La rédaction de la documentation finale a été une étape critique qui assure que l'infrastructure est bien documentée pour la maintenance future, les améliorations, et la formation du personnel. Cette documentation complète a inclus une version finale du document d'architecture, un manuel d'utilisation complet du laboratoire pour les étudiants et les enseignants, et un inventaire à jour avec un schéma de câblage détaillé.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Le manuel d'utilisation a inclus des instructions claires pour les tâches courantes, des procédures détaillées de dépannage, des informations de contact pour le support technique, et des guides pour les scénarios pédagogiques courants. Les procédures de maintenance minimale ont dû être documentées pour assurer que l'infrastructure peut être maintenue efficacement et de manière prévisible.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    L'étiquetage complet et durable de tous les équipements, câbles et ports a été essentiel pour faciliter la maintenance future et les modifications. Chaque port du patch panel, chaque câble et chaque équipement a dû être clairement étiqueté avec une identification unique et facile à lire.
                  </p>
                </div>

                <div className="bg-secondary/20 p-6 rounded-lg border border-border">
                  <h3 className="text-2xl font-bold text-accent mb-4">Phase 5 : Présentation Finale et Remise du Projet</h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    La présentation finale du projet a dû démontrer de manière convaincante que l'infrastructure est opérationnelle, fiable, et répond à tous les objectifs du projet. Cette présentation a inclus une démonstration pratique des fonctionnalités clés, une explication détaillée de l'architecture, et une discussion des défis surmontés et des solutions innovantes apportées.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    La remise du matériel fonctionnel et opérationnel a marqué la fin officielle du stage. À ce stade, l'infrastructure devait être complètement fonctionnelle, bien documentée, et prête à être utilisée par les étudiants et les enseignants. L'équipe de maintenance a dû être formée sur la gestion et la maintenance de l'infrastructure, et des procédures claires ont dû être établies pour les opérations futures.
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
              <h2 className="text-3xl font-bold text-primary mb-4">Conclusion et Apprentissages Majeurs</h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                Le stage en laboratoire de réseautique a représenté une expérience complète, enrichissante et transformatrice dans la gestion de projets d'infrastructure réseau complexes. Ce projet ambitieux a permis d'acquérir des compétences pratiques essentielles et approfondies dans tous les aspects critiques de la mise en place d'une infrastructure réseau moderne, de la planification initiale stratégique à la validation finale rigoureuse et à la documentation complète.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                Les défis techniques rencontrés au cours du projet, tels que la gestion des problèmes d'alimentation électrique, l'optimisation de l'espace physique limité, la coordination complexe avec les équipes de maintenance, et la résolution de problèmes de connectivité, ont fourni des leçons précieuses et durables sur la résolution de problèmes pratiques et la gestion de projets complexes dans un environnement réel. La capacité à adapter les plans en fonction des contraintes réelles, à trouver des solutions créatives aux problèmes, et à maintenir la qualité malgré les obstacles est une compétence essentielle et hautement valorisée en informatique et en cybersécurité.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                La documentation complète et professionnelle de l'infrastructure a été un élément crucial du succès du projet. Une documentation claire, précise et détaillée facilite considérablement la maintenance future, permet aux nouveaux administrateurs de comprendre rapidement l'infrastructure, fournit une base solide pour les améliorations futures, et assure la continuité de service en cas de changement de personnel.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Ce stage a démontré de manière concrète l'importance critique de la planification minutieuse, de la coordination efficace entre les équipes multidisciplinaires, et de la validation rigoureuse de tous les systèmes avant la mise en production. Les compétences pratiques et les connaissances acquises au cours de ce projet seront essentielles et directement applicables pour une carrière réussie en informatique, en réseautique et en cybersécurité, où la gestion d'infrastructures complexes, la résolution de problèmes techniques sophistiqués, et la documentation professionnelle sont des responsabilités courantes et critiques.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
