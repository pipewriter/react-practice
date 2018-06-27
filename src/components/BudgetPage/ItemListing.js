import React from 'react';
import DateDisplay from '../Common/DateDisplay';

export default (props) => (
    <div>
        <svg></svg>
        <span>
            {props.item.tag} - ${props.item.price} - <DateDisplay time={{month: 6, date: 25, year: 2018}} />
        </span>
    </div>
)