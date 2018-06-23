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

ReactDOM.render(<Items items={data} />, document.getElementById('root'));
registerServiceWorker();
