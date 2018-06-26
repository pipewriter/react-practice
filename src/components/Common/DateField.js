import React from 'react';

let Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

let MonthOptions = Months.map((month, index) => (
    <option key={index} value={index+1}>{month}</option>
))

let DateOptions = Array(31).map((val, index) => index + 1).map(day => (
    <option key={day} value={day}>{day}</option> 
));

let nextYear = (new Date()).getFullYear() + 1;

//builds an array from
//2000, 2001, ... nextYear
let YearOptions = Array(nextYear - 2000).map((val, index) =>(
    2000 + index
)).map(year => (
    <option key={year} value={year}>{year}</option>
));
console.log(YearOptions)


let DatePicker = (
    <div>
        <select>
            {MonthOptions}
        </select>
        <select>
            {DateOptions}
        </select>
        <select>
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