import React from 'react';
import DateDisplay from '../Common/DateDisplay';
import ItemListing from './ItemListing';
import { sortItemsIntoWeeks } from '../../utils/items';

let Week = (props) => (
    <div>
        <div>
            <span>Week of <DateDisplay time={{date: 28, month: 5, year: 2018}} /><button>-</button></span>
        </div>
        <ItemListing item={{tag: 'pizza', price: 5}} />
        <ItemListing item={{tag: 'taco', price: 3}} />
    </div>
)

export default (props) => {
    sortItemsIntoWeeks(props.items)
    return (
        <div>
            {props.items.map((item) => {
                
            })}
            <Week />
        </div>
    )
}
