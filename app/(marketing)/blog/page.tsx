'use client'

import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";

import { constructMetadata } from "@/lib/utils";
import { BlogPosts } from "@/components/content/blog-posts";
import { useEffect } from "react";
import Lenis from "lenis";


export default async function BlogPage() {

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time :any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });

  return <BlogPosts posts={posts} />;
}
