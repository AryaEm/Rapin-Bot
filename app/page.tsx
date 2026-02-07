import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import MovieRow from "@/components/movie-row";

export default function HomePage() {
  return (
    <main className="bg-[#141414] min-h-screen">
      <Navbar />
      <HeroSection />
      
      <section className="px-4 md:px-10 lg:px-16 pb-10 -mt-32 relative z-10">
        <MovieRow title="Trending Now" />
        <MovieRow title="Popular on Netflix" />
        <MovieRow title="Top Rated" />
        <MovieRow title="New Releases" />
      </section>
    </main>
  );
} 