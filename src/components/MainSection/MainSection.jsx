import { useState, useEffect } from "react";
import MainCard from "../MainCard";
import TopRatedList from "../TopRatedList";
import TopRatedFilteredList from "../TopRatedFilteredList";
import PopularList from "../PopularList";
import UpcomingList from "../UpcomingList";
import Counter from "../Counter";
import Modal from "../Modal";
import { GET } from "../../utils/api";
import "./index.scss";

const MainSection = () => {
  const [movieLists, setMovieLists] = useState({});
  const [filteredList, setFilteredList] = useState([]);
  const [value, setValue] = useState(8.5);
  const [isModalVisibile, setModalVisibility] = useState(false);
  const [modalData, setModalData] = useState();

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
        {movieLists.popular && (
          <MainCard
            cardData={movieLists.popular[0]}
            setModalVisibility={setModalVisibility}
            isModalVisibile={isModalVisibile}
            setModalData={setModalData}
          />
        )}
        <div className="mainSectionSide">
          {movieLists.topRated && (
            <TopRatedList
              cardData={movieLists.topRated}
              nCards={4}
              setModalVisibility={setModalVisibility}
              isModalVisibile={isModalVisibile}
              setModalData={setModalData}
            />
          )}
          {movieLists.popular && (
            <PopularList
              cardData={movieLists.popular}
              setModalVisibility={setModalVisibility}
              isModalVisibile={isModalVisibile}
              setModalData={setModalData}
            />
          )}
        </div>
      </div>

      {movieLists.upcoming && (
        <UpcomingList
          cardData={movieLists.upcoming}
          setModalVisibility={setModalVisibility}
          isModalVisibile={isModalVisibile}
          setModalData={setModalData}
        />
      )}
      {movieLists.topRated && (
        <TopRatedFilteredList
          cardData={filteredList}
          setModalVisibility={setModalVisibility}
          isModalVisibile={isModalVisibile}
          setModalData={setModalData}
        >
          <Counter
            increase={() => setValue((prev) => prev + 0.1)}
            decrease={() => setValue((prev) => prev - 0.1)}
            value={value}
          />
        </TopRatedFilteredList>
      )}
      {isModalVisibile && (
        <Modal
          data={modalData}
          isVisibile={isModalVisibile}
          onModalClick={setModalVisibility}
        />
      )}
    </div>
  );
};

export default MainSection;
