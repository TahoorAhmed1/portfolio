"use client";
import Aboutme from "@/components/Aboutme";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMount, setIsMount] = useState(false);

  useEffect(() => {
    setIsMount(true);
  });
  if (!isMount) {
    return null;
  }
  return (
    <main className="w-full ">
      <div className="max-w-screen-xl mx-auto lg:pt-10 ">
        <Banner />
        <Aboutme />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
