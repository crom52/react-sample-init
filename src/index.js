import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MENU_002 from './MENU_002';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/MENU_001' element={<App />} />
        <Route path='/MENU_002' element={<MENU_002 />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
