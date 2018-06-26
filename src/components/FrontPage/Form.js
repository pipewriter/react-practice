import React from 'react';
import Field from '../Common/Field'
import DateField from '../Common/DateField';

export default () => (
    <div>
        <Field legend={'Budget Name'} />
        <DateField legend={'Start Date'} />
        <button>Start Budgeting</button>
    </div>
)