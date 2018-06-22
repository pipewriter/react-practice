import React from 'react';
import './BudgetBatComponents.css';


function Item(props){
    return (
        <div class="item">
            <span>Tag: {props.item.tag}</span>
            <span>Price: {props.item.price}</span>
            <span>Date: {props.item.date}</span>
        </div>
    );
}

let Items = (props) => {
    const itemList = props.items.map(item =>
            <Item key={item.id} item={item} />
        );
    return itemList;
}

export default Items;