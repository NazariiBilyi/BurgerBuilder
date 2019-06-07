import React from 'react';
import BuildControl from './BuildControl/BuildControl'

import './BuildControls.scss'

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];

const buildControls = (props) => (
    <div className='build-controls'>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong> </p>
        {controls.map(ctrl => (
            <BuildControl
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
                key={ctrl.label} label={ctrl.label}/>
        ))}
        <button disabled={!props.purchasable} className='order-button'>ORDER NOW</button>
    </div>
);

export default  buildControls;
