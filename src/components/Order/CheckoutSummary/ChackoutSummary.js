import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import './CheckoutSummary.scss';


const checkoutSummary = (props) => {
    return(
        <div className='checkout-summary'>
            <h1>We hope it tastes well!</h1>
            <div style={{width: '300px', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button btnType="danger" clicked={props.сheckoutCanceled}c>CANCEL</Button>
            <Button btnType="success" clicked={props.сheckoutContinued}>CONTINUE</Button>
        </div>
    )
}

export default checkoutSummary;
