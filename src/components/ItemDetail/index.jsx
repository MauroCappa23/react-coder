const ItemDetail = ({ title, img, price, category}) => {
    return (
      <section className="item-detail">
        
        <picture className="item-detail__picture">
            <img className="item-detail__picture--img img-1" src={`/src/${img?.front}`} alt={`${title}`} />
            <img className="item-detail__picture--img img-2" src={`/src/${img?.disc}`} alt={`${title}`} />
        </picture>
        <article className="item-detail__info">
            <p className="item-detail__cat">{category}</p>
            <h2 className="item-detail__title">{title}</h2>
            <p className="item-detail__price">$ {price}</p>
            <form className="item-detail__form" action="" method="POST" encType="application/x-www-form-urlencoded">
                <div className="item-detail__form--container">
                    <button className="item-detail__form--btn" type="button">-</button>
                    <input className="item-detail__form--input" type="text" placeholder="0" />
                    <button className="item-detail__form--btn" type="button">+</button>
                </div>
                <input className="item-detail__form--submit" type="submit" value="Add to Cart" />
            </form>
        </article>
      </section>
    );
  };
  
  export default ItemDetail;