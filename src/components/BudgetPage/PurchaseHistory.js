import React from 'react';
import DateDisplay from '../Common/DateDisplay';
import ItemListing from './ItemListing';
import { sortItemsIntoWeeks } from '../../utils/items';

let Week = (props) => (
    <div>
        <div>
            <span>Week of <DateDisplay time={props.week.startDate} /><button>-</button></span>
        </div>
        {props.week.items.map((item) => (
            <ItemListing key={item.id} item={item} />
        ))}
    </div>
)

export default (props) => {
    let weeks = sortItemsIntoWeeks(props.items);
    console.log(weeks);
    return (
        <div>
            {weeks.map((week) => (
                <Week key={week.key} week={week} />
            ))}
        </div>
    )
}
