"use client";

import Link from "next/link";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import Container from "../common/Container";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "Creators", href: "/creators" },
  ];

  return (
    <header className="relative w-full bg-[#123fe5] border-b border-white/10">
      {/* Background Grid Pattern Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px)] bg-size-[80px_100%] pointer-events-none" />

      <Container className="relative z-10">
        <nav className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/images/main-logo.png"
              alt="ByteSpace"
              width={12}
              height={12}
              className="h-7 w-auto object-contain"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.nextElementSibling.style.display = "flex";
              }}
            />
            <div className="hidden items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#c8ff00]">
                <svg className="h-5 w-5 fill-black" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                ByteSpace
              </span>
            </div>
          </Link>

          {/* Center Navigation Links */}
          <div className="hidden items-center text-white gap-10 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-normal text-white/95 transition hover:text-[#c8ff00]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden items-center text-white gap-8 md:flex">
            <Link
              href="/login"
              className="text-sm font-normal text-white/95 transition hover:text-[#c8ff00]"
            >
              Sign In
            </Link>

            <Link
              href="/register"
              className="text-sm font-normal text-white/95 transition hover:text-[#c8ff00]"
            >
              Join Us
            </Link>

            <button
              type="button"
              className="text-white transition hover:text-[#c8ff00]"
              aria-label="Shopping bag"
            >
              <ShoppingBag size={20} strokeWidth={1.8} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="text-white md:hidden"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <div className="mb-4 rounded-2xl bg-white p-6 shadow-2xl md:hidden">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-semibold text-gray-900"
                >
                  {item.label}
                </Link>
              ))}

              <hr className="border-gray-100" />

              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="text-sm font-semibold text-gray-900"
              >
                Sign In
              </Link>

              <Link
                href="/register"
                onClick={() => setIsOpen(false)}
                className="text-sm font-semibold text-[#123fe5]"
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
