import { Link } from "react-router-dom";
import { Package, Heart, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground/80">
      <div className="container-wide mx-auto section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center">
                <Package className="w-5 h-5 text-secondary-foreground" />
              </div>
              <span className="text-lg font-bold text-primary-foreground">SupplyBox</span>
            </Link>
            <p className="text-sm leading-relaxed text-primary-foreground/60 max-w-xs">
              Affordable, customized school supply boxes delivered to your door — empowering families and communities.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-primary-foreground uppercase tracking-wider">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Order a Box", path: "/order" },
                { label: "How It Works", path: "/how-it-works" },
                { label: "Sponsored Box", path: "/sponsored" },
                { label: "Donate", path: "/donate" },
                { label: "FAQ", path: "/faq" },
              ].map((l) => (
                <Link key={l.path} to={l.path} className="text-sm text-primary-foreground/60 hover:text-secondary transition-colors">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-primary-foreground uppercase tracking-wider">Get Involved</h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Partner With Us", path: "/partner" },
                { label: "Sponsor a Child", path: "/donate" },
                { label: "School Partnerships", path: "/partner" },
                { label: "About Us", path: "/about" },
                { label: "Contact", path: "/contact" },
              ].map((l, i) => (
                <Link key={i} to={l.path} className="text-sm text-primary-foreground/60 hover:text-secondary transition-colors">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-primary-foreground uppercase tracking-wider">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/60">
              <span className="flex items-center gap-2"><Mail className="w-4 h-4" /> hello@supplybox.org</span>
              <span className="flex items-center gap-2"><Phone className="w-4 h-4" /> (780) 555-0123</span>
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Edmonton, AB, Canada</span>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Supply Collective Box Association. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-xs text-primary-foreground/40">
            <Heart className="w-3 h-3 text-destructive" /> Made with love for families
          </div>
        </div>
      </div>
    </footer>
  );
}
