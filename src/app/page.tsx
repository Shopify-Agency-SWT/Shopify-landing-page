import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Growth from "@/components/Growth";
import About from "@/components/About";
import Different from "@/components/Different";
import Work from "@/components/Work";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ThemePicker from "@/components/ThemePicker";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Growth />
        <About />
        <Different />
        <Work />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <ThemePicker />
    </>
  );
}
