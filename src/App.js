import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Mainpage from './pages/Mainpage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Mainpage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
