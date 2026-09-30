import React from "react";
import Container from "../common/Container";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/images/sarah.png",
    quote:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    id: 2,
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/images/james.png",
    quote:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    id: 3,
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/images/alex.png",
    quote:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#fafbfc] py-20 sm:py-28">
      {/* Ambient Glows */}
      <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-[#123fe5]/10 blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 h-112 w-md rounded-full bg-[#c8ff00]/25 blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        {/* Two-Column Header */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-center lg:gap-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl leading-tight">
            Discover What Our <br className="hidden sm:inline" />
            Community Is Saying
          </h2>
          <p className="text-xs leading-relaxed text-gray-500 sm:text-sm">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md sm:p-8 h-90 w-70"
            >
              <div>
                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    className="h-14 w-14 rounded-full object-cover shadow-sm"
                    width={56}
                    height={56}
                  />
                  <div>
                    <h3 className="text-base font-bold text-gray-900">
                      {item.name}
                    </h3>
                    <p className="text-xs font-medium text-[#123fe5]">
                      {item.role}
                    </p>
                  </div>
                </div>

                {/* Quote Text */}
                <p className="mt-6 text-xs leading-relaxed text-gray-600 sm:text-sm">
                  {item.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
