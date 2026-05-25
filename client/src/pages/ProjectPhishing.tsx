import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function ProjectPhishing() {
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
          <h1 className="text-5xl font-bold text-primary mb-4">Simulation de Sensibilisation à l'Hameçonnage</h1>
          <p className="text-2xl text-accent mb-6">Campagne Éducative Multi-Campus de Sensibilisation aux Menaces Phishing</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-accent/20 text-accent border-accent/30">Sensibilisation</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Sécurité</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Hameçonnage</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Éducation</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Analyse Comportementale</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Projet Groupe</Badge>
          </div>
          <p className="text-foreground/80 max-w-4xl">
            Projet de groupe - Conception et déploiement d'une campagne d'hameçonnage éducative à grande échelle - 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-primary mb-6">Vue d'Ensemble du Projet</h2>
            
            <p className="text-foreground/80 leading-relaxed mb-6">
              Le projet de simulation de sensibilisation à l'hameçonnage représente une initiative éducative majeure visant à sensibiliser les utilisateurs aux menaces de phishing et à améliorer leur capacité à identifier et à éviter les attaques par hameçonnage. Ce projet a été réalisé en collaboration avec d'autres étudiants et a impliqué la conception et le déploiement d'une campagne d'hameçonnage simulée à grande échelle ciblant les étudiants du Collège communautaire du Nouveau-Brunswick (CCNB) sur 5 campus. Le projet a démontré une compréhension profonde des techniques de phishing, de la psychologie de la manipulation, et de l'importance de la sensibilisation à la sécurité dans la défense contre les menaces de sécurité modernes.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Contexte et Objectifs du Projet</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le phishing reste l'une des menaces de sécurité les plus efficaces et les plus courantes, exploitant la psychologie humaine plutôt que les failles techniques. Les statistiques montrent que le phishing est responsable de la majorité des incidents de sécurité et des violations de données. L'objectif principal du projet était de sensibiliser les utilisateurs aux menaces de phishing et d'améliorer leur capacité à identifier les emails de phishing. Les objectifs spécifiques incluaient :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Concevoir une campagne d'hameçonnage simulée réaliste et convaincante</li>
              <li>Déployer la campagne à grande échelle auprès des étudiants du CCNB (5 campus)</li>
              <li>Mesurer le taux de clics et d'interactions avec les emails de phishing simulés</li>
              <li>Analyser les comportements des utilisateurs face aux menaces de phishing</li>
              <li>Fournir une rétroaction éducative aux utilisateurs qui ont cliqué sur les liens</li>
              <li>Évaluer l'efficacité de la campagne de sensibilisation</li>
              <li>Identifier les groupes d'utilisateurs à risque élevé</li>
              <li>Recommander des mesures de sensibilisation supplémentaires</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Conception de la Campagne</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              La conception de la campagne d'hameçonnage a impliqué une planification minutieuse pour créer des emails convaincants qui ressemblaient à des emails de phishing réels tout en restant éducatifs et éthiques. La campagne a utilisé plusieurs techniques de social engineering couramment utilisées par les attaquants réels :
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>1. Urgence et Peur :</strong> Les emails de phishing utilisent souvent l'urgence et la peur pour inciter les utilisateurs à agir rapidement sans réfléchir. Les emails de la campagne ont utilisé des sujets comme "Votre compte a été compromis" ou "Action immédiate requise" pour créer un sentiment d'urgence. Cette technique exploite la tendance naturelle des utilisateurs à réagir rapidement aux situations d'urgence.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>2. Imitation de Sources Fiables :</strong> Les emails de phishing imitent souvent des sources fiables comme les banques, les services informatiques ou les fournisseurs de services. Les emails de la campagne ont imité des emails du département informatique du CCNB, utilisant des logos et des formats similaires aux emails authentiques. Cette technique exploite la confiance des utilisateurs envers les sources fiables.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>3. Demandes de Vérification d'Identité :</strong> Les emails de phishing demandent souvent aux utilisateurs de vérifier leur identité en cliquant sur un lien ou en entrant des informations d'identification. Les emails de la campagne ont demandé aux utilisateurs de vérifier leur compte en cliquant sur un lien. Cette technique exploite la tendance des utilisateurs à suivre les instructions des sources apparemment fiables.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>4. Offres Attrayantes :</strong> Certains emails de phishing offrent des récompenses ou des avantages pour inciter les utilisateurs à cliquer. Les emails de la campagne ont offert des prix ou des avantages pour encourager les clics. Cette technique exploite la tendance des utilisateurs à être attirés par les offres avantageuses.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Infrastructure Technique</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              L'infrastructure technique de la campagne a impliqué la mise en place d'une plateforme de phishing simulée qui permettait le suivi des interactions des utilisateurs :
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>1. Serveur de Phishing Simulé :</strong> Un serveur web a été mis en place pour héberger les pages de phishing simulées. Ces pages ressemblaient à des pages de connexion authentiques du CCNB. Lorsque les utilisateurs cliquaient sur les liens dans les emails de phishing, ils étaient dirigés vers ces pages simulées. Les pages enregistraient les interactions des utilisateurs (clics, temps passé sur la page, etc.) sans capturer les informations d'identification réelles.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>2. Système de Suivi :</strong> Un système de suivi a été implémenté pour enregistrer les interactions des utilisateurs avec les emails et les pages de phishing. Le système enregistrait les données suivantes : qui a cliqué sur le lien, quand ils ont cliqué, combien de temps ils ont passé sur la page de phishing, et s'ils ont entré des informations d'identification (bien que les informations d'identification n'aient pas été capturées).
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>3. Plateforme de Rétroaction Éducative :</strong> Une plateforme de rétroaction a été mise en place pour fournir une rétroaction éducative aux utilisateurs qui ont cliqué sur les liens de phishing. Lorsque les utilisateurs cliquaient sur les liens, ils étaient redirigés vers une page éducative qui expliquait les techniques de phishing utilisées et comment identifier les emails de phishing. Cette rétroaction immédiate a renforcé l'apprentissage.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Déploiement de la Campagne</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              La campagne a été déployée à grande échelle auprès des étudiants du CCNB sur 5 campus. Le déploiement a impliqué l'envoi d'emails de phishing simulés à tous les étudiants du CCNB. La campagne a été soigneusement planifiée pour minimiser les faux positifs et pour assurer que les utilisateurs comprenaient que la campagne était éducative et non malveillante.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Phases du Déploiement :</strong>
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li><strong>Phase 1 - Préparation :</strong> Approbation de la direction, mise en place de l'infrastructure technique, création des emails de phishing, et préparation des pages de rétroaction éducative</li>
              <li><strong>Phase 2 - Lancement :</strong> Envoi des emails de phishing simulés à tous les étudiants du CCNB sur 5 campus</li>
              <li><strong>Phase 3 - Suivi :</strong> Suivi des interactions des utilisateurs et collecte des données sur les taux de clics</li>
              <li><strong>Phase 4 - Rétroaction :</strong> Fourniture de rétroaction éducative aux utilisateurs qui ont cliqué sur les liens</li>
              <li><strong>Phase 5 - Analyse :</strong> Analyse des données collectées et génération de rapports</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Résultats et Analyses</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              La campagne a généré des résultats significatifs qui ont fourni des insights précieux sur la sensibilisation des utilisateurs aux menaces de phishing :
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Taux de Clics :</strong> Le taux de clics global a été de 15-20%, ce qui est légèrement inférieur aux taux de clics moyens observés dans les campagnes de phishing réelles (20-30%). Ce résultat suggère que les utilisateurs du CCNB ont une sensibilisation modérée aux menaces de phishing, mais qu'il y a encore une marge d'amélioration significative.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Variation par Campus :</strong> Le taux de clics a varié considérablement entre les campus, allant de 10% à 25%. Cette variation suggère que certains campus ont une meilleure sensibilisation à la sécurité que d'autres. Les campus avec un taux de clics plus élevé ont reçu des recommandations pour des mesures de sensibilisation supplémentaires.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Variation par Département :</strong> Le taux de clics a également varié par département. Les étudiants en informatique et en cybersécurité ont montré un taux de clics inférieur (8-12%), tandis que les étudiants d'autres disciplines ont montré un taux de clics plus élevé (18-25%). Ce résultat était attendu car les étudiants en informatique ont généralement une meilleure compréhension des menaces de sécurité.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>Analyse des Comportements :</strong> L'analyse des comportements des utilisateurs a révélé plusieurs patterns intéressants. Certains utilisateurs ont cliqué immédiatement sur les liens sans réfléchir, tandis que d'autres ont hésité avant de cliquer. Certains utilisateurs ont même signalé les emails comme du phishing, démontrant une bonne sensibilisation à la sécurité.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Impact Éducatif</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              La campagne a eu un impact éducatif significatif sur les utilisateurs qui ont participé :
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>1. Sensibilisation Accrue :</strong> Les utilisateurs qui ont cliqué sur les liens de phishing et qui ont reçu la rétroaction éducative ont montré une sensibilisation accrue aux menaces de phishing. Un suivi ultérieur a montré que ces utilisateurs avaient moins de chances de cliquer sur des emails de phishing similaires à l'avenir.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>2. Comportements de Sécurité Améliorés :</strong> Les utilisateurs qui ont participé à la campagne ont montré des comportements de sécurité améliorés, y compris une vérification plus minutieuse des emails, une hésitation avant de cliquer sur les liens, et un signalement des emails suspects.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>3. Engagement Accru :</strong> La campagne a généré un engagement accru avec la sensibilisation à la sécurité. Les utilisateurs ont montré un intérêt accru pour les formations de sécurité et les ressources éducatives.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Défis et Considérations Éthiques</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le projet a présenté plusieurs défis et considérations éthiques qui ont dû être soigneusement gérés :
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>1. Consentement et Transparence :</strong> Un défi majeur a été d'obtenir le consentement des utilisateurs pour la campagne tout en maintenant le réalisme de la simulation. La solution a impliqué l'approbation préalable de la direction du CCNB et la communication claire aux utilisateurs que la campagne était éducative et non malveillante.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>2. Risque de Dommages Psychologiques :</strong> Un autre défi a été de minimiser le risque de dommages psychologiques aux utilisateurs qui ont cliqué sur les liens de phishing. La solution a impliqué la fourniture immédiate de rétroaction éducative et positive, plutôt que de punir ou d'humilier les utilisateurs.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>3. Conformité aux Réglementations :</strong> Le projet a dû se conformer aux réglementations sur la protection des données et la vie privée. Les données collectées ont été traitées de manière sécurisée et confidentielle, et les utilisateurs ont eu la possibilité de refuser de participer à la campagne.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Apprentissages et Compétences Développées</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le projet a permis de développer et de consolider plusieurs compétences importantes :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Compréhension profonde des techniques de phishing et de social engineering</li>
              <li>Capacité à concevoir des campagnes de sensibilisation à la sécurité efficaces</li>
              <li>Compétences en gestion de projets complexes et multi-campus</li>
              <li>Compétences en analyse de données et en génération de rapports</li>
              <li>Compétences en communication et en présentation des résultats</li>
              <li>Compréhension des considérations éthiques en sécurité</li>
              <li>Capacité à travailler en équipe et à collaborer avec d'autres étudiants</li>
              <li>Compréhension de la psychologie humaine et de la manipulation</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Recommandations et Suivi</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Sur la base des résultats de la campagne, plusieurs recommandations ont été formulées pour améliorer la sensibilisation à la sécurité :
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-4 space-y-2">
              <li>Mettre en place des formations de sensibilisation à la sécurité régulières et obligatoires</li>
              <li>Créer des ressources éducatives facilement accessibles sur la reconnaissance du phishing</li>
              <li>Mettre en place des campagnes de phishing simulées régulières pour maintenir la sensibilisation</li>
              <li>Fournir une rétroaction personnalisée aux utilisateurs à risque élevé</li>
              <li>Créer une culture de sécurité positive qui encourage le signalement des emails suspects</li>
              <li>Mettre en place des mesures techniques supplémentaires pour filtrer les emails de phishing</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Conclusion</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le projet de simulation de sensibilisation à l'hameçonnage a démontré une compréhension profonde des techniques de phishing et de l'importance de la sensibilisation à la sécurité. Le projet a eu un impact éducatif significatif sur les utilisateurs et a fourni des insights précieux sur les niveaux de sensibilisation à la sécurité du CCNB. Cette expérience constitue une base solide pour des rôles en sensibilisation à la sécurité, gestion des risques de sécurité, ou ingénierie de sécurité. Les compétences développées lors de ce projet, notamment la compréhension des techniques de phishing, la capacité à concevoir des campagnes de sensibilisation efficaces, et la compréhension des considérations éthiques en sécurité, sont hautement demandées dans l'industrie de la cybersécurité.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
