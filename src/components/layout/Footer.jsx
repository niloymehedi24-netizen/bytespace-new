"use client";

import React from "react";
import Container from "../common/Container";

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-12 border-t border-gray-100">
      <Container>
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Logo & Newsletter */}
          <div className="lg:col-span-6 max-w-md">
            {/* ByteSpace Logo */}
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#c8ff00]">
                <svg className="h-5 w-5 fill-black" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="text-2xl font-black tracking-tight text-gray-900">
                ByteSpace
              </span>
            </div>

            {/* Newsletter Text */}
            <p className="mt-6 text-xs text-gray-600 sm:text-sm">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            {/* Newsletter Form */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 flex items-center gap-3"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-full border border-gray-300 px-5 py-3 text-xs text-gray-800 outline-none placeholder:text-gray-400 focus:border-gray-400 sm:text-sm"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-[#c8ff00] px-8 py-3 text-xs font-bold text-black transition hover:bg-[#b8eb00] sm:text-sm"
              >
                Search
              </button>
            </form>

            {/* Disclaimer */}
            <p className="mt-3 text-[10px] text-gray-400 sm:text-xs">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          {/* Right Column: Navigation Links Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:pl-6">
            {/* Column 1 */}
            <div className="space-y-4 text-xs font-medium text-gray-700 sm:text-sm">
              <div>
                <a href="#" className="hover:text-black transition">
                  Featured Courses
                </a>
              </div>
              <div>
                <a href="#" className="hover:text-black transition">
                  Featured Categories
                </a>
              </div>
              <div>
                <a href="#" className="hover:text-black transition">
                  Business
                </a>
              </div>
              <div>
                <a href="#" className="hover:text-black transition">
                  IT
                </a>
              </div>
              <div>
                <a href="#" className="hover:text-black transition">
                  Design
                </a>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-4 text-xs font-medium text-gray-700 sm:text-sm">
              <div>
                <a href="#" className="hover:text-black transition">
                  Development
                </a>
              </div>
              <div>
                <a href="#" className="hover:text-black transition">
                  Marketing
                </a>
              </div>
              <div>
                <a href="#" className="hover:text-black transition">
                  Photography
                </a>
              </div>
              <div>
                <a href="#" className="hover:text-black transition">
                  Finance
                </a>
              </div>
              <div>
                <a href="#" className="hover:text-black transition">
                  Sport
                </a>
              </div>
            </div>

            {/* Column 3 */}
            <div className="space-y-4 text-xs font-medium text-gray-700 sm:text-sm col-span-2 sm:col-span-1">
              <div>
                <a href="#" className="hover:text-black transition">
                  Become a Creator
                </a>
              </div>
              <div>
                <a href="#" className="hover:text-black transition">
                  Affiliate Program
                </a>
              </div>
              <div>
                <a href="#" className="hover:text-black transition">
                  Contact
                </a>
              </div>
              <div>
                <a href="#" className="hover:text-black transition">
                  Help
                </a>
              </div>
              <div>
                <a href="#" className="hover:text-black transition">
                  About
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="my-10 border-t border-gray-200" />

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row text-xs text-gray-600">
          <p>@ 2023 ByteSpace. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-black transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-black transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-black transition">
              Cookies Settings
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
