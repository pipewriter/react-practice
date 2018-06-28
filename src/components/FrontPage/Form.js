import React from 'react';
import Field from '../Common/Field'
import DateField from '../Common/DateField';

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            budgetName: '',
            startDate: {
            }
        }
    }

    render(){
        return(
            <div>
                <Field legend={'Budget Name'} />
                <DateField legend={'Start Date'} />
                <button onClick={() => (window.location = 'budget/asdfasf')}>Start Budgeting</button>
            </div>
        )
    }

}
export default Form;