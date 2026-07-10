import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Lock, Package, Mail, ArrowRight } from "lucide-react";

export default function Dashboard() {
  return (
    <main>
      <section className="section-padding-sm bg-muted/40">
        <div className="container-tight mx-auto">
          <ScrollReveal>
            <div className="bg-card rounded-2xl p-8 sm:p-10 shadow-soft border border-border/30 text-center max-w-2xl mx-auto">
              <Lock className="w-12 h-12 text-primary mx-auto mb-5" />
              <h1 className="text-3xl font-bold text-foreground mb-3">Account portal coming soon</h1>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Online accounts are not open yet. For now, our team will help you with order updates,
                sponsored box applications, school partnerships, and delivery questions by email.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <Button asChild>
                  <Link to="/order"><Package className="w-4 h-4" /> Start an Order</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/contact"><Mail className="w-4 h-4" /> Contact Support <ArrowRight className="w-4 h-4" /></Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
