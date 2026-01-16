import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const refundSections = [
  {
    title: "Returns & Refunds",
    body: [
      "If you change your mind, contact us within 14 days of delivery to request a return authorization.",
      "Returned items must be unused, in original condition, and include all accessories and documentation."
    ]
  },
  {
    title: "Non-Returnable Items",
    body: [
      "Custom orders, special-order parts, and items marked final sale may not be eligible for return.",
      "Gift cards and downloadable content are non-refundable."
    ]
  },
  {
    title: "Refund Processing",
    body: [
      "Approved refunds are issued to the original payment method within 5-10 business days after inspection.",
      "Shipping fees are non-refundable unless the return is due to our error or a defective product."
    ]
  },
  {
    title: "Warranty or Faulty Items",
    body: [
      "If your item is faulty or damaged, contact us within 48 hours of delivery for support.",
      "We will arrange repair, replacement, or refund based on warranty coverage and consumer guarantees."
    ]
  },
  {
    title: "How to Start a Return",
    body: [
      "Email support@leki.com.au with your order number, reason for return, and photos if applicable.",
      "We will provide return instructions and confirm eligibility before shipment."
    ]
  }
];

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Legal</p>
            <h1 className="text-4xl md:text-5xl font-bold text-chrome mt-3">Refund & Returns Policy</h1>
            <p className="text-muted-foreground mt-4">Last updated: March 2025</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-10">
            {refundSections.map((section) => (
              <section key={section.title} className="bg-secondary/30 border border-border rounded-2xl p-6 md:p-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">{section.title}</h2>
                <ul className="space-y-3 text-muted-foreground">
                  {section.body.map((line) => (
                    <li key={line} className="leading-relaxed">
                      {line}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
