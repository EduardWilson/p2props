import React from 'react';

export default function Button(props){

const buttonStyles = {
    backgroundColor: props.backgroundColor,
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: props.borderRadius,
    cursor: 'pointer'  ,
  };
  const label = props.label

    return <button style={buttonStyles}>
       {label}
        </button>
}