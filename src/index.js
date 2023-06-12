import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Action from './Action';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import App from './App';

const componentMappings = {
  'menu_no=MENU_NO_001&menu_id=MENU_ID_002': App,
  'menu_no=MENU_NO_001&menu_id=MENU_ID_003': Action,
};

const root = ReactDOM.createRoot(
  document.getElementById('menu-display-layout')
);

function Main() {
  const location = useLocation();
  const hash = location.hash.slice(1);
  const ComponentToRender = componentMappings[hash] || null;
  return ComponentToRender ? <ComponentToRender /> : null;
}

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/main/*' element={<Main />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
