"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Container from "../common/Container";
import Button from "../common/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "About", href: "/#about" },
  ];

  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <Container>
        <nav className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-black tracking-tight text-white"
          >
            ByteSpace
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-white/90 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/login"
              className="text-sm font-medium text-white/90 transition hover:text-white"
            >
              Sign In
            </Link>

            <Button variant="primary">Join Us</Button>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="text-white md:hidden"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>

        {isOpen && (
          <div className="rounded-2xl bg-white p-5 shadow-xl md:hidden">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="font-medium"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="font-medium"
              >
                Sign In
              </Link>

              <Button variant="secondary">Join Us</Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
