import React from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  console.log("Product component start executing...");
  // const params = useParams();
  // console.log(params);
  const { id } = useParams();

  console.log(id);

  return <div>Product</div>;
};

export default Product;
