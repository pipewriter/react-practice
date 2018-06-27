import React from 'react';

let Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

let MonthOptions = Months.map((month, index) => (
    <option key={index} value={index+1}>{month}</option>
))

let DateOptions = [];
for(let day = 1; day <= 31; day++){
    DateOptions.push(
        <option key={day} value={day}>{day}</option> 
    )
}
let now = new Date();

let nextYear = now.getFullYear() + 1;

//builds an array from
//2000, 2001, ... nextYear
let YearOptions = [];
for(let year = nextYear; year >= 2000; year--){
    YearOptions.push(
        <option key={year} value={year}>{year}</option>
    )
}

let [currentYear, currentMonth, currentDate] = [now.getFullYear(), now.getMonth() + 1, now.getDate()];

let DatePicker = () => (
    <div>
        <select value={currentMonth}>
            {MonthOptions}
        </select>
        <select value={currentDate}>
            {DateOptions}
        </select>
        <select value={currentYear}>
            {YearOptions}
        </select>
    </div>
)

export default (props) => (
    <fieldset>
        <legend>{props.legend}</legend>
        <DatePicker />
    </fieldset>
)