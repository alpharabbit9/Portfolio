// src/components/ui/GradientText.jsx
import React from 'react';

const GradientText = ({ children }) => {
  return (
    <h1
      className="text-5xl font-bold text-transparent bg-clip-text 
                 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 
                 bg-[length:200%_200%] animate-gradient-x"
    >
      {children}
    </h1>
  );
};

export default GradientText;
