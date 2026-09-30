import React from "react";
import { BarChart, Check, Star } from "lucide-react";
import Container from "../common/Container";
import Image from "next/image";

export default function GrowthAndManagement() {
  return (
    <section className="overflow-hidden bg-[#fafbfc] py-16 sm:py-24">
      <Container className="space-y-24 sm:space-y-32">
        {/* Path to Professional Growth */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Text Content */}
          <div>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="mt-6 text-xs leading-relaxed text-gray-600 sm:text-sm">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>

            {/* Stats Row */}
            <div className="mt-10 flex items-center gap-10 sm:gap-14">
              <div>
                <p className="text-3xl font-extrabold text-[#123fe5] sm:text-4xl">
                  12K
                </p>
                <p className="mt-1 text-xs font-medium text-gray-500 sm:text-sm">
                  Students
                </p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-[#123fe5] sm:text-4xl">
                  70+
                </p>
                <p className="mt-1 text-xs font-medium text-gray-500 sm:text-sm">
                  Courses
                </p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-[#123fe5] sm:text-4xl">
                  16
                </p>
                <p className="mt-1 text-xs font-medium text-gray-500 sm:text-sm">
                  Creators
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual Graphic */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            {/* Soft Green Glow Backdrop */}
            <div className="absolute -top-10 -right-10 h-72 w-72 rounded-full bg-[#c8ff00]/25 blur-3xl" />

            <div className="relative flex min-h-95 items-center justify-center sm:min-h-110">
              {/* Floating Course Card (Left) */}
              <div className="absolute top-0 left-0 z-0 w-48 rounded-2xl border border-gray-100 bg-white p-3 shadow-xl sm:w-56">
                <Image
                  src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400&auto=format&fit=crop&q=80"
                  alt="Figma course"
                  width={40}
                  height={35}
                  className="h-24 w-full rounded-xl object-cover"
                />
                <p className="mt-2 text-xs font-bold text-gray-900">
                  Learn Figma fro...
                </p>
                <p className="text-[10px] text-gray-400">by purepearl studio</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="flex items-center gap-1 rounded-full bg-gray-100 px-2.5 py-1 text-[11px] font-medium text-gray-600">
                    <BarChart size={12} className="text-gray-500" />
                    Beginner
                  </span>
                  <span className="text-xs font-bold text-[#123fe5]">
                    $25
                    <span className="text-[9px] text-gray-400">/lifetime</span>
                  </span>
                </div>
              </div>

              {/* Floating Progress Card (Right) */}
              <div className="absolute top-12 right-0 z-20 w-40 rounded-2xl border border-gray-100 bg-white p-3.5 shadow-xl sm:w-44">
                <p className="text-[10px] font-medium text-gray-500">
                  Learning Progress
                </p>
                <p className="mt-1 text-2xl font-extrabold text-gray-900">
                  55%
                </p>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
                  <div className="h-full w-[55%] rounded-full bg-[#c8ff00]" />
                </div>
              </div>

              {/* Central Student Image */}
              <div className="relative z-10 mt-10 h-85 w-70 sm:h-100 sm:w-[320px]">
                <Image
                  src={"/images/growth.png"}
                  alt="Student"
                  width={600}
                  height={800}
                  className="h-full w-full object-contain drop-shadow-xl"
                />
              </div>

              {/* Lime Squiggle Accent */}
              <svg
                className="absolute right-0 top-1/3 z-0 h-20 w-12 text-[#c8ff00] fill-current"
                viewBox="0 0 24 48"
              >
                <path
                  d="M12 0 C 20 6, 20 12, 12 18 C 4 24, 4 30, 12 36 C 20 42, 20 48, 12 54"
                  stroke="currentColor"
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Create & Manage Courses */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Visual Graphic */}
          <div className="relative mx-auto w-full max-w-lg lg:order-1 lg:max-w-none">
            {/* Soft Blue Glow Backdrop */}
            <div className="absolute -bottom-10 -left-10 h-72 w-72 rounded-full bg-[#123fe5]/15 blur-3xl" />

            <div className="relative flex min-h-95 items-center justify-center sm:min-h-110">
              {/* Badge 1 */}
              <div className="absolute top-4 left-0 z-20 min-w-35 rounded-2xl bg-[#123fe5] p-3 text-white shadow-xl sm:min-w-37 sm:p-3.5">
                <p className="text-[10px] text-white/80">Total Revenue</p>
                <p className="text-[9px] text-white/60">July 1-28</p>
                <p className="mt-1 text-base font-extrabold sm:text-lg">
                  $120.29
                </p>
              </div>

              {/* Badge 2 */}
              <div className="absolute top-28 left-0 z-20 min-w-37 rounded-2xl bg-[#123fe5] p-3 text-white shadow-xl sm:min-w-40 sm:p-3.5">
                <p className="text-[10px] text-white/80">Year to Date</p>
                <p className="text-[9px] text-white/60">2023</p>
                <div className="mt-1 flex items-center gap-1.5">
                  <p className="text-base font-extrabold sm:text-lg">
                    $1,200.38
                  </p>
                  <span className="rounded-full bg-[#c8ff00] px-1.5 py-0.5 text-[8px] font-extrabold text-black">
                    +12$
                  </span>
                </div>
              </div>

              {/* Central Creator Image */}
              <div className="relative z-10 h-85 w-70 sm:h-100 sm:w-80">
                <Image
                  src={"/images/manage.png"}
                  alt="Creator student"
                  width={600}
                  height={800}
                  className="h-full w-full object-contain drop-shadow-xl"
                />
              </div>

              {/* Bottom Happy Students Card */}
              <div className="absolute bottom-2 right-2 z-20 rounded-2xl border border-gray-100 bg-white p-3 shadow-xl sm:right-6 sm:p-3.5">
                <p className="text-xs font-bold text-gray-900">
                  Happy Students
                </p>
                <div className="mt-0.5 flex items-center gap-1 text-[10px] font-semibold text-gray-600">
                  <span>4.5</span>
                  <span className="text-gray-400">(240)</span>
                  <Star size={10} className="fill-yellow-400 text-yellow-400" />
                </div>
                <div className="mt-2 flex items-center -space-x-1.5">
                  <Image
                    className="h-5 w-5 rounded-full border border-white object-cover"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                    alt="avatar"
                    width={7}
                    height={7}
                  />
                  <Image
                    className="h-5 w-5 rounded-full border border-white object-cover"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                    alt="avatar"
                    width={7}
                    height={7}
                  />
                  <Image
                    className="h-5 w-5 rounded-full border border-white object-cover"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
                    alt="avatar"
                    width={7}
                    height={7}
                  />
                  <div className="flex h-5 w-5 items-center justify-center rounded-full border border-white bg-[#c8ff00] text-[8px] font-extrabold text-black">
                    2K+
                  </div>
                </div>
              </div>

              {/* Lime Squiggle Accent */}
              <svg
                className="absolute right-10 top-1/3 z-0 h-20 w-12 text-[#c8ff00] fill-current"
                viewBox="0 0 24 48"
              >
                <path
                  d="M12 0 C 20 6, 20 12, 12 18 C 4 24, 4 30, 12 36 C 20 42, 20 48, 12 54"
                  stroke="currentColor"
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:order-2">
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Create & Manage <br /> Courses Easily.
            </h2>
            <p className="mt-4 text-xs leading-relaxed text-gray-600 sm:text-sm">
              <span className="font-extrabold">ByteSpace</span> supports
              individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>

            {/* Feature Checklist */}
            <div className="mt-8 space-y-4">
              {[
                "Share Your Expertise",
                "Monetize Your Passion",
                "Flexibility and Autonomy",
                "Build a Community",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#123fe5] text-white">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span className="text-sm font-bold text-gray-900">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
