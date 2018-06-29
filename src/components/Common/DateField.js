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
class DatePicker extends React.Component {

    changeDate = (event) =>{
        this.props.modifyDate({
            ...this.props.date,
            date: Number(event.target.value)
        })
    }
    changeMonth = (event) =>{
        this.props.modifyDate({
            ...this.props.date,
            month: Number(event.target.value)
        })
    }
    changeYear = (event) => {
        this.props.modifyDate({
            ...this.props.date,
            year: Number(event.target.value)
        })
    }
    render(){
        return (
            <div>
            <select onChange={this.changeMonth} value={this.props.date.month}>
                {MonthOptions}
            </select>
            <select onChange={this.changeDate} value={this.props.date.date}>
                {DateOptions}
            </select>
            <select onChange={this.changeYear} value={this.props.date.year}>
                {YearOptions}
            </select>
        </div> 
        )
    }
}

export default (props) => (
    <fieldset>
        <legend>{props.legend}</legend>
        <DatePicker date={props.date} modifyDate={props.modifyDate} />
    </fieldset>
)