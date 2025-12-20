import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ensureFeatureEnabled } from "@/utils/featureGuard";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured online store with inventory management, payment processing, and customer analytics.",
    category: "Web Development",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://example-ecommerce.com",
    imageUrl: "/projects/ecommerce.jpg",
  },
  {
    id: 2,
    title: "Fitness Tracking App",
    description: "Cross-platform mobile app for tracking workouts, nutrition, and health metrics with social features.",
    category: "Mobile App",
    technologies: ["React Native", "Firebase", "Node.js"],
    liveUrl: "https://example-fitness.com",
    imageUrl: "/projects/fitness.jpg",
  },
  {
    id: 3,
    title: "Real Estate Portal",
    description: "Property listing platform with advanced search, virtual tours, and agent management system.",
    category: "Web Development",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    liveUrl: "https://example-realestate.com",
    imageUrl: "/projects/realestate.jpg",
  },
  {
    id: 4,
    title: "Restaurant Ordering System",
    description: "Digital menu and ordering system with kitchen display, table management, and analytics.",
    category: "Web Development",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Socket.io"],
    liveUrl: "https://example-restaurant.com",
    imageUrl: "/projects/restaurant.jpg",
  },
  {
    id: 5,
    title: "Task Management App",
    description: "Productivity app with team collaboration, project tracking, and time management features.",
    category: "Mobile App",
    technologies: ["React Native", "GraphQL", "PostgreSQL"],
    liveUrl: "https://example-tasks.com",
    imageUrl: "/projects/tasks.jpg",
  },
  {
    id: 6,
    title: "Healthcare Dashboard",
    description: "Patient management system with appointment scheduling, medical records, and billing integration.",
    category: "Web Development",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    liveUrl: "https://example-healthcare.com",
    imageUrl: "/projects/healthcare.jpg",
  },
];

const categories = ["All", "Web Development", "Mobile App"];

export default function PortfolioPage() {
  ensureFeatureEnabled("portfolio");
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-white via-[#EDEDED]/30 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
            Our <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our recent projects and see how we&apos;ve helped businesses 
            achieve their digital goals.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  category === "All"
                    ? "bg-[#FF6B2C] text-white"
                    : "bg-[#EDEDED] text-[#1A1A1A] hover:bg-[#FF6B2C]/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group">
                <div className="bg-gradient-to-br from-[#EDEDED] to-[#EDEDED]/50 rounded-2xl aspect-video mb-4 overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl font-bold text-[#1A1A1A]/10">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-[#1A1A1A]/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#FF6B2C] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#e55a1f] transition-colors"
                    >
                      View Live Site
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <span className="text-sm text-[#FF6B2C] font-medium">{project.category}</span>
                <h3 className="text-xl font-bold text-[#1A1A1A] mt-1 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#EDEDED] text-[#1A1A1A] px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note about portfolio */}
      <section className="section-padding bg-[#EDEDED]/30">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 mb-4">
            <strong>Note:</strong> Some projects shown are examples of our capabilities. 
            Due to NDAs and client privacy, not all work can be displayed publicly.
          </p>
          <p className="text-gray-600">
            Contact us to discuss specific case studies relevant to your industry.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Let&apos;s create your next successful project together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#FF6B2C] text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:bg-[#e55a1f]"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
