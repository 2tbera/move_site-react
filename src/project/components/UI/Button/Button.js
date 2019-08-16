import React from 'react';


const button = (props) => (
    <button
        disabled={props.disabled}
        className='btn w-100'
        onClick={props.clicked}>{props.children}</button>
);

export default button;
