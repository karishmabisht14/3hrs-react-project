import React from "react";

const Input = props => {
    return (
        <>
            <label htmlFor={props.id}>{props.label}</label>
            <input type={props.type} id={props.id} value={props.value} onChange={props.onChange}/>
        </>
    );
};

export default Input;