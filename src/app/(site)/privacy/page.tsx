import Link from "next/link";

const lastUpdated = "December 20, 2025";

const sections = [
  {
    title: "Information We Collect",
    content: [
      "Contact details such as name, email, and company information provided through forms.",
      "Project requirements, scope, and related documentation shared during consultations.",
      "Technical information including device, browser, and usage analytics gathered automatically when visiting our site.",
      "Payment and billing details supplied for invoicing and contractual purposes.",
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      "Delivering requested services, including discovery, design, development, and support.",
      "Preparing proposals, quotes, and contracts tailored to your project needs.",
      "Communicating project updates, timelines, maintenance notices, and support messages.",
      "Improving our website, offerings, and customer experience through analytics and feedback.",
      "Maintaining legal, contractual, and security compliance obligations.",
    ],
  },
  {
    title: "Data Sharing & Security",
    content: [
      "We do not sell your data. Limited sharing only occurs with trusted vendors who assist in delivering our services (e.g., hosting, analytics, payment processing).",
      "These partners are required to protect your information and may only use it for the agreed purpose.",
      "We implement administrative, technical, and physical safeguards to prevent unauthorized access, disclosure, alteration, or destruction of data.",
      "If a security incident occurs, we will notify affected parties and relevant authorities when required by law.",
    ],
  },
  {
    title: "Your Rights",
    content: [
      "Request access to the personal data we hold about you.",
      "Ask us to correct inaccuracies or delete information where legally permitted.",
      "Opt out of marketing communications at any time by using the unsubscribe options or contacting us directly.",
      "Request a copy of your project data or transfer it to another provider when feasible.",
    ],
  },
  {
    title: "Data Retention",
    content: [
      "We retain project records, communications, and contractual documentation for as long as necessary to deliver services and meet legal obligations.",
      "Inactive leads or inquiries are periodically reviewed and securely deleted when no longer needed.",
      "Backup copies may persist for a limited time before being overwritten according to our retention schedule.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-16">
      <section className="section-padding bg-gradient-to-br from-white via-[#EDEDED]/30 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-gray-600 mb-2">Effective Date: {lastUpdated}</p>
          <p className="text-gray-600">
            Corbin Software Solutions LLC (&quot;Corbin&quot;, &quot;we&quot;, &quot;our&quot;) is committed to protecting your privacy and
            handling your data transparently. This policy explains how we collect, use, and safeguard information when
            you interact with us online or engage our services.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-4xl mx-auto space-y-12">
          {sections.map((section) => (
            <div key={section.title} className="bg-white border border-[#EDEDED] rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">{section.title}</h2>
              <ul className="space-y-3 text-gray-600">
                {section.content.map((item) => (
                  <li key={item} className="flex gap-3">
                    <div className="mt-1 w-2 h-2 rounded-full bg-[#FF6B2C]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-[#EDEDED]/30">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 border border-[#EDEDED]">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">International Visitors</h2>
            <p className="text-gray-600">
              Our services are operated from the United States. If you access our website or engage our team from outside the
              U.S., you acknowledge that your information may be transferred to, stored in, and processed within the U.S.
              where data protection laws may differ. We take reasonable steps to ensure appropriate safeguards are in place.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#1A1A1A] text-white rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Questions or Requests</h2>
            <p className="text-gray-300 mb-6">
              If you have questions about this policy or wish to exercise your privacy rights, contact us anytime.
            </p>
            <div className="space-y-3 text-gray-200">
              <p>
                Email: <a href="mailto:hello@corbinsoftware.com" className="text-[#FF6B2C] hover:underline">hello@corbinsoftware.com</a>
              </p>
              <p>Mailing: Corbin Software Solutions LLC · United States</p>
            </div>
            <p className="text-xs text-gray-400 mt-6">
              We may update this policy periodically. Please review it regularly to stay informed about our practices.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding text-center">
        <p className="text-gray-600">
          Need more details? Review our <Link href="/terms" className="text-[#FF6B2C] font-semibold">Terms of Service</Link> for
          contractual obligations and service commitments.
        </p>
      </section>
    </div>
  );
}
