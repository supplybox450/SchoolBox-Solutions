import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Users, ArrowRight } from "lucide-react";

export default function Sponsored() {
  return (
    <main>
      <section className="bg-hero-gradient relative overflow-hidden">
        <div className="container-tight mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center relative">
          <ScrollReveal>
            <Shield className="w-12 h-12 text-secondary mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">Sponsored Boxes</h1>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
              Every child deserves to start the school year prepared. If you need help, we're here for you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-tight mx-auto max-w-3xl">
          <ScrollReveal>
            <div className="text-center space-y-6 mb-12">
              <h2 className="text-3xl font-bold text-foreground">We Believe in Community</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                SupplyBox works with generous donors and community partners to provide sponsored school supply boxes to families who need a little extra help. There's no judgment — just support.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid sm:grid-cols-3 gap-6 mb-12">
              {[
                { icon: Heart, title: "Confidential", desc: "Your application is private and handled with care." },
                { icon: Users, title: "Community-Funded", desc: "Boxes are sponsored by generous donors and partners." },
                { icon: Shield, title: "Dignified", desc: "Every family is treated with respect and warmth." },
              ].map((item, i) => (
                <div key={i} className="text-center p-6 rounded-2xl bg-muted/50 border border-border/30">
                  <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border/30">
              <h3 className="text-2xl font-bold text-foreground mb-2 text-center">Apply for a Sponsored Box</h3>
              <p className="text-muted-foreground text-center mb-8">Fill out this simple form and we'll connect you with available support.</p>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input placeholder="Parent/Guardian Name" className="h-12 px-4 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                  <input placeholder="Email" type="email" className="h-12 px-4 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <input placeholder="Phone (optional)" className="w-full h-12 px-4 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                <input placeholder="Child's School" className="w-full h-12 px-4 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                <div className="grid sm:grid-cols-2 gap-4">
                  <select className="h-12 px-4 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                    <option value="">Grade</option>
                    {["Kindergarten", ...Array.from({ length: 12 }, (_, i) => `Grade ${i + 1}`)].map((g) => (
                      <option key={g}>{g}</option>
                    ))}
                  </select>
                  <input placeholder="Number of Children" type="number" min="1" className="h-12 px-4 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <textarea placeholder="Tell us a bit about your situation (optional)" rows={3} className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
                <p className="text-xs text-muted-foreground">Eligibility is based on availability and community partner guidelines. All applications are confidential.</p>
                <Button size="lg" className="w-full">Apply for a Sponsored Box <ArrowRight className="w-4 h-4" /></Button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
