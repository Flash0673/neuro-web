import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Mainpage from './pages/Mainpage';
import SignIn from './pages/signin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Mainpage/>} />
          <Route index element={<SignIn/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
