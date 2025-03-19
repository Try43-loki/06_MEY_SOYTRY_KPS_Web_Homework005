import React from "react";
import BookAllComponent from "../_components/BookAllComponent";
import { getAllBooksService, getBookCategories } from "@/services/book.service";

async function BookPage() {
  const books = await getAllBooksService();
  const categories = await getBookCategories();

  return (
    <>
      <BookAllComponent books={books} categories={categories} />
    </>
  );
}

export default BookPage;
