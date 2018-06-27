import React from 'react';
import Field from '../Common/Field';
import DateField from '../Common/DateField'

export default () => (
    <div>
        <h4>New Item</h4>
        <Field legend={'Item(s) Purchased'} />
        <Field legend={'Cost'} />
        <DateField legend={'Date'} />
        <button>Add Item</button>
    </div>
)