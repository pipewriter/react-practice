import React from 'react';
import Field from '../Common/Field'
import DateField from '../Common/DateField';
import {getCurrentDate} from '../../utils/date';

let initialState = {
    budgetName: '',
    startDate: getCurrentDate()
}

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = initialState;
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
        window.location='budget/testbudget'
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