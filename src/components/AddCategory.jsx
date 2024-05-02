import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setinputValue] = useState("");
  const onInputChange = (e) => {
    const {
      target: { value },
    } = e;
    setinputValue(value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;
    setinputValue("");
    onNewCategory(inputValue.trim());
  };
  return (
    <form onSubmit={onSubmit} aria-label="form">
      <input
        type="text"
        placeholder="Buscar Gif's"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
