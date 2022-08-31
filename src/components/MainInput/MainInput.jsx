import { useEffect, useRef, useState } from "react";
import "./index.css";

const MainInput = ({ setMovieId }) => {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState('');
  const [inputClass, setInputClass] = useState("inactive");

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    inputValue && setMovieId(inputValue);
  };

  const onHandleInput = (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };
 
  return (
    <form className="MainInput" onSubmit={onHandleSubmit}>
      <input
        ref={inputRef}
        value={inputValue}
        onChange={onHandleInput}
        type="text" 
        className={inputClass}
      />
      <button type="submit" onClick={() => setInputClass("active")}>Search</button>
    </form>
  );
};

export default MainInput;
