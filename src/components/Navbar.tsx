import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart, Package } from "lucide-react";

const navLinks = [
  { label: "About", path: "/about" },
  { label: "How It Works", path: "/how-it-works" },
  { label: "Order a Box", path: "/order" },
  { label: "Donate", path: "/donate" },
  { label: "Partner", path: "/partner" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border/50">
      <div className="container-wide mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-hero-gradient flex items-center justify-center shadow-soft group-hover:shadow-card transition-shadow duration-200">
            <Package className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold text-foreground">
            Supply<span className="text-gradient">Box</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-150 ${
                location.pathname === link.path
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/dashboard">My Account</Link>
          </Button>
          <Button size="sm" asChild>
            <Link to="/order">
              <Package className="w-4 h-4" />
              Order a Box
            </Link>
          </Button>
        </div>

        <button
          className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/50 bg-card">
          <nav className="flex flex-col p-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:bg-muted/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <hr className="my-2 border-border/50" />
            <Link
              to="/dashboard"
              onClick={() => setOpen(false)}
              className="px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted/50"
            >
              My Account
            </Link>
            <div className="flex gap-2 pt-2">
              <Button size="sm" className="flex-1" asChild>
                <Link to="/order" onClick={() => setOpen(false)}>Order a Box</Link>
              </Button>
              <Button variant="accent" size="sm" className="flex-1" asChild>
                <Link to="/donate" onClick={() => setOpen(false)}>
                  <Heart className="w-4 h-4" />
                  Donate
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
