import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import ParticleBackground from "./components/ParticleBackground";
import TransparentLayer from "./components/TransparentLayer";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center">
      <Nav />
      <Hero />
      <Footer />
      <TransparentLayer />
      <ParticleBackground id="particles" />
    </div>
  );
}
