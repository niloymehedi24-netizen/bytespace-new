import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import LogoCard from "@/components/home/LogoCard";
import FeaturedCourses from "@/components/home/FeaturedCourses";
import LearningPaths from "@/components/home/LearningPaths";
import GrowthAndManagement from "@/components/home/GrowthAndManagement";
import CreatorBanner from "@/components/home/CreatorBanner";
import Testimonials from "@/components/home/Testimonial";
import Footer from "@/components/layout/Footer";


export default function Home() {
  return (
    <main>
      <section className="bg-[#123fe5]">
        <Navbar />
        <Hero />
        <LogoCard />
        <FeaturedCourses />
        <LearningPaths />
        <GrowthAndManagement />
        <CreatorBanner />
        <Testimonials />
        <Footer />
      </section>
    </main>
  );
}