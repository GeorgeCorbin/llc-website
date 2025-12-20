import { Code2, Smartphone, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "web-development",
    icon: Code2,
    title: "Web Development",
    description: "Custom websites and web applications built with cutting-edge technologies. We create responsive, fast, and SEO-optimized solutions that drive results.",
    features: [
      "Custom website design and development",
      "React & Next.js applications",
      "E-commerce solutions",
      "Content Management Systems",
      "Progressive Web Apps (PWA)",
      "API development and integration",
      "Performance optimization",
      "SEO best practices",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
  },
  {
    id: "mobile-development",
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android. We build intuitive, high-performance apps that users love.",
    features: [
      "iOS and Android development",
      "Cross-platform with React Native",
      "Native app development",
      "App Store optimization",
      "Push notifications",
      "Offline functionality",
      "Backend integration",
      "Analytics and tracking",
    ],
    technologies: ["React Native", "Swift", "Kotlin", "Firebase", "REST APIs", "GraphQL"],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-white via-[#EDEDED]/30 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive digital solutions tailored to your business needs. 
            From concept to deployment, we&apos;ve got you covered.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto space-y-20">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <div className="w-16 h-16 bg-[#FF6B2C]/10 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-[#FF6B2C]" />
                </div>
                <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {service.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="bg-[#EDEDED] text-[#1A1A1A] px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <div className={`bg-[#EDEDED]/50 rounded-2xl p-8 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <h3 className="font-semibold text-[#1A1A1A] mb-6">What&apos;s Included</h3>
                <ul className="space-y-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#FF6B2C] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Coming Soon */}
      <section className="section-padding bg-[#EDEDED]/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">More Services Coming Soon</h2>
          <p className="text-gray-600 mb-8">
            We&apos;re constantly expanding our offerings. Stay tuned for additional services 
            including UI/UX design, cloud solutions, and more.
          </p>
          <Link href="/contact" className="btn-secondary inline-flex items-center gap-2">
            Contact Us for Custom Solutions
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Not Sure What You Need?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Let&apos;s have a conversation about your project. We&apos;ll help you figure out 
            the best approach for your goals.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-[#FF6B2C] text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:bg-[#e55a1f]"
          >
            Schedule a Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
