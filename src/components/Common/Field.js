import React from 'react';

export default (props) => {
    let modifyText = (event) => {
        props.modifyText(event.target.value)
    } 
    return (
        <fieldset>
            <legend>{props.legend}</legend>
            <input onChange={modifyText} type='text' value={props.value} />
        </fieldset>
    );
}