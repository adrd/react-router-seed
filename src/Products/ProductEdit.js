import React, { useState, useEffect } from "react";
import { css } from "@emotion/css";

import { createProduct } from "./ProductsService";

const ProductEditStyles = css`
  color: #fff;
  background: #2a2c37;
  border-radius: 6px;
  padding: 15px;
`;

const ProductEdit = () => {
  console.log("ProductEdit component start executing...");

  const [form, setForm] = useState(null);

  useEffect(() => {
    setForm({
      id: "",
      name: "",
      price: 0,
      description: "",
    });
  }, []);

  const updateField = ({ name, value }) => {
    console.log("updateField start executing...");
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleCreate = async () => {
    console.log("handleCreate start executing...");

    try {
      const created = await createProduct(form);
      console.log(created);
    } catch (e) {
      console.warn(e);
    }
  };

  if (form === null) {
    return <div>Loading...</div>;
  }

  return (
    <form className={ProductEditStyles}>
      {JSON.stringify(form)}
      <input
        type="text"
        name="id"
        placeholder="ID"
        className="ProductEdit-Input"
        value={form.id}
        onChange={({ target }) => updateField(target)}
      />
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="ProductEdit-Input"
        value={form.name}
        onChange={({ target }) => updateField(target)}
      />
      <input
        type="text"
        name="price"
        placeholder="Price"
        className="ProductEdit-Input"
        value={form.price}
        onChange={({ target }) =>
          updateField({ name: target.name, value: parseInt(target.value, 10) })
        }
      />
      <textarea
        name="description"
        placeholder="Description"
        className="ProductEdit-Input ProductEdit-Textarea"
        value={form.description}
        onChange={({ target }) => updateField(target)}
      />
      <button
        type="button"
        className="ProductEdit-Button"
        onClick={handleCreate}
      >
        Create
      </button>
    </form>
  );
};

export default ProductEdit;
