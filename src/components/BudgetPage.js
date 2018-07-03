import React from 'react';
import Header from './BudgetPage/Header'
import Summary from './BudgetPage/Summary';
import NewItem from './BudgetPage/NewItem';
import PurchaseHistory from './BudgetPage/PurchaseHistory';

//props.match.params.account to find the account name


let account = {
    budgetName: 'ex',
    startDate: {
        date: 1,
        month: 1,
        year: 2018,
        zone: 4
    },
    uid: '................',
    items: [
        {
            tag: 'pizza',
            price: 5.01,
            id: 1,
            date: {
                date: 1,
                month: 6,
                year: 2018,
                zone: 4
            }
        },
        {
            tag: 'taco',
            price: 3.01,
            id: 2,
            date: {
                date: 1,
                month: 6,
                year: 2018,
                zone: 4
            }
        },
        {
            tag: 'ok man',
            price: 1,
            id: 3,
            date:{
                date: 1,
                month: 7,
                year: 2018,
                zone: 3
            }
        }
    ]
}
export default class BudgetPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            account
        }
        window.addEventListener("addNewItem",  (e) => {
            console.log("asdfsd")
            console.log(e.detail);
            this.addItem(e.detail);
        });
    }
    addItem = (item) => {
        this.state.account.items.push(item);
        this.setState({}); //why does this work?
    }
    render(){
        return(
            <div>
                <Header />
                <div>
                    <div>
                        <Summary account={this.state.account} />
                        <NewItem />
                    </div>
                    <PurchaseHistory items={this.state.account.items} />
                </div>
            </div>
        )
    }
}