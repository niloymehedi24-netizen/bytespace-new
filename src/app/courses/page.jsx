"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Search,
  SlidersHorizontal,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Star,
  ShoppingBag,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";

// Mock Course Data
const coursesData = [
  {
    id: 1,
    title: "Learn Figma from Basic",
    instructor: "by purepearl studio",
    rating: "4.5",
    level: "Beginner",
    price: "$25",
    period: "/lifetime",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    image:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    title: "Build Digital Asset",
    instructor: "by purepearl studio",
    rating: "4.8",
    level: "Beginner",
    price: "$25",
    period: "/lifetime",
    lessons: "12 Lessons",
    duration: "3 hours 10 mins",
    comments: "42 Comments",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    title: "the Power of Big Data",
    instructor: "by purepearl studio",
    rating: "4.5",
    level: "Beginner",
    price: "$25",
    period: "/lifetime",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    title: "Balancing Productivity an...",
    instructor: "by purepearl studio",
    rating: "4.7",
    level: "Beginner",
    price: "$25",
    period: "/lifetime",
    lessons: "15 Lessons",
    duration: "1 hour 45 mins",
    comments: "30 Comments",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    title: "Mastering Money Manage...",
    instructor: "by purepearl studio",
    rating: "4.9",
    level: "Beginner",
    price: "$25",
    period: "/lifetime",
    lessons: "20 Lessons",
    duration: "4 hours 00 mins",
    comments: "88 Comments",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    title: "From Idea to Startup Succ...",
    instructor: "by purepearl studio",
    rating: "4.6",
    level: "Beginner",
    price: "$25",
    period: "/lifetime",
    lessons: "22 Lessons",
    duration: "5 hours 15 mins",
    comments: "64 Comments",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80",
  },
];

const categories = [
  "Featured",
  "Design",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
];

export default function CoursesSearchPage() {
  const [activeCategory, setActiveCategory] = useState("Featured");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState(1);

  // Duplicate dataset to render multiple grid sections as shown in screenshot
  const allCourses = [...coursesData, ...coursesData, ...coursesData];

  return (
    <div className="min-h-screen bg-slate-50 text-gray-900 font-sans">
      {/* HEADER & SEARCH HERO */}
      <div className="relative bg-[#123fe5] text-white pb-16 pt-4">
        {/* Grid lines background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-size-[60px_60px] pointer-events-none" />

        {/* Navbar */}
        <header className="relative z-10 mx-auto max-w-7xl px-6">
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
              <Link href="/" className="hover:text-[#c8ff00]">
                Home
              </Link>
              <Link href="/courses" className="text-[#c8ff00] font-semibold">
                Courses
              </Link>
              <Link href="/creators" className="hover:text-[#c8ff00]">
                Creators
              </Link>
            </div>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-6 text-xs font-medium text-white/90">
              <Link href="/login" className="hover:text-[#c8ff00]">
                Sign In
              </Link>
              <Link href="/register" className="hover:text-[#c8ff00]">
                Join Us
              </Link>
              <button type="button" aria-label="Cart">
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

        {/* Search Hero Content */}
        <div className="relative z-10 mx-auto mt-12 max-w-3xl px-6 text-center">
          <h1 className="text-3xl font-extrabold sm:text-4xl text-white tracking-tight">
            Find Your Next Course
          </h1>

          {/* Search Bar Input */}
          <div className="mt-6 flex items-center rounded-full bg-white p-1.5 shadow-xl max-w-2xl mx-auto">
            <div className="pl-4 text-gray-400">
              <Search size={18} />
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-transparent px-3 py-2 text-xs sm:text-sm text-gray-800 placeholder-gray-400 outline-none"
            />
            <button
              type="button"
              className="flex items-center gap-1 rounded-full bg-[#c8ff00] px-5 py-2 text-xs font-bold text-black transition hover:bg-[#b5e600]"
            >
              Courses
              <ChevronDown size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* FILTER & CATEGORY TOOLBAR */}
      <div className="border-b border-gray-200 bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-6 py-4">
          {/* Top Dropdown Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-1.5 rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50">
                <SlidersHorizontal size={13} />
                Filter
              </button>
              <button className="flex items-center gap-1.5 rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50">
                Level
                <ChevronDown size={13} />
              </button>
              <button className="flex items-center gap-1.5 rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50">
                Category
                <ChevronDown size={13} />
              </button>
            </div>

            <button className="flex items-center gap-1.5 text-xs font-medium text-gray-600 hover:text-gray-900">
              Most relevant
              <ChevronDown size={13} />
            </button>
          </div>

          {/* Category Pill Tags */}
          <div className="mt-4 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                    isActive
                      ? "bg-[#c8ff00] text-black shadow-sm"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* COURSES GRID CONTAINER */}
      <main className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {allCourses.map((course, idx) => (
            <div
              key={`${course.id}-${idx}`}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-sm transition hover:shadow-md"
            >
              {/* Course Image Banner */}
              <div className="relative h-44 w-full overflow-hidden bg-gray-100">
                <Image
                  src={course.image}
                  alt={course.title}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  fill
                />
                {/* Overlay Floating Tags */}
                <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5 text-[9px] font-medium text-white">
                  <span className="rounded-full bg-black/60 px-2.5 py-1 backdrop-blur-md">
                    {course.lessons}
                  </span>
                  <span className="rounded-full bg-black/60 px-2.5 py-1 backdrop-blur-md">
                    {course.duration}
                  </span>
                  <span className="rounded-full bg-black/60 px-2.5 py-1 backdrop-blur-md">
                    {course.comments}
                  </span>
                </div>
              </div>

              {/* Course Info */}
              <div className="flex flex-1 flex-col justify-between p-4">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition">
                      {course.title}
                    </h3>
                    <div className="flex items-center gap-1 text-xs font-bold text-gray-800">
                      <span>{course.rating}</span>
                      <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    </div>
                  </div>
                  <p className="mt-1 text-[11px] font-medium text-gray-400">
                    {course.instructor}
                  </p>
                </div>

                {/* Footer details */}
                <div className="mt-4 border-t border-gray-100 pt-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="rounded-md bg-gray-100 px-2 py-0.5 text-[10px] font-semibold text-gray-600">
                        {course.level}
                      </span>
                      {/* Avatars */}
                      <div className="flex -space-x-1.5">
                        <Image
                          className="h-5 w-5 rounded-full border border-white"
                          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80"
                          alt="avatar"
                          width={28}
                          height={28}
                        />
                        <Image
                          className="h-5 w-5 rounded-full border border-white"
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80"
                          alt="avatar"
                          width={28}
                          height={28}
                        />
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-[8px] font-bold text-white">
                          26+
                        </div>
                      </div>
                    </div>

                    <p className="text-xs font-bold text-gray-900">
                      {course.price}
                      <span className="text-[10px] font-normal text-gray-400">
                        {course.period}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* PAGINATION */}
        <div className="mt-12 flex items-center justify-center gap-2 text-xs font-medium text-gray-600">
          <button
            onClick={() => setActivePage(Math.max(1, activePage - 1))}
            className="p-1 text-gray-400 hover:text-gray-900"
            aria-label="Previous page"
          >
            <ChevronLeft size={16} />
          </button>
          {[1, 2, 3, 4, 5].map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => setActivePage(pageNum)}
              className={`h-7 w-7 rounded-md flex items-center justify-center transition ${
                activePage === pageNum
                  ? "bg-gray-900 text-white font-bold"
                  : "hover:bg-gray-200 text-gray-600"
              }`}
            >
              {pageNum}
            </button>
          ))}
          <button
            onClick={() => setActivePage(Math.min(5, activePage + 1))}
            className="p-1 text-gray-400 hover:text-gray-900"
            aria-label="Next page"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="mt-20 border-t border-gray-200 bg-white text-gray-600">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            {/* Left: Logo & Newsletter */}
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
                Stay up to date with our latest news and resources by joining
                our newsletter.
              </p>

              {/* Newsletter Form */}
              <div className="mt-4 flex items-center gap-2 max-w-sm">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2 text-xs text-gray-900 outline-none focus:border-gray-400"
                />
                <button
                  type="button"
                  className="rounded-xl bg-[#c8ff00] px-5 py-2 text-xs font-bold text-black transition hover:bg-[#b5e600]"
                >
                  Search
                </button>
              </div>

              <p className="mt-3 text-[10px] text-gray-400">
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates.
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
                    <Link href="#" className="hover:text-gray-900">
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-gray-900">
                      Business
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-gray-900">
                      IT
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-gray-900">
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
                    <Link href="#" className="hover:text-gray-900">
                      Marketing
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-gray-900">
                      Photography
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-gray-900">
                      Finance
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-gray-900">
                      Music
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
                    <Link href="#" className="hover:text-gray-900">
                      Affiliate Program
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-gray-900">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-gray-900">
                      Help
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-gray-900">
                      About
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Copyright & Terms */}
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-6 text-[10px] text-gray-400 sm:flex-row">
            <p>&copy; 2026 ByteSpace. All rights reserved.</p>
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
