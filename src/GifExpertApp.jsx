import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);
  const onAddCategory = (newCategory) => {
    const lowerCaseCategories = categories.map((category) =>
      category.toLowerCase()
    );
    if (lowerCaseCategories.includes(newCategory.toLowerCase())) return;
    setCategories([...categories, newCategory]);
  };
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={onAddCategory} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};