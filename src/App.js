// import logo from './logo.svg';
import './App.css';
import { useState, useEffect, React } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';



function App() {
  const [count, setCount] = useState(0);


  return (
    <div className='App'>
      <h1> You clicked the button {count} times</h1>
      <button onClick={incrementCount}>Click Me</button>
      <header className='App-header'>
        <img
          src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-1024.png'
          className='App-logo'
          alt='logo'
        />
        <Link className='App-link' to='/MENU_002'>
          MENU_002
        </Link>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>

    </div>
  );
  function incrementCount() {
    setCount((previousCount) => previousCount + 1);
  }
}

export default App;
