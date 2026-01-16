import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const privacySections = [
  {
    title: "Overview",
    body: [
      "This Privacy Policy explains how LEKI Electric Motorbikes (\"we\", \"us\", and \"our\") collects, uses, and protects your personal information when you visit our website, make a purchase, or contact us.",
      "By using our site, you agree to the practices described in this policy. If you do not agree, please do not use the site."
    ]
  },
  {
    title: "Information We Collect",
    body: [
      "Contact details such as your name, email, phone number, and shipping address when you place an order or contact us.",
      "Order details, payment confirmations, and transaction history necessary to process your purchases.",
      "Device and usage data such as IP address, browser type, and pages viewed for analytics and site performance."
    ]
  },
  {
    title: "How We Use Your Information",
    body: [
      "Fulfil orders, process payments, arrange delivery, and provide customer support.",
      "Communicate about your order status, product updates, and service notifications.",
      "Improve our website experience, security, and product offering."
    ]
  },
  {
    title: "Sharing & Disclosure",
    body: [
      "We share information with service providers who help us operate our store, such as payment processors and logistics partners.",
      "We may disclose information if required by law or to protect our rights, customers, or the public.",
      "We do not sell your personal information."
    ]
  },
  {
    title: "Cookies & Analytics",
    body: [
      "We use cookies to remember your preferences, keep the site secure, and understand how visitors use our site.",
      "You can control cookies through your browser settings, but some features may not work without them."
    ]
  },
  {
    title: "Your Rights",
    body: [
      "You can request access to, correction of, or deletion of your personal information.",
      "To make a request, contact us at support@leki.com.au."
    ]
  },
  {
    title: "Data Retention & Security",
    body: [
      "We keep information only as long as necessary for the purposes described above.",
      "We implement reasonable security measures to protect your data, but no method of transmission is 100% secure."
    ]
  },
  {
    title: "Changes to This Policy",
    body: [
      "We may update this policy from time to time to reflect changes in our practices or legal requirements.",
      "The latest version will always be posted on this page."
    ]
  }
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Legal</p>
            <h1 className="text-4xl md:text-5xl font-bold text-chrome mt-3">Privacy Policy</h1>
            <p className="text-muted-foreground mt-4">Last updated: March 2025</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-10">
            {privacySections.map((section) => (
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
