import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#123fe5]">
      <Navbar />

      <section className="flex min-h-[70vh] items-center justify-center px-6">
        <h1 className="text-center text-5xl font-black text-white">
          ByteSpace
        </h1>
      </section>

      <Footer />
    </main>
  );
}