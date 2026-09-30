"use client";

import Link from "next/link";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import Container from "../common/Container";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "Creators", href: "/creators" },
  ];

  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <Container>
        <nav className="flex h-18 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="relative flex h-5 w-5 items-center justify-center">
              <span className="absolute left-0 top-0 h-4 w-3 rounded-bl-lg rounded-tr-lg bg-[#CBFC01]" />
              <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-[#CBFC01]" />
            </span>

            <span className="text-[15px] font-bold tracking-tight text-white">
              ByteSpace
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center text-white text-xl gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[11px] font-medium text-white/90 transition hover:text-[#CBFC01]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop actions */}
          <div className="hidden items-center text-white text-xl gap-5 md:flex">
            <Link
              href="/login"
              className="text-[11px] font-medium text-white/90 transition hover:text-[#CBFC01]"
            >
              Sign In
            </Link>

            <Link
              href="/register"
              className="text-[11px] font-medium text-white/90 transition hover:text-[#CBFC01]"
            >
              Join Us
            </Link>

            <button
              type="button"
              className="text-white transition hover:text-[#CBFC01]"
              aria-label="Shopping bag"
            >
              <ShoppingBag size={15} strokeWidth={1.5} />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="text-white md:hidden"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile navigation */}
        {isOpen && (
          <div className="rounded-2xl bg-white p-5 shadow-2xl md:hidden">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-black"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-black"
              >
                Sign In
              </Link>

              <Link
                href="/register"
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-black"
              >
                Join Us
              </Link>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
