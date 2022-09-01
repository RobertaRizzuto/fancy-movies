import Card from "../Card";
import "./index.css";


const PopularList = ({ cardData, setModalVisibility, isModalVisibile,setModalData }) => {
  return (
    <div className="popularListSection">
      <h2>Popular</h2>
    <div className="popularList">
      {
        cardData.map((el, i) => <Card cardData={el} cardClass="popularList"  key={i} setModalVisibility={setModalVisibility} isModalVisibile={isModalVisibile} setModalData={setModalData}/>)
      }
    </div></div>
  );
};

export default PopularList;
