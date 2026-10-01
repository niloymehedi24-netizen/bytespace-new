"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Star } from "lucide-react";
import Image from "next/image";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Form submitted:", formData);
  };

  return (
    <div className="relative min-h-screen w-full bg-[#123fe5] text-white flex flex-col justify-between overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-size-[60px_60px] pointer-events-none" />

      {/* Top Logo Bar */}
      <div className="relative z-10 px-8 pt-8 lg:px-16">
        <Link href="/" className="inline-flex items-center gap-2">
          {/* ByteSpace Logo */}
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#c8ff00] font-black text-black text-lg">
            b
          </div>
        </Link>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 my-auto mx-auto w-full max-w-7xl px-6 py-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Heading, Subtitle & Course Preview Graphics */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Sign up and come in
            </h1>
            <p className="mt-4 max-w-lg text-xs sm:text-sm text-blue-100/90 leading-relaxed font-normal">
              The registration process is straightforward, uncomplicated, and
              efficient, allowing users to sign up quickly, easily, and at no
              cost.
            </p>

            {/* Decorative Graphic Stack */}
            <div className="relative mt-12 w-full max-w-md">
              {/* Floating Lime Torus Ring - Top Left */}
              <div className="absolute -top-8 -left-6 z-20 h-20 w-20 rounded-full bg-[#c8ff00] p-4 shadow-xl flex items-center justify-center rotate-[-15deg]">
                <div className="h-8 w-8 rounded-full bg-[#123fe5]" />
              </div>

              {/* Background Stacked Card (Build Digital...) */}
              <div className="absolute -top-6 left-4 right-4 rounded-2xl bg-white/90 p-4 text-black shadow-lg backdrop-blur-md opacity-80 scale-95">
                <p className="text-xs font-bold text-gray-800">
                  Build Digital...
                </p>
                <p className="text-[10px] text-gray-500">
                  by purepearl studio &bull; $25/lifetime
                </p>
              </div>

              {/* Foreground Main Preview Card */}
              <div className="relative z-10 rounded-2xl bg-white p-5 text-gray-900 shadow-2xl">
                {/* Mock Dashboard Banner Image */}
                <div className="relative h-36 w-full overflow-hidden rounded-xl bg-slate-900 p-3">
                  <div className="flex items-center justify-between text-[9px] text-gray-400">
                    <span>USERS LAST 7 DAYS VS PREVIOUS</span>
                    <span className="flex gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
                    </span>
                  </div>
                  {/* Mock Chart Visualization */}
                  <div className="mt-3 flex h-20 items-end justify-between gap-1 px-2">
                    <div className="h-[40%] w-full rounded-t bg-cyan-500/80" />
                    <div className="h-[70%] w-full rounded-t bg-cyan-400" />
                    <div className="h-[90%] w-full rounded-t bg-cyan-300" />
                    <div className="h-[50%] w-full rounded-t bg-cyan-500/60" />
                    <div className="h-[30%] w-full rounded-t bg-cyan-600/40" />
                  </div>
                  {/* Floating Chips on Image */}
                  <div className="absolute bottom-2 left-2 flex gap-1.5 text-[9px] text-white">
                    <span className="rounded-full bg-white/20 px-2 py-0.5 backdrop-blur-sm">
                      17 Lessons
                    </span>
                    <span className="rounded-full bg-white/20 px-2 py-0.5 backdrop-blur-sm">
                      2 hours 16 mins
                    </span>
                    <span className="rounded-full bg-white/20 px-2 py-0.5 backdrop-blur-sm">
                      59 Comments
                    </span>
                  </div>
                </div>

                {/* Course Meta Info */}
                <div className="mt-4 flex items-center justify-between">
                  <h3 className="text-sm sm:text-base font-bold text-gray-900">
                    the Power of Big Data
                  </h3>
                  <div className="flex items-center gap-1 text-xs font-bold text-gray-800">
                    <span>4.5</span>
                    <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  </div>
                </div>

                <p className="text-[11px] font-medium text-gray-400 mt-0.5">
                  by purepearl studio
                </p>

                <div className="mt-3 flex items-center justify-between border-t border-gray-100 pt-3 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="rounded-md bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-gray-600">
                      Beginner
                    </span>
                    {/* Avatars */}
                    <div className="flex -space-x-1.5">
                      <Image
                        className="h-5 w-5 rounded-full border border-white"
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80"
                        width={28}
                        height={28}
                        alt="avatar"
                      />
                      <Image
                        className="h-5 w-5 rounded-full border border-white"
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80"
                        width={28}
                        height={28}
                        alt="avatar"
                      />
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-[8px] font-bold text-white">
                        26+
                      </div>
                    </div>
                  </div>
                  <span className="font-bold text-gray-900">
                    $25
                    <span className="text-[10px] font-normal text-gray-400">
                      /lifetime
                    </span>
                  </span>
                </div>
              </div>

              {/* Floating White Squiggle Shape - Mid Right */}
              <div className="absolute -right-8 bottom-12 z-20 h-16 w-16 text-white rotate-12 pointer-events-none drop-shadow-lg">
                <svg
                  viewBox="0 0 80 120"
                  className="w-full h-full fill-none stroke-current stroke-16 stroke-linecap-round"
                >
                  <path d="M 15 15 Q 65 30 25 55 T 65 95" />
                </svg>
              </div>

              {/* Floating Lime Happy Students Card - Bottom */}
              <div className="absolute -bottom-10 right-4 z-20 rounded-2xl bg-[#c8ff00] p-3.5 text-black shadow-xl border border-lime-300">
                <div className="text-[11px] font-bold">Happy Students</div>
                <div className="text-[10px] font-semibold text-gray-800">
                  4.5 (240) ★
                </div>
                <div className="mt-1.5 flex items-center -space-x-1.5">
                  <Image
                    className="h-5 w-5 rounded-full border border-white object-cover"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&auto=format&fit=crop&q=80"
                    alt="student"
                    width={28}
                    height={28}
                  />
                  <Image
                    className="h-5 w-5 rounded-full border border-white object-cover"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=80"
                    alt="student"
                    width={28}
                    height={28}
                  />
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-[8px] font-bold text-white">
                    2K+
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Register Form Card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-lg rounded-4xl bg-white p-8 sm:p-12 text-gray-900 shadow-2xl">
              <span className="text-xs font-semibold text-gray-500">
                Create an Account
              </span>
              <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                Welcome to ByteSpace
              </h2>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jamie Davis"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-xs sm:text-sm text-gray-900 outline-none transition placeholder:text-gray-300 focus:border-gray-400 focus:ring-0"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="designer@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-xs sm:text-sm text-gray-900 outline-none transition placeholder:text-gray-300 focus:border-gray-400 focus:ring-0"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1.5">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    placeholder="********"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-xs sm:text-sm text-gray-900 outline-none transition placeholder:text-gray-300 focus:border-gray-400 focus:ring-0"
                  />
                </div>

                {/* Continue Button (Right Aligned) */}
                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    className="rounded-full bg-[#c8ff00] px-8 py-2.5 text-xs sm:text-sm font-bold text-black transition hover:bg-[#b5e600] shadow-sm"
                  >
                    Continue
                  </button>
                </div>
              </form>

              {/* Login Link */}
              <p className="mt-16 text-center text-xs text-gray-500 font-medium">
                Already have an account?
                <Link href="/login" className="text-blue-600 hover:underline">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for bottom alignment */}
      <div className="pb-8" />
    </div>
  );
}
