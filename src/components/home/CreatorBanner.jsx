import React from "react";
import Container from "../common/Container";

export default function CreatorBanner() {
  return (
    <section className="relative overflow-hidden bg-[#123fe5] py-20 sm:py-28 text-white">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff18_1px,transparent_1px),linear-gradient(to_bottom,#ffffff18_1px,transparent_1px)] bg-size-[50px_50px] pointer-events-none" />

      {/* Decorative Shapes */}
      {/* Top Left: Lime Squiggle */}
      <div className="absolute -top-8 -left-6 z-0 w-36 h-36 sm:w-52 sm:h-52 text-[#c8ff00] opacity-90 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
          <path
            d="M 20 10 C 50 0, 60 30, 30 45 C 10 55, 60 70, 40 90"
            stroke="currentColor"
            strokeWidth="12"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>

      {/* Top Left Inner: White Coil */}
      <div className="absolute top-2 left-28 sm:left-44 z-0 w-16 h-16 sm:w-24 sm:h-24 text-white/90 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            d="M 20 30 Q 50 10 70 30 T 40 70 T 80 80"
            stroke="currentColor"
            strokeWidth="10"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>

      {/* Bottom Left: White Cone */}
      <div className="absolute -bottom-6 left-0 z-0 w-24 h-28 sm:w-36 sm:h-40 opacity-90 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
          <path d="M 50 10 L 90 85 Q 50 100 10 85 Z" />
        </svg>
      </div>

      {/* Bottom Left: Lime Donut / Ring */}
      <div className="absolute -bottom-12 left-12 sm:left-24 z-0 w-40 h-40 sm:w-60 sm:h-60 text-[#c8ff00] opacity-90 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle
            cx="50"
            cy="50"
            r="35"
            stroke="currentColor"
            strokeWidth="16"
            fill="none"
          />
        </svg>
      </div>

      {/* Top Right: Yellow Pyramid */}
      <div className="absolute top-4 right-20 sm:right-36 z-0 w-24 h-24 sm:w-32 sm:h-32 text-[#e2ff00] opacity-90 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
          <path d="M 50 10 L 90 75 L 10 75 Z" />
        </svg>
      </div>

      {/* Top Right: White Soft Cube / Capsule */}
      <div className="absolute -top-4 -right-10 z-0 w-32 h-44 sm:w-48 sm:h-60 text-white/90 pointer-events-none rotate-12">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <rect
            x="10"
            y="10"
            width="80"
            height="80"
            rx="30"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Bottom Right: Lime Squiggle */}
      <div className="absolute -bottom-10 -right-6 z-0 w-36 h-36 sm:w-56 sm:h-56 text-[#c8ff00] opacity-90 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            d="M 80 10 C 40 20, 30 50, 70 65 C 90 75, 40 90, 20 95"
            stroke="currentColor"
            strokeWidth="12"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>

      {/* Content */}
      <Container className="relative z-10 mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
          Unlock Your Potential as a <br className="hidden sm:inline" />
          Creator with ByteSpace
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-xs sm:text-sm text-blue-100/90 leading-relaxed">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        <div className="mt-8 flex justify-center">
          <button className="rounded-full bg-[#c8ff00] px-8 py-3.5 text-xs sm:text-sm font-bold text-black shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-[#b5e600] active:scale-95">
            Join as Creator
          </button>
        </div>
      </Container>
    </section>
  );
}
