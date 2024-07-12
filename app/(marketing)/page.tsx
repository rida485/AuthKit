'use client'

import HeroLanding from "@/components/sections/hero-landing";
import PreviewLanding from "@/components/sections/preview-landing";
import Lenis from "lenis";

import { useEffect } from "react";

export default function IndexPage() {
  
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time :any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <HeroLanding />
      <PreviewLanding />
    </>
  );
}
