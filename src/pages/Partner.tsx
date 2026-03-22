import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Building2, School, Heart, Users, Megaphone, ArrowRight } from "lucide-react";

const opportunities = [
  { icon: School, title: "School Partnerships", desc: "Share your school's supply lists with us and help families access affordable, accurate supply boxes." },
  { icon: Building2, title: "Corporate Sponsorship", desc: "Sponsor boxes for families in need and showcase your brand's commitment to education." },
  { icon: Heart, title: "Nonprofit Collaboration", desc: "Co-deliver programs that support low-income families during back-to-school season." },
  { icon: Users, title: "Community Organizations", desc: "Help us reach more families through your networks and programs." },
  { icon: Megaphone, title: "Co-Branded Campaigns", desc: "Run awareness campaigns together to amplify impact in your community." },
];

export default function Partner() {
  return (
    <main>
      <section className="bg-hero-gradient relative overflow-hidden">
        <div className="container-tight mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center relative">
          <ScrollReveal>
            <h1 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">Partner With Us</h1>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
              Together, we can ensure every child starts the school year ready to succeed.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-tight mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Partnership Opportunities</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {opportunities.map((opp, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="bg-background rounded-2xl p-8 shadow-soft border border-border/30 h-full">
                  <opp.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{opp.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{opp.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/40">
        <div className="container-tight mx-auto max-w-2xl">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">Get In Touch</h2>
            <form className="space-y-4 bg-card rounded-2xl p-8 shadow-soft border border-border/30">
              <div className="grid sm:grid-cols-2 gap-4">
                <input placeholder="Organization Name" className="h-12 px-4 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                <input placeholder="Contact Name" className="h-12 px-4 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <input placeholder="Email" type="email" className="w-full h-12 px-4 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              <select className="w-full h-12 px-4 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                <option value="">Partnership Type</option>
                <option>School Partnership</option>
                <option>Corporate Sponsorship</option>
                <option>Nonprofit Collaboration</option>
                <option>Community Organization</option>
                <option>Other</option>
              </select>
              <textarea placeholder="Tell us about your organization and how you'd like to partner" rows={4} className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
              <Button size="lg" className="w-full">Submit Partnership Inquiry <ArrowRight className="w-4 h-4" /></Button>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
