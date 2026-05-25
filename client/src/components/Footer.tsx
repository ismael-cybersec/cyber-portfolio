import { Shield } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-border py-12">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-6 h-6 text-accent" />
              <span className="font-bold text-primary">CyberSec Portfolio</span>
            </div>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Portfolio professionnel d'Ismael Baby - Étudiant en Cybersécurité spécialisé en infrastructure et sécurité réseau.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-primary mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>Email: babyismael03@gmail.com</li>
              <li>Téléphone: (506) 962-1855</li>
              <li>Localisation: Moncton, NB</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider mb-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60 gap-4">
          <p>&copy; {currentYear} Ismael Baby - Étudiant en Cybersécurité. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
