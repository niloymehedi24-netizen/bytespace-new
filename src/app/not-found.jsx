"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";

export default function NotFoundPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col justify-between bg-white text-gray-900 font-sans">
      {/*  MAIN HERO SECTION (BLUE GRID) */}
      <div className="relative flex flex-1 flex-col justify-between bg-[#123fe5] text-white pt-4 pb-20 overflow-hidden">
        {/* Background Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-size-[80px_80px] pointer-events-none" />

        {/* Top Navbar */}
        <header className="relative z-10 mx-auto w-full max-w-7xl px-6">
          <nav className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#c8ff00] font-black text-black text-lg">
                b
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                ByteSpace
              </span>
            </Link>

            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-8 text-xs font-medium text-white/90">
              <Link href="/" className="hover:text-[#c8ff00] transition">
                Home
              </Link>
              <Link href="/courses" className="hover:text-[#c8ff00] transition">
                Courses
              </Link>
              <Link
                href="/creators"
                className="hover:text-[#c8ff00] transition"
              >
                Creators
              </Link>
            </div>

            {/* Right Actions */}
            <div className="hidden md:flex items-center gap-6 text-xs font-medium text-white/90">
              <Link href="/login" className="hover:text-[#c8ff00] transition">
                Sign In
              </Link>
              <Link
                href="/register"
                className="hover:text-[#c8ff00] transition"
              >
                Join Us
              </Link>
              <button
                type="button"
                aria-label="Shopping Cart"
                className="hover:text-[#c8ff00] transition"
              >
                <ShoppingBag size={18} />
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </header>

        {/* 404 Main Center Content */}
        <div className="relative z-10 my-auto mx-auto max-w-4xl px-6 text-center py-12">
          {/* Giant Gradient 404 Text */}
          <h1 className="text-[120px] sm:text-[180px] md:text-[230px] font-black leading-none tracking-tight select-none bg-linear-to-b from-[#d8ff33] via-[#b2f000] to-[#80c800]/70 bg-clip-text text-transparent">
            404
          </h1>

          {/* Headline */}
          <h2 className="mt-2 text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            The page you are looking <br className="hidden sm:inline" />
            for doesn&apos;t exist
          </h2>

          {/* Subheading */}
          <p className="mt-4 text-xs sm:text-sm text-blue-100/90 font-normal">
            Try to use a correct url or go back to homepage to start again
          </p>

          {/* Back to Home CTA */}
          <div className="mt-8 flex justify-center">
            <Link
              href="/"
              className="rounded-full bg-[#c8ff00] px-8 py-3 text-xs sm:text-sm font-bold text-black transition hover:bg-[#b5e600] shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Back to Home
            </Link>
          </div>
        </div>

        {/* Bottom Spacer for balance */}
        <div className="h-6" />
      </div>

      {/* FOOTER SECTION */}
      <footer className="border-t border-gray-100 bg-white text-gray-600">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            {/* Left Column: Logo & Newsletter */}
            <div className="md:col-span-5">
              <Link href="/" className="inline-flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#c8ff00] font-black text-black text-sm">
                  b
                </div>
                <span className="text-lg font-bold text-gray-900">
                  ByteSpace
                </span>
              </Link>

              <p className="mt-3 max-w-xs text-xs text-gray-500 leading-relaxed">
                Stay Up to date with our latest features and releases by joining
                our newsletter.
              </p>

              {/* Newsletter Form */}
              <div className="mt-4 flex items-center gap-2 max-w-sm">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-full border border-gray-200 bg-white px-4 py-2.5 text-xs text-gray-900 outline-none focus:border-gray-400"
                />
                <button
                  type="button"
                  className="rounded-full bg-[#c8ff00] px-6 py-2.5 text-xs font-bold text-black transition hover:bg-[#b5e600]"
                >
                  Search
                </button>
              </div>

              <p className="mt-3 text-[10px] text-gray-400">
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates from our company.
              </p>
            </div>

            {/* Right Links Columns */}
            <div className="md:col-span-7 grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div>
                <h4 className="text-xs font-semibold text-gray-900">
                  Featured Courses
                </h4>
                <ul className="mt-3 space-y-2 text-[11px] text-gray-500">
                  <li>
                    <Link href="#" className="hover:text-gray-900 transition">
                      Featured Categories
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-gray-900 transition">
                      Business
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-gray-900 transition">
                      IT
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-gray-900 transition">
                      Design
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-gray-900">
                  Development
                </h4>
                <ul className="mt-3 space-y-2 text-[11px] text-gray-500">
                  <li>
                    <Link href="#" className="hover:text-gray-900 transition">
                      Marketing
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-gray-900 transition">
                      Photography
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-gray-900 transition">
                      Finance
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-gray-900 transition">
                      Sport
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-gray-900">
                  Become a Creator
                </h4>
                <ul className="mt-3 space-y-2 text-[11px] text-gray-500">
                  <li>
                    <Link href="#" className="hover:text-gray-900 transition">
                      Affiliate Program
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-gray-900 transition">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-gray-900 transition">
                      Help
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-gray-900 transition">
                      About
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Copyright Row */}
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-6 text-[10px] text-gray-400 sm:flex-row">
            <p>@ 2026 ByteSpace. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="hover:underline">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:underline">
                Terms of Service
              </Link>
              <Link href="#" className="hover:underline">
                Cookies Settings
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
