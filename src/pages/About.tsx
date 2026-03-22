import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Target, Eye, Users, Lightbulb, Shield, ArrowRight } from "lucide-react";

const values = [
  { icon: Heart, title: "Compassion", desc: "Every family deserves support during back-to-school season." },
  { icon: Target, title: "Accessibility", desc: "Affordable supplies that meet each school's exact requirements." },
  { icon: Users, title: "Community", desc: "We build partnerships with schools, families, and local organizations." },
  { icon: Lightbulb, title: "Innovation", desc: "Smart solutions to eliminate the stress of school supply shopping." },
  { icon: Shield, title: "Trust", desc: "Transparent operations, quality products, and reliable delivery." },
];

export default function About() {
  return (
    <main>
      <section className="bg-hero-gradient relative overflow-hidden">
        <div className="container-tight mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center relative">
          <ScrollReveal>
            <h1 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">About SupplyBox</h1>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
              We're on a mission to ensure every student starts the school year prepared, confident, and ready to learn.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-tight mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Supply Collective Box Association (SupplyBox) exists to remove the barriers families face when preparing for back-to-school season. We believe no parent should have to choose between groceries and school supplies.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  By partnering with schools to collect exact supply requirements and leveraging bulk purchasing, we create affordable, customized school supply boxes delivered right to families' doors.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="space-y-6">
                <div className="bg-muted/50 rounded-2xl p-8 border border-border/30">
                  <Eye className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">Our Vision</h3>
                  <p className="text-muted-foreground">A future where every child in Canada starts the school year with exactly what they need — without financial stress on their families.</p>
                </div>
                <div className="bg-soft-green-light rounded-2xl p-8 border border-accent/20">
                  <Target className="w-8 h-8 text-accent mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">The Problem We Solve</h3>
                  <p className="text-muted-foreground">Back-to-school shopping costs Canadian families an average of $250+ per child. Lists are confusing, stores run out of items, and many families simply can't afford it all.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/40">
        <div className="container-tight mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Values</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="bg-card rounded-2xl p-6 shadow-soft border border-border/30 text-center h-full">
                  <v.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-tight mx-auto max-w-3xl">
          <ScrollReveal>
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold text-foreground">The Founder's Story</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                SupplyBox was born from a simple observation: every August, parents scramble through stores, clutching crumpled school supply lists, spending hours and hundreds of dollars — and still getting it wrong. Meanwhile, other families can't afford supplies at all.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We asked: what if we could work directly with schools, build exact supply boxes for each grade, and deliver them affordably to every family's doorstep? What started in Edmonton is now growing into a movement — one box at a time.
              </p>
              <Button size="lg" asChild>
                <Link to="/partner">Join Our Mission <ArrowRight className="w-4 h-4" /></Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
