import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { MapPin, School, GraduationCap, ListChecks, Package, Paintbrush, Truck, CreditCard, ArrowRight, ArrowLeft, Check, Search, ChevronRight, Plus, Minus, Pencil, BookOpen, Star } from "lucide-react";

const STEPS = [
  { icon: MapPin, label: "Location" },
  { icon: School, label: "School" },
  { icon: GraduationCap, label: "Grade" },
  { icon: ListChecks, label: "Supply List" },
  { icon: Package, label: "Your Box" },
  { icon: Paintbrush, label: "Customize" },
  { icon: Truck, label: "Delivery" },
  { icon: CreditCard, label: "Payment" },
];

const schools = [
  { name: "Meadowlark Elementary", system: "Public", type: "Elementary", grades: "K-6" },
  { name: "Westmount School", system: "Public", type: "Elementary", grades: "K-6" },
  { name: "St. Edmund Catholic School", system: "Catholic", type: "Elementary", grades: "K-6" },
  { name: "Coronation School", system: "Public", type: "Elementary", grades: "K-6" },
  { name: "McKernan School", system: "Public", type: "Elementary/Jr High", grades: "K-9" },
  { name: "Holy Cross Catholic School", system: "Catholic", type: "Elementary", grades: "K-6" },
  { name: "Parkview School", system: "Public", type: "Elementary", grades: "K-6" },
  { name: "Archbishop MacDonald High School", system: "Catholic", type: "High School", grades: "10-12" },
  { name: "Ross Sheppard High School", system: "Public", type: "High School", grades: "10-12" },
  { name: "Vernon Barford Junior High", system: "Public", type: "Junior High", grades: "7-9" },
];

const grades = ["Kindergarten", ...Array.from({ length: 12 }, (_, i) => `Grade ${i + 1}`)];

const supplyListItems = [
  { name: "HB Pencils (#2)", qty: 12, category: "Writing", required: true, price: 3.50, personalizable: true },
  { name: "Erasers (white)", qty: 3, category: "Writing", required: true, price: 2.00, personalizable: false },
  { name: "Pencil Crayons (24 pack)", qty: 1, category: "Art", required: true, price: 6.50, personalizable: false },
  { name: "Markers (washable, 10 pack)", qty: 1, category: "Art", required: true, price: 5.00, personalizable: false },
  { name: "Glue Sticks (large)", qty: 4, category: "Supplies", required: true, price: 4.00, personalizable: false },
  { name: "Scissors (blunt tip)", qty: 1, category: "Supplies", required: true, price: 3.00, personalizable: false },
  { name: "Ruled Notebooks", qty: 4, category: "Paper", required: true, price: 8.00, personalizable: true },
  { name: "Duo-Tang Folders (assorted)", qty: 6, category: "Organization", required: true, price: 6.00, personalizable: false },
  { name: "Ruler (30cm)", qty: 1, category: "Math", required: true, price: 1.50, personalizable: false },
  { name: "Pencil Case", qty: 1, category: "Organization", required: false, price: 4.50, personalizable: true },
  { name: "Highlighters (4 pack)", qty: 1, category: "Writing", required: false, price: 3.50, personalizable: false },
  { name: "Hand Sanitizer", qty: 1, category: "Hygiene", required: false, price: 2.50, personalizable: false },
];

export default function Order() {
  const [step, setStep] = useState(0);
  const [city] = useState("Edmonton");
  const [selectedSchool, setSelectedSchool] = useState<typeof schools[0] | null>(null);
  const [selectedGrade, setSelectedGrade] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [systemFilter, setSystemFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [includedItems, setIncludedItems] = useState<Record<number, number>>({});
  const [personalizations, setPersonalizations] = useState<Record<number, boolean>>({});
  const [childName, setChildName] = useState("");
  const [address, setAddress] = useState({ line1: "", line2: "", postal: "" });
  const [paymentType, setPaymentType] = useState<"one-time" | "annual">("one-time");
  const [donationAdd, setDonationAdd] = useState(0);

  // Initialize items when reaching supply list step
  const initItems = () => {
    if (Object.keys(includedItems).length === 0) {
      const init: Record<number, number> = {};
      supplyListItems.forEach((item, i) => { if (item.required) init[i] = item.qty; });
      setIncludedItems(init);
    }
  };

  const filteredSchools = schools.filter((s) => {
    const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSystem = !systemFilter || s.system === systemFilter;
    const matchesType = !typeFilter || s.type.includes(typeFilter);
    return matchesSearch && matchesSystem && matchesType;
  });

  const subtotal = Object.entries(includedItems).reduce((sum, [idx, qty]) => {
    return sum + supplyListItems[Number(idx)].price * (qty / supplyListItems[Number(idx)].qty);
  }, 0);

  const personalizationFee = Object.values(personalizations).filter(Boolean).length * 3.50;
  const deliveryFee = 5.99;
  const total = subtotal + personalizationFee + deliveryFee + donationAdd;

  const canProceed = () => {
    switch (step) {
      case 0: return true;
      case 1: return !!selectedSchool;
      case 2: return !!selectedGrade;
      case 3: return Object.keys(includedItems).length > 0;
      case 4: return true;
      case 5: return true;
      case 6: return address.line1 && address.postal;
      default: return true;
    }
  };

  const handleNext = () => {
    if (step === 2) initItems();
    if (step < STEPS.length - 1) setStep(step + 1);
  };

  return (
    <main>
      {/* Header */}
      <section className="bg-hero-gradient relative overflow-hidden">
        <div className="container-tight mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center relative">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-2">Order a Box</h1>
          <p className="text-primary-foreground/70">Build your child's perfect school supply box</p>
        </div>
      </section>

      {/* Stepper */}
      <div className="bg-card border-b border-border/50 sticky top-16 z-40">
        <div className="container-tight mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-1 overflow-x-auto pb-1">
            {STEPS.map((s, i) => (
              <button
                key={i}
                onClick={() => i < step && setStep(i)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all shrink-0 ${
                  i === step
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : i < step
                    ? "bg-accent/10 text-accent cursor-pointer hover:bg-accent/20"
                    : "text-muted-foreground"
                }`}
              >
                {i < step ? <Check className="w-3.5 h-3.5" /> : <s.icon className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">{s.label}</span>
                <span className="sm:hidden">{i + 1}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="section-padding bg-muted/30">
        <div className="container-tight mx-auto max-w-3xl">
          {/* Step 0: Location */}
          {step === 0 && (
            <ScrollReveal>
              <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/30 text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-foreground mb-2">Select Your City</h2>
                <p className="text-muted-foreground mb-6">We're currently serving families in Edmonton. More cities coming soon!</p>
                <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-primary/5 border border-primary/20">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-lg font-semibold text-foreground">{city}, Alberta</span>
                  <Check className="w-5 h-5 text-accent" />
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* Step 1: School */}
          {step === 1 && (
            <ScrollReveal>
              <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/30">
                <h2 className="text-2xl font-bold text-foreground mb-6">Find Your School</h2>
                <div className="relative mb-4">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    placeholder="Search by school name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full h-12 pl-12 pr-4 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div className="flex gap-2 mb-6 flex-wrap">
                  {["", "Public", "Catholic"].map((sys) => (
                    <button
                      key={sys}
                      onClick={() => setSystemFilter(sys)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        systemFilter === sys ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"
                      }`}
                    >
                      {sys || "All Systems"}
                    </button>
                  ))}
                  {["", "Elementary", "Junior High", "High School"].map((type) => (
                    <button
                      key={type}
                      onClick={() => setTypeFilter(type)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        typeFilter === type ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"
                      }`}
                    >
                      {type || "All Types"}
                    </button>
                  ))}
                </div>
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {filteredSchools.map((school, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedSchool(school)}
                      className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all text-left ${
                        selectedSchool?.name === school.name
                          ? "border-primary bg-primary/5 shadow-soft"
                          : "border-border/30 hover:border-primary/30 hover:bg-muted/30"
                      }`}
                    >
                      <div>
                        <p className="font-medium text-foreground">{school.name}</p>
                        <p className="text-sm text-muted-foreground">{school.system} · {school.type} · Grades {school.grades}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground shrink-0" />
                    </button>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* Step 2: Grade */}
          {step === 2 && (
            <ScrollReveal>
              <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/30">
                <h2 className="text-2xl font-bold text-foreground mb-2">Select Grade</h2>
                <p className="text-muted-foreground mb-6">
                  {selectedSchool?.name} · {selectedSchool?.system}
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                  {grades.map((grade) => (
                    <button
                      key={grade}
                      onClick={() => setSelectedGrade(grade)}
                      className={`p-4 rounded-xl border text-sm font-medium transition-all ${
                        selectedGrade === grade
                          ? "border-primary bg-primary/5 text-foreground shadow-soft"
                          : "border-border/30 text-muted-foreground hover:border-primary/30"
                      }`}
                    >
                      {grade}
                    </button>
                  ))}
                </div>
                <div className="space-y-3">
                  <input
                    placeholder="Teacher/Class name (optional)"
                    value={teacherName}
                    onChange={(e) => setTeacherName(e.target.value)}
                    className="w-full h-12 px-4 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* Step 3: Supply List */}
          {step === 3 && (
            <ScrollReveal>
              <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/30">
                <h2 className="text-2xl font-bold text-foreground mb-1">Required Supply List</h2>
                <p className="text-muted-foreground mb-6">{selectedSchool?.name} · {selectedGrade}</p>
                <div className="space-y-3">
                  {supplyListItems.map((item, i) => (
                    <div key={i} className={`flex items-center justify-between p-4 rounded-xl border ${
                      includedItems[i] !== undefined ? "border-primary/30 bg-primary/[0.02]" : "border-border/30"
                    }`}>
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <input
                          type="checkbox"
                          checked={includedItems[i] !== undefined}
                          onChange={(e) => {
                            const next = { ...includedItems };
                            if (e.target.checked) next[i] = item.qty;
                            else delete next[i];
                            setIncludedItems(next);
                          }}
                          className="rounded shrink-0"
                        />
                        <div className="min-w-0">
                          <p className="font-medium text-foreground text-sm truncate">
                            {item.name}
                            {item.personalizable && <Pencil className="w-3 h-3 inline ml-1 text-secondary" />}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {item.category} · {item.required ? "Required" : "Optional"} · ${item.price.toFixed(2)}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 shrink-0 ml-3">
                        <button
                          onClick={() => {
                            const next = { ...includedItems };
                            if (next[i] && next[i] > 1) next[i]--;
                            setIncludedItems(next);
                          }}
                          className="w-7 h-7 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-medium w-6 text-center tabular-nums">{includedItems[i] || item.qty}</span>
                        <button
                          onClick={() => {
                            const next = { ...includedItems };
                            next[i] = (next[i] || item.qty) + 1;
                            setIncludedItems(next);
                          }}
                          className="w-7 h-7 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* Step 4: Box Summary */}
          {step === 4 && (
            <ScrollReveal>
              <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/30">
                <h2 className="text-2xl font-bold text-foreground mb-6">Your Supply Box</h2>
                <div className="space-y-3 mb-6">
                  {Object.entries(includedItems).map(([idx, qty]) => {
                    const item = supplyListItems[Number(idx)];
                    return (
                      <div key={idx} className="flex items-center justify-between py-2 border-b border-border/20">
                        <div>
                          <p className="text-sm font-medium text-foreground">{item.name}</p>
                          <p className="text-xs text-muted-foreground">Qty: {qty}</p>
                        </div>
                        <span className="text-sm font-medium text-foreground tabular-nums">
                          ${(item.price * (qty / item.qty)).toFixed(2)}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <div className="flex justify-between items-center p-4 rounded-xl bg-muted/50 border border-border/30">
                  <span className="font-semibold text-foreground">Subtotal</span>
                  <span className="text-xl font-bold text-foreground tabular-nums">${subtotal.toFixed(2)}</span>
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* Step 5: Customize */}
          {step === 5 && (
            <ScrollReveal>
              <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/30">
                <h2 className="text-2xl font-bold text-foreground mb-2">Personalize Your Box</h2>
                <p className="text-muted-foreground mb-6">Add your child's name to select items (+$3.50 per item)</p>
                <div className="mb-6">
                  <label className="text-sm font-medium text-foreground block mb-2">Child's Name</label>
                  <input
                    placeholder="Enter your child's name"
                    value={childName}
                    onChange={(e) => setChildName(e.target.value)}
                    className="w-full h-12 px-4 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div className="space-y-3">
                  {supplyListItems
                    .map((item, i) => ({ item, i }))
                    .filter(({ item, i }) => item.personalizable && includedItems[i] !== undefined)
                    .map(({ item, i }) => (
                      <label key={i} className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                        personalizations[i] ? "border-secondary bg-secondary/5" : "border-border/30 hover:border-secondary/30"
                      }`}>
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={!!personalizations[i]}
                            onChange={(e) => setPersonalizations({ ...personalizations, [i]: e.target.checked })}
                            className="rounded"
                          />
                          <div>
                            <p className="font-medium text-foreground text-sm">{item.name}</p>
                            <p className="text-xs text-muted-foreground">Print "{childName || "Name"}" on this item</p>
                          </div>
                        </div>
                        <span className="text-sm font-medium text-secondary-foreground">+$3.50</span>
                      </label>
                    ))}
                </div>
                {Object.values(personalizations).some(Boolean) && (
                  <div className="mt-6 p-4 rounded-xl bg-secondary/10 border border-secondary/20">
                    <p className="text-sm font-medium text-foreground">
                      <Star className="w-4 h-4 inline text-secondary mr-1" />
                      Preview: Items will feature "{childName || "Name"}" in a clean, durable print
                    </p>
                  </div>
                )}
              </div>
            </ScrollReveal>
          )}

          {/* Step 6: Delivery */}
          {step === 6 && (
            <ScrollReveal>
              <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/30">
                <h2 className="text-2xl font-bold text-foreground mb-6">Delivery Details</h2>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-2">Street Address</label>
                    <input
                      placeholder="123 Main Street"
                      value={address.line1}
                      onChange={(e) => setAddress({ ...address, line1: e.target.value })}
                      className="w-full h-12 px-4 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-2">Apt / Unit (optional)</label>
                    <input
                      placeholder="Apt 4B"
                      value={address.line2}
                      onChange={(e) => setAddress({ ...address, line2: e.target.value })}
                      className="w-full h-12 px-4 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-2">City</label>
                      <input value="Edmonton" disabled className="w-full h-12 px-4 rounded-xl border border-border bg-muted text-muted-foreground" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-2">Postal Code</label>
                      <input
                        placeholder="T5K 2R3"
                        value={address.postal}
                        onChange={(e) => setAddress({ ...address, postal: e.target.value })}
                        className="w-full h-12 px-4 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-accent/10 border border-accent/20">
                    <p className="text-sm font-medium text-foreground"><Truck className="w-4 h-4 inline mr-1 text-accent" /> Estimated delivery: August 1–10, 2026</p>
                    <p className="text-xs text-muted-foreground mt-1">Delivery fee: $5.99</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* Step 7: Payment */}
          {step === 7 && (
            <ScrollReveal>
              <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/30">
                <h2 className="text-2xl font-bold text-foreground mb-6">Checkout</h2>

                <div className="flex gap-3 mb-6">
                  {(["one-time", "annual"] as const).map((type) => (
                    <button
                      key={type}
                      onClick={() => setPaymentType(type)}
                      className={`flex-1 p-4 rounded-xl border text-center transition-all ${
                        paymentType === type
                          ? "border-primary bg-primary/5 shadow-soft"
                          : "border-border/30 hover:border-primary/30"
                      }`}
                    >
                      <p className="font-semibold text-foreground text-sm">{type === "one-time" ? "One-Time Purchase" : "Annual Subscription"}</p>
                      <p className="text-xs text-muted-foreground mt-1">{type === "annual" ? "Save 10% + auto-ship yearly" : "Single order"}</p>
                    </button>
                  ))}
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Supplies</span>
                    <span className="text-foreground tabular-nums">${subtotal.toFixed(2)}</span>
                  </div>
                  {personalizationFee > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Personalization</span>
                      <span className="text-foreground tabular-nums">${personalizationFee.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Delivery</span>
                    <span className="text-foreground tabular-nums">${deliveryFee.toFixed(2)}</span>
                  </div>
                  {paymentType === "annual" && (
                    <div className="flex justify-between text-sm text-accent">
                      <span>Subscription discount (10%)</span>
                      <span className="tabular-nums">-${(subtotal * 0.1).toFixed(2)}</span>
                    </div>
                  )}
                </div>

                <div className="mb-6">
                  <label className="text-sm font-medium text-foreground block mb-2">Add a donation to help another family</label>
                  <div className="flex gap-2">
                    {[0, 5, 10, 25].map((amt) => (
                      <button
                        key={amt}
                        onClick={() => setDonationAdd(amt)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                          donationAdd === amt ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"
                        }`}
                      >
                        {amt === 0 ? "None" : `$${amt}`}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-muted/50 border border-border/30 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-foreground">Total</span>
                    <span className="text-2xl font-bold text-foreground tabular-nums">
                      ${(paymentType === "annual" ? total - subtotal * 0.1 : total).toFixed(2)}
                    </span>
                  </div>
                  {paymentType === "annual" && (
                    <p className="text-xs text-accent mt-1">Billed annually · Cancel anytime</p>
                  )}
                </div>

                <div className="space-y-4 mb-6">
                  <div className="p-4 rounded-xl bg-muted/30 border border-border/30">
                    <p className="text-sm text-muted-foreground text-center">
                      <CreditCard className="w-4 h-4 inline mr-1" />
                      Secure payment powered by Stripe — coming soon
                    </p>
                  </div>
                </div>

                <Button size="xl" className="w-full" variant="hero">
                  {paymentType === "annual" ? "Subscribe & Order" : "Place Order"} <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </ScrollReveal>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={() => setStep(Math.max(0, step - 1))}
              disabled={step === 0}
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </Button>
            {step < STEPS.length - 1 && (
              <Button onClick={handleNext} disabled={!canProceed()}>
                Continue <ArrowRight className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
