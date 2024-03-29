import React from 'react';
import { Link } from "react-router-dom";
import AddColorForm from './AddColorForm';

function Colors({ colors, onNewColor }) {
  return (
    <div>
      <h1>Choose your Color!</h1>
      {colors.map(color => (
        <p key={color.name}>
          <Link to={`/colors/${color.name}`} style={{ color: color.value }}>
            {color.name}
          </Link>
        </p>
      ))}
      <AddColorForm onNewColor={onNewColor} />
    </div>
  );
}

export default Colors;
