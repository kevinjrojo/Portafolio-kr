import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

import Projects from "@/components/Projects";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090f]">
      <div className="max-w-full mx-auto px-6">
        <Navbar />
        <section className="grid grid-cols-1 md:grid-cols-2" id="proyectos">
          <Hero />
          <Projects />
        </section>
        <About />
      </div>
    </main>
  );
}
