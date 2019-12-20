import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_41QxinsXeQuOe0PfX1L00qxs00q3g1rZEi';

    const onToken = token => {
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
        label='Pay Now'
        name='Moshiurs E-Commerce'
        billingAddress
        shippingAddress
        image='http://svgshare.com/i/Gtt.svg'
        description={`Your Total payable is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;