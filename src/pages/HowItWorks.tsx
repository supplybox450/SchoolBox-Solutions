import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { School, ListChecks, Paintbrush, Truck, CreditCard, Package, RefreshCw, ArrowRight, CheckCircle2 } from "lucide-react";

const steps = [
  { icon: School, title: "Search Your School", desc: "Browse Edmonton schools by name, system (public/catholic), or type (elementary/junior high/high school).", color: "bg-primary/10 text-primary" },
  { icon: ListChecks, title: "Select Grade & Class", desc: "Choose your child's grade from K–12. Optionally add teacher name or class-specific notes.", color: "bg-secondary/20 text-secondary-foreground" },
  { icon: Package, title: "Review Supply List", desc: "See the exact required and optional items for that school and grade — automatically loaded.", color: "bg-accent/10 text-accent" },
  { icon: Paintbrush, title: "Customize Your Box", desc: "Add your child's name to pencils and notebooks. Choose upgrades and add-ons.", color: "bg-primary/10 text-primary" },
  { icon: Truck, title: "Choose Delivery", desc: "Enter your address and select a delivery window. We ship right to your door.", color: "bg-secondary/20 text-secondary-foreground" },
  { icon: CreditCard, title: "Secure Checkout", desc: "Pay once or subscribe annually for automatic back-to-school boxes each year.", color: "bg-accent/10 text-accent" },
];

const benefits = [
  "School-specific, grade-accurate supply lists",
  "Bulk pricing means lower costs for families",
  "Personalization options for your child",
  "Home delivery — no more store runs",
  "Annual subscription option",
  "Sponsored boxes for families in need",
];

export default function HowItWorks() {
  return (
    <main>
      <section className="bg-hero-gradient relative overflow-hidden">
        <div className="container-tight mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center relative">
          <ScrollReveal>
            <h1 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">How It Works</h1>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
              From school selection to doorstep delivery in six simple steps.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-tight mx-auto max-w-4xl">
          <div className="space-y-8">
            {steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.08} direction={i % 2 === 0 ? "left" : "right"}>
                <div className="flex gap-6 items-start">
                  <div className={`w-14 h-14 rounded-2xl ${step.color} flex items-center justify-center shrink-0`}>
                    <step.icon className="w-7 h-7" />
                  </div>
                  <div className="flex-1 pb-8 border-b border-border/30 last:border-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Step {i + 1}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/40">
        <div className="container-tight mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-foreground mb-6">Why Families Choose SupplyBox</h2>
              <div className="space-y-4">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground">{b}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="bg-card rounded-2xl p-8 shadow-card border border-border/30 text-center">
                <RefreshCw className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Annual Subscription</h3>
                <p className="text-muted-foreground mb-6">Subscribe once and get a fresh, updated supply box delivered every year before school starts. Never miss a list change.</p>
                <Button size="lg" asChild>
                  <Link to="/order">Get Started <ArrowRight className="w-4 h-4" /></Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
