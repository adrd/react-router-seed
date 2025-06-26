import React, { useState, useEffect } from "react";

import ProductCard from "./ProductCard";

import { listProducts } from "./ProductsService";

const ProductsIndex = () => {
  console.log("ProductsIndex start executing...");
  const [products, setProducts] = useState(null);

  useEffect(() => {
    console.log("ProductsIndex useEffect start executing...");

    (async () => {
      console.log("ProductsIndex listProducts() start executing...");
      const data = await listProducts();

      console.log(data);

      setProducts(data);
    })();
  }, []);

  if (products === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {products.map((item) => (
        <ProductCard product={item} key={item.id} />
      ))}
    </div>
  );
};

export default ProductsIndex;
