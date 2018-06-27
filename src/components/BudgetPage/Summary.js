import React from 'react';
import DateDisplay from '../Common/DateDisplay'

export default () => (
    <div>
        <div>Date Started: <DateDisplay time={{month: 1, date: 1, year: 2018}} /></div>
        <div>Total Spent: $100.00 </div>
        <div>Spending Rate: $10.00 per day</div>
    </div>
)