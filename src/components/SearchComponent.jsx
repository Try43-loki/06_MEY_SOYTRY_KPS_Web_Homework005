import React from "react";
import { Input } from "@heroui/react";
export default function SearchComponent() {
  return (
    <>
      <div className="w-full flex flex-col gap-4 pr-14 mt-10">
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input
            label="Search book or category"
            type="email"
            variant="underlined"
          />
        </div>
      </div>
    </>
  );
}
