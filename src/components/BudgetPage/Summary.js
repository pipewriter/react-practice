import React from 'react';
import DateDisplay from '../Common/DateDisplay'
import calcRates from '../../utils/items'

export default (props) => {
    let startDate = props.account.startDate;
    let items = props.account.items;
    let rates = calcRates(items, startDate);

    return(
        <div>
            <div>Date Started: <DateDisplay time={startDate} /></div>
            <div>Total Spent: ${(rates.total).toFixed(2)} </div>
            <div>Spending Rate: ${(rates.dailyRate).toFixed(2)} per day</div>
        </div>
    )
}