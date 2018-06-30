import React from 'react';
import Field from '../Common/Field';
import DateField from '../Common/DateField';
import {getCurrentDate} from '../../utils/date';


let initialState = {
    itemsPurchased: '',
    cost: '',
    purchaseDate: getCurrentDate()
}

export default () => (
    <div>
        <h4>New Item</h4>
        <Field legend={'Item(s) Purchased'} />
        <Field legend={'Cost'} />
        <DateField date={getCurrentDate()} legend={'Date'} />
        <button>Add Item</button>
    </div>
)