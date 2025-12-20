import Link from "next/link";
import { ArrowRight, Code2, Smartphone } from "lucide-react";

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
            <Link href="/portfolio" className="btn-secondary inline-flex items-center justify-center gap-2">
              View Our Work
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">50+</div>
              <div className="text-gray-500 text-sm mt-1">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">100%</div>
              <div className="text-gray-500 text-sm mt-1">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">5+</div>
              <div className="text-gray-500 text-sm mt-1">Years Experience</div>
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
