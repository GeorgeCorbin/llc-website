import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="section-padding bg-[#1A1A1A]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Start Your Project?
        </h2>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          Let&apos;s discuss your ideas and create something amazing together. 
          Get a free consultation and project estimate.
        </p>
        <Link 
          href="/contact" 
          className="inline-flex items-center gap-2 bg-[#FF6B2C] text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:bg-[#e55a1f] hover:shadow-lg hover:shadow-[#FF6B2C]/25"
        >
          Get Free Consultation
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
