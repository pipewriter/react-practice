import React from 'react';
import DateDisplay from '../Common/DateDisplay'
import {totalSpent} from '../../utils/items'

export default (props) => {

    return(
        <div>
            <div>Date Started: <DateDisplay time={props.account.startDate} /></div>
            <div>Total Spent: ${(totalSpent(props.account.items)).toFixed(2)} </div>
            <div>Spending Rate: ${} per day</div>
        </div>
    )
}