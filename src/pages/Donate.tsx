import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, HandHeart, ArrowRight, CheckCircle2 } from "lucide-react";

const tiers = [
  { amount: 25, label: "Supply Starter", impact: "Covers basic essentials for one student" },
  { amount: 50, label: "Full Box", impact: "Provides a complete supply box for one child" },
  { amount: 100, label: "Family Pack", impact: "Supports two children with complete boxes" },
];

export default function Donate() {
  return (
    <main>
      <section className="bg-hero-gradient relative overflow-hidden">
        <div className="container-tight mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center relative">
          <ScrollReveal>
            <Heart className="w-12 h-12 text-secondary mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">Make a Difference</h1>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
              Your donation gives a child the supplies they need to start the school year with confidence.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-tight mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-foreground text-center mb-4">Choose Your Impact</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">Every dollar goes directly toward school supplies for families who need it most.</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {tiers.map((tier, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className={`rounded-2xl p-8 border text-center h-full flex flex-col ${i === 1 ? "border-primary shadow-card bg-primary/[0.02]" : "border-border/30 shadow-soft"}`}>
                  {i === 1 && <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Most Popular</span>}
                  <span className="text-4xl font-bold text-foreground">${tier.amount}</span>
                  <span className="text-sm font-semibold text-foreground mt-2">{tier.label}</span>
                  <p className="text-sm text-muted-foreground mt-3 flex-1">{tier.impact}</p>
                  <Button className="mt-6 w-full" variant={i === 1 ? "default" : "outline"}>
                    Donate ${tier.amount}
                  </Button>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="bg-muted/50 rounded-2xl p-8 border border-border/30 text-center">
              <h3 className="text-xl font-semibold text-foreground mb-4">Custom Amount</h3>
              <div className="flex items-center justify-center gap-3 max-w-xs mx-auto mb-4">
                <span className="text-2xl font-bold text-foreground">$</span>
                <input
                  type="number"
                  placeholder="Enter amount"
                  className="w-full h-12 px-4 rounded-xl border border-border bg-card text-foreground text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <Button size="lg">Donate Now</Button>
              <div className="flex items-center justify-center gap-2 mt-4">
                <input type="checkbox" id="monthly" className="rounded" />
                <label htmlFor="monthly" className="text-sm text-muted-foreground">Make this a monthly recurring donation</label>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-muted/40">
        <div className="container-tight mx-auto max-w-3xl">
          <ScrollReveal>
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              {[
                { icon: HandHeart, label: "Sponsor a Child", desc: "Fund one child's complete supply box" },
                { icon: Heart, label: "Sponsor a Family", desc: "Cover supplies for an entire family" },
                { icon: CheckCircle2, label: "Sponsor a School", desc: "Support an entire school's program" },
              ].map((item, i) => (
                <div key={i} className="bg-card rounded-2xl p-6 shadow-soft border border-border/30">
                  <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-1">{item.label}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
