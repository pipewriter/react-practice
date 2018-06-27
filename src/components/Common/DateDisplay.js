import React from 'react';

export default (props) => (
    <span>
        {props.time.month}/{props.time.date}/{props.time.year}
    </span>
)