// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className='App'>
      <header className='App-header'>
        {/* <img
          src='https://static.cdnlogo.com/logos/r/63/react.svg'
          className='App-logo'
          alt='logo'
        /> */}
        <div><a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
          <h1> You clicked the button {count} times</h1>
          <button onClick={incrementCount}>Click Me</button>
        </div>


      </header>

    </div>
  );
  function incrementCount() {
    setCount((previousCount) => previousCount + 1);
  }
}

export default App;
