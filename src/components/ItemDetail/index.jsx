import { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";

const ItemDetail = ({ title, img, price, category}) => {
  let [ quantity, setQuantity ] = useState(0);

  const { addItems } = useContext(CartContext);
  
  const increase = () => {
    setQuantity(preQuantity => preQuantity + 1);
  };

  const decrease = () => {
    setQuantity(prevQuantity > 1 ? prevQuantity - 1 : 1);
  };

  const addToCart = () => {
    addItems({title, img, price, category, quantity})
  }

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
                    <button className="item-detail__form--btn" type="button" onClick={decrease}>-</button>
                    <input className="item-detail__form--input" type="text" value={quantity} readOnly/>
                    <button className="item-detail__form--btn" type="button" onClick={increase}>+</button>
                </div>
                <input className="item-detail__form--submit" type="button" value="Add to Cart" onClick={addToCart} />
            </form>
        </article>
      </section>
    );
  };
  
  export default ItemDetail;