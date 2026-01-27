import { Target, Users, Zap, Award, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ensureFeatureEnabled } from "@/utils/featureGuard";

const values = [
  {
    icon: Target,
    title: "Quality First",
    description: "We never compromise on quality. Every line of code is written with care and attention to detail.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description: "We work alongside you as partners, not just vendors. Your success is our success.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We stay current with the latest technologies to deliver modern, future-proof solutions.",
  },
  {
    icon: Award,
    title: "Reliability",
    description: "We deliver on our promises. Clear communication and meeting deadlines are non-negotiable.",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We start by understanding your business, goals, and requirements through in-depth consultation.",
  },
  {
    step: "02",
    title: "Planning",
    description: "We create a detailed project plan with timelines, milestones, and technical specifications.",
  },
  {
    step: "03",
    title: "Development",
    description: "Our team builds your solution using agile methodology with regular updates and feedback loops.",
  },
  {
    step: "04",
    title: "Launch & Support",
    description: "We deploy your project and provide ongoing support to ensure continued success.",
  },
];

export default function AboutPage() {
  ensureFeatureEnabled("about");
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-white via-[#EDEDED]/30 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
                About <span className="gradient-text">Corbin Software</span>
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                We&apos;re a software development company passionate about building 
                exceptional digital experiences. Founded with the mission to help 
                businesses succeed in the digital age.
              </p>
              <p className="text-gray-600">
                Our team combines technical expertise with creative problem-solving 
                to deliver solutions that not only meet your requirements but exceed 
                your expectations.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#FF6B2C]/20 to-[#FF6B2C]/5 rounded-3xl p-12 text-center">
              <div className="text-6xl font-bold text-[#1A1A1A] mb-2">5+</div>
              <div className="text-gray-600">Years of Experience</div>
              <div className="grid grid-cols-2 gap-8 mt-8">
                <div>
                  <div className="text-3xl font-bold text-[#1A1A1A]">15+</div>
                  <div className="text-gray-600 text-sm">Projects Shipped</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#1A1A1A]">100%</div>
                  <div className="text-gray-600 text-sm">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do and how we work with our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 bg-[#FF6B2C]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-[#FF6B2C]" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section-padding bg-[#EDEDED]/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A proven approach that ensures successful project delivery every time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={item.step} className="relative">
                <div className="bg-white rounded-2xl p-6 border border-[#EDEDED] h-full">
                  <span className="text-5xl font-bold text-[#FF6B2C]/20">{item.step}</span>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mt-4 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-[#FF6B2C]/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Technologies We Use
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We work with modern, battle-tested technologies to build reliable solutions.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "React", "Next.js", "TypeScript", "Node.js", "React Native",
              "PostgreSQL", "MongoDB", "Prisma", "Tailwind CSS", "AWS",
              "Firebase", "GraphQL", "REST APIs", "Git"
            ].map((tech) => (
              <span
                key={tech}
                className="bg-[#EDEDED] text-[#1A1A1A] px-6 py-3 rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Ready to start your project? We&apos;d love to hear about your ideas.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#FF6B2C] text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:bg-[#e55a1f]"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
