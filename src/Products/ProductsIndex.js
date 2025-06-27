import React, { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

import ProductCard from "./ProductCard";

import { listProducts } from "./ProductsService";

const ProductsIndex = () => {
  console.log("ProductsIndex start executing...");

  // const location = useLocation();
  // console.log(location);

  const { state } = useLocation();
  console.log(state);

  const [products, setProducts] = useState(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (state) {
      console.warn(`Nothing found for ${state.id}`);
    }
  }, []);

  useEffect(() => {
    console.log("ProductsIndex useEffect start executing...");
    console.log(Object.fromEntries([...searchParams]));

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
