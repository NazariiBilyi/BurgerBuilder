import React from 'react';

import './Button.scss';

const button = (props) => {
        const btnClasses = 'button ' + props.btnType;
        console.log(btnClasses);

        return (
            <button
                disabled={props.disabled}
                className={btnClasses}
                onClick={props.clicked}>{props.children}</button>
        )
};

export default button;
