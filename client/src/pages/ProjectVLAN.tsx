import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function ProjectVLAN() {
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
          <h1 className="text-5xl font-bold text-foreground mb-4">VLAN - DHCP - NAT Lab</h1>
          <p className="text-2xl text-accent mb-6">Configuration Complète d'un Réseau d'Entreprise Sécurisé</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-accent/20 text-accent border-accent/30">VLAN</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">DHCP</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">NAT</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Cisco</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">ACL</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Sécurité Réseau</Badge>
          </div>
          <p className="text-foreground/80 max-w-4xl">
            Simulation complète d'une infrastructure réseau d'entreprise avec segmentation VLAN, services DHCP et NAT - 2024
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-foreground mb-6">Vue d'Ensemble du Projet</h2>
            
            <p className="text-foreground/80 leading-relaxed mb-6">
              Le projet VLAN-DHCP-NAT Lab est une simulation complète d'une infrastructure réseau d'entreprise moderne utilisant Cisco Packet Tracer. Ce laboratoire démontre la conception et l'implémentation d'une architecture réseau sécurisée, scalable et hautement disponible. Le projet couvre tous les aspects essentiels de l'administration réseau d'entreprise, y compris la segmentation VLAN, le routage inter-VLAN, les services DHCP, la translation d'adresses (NAT) et le contrôle d'accès (ACL). Ce laboratoire représente une application pratique des concepts de réseau d'entreprise et démontre la capacité à concevoir et à implémenter une infrastructure réseau complexe.
            </p>

            <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Contexte et Objectifs Pédagogiques</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Ce laboratoire a été conçu pour démontrer les compétences essentielles en administration réseau d'entreprise et pour valider la compréhension des technologies réseau modernes. Les objectifs principaux incluent :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Comprendre la segmentation réseau via VLAN et ses avantages en sécurité, performance et gestion</li>
              <li>Configurer le routage inter-VLAN pour permettre la communication contrôlée entre segments réseau</li>
              <li>Déployer des services DHCP pour l'attribution automatique d'adresses IP et la gestion centralisée de la configuration réseau</li>
              <li>Implémenter NAT/PAT pour la translation d'adresses et l'accès Internet sécurisé</li>
              <li>Créer des ACL pour contrôler le trafic réseau et appliquer des politiques de sécurité granulaires</li>
              <li>Valider et tester la configuration complète pour assurer la fonctionnalité et la sécurité</li>
              <li>Documenter l'architecture et les configurations pour faciliter la maintenance et la dépannage</li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Architecture Réseau Détaillée</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              L'architecture du laboratoire VLAN-DHCP-NAT est basée sur un modèle d'entreprise typique avec plusieurs départements et fonctions. La topologie comprend plusieurs composants clés :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li><strong>Commutateur d'accès (Access Switch)</strong> - Connecte les postes de travail et les périphériques des utilisateurs finaux. Chaque port du commutateur d'accès est configuré pour un VLAN spécifique, déterminant le segment réseau auquel le périphérique appartient.</li>
              <li><strong>Commutateur de distribution (Distribution Switch)</strong> - Interconnecte les commutateurs d'accès et le routeur. Le commutateur de distribution utilise des liens trunk pour transporter le trafic de plusieurs VLAN.</li>
              <li><strong>Routeur d'entreprise (Enterprise Router)</strong> - Gère le routage inter-VLAN et la connexion Internet. Le routeur utilise des sous-interfaces pour router le trafic entre VLAN.</li>
              <li><strong>Serveur DHCP</strong> - Fournit les adresses IP automatiquement à chaque VLAN. Le serveur DHCP est configuré avec plusieurs pools d'adresses, un pour chaque VLAN.</li>
              <li><strong>Serveur Web</strong> - Simule un serveur d'entreprise accessible depuis les VLAN autorisés. Le serveur web démontre comment les ACL peuvent contrôler l'accès aux ressources.</li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Segmentation VLAN</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le réseau est segmenté en quatre VLAN distincts, chacun représentant un département ou une fonction d'entreprise. Cette segmentation offre plusieurs avantages en sécurité, performance et gestion :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li><strong>VLAN 10 (Management)</strong> - Adressage : 192.168.10.0/24 - Pour les administrateurs réseau et IT. Ce VLAN contient les postes de travail des administrateurs et les serveurs de gestion.</li>
              <li><strong>VLAN 20 (Finance)</strong> - Adressage : 192.168.20.0/24 - Pour le département finance. Ce VLAN est isolé pour des raisons de sécurité, limitant l'accès aux données financières sensibles.</li>
              <li><strong>VLAN 30 (IT)</strong> - Adressage : 192.168.30.0/24 - Pour le département informatique. Ce VLAN a un accès plus large à d'autres segments réseau pour les besoins d'administration.</li>
              <li><strong>VLAN 40 (Guest)</strong> - Adressage : 192.168.40.0/24 - Pour les visiteurs et accès temporaire. Ce VLAN est fortement restreint et n'a accès qu'à Internet.</li>
            </ul>

            <p className="text-foreground/80 leading-relaxed mb-4">
              Cette segmentation offre plusieurs avantages en sécurité et gestion réseau :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Isolation du trafic entre départements, empêchant la propagation des menaces de sécurité</li>
              <li>Réduction de la portée des broadcasts, améliorant les performances réseau</li>
              <li>Amélioration des performances réseau grâce à la réduction du trafic de broadcast</li>
              <li>Facilitation de l'application des politiques de sécurité granulaires via les ACL</li>
              <li>Simplification de la gestion réseau grâce à l'organisation logique des ressources</li>
              <li>Conformité avec les standards de sécurité d'entreprise et les bonnes pratiques</li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Routage Inter-VLAN (Router-on-a-Stick)</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              La communication entre VLAN est réalisée via la technique "Router-on-a-Stick" où un seul port du routeur est connecté au commutateur via un lien trunk. Le routeur configure des sous-interfaces pour chaque VLAN et route le trafic entre eux. Cette approche est économique et facile à mettre en œuvre, bien qu'elle présente une limitation de performance en raison du goulot d'étranglement du lien unique.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              Configuration du routeur :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Interface physique configurée en mode trunk pour transporter le trafic de tous les VLAN</li>
              <li>Sous-interface pour VLAN 10 : 192.168.10.1/24 - Passerelle par défaut pour le VLAN Management</li>
              <li>Sous-interface pour VLAN 20 : 192.168.20.1/24 - Passerelle par défaut pour le VLAN Finance</li>
              <li>Sous-interface pour VLAN 30 : 192.168.30.1/24 - Passerelle par défaut pour le VLAN IT</li>
              <li>Sous-interface pour VLAN 40 : 192.168.40.1/24 - Passerelle par défaut pour le VLAN Guest</li>
            </ul>

            <p className="text-foreground/80 leading-relaxed mb-4">
              Chaque sous-interface est configurée avec l'encapsulation 802.1Q (VLAN tagging) pour identifier les paquets appartenant à chaque VLAN. Le routeur utilise les tables de routage pour diriger le trafic entre les sous-interfaces en fonction de l'adresse IP de destination.
            </p>

            <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Services DHCP</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Un serveur DHCP est configuré pour fournir automatiquement des adresses IP à chaque VLAN. Cette configuration permet aux utilisateurs de se connecter au réseau sans configuration manuelle d'adresse IP. Le serveur DHCP simplifie la gestion de la configuration réseau et réduit les erreurs de configuration.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              Configuration DHCP par VLAN :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li><strong>VLAN 10 (Management)</strong> - Pool : 192.168.10.100-192.168.10.200, Passerelle : 192.168.10.1, Serveurs DNS : 8.8.8.8 et 8.8.4.4</li>
              <li><strong>VLAN 20 (Finance)</strong> - Pool : 192.168.20.100-192.168.20.200, Passerelle : 192.168.20.1, Serveurs DNS : 8.8.8.8 et 8.8.4.4</li>
              <li><strong>VLAN 30 (IT)</strong> - Pool : 192.168.30.100-192.168.30.200, Passerelle : 192.168.30.1, Serveurs DNS : 8.8.8.8 et 8.8.4.4</li>
              <li><strong>VLAN 40 (Guest)</strong> - Pool : 192.168.40.100-192.168.40.200, Passerelle : 192.168.40.1, Serveurs DNS : 8.8.8.8 et 8.8.4.4</li>
            </ul>

            <p className="text-foreground/80 leading-relaxed mb-4">
              Chaque pool DHCP inclut également :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Serveurs DNS (8.8.8.8 et 8.8.4.4) pour la résolution de noms de domaine</li>
              <li>Durée de bail : 24 heures, permettant aux clients de renouveler leur adresse IP régulièrement</li>
              <li>Exclusions pour les adresses statiques réservées aux serveurs et aux périphériques de gestion</li>
              <li>Serveur WINS (Windows Internet Name Service) pour la résolution de noms NetBIOS</li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Translation d'Adresses (NAT/PAT)</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              NAT (Network Address Translation) est configuré sur le routeur pour permettre aux utilisateurs internes d'accéder à Internet. Le routeur traduit les adresses IP privées internes en une adresse IP publique (ou un pool d'adresses publiques) pour les communications externes. Cette configuration offre plusieurs avantages : elle permet aux utilisateurs internes d'accéder à Internet sans exposer les adresses IP internes, elle offre une couche de sécurité supplémentaire en masquant l'architecture réseau interne, et elle permet de réutiliser les adresses IP privées.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              Configuration NAT :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Interface interne (Inside) : Interface connectée aux VLAN (sous-interfaces du routeur)</li>
              <li>Interface externe (Outside) : Interface connectée à Internet</li>
              <li>Adresse IP publique pour NAT : 203.0.113.1 (exemple d'adresse publique)</li>
              <li>Type de NAT : PAT (Port Address Translation) pour multiplexer plusieurs utilisateurs sur une seule adresse IP publique</li>
            </ul>

            <p className="text-foreground/80 leading-relaxed mb-4">
              PAT (Port Address Translation) est une extension de NAT qui utilise les ports TCP/UDP pour multiplexer plusieurs utilisateurs sur une seule adresse IP publique. Chaque connexion interne est mappée à un port unique sur l'adresse IP publique, permettant au routeur de démultiplexer les réponses reçues d'Internet et de les router vers le client interne correct.
            </p>

            <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Contrôle d'Accès (ACL)</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Les ACL (Access Control Lists) sont utilisées pour contrôler le trafic entre VLAN et appliquer les politiques de sécurité. Les règles ACL implémentées incluent :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li><strong>ACL 100</strong> - Autorise le trafic du VLAN Finance vers le serveur Web (port 80 et 443), restreint l'accès aux autres VLAN</li>
              <li><strong>ACL 101</strong> - Autorise le trafic du VLAN IT vers tous les VLAN pour les besoins d'administration, permet l'accès complet aux ressources réseau</li>
              <li><strong>ACL 102</strong> - Restreint le trafic du VLAN Guest, autorisant uniquement l'accès à Internet (NAT) et bloquant l'accès aux VLAN internes</li>
              <li><strong>ACL 103</strong> - Autorise le trafic du VLAN Management vers tous les VLAN pour les besoins d'administration réseau</li>
            </ul>

            <p className="text-foreground/80 leading-relaxed mb-4">
              Les ACL sont appliquées aux sous-interfaces du routeur pour contrôler le trafic inter-VLAN. Les ACL utilisent une logique "first match" où la première règle correspondante est appliquée. Les ACL peuvent être configurées pour autoriser ou refuser le trafic en fonction de l'adresse IP source, l'adresse IP destination, le protocole et les ports.
            </p>

            <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Tests et Validation</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Plusieurs tests ont été effectués pour valider la configuration complète du réseau :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li><strong>Test DHCP</strong> - Vérification de l'attribution automatique d'adresses IP par le serveur DHCP. Les clients reçoivent une adresse IP, une passerelle par défaut et des serveurs DNS.</li>
              <li><strong>Test de routage</strong> - Ping entre VLAN pour vérifier la connectivité. Les paquets sont routés correctement entre les VLAN via le routeur.</li>
              <li><strong>Test NAT</strong> - Accès à Internet depuis les VLAN internes. Les adresses IP privées sont traduites en adresses IP publiques pour l'accès Internet.</li>
              <li><strong>Test ACL</strong> - Vérification des restrictions de trafic. Les ACL bloquent correctement le trafic non autorisé et autorisent le trafic autorisé.</li>
              <li><strong>Test de performance</strong> - Mesure de la latence et du throughput. Les performances réseau sont acceptables pour un environnement d'entreprise.</li>
              <li><strong>Test de sécurité</strong> - Vérification que les VLAN sont correctement isolés et que les politiques de sécurité sont appliquées.</li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Résultats Obtenus</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Tous les objectifs du laboratoire ont été atteints avec succès :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>✓ Segmentation VLAN fonctionnelle avec 4 VLAN distincts et isolés</li>
              <li>✓ Routage inter-VLAN opérationnel permettant la communication contrôlée entre segments</li>
              <li>✓ Services DHCP attribuant correctement les adresses IP à chaque VLAN</li>
              <li>✓ NAT/PAT permettant l'accès Internet depuis les VLAN internes</li>
              <li>✓ ACL appliquant les politiques de sécurité et contrôlant le trafic inter-VLAN</li>
              <li>✓ Tous les tests de connectivité réussis avec les résultats attendus</li>
              <li>✓ Architecture réseau sécurisée et conforme aux standards d'entreprise</li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Apprentissages et Compétences Développées</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Ce laboratoire a permis de développer et de consolider plusieurs compétences essentielles en administration réseau :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Configuration avancée de commutateurs Cisco (VLAN, trunk, spanning-tree)</li>
              <li>Configuration de routeurs Cisco (routage, sous-interfaces, NAT, ACL)</li>
              <li>Déploiement et configuration de services DHCP</li>
              <li>Conception d'architectures réseau sécurisées et scalables</li>
              <li>Troubleshooting et validation de configurations réseau complexes</li>
              <li>Compréhension profonde des protocoles réseau (IP, VLAN, DHCP, NAT, ACL)</li>
              <li>Application des politiques de sécurité via les ACL et la segmentation réseau</li>
              <li>Documentation technique et communication d'architecture réseau</li>
            </ul>

            <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">Conclusion</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le laboratoire VLAN-DHCP-NAT démontre une compréhension complète des technologies réseau d'entreprise essentielles. Le projet couvre tous les aspects de la conception et de l'implémentation d'une infrastructure réseau moderne, sécurisée et scalable. Cette expérience constitue une base solide pour des rôles en administration réseau, architecture réseau ou sécurité réseau. Les compétences développées lors de ce laboratoire sont directement applicables à des environnements d'entreprise réels et sont hautement demandées par les employeurs dans le domaine des technologies de l'information et de la sécurité réseau.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
