import React from 'react';
import Field from '../Common/Field';
import DateField from '../Common/DateField';
import {getCurrentDate} from '../../utils/date';


let initialState = {
    itemsPurchased: '',
    cost: '',
    purchaseDate: getCurrentDate()
}

export default class NewItem extends React.Component{
    constructor(props){
        super(props);
        this.state = initialState;

    }
    changeItemsPurchased = (newItemsPurchased) => {
        this.setState({
            ...this.state,
            itemsPurchased: newItemsPurchased
        })
    }
    changeCost = (newCost) => {
        this.setState({
            ...this.state,
            cost: newCost
        })
    }
    changeDate = (newPurchaseDate) => {
        this.setState({
            ...this.state,
            purchaseDate: newPurchaseDate
        })
    }
    submitNewItem = () => {
        alert(JSON.stringify(this.state))
    }
    render(){
        return(
            <div>
                <h4>New Item</h4>
                <Field modifyText={this.changeItemsPurchased} value={this.state.itemsPurchased} legend={'Item(s) Purchased'} />
                <Field modifyText={this.changeCost} value={this.state.cost} legend={'Cost'} />
                <DateField modifyDate={this.changeDate} date={this.state.purchaseDate} legend={'Date'} />
                <button onClick={this.submitNewItem}>Add Item</button>
            </div>
        )
    }
}