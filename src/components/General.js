import React from 'react';
import './General.css';

class Item extends React.Component{

    render(){
        return (
            <div className="item">
                <span>Tag: {this.props.item.tag}</span>
                <span>Price: {this.props.item.price}</span>
                <span>Date: {this.props.item.date}</span>
            </div>
        );
    };
}

let Items = (props) => {
    const itemList = props.items.map(item =>
            <Item key={item.id} item={item} />
        );
    return itemList;
}

export default {Item, Items};