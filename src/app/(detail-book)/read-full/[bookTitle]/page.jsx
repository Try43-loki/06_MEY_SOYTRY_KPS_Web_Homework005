import { getAllBooksService } from "@/services/book.service";
import { getAllCartoonBookService } from "@/services/cartoon.service";
import React from "react";
import BookDetailComponent from "../../_components/BookDetailComponent";

async function DetailPageOne({ params }) {
  const title = params.bookTitle;
  const currentTitle = decodeURIComponent(title);
  const dataBook = await getAllBooksService();
  const dataCartoon = await getAllCartoonBookService();

  // set data
  const books = dataBook.payload;
  const cartoons = dataCartoon.payload;

  // check book contain
  const isBook = books.some((book) => book.book_title === currentTitle);
  // check cartoon contain
  const isCartoon = cartoons.some(
    (cartoon) => cartoon.book_title === currentTitle
  );

  //find book
  const currentBook = books.find((book) => book.book_title === currentTitle);
  //find cartoon
  const currentCartoon = cartoons.find(
    (cartoon) => cartoon.ct_title === currentTitle
  );

  // current data
  const currentBooks = currentBook ? currentBook : currentCartoon;

  return (
    <>
      <BookDetailComponent
        currentBooks={currentBooks}
        isBook={isBook}
        isCartoon={isCartoon}
      />
    </>
  );
}

export default DetailPageOne;
