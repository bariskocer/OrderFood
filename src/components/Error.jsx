import React from "react";

const Error = ({ title, message }) => {
    console.log('ERROR');
  return (
    <div>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
};

export default Error;
