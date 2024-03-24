import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = () => {
  return (
    <div className="space-y-2">
      <Link href="/blog/1" className="space-y-2">
        <Image
          src="https://images.unsplash.com/photo-1662499104607-02e7cd99ebac?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Placeholder image"
          width={800}
          height={400}
          className="rounded-lg w-full"
        />
        <div className="flex items-center justify-between gap-2">
          <p className="font-xs text-indigo-700 font-medium">
            Sunday, 1 January 2024
          </p>
          <p className="text-sm text-slate-600">5 minutes read</p>
        </div>
        <p className="font-semibold text-2xl cursor-pointer">
          UX review presentations
        </p>
      </Link>
      <p className="text-slate-500">
        How do you create compelling presentations that wow your colleagues and
        impress your managers?
      </p>
      <div className="gap-2 flex items-center">
        {["#design", "#ux", "#presentation"].map((tag, index) => (
          <p
            key={index}
            className="text-xs text-indigo-500 font-medium bg-indigo-50 px-3 py-1 rounded-full cursor-pointer"
          >
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
