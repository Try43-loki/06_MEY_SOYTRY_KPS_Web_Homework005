// get all book

export default getAllBooksService = async () => {
  try {
    const res = await fetch("https://nextjs-homework005.vercel.app/api/book");
    // convert data into object
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
