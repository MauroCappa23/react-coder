import { useContext, useState } from "react";
import { CartContext } from "../../../context/cartContext";
import { Link, useNavigate } from "react-router-dom";
import CartItems from "../../CartItems/index";
import PaymentForm from "../../PaymentForm/index";
import Modal from "react-modal";

Modal.setAppElement('#root');

const Cart = () => {
    const { cartItems, addItems, removeItem, clearCart } = useContext(CartContext);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const navigate = useNavigate();

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    const handleCheckout = () => {
        closeModal();
        clearCart();
        navigate("/thank-you");
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
                <PaymentForm total={total} onCheckout={handleCheckout} />
                <button onClick={closeModal}>Cancel</button>
            </Modal>
        </section>
    );
};

export default Cart;
