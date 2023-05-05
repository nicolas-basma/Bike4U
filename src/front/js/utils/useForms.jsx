import { useState } from "react";

const useForms = (initialize = {}) => {
  const [formInput, setFormInput] = useState(initialize);

  const myHandleInput = (e) => {
    handleInput(e.target.value, e.target.name);
  };

  const handleInput = (value, key) => {
    setFormInput((prev) => {
      const newFormInput = { ...prev };
      newFormInput[key] = value;
      console.log(newFormInput);
      return newFormInput;
    });
  };

  return { formInput, handleInput, myHandleInput };
};

export default useForms;
