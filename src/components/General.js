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


class Items extends React.Component {
    constructor(props){
        super(props);
        this.state = {items: this.props.items};
    }

    handleNewData(newItems){
        this.setState({items: newItems});
    }

    render(){
        const itemList = this.state.items.map(item =>
            <Item key={item.id} item={item} />
        );
        return <span>{itemList}</span>;
    }
}

export {Item, Items};