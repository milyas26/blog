import BlogCard from "@/components/card-blog";
import SeriesCard from "@/components/card-series";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

export default function Home() {
  return (
    <main>
      <section className="px-4 py-6 border border-b border-slate-200">
        <h1 className="text-7xl font-medium">THE BLOG</h1>
      </section>
      <section className="px-4 py-6">
        <div className="flex items-center justify-between gap-2">
          <h2 className="font-semibold mb-4 text-2xl">Recent blog posts</h2>
          <Link href="/" className="flex items-center gap-1">
            <span>View all</span>
            <MdArrowOutward />
          </Link>
        </div>
        <div className="space-y-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <BlogCard key={index} />
          ))}
        </div>
      </section>
      <section className="px-4 py-6">
        <div className="flex items-center justify-between gap-2">
          <h2 className="font-semibold mb-4 text-2xl">Series</h2>
          <Link href="/" className="flex items-center gap-1">
            <span>View all</span>
            <MdArrowOutward />
          </Link>
        </div>

        <div className="space-y-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <SeriesCard key={index} />
          ))}
        </div>
      </section>
    </main>
  );
}
