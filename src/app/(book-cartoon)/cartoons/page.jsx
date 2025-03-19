import React from "react";
import CartoonAllComponent from "../_components/CartoonAllComponent";
import {
  getAllCartoonBookService,
  getGenreCartoonBookService,
} from "@/services/cartoon.service";

async function CartoonPage() {
  const cartoons = await getAllCartoonBookService();
  const genre = await getGenreCartoonBookService();
  return (
    <>
      <CartoonAllComponent cartoons={cartoons} genre={genre} />
    </>
  );
}

export default CartoonPage;
