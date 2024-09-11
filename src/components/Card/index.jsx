import { Link } from "react-router-dom";
const Card = ({title, img, price, id, tag, category}) => {
    return(
        <article className="card">
        <Link to={`/detail/${id}`}>
          <picture className="card__picture">
            <span className="card__pill">{tag}</span>
            <img className="img-1" src={`/src/${img.front}`} alt={`${title}`} />
            <img className="img-2" src={`/src/${img.disc}`} alt={`${title}`} />
          </picture>
          <div className="card__info">
            <h4 className="card__cat">{category}</h4>
            <h3 className="card__title">{title}</h3>
            <p className="card__price">$ {price} .-</p>
          </div>
          </Link>
      </article>
    )
}
export default Card;