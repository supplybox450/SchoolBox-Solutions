import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { User, Package, CreditCard, MapPin, RefreshCw, Plus, ArrowRight } from "lucide-react";

const mockChildren = [
  { name: "Amira", school: "Meadowlark Elementary", grade: "Grade 3" },
  { name: "Dani", school: "Meadowlark Elementary", grade: "Grade 1" },
];

const mockOrders = [
  { id: "SB-2025-0847", child: "Amira", status: "Delivered", date: "Aug 12, 2025", total: "$47.50" },
  { id: "SB-2025-0848", child: "Dani", status: "Processing", date: "Aug 14, 2025", total: "$42.00" },
];

export default function Dashboard() {
  return (
    <main>
      <section className="section-padding-sm bg-muted/40">
        <div className="container-tight mx-auto">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Welcome back, Sarah</h1>
                <p className="text-muted-foreground">Manage your children, orders, and subscriptions.</p>
              </div>
              <Button asChild>
                <a href="/order"><Plus className="w-4 h-4" /> Order a New Box</a>
              </Button>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Children */}
            <div className="lg:col-span-2 space-y-6">
              <ScrollReveal>
                <div className="bg-card rounded-2xl p-6 shadow-soft border border-border/30">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-foreground flex items-center gap-2"><User className="w-5 h-5 text-primary" /> My Children</h2>
                    <Button variant="ghost" size="sm"><Plus className="w-4 h-4" /> Add Child</Button>
                  </div>
                  <div className="space-y-3">
                    {mockChildren.map((child, i) => (
                      <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-muted/50 border border-border/30">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                            {child.name[0]}
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{child.name}</p>
                            <p className="text-sm text-muted-foreground">{child.school} · {child.grade}</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">Edit</Button>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="bg-card rounded-2xl p-6 shadow-soft border border-border/30">
                  <h2 className="text-lg font-semibold text-foreground flex items-center gap-2 mb-4"><Package className="w-5 h-5 text-primary" /> Recent Orders</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border/50">
                          <th className="text-left py-3 text-muted-foreground font-medium">Order</th>
                          <th className="text-left py-3 text-muted-foreground font-medium">Child</th>
                          <th className="text-left py-3 text-muted-foreground font-medium">Status</th>
                          <th className="text-left py-3 text-muted-foreground font-medium">Date</th>
                          <th className="text-right py-3 text-muted-foreground font-medium">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {mockOrders.map((order) => (
                          <tr key={order.id} className="border-b border-border/30">
                            <td className="py-3 font-medium text-foreground">{order.id}</td>
                            <td className="py-3 text-foreground">{order.child}</td>
                            <td className="py-3">
                              <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                                order.status === "Delivered"
                                  ? "bg-accent/10 text-accent"
                                  : "bg-secondary/20 text-secondary-foreground"
                              }`}>
                                {order.status}
                              </span>
                            </td>
                            <td className="py-3 text-muted-foreground">{order.date}</td>
                            <td className="py-3 text-right font-medium text-foreground">{order.total}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <ScrollReveal delay={0.15}>
                <div className="bg-card rounded-2xl p-6 shadow-soft border border-border/30">
                  <h3 className="font-semibold text-foreground flex items-center gap-2 mb-4"><RefreshCw className="w-5 h-5 text-primary" /> Subscription</h3>
                  <div className="bg-accent/10 rounded-xl p-4 mb-4">
                    <p className="text-sm font-medium text-accent">Active — Annual</p>
                    <p className="text-xs text-muted-foreground mt-1">Next box ships July 2026</p>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">Manage Subscription</Button>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="bg-card rounded-2xl p-6 shadow-soft border border-border/30">
                  <h3 className="font-semibold text-foreground flex items-center gap-2 mb-4"><MapPin className="w-5 h-5 text-primary" /> Delivery Address</h3>
                  <p className="text-sm text-foreground">123 Maple Street</p>
                  <p className="text-sm text-muted-foreground">Edmonton, AB T5K 2R3</p>
                  <Button variant="ghost" size="sm" className="mt-3">Update Address</Button>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.25}>
                <div className="bg-card rounded-2xl p-6 shadow-soft border border-border/30">
                  <h3 className="font-semibold text-foreground flex items-center gap-2 mb-4"><CreditCard className="w-5 h-5 text-primary" /> Payment</h3>
                  <p className="text-sm text-foreground">•••• •••• •••• 4242</p>
                  <p className="text-sm text-muted-foreground">Expires 12/27</p>
                  <Button variant="ghost" size="sm" className="mt-3">Update Payment</Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
