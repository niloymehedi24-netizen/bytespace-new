import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import LogoCard from "@/components/home/LogoCard";

export default function Home() {
  return (
    <main>
      <section className="bg-[#123fe5]">
        <Navbar />
        <Hero />
        <LogoCard />
      </section>
    </main>
  );
}