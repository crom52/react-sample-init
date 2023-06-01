// import logo from './logo.svg';
import './App.css';
import { useState, useEffect, React } from 'react';

function MENU_ID_001() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      // Development mode
      console.log('Bundle Version:', process.env.REACT_APP_BUNDLE_VERSION);
      console.log('CSS Version:', process.env.REACT_APP_CSS_VERSION);
    } else {
      // Production mode
      const bundleVersion = window.__BUNDLE_VERSION__;
      const cssVersion = window.__CSS_VERSION__;
      console.log('Bundle Version:', bundleVersion);
      console.log('CSS Version:', cssVersion);
    }
  }, []);

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

export default MENU_ID_001;
