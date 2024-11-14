"use client";
import Aboutme from "@/components/Aboutme";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { useEffect, useState } from "react";
import Script from "next/script";

export default function Home() {
  const [isMount, setIsMount] = useState(false);

  useEffect(() => {
    setIsMount(true);
  }, []);

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
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-6230327304419894"
          data-ad-slot="1265784164"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        <Script id="adsbygoogle-init" strategy="afterInteractive">
          {`(adsbygoogle = window.adsbygoogle || []).push({});`}
        </Script>
        <Footer />
      </div>
    </main>
  );
}
