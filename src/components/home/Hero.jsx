import { Search, Star } from "lucide-react";
import Container from "../common/Container";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-160 overflow-hidden bg-[#123fe5]">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.09)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.09)_1px,transparent_1px)] bg-size-[80px_80px]" />

      {/* Decorative lime shape - left */}
      <div className="absolute -left-8 top-44 hidden h-28 w-20 rotate-20 rounded-[35%] bg-[#c8ff00] lg:block" />

      <div className="absolute -left-3 top-48 hidden h-24 w-12 rotate-[-10deg] rounded-[40%] bg-[#c8ff00] lg:block" />

      {/* Decorative lime shape - right */}
      <div className="absolute -right-10 top-36 hidden h-36 w-24 rotate-25 rounded-[35%] bg-[#c8ff00] lg:block" />

      {/* White triangle */}
      <div className="absolute right-[16%] top-58 hidden h-0 w-0 border-b-45 border-l-25 border-r-25 border-b-white border-l-transparent border-r-transparent lg:block" />

      {/* White ring */}
      <div className="absolute left-[8%] top-88 hidden h-20 w-20 rounded-full border-18 border-white lg:block" />

      <Container className="relative z-10">
        {/* Hero content */}
        <div className="flex flex-col items-center pt-30 text-center">
          <h1 className="max-w-155 text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl lg:text-[52px]">
            Get Access to Hundreds
            <br />
            Courses Available
          </h1>

          <p className="mt-5 max-w-129 text-[11px] leading-5 text-white/70 sm:text-xs">
            Unlock a world of knowledge and skills with our comprehensive
            collection of courses designed to help you learn, grow, and succeed.
          </p>

          {/* Search */}
          <div className="mt-7 flex w-full max-w-107 items-center gap-2">
            <div className="flex h-10 flex-1 items-center rounded-full bg-white px-4">
              <Search
                size={14}
                className="mr-2 shrink-0 text-gray-400"
                strokeWidth={1.7}
              />

              <input
                type="text"
                placeholder="Course, topic, creator"
                className="w-full bg-transparent text-[10px] text-gray-700 outline-none placeholder:text-gray-400"
              />
            </div>

            <button
              type="button"
              className="h-10 rounded-full bg-[#c8ff00] px-5 text-[10px] font-semibold text-black transition hover:bg-[#b9f000]"
            >
              Search
            </button>
          </div>
        </div>

        {/* Hero visual */}
        <div className="relative mx-auto mt-6 h-110 max-w-5xl sm:h-120 lg:h-140">
          {/* Center Big Lime Circle Backdrop */}
          <div className="absolute bottom-0 left-1/2 w-[95%] max-w-5xl aspect-2/1 -translate-x-1/2 rounded-t-full bg-[#c8ff00]" />

          {/* Central Boy / Student Image */}
          <div className="absolute bottom-0 left-1/2 z-10 h-130 w-105 -translate-x-1/2 sm:h-155 sm:w-125 lg:h-170 lg:w-140">
            <Image
              src="/images/hero-image.png"
              alt="Student with laptop and headphones"
              width={600}
              height={680}
              priority
              className="h-full w-full object-contain object-bottom drop-shadow-2xl"
            />
          </div>

          {/* Floating rating card */}
          {/* 1. Top Left Card */}
          <div className="absolute top-[18%] left-[2%] z-20 hidden items-center gap-3 rounded-2xl bg-white p-3 shadow-xl sm:flex lg:left-[8%]">
            <div className="text-left">
              <h4 className="text-xs font-bold text-gray-900 sm:text-sm">
                UI/UX Design
              </h4>
              <p className="text-[10px] text-gray-500 sm:text-xs">
                200 Courses &bull; 1000+ Students
              </p>
            </div>
          </div>

          {/* 2. Bottom Left Card */}
          <div className="absolute bottom-[8%] left-[0%] z-20 hidden rounded-2xl bg-white p-3.5 text-left shadow-xl sm:block lg:left-[6%]">
            <p className="text-xs font-bold text-gray-900">Happy Students</p>
            <div className="mt-1 flex items-center gap-1 text-[11px] font-semibold text-gray-700">
              <span>4.5</span>
              <span className="text-gray-400">(240)</span>
              <Star size={12} className="fill-yellow-400 text-yellow-400" />
            </div>

            {/* Avatar Stack */}
            <div className="mt-2.5 flex items-center -space-x-2">
              <Image
                width={28}
                height={28}
                className="h-7 w-7 rounded-full border-2 border-white object-cover"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                alt="student"
              />
              <Image
                width={28}
                height={28}
                className="h-7 w-7 rounded-full border-2 border-white object-cover"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                alt="student"
              />
              <Image
                width={28}
                height={28}
                className="h-7 w-7 rounded-full border-2 border-white object-cover"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
                alt="student"
              />
              <Image
                width={28}
                height={28}
                className="h-7 w-7 rounded-full border-2 border-white object-cover"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80"
                alt="student"
              />
              <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#c8ff00] text-[9px] font-extrabold text-black">
                2K+
              </div>
            </div>
          </div>

          {/* 3. Top Right Card */}
          <div className="absolute top-[20%] right-[2%] z-20 hidden w-44 rounded-2xl bg-white p-4 text-left shadow-xl sm:block sm:w-52 lg:right-[8%]">
            <p className="text-xs font-bold text-gray-500">Learning Progress</p>
            <p className="mt-1 text-2xl font-extrabold text-gray-900 sm:text-3xl">
              55%
            </p>

            {/* Progress Bar */}
            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-gray-100">
              <div className="h-full w-[55%] rounded-full bg-[#c8ff00]" />
            </div>
          </div>

          {/* White Donut / Ring (Bottom Left) */}
          <div className="absolute bottom-[20%] -left-6 z-0 hidden lg:block">
            <div className="h-28 w-28 -rotate-12 rounded-full border-18 border-white shadow-md" />
          </div>

          {/* White Pyramid / Triangle (Top Right) */}
          <div className="absolute top-[8%] right-[10%] z-0 hidden lg:block">
            <div className="h-0 w-0 rotate-12 border-b-50 border-l-30 border-r-30 border-b-white border-l-transparent border-r-transparent filter drop-shadow-lg" />
          </div>

          {/* Left White ZigZag */}
          <svg
            className="absolute top-[12%] left-[12%] z-0 hidden h-16 w-10 text-white fill-current opacity-90 lg:block"
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

          {/* Right White ZigZag */}
          <svg
            className="absolute top-[45%] right-[5%] z-0 hidden h-20 w-12 text-white fill-current opacity-90 lg:block"
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
      </Container>
    </section>
  );
}
