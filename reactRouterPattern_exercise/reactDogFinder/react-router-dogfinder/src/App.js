import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dogs from './Dogs';
import DogDetails from './DogDetails';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/dogs' element={<Dogs />} />
        <Route path='/dogs/:name' element={<DogDetails />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
