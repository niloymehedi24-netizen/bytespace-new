import Link from "next/link";
import Container from "../common/Container";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      <Container>
        <div className="grid gap-10 py-16 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-black tracking-tight">
              ByteSpace
            </Link>

            <p className="mt-4 max-w-md text-sm leading-6 text-white/60">
              Learn, grow, and build your future with practical courses designed
              for the modern digital world.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Explore</h3>

            <div className="flex flex-col gap-3 text-sm text-white/60">
              <Link href="/courses">Courses</Link>
              <Link href="/#about">About</Link>
              <Link href="/login">Sign In</Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Company</h3>

            <div className="flex flex-col gap-3 text-sm text-white/60">
              <Link href="/#contact">Contact</Link>
              <Link href="/#privacy">Privacy</Link>
              <Link href="/#terms">Terms</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-sm text-white/50">
          © {new Date().getFullYear()} ByteSpace. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
