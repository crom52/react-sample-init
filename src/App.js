// import logo from './logo.svg';
import './App.css';
import { useState, React } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


function App() {
  const [str, setRandomStr] = useState(0);

  const getRandomString = async () => {
    const response = await axios.get('http://localhost:8079/test/random-number', { withCredentials: true });
    setRandomStr(response.data)
    console.log(response)
  };


  return (
    <div className='App'>
      <h1> Random String:  {str} </h1>
      <button onClick={getRandomString}>Call API </button>
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
          Learn React ...
        </a>
      </header>

    </div>
  );


}

export default App;
