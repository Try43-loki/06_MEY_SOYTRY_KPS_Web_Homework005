"use client";
import React, { useEffect, useState } from "react";
import { Eye } from "lucide-react";
import { useSearch } from "@/services/searchContent";
function CartoonAllComponent({ cartoons, genre }) {
  const cartoonBooks = cartoons.payload;
  const genres = genre.payload;
  const { searchQuery } = useSearch();
  const [selectedGenre, setSelectedGenre] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(cartoonBooks);

  // Handle category selection
  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
  };

  // Find category ID by name
  const getCategoryById = (selected) => {
    return genres.find((gen) => gen.cartoon_genre === selected);
  };

  // Filtering books by category and search
  useEffect(() => {
    // set default
    let filtered = cartoonBooks;

    if (selectedGenre && selectedGenre !== "ALL") {
      const selectedGen = getCategoryById(selectedGenre);
      if (selectedGen) {
        filtered = filtered.filter((book) => book.id == selectedGen.id);
      }
    }

    if (searchQuery) {
      filtered = filtered.filter((book) =>
        book.ct_title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredBooks(filtered);
  }, [selectedGenre, cartoonBooks, searchQuery]);
  return (
    <>
      <section className="w-full bg-white rounded-3xl h-[83vh] p-10">
        <section className="w-full flex justify-between items-center">
          <div className="px-3 py-2 rounded-md bg-gray-white text-center">
            <h4 className="text-secondary text-xl font-normal">
              {selectedGenre == "" ? "ALL books" : selectedGenre}
            </h4>
          </div>
          <select
            onChange={handleGenreChange}
            className="bg-gray-white px-3 py-2 rounded-md  outline-none text-primary text-xl"
          >
            <option value="ALL">Select All</option>
            {genres.map((gen, index) => (
              <option key={index} value={gen.cartoon_genre}>
                {gen.cartoon_genre}
              </option>
            ))}
          </select>
        </section>
        <article className="w-full h-[64vh] rounded-b-3xl grid grid-cols-3 gap-10 mt-6 pt-6 border-t-1 border-t-secondary overflow-y-auto">
          {filteredBooks.map((book, index) => (
            <figure
              key={index}
              className="w-full flex flex-col justify-center items-center cursor-pointer "
            >
              <figcaption>
                <a href={`/read-full/${encodeURIComponent(book.ct_title)}`}>
                  <img
                    src={book.image}
                    alt={book.ct_title}
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
                  <span>{book.view_count}</span> times |{" "}
                  <span>{book.published_year}</span>
                </div>
              </article>
            </figure>
          ))}
        </article>
      </section>
    </>
  );
}

export default CartoonAllComponent;
