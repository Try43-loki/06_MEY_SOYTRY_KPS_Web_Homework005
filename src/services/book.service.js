// get all book

const getAllBooksService = async () => {
  try {
    const res = await fetch("https://nextjs-homework005.vercel.app/api/book");
    // convert data into object
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
export { getAllBooksService };

// get book categories

const getBookCategories = async () => {
  try {
    const res = await fetch(
      "https://nextjs-homework005.vercel.app/api/book_category"
    );
    // convert data into object
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
export { getBookCategories };

// get book by id

const getBookById = async (id) => {
  try {
    const res = await fetch(
      `https://nextjs-homework005.vercel.app/api/book/${id}`
    );
    // convert data into object
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getBookById };
