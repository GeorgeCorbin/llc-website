import Link from "next/link";
import { Code2, Smartphone, ArrowRight, Palette, Database, Cloud, Shield } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies. From landing pages to complex platforms.",
    features: ["React & Next.js", "Responsive Design", "SEO Optimized", "Fast Performance"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android that users love.",
    features: ["React Native", "iOS & Android", "Push Notifications", "Offline Support"],
  },
];

export default function ServicesPreview() {
  return (
    <section className="section-padding bg-[#EDEDED]/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
            What We <span className="gradient-text">Build</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We specialize in creating digital solutions that help businesses grow and succeed in the modern world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.title} className="card group">
              <div className="w-14 h-14 bg-[#FF6B2C]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#FF6B2C] transition-colors">
                <service.icon className="w-7 h-7 text-[#FF6B2C] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-gray-600">
                    <div className="w-1.5 h-1.5 bg-[#FF6B2C] rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="inline-flex items-center gap-2 text-[#FF6B2C] font-medium hover:gap-3 transition-all">
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
