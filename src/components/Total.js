import React from 'react';

const Total = props => {
  console.log('Total.js:', props);
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.car.price + props.car.additionalPrice}</h4>
    </div>
  );
};

export default Total;
