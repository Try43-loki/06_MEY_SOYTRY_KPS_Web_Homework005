"use client";
import { Book, BookA, BookOpen, Home } from "lucide-react";
import React from "react";

function BookDetailComponent({ currentBooks, isBook, isCartoon }) {
  return (
    <>
      <section className="p-24">
        <div className="flex justify-start items-center gap-x-4 mb-10">
          <a
            href="/"
            className="font-semibold text-xl flex gap-2 justify-center items-center hover:text-primary hover:scale-105 transition-all duration-300"
          >
            {" "}
            <Home size={20} />
            Home
          </a>
          <a
            href={isBook ? "/books" : "/cartoons"}
            className="font-semibold text-xl  flex gap-2 justify-center items-center hover:text-secondary hover:scale-105 transition-all duration-300 "
          >
            <BookA size={20} />

            {isBook ? "Book Categories" : "Old School Cartoons"}
          </a>
          <p className="font-semibold text-xl text-red-500 flex gap-2 justify-center items-center ">
            {" "}
            <BookOpen size={20} />{" "}
            {isBook ? currentBooks.book_title : currentBooks.ct_title}
          </p>
        </div>

        <article className="bg-white rounded-3xl relative p-14">
          <figure className="absolute -top-[76px] right-14">
            <img
              src={currentBooks.image}
              alt=""
              className="w-[260px] h-[300px] object-cover rounded-2xl "
            />
          </figure>
          <div className="flex justify-center flex-col items-start gap-y-3 pt-40">
            <h3 className="text-3xl text-primary font-bold">
              {isBook ? currentBooks.book_title : currentBooks.ct_title}
            </h3>
            <h4 className="text-2xl ">
              by{" "}
              <span className=" font-semibold text-secondary">
                {isBook ? currentBooks.book_author : currentBooks.ct_creator}
              </span>
            </h4>
            <p className="text-xl">
              {isBook ? currentBooks.description : currentBooks.ct_description}
            </p>
          </div>
        </article>
      </section>
    </>
  );
}

export default BookDetailComponent;
