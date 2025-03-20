import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import GifGrid from "./components/Gifgrid";
export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newValue) => {
    if (
      (newValue == "" && newValue.trim().length < 1) ||
      categories.includes(newValue)
    )
      return;
    setCategories((prev) => [newValue, ...prev]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onAddCategory={onAddCategory} />

      {categories.map((cat) => (
        <GifGrid key={cat} category={cat} />
      ))}
    </>
  );
};
