import { useState } from "react";
import PropTypes from "prop-types";
export const AddCategory = ({ onAddCategory }) => {
  const [newCategory, setNewCategory] = useState("");

  const onChangeCategory = (e) => {
    const value = e.target.value;
    setNewCategory(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onAddCategory(newCategory);
    setNewCategory("")
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
       
        placeholder="find a category"
        value={newCategory}
        onChange={onChangeCategory}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onAddCategory: PropTypes.func,
};
