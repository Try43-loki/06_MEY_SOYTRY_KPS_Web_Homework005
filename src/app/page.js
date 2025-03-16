"use client";
import Link from "next/link";
import { Tag } from "lucide-react";
import React from "react";
import cardsList from "@/data/cardCategory";

function HomePage() {
  return (
    <>
      <article className="w-full pr-14">
        <section className="bg-white h-[83vh] rounded-lg p-10">
          <div className="px-3 py-2 rounded-md bg-gray-white w-[200px] text-center">
            <h4 className="text-secondary text-2xl font-normal">Homepage</h4>
          </div>
          <hr className="border-[1.5px] border-secondary mt-5" />

          <figure className="mt-14 flex justify-evenly items-center w-full">
            {cardsList.map((card, index) => (
              <Link key={index} href={card.path} passHref>
                <div className="relative rounded-lg h-[400px] w-[300px] overflow-hidden group block">
                  <img
                    className="w-full h-full transition-opacity duration-300"
                    src={card.image}
                    alt={card.tag}
                  />
                  <span className="absolute z-10 top-2 left-2 text-secondary text-medium flex justify-center items-center gap-x-2 bg-white rounded-md px-2 py-1">
                    <Tag size={20} />
                    <p>{card.tag}</p>
                  </span>
                  <div className="absolute flex items-center justify-center inset-0 bg-black bg-opacity-30 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-4xl font-semibold text-white w-[200px]">
                      {card.text}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </figure>
        </section>
      </article>
    </>
  );
}

export default HomePage;
