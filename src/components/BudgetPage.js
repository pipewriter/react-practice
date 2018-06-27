import React from 'react';
import Header from './BudgetPage/Header'
import Summary from './BudgetPage/Summary';
import NewItem from './BudgetPage/NewItem';
import PurchaseHistory from './BudgetPage/PurchaseHistory';

//props.match.params.account to find the account name
export default (props) => (
    <div>
        <Header />
        <div>
            <div>
                <Summary />
                <NewItem />
            </div>
            <PurchaseHistory />
        </div>
    </div>
)