import Link from "next/link";
import { ArrowRight, Code2, Smartphone } from "lucide-react";
import { featureFlags } from "@/config/featureFlags";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-[#EDEDED]/30 to-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-[#FF6B2C]/10 text-[#FF6B2C] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Code2 className="w-4 h-4" />
            Custom Software Development
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#1A1A1A] leading-tight mb-6">
            We Build Digital
            <br />
            <span className="gradient-text">Solutions That Work</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            From stunning websites to powerful mobile apps, we craft custom software 
            that drives your business forward. Let&apos;s turn your ideas into reality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary inline-flex items-center justify-center gap-2">
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
            {featureFlags.portfolio && (
              <Link href="/portfolio" className="btn-secondary inline-flex items-center justify-center gap-2">
                View Our Work
              </Link>
            )}
          </div>

          {/* Highlights */}
          <div className="flex flex-wrap justify-center gap-4 mt-20 max-w-3xl mx-auto">
            <div className="flex items-center gap-3 bg-white shadow-sm border border-gray-100 px-4 py-3 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#FF6B2C]" />
              <div className="text-left">
                <div className="text-sm text-gray-500">Personal developer</div>
                <div className="text-base font-semibold text-[#1A1A1A]">Direct access, no handoffs</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white shadow-sm border border-gray-100 px-4 py-3 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#FF6B2C]" />
              <div className="text-left">
                <div className="text-sm text-gray-500">Hands-on delivery</div>
                <div className="text-base font-semibold text-[#1A1A1A]">Design, build, ship end-to-end</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white shadow-sm border border-gray-100 px-4 py-3 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#FF6B2C]" />
              <div className="text-left">
                <div className="text-sm text-gray-500">Responsive in hours</div>
                <div className="text-base font-semibold text-[#1A1A1A]">Clear timelines & weekly demos</div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Icons */}
        <div className="flex justify-center gap-8 mt-16">
          <div className="flex items-center gap-3 text-gray-600">
            <div className="w-12 h-12 bg-[#FF6B2C]/10 rounded-xl flex items-center justify-center">
              <Code2 className="w-6 h-6 text-[#FF6B2C]" />
            </div>
            <span className="font-medium">Web Development</span>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <div className="w-12 h-12 bg-[#FF6B2C]/10 rounded-xl flex items-center justify-center">
              <Smartphone className="w-6 h-6 text-[#FF6B2C]" />
            </div>
            <span className="font-medium">Mobile Apps</span>
          </div>
        </div>
      </div>
    </section>
  );
}
