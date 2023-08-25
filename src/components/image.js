import React from 'react';

export default function Image(props) {

  const imgStyles = {
    backgroundImage: props.backgroundImage,
    borderRadius: props.borderRadius,
    width: props.width,
    height: props.height,
    objectFit: 'fill',

  };

  const alt = props.alt
  const src = props.src
  return <img style={imgStyles} alt={alt} src={src}>
  </img>
}