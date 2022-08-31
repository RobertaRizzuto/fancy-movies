import { useState, useEffect } from "react";
import MainCard from "../MainCard";
import TopRatedList from "../TopRatedList";
import PopularList from "../PopularList";
import UpcomingList from "../UpcomingList";
import { GET } from "../../utils/api";
import "./index.css";

const MainSection = () => {
  const [movieLists, setMovieLists] = useState({});

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
  console.log(movieLists);
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
    </div>
  );
};

export default MainSection;
