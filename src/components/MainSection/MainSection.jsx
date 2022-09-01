import { useState, useEffect, useCallback } from "react";
import MainCard from "../MainCard";
import TopRatedList from "../TopRatedList";
import TopRatedFilteredList from "../TopRatedFilteredList";
import PopularList from "../PopularList";
import UpcomingList from "../UpcomingList";
import Counter from "../Counter";
import { GET } from "../../utils/api";
import "./index.css";

const MainSection = () => {
  const [movieLists, setMovieLists] = useState({});
  const [filteredList, setFilteredList] = useState([]);
  const [value, setValue] = useState(8.5);

  useEffect(() => {
    GET("movie", "popular", "&language=en-US&page=1").then((data) =>
      setMovieLists((prev) => ({ ...prev, popular: data.results }))
    );

    GET("movie", "top_rated", "&language=en-US&page=1").then((data) =>
      setMovieLists((prev) => ({ ...prev, topRated: data.results }))
    );

    GET("movie", "upcoming", "&language=en-US&page=1").then((data) =>
      setMovieLists((prev) => ({ ...prev, upcoming: data.results }))
    );
  }, []);

  useEffect(
    () =>
      movieLists.topRated &&
      setFilteredList(
        movieLists.topRated.filter((el) => el.vote_average >= value)
      ),
    [movieLists, value]
  );
 
  return (
    <div className="mainSection">
      <div className="mainSectionTop">
        {movieLists.popular && <MainCard cardData={movieLists.popular[0]} />}
        <div className="mainSectionSide">
          {movieLists.topRated && (
            <TopRatedList cardData={movieLists.topRated} nCards={4} />
          )}
          {movieLists.popular && <PopularList cardData={movieLists.popular} />}
        </div>
      </div>

      {movieLists.upcoming && <UpcomingList cardData={movieLists.upcoming} />}
      {movieLists.topRated && (
        <TopRatedFilteredList cardData={filteredList}>
          <Counter
            increase={() => setValue((prev) => prev + 0.1)}
            decrease={() => setValue((prev) => prev - 0.1)}
            value={value}
          />
        </TopRatedFilteredList>
      )}
    </div>
  );
};

export default MainSection;
