import { Check, ArrowRight, HelpCircle } from "lucide-react";
import Link from "next/link";
import { ensureFeatureEnabled } from "@/utils/featureGuard";

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for small businesses and landing pages",
    price: "1,200",
    priceNote: "starting at",
    features: [
      "Single page website",
      "Mobile responsive design",
      "Contact form integration",
      "Basic SEO setup",
      "1 round of revisions",
      "2 week delivery",
    ],
    popular: false,
    cta: "Get Started",
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses needing more features",
    price: "2,500",
    priceNote: "starting at",
    features: [
      "Multi-page website (up to 5 pages)",
      "Custom design",
      "Mobile responsive",
      "CMS integration",
      "Advanced SEO optimization",
      "Analytics setup",
      "3 rounds of revisions",
      "4 week delivery",
    ],
    popular: true,
    cta: "Get Started",
  },
  {
    name: "Enterprise",
    description: "Full-scale web applications and complex projects",
    price: "Custom",
    priceNote: "contact for quote",
    features: [
      "Custom web application",
      "Advanced functionality",
      "Database integration",
      "User authentication",
      "API development",
      "Third-party integrations",
      "Ongoing support options",
      "Timeline based on scope",
    ],
    popular: false,
    cta: "Contact Us",
  },
];

const mobilePricing = [
  {
    name: "MVP App",
    description: "Launch your idea quickly with core features",
    price: "2,000",
    priceNote: "starting at",
    features: [
      "Single platform (iOS or Android)",
      "Core feature set",
      "Basic UI design",
      "Backend setup",
      "App store submission",
      "8-12 week delivery",
    ],
    popular: false,
    cta: "Get Started",
  },
  {
    name: "Full App",
    description: "Complete mobile solution for both platforms",
    price: "5,000",
    priceNote: "starting at",
    features: [
      "iOS and Android",
      "Custom UI/UX design",
      "Full feature set",
      "Push notifications",
      "Analytics integration",
      "Admin dashboard",
      "12-16 week delivery",
    ],
    popular: true,
    cta: "Get Started",
  },
];

const faqs = [
  {
    question: "What's included in the pricing?",
    answer: "All prices include design, development, testing, and deployment. We also provide documentation and a handoff session to ensure you're comfortable managing your new site or app.",
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes! We typically work with a 50% deposit to start, with the remaining balance due upon completion. For larger projects, we can arrange milestone-based payments.",
  },
  {
    question: "What about ongoing maintenance?",
    answer: "We offer optional maintenance packages starting at $75/month that include hosting, security updates, backups, and minor content updates.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Timeline varies by project complexity. Simple websites take 2-4 weeks, while complex web apps or mobile apps can take 2-4 months. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Can I request features not listed here?",
    answer: "Absolutely! These packages are starting points. We customize every project to fit your specific needs. Contact us to discuss your requirements.",
  },
];

export default function PricingPage() {
  ensureFeatureEnabled("pricing");
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-white via-[#EDEDED]/30 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
            Transparent <span className="gradient-text">Pricing</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Quality software at fair prices. No hidden fees, no surprises. 
            Choose a package or get a custom quote.
          </p>
        </div>
      </section>

      {/* Web Development Pricing */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-8 text-center">Web Development</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <div 
                key={plan.name} 
                className={`rounded-2xl p-8 ${
                  plan.popular 
                    ? 'bg-[#1A1A1A] text-white ring-4 ring-[#FF6B2C]' 
                    : 'bg-white border border-[#EDEDED]'
                }`}
              >
                {plan.popular && (
                  <span className="inline-block bg-[#FF6B2C] text-white text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-sm mb-6 ${plan.popular ? 'text-gray-400' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className={`text-sm ${plan.popular ? 'text-gray-400' : 'text-gray-500'}`}>
                    {plan.priceNote}
                  </span>
                  <div className="flex items-baseline gap-1">
                    {plan.price !== "Custom" && <span className="text-2xl">$</span>}
                    <span className="text-4xl font-bold">{plan.price}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 ${plan.popular ? 'text-[#FF6B2C]' : 'text-[#FF6B2C]'}`} />
                      <span className={plan.popular ? 'text-gray-300' : 'text-gray-600'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/contact" 
                  className={`block text-center py-3 px-6 rounded-lg font-medium transition-all ${
                    plan.popular 
                      ? 'bg-[#FF6B2C] text-white hover:bg-[#e55a1f]' 
                      : 'border-2 border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Pricing */}
      <section className="section-padding bg-[#EDEDED]/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-8 text-center">Mobile App Development</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {mobilePricing.map((plan) => (
              <div 
                key={plan.name} 
                className={`rounded-2xl p-8 ${
                  plan.popular 
                    ? 'bg-[#1A1A1A] text-white ring-4 ring-[#FF6B2C]' 
                    : 'bg-white border border-[#EDEDED]'
                }`}
              >
                {plan.popular && (
                  <span className="inline-block bg-[#FF6B2C] text-white text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-sm mb-6 ${plan.popular ? 'text-gray-400' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className={`text-sm ${plan.popular ? 'text-gray-400' : 'text-gray-500'}`}>
                    {plan.priceNote}
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl">$</span>
                    <span className="text-4xl font-bold">{plan.price}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 text-[#FF6B2C]`} />
                      <span className={plan.popular ? 'text-gray-300' : 'text-gray-600'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/contact" 
                  className={`block text-center py-3 px-6 rounded-lg font-medium transition-all ${
                    plan.popular 
                      ? 'bg-[#FF6B2C] text-white hover:bg-[#e55a1f]' 
                      : 'border-2 border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-white border border-[#EDEDED] rounded-xl p-6">
                <h3 className="font-semibold text-[#1A1A1A] mb-2 flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-[#FF6B2C] flex-shrink-0 mt-0.5" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 ml-8">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need a Custom Quote?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Every project is unique. Let&apos;s discuss your specific requirements 
            and create a tailored solution.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-[#FF6B2C] text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:bg-[#e55a1f]"
          >
            Get Custom Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
