'use client'

import Image from "next/image";
import AboutMe from "@/components/AboutMe";
import Intro from "@/components/Intro";
import Portfolio from "@/components/Portfolio";
import { MutableRefObject, useRef } from "react";

export default function Home() {
  const intro = useRef(null);
  const portfolio = useRef(null);
  const about = useRef(null);

  const scrollToSection = (elementRef: MutableRefObject<null>) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth"
    })
}

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul>
            <li onClick={() => scrollToSection(intro)}>Intro</li>
            <li onClick={() => scrollToSection(portfolio)}>Portfolio</li>
            <li onClick={() => scrollToSection(about)}>About Me</li>
          </ul>
        </div>
      </aside>
      <div className="intro">
        <Intro />
      </div>
      <div className="portfolio">
        <Portfolio />
      </div>
      <div className="about">
        <AboutMe />
      </div>
    </main>
  );
}
