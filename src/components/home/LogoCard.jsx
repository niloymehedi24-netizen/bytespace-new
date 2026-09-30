import React from "react";
import Container from "../common/Container";

const LogoCard = () => {
  return (
    <section className="bg-[#f4f5f7] py-8 sm:py-10">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:justify-between">
          {/* Logo 1 - Wave Circle */}
          <div className="flex items-center gap-2.5 text-[#6c727f] transition hover:opacity-80">
            <svg
              className="h-8 w-8 sm:h-9 sm:w-9 fill-current"
              viewBox="0 0 40 40"
            >
              <path d="M20 0C8.95 0 0 8.95 0 20s8.95 20 20 20 20-8.95 20-20S31.05 0 20 0zm-8 12c4 0 7 2 9 5s6 3 9 3c-2 3-5 5-9 5s-6-2-9-5-6-3-9-3c2-3 5-5 9-5zm-3 14c3 0 6 2 8 4s5 3 8 3c-2 2-4 3-7 3s-6-1-8-3-5-3-8-3c2-2 4-4 7-4z" />
            </svg>
            <span className="text-lg font-bold tracking-tight text-[#5a606e] sm:text-xl">
              Logoipsum
            </span>
          </div>

          {/* Logo 2 - Sunburst */}
          <div className="flex items-center gap-2.5 text-[#6c727f] transition hover:opacity-80">
            <svg
              className="h-8 w-8 sm:h-9 sm:w-9 fill-current"
              viewBox="0 0 40 40"
            >
              <path d="M17 0h6v8h-6V0zm0 32h6v8h-6v-8zM0 17h8v6H0v-6zm32 0h8v6h-8v-6zM5.86 4.44l5.66 5.66-4.24 4.24L1.62 8.68l4.24-4.24zm22.62 22.63l5.66 5.66-4.24 4.24-5.66-5.66 4.24-4.24zM11.52 29.8l-5.66 5.66-4.24-4.24 5.66-5.66 4.24 4.24zm22.62-22.63l-5.66 5.66-4.24-4.24 5.66-5.66 4.24 4.24z" />
            </svg>
            <span className="text-lg font-bold tracking-tight text-[#5a606e] sm:text-xl">
              Logoipsum
            </span>
          </div>

          {/* Logo 3 - Lightning Circle */}
          <div className="flex items-center gap-2.5 text-[#6c727f] transition hover:opacity-80">
            <svg
              className="h-8 w-8 sm:h-9 sm:w-9 fill-current"
              viewBox="0 0 40 40"
            >
              <path d="M20 0C8.95 0 0 8.95 0 20s8.95 20 20 20 20-8.95 20-20S31.05 0 20 0zm2 31l-2-9h5L16 9l2 9h-5l9 13z" />
            </svg>
            <span className="text-lg font-bold tracking-tight text-[#5a606e] sm:text-xl">
              Logoipsum
            </span>
          </div>

          {/* Logo 4 - Four Petal / Clover Circle */}
          <div className="flex items-center gap-2.5 text-[#6c727f] transition hover:opacity-80">
            <svg
              className="h-8 w-8 sm:h-9 sm:w-9 fill-current"
              viewBox="0 0 40 40"
            >
              <path d="M20 0C8.95 0 0 8.95 0 20s8.95 20 20 20 20-8.95 20-20S31.05 0 20 0zm-4 13a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm8 0a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm-8 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm8 0a4 4 0 1 1 0 8 4 4 0 0 1 0-8z" />
            </svg>
            <span className="text-lg font-bold tracking-tight text-[#5a606e] sm:text-xl">
              Logoipsum
            </span>
          </div>

          {/* Logo 5 - Spiral Concentric Circle */}
          <div className="flex items-center gap-2.5 text-[#6c727f] transition hover:opacity-80">
            <svg
              className="h-8 w-8 sm:h-9 sm:w-9 stroke-current fill-none stroke-2"
              viewBox="0 0 40 40"
            >
              <circle cx="20" cy="20" r="19" />
              <circle cx="20" cy="20" r="15" />
              <circle cx="20" cy="20" r="11" />
              <circle cx="20" cy="20" r="7" />
              <circle cx="20" cy="20" r="3" className="fill-current" />
            </svg>
            <span className="text-lg font-bold tracking-tight text-[#5a606e] sm:text-xl">
              Logoipsum
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LogoCard;
