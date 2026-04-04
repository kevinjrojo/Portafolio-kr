import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090f]">
      <div className="max-w-5xl mx-auto px-4">
        <Navbar />

        {/* Hero + Proyectos */}
        <section
          id="proyectos"
          className="grid grid-cols-1 md:grid-cols-2 min-h-[calc(100vh-65px)]"
        >
          <Hero />
          <Projects />
        </section>
      </div>
    </main>
  );
}
