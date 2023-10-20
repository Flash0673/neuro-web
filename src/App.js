import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import SigninPage from './pages/SigninPage';
import GetStartedPage from './pages/GetStartedPage';
import FAQPage from './pages/FAQPage'
import TeamPage from './pages/TeamPage'
import PrivatePolicy from './pages/PrivatePolicyPage'
import Register from './pages/RegisterPage'
import ForgotPassword from './pages/ForgotPassword'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<MainPage/>} />
          <Route path='/signin' element={<SigninPage/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/getstarted' element={<GetStartedPage/>} />
          <Route path='/faq' element={<FAQPage/>} />
          <Route path='/team' element={<TeamPage/>} />
          <Route path='/private_policy' element={<PrivatePolicy/>} />
          <Route path='/restore_password' element={<ForgotPassword/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
