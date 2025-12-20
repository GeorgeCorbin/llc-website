import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold">
              Corbin<span className="text-[#FF6B2C]">.</span>
            </Link>
            <p className="mt-4 text-gray-400 max-w-md">
              Building exceptional digital experiences through custom web and mobile
              development. Let&apos;s bring your vision to life.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-[#FF6B2C] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-[#FF6B2C] transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-[#FF6B2C] transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#FF6B2C] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#FF6B2C] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-[#FF6B2C]" />
                <a href="mailto:hello@corbinsoftware.com" className="hover:text-[#FF6B2C] transition-colors">
                  hello@corbinsoftware.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-[#FF6B2C]" />
                <a href="tel:+1234567890" className="hover:text-[#FF6B2C] transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-[#FF6B2C] flex-shrink-0" />
                <span>United States</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Corbin Software Solutions LLC. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-gray-400 hover:text-[#FF6B2C] text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-[#FF6B2C] text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
