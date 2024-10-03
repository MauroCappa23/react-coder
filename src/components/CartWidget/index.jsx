import {Icon} from '@iconify/react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';


import { CartContext } from '../../context/cartContext';
import Pill from '../Pill';

const CartWidget = () => {

    const { cartItems } = useContext(CartContext);

    const quantity = cartItems.length > 0
    ? cartItems.map(item => item.quantity).reduce((acc, ant) => ant + acc)
    :0;
    
    return(
        <Link to={"/cart"}>
        <div className='Cart'>
        <Pill quantity={quantity} />
        <Icon className='IconCart' icon="bytesize:cart" />
        </div>
        </Link>
    )
};

export default CartWidget;
