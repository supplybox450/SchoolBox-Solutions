import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <main>
      <section className="bg-hero-gradient relative overflow-hidden">
        <div className="container-tight mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center relative">
          <ScrollReveal>
            <h1 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">Contact Us</h1>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
              Have a question? We'd love to hear from you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-tight mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <ScrollReveal>
                <h2 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input placeholder="Your Name" className="h-12 px-4 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                    <input placeholder="Email" type="email" className="h-12 px-4 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                  </div>
                  <select className="w-full h-12 px-4 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                    <option value="">I'm a...</option>
                    <option>Parent with a question</option>
                    <option>School interested in partnering</option>
                    <option>Organization or business</option>
                    <option>Donor or sponsor</option>
                    <option>Other</option>
                  </select>
                  <textarea placeholder="Your message" rows={5} className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
                  <Button size="lg"><Send className="w-4 h-4" /> Send Message</Button>
                </form>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-2">
              <ScrollReveal delay={0.1}>
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h2>
                  {[
                    { icon: Mail, label: "Email", value: "hello@supplybox.org" },
                    { icon: Phone, label: "Phone", value: "(780) 555-0123" },
                    { icon: MapPin, label: "Location", value: "Edmonton, AB, Canada" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 border border-border/30">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="font-medium text-foreground">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
