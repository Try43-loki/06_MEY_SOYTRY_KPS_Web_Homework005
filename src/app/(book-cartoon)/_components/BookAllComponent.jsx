"use client";
import React from "react";
import FilterComponent from "./FilterComponent";
import { Button } from "@heroui/react";
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
function BookAllComponent() {
  return (
    <>
      <section className="w-full bg-white rounded-3xl h-[83vh] p-10">
        <FilterComponent />
        <article className="w-full grid grid-cols-2 gap-10 mt-4 pt-32  border-t-secondary">
          <figure className="flex gap-8 justify-center items-end bg-gray-white rounded-3xl p-8">
            <figcaption className="relative">
              <img
                src="https://s3-alpha-sig.figma.com/img/8c2e/0d73/31bc8262eac933a719ec8b34ab17918d?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=W7Vn7rt6JLXI42driARNTQ34NsFZkSv~JMWqcIunpF915GIl9kw86iNN6WfA-43jiReVSKYBOv-Ao644LbtLKSjgYVXILZXHW-t~EbrGn71jzJsvzMZVfn-hHycM2USUnJsBWZcDi9qwXCU9qaLrZEDVq5R6ROaPGN9i0FD3HpwewTPMVrPi3qb6tgkhcAexHuDqHMa7kvFb4dhCz1BNc2NTSOfCwMDqWzeu~esekY~Zc7Mb6~BEPt0hfSqTYGq0DLEHZxPyEc8yXTPH1ExwCsaOOMX8cO7vkbZpaJ5WfZtjY4AmzXVutegKqFeuBd2gWETGL4Wqj~ogH8FBaKqGvw__"
                alt=""
                height="250px"
                width="160px"
                className="rounded-3xl absolute top-[-260px]"
              />
              <Button
                className="bg-thirdary text-primary w-[160px] "
                radius="full"
                size="lg"
              >
                READ FULL ARTICLE
              </Button>
            </figcaption>
            <div>
              <h4 className="text-2xl text-primary font-bold">
                {" "}
                How Do You Live?
              </h4>
              <p className="text-xl line-clamp-5 max-w-[200px]">
                The novel's enduring themes of self-discovery and ethical living
                continue to resonate, prompting reflections on how one should
                live a meaningful life.
              </p>
            </div>
          </figure>
        </article>
      </section>
    </>
  );
}

export default BookAllComponent;
