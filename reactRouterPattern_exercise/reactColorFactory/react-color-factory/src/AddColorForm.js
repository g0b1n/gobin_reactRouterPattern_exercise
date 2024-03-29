import React, { useState } from 'react';

function AddColorForm({ onNewColor }) {

    const [colorName, setColorName] = useState('');
    const [colorValue, setColorValue] = useState('#ffffff')

    const handleSubmit = (e) => {
        e.preventDefault();

        // check that color name and value is provided
        if (!colorName.trim() || !colorValue) return;

        // call the passed 'onNewColor' func with the obj containing name n value of color
        onNewColor({ name: colorName, value: colorValue });

        // reset the values
        setColorName('');
        setColorValue('#ffffff')
    };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='colorName'>Color Name</label>
        <input
            type='text'
            name='colorName'
            value={colorName}
            onChange={(e) => setColorName(e.target.value)}
            placeholder='Enter color name'
        />
        <label htmlFor='colorValue'>Color Value</label>
        <input
            type='color'
            name='colorValue'
            value={colorValue}
            onChange={(e) => setColorValue(e.target.value)}
        />
        <button type='submit'>Add Color</button>
      </form>
    </div>
  )
}

export default AddColorForm;
