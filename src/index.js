import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Items} from './components/General';
import registerServiceWorker from './registerServiceWorker';

const data = [
    {
      tag: 'pizza',
      price: 3,
      date: 'jun 1',
      id: 1
    },
    {
      tag: 'cake',
      price: 10.11,
      date: 'tuesday',
      id: 2
    }
  ]

const data2 = [
    {
        tag: 'butt',
        price: 5, 
        date: 'may 5',
        id: 3
    },
    {
        tag: 'pizza2',
        price: 10, 
        date: 'jun 1',
        id: 1
    }
]

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

ReactDOM.render(<Items items={data} />, document.getElementById('root'));
registerServiceWorker();