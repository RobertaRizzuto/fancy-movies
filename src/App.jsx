import MovieEntity from "./components/MovieEntity";
import MainInput from "./components/MainInput";
import "./App.css";
import { useState } from "react";

function App() {
  const [movieID, setMovieId] = useState('550');

  return (
    <div className="App">
      <MainInput
        setMovieId={setMovieId}
        movieID={movieID}
        onHandleSubmit={(e) => {
          e.preventDefault();
        }}
      />
      <MovieEntity movieID={movieID} />
    </div>
  );
}

export default App;
