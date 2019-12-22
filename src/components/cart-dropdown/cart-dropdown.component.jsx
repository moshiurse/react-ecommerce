import React from 'react';

import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { EmptyMessage,CartDropDownContainer,CartItems,DropDownButton } from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <CartDropDownContainer>
        <CartItems>
            {
                cartItems.length?
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem}/>
                ))
                :
                <EmptyMessage>Your cart is empty</EmptyMessage>
            }
        </CartItems>
        <DropDownButton onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
         } }>CHECKOUT</DropDownButton>
    </CartDropDownContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));