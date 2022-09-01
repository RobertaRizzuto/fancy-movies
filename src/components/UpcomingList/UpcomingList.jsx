import Card from "../Card";
import "./index.css";


const UpcomingList = ({ cardData }) => {
  return (
    <div className="upcomingListSection">
      <h2>Upcoming</h2>
    <div className="upcomingList">
      {
        cardData.map((el, i) => el && <Card cardData={el} cardClass="upcomingList"  key={i}/>)
      }
    </div></div>
  );
};

export default UpcomingList;
