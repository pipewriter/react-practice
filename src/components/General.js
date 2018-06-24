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

class Deep extends React.Component {
    render(){
        return(
            <h1>{this.props.deepState.sodeep}</h1>
        );
    }
}

class Items extends React.Component {
    render(){
        const itemList = this.props.items.map(item =>
            <Item key={item.id} item={item} />
        );
        return (
            <span>{itemList}</span>
        );
    }
}

export {Item, Items};
