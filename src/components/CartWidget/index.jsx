import {Icon} from '@iconify/react';

const CartWidget = ({quantity}) => {
    return(
        <div className='Cart'>
        <span className='pill'>{quantity = 0}</span>
        <Icon className='IconCart' icon="bytesize:cart" />
        </div>
    )
};

export default CartWidget;
