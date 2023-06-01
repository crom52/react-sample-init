import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Action from './Action';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename='parentMenu/subMenu'>
      <Routes>
        <Route path='/MENU_001' element={<App />} />
        <Route path='/MENU_001/action' element={<Action />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
