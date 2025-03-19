// get all cartoon book

const getAllCartoonBookService = async () => {
  try {
    const res = await fetch(
      "https://nextjs-homework005.vercel.app/api/cartoon"
    );
    // convert data into object
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getAllCartoonBookService };

// get genre cartoon book

const getGenreCartoonBookService = async () => {
  try {
    const res = await fetch(
      "https://nextjs-homework005.vercel.app/api/cartoon_genre"
    );
    // convert data into object
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getGenreCartoonBookService };

// get book by search title

const getCartoonBySearchTitleService = async (query) => {
  try {
    const res = await fetch(
      `https://nextjs-homework005.vercel.app/api/cartoon?search=${query}`
    );
    // convert data into object
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getCartoonBySearchTitleService };
