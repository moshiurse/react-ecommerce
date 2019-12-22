import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { CartIconContainer, ShoppingIconContainer,ItemCount } from './cart-icon.styles';

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <CartIconContainer
    onClick={toggleCartHidden}>
        <ShoppingIconContainer/>
        <ItemCount>{itemCount}</ItemCount>
    </CartIconContainer>
);

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})


export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);