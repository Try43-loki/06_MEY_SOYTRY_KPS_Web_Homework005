"use client"; // ✅ Important for Next.js client component

import React from "react";
import { Input } from "@heroui/react";
import { useSearch } from "@/services/searchContent"; // ✅ Correct import

export default function SearchComponent() {
  const { searchQuery, setSearchQuery } = useSearch(); // ✅ Now it works

  return (
    <div className="w-full flex flex-col gap-4 mt-10">
      <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
        <form action="" className="w-full">
          <Input
            className="text-xl"
            label="Search book or category"
            type="text"
            variant="underlined"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
}
