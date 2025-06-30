import React, { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { css } from "@emotion/css";

import ProductCard from "./ProductCard";

import { listProducts } from "./ProductsService";

const ProductsIndexStyles = css`
  .ProductsIndex {
    &-List {
      margin-top: 10px;
    }
    &-Radios {
      display: flex;
      align-items: center;
      span {
        width: 35px;
        color: #fff;
        font-size: 0.8rem;
        margin-right: 10px;
      }
      label {
        display: flex;
        align-items: center;
        cursor: pointer;
      }
    }
  }
`;

const ProductsIndex = () => {
  console.log("ProductsIndex start executing...");

  // const location = useLocation();
  // console.log(location);

  const { state } = useLocation();
  console.log(state);

  const [products, setProducts] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

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

  const updateParams = (e) => {
    console.log("updateParams() start executing...");
    console.log("e.target = ", e.target);

    const { name, value } = e.target;

    const currentParams = Object.fromEntries([...searchParams]);
    console.log("currentParams = ", currentParams);

    const newParams = { ...currentParams, [name]: value };
    console.log("newParams = ", newParams);

    setSearchParams(newParams);
  };

  if (products === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className={ProductsIndexStyles}>
      <div className="ProductsIndex-Radios">
        <span>Sort:</span>
        <label>
          Name
          <input
            type="radio"
            name="sort"
            value="name"
            onChange={updateParams}
            defaultChecked={searchParams.get("sort") === "name"}
          />
        </label>
        <label>
          Price
          <input
            type="radio"
            name="sort"
            value="price"
            onChange={updateParams}
            defaultChecked={searchParams.get("sort") === "price"}
          />
        </label>
      </div>
      <div className="ProductsIndex-Radios">
        <span>Order:</span>
        <label>
          Ascending
          <input
            type="radio"
            name="order"
            value="ascending"
            onChange={updateParams}
            defaultChecked={searchParams.get("order") === "ascending"}
          />
        </label>
        <label>
          Descending
          <input
            type="radio"
            name="order"
            value="descending"
            onChange={updateParams}
            defaultChecked={searchParams.get("order") === "descending"}
          />
        </label>
      </div>
      <div className="ProductsIndex-List">
        {products.map((item) => (
          <ProductCard product={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductsIndex;
