import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/About";
import Gallery from "@/components/sections/Gallery";
import Hero from "@/components/sections/Hero";
import Programs from "@/components/sections/Programs";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";



export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
     
      <Programs />
      <Gallery />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}
