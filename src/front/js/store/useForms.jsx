import { useState } from "react";

const useForms = (initialize = {}) => {
  const [formInput, setFormInput] = useState(initialize);

  const handleInput = (value, key) => {
    setFormInput((prev) => {
      const newFormInput = { ...prev };
      newFormInput[key] = value;
      console.log(newFormInput);
      return newFormInput;
    });
  };

  return { formInput, handleInput };
};

export default useForms;
