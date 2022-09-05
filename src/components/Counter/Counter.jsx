import "./index.scss";

const Counter = ({ increase, decrease, value }) => {
  return (
    <div className="counter">
      {" "}
      <button className="decrease-btn" onClick={decrease}>
        -
      </button>
      <p>{value.toFixed(1)}</p>
      <button className="increase-btn" onClick={increase}>
        +
      </button>
    </div>
  );
};

export default Counter;
