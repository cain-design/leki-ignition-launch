import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const termsSections = [
  {
    title: "Acceptance of Terms",
    body: [
      "By accessing or using this website, you agree to these Terms & Conditions and all applicable laws and regulations.",
      "If you do not agree, please do not use the site or purchase our products."
    ]
  },
  {
    title: "Products & Availability",
    body: [
      "All product descriptions, pricing, and availability are subject to change without notice.",
      "We reserve the right to limit quantities or refuse orders at our discretion."
    ]
  },
  {
    title: "Orders & Payments",
    body: [
      "Orders are confirmed only after payment authorization and acceptance by us.",
      "We may cancel or refund orders if pricing or product information is inaccurate or if fraud is suspected."
    ]
  },
  {
    title: "Delivery & Risk",
    body: [
      "Estimated delivery times are provided for convenience and are not guaranteed.",
      "Risk of loss transfers to you upon delivery to the address provided in your order."
    ]
  },
  {
    title: "Warranty",
    body: [
      "LEKI products include a manufacturer warranty as outlined in the product documentation.",
      "Warranty coverage excludes damage due to misuse, unauthorized modifications, or accidents."
    ]
  },
  {
    title: "Limitation of Liability",
    body: [
      "To the maximum extent permitted by law, we are not liable for indirect, incidental, or consequential damages.",
      "Our total liability is limited to the amount paid for the product or service in question."
    ]
  },
  {
    title: "Governing Law",
    body: [
      "These terms are governed by the laws of Australia.",
      "Any disputes will be resolved in the courts of the state or territory where our business is registered."
    ]
  },
  {
    title: "Contact",
    body: [
      "For questions about these terms, contact support@leki.com.au."
    ]
  }
];

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Legal</p>
            <h1 className="text-4xl md:text-5xl font-bold text-chrome mt-3">Terms & Conditions</h1>
            <p className="text-muted-foreground mt-4">Last updated: March 2025</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-10">
            {termsSections.map((section) => (
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
