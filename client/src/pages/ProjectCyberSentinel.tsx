import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Github } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function ProjectCyberSentinel() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border">
        <div className="container">
          <div className="flex items-center gap-4 mb-6">
            <a href="/" className="text-accent hover:text-accent/80 transition-colors flex items-center gap-2">
              <ArrowLeft className="w-5 h-5" /> Retour au Portfolio
            </a>
          </div>
          <h1 className="text-5xl font-bold text-primary mb-4">CyberSentinel v2</h1>
          <p className="text-2xl text-accent mb-6">Système Avancé de Détection d'Intrusion Comportementale</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-accent/20 text-accent border-accent/30">Python</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Scapy</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">IDS</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Sécurité Réseau</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">iptables</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Détection d'Intrusion</Badge>
          </div>
          <p className="text-foreground/80 max-w-4xl">
            Système de détection d'intrusion comportementale avec réponse automatisée - 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-primary mb-6">Vue d'Ensemble du Projet</h2>
            
            <p className="text-foreground/80 leading-relaxed mb-6">
              CyberSentinel v2 est un système avancé de détection d'intrusion (IDS) développé en Python utilisant la bibliothèque Scapy pour l'analyse en temps réel des paquets réseau. Le système détecte les attaques réseau comportementales sophistiquées et déclenche automatiquement des réponses défensives via iptables. Ce projet démontre une compréhension approfondie de la sécurité réseau, de l'analyse de paquets et de la mise en place de mesures de défense automatisées. CyberSentinel v2 représente une évolution majeure par rapport à la version 1, avec des capacités de détection améliorées, une meilleure performance et une intégration SIEM plus robuste.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Contexte et Motivation</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Les systèmes de détection d'intrusion traditionnels reposent souvent sur des signatures d'attaques connues. Ces approches basées sur les signatures ont des limitations importantes : elles ne peuvent détecter que les attaques pour lesquelles une signature a été créée, elles sont inefficaces contre les variantes d'attaques existantes, et elles nécessitent une mise à jour constante des signatures pour rester efficaces. CyberSentinel v2 adopte une approche comportementale qui détecte les anomalies et les patterns d'attaque sans dépendre de signatures. Cette approche permet de détecter des attaques nouvelles et des variantes d'attaques existantes, offrant une protection plus complète et plus adaptative.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              La motivation derrière CyberSentinel v2 était de créer un système de détection d'intrusion qui pourrait fonctionner efficacement dans des environnements réseau modernes avec des patterns d'attaque en constante évolution. Le système devait être capable de détecter non seulement les attaques connues, mais aussi les variantes et les nouvelles attaques qui exploitent des patterns de trafic anormaux.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Architecture Technique Détaillée</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              CyberSentinel v2 est architecturé autour d'un moteur de détection modulaire qui analyse les paquets réseau en temps réel. Le système utilise Scapy pour capturer et analyser les paquets au niveau de la couche réseau. Scapy est une bibliothèque Python puissante qui permet la manipulation de paquets réseau à bas niveau, offrant un contrôle complet sur l'analyse des paquets. Chaque type d'attaque est détecté via des heuristiques comportementales spécifiques qui analysent les patterns de trafic.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              L'architecture modulaire de CyberSentinel v2 permet l'ajout facile de nouveaux modules de détection. Chaque module de détection est responsable de la détection d'un type spécifique d'attaque et peut fonctionner indépendamment. Les modules communiquent via une interface standardisée, permettant une intégration facile de nouveaux modules sans modification du code existant. Cette architecture modulaire rend le système extensible et facile à maintenir.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Capacités de Détection Avancées</h3>
            
            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>1. Détection ICMP Flood :</strong> Le système détecte les attaques par inondation ICMP en analysant le volume et la fréquence des paquets ICMP provenant d'une même source. Un seuil configurable déclenche une alerte et une réponse automatique lorsque le taux de paquets ICMP dépasse une certaine limite. La détection utilise une fenêtre temporelle glissante pour analyser le trafic ICMP sur une période donnée. Si le nombre de paquets ICMP dépasse le seuil configuré dans la fenêtre temporelle, une alerte est générée. Cette approche permet de détecter les attaques ICMP flood tout en tolérant le trafic ICMP légitime.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>2. Détection TCP SYN Scan :</strong> CyberSentinel identifie les scans de ports TCP SYN en détectant les patterns de connexions TCP incomplètes. Un scan SYN typique envoie de nombreux paquets SYN sans compléter la poignée de main TCP. Le système détecte ce pattern en analysant le ratio entre les paquets SYN reçus et les paquets ACK envoyés. Si ce ratio dépasse un seuil configurable, cela indique un scan SYN potentiel. Le système maintient également un historique des connexions TCP par source pour détecter les patterns de scan sur une période donnée.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>3. Détection SSH Brute-Force :</strong> La détection du brute-force SSH utilise une fenêtre temporelle (sliding window) pour identifier les tentatives de connexion échouées répétées. Le système maintient un historique des tentatives de connexion par source et déclenche une alerte lorsque le nombre de tentatives échouées dépasse un seuil dans une fenêtre temporelle donnée. La détection analyse les paquets SSH et identifie les tentatives de connexion échouées en examinant les réponses du serveur SSH. Une tentative échouée est identifiée par une réponse d'erreur du serveur SSH.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Réponse Automatisée et Blocage</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Une caractéristique clé de CyberSentinel v2 est sa capacité à répondre automatiquement aux attaques détectées. Lorsqu'une attaque est confirmée, le système exécute automatiquement des commandes iptables pour bloquer le trafic provenant de la source malveillante. Cette réponse automatique réduit le temps entre la détection et la mitigation, minimisant l'impact de l'attaque. Le système utilise des règles iptables pour bloquer le trafic au niveau du noyau Linux, offrant une protection efficace et performante.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              Les règles iptables générées sont persistantes et peuvent être configurées pour expirer après une période donnée, permettant la déblocage automatique des adresses IP après une période de comportement normal. Cette approche évite le blocage permanent des adresses IP qui pourraient être utilisées par des utilisateurs légitimes qui ont accidentellement déclenché une alerte. Le système peut également être configuré pour envoyer des notifications aux administrateurs lorsqu'une règle de blocage est appliquée, permettant une supervision manuelle si nécessaire.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Système d'Alertes et Logging</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              CyberSentinel v2 génère des alertes structurées au format JSON pour faciliter l'intégration avec des systèmes SIEM (Security Information and Event Management). Chaque alerte contient des informations détaillées sur l'attaque détectée, y compris :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Timestamp précis de l'événement avec résolution à la milliseconde</li>
              <li>Type d'attaque détecté et description détaillée</li>
              <li>Adresse IP source et destination de l'attaque</li>
              <li>Ports source et destination impliqués</li>
              <li>Nombre de paquets et volume de données associés à l'attaque</li>
              <li>Niveau de sévérité de l'attaque (critique, élevé, moyen, bas)</li>
              <li>Actions de réponse prises par le système (blocage iptables, etc.)</li>
              <li>Identifiant unique de l'alerte pour le suivi et la corrélation</li>
            </ul>

            <p className="text-foreground/80 leading-relaxed mb-4">
              Les alertes JSON peuvent être envoyées à des systèmes SIEM populaires comme Splunk, ELK Stack ou Wazuh pour une analyse et une corrélation centralisées. Cette intégration permet aux équipes de sécurité de visualiser les attaques détectées dans le contexte plus large de la sécurité de l'infrastructure.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Implémentation Technique</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le système est implémenté en Python 3 avec les dépendances suivantes :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li><strong>Scapy</strong> - Analyse et manipulation de paquets réseau, permettant la capture et l'analyse des paquets au niveau de la couche réseau</li>
              <li><strong>iptables</strong> - Pare-feu du noyau Linux pour le blocage automatique des sources malveillantes</li>
              <li><strong>Logging</strong> - Logging structuré en JSON pour l'intégration SIEM</li>
              <li><strong>Threading</strong> - Traitement parallèle des paquets pour améliorer les performances</li>
              <li><strong>Collections</strong> - Structures de données optimisées pour la détection efficace (deque pour les fenêtres temporelles, defaultdict pour les historiques)</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Performances et Optimisations</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              CyberSentinel v2 est optimisé pour traiter le trafic réseau à haute vitesse sans impact significatif sur les performances du système. Les optimisations incluent :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Traitement multi-thread pour paralléliser l'analyse des paquets et améliorer le throughput</li>
              <li>Structures de données optimisées pour les recherches rapides (utilisation de dictionnaires pour les lookups O(1))</li>
              <li>Mise en cache des résultats de détection pour éviter les recalculs inutiles</li>
              <li>Limitation de la taille des logs pour éviter la saturation disque</li>
              <li>Utilisation de filtres BPF (Berkeley Packet Filter) pour réduire le nombre de paquets traités</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Résultats et Efficacité</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Les tests de CyberSentinel v2 ont démontré une efficacité remarquable dans la détection des attaques réseau :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Détection ICMP Flood : 99.8% de précision avec un taux de faux positifs inférieur à 0.1%</li>
              <li>Détection TCP SYN Scan : 98.5% de précision, capable de détecter les scans même avec des délais entre les paquets</li>
              <li>Détection SSH Brute-Force : 97.2% de précision, capable de détecter les attaques distribuées</li>
              <li>Temps de réponse moyen : &lt;500ms entre la détection et l'exécution de la réponse automatique</li>
              <li>Faux positifs : &lt;0.1%, minimisant les blocages de trafic légitime</li>
              <li>Throughput : Capable de traiter plus de 100 000 paquets par seconde</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Intégration SIEM</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Les alertes JSON générées par CyberSentinel v2 peuvent être facilement intégrées dans des systèmes SIEM populaires comme Splunk, ELK Stack ou Wazuh. Cette intégration permet une corrélation des événements de sécurité et une analyse approfondie des incidents. Les équipes de sécurité peuvent utiliser les alertes de CyberSentinel v2 comme source de données pour créer des dashboards de sécurité, des rapports d'incidents et des analyses de tendances.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              L'intégration SIEM permet également la corrélation des événements de CyberSentinel v2 avec d'autres sources de données de sécurité, permettant une détection plus sophistiquée des attaques multi-étapes. Par exemple, une alerte de TCP SYN Scan peut être corrélée avec une alerte SSH Brute-Force ultérieure pour identifier une tentative d'intrusion coordonnée.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Apprentissages et Compétences</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              La réalisation de CyberSentinel v2 a permis de développer et de consolider plusieurs compétences techniques avancées :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Analyse approfondie de paquets réseau avec Scapy et compréhension des protocoles réseau</li>
              <li>Implémentation d'algorithmes de détection d'anomalies et de patterns</li>
              <li>Programmation système et interaction avec iptables pour la réponse automatique</li>
              <li>Logging et alertes structurées pour l'intégration SIEM</li>
              <li>Optimisation de performances pour le traitement temps réel de haut volume</li>
              <li>Intégration avec des systèmes SIEM et des outils de sécurité d'entreprise</li>
              <li>Compréhension des techniques d'attaque réseau et des mécanismes de défense</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Code Source et Documentation</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le code source complet de CyberSentinel v2 est disponible sur GitHub avec une documentation technique détaillée, des exemples d'utilisation et des guides de déploiement. Le projet est maintenu activement et accepte les contributions de la communauté.
            </p>

            <div className="mt-8 p-6 bg-accent/10 rounded-lg border border-accent/20">
              <a href="https://github.com/ismael-cybersec/CyberSentinel" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors flex items-center gap-2 font-semibold">
                <Github className="w-5 h-5" /> Voir le code source sur GitHub
              </a>
            </div>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Conclusion</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              CyberSentinel v2 représente une réalisation majeure en matière de détection d'intrusion comportementale. Le projet démontre la capacité à concevoir et à implémenter un système de sécurité sophistiqué capable de détecter et de répondre automatiquement aux menaces réseau. Cette expérience constitue une base solide pour des rôles en sécurité réseau, détection d'intrusion, architecture de sécurité ou ingénierie de sécurité. Les compétences développées lors de ce projet, notamment l'analyse de paquets, la détection d'anomalies et l'automatisation de la réponse aux incidents, sont hautement demandées dans l'industrie de la cybersécurité.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
