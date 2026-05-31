import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
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
            <Link href="/" className="text-accent hover:text-accent/80 transition-colors flex items-center gap-2">
  <ArrowLeft className="w-5 h-5" /> Retour au Portfolio
</Link>
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-4">Projet de Simulation de Phishing Éducatif</h1>
          <p className="text-2xl text-accent mb-6">Campagne de Sensibilisation aux Techniques d'Ingénierie Sociale</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-accent/20 text-accent border-accent/30">Phishing</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Sensibilisation</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Ingénierie Sociale</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Éducation</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">SECS1026</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Projet Groupe</Badge>
          </div>
          <p className="text-foreground/80 max-w-4xl">
            Cours: SECS1026 | Équipe: Patrick Kouembi, Aymen Mamoudi, Ismael Baby, Charles-Etienne Robichaud, Kossi Agbemavi | Avril 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container max-w-4xl mx-auto space-y-12">
          
          {/* Introduction */}
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-foreground mb-6">Introduction</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Dans le cadre de notre projet de groupe en cybersécurité, nous avons conçu et développé une campagne de simulation d'hameçonnage (phishing) ciblant l'ensemble des étudiants du Collège communautaire du Nouveau-Brunswick (CCNB). Cette initiative représente une approche pédagogique moderne et efficace pour sensibiliser les utilisateurs aux menaces de sécurité informatique qui évoluent constamment dans le paysage numérique actuel.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              L'objectif principal de cette simulation est éducatif : sensibiliser les étudiants aux techniques d'ingénierie sociale les plus courantes tout en leur permettant de reconnaître les signes d'une attaque de phishing réaliste. Le phishing demeure l'une des techniques d'attaque les plus efficaces et les plus utilisées par les cybercriminels, car il exploite la confiance et la psychologie humaine plutôt que des vulnérabilités techniques complexes.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le scénario choisi repose sur une urgence technique liée à la plateforme Ardoise, le système officiel de gestion des cours du CCNB. Cette approche permet de créer un contexte très proche de la réalité quotidienne des étudiants, augmentant ainsi l'efficacité pédagogique de la campagne. En exploitant leur dépendance à cette plateforme et leur confiance envers les communications officielles du collège, nous avons créé un scénario particulièrement pertinent et crédible.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le courriel a été rédigé entièrement en français, utilisant le logo officiel du CCNB et les couleurs institutionnelles (orange et bleu) pour maximiser la crédibilité. Le message contient également un avertissement de sécurité subtil provenant de l'extérieur de l'organisation, ce qui permet de désigner aux étudiants de vérifier attentivement les détails. Le lien redirige vers une fausse page de connexion Microsoft très réaliste avec le logo CCNB en arrière-plan, simulant une authentification légitime.
            </p>
          </div>

          {/* Choix de la Campagne */}
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-foreground mb-6">Choix de la Campagne par Rapport au Public Cible</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              <span className="font-semibold">Public Cible Défini:</span> Notre campagne cible tous les étudiants et étudiantes du Collège communautaire du Nouveau-Brunswick, indépendamment de leur programme d'études ou de leur campus. Cette approche inclusive garantit une couverture maximale et permet une sensibilisation uniforme à l'ensemble de la communauté étudiante.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              <span className="font-semibold">Thème de la Campagne:</span> "Problème avec Ardoise – Corruption partielle des données suite à une mise à jour". Ce thème a été sélectionné stratégiquement pour maximiser l'impact émotionnel et la probabilité d'engagement des étudiants.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              <span className="font-semibold">Justification du Choix:</span> La plateforme Ardoise est utilisée quotidiennement par l'ensemble des étudiants du CCNB pour accéder à leurs cours, consulter leurs notes, soumettre leurs travaux et communiquer avec leurs instructeurs. Cette utilisation quotidienne crée une dépendance naturelle et une confiance envers la plateforme. Un message indiquant une "corruption partielle des données" crée immédiatement un sentiment d'urgence légitime, car les étudiants craignent la perte d'accès à leurs cours et données académiques.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le courriel a été rédigé entièrement en français, utilisant le logo officiel du CCNB et les couleurs institutionnelles (orange et bleu), ainsi que la signature "Direction des technologies de l'Information – Services administratifs – CCNB". Cette attention aux détails augmente considérablement la crédibilité du message. Le lien redirige vers une fausse page de connexion Microsoft très réaliste avec le logo CCNB en arrière-plan, simulant une authentification légitime. Cette page demande aux utilisateurs de saisir leurs identifiants de connexion, reproduisant les techniques modernes de spear-phishing et de typosquatting.
            </p>
          </div>

          {/* Raison de Distinction */}
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-foreground mb-6">Raison pour Laquelle Notre Campagne se Démarque des Autres</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">1. Hyper-Localisation Contextuelle</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Notre simulation se distingue des campagnes génériques de phishing par sa hyper-localisation. Contrairement aux campagnes génériques qui ciblent des marques grand public (Amazon, mise à jour bancaire, etc.), notre approche limite parfaitement une communication interne du CCNB. Nous utilisons le logo officiel, le slogan institutionnel "Ensemble on change les VIES", et les couleurs officielles du collège. Cela rend l'attaque beaucoup plus crédible pour le public cible que des marques grand public, car elle provient d'une source que les étudiants reconnaissent et en laquelle ils ont confiance.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">2. Pertinence Contextuelle et Urgence Réelle</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Notre simulation joue sur une peur réelle des étudiants : la perte d'accès à leurs cours et données académiques. Cette urgence est beaucoup plus impactante qu'un phishing financier ou commercial classique. Les étudiants dépendent de la plateforme Ardoise pour leurs études, et une corruption de données représente une menace directe à leur réussite académique. Cette pertinence contextuelle augmente significativement le taux de clics et d'engagement, ce qui rend la simulation plus efficace d'un point de vue pédagogique.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">3. Niveau de Sophistication Technique Avancé</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Notre campagne utilise plusieurs techniques modernes de phishing pour augmenter son crédibilité. Nous avons utilisé un domaine légèrement modifié qui ressemble à un domaine légitime mais qui est en réalité contrôlé par nous. Le ton du courriel est professionnel et poli ("Nous nous excusons sincèrement..."), ce qui renforce la perception de légitimité. La page de connexion Microsoft que nous avons créée est extrêmement réaliste, reproduisant fidèlement l'interface officielle de Microsoft avec le logo CCNB en arrière-plan. Cette page reproduit les techniques modernes de spear-phishing et de typosquatting, offrant une expérience d'apprentissage complète aux étudiants.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">4. Valeur Pédagogique Supérieure</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Les étudiants qui cliquent sur le lien et qui arrivent à la page de connexion apprendront concrètement à identifier les signes d'une attaque de phishing. Ils apprendront à vérifier l'adresse réelle de l'expéditeur en inspectant les en-têtes du courriel. Ils apprendront à repérer les avertissements de sécurité Outlook qui indiquent que le message provient de l'extérieur de l'organisation. Ils apprendront à éviter de cliquer sur des liens urgents et à accéder directement au site officiel plutôt que via un courriel. Grâce à son réalisme et à sa pertinence locale, cette campagne a un fort potentiel d'engagement et d'apprentissage durable.
                </p>
              </div>
            </div>
          </div>

          {/* Analyse des Secteurs */}
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-foreground mb-6">Analyse des Secteurs les Plus Ciblés et les Plus Vulnérables au Canada</h2>
            
            <p className="text-foreground/80 leading-relaxed mb-4">
              Le phishing demeure l'un des vecteurs d'attaque les plus utilisés au Canada et dans le monde. Selon plusieurs rapports récents, il constitue souvent le point d'entrée initial pour des attaques plus graves (ransomware, vol de données, etc.). Différents secteurs d'activité présentent des niveaux de vulnérabilité variables en fonction de leurs pratiques de sécurité, de leur sensibilisation et de la valeur des données qu'ils possèdent.
            </p>
            
            <p className="text-foreground/80 leading-relaxed mb-4">
              <span className="font-semibold">Secteurs les Plus Ciblés au Canada (2024-2025):</span>
            </p>
            <ul className="list-disc list-inside text-foreground/80 mb-6 space-y-2">
              <li>Éducation (collèges et universités)</li>
              <li>Santé (hôpitaux et cliniques)</li>
              <li>Finance et Assurance</li>
              <li>Gouvernement et Administrations Publiques</li>
              <li>Énergie et Infrastructures Critiques</li>
              <li>Commerce de Détail</li>
            </ul>
            
            <p className="text-foreground/80 leading-relaxed mb-4">
              <span className="font-semibold">Pourquoi le Secteur de l'Éducation est Particulièrement Vulnérable:</span> Le secteur de l'éducation figure parmi les plus touchés au Canada en 2024-2025. Plusieurs incidents ont été rapportés dans des établissements comme l'Université de Winnipeg, le Collège Ahuntsic et d'autres boards scolaires. Les raisons principales de cette vulnérabilité incluent des budgets souvent limités en cybersécurité, un grand nombre d'utilisateurs (étudiants et personnel) avec des niveaux de sensibilisation variables, une confiance élevée dans les communications institutionnelles, l'utilisation massive de plateformes cloud (Microsoft 365, systèmes de gestion de l'apprentissage comme Ardoise), et la présence de données personnelles sensibles (informations académiques, coordonnées, parfois données financières).
            </p>
            
            <p className="text-foreground/80 leading-relaxed mb-4">
              Les statistiques montrent que le taux de clics sur des simulations de phishing dans le secteur de l'éducation peut atteindre 26 % à 31 % sans formation continue, mais chute fortement (jusqu'à moins de 5 %) après une sensibilisation régulière et des simulations répétées. Cela démontre l'efficacité des campagnes éducatives comme celle que nous avons développée.
            </p>
            
            <p className="text-foreground/80 leading-relaxed">
              Au Canada, le Centre canadien pour la cybersécurité (Cyber Centre) souligne que le phishing et les ransomwares touchent fréquemment les organisations éducatives, causant des interruptions de services et des risques de fuite de données. Notre campagne au CCNB s'inscrit donc dans un contexte national très pertinent : elle permet de renforcer la culture de sécurité dans un secteur reconnu comme vulnérable.
            </p>
          </div>

          {/* Conclusion */}
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-foreground mb-6">Conclusion</h2>
            
            <p className="text-foreground/80 leading-relaxed mb-4">
              Cette campagne de simulation de phishing basée sur la plateforme Ardoise s'avère être un excellent outil pédagogique. En reproduisant fidèlement une communication officielle du CCNB, nous avons créé un scénario réaliste et impactant qui permet aux étudiants de vivre concrètement les mécanismes du phishing tout en apprenant à s'en protéger.
            </p>
            
            <p className="text-foreground/80 leading-relaxed mb-4">
              Les points forts de notre projet résident dans sa pertinence locale, son niveau de réalisme et sa forte valeur éducative. Les résultats attendus (taux de clics et de saisie de mots de passe) serviront à mesurer l'efficacité de la sensibilisation et à identifier les axes d'amélioration pour les futures campagnes.
            </p>
            
            <p className="text-foreground/80 leading-relaxed mb-4">
              À long terme, ce type d'exercice contribue à développer une culture de cybersécurité chez les étudiants, qui deviendront les employés et citoyens de demain. Nous recommandons au CCNB de répéter régulièrement des simulations variées, d'encourager l'activation de l'authentification multifacteur (MFA) et de promouvoir l'accès direct aux plateformes officielles plutôt que via des liens dans les courriels.
            </p>
          </div>

          {/* References */}
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-foreground mb-6">Références</h2>
            <ul className="list-disc list-inside text-foreground/80 space-y-2">
              <li>Centre canadien pour la cybersécurité. (2024). National Cyber Threat Assessment 2025-2026. Gouvernement du Canada.</li>
              <li>KnowBe4. (2025). 2025 Phishing By Industry Benchmark Report.</li>
              <li>Canadian Cybersecurity Network. (2025). The State of Cybersecurity in Canada 2025.</li>
              <li>Proofpoint. (2024). State of the Phish Report.</li>
              <li>Verizon. (2025). Data Breach Investigations Report (DBIR) 2025.</li>
              <li>Canadian Centre for Cyber Security. (2026). Ransomware Threat Outlook 2025-2027.</li>
            </ul>
          </div>

          {/* Screenshots Section */}
          <div className="space-y-6 mt-12 pt-8 border-t border-border">
            <h2 className="text-3xl font-bold text-foreground mb-6">Captures d'Écran et Annexes</h2>

            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="text-xl font-semibold text-accent mb-2">Courriel de Phishing Envoyé</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Courriel simulant une communication officielle du CCNB — expéditeur externe détecté par Outlook, logo et couleurs institutionnelles, lien malveillant dissimulé.
              </p>
              <img src="/cyber-portfolio/20.png" alt="Courriel de phishing - Problème avec Ardoise" className="w-full rounded-lg border border-accent/30" />
            </div>

            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="text-xl font-semibold text-accent mb-2">Fausse Page de Connexion Microsoft</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Page de connexion Microsoft réaliste avec logo CCNB en arrière-plan — reproduit les techniques modernes de spear-phishing et de typosquatting.
              </p>
              <img src="/cyber-portfolio/21.png" alt="Fausse page de connexion Microsoft avec logo CCNB" className="w-full rounded-lg border border-accent/30" />
            </div>
          </div>
          
      

      <Footer />
    </div>
  );
}
