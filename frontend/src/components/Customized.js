import React from 'react';
import { Rectangle } from 'recharts';

const CustomizedRectangleContent = (props) => {
  const { x, y, width, height, index, payload } = props;

  return (
    <Rectangle
      x={x}
      y={y}
      width={width}
      height={height}
      fill={index % 2 === 0 ? '#0088FE' : '#00C49F'}
    />
  );
};

export default CustomizedRectangleContent;
