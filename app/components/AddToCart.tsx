/*make this dynamic button component reusable by passing the below 'use client' directive making it a client-side component*/ 
'use client';
import React from "react";

const AddToCart = () => {
  return (
    <div>
      <button
        onClick={() => console.log('Click')}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart;
