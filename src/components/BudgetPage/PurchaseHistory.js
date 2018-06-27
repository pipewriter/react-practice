import React from 'react';
import DateDisplay from '../Common/DateDisplay';
import ItemListing from './ItemListing';

let Week = (props) => (
    <div>
        <div>
            <span>Week of <DateDisplay time={{date: 28, month: 5, year: 2018}} /><button>-</button></span>
        </div>
        <ItemListing item={{tag: 'pizza', price: 5}} />
        <ItemListing item={{tag: 'taco', price: 3}} />
    </div>
)

export default () => (
    <div>
        <Week />
        <Week />
        <Week />
    </div>
)