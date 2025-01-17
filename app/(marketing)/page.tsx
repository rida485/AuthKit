import BentoGrid from "@/components/sections/bentogrid";
import HeroLanding from "@/components/sections/hero-landing";
import Powered from "@/components/sections/powered";
import PreviewLanding from "@/components/sections/preview-landing";
import Lenis from "lenis";

import { useEffect } from "react";

export default function IndexPage() {

  return (
    <>
      <HeroLanding />
      <PreviewLanding />
      <Powered />
      <BentoGrid />
    </>
  );
}
