import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const shippingSections = [
  {
    title: "Processing Times",
    body: [
      "Orders are typically processed within 1-3 business days after payment confirmation.",
      "Custom or pre-order items may require additional processing time, which will be communicated at checkout."
    ]
  },
  {
    title: "Shipping Timeframes",
    body: [
      "Metro deliveries generally arrive within 2-4 weeks from order confirmation for motorbike orders.",
      "Regional deliveries may take longer depending on your location and carrier availability."
    ]
  },
  {
    title: "Delivery Updates",
    body: [
      "We will provide tracking or delivery updates once your order is dispatched.",
      "If you need to update delivery details, contact us as soon as possible."
    ]
  },
  {
    title: "Shipping Costs",
    body: [
      "Shipping costs are calculated at checkout based on your location and the items in your order.",
      "Any promotions or free shipping offers will be applied automatically where eligible."
    ]
  },
  {
    title: "Pickup & Delivery Requirements",
    body: [
      "Large items may require a signature on delivery or coordination for safe drop-off.",
      "Please ensure someone is available to receive the delivery to avoid delays or additional fees."
    ]
  },
  {
    title: "Damaged or Missing Items",
    body: [
      "Inspect your delivery upon arrival and report any damage or missing items within 48 hours.",
      "Contact support@leki.com.au with photos and order details for prompt assistance."
    ]
  }
];

export default function ShippingPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Legal</p>
            <h1 className="text-4xl md:text-5xl font-bold text-chrome mt-3">Shipping Policy</h1>
            <p className="text-muted-foreground mt-4">Last updated: March 2025</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-10">
            {shippingSections.map((section) => (
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
