import React from 'react';
import DateDisplay from '../Common/DateDisplay';

export default (props) => (
    <div>
        <svg></svg>
        <span>
            {props.item.tag} - ${props.item.price} - <DateDisplay time={props.item.date} />
        </span>
    </div>
)