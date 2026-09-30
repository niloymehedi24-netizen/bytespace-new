import React from "react";
import {
  PenTool,
  Code2,
  Laptop,
  Building2,
  Megaphone,
  Camera,
} from "lucide-react";
import Container from "../common/Container";

const learningPaths = [
  {
    title: "Design",
    icon: PenTool,
  },
  {
    title: "Development",
    icon: Code2,
  },
  {
    title: "IT & Software",
    icon: Laptop,
  },
  {
    title: "Business",
    icon: Building2,
  },
  {
    title: "Marketing",
    icon: Megaphone,
  },
  {
    title: "Photography",
    icon: Camera,
  },
];

export default function LearningPaths() {
  return (
    <section className="bg-white pt-6 pb-16 sm:pt-8 sm:pb-20">
      <Container>
        {/* Section Title & Subtitle */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="mt-4 text-xs leading-relaxed text-gray-500 sm:text-sm">
            At Bytespace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various fields,
            ensuring there&apos;s something for everyone. Unleash your potential
            and explore our carefully curated categories.
          </p>
        </div>

        {/* Categories Cards Grid */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-6">
          {learningPaths.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group flex flex-col items-center justify-center rounded-3xl border border-gray-200/80 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg cursor-pointer min-h-42"
              >
                {/* Lime Circle Icon Container */}
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#c8ff00] text-black transition-transform duration-300 group-hover:scale-110">
                  <Icon size={22} strokeWidth={2.2} />
                </div>

                {/* Category Title */}
                <span className="mt-4 text-sm font-bold text-gray-900">
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
