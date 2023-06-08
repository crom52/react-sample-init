// import logo from './logo.svg';
import './App.css';
import { useState, React } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function App() {
  const [str, setRandomStr] = useState(0);

  const getRandomString = async () => {
    let stoveAccessToken = document.cookie
      .split(';')
      .find((e) => e.trim().startsWith('SPAT'));

    let stoveRefreshToken = document.cookie
      .split(';')
      .find((e) => e.trim().startsWith('SPRT'));

    let accessToken = !stoveAccessToken ? '' : stoveAccessToken.split('=')[1];
    let refreshToken = !stoveAccessToken ? '' : stoveRefreshToken.split('=')[1];

    const authenConfig = {
      headers: {
        authorization: `Bearer ${accessToken}`,
        sprt: refreshToken,
      },
    };

    const response = await axios.get(
      'http://localhost:8088/test/random-uuid',
      authenConfig
    );
    setRandomStr(response.data);
    console.log(response);
  };

  const location = useLocation();
  if (!location || !location.hash.includes('menu_no=1&menu_id=2')) {
    return;
  }
  return (
    <div className='App'>
      <h1> Random String: {str} </h1>
      <button onClick={getRandomString}>Call API </button>
      <header className='App-header'>
        <img
          src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-1024.png'
          className='App-logo'
          alt='logo'
        />
        {/* <Link className='App-link' to='/action'>
          Some Action
        </Link> */}
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
}

export default App;
