import './index.css';

const Modal = ({data, isVisibile, onModalClick}) => {
  return isVisibile && (
    <div className="Modal__overlay"onClick={() => onModalClick(false)}>
        <div className="Modal" >
        <img className="Modal__img" src={`https://image.tmdb.org/t/p/w342${ data.poster_path }`} alt={data.title} />
       <div className="Modal__text"> <h2 className="Modal__header">{data.title}</h2>
        <p className="Modal__desc">{data.overview}</p></div>
      </div>
    </div>
  )
}

export default Modal;