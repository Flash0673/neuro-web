import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import SigninPage from './pages/SigninPage';
import GetStartedPage from './pages/GetStartedPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<MainPage/>} />
          <Route path='/signin' element={<SigninPage/>} />
          <Route path='/getstarted' element={<GetStartedPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
