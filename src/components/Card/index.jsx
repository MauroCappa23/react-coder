const Card = ({title, img, price, tag, href, category}) => {
    return(
        <article className="card">
        <a href={href}>
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
        </a>
      </article>
    )
}
export default Card;