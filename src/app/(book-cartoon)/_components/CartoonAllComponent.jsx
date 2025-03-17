"use client";
import React from "react";
import FilterComponent from "./FilterComponent";
import { Button } from "@heroui/react";
import { Eye } from "lucide-react";
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
function CartoonAllComponent() {
  return (
    <>
      <section className="w-full bg-white rounded-3xl h-[83vh] p-10">
        <FilterComponent />
        <article className="w-full h-[64vh] rounded-b-3xl grid grid-cols-3 gap-10 mt-6 pt-6 border-t-1 border-t-secondary overflow-y-auto">
          <figure className="w-full flex flex-col justify-center items-start cursor-pointer ">
            <figcaption>
              <a href={`read-full`}>
                <img
                  src="https://s3-alpha-sig.figma.com/img/53b7/da50/f304cb33a6800220ad4dc667b09edb1c?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UnI-o082Y0Zgm6eSKTdcYYHqZkLBSe8pUH1k8hh147PDwaYYiglGlvm5g8-ZeYhYXRH-bZfR9yoz4HuLWJ0oZYd7nkEsysovgdblpM6HV2v5MH8lHyI9v~0dBA8f4vM83CG8bS0MWKXbAn6unIedWU8jtslmeOp-0eoiW3CNZ34yziW9KaJ84~SkxmWFx1vtQHF-kxClD-nurKR6KHJPcHL-VNZOneJ8cpJ7N13pwr9nZa2cBslQ2ibv7Mbp7px8m3M~K-lN9D7iS-hYW-DYSOFhRt-gJQ3sIrOv21dHA0aRR85vnpdipq2pbKj6kC3YAuI5K4i5mHEaiera5JbjOw__"
                  alt=""
                  className="rounded-2xl  w-[280px] h-[380px] object-cover"
                />
              </a>
            </figcaption>
            <article className="mt-2">
              <h4 className="text-primary text-xl font-semibold ">
                The Hidden Treasure
              </h4>
              <div className="text-secondary text-medium flex justify-start gap-2 items-center ">
                <Eye size={20} />
                <span>20</span> times | <span>1990</span>
              </div>
            </article>
          </figure>
        </article>
      </section>
    </>
  );
}

export default CartoonAllComponent;
