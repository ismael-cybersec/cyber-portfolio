import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useState } from "react";

export default function ProjectVortexCore() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { id: 0, src: "/manus-storage/projects/vortexcore-002.png", caption: "Architecture du cluster Proxmox VE" },
    { id: 1, src: "/manus-storage/projects/vortexcore-003.png", caption: "Configuration des nœuds" },
    { id: 2, src: "/manus-storage/projects/vortexcore-004.png", caption: "Stockage NFS partagé" },
    { id: 3, src: "/manus-storage/projects/vortexcore-005.png", caption: "Configuration RAID" },
    { id: 4, src: "/manus-storage/projects/vortexcore-006.png", caption: "Haute disponibilité" },
    { id: 5, src: "/manus-storage/projects/vortexcore-007.png", caption: "Sauvegardes automatiques" },
    { id: 6, src: "/manus-storage/projects/vortexcore-008.png", caption: "Monitoring du cluster" },
    { id: 7, src: "/manus-storage/projects/vortexcore-009.png", caption: "Gestion des ressources" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border">
        <div className="container">
          <div className="flex items-center gap-4 mb-6">
            <a href="/" className="text-accent hover:text-accent/80 transition-colors flex items-center gap-2">
              <ArrowLeft className="w-5 h-5" /> Retour
            </a>
          </div>
          <h1 className="text-5xl font-bold text-primary mb-4">VortexCore</h1>
          <p className="text-2xl text-accent mb-6">Cluster Proxmox VE - Projet d'Intégration</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-accent/20 text-accent border-accent/30">Proxmox VE</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Clustering</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">NFS</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">RAID</Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30">Haute Disponibilité</Badge>
          </div>
          <p className="text-foreground/80 max-w-3xl">
            Projet d'intégration en cybersécurité (VortexOps Inc.) - Janvier à Avril 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-primary mb-6">Description du Projet</h2>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                VortexCore est un cluster Proxmox VE 3 nœuds conçu pour fournir une infrastructure de virtualisation hautement disponible et performante. Le projet a été réalisé dans le contexte d'une compétition de cybersécurité (CYBER-CCNB 2026) et a remporté la 2e place avec un trophée d'argent.
              </p>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                Le cluster intègre un stockage NFS partagé (UNAS Pro 8) avec configuration RAID 10 et RAID 5 pour assurer la redondance des données. L'infrastructure supporte plusieurs équipes virtuelles (SOC, IAM, CyberRange) avec des sauvegardes automatiques et une haute disponibilité.
              </p>

              <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Caractéristiques Principales</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3">
                  <span className="text-accent">✓</span>
                  <span className="text-foreground/80"><strong>3 nœuds physiques</strong> - Architecture distribuée pour haute disponibilité</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">✓</span>
                  <span className="text-foreground/80"><strong>Stockage NFS partagé</strong> - UNAS Pro 8 avec 8 baies de disques</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">✓</span>
                  <span className="text-foreground/80"><strong>Configuration RAID</strong> - RAID 10 et RAID 5 pour redondance</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">✓</span>
                  <span className="text-foreground/80"><strong>Sauvegardes automatiques</strong> - Pour plusieurs équipes et environnements</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">✓</span>
                  <span className="text-foreground/80"><strong>Clustering Proxmox</strong> - Corosync et Pacemaker pour orchestration</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Défis Résolus</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-accent">⚙</span>
                  <span className="text-foreground/80"><strong>Défaillance matérielle</strong> - Gestion des pannes de nœuds</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">⚙</span>
                  <span className="text-foreground/80"><strong>Blocage NFS par WatchGuard</strong> - Configuration du pare-feu</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">⚙</span>
                  <span className="text-foreground/80"><strong>Erreurs Corosync</strong> - Synchronisation des nœuds</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">⚙</span>
                  <span className="text-foreground/80"><strong>Erreurs APT</strong> - Gestion des dépendances système</span>
                </li>
              </ul>
            </div>

            <div>
              <Card className="card-elegant p-6 bg-card/50 sticky top-24">
                <h3 className="text-xl font-bold text-primary mb-4">Informations</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-foreground/60 text-sm mb-1">Dates</p>
                    <p className="text-foreground/80 font-semibold">Janvier - Avril 2026</p>
                  </div>
                  <div>
                    <p className="text-foreground/60 text-sm mb-1">Compétition</p>
                    <p className="text-foreground/80 font-semibold">CYBER-CCNB 2026</p>
                  </div>
                  <div>
                    <p className="text-foreground/60 text-sm mb-1">Résultat</p>
                    <p className="text-accent font-semibold">🥈 2e Place - Trophée d'argent</p>
                  </div>
                  <div>
                    <p className="text-foreground/60 text-sm mb-1">Équipe</p>
                    <p className="text-foreground/80 font-semibold">VortexOps Inc.</p>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-foreground/60 text-sm mb-3">Technologies</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">Proxmox VE</Badge>
                      <Badge variant="secondary" className="text-xs">NFS</Badge>
                      <Badge variant="secondary" className="text-xs">RAID</Badge>
                      <Badge variant="secondary" className="text-xs">Linux</Badge>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Gallery */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-primary mb-8">Captures d'Écran</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((img) => (
                <div
                  key={img.id}
                  onClick={() => setSelectedImage(img.id)}
                  className="cursor-pointer group"
                >
                  <Card className="card-elegant overflow-hidden">
                    <div className="relative h-48 bg-secondary overflow-hidden">
                      <img
                        src={img.src}
                        alt={img.caption}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                        <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity">Agrandir</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-foreground/70">{img.caption}</p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Modal */}
          {selectedImage !== null && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setSelectedImage(null)}>
              <div className="max-w-4xl w-full">
                <img
                  src={images[selectedImage].src}
                  alt={images[selectedImage].caption}
                  className="w-full rounded-lg shadow-2xl"
                />
                <p className="text-white text-center mt-4">{images[selectedImage].caption}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
