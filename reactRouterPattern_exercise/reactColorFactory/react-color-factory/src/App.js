import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import useLocalStorage from './useLocalStorage';
import Colors from './Colors';
import ColorPage from './ColorPage';
import NotFound from './NotFound';

function App() {
  const initialColors = [
    { name: "Red", value: "#ff0000" },
    { name: "Green", value: "#00ff00" },
    { name: "Blue", value: "#0000ff" },
  ];

  const [colors, setColors] = useLocalStorage('colors', initialColors);
  
  const handleNewColor = (newColor) => {
    setColors([...colors, newColor]);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/colors' element={<Colors colors={colors} onNewColor={handleNewColor} />} />
          <Route path='/colors/:colorName' element={<ColorPage colors={colors} />} />
          <Route path='*' element={<Navigate to="/colors" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
