import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
const heroImage = "/supplybox-hero-original.webp?v=2ae7458";
import { School, ListChecks, Paintbrush, Truck, Heart, Building2, HandHeart, ArrowRight, Star, Mail, ShieldCheck } from "lucide-react";

const steps = [
  { icon: School, title: "Select School", desc: "Tell us the school and grade you need supplies for" },
  { icon: ListChecks, title: "Confirm List", desc: "We help match the box to the required supply list" },
  { icon: Paintbrush, title: "Customize", desc: "Add helpful notes or personalization requests" },
  { icon: Truck, title: "Coordinate Delivery", desc: "Delivery details are confirmed with you during launch" },
];

const launchNotes = [
  { icon: Mail, title: "Human support first", desc: "Questions, donations, partnerships, and sponsored-box requests are handled by email while online systems are being connected." },
  { icon: ShieldCheck, title: "No fake checkout", desc: "Payment and donation options are coordinated directly so families and supporters are not sent into unfinished flows." },
  { icon: Building2, title: "Edmonton focused", desc: "SupplyBox is preparing service around Edmonton families, schools, donors, and community partners." },
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
                  <Star className="w-3.5 h-3.5" /> Edmonton launch in progress
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.08] tracking-tight">
                  School Supply Boxes Without the Store Run
                </h1>
                <p className="text-lg sm:text-xl text-primary-foreground/70 max-w-xl leading-relaxed">
                  Customized school supply boxes for Edmonton families, with order support handled directly while the full online portal is being connected.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Button variant="hero" size="xl" asChild>
                    <Link to="/order">Start an Order <ArrowRight className="w-5 h-5" /></Link>
                  </Button>
                  <Button variant="hero-outline" size="xl" asChild>
                    <Link to="/contact"><Mail className="w-5 h-5" /> Get Help</Link>
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
                No more guessing, no more running to multiple stores. We help organize the supplies around the school and grade you provide.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: School, title: "Choose School", desc: "Share the school name" },
              { icon: ListChecks, title: "Confirm Grade", desc: "Tell us the grade level" },
              { icon: Paintbrush, title: "Add Notes", desc: "Request helpful options" },
              { icon: "📦", title: "We Prepare It", desc: "Packed and organized" },
              { icon: Truck, title: "Delivery Plan", desc: "Coordinated with you" },
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
              <p className="text-muted-foreground max-w-xl mx-auto text-lg">Four simple steps for launch-season orders.</p>
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

      {/* Launch Status */}
      <section className="section-padding bg-card">
        <div className="container-tight mx-auto">
          <ScrollReveal>
            <div className="text-center space-y-3 mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Launch Status</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">SupplyBox is being prepared carefully, with direct support instead of unfinished automated flows.</p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {launchNotes.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-background rounded-2xl p-8 shadow-soft border border-border/30 h-full">
                  <item.icon className="w-9 h-9 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
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
              Help a Child Start Prepared
            </h2>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg mb-8 leading-relaxed">
              Donation pledges and sponsored-box requests are being coordinated directly during launch so every request can be handled with care.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/donate">Pledge Support <Heart className="w-5 h-5" /></Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/sponsored">Apply for Help</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Partner Status */}
      <section className="section-padding-sm bg-card">
        <div className="container-tight mx-auto">
          <ScrollReveal>
            <p className="text-center text-sm text-muted-foreground uppercase tracking-wider font-medium mb-8">
              Built for Edmonton families, schools, donors, and community partners
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {["Families", "Schools", "Donors", "Community Partners", "Local Supporters"].map((name, i) => (
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
