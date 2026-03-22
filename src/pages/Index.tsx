import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
const heroImage = "/placeholder.svg";
import { School, ListChecks, Paintbrush, Truck, Heart, Users, Building2, HandHeart, Quote, ArrowRight, Star } from "lucide-react";

const steps = [
  { icon: School, title: "Select School", desc: "Search for your child's school in Edmonton" },
  { icon: ListChecks, title: "Choose Grade", desc: "Pick the grade to load the exact supply list" },
  { icon: Paintbrush, title: "Customize Box", desc: "Personalize items and add upgrades" },
  { icon: Truck, title: "Get It Delivered", desc: "We pack and ship it right to your door" },
];

const testimonials = [
  { name: "Amara T.", role: "Parent of 2", text: "SupplyBox saved me hours of running around stores. Everything my kids needed was in one box, perfectly organized.", rating: 5 },
  { name: "Principal R. Chen", role: "Eastwood Elementary", text: "Partnering with SupplyBox has been incredible. Families arrive on the first day with everything they need.", rating: 5 },
  { name: "Khadija M.", role: "Community Partner", text: "We sponsored 40 boxes last year. The impact on families who needed help was immediate and meaningful.", rating: 5 },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.08)_0%,_transparent_60%)]" />
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal>
              <div className="space-y-6">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground/80 text-sm font-medium">
                  <Star className="w-3.5 h-3.5" /> Now serving Edmonton families
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.08] tracking-tight">
                  Empowering Futures, One Box at a Time
                </h1>
                <p className="text-lg sm:text-xl text-primary-foreground/70 max-w-xl leading-relaxed">
                  Affordable, customized school supply boxes delivered to your door — based on your child's actual school requirements.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Button variant="hero" size="xl" asChild>
                    <Link to="/order">Order a Box <ArrowRight className="w-5 h-5" /></Link>
                  </Button>
                  <Button variant="hero-outline" size="xl" asChild>
                    <Link to="/donate"><Heart className="w-5 h-5" /> Donate Now</Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="flex justify-center lg:justify-end">
                <img
                  src={heroImage}
                  alt="Colorful school supply box filled with pencils, crayons, notebooks, and backpack"
                  className="w-full max-w-md lg:max-w-lg drop-shadow-2xl"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="section-padding bg-card">
        <div className="container-tight mx-auto">
          <ScrollReveal>
            <div className="text-center space-y-3 mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Everything Your Child Needs, Simplified</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                No more guessing, no more running to multiple stores. We handle it all.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: School, title: "Choose School", desc: "Find your child's school" },
              { icon: ListChecks, title: "Get the List", desc: "We load the exact supply list" },
              { icon: Paintbrush, title: "Customize", desc: "Add personalization" },
              { icon: "📦", title: "We Pack It", desc: "Quality-checked & organized" },
              { icon: Truck, title: "Delivered", desc: "Right to your doorstep" },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="relative text-center p-6 rounded-2xl bg-background border border-border/50 shadow-soft hover:shadow-card transition-shadow duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/12 transition-colors">
                    {typeof item.icon === "string" ? (
                      <span className="text-2xl">{item.icon}</span>
                    ) : (
                      <item.icon className="w-6 h-6 text-primary" />
                    )}
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                  {i < 4 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                      <ArrowRight className="w-5 h-5 text-border" />
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-muted/40">
        <div className="container-tight mx-auto">
          <ScrollReveal>
            <div className="text-center space-y-3 mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">How It Works</h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-lg">Four simple steps to a stress-free back-to-school season.</p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="relative">
                  <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 text-center h-full border border-border/30">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mx-auto mb-5 text-secondary-foreground font-bold text-sm">
                      {i + 1}
                    </div>
                    <step.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground text-lg mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.3}>
            <div className="text-center mt-10">
              <Button size="lg" asChild>
                <Link to="/how-it-works">Learn More <ArrowRight className="w-4 h-4" /></Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Impact */}
      <section className="section-padding bg-card">
        <div className="container-tight mx-auto">
          <ScrollReveal>
            <div className="text-center space-y-3 mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Impact</h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-lg">Together, we're making back-to-school easier for everyone.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedCounter end={2847} suffix="+" label="Boxes Delivered" />
            <AnimatedCounter end={3200} suffix="+" label="Students Supported" />
            <AnimatedCounter end={85} label="Schools Served" />
            <AnimatedCounter end={412} label="Sponsored Families" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-muted/40">
        <div className="container-tight mx-auto">
          <ScrollReveal>
            <div className="text-center space-y-3 mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">What Our Community Says</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/30 h-full flex flex-col">
                  <Quote className="w-8 h-8 text-secondary mb-4" />
                  <p className="text-foreground leading-relaxed flex-1">"{t.text}"</p>
                  <div className="mt-6 pt-4 border-t border-border/50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship CTA */}
      <section className="section-padding bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,255,255,0.06)_0%,_transparent_60%)]" />
        <div className="container-tight mx-auto text-center relative">
          <ScrollReveal>
            <HandHeart className="w-12 h-12 text-secondary mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
              Sponsor a Child's Success
            </h2>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg mb-8 leading-relaxed">
              Every child deserves to start the school year with the supplies they need. Your donation provides a complete, customized school supply box to a family in need.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/donate">Donate a Box <Heart className="w-5 h-5" /></Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/sponsored">Apply for Help</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="section-padding-sm bg-card">
        <div className="container-tight mx-auto">
          <ScrollReveal>
            <p className="text-center text-sm text-muted-foreground uppercase tracking-wider font-medium mb-8">
              Trusted By Schools & Community Partners
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-40">
              {["Edmonton Public Schools", "Edmonton Catholic Schools", "United Way", "Community Foundation", "Local Businesses"].map((name, i) => (
                <div key={i} className="flex items-center gap-2 px-6 py-3 rounded-xl border border-border/50">
                  <Building2 className="w-5 h-5" />
                  <span className="text-sm font-medium">{name}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
