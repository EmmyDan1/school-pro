import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Programs from "@/components/sections/Programs";

import SchoolStats from "@/components/sections/SchoolStats";



export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SchoolStats/>
      <Programs/>
      
    </>
  );
}