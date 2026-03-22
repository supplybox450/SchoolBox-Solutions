import ScrollReveal from "@/components/ScrollReveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HelpCircle, ArrowRight } from "lucide-react";

const faqs = [
  { q: "How do I find my child's school?", a: "On our Order a Box page, simply search by school name or browse by school system (public or catholic) and type (elementary, junior high, or high school). We have all Edmonton schools in our database." },
  { q: "What if my school's supply list changes?", a: "We work directly with schools to keep lists updated. If a list changes after you order, we'll reach out to make adjustments before your box ships." },
  { q: "Can I order for more than one child?", a: "Absolutely! You can add multiple children with different schools and grades to a single order. Each child gets their own customized box." },
  { q: "Can I personalize the supplies?", a: "Yes! You can add your child's name to pencils, notebooks, and select items. Personalization is available as an add-on during checkout." },
  { q: "How does the annual subscription work?", a: "Subscribe once and we automatically prepare a new, updated supply box each year before school starts. You'll get a reminder to confirm your child's grade and any changes. Cancel anytime." },
  { q: "Do you deliver to my home?", a: "Yes! We deliver directly to your door within Edmonton. Delivery dates are scheduled well before the school year begins so you're always ready." },
  { q: "Can I apply for a sponsored box?", a: "Yes. If you need financial help, visit our Sponsored Box page. The process is simple, respectful, and confidential. We work with community partners to ensure every child gets what they need." },
  { q: "Can schools partner with SupplyBox?", a: "Definitely! We welcome school partnerships. Schools can share their supply lists with us and promote SupplyBox to their families. Visit our Partner page to learn more." },
  { q: "What payment methods do you accept?", a: "We accept all major credit and debit cards through our secure checkout. Payment processing is handled by Stripe for maximum security." },
  { q: "What is your return policy?", a: "If there's an issue with your order, contact us within 14 days of delivery. We'll work with you to make it right — whether that's a replacement, exchange, or refund." },
];

export default function FAQ() {
  return (
    <main>
      <section className="bg-hero-gradient relative overflow-hidden">
        <div className="container-tight mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center relative">
          <ScrollReveal>
            <HelpCircle className="w-12 h-12 text-secondary mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">Frequently Asked Questions</h1>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
              Everything you need to know about SupplyBox.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-tight mx-auto max-w-3xl">
          <ScrollReveal>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-background rounded-xl border border-border/30 px-6 shadow-soft">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="text-center mt-12 p-8 bg-muted/50 rounded-2xl border border-border/30">
              <h3 className="text-xl font-semibold text-foreground mb-2">Still have questions?</h3>
              <p className="text-muted-foreground mb-4">We're here to help. Reach out anytime.</p>
              <Button asChild>
                <Link to="/contact">Contact Us <ArrowRight className="w-4 h-4" /></Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
