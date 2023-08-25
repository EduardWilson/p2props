import React from 'react';

export default function TextField(props){

const inputStyles = {
    backgroundColor: props.backgroundColor,
    color: 'black',
    padding: '10px 20px',
    borderColor: props.borderColor || 'none',
    borderBottom: props.borderBottom,
    borderRadius: props.borderRadius,
  };
  const id = props.id

    return <input  style={inputStyles} id={id}>
        </input>
}