"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Menu, X } from "lucide-react";
import { featureFlags } from "@/config/featureFlags";

type NavLink = { href: string; label: string; feature?: keyof typeof featureFlags };

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services", feature: "services" },
  { href: "/pricing", label: "Pricing", feature: "pricing" },
  { href: "/portfolio", label: "Portfolio", feature: "portfolio" },
  { href: "/about", label: "About", feature: "about" },
  { href: "/contact", label: "Contact", feature: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const availableLinks = useMemo(
    () => navLinks.filter((link) => !link.feature || featureFlags[link.feature]),
    []
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#EDEDED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-montserrat font-bold text-[#1A1A1A]">
              Corbin<span className="text-[#FF6B2C]">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {availableLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#1A1A1A] hover:text-[#FF6B2C] transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            {featureFlags.contact && (
              <Link href="/contact" className="btn-primary">
                Get Started
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-[#1A1A1A]" />
            ) : (
              <Menu className="w-6 h-6 text-[#1A1A1A]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-[#EDEDED]">
            <div className="flex flex-col gap-4">
              {availableLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#1A1A1A] hover:text-[#FF6B2C] transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              {featureFlags.contact && (
                <Link
                  href="/contact"
                  className="btn-primary text-center mt-2"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
