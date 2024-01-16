import React from 'react';

const CustomButton = ({ label, ...btnProps }) => {
  return (
    <button className="custom-button" {...btnProps}>
      {label}
    </button>
  );
}

export default CustomButton;