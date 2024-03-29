import React from 'react';
import DateDisplay from '../Common/DateDisplay';
import ItemListing from './ItemListing';
import { sortItemsIntoWeeks } from '../../utils/items';

class Week extends React.Component{
    constructor(props){
        super(props);
        this.state = {expanded: props.index === 0};
    }    
    render(){
        let toggleExpand = () =>{
            this.setState({expanded: !this.state.expanded})
        }
        let buttonContent;
        if(this.state.expanded){
            buttonContent = '-';
        }else{
            buttonContent = '+ ' + this.props.week.items.length;
        }
        let buttonMaybe = <button onClick={toggleExpand}>{buttonContent}</button>;
        if(this.props.week.items.length === 0){
            buttonMaybe = <span style={{color: 'red'}}> - 0 items purchased</span>
        }
        return(
            <div>
                <div>
                    <span>Week of <DateDisplay time={this.props.week.startDate} />{buttonMaybe}</span>
                </div>
                <div>
                    {this.state.expanded && this.props.week.items.map((item) => (
                        <ItemListing key={item.id} item={item} />
                    ))}
                </div>
            </div>
        )
    }
}

export default (props) => {
    let weeks = sortItemsIntoWeeks(props.items);
    console.log(weeks);
    return (
        <div>
            {weeks.map((week, index) => (
                <Week key={week.key} index={index} week={week} />
            ))}
        </div>
    )
}
