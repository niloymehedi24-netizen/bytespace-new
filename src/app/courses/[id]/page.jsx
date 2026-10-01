"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Share2,
  Star,
  Users,
  BarChart2,
  Play,
  CheckCircle2,
  FileText,
  Video,
  Award,
  MessageCircle,
  ShoppingBag,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";

export default function CourseDetailsPage() {
  const [activeTab, setActiveTab] = useState("About");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const lessonsPreview = [
    { id: "01", title: "Introduction to Digital Assets", duration: "12 mins" },
    { id: "02", title: "Design Principles for Impacts", duration: "21 mins" },
    {
      id: "03",
      title: "Advanced Techniques in Digital Creation",
      duration: "16 mins",
    },
  ];

  const keyPoints = [
    "Foundational Concepts",
    "Design Principles Mastery",
    "Advanced Techniques in Digital Creation",
    "Project Showcase and Critique",
    "Optimizing for Various Platforms",
    "Digital Asset Management Best Practices",
    "Monetization Strategies",
    "Capstone Project: Building Your Portfolio",
  ];

  const sneakPeekImages = [
    "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=400&auto=format&fit=crop&q=80",
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* HEADER HERO SECTION */}
      <div className="relative bg-[#123fe5] text-white pt-4 pb-28">
        {/* Background Grid Pattern Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-size-[60px_60px] pointer-events-none" />

        {/* Top Navigation */}
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

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </header>

        {/* Course Header Meta Details */}
        <div className="relative z-10 mx-auto mt-8 max-w-7xl px-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <h1 className="text-2xl font-extrabold sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
                Build Digital Asset: A Comprehensive Guide
              </h1>
              <p className="mt-2 text-xs sm:text-sm text-blue-100 font-normal">
                Unlock the Power of Digital Creation with Expert Guidance
              </p>
              <p className="mt-1 text-xs text-blue-200/80">
                by purepearl studio
              </p>

              {/* Badges Row */}
              <div className="mt-4 flex flex-wrap items-center gap-3 text-xs font-medium">
                <div className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 backdrop-blur-md">
                  <BarChart2 size={14} />
                  <span>Intermediate</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 backdrop-blur-md">
                  <Star size={14} className="fill-amber-400 text-amber-400" />
                  <span>4.8 (172 reviews)</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 backdrop-blur-md">
                  <Users size={14} />
                  <span>199 Students</span>
                </div>
              </div>
            </div>

            {/* Share Button */}
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full bg-[#c8ff00] px-5 py-2 text-xs font-bold text-black transition hover:bg-[#b5e600] self-start"
            >
              <Share2 size={14} />
              Share
            </button>
          </div>

          {/* Hero Video Player Box */}
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="relative h-72 sm:h-100 w-full overflow-hidden rounded-2xl bg-gray-200 shadow-2xl border border-white/20">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1000&auto=format&fit=crop&q=80"
                  alt="Course video thumbnail"
                  className="h-full w-full object-cover"
                  fill
                />
                {/* Overlay Play Button */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <button
                    type="button"
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-[#123fe5] shadow-2xl transition hover:scale-110"
                    aria-label="Play course preview"
                  >
                    <Play size={28} className="fill-current ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT LAYOUT */}
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* LEFT MAIN DETAILS (Col 8) */}
          <div className="lg:col-span-8 pt-8 pb-16">
            {/* Navigation Tabs */}
            <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
              {["About", "Lessons", "Reviews..."].map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`rounded-full px-5 py-2 text-xs font-semibold transition ${
                      isActive
                        ? "bg-[#c8ff00] text-black shadow-sm"
                        : "text-gray-500 hover:text-gray-900"
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>

            {/* Description Section */}
            <div className="mt-8 space-y-4">
              <h2 className="text-base font-bold text-gray-900">Description</h2>

              <p className="text-xs text-gray-600 leading-relaxed">
                Embark on an enlightening exploration into the world of digital
                creation with our comprehensive course, &quot;Build Digital
                Asset: A Comprehensive Guide.&quot; This transformative learning
                experience invites you to delve deep into the intricacies of
                crafting impactful digital content. From laying the groundwork
                with foundational concepts to mastering advanced techniques,
                this guide is meticulously curated to empower you with the
                skills essential for navigating the dynamic landscape of digital
                asset creation.
              </p>

              <p className="text-xs text-gray-600 leading-relaxed">
                In the initial modules, you&apos;ll establish a solid foundation
                by immersing yourself in the foundational concepts that form the
                backbone of digital asset creation. Understand the fundamental
                elements that constitute compelling digital content and gain
                proficiency in leveraging these elements to communicate
                effectively in the digital realm.
              </p>

              <p className="text-xs text-gray-600 leading-relaxed">
                As you progress through the course, you&apos;ll ascend to higher
                levels of expertise, delving into the nuances of design
                principles that drive impactful creations. Uncover the secrets
                behind effective visual communication, exploring color theory,
                typography, and layout strategies that elevate your digital
                assets to new heights. Engage in hands-on exercises that
                reinforce your understanding, allowing you to apply these
                principles in practical scenarios.
              </p>
            </div>

            {/* Sneak Peak Section */}
            <div className="mt-10">
              <h2 className="text-base font-bold text-gray-900 mb-4">
                Sneak Peak
              </h2>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
                {sneakPeekImages.map((src, i) => (
                  <div
                    key={i}
                    className="h-24 w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-sm"
                  >
                    <Image
                      src={src}
                      alt="Sneak peak thumbnail"
                      className="h-full w-full object-cover hover:scale-105 transition"
                      fill
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Key Points Section */}
            <div className="mt-10">
              <h2 className="text-base font-bold text-gray-900 mb-4">
                Key Points
              </h2>
              <ul className="space-y-3">
                {keyPoints.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-xs text-gray-700 font-medium"
                  >
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#123fe5] text-white">
                      <CheckCircle2 size={12} />
                    </div>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT SIDEBAR - Floating / Overlapping Hero (Col 4) */}
          <div className="lg:col-span-4 lg:-mt-85 z-20 mb-12">
            <div className="sticky top-6 rounded-[28px] bg-white p-6 shadow-2xl border border-gray-100 text-gray-900">
              {/* Lessons Overview Header */}
              <h3 className="text-sm font-bold text-gray-900">
                112 Lessons (24 hours)
              </h3>

              {/* Lesson Items */}
              <div className="mt-4 space-y-3">
                {lessonsPreview.map((lesson) => (
                  <div
                    key={lesson.id}
                    className="flex items-center justify-between text-xs py-1 border-b border-gray-50 last:border-none"
                  >
                    <div className="flex items-center gap-2 pr-2">
                      <span className="font-bold text-gray-400">
                        {lesson.id}
                      </span>
                      <span className="text-gray-700 font-medium line-clamp-1">
                        {lesson.title}
                      </span>
                    </div>
                    <span className="text-[11px] text-gray-400 whitespace-nowrap">
                      {lesson.duration}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-3 text-[11px] font-medium text-gray-400">
                99 more videos
              </p>

              <p className="mt-6 text-xs text-gray-600 leading-relaxed font-normal">
                Ready to Dive In? Enroll Now and Start Building Your Digital
                Future!
              </p>

              {/* Price & CTA */}
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-2xl font-extrabold text-gray-900">
                  $25
                </span>
                <span className="text-xs text-gray-400 font-medium">
                  /lifetime
                </span>
              </div>

              <button
                type="button"
                className="mt-4 w-full rounded-full bg-[#c8ff00] py-3 text-xs font-bold text-black shadow-sm transition hover:bg-[#b5e600]"
              >
                Enroll Now
              </button>

              {/* Course Includes Checklist */}
              <div className="mt-8 border-t border-gray-100 pt-6">
                <h4 className="text-xs font-bold text-gray-900 mb-3">
                  This course include
                </h4>
                <ul className="space-y-2.5 text-xs text-gray-600">
                  <li className="flex items-center gap-2.5">
                    <FileText size={15} className="text-gray-500" />
                    <span>Learning Resources</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Video size={15} className="text-gray-500" />
                    <span>Quality Lesson Videos</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Award size={15} className="text-gray-500" />
                    <span>Certificate of Completion</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <MessageCircle size={15} className="text-gray-500" />
                    <span>Private Consultation</span>
                  </li>
                </ul>
              </div>

              {/* Instructor Card */}
              <div className="mt-8 rounded-2xl bg-gray-50 p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <Image
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                    alt="PurePearl Studio"
                    className="h-10 w-10 rounded-full object-cover"
                    width={40}
                    height={40}
                  />
                  <div>
                    <h5 className="text-xs font-bold text-gray-900">
                      PurePearl Studio
                    </h5>
                    <p className="text-[10px] text-gray-400">
                      Professional Creator
                    </p>
                  </div>
                </div>

                <p className="mt-3 text-[11px] text-gray-500 leading-normal">
                  Ready to Dive In? Enroll Now and Start Building Your Digital
                  Future!
                </p>

                <button
                  type="button"
                  className="mt-3 text-[11px] font-bold text-gray-800 hover:text-blue-600 transition"
                >
                  See Full Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 bg-white text-gray-600">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            {/* Left Column */}
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
                Stay up to date with our latest features and releases by joining
                our newsletter.
              </p>

              {/* Newsletter */}
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

            {/* Links Columns */}
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

          {/* Copyright */}
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
