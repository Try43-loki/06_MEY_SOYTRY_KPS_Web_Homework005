import React from "react";
import BookAllComponent from "../_components/BookAllComponent";
import getAllBooksService from "@/services/book.service";

async function BookPage() {
  const books = await getAllBooksService();
  console.log("books : ", books);

  return (
    <>
      <BookAllComponent />
    </>
  );
}

export default BookPage;
