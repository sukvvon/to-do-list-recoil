import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { categories, categoryState, customCategoryState } from "../atoms";

function Category() {
  const [category, setCategory] = useRecoilState(categoryState);
  const customCategory = useRecoilValue(customCategoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) =>
    setCategory(event.currentTarget.value as any);
  return (
    <>
      <select value={category} onInput={onInput}>
        <option value={categories.TO_DO}>To do</option>
        <option value={categories.DOING}>Doing</option>
        <option value={categories.DONE}>Done</option>
        {customCategory.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </>
  );
}

export default Category;
