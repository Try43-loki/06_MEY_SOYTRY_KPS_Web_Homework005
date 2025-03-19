"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@heroui/react";
import { useSearch } from "@/services/searchContent";

function BookAllComponent({ books, categories }) {
  const booksList = books.payload;
  const categoryList = categories.payload;
  const { searchQuery } = useSearch();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(booksList);
  const [searchBooks, setSearchBooks] = useState("");

  useEffect(() => {
    setSearchBooks(searchQuery);
  }, [searchQuery]);
  // hadle search book title
  const searchBookTitle = (searchBooks) => {
    const filtered = booksList.filter((book) =>
      book.book_title.toLowerCase().includes(searchBooks.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  // Handle category selection
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  // Find category ID by name
  const getCategoryById = (selected) => {
    return categoryList.find((cate) => cate.book_cate_name === selected);
  };

  // Filtering books by category and search
  useEffect(() => {
    // set default
    let filtered = booksList;

    if (selectedCategory && selectedCategory !== "ALL") {
      const selectedCate = getCategoryById(selectedCategory);
      if (selectedCate) {
        filtered = filtered.filter(
          (book) => book.book_cate_id == selectedCate.id
        );
      }
    }
    console.log(filtered);
    if (searchQuery) {
      filtered = filtered.filter((book) =>
        book.book_title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    searchBookTitle(searchBooks);
    setFilteredBooks(filtered);
  }, [selectedCategory, booksList, searchQuery]);

  return (
    <section className="w-full bg-white rounded-3xl h-[83vh] p-10">
      {/* Filter Section */}
      <section className="w-full flex justify-between items-center">
        <div className="px-3 py-2 rounded-md bg-gray-white text-center">
          <h4 className="text-secondary text-xl font-normal">
            {selectedCategory == "" ? "ALL books" : selectedCategory}
          </h4>
        </div>
        <select
          onChange={handleCategoryChange}
          className="bg-gray-white px-3 py-2 rounded-md  outline-none text-primary text-xl"
        >
          <option value="ALL">Select All</option>
          {categoryList.map((category) => (
            <option key={category.id} value={category.book_cate_name}>
              {category.book_cate_name}
            </option>
          ))}
        </select>
      </section>

      <article className="w-full grid grid-cols-2 h-[70vh] border-t-secondary border-t-2 overflow-y-scroll mt-4">
        {filteredBooks.map((item, index) => (
          <section
            key={index}
            className="w-full flex justify-center items-center mt-40"
          >
            <figure className="w-[460px] flex gap-8 justify-between items-end bg-gray-white rounded-3xl p-8">
              <figcaption className="relative">
                <img
                  src={item.image}
                  alt={item.book_title}
                  className="rounded-3xl absolute top-[-260px] w-[160px] h-[250px] object-cover"
                />
                <a href={`/read-full/${encodeURIComponent(item.book_title)}`}>
                  <Button
                    className="bg-thirdary text-primary w-[160px]"
                    radius="full"
                    size="lg"
                  >
                    READ FULL ARTICLE
                  </Button>
                </a>
              </figcaption>
              <div className="max-w-[230px]">
                <h4 className="text-xl text-primary font-bold line-clamp-1">
                  {item.book_title}
                </h4>
                <p className="line-clamp-5 max-w-[200px text-justify">
                  {item.description}
                </p>
              </div>
            </figure>
          </section>
        ))}
      </article>
    </section>
  );
}

export default BookAllComponent;
