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
            date: {
                date: 1,
                month: 6,
                year: 2018,
                zone: 4
            },
            id: 1
        },
        {
            tag: 'taco',
            price: 3.01,
            date: {
                date: 1,
                month: 5,
                year: 2018,
                zone: 4
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