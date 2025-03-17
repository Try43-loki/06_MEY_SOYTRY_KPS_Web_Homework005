import { Select, SelectItem } from "@heroui/react";
import React from "react";
export const animals = [
  { key: "cat", label: "Cat" },
  { key: "dog", label: "Dog" },
  { key: "elephant", label: "Elephant" },
  { key: "lion", label: "Lion" },
  { key: "tiger", label: "Tiger" },
  { key: "giraffe", label: "Giraffe" },
  { key: "dolphin", label: "Dolphin" },
  { key: "penguin", label: "Penguin" },
  { key: "zebra", label: "Zebra" },
  { key: "shark", label: "Shark" },
  { key: "whale", label: "Whale" },
  { key: "otter", label: "Otter" },
  { key: "crocodile", label: "Crocodile" },
];
function FilterComponent() {
  return (
    <>
      <section className="w-full flex justify-between items-center">
        <div className="px-3 py-2 rounded-md bg-gray-white  text-center">
          <h4 className="text-secondary text-2xl font-normal">ALL books</h4>
        </div>
        <Select
          className="max-w-xs"
          items={animals}
          placeholder="Filter by Categories"
          size="lg"
        >
          {(animal) => <SelectItem>{animal.label}</SelectItem>}
        </Select>
      </section>
    </>
  );
}

export default FilterComponent;
