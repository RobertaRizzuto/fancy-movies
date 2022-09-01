import Card from "../Card";
import "./index.css";


const UpcomingList = ({ cardData, setModalVisibility, isModalVisibile,setModalData}) => {
  return (
    <div className="upcomingListSection">
      <h2>Upcoming</h2>
    <div className="upcomingList">
      {
        cardData.map((el, i) => el && <Card cardData={el} cardClass="upcomingList"  key={i} setModalVisibility={setModalVisibility} isModalVisibile={isModalVisibile} setModalData={setModalData}/>)
      }
    </div></div>
  );
};

export default UpcomingList;
