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
    constructor(props){
        super(props);
        this.state = {
            items: this.props.items,
            deepState: 0
        };
    }

    handleNewData(newItems, deepState){
        this.setState({items: newItems, deepState: deepState});
    }

    render(){
        const itemList = this.state.items.map(item =>
            <Item key={item.id} item={item} />
        );
        return (
            <span>
                <span>{itemList}</span>
                <Deep deepState={this.state.deepState} />
            </span>
        );
    }
}

export {Item, Items};
