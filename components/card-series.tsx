import Image from "next/image";
import Link from "next/link";
import React from "react";

const SeriesCard = () => {
  return (
    <div className="space-y-2">
      <Link href="/blog/1" className="space-y-2">
        <Image
          src="https://images.unsplash.com/photo-1594165520975-89edce5a8f64?q=80&w=3272&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Placeholder image"
          width={800}
          height={400}
          className="rounded-lg w-full"
        />
        <div className="flex items-center justify-between gap-2">
          <p className="font-xs text-indigo-700 font-medium">
            Sunday, 1 January 2024
          </p>
          <p className="bg-amber-200 px-3 py-1 rounded-full text-slate-700 text-sm">
            Ongoing
          </p>
        </div>
        <p className="font-semibold text-2xl cursor-pointer">
          Javascript Pemula 101
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

export default SeriesCard;
