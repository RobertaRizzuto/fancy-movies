import MovieEntity from "./components/MovieEntity";
import MainInput from "./components/MainInput";
import Navbar from "./components/Navbar";

import MainSection from "./components/MainSection";

import "./App.scss";
import { useState } from "react";

function App() {
  const [movieID, setMovieId] = useState("550");

  return (
    <div className="App">
      <Navbar>
        <MainInput setMovieId={setMovieId} movieID={movieID} />
      </Navbar>

      <MainSection />
      <MovieEntity movieID={movieID} />
    </div>
  );
}

export default App;
