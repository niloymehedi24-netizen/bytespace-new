import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <main>
      <section className="bg-[#123fe5]">
        <Navbar />
        <Hero />
      </section>
    </main>
  );
}