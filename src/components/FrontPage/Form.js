import React from 'react';
import Field from '../Common/Field'
import DateField from '../Common/DateField';

export default () => {
    this.onClick = () => {
        window.location = 'budget/asdfasf'
    }
    return (
        <div>
            <Field legend={'Budget Name'} />
            <DateField legend={'Start Date'} />
            <button onClick={this.onClick}>Start Budgeting</button>
        </div>
    );
}