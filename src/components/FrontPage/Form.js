import React from 'react';
import Field from '../Common/Field'
import DateField from '../Common/DateField';

let now = new Date();
let [currentYear, currentMonth, currentDate] = [now.getFullYear(), now.getMonth() + 1, now.getDate()];


class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            budgetName: 'Hello Mom',
            startDate: {
                date: 17,
                month: 11,
                year: 2019
            }
        }
    }
    updateDate = (newDate) =>{
        this.setState({
            ...this.state,
            startDate: newDate
        });
    }
    updateBudgetName = (newBudgetName) =>{
        this.setState({
            ...this.state,
            budgetName: newBudgetName
        });
    }
    submit = () => {
        alert(JSON.stringify(this.state))
    }

    render(){
        return(
            <div>
                <Field modifyText={this.updateBudgetName} legend={'Budget Name'} value={this.state.budgetName} />
                <DateField modifyDate={this.updateDate} legend={'Start Date'} date={this.state.startDate} />
                <button onClick={this.submit}>Start Budgeting</button>
            </div>
        )
    }

}
export default Form;