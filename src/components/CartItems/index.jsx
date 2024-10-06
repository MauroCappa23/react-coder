import { Icon } from "@iconify/react/dist/iconify.js";

const CartItems = ({ item, removeItem, addItems }) => {
    return (
      <tr className="cart-item">
        <td>
          <Icon
            icon="ph:trash-bold"
            className="carrito-item__icon"
            onClick={() => removeItem(item.id)}
          />
        </td>
        <td>
          <picture className="cart-item__picture">
            <img
              className="cart-item__img"
              src={`src/${item.img.disc}`}
              alt={item.title}
            />
          </picture>
        </td>
        <td>{item.title}</td>
        <td>${item.price}</td>
        <td>
          <button className="item-detail__form--btn" onClick={() => addItems({ ...item, quantity: -1 })}>-</button>
          <span>{item.quantity}</span>
          <button className="item-detail__form--btn" onClick={() => addItems({ ...item, quantity: 1 })}>+</button>
        </td>
        <td>${item.price * item.quantity}</td>
      </tr>
    );
  };
  
  export default CartItems;