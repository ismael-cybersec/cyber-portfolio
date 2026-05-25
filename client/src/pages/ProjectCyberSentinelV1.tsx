import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function ProjectCyberSentinelV1() {
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
          <h1 className="text-5xl font-bold text-primary mb-4">CyberSentinel v1 - Système de Sécurité Initial</h1>
          <p className="text-2xl text-accent mb-6">Prototype de Système de Détection et de Réponse aux Menaces</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-accent/20 text-accent border-accent/30">Détection de Menaces</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Système de Sécurité</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Prototype</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Projet Fondateur</Badge>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-primary mb-6">Vue d'Ensemble du Projet</h2>
            
            <p className="text-foreground/80 leading-relaxed mb-6">
              CyberSentinel v1 représente le prototype initial d'un système de détection et de réponse aux menaces de sécurité. Ce projet a marqué le début du développement d'une solution de sécurité complète capable de détecter les menaces de sécurité, de générer des alertes, et de déclencher des réponses automatisées. Le projet v1 a fourni les fondations architecturales et les concepts de base qui ont été améliorés dans les versions ultérieures. Cette expérience a validé la faisabilité d'une solution de sécurité intégrée et a établi les principes de conception pour les versions futures.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Objectifs du Projet</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Les objectifs principaux du projet CyberSentinel v1 incluaient :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Concevoir une architecture de système de détection de menaces</li>
              <li>Implémenter la détection de menaces de base (ICMP Flood, Port Scans)</li>
              <li>Développer un système d'alerte et de notification</li>
              <li>Mettre en place une réponse automatisée aux menaces</li>
              <li>Créer une interface de monitoring</li>
              <li>Valider la faisabilité d'une solution intégrée</li>
              <li>Établir les principes de conception pour les versions futures</li>
              <li>Documenter l'architecture et les processus</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Architecture du Système</h3>
            
            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Composant de Capture de Trafic :</strong> Le système incluait un composant de capture de trafic réseau qui utilisait des outils comme Tcpdump ou Wireshark pour capturer le trafic réseau. Le trafic capturé était stocké dans des fichiers PCAP pour analyse ultérieure. Ce composant fournissait les données brutes nécessaires pour la détection de menaces.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Moteur de Détection :</strong> Le moteur de détection analysait le trafic capturé pour identifier les menaces de sécurité. Le moteur utilisait des règles de détection basées sur des signatures et des anomalies. Les règles de détection incluaient la détection de patterns d'attaque connus et l'identification de comportements anormaux. Le moteur de détection pouvait traiter le trafic en temps réel ou en mode batch.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Système d'Alerte :</strong> Lorsqu'une menace était détectée, le système d'alerte générait des notifications pour alerter les administrateurs de sécurité. Les alertes incluaient des informations détaillées sur la menace détectée, y compris le type de menace, la source, la destination, et la sévérité. Les alertes pouvaient être envoyées par email, SMS, ou affichées dans une console de monitoring.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Système de Réponse Automatisée :</strong> Le système pouvait déclencher des réponses automatisées aux menaces détectées. Les réponses incluaient le blocage du trafic malveillant, l'isolation des systèmes compromis, ou l'activation de mesures de sécurité supplémentaires. Le système de réponse était configurable pour permettre différents niveaux de réponse automatisée.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Capacités de Détection</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le système v1 incluait les capacités de détection suivantes :
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Détection de ICMP Flood :</strong> Le système pouvait détecter les attaques ICMP Flood où un attaquant envoie un grand nombre de paquets ICMP (ping) pour surcharger la bande passante ou les ressources du système cible. La détection utilisait des seuils de taux d'arrivée des paquets ICMP pour identifier les attaques potentielles.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Détection de Port Scans :</strong> Le système pouvait détecter les scans de ports où un attaquant envoie des paquets à plusieurs ports pour identifier les services actifs. La détection utilisait des patterns de connexion pour identifier les scans de ports. Les types de scans détectés incluaient les scans TCP SYN, les scans UDP, et les scans de connexion complète.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Détection d'Anomalies :</strong> Le système pouvait détecter les anomalies de trafic qui s'écartaient du comportement normal. Les anomalies incluaient les volumes de trafic inhabituels, les patterns de communication inhabituels, ou les protocoles inhabituels. La détection d'anomalies utilisait des techniques d'apprentissage automatique pour établir un profil de comportement normal.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Intégration et Déploiement</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le système v1 a été conçu pour s'intégrer dans une infrastructure de sécurité existante :
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Intégration avec les Pare-feu :</strong> Le système pouvait s'intégrer avec les pare-feu existants pour déclencher des actions de blocage en réponse aux menaces détectées. L'intégration permettait une réponse rapide aux menaces sans intervention manuelle.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Intégration avec les Systèmes de Logging :</strong> Le système pouvait envoyer les événements de sécurité détectés aux systèmes de logging centralisés pour conservation et analyse ultérieure. L'intégration permettait une corrélation des événements de sécurité provenant de plusieurs sources.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Déploiement en Mode Capteur :</strong> Le système pouvait être déployé en mode capteur sur des points stratégiques du réseau pour monitorer le trafic. Les capteurs pouvaient être déployés sur des segments réseau spécifiques pour fournir une visibilité sur le trafic de ces segments.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Interface de Monitoring</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le système v1 incluait une interface de monitoring pour visualiser l'activité de sécurité :
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Tableau de Bord de Sécurité :</strong> Un tableau de bord affichait les statistiques de sécurité clés, y compris le nombre d'alertes, les types de menaces détectées, et les tendances de sécurité. Le tableau de bord fournissait une vue d'ensemble rapide de la posture de sécurité.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Visualisation du Trafic Réseau :</strong> Le système affichait une visualisation du trafic réseau montrant les flux de communication entre les systèmes. La visualisation permettait d'identifier rapidement les patterns de trafic inhabituels.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Console d'Alertes :</strong> Une console affichait toutes les alertes générées par le système. Les alertes étaient triées par sévérité et permettaient aux administrateurs de filtrer et de rechercher les alertes spécifiques.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Défis et Solutions</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le développement du système v1 a présenté plusieurs défis qui ont été résolus :
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Défi : Performance en Temps Réel :</strong> Le système devait traiter le trafic réseau en temps réel sans créer de goulot d'étranglement. Solution : Optimisation des algorithmes de détection et utilisation de structures de données efficaces pour minimiser la latence.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Défi : Faux Positifs :</strong> Le système générait trop de faux positifs, créant des alertes pour des activités légitimes. Solution : Affinage des règles de détection et utilisation de techniques d'apprentissage automatique pour améliorer la précision.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Défi : Scalabilité :</strong> Le système devait être capable de traiter des volumes de trafic croissants. Solution : Architecture modulaire permettant l'ajout de capteurs supplémentaires et de serveurs de traitement.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Apprentissages et Compétences Développées</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le projet a permis de développer une expertise en détection de menaces et en systèmes de sécurité :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Compréhension approfondie de la détection de menaces</li>
              <li>Capacité à concevoir une architecture de système de sécurité</li>
              <li>Compétences en développement de règles de détection</li>
              <li>Compréhension de l'intégration des systèmes de sécurité</li>
              <li>Capacité à déployer et à monitorer les systèmes de sécurité</li>
              <li>Compétences en optimisation de la performance</li>
              <li>Compréhension des techniques d'apprentissage automatique pour la sécurité</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Évolution vers v2</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le succès du système v1 a conduit au développement de CyberSentinel v2, qui a amélioré et étendu les capacités du système initial. Les améliorations incluaient des capacités de détection plus avancées, une meilleure intégration avec les systèmes SIEM, et une interface utilisateur améliorée. La version v2 a démontré l'importance d'itérer et d'améliorer continuellement les solutions de sécurité.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Conclusion</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              CyberSentinel v1 a représenté un projet fondateur qui a établi les principes de conception pour un système de détection de menaces intégré. Le système a démontré la faisabilité d'une solution de sécurité automatisée et a fourni les fondations pour les améliorations futures. Cette expérience a validé la capacité à concevoir et à implémenter des systèmes de sécurité complexes et a établi les compétences en détection de menaces qui ont été appliquées aux projets ultérieurs.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
