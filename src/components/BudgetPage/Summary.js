import React from 'react';
import DateDisplay from '../Common/DateDisplay'
import {totalSpent} from '../../utils/items'
import {daysPassed} from '../../utils/date'

export default (props) => {

    return(
        <div>
            <div>Date Started: <DateDisplay time={props.account.startDate} /></div>
            <div>Total Spent: ${(totalSpent(props.account.items)).toFixed(2)} </div>
            <div>Spending Rate: ${daysPassed(props.account.startDate)} per day</div>
        </div>
    )
}