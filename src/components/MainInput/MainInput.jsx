import { useRef, useState } from "react";
import "./index.css";

const MainInput = ({ setMovieId }) => {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const [isInputVisibile, setInputVisibility] = useState(false);



  const onHandleSubmit = (e) => {
    e.preventDefault();
    inputValue && setMovieId(inputValue);
    window.scroll({
      top: 2500,
      left: 0,
      behavior: "smooth",
    });
    setInputVisibility(false);
  };

  const onHandleInput = (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      {!isInputVisibile && (
        <li> <a href="#"onClick={() => setInputVisibility(!isInputVisibile)}>SEARCH</a> </li>
      )}
      {isInputVisibile && (
        <form className="MainInput" onSubmit={onHandleSubmit}>
          <input
            ref={inputRef}
            value={inputValue}
            onChange={onHandleInput}
            type="text"
          />
          <button type="submit">Search</button>
        </form>
      )}
    </>
  );
};

export default MainInput;
