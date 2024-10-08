/*import { useContext, useState } from "react";
import { CartContext } from "../../../context/cartContext";
import { Link, useNavigate } from "react-router-dom";
import CartItems from "../../CartItems/index";
import PaymentForm from "../../PaymentForm/index";
import Modal from "react-modal";
import OrderConfirmation from "../../OrderConfirmation";

Modal.setAppElement('#root');

const Cart = () => {
    const { cartItems, addItems, removeItem, clearCart } = useContext(CartContext);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const navigate = useNavigate();

    const [cardInfo, setCardInfo] = useState({
        number: "",
        name: "",
        expiry: "",
        cvc: "",
        focus: ""
      });

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    const handleCheckout = () => {
        const order = {
            name: cardInfo.name,
            items: cartItems,
            total: total,
            date: new Date().toISOString(),
        };
        OrderConfirmation(order, clearCart, navigate)
    };

    return (
        <section className="main">
            <h2>Cart</h2>
            <div className="cart-page">
                <div className="cart">
                    {cartItems.length === 0 ? (
                        <>
                            <p className="cart__message">Cart Empty</p>
                            <Link to={"/games"}>
                                <button className="button-custom">Back to games</button>
                            </Link>
                        </>
                    ) : (
                        <table className="cart-table">
                            <thead>
                                <tr>
                                    <th> </th>
                                    <th> </th>
                                    <th>Game</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item) => (
                                    <CartItems 
                                        key={item.id}
                                        item={item}
                                        removeItem={removeItem}
                                        addItems={addItems}
                                    />
                                ))}
                            </tbody>
                        </table>
                    )}
                    {cartItems.length > 0 && (
                        <button className="button-custom" onClick={clearCart}>Clear Cart</button>
                    )}
                </div>
                {cartItems.length > 0 && (
                    <div>
                        <h3>Summary</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Subtotal:   </th>
                                    <td>${total}</td>
                                </tr>
                            </tbody>
                        </table>
                        <button className="button-custom" onClick={openModal}>Proceed to Checkout</button>
                    </div>
                )}
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Payment Modal"
                style={{
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)'
                    }
                }}
            >
                <h2>Confirm Your Purchase</h2>
                <PaymentForm 
                cardInfo={cardInfo}
                total={total} 
                onCheckout={handleCheckout} 
                />
                <div className="button-modal">
                <button className="button-purchase" onClick={closeModal}>Cancel</button>
                <button className="button-purchase" type="submit" onClick={handleCheckout}>Confirm Purchase</button>
                </div>
            </Modal>
        </section>
    );
};

export default Cart;*/

import { useContext, useState } from "react";
import { CartContext } from "../../../context/cartContext";
import { Link, useNavigate } from "react-router-dom";
import CartItems from "../../CartItems/index";
import PaymentForm from "../../PaymentForm/index";
import Modal from "react-modal";
import OrderConfirmation from "../../OrderConfirmation";

Modal.setAppElement('#root');

const Cart = () => {
  const { cartItems, addItems, removeItem, clearCart } = useContext(CartContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [cardInfo, setCardInfo] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    focus: ""
  });
  
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const navigate = useNavigate();

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleCheckout = () => {
    // Valida si la información de la tarjeta está completa antes de confirmar
    if (!cardInfo.number || !cardInfo.name || !cardInfo.expiry || !cardInfo.cvc) {
      alert("Please complete all card details.");
      return;
    }

    // Crear la orden de compra
    const order = {
      name: cardInfo.name,
      items: cartItems,
      total: total,
      date: new Date().toISOString(),
    };

    // Llamada a la función de confirmación
    OrderConfirmation(order, clearCart, navigate);
  };

  return (
    <section className="main">
      <h2>Cart</h2>
      <div className="cart-page">
        <div className="cart">
          {cartItems.length === 0 ? (
            <>
              <p className="cart__message">Cart Empty</p>
              <Link to={"/games"}>
                <button className="button-custom">Back to games</button>
              </Link>
            </>
          ) : (
            <table className="cart-table">
              <thead>
                <tr>
                  <th> </th>
                  <th> </th>
                  <th>Game</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <CartItems
                    key={item.id}
                    item={item}
                    removeItem={removeItem}
                    addItems={addItems}
                  />
                ))}
              </tbody>
            </table>
          )}
          {cartItems.length > 0 && (
            <button className="button-custom" onClick={clearCart}>Clear Cart</button>
          )}
        </div>
        {cartItems.length > 0 && (
          <div>
            <h3>Summary</h3>
            <table>
              <tbody>
                <tr>
                  <th>Subtotal: </th>
                  <td>${total}</td>
                </tr>
              </tbody>
            </table>
            <button className="button-custom" onClick={openModal}>Proceed to Checkout</button>
          </div>
        )}
      </div>
      
      {/* Modal de Pago */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Payment Modal"
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
          }
        }}
      >
        <h2>Confirm Your Purchase</h2>
        <PaymentForm cardInfo={cardInfo} setCardInfo={setCardInfo} />
        <div className="button-modal">
          <button className="button-purchase" onClick={closeModal}>Cancel</button>
          <button className="button-purchase" type="button" onClick={handleCheckout}>Confirm Purchase</button>
        </div>
      </Modal>
    </section>
  );
};

export default Cart;

