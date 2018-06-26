import React from 'react';

export default (props) => (
    <React.Fragment>
        <h2>sup</h2>
        <span>your account is {props.match.params.account}</span>
    </React.Fragment>
)