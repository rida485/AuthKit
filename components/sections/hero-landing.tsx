import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn, nFormatter } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/shared/icons";

export default async function HeroLanding() {
  return (
    <section className="space-y-6 py-12 sm:py-20 lg:py-24">
      <div className="container flex max-w-screen-md flex-col items-center gap-5 text-center">

        <h1 className="text-balance font-satoshi text-[40px] font-black leading-[1.15] tracking-tight sm:text-5xl md:text-6xl md:leading-[1.15]">
          Next.js Template with{" "}
          <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Auth & User Roles!
          </span>
        </h1>

        <p className="max-w-2xl text-balance text-muted-foreground sm:text-lg">
          Minimalist. Sturdy. <b>Open Source</b>. <br /> Focus on your own idea
          and... Nothing else!
        </p>

        <div className="flex justify-center space-x-2">
          <Link
            href="/docs"
            prefetch={true}
            className={cn(
              buttonVariants({ rounded: "xl", size: "lg" }),
              "gap-2 px-5 text-[15px]",
            )}
          >
            <span>Installation Guide</span>
            <Icons.arrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
