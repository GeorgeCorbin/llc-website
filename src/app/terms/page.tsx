import Link from "next/link";

const lastUpdated = "December 20, 2025";

const provisions = [
  {
    title: "Acceptance of Terms",
    paragraphs: [
      "By accessing Corbin Software Solutions LLC (\"Corbin\", \"we\", \"our\") website or engaging our services, you agree to these Terms of Service. If you do not agree, please do not use our website or services.",
      "We may update these terms periodically. Continued use constitutes acceptance of the revised terms.",
    ],
  },
  {
    title: "Services & Engagement",
    paragraphs: [
      "All development, consultation, and support services are outlined in individual proposals, statements of work, or service agreements.",
      "Project timelines and deliverables depend on client responsiveness, access to required systems, and timely approvals.",
      "Scope changes after approval may impact cost, timeline, and resource allocation.",
    ],
  },
  {
    title: "Payments & Billing",
    paragraphs: [
      "Standard payment terms are defined in each agreement. Deposits are non-refundable once work begins unless otherwise stated.",
      "Late payments may incur fees or paused work until balances are resolved.",
      "Subscription or maintenance services renew automatically unless canceled in writing before the renewal date.",
    ],
  },
  {
    title: "Intellectual Property",
    paragraphs: [
      "Clients retain ownership of their trademarks, content, and proprietary materials provided to Corbin.",
      "Upon full payment, clients receive rights to deliverables as specified in the contract (e.g., source code, designs, documentation).",
      "We may reference completed work in our portfolio unless prohibited by a written NDA.",
    ],
  },
  {
    title: "Client Responsibilities",
    paragraphs: [
      "Provide accurate, timely information and approvals necessary for project progress.",
      "Ensure materials supplied do not infringe third-party rights and comply with laws.",
      "Maintain backups of any content or data shared with Corbin.",
    ],
  },
  {
    title: "Confidentiality",
    paragraphs: [
      "Both parties agree to protect confidential information shared during the engagement and use it only for project purposes.",
      "NDAs or additional confidentiality provisions can be implemented upon request.",
    ],
  },
  {
    title: "Warranties & Disclaimers",
    paragraphs: [
      "We warrant that services will be delivered with reasonable skill and care consistent with industry standards.",
      "Except as expressly stated, services are provided \"as-is\" without implied warranties of merchantability, fitness for a particular purpose, or non-infringement.",
      "We do not guarantee uninterrupted or error-free operation of software once handed off, especially if modified by third parties.",
    ],
  },
  {
    title: "Limitation of Liability",
    paragraphs: [
      "Corbin is not liable for indirect, incidental, or consequential damages arising from service use or inability to use deliverables.",
      "Our total liability is limited to the fees paid by the client for the specific project giving rise to the claim.",
    ],
  },
  {
    title: "Termination",
    paragraphs: [
      "Either party may terminate an engagement for cause with written notice if the other party materially breaches the agreement and fails to cure within 15 days.",
      "Upon termination, clients are responsible for payment of work completed and expenses incurred up to the termination date.",
    ],
  },
  {
    title: "Governing Law",
    paragraphs: [
      "These terms are governed by the laws of the United States and the state where Corbin is registered, without regard to conflict of law principles.",
      "Any disputes shall be resolved exclusively in the courts located in that jurisdiction, unless both parties agree to alternative dispute resolution.",
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="pt-16">
      <section className="section-padding bg-gradient-to-br from-white via-[#EDEDED]/30 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
            Terms of <span className="gradient-text">Service</span>
          </h1>
          <p className="text-gray-600 mb-2">Last Updated: {lastUpdated}</p>
          <p className="text-gray-600">
            Please read these Terms carefully. They describe the relationship between you and Corbin Software Solutions LLC
            and govern your use of our website and professional services.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-4xl mx-auto space-y-10">
          {provisions.map((section) => (
            <div key={section.title} className="bg-white border border-[#EDEDED] rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">{section.title}</h2>
              <div className="space-y-3 text-gray-600">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-[#EDEDED]/30">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#1A1A1A] text-white rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Questions?</h2>
            <p className="text-gray-300 mb-6">
              If you have questions about these terms or need a custom agreement, our team is happy to help.
            </p>
            <div className="space-y-3 text-gray-200">
              <p>
                Email: <a href="mailto:hello@corbinsoftware.com" className="text-[#FF6B2C] hover:underline">hello@corbinsoftware.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding text-center">
        <p className="text-gray-600">
          For details on how we handle personal data, visit our <Link href="/privacy" className="text-[#FF6B2C] font-semibold">Privacy Policy</Link>.
        </p>
      </section>
    </div>
  );
}
