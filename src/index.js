import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const userData = {
    budgetName: 'myBudget',
    startDate: {
        day: 1,
        month: 6,
        year: 2018,
        zone: 4
    },
    uid: 'example-uid-string',
    items: [
        {
            tag: 'pizza',
            price: 5.01,
            date: {
                day: 1,
                month: 7,
                year: 2018,
                zone: 4
            },
            id: 1
        },
        {
            tag: 'tacos',
            price: 3,
            date: {
                day: 2,
                month: 7,
                year: 2018,
                zone: 4
            },
            id: 2
        }
    ]
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();