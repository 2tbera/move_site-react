import React from 'react';

const button = (props) => (
    <button onClick={props.clicked}>
        {props.title}
    </button>
);

export default button;

