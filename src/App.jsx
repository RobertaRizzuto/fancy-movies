import MovieEntity from "./components/MovieEntity";
import MainInput from "./components/MainInput";

import MainSection from "./components/MainSection";

import "./App.css";
import { useState } from "react";

function App() {
  const [movieID, setMovieId] = useState("550");

  return (
    <div className="App">
      <MainInput setMovieId={setMovieId} movieID={movieID} />
      <MainSection />
      <MovieEntity movieID={movieID} />
    </div>
  );
}

export default App;
