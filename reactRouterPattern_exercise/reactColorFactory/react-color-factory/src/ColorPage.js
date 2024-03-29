import React from 'react';
import { useParams, Navigate } from 'react-router-dom';

import './ColorPage.css'

function ColorPage({ colors }) {
  const { colorName } = useParams();
  const color = colors.find(color => color.name === colorName);

  if (!color) {
    return <Navigate to="/NotFound" />;
  }

  const style = {
    width: "100vw",
    height: "100vh",
    backgroundColor: color.value,
  };

  return (
    <div style={style} className='colorPage-container'>
      <h1 className='colorName'>The {colorName} Page</h1>
    </div>
  );
}

export default ColorPage;
