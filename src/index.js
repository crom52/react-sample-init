import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Action from './Action';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import App from './App';

const componentMappings = {
  'menu_no=1&menu_id=2': App,
  'menu_no=1&menu_id=3': Action,
};

const root = ReactDOM.createRoot(document.getElementById('root'));
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
