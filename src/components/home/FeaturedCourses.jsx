"use client";

import React, { useState } from "react";
import { Star, BarChart } from "lucide-react";
import Container from "../common/Container";
import Image from "next/image";

// Category options
const categories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
  "+ More",
];

// Course list data
const courses = [
  {
    id: 1,
    title: "Learn Figma from Basic",
    author: "by purepearl studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    period: "/lifetime",
    image:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    title: "Build Digital Asset",
    author: "by purepearl studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    period: "/lifetime",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    title: "The Power of Analytics",
    author: "by purepearl studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    period: "/lifetime",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    title: "Balancing Productivity an...",
    author: "by purepearl studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    period: "/lifetime",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    title: "Mastering Money Manage...",
    author: "by purepearl studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    period: "/lifetime",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    title: "From Idea to Startup Succ...",
    author: "by purepearl studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    period: "/lifetime",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80",
  },
];

// Student avatar stack dataset
const studentAvatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
];

export default function FeaturedCourses() {
  const [activeCategory, setActiveCategory] = useState("Featured");

  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        {/* Section Title & Subtitle */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Discover Your Passion,
            <br />
            Build Your Skills
          </h2>
          <p className="mt-4 text-xs leading-relaxed text-gray-500 sm:text-sm">
            At Bytespace Courses, we bring you closer to life-changing
            knowledge. Explore a variety of courses across different fields,
            from technology to the arts, and make a difference in your career
            and life.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            const isMore = cat === "+ More";

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs font-medium transition ${
                  isActive
                    ? "bg-[#c8ff00] font-bold text-black shadow-sm"
                    : isMore
                      ? "bg-[#f3f4f6] font-bold text-[#123fe5] hover:bg-gray-200"
                      : "bg-[#f3f4f6] text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Courses Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-md"
            >
              {/* Card Image Wrapper */}
              <div className="relative h-48 w-full overflow-hidden rounded-2xl bg-gray-100 sm:h-52">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />

                {/* Overlaid Meta Pills */}
                <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between rounded-full bg-white/80 px-3 py-1.5 text-[10px] text-gray-600 backdrop-blur-md sm:text-xs">
                  <span>{course.lessons}</span>
                  <span>&bull;</span>
                  <span>{course.duration}</span>
                  <span>&bull;</span>
                  <span>{course.comments}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="mt-4 flex flex-1 flex-col justify-between">
                <div>
                  {/* Title & Rating */}
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-base font-bold text-gray-900 sm:text-lg">
                      {course.title}
                    </h3>
                    <div className="flex items-center gap-1 text-xs font-semibold text-gray-700 shrink-0">
                      <span>{course.rating}</span>
                      <Star
                        size={13}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    </div>
                  </div>

                  {/* Author */}
                  <p className="mt-0.5 text-xs text-gray-400">
                    {course.author}
                  </p>
                </div>

                {/* Level, Avatars & Pricing Row */}
                <div className="mt-6 flex items-center justify-between pt-2">
                  <div className="flex items-center gap-3">
                    {/* Level Pill */}
                    <div className="flex items-center gap-1 rounded-full bg-gray-100 px-2.5 py-1 text-[11px] font-medium text-gray-600">
                      <BarChart size={12} className="text-gray-500" />
                      <span>{course.level}</span>
                    </div>

                    {/* Student Avatar Stack */}
                    <div className="flex items-center -space-x-1.5">
                      {studentAvatars.map((src, idx) => (
                        <Image
                          key={idx}
                          src={src}
                          height={7}
                          width={7}
                          alt="Student"
                          className="h-6 w-6 rounded-full border-2 border-white object-cover"
                        />
                      ))}
                      <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-[#c8ff00] text-[8px] font-bold text-black">
                        26+
                      </div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-right">
                    <span className="text-base font-bold text-[#123fe5] sm:text-lg">
                      {course.price}
                    </span>
                    <span className="text-[11px] text-gray-400">
                      {course.period}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
