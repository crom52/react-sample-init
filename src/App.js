// import logo from './logo.svg';
import './App.css';
import { useState, React } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function App() {
  const [str, setRandomStr] = useState(0);
  const API_GW_HOST = 'http://localhost:8088';

  const getRandomString = async () => {
    let cookies = document.cookie.split(';');
    let stoveAccessToken = cookies.find((e) => e.trim().startsWith('SPAT'));
    let stoveRefreshToken = cookies.find((e) => e.trim().startsWith('SPRT'));

    let accessToken = !stoveAccessToken ? '' : stoveAccessToken.split('=')[1];
    let refreshToken = !stoveAccessToken ? '' : stoveRefreshToken.split('=')[1];

    const authenConfig = {
      headers: {
        spat: accessToken,
        sprt: refreshToken,
      },
    };

    const response = await axios.get(
      `${API_GW_HOST}/test/random-uuid`,
      authenConfig
    );

    setRandomStr(response.data || '');
  };

  const location = useLocation();
  if (!location || !location.hash.includes('menu_no=1&menu_id=2')) {
    return;
  }
  // return (
  //   <div className='App'>
  //     <h1> Random String: {str} </h1>
  //     <button onClick={getRandomString}>Call API </button>
  //     <header className='App-header'>
  //       <img
  //         src='https://images.ctfassets.net/umhrp0op95v1/VvjFjkl41oG52Nf71hZbr/e39168a3549882dd41f8b23187aa576c/LA_Y2_KA_Share_1200x630.jpg'
  //         className='App'
  //         alt='logo'
  //       />

  //       <a
  //         className='App-link'
  //         href='http://local.onstove.com:8078/main#menu_no=1&menu_id=3'
  //         target='_blank'
  //         rel='noopener noreferrer'
  //       >
  //         Other menu
  //       </a>
  //     </header>
  //   </div>
  // );
  const data = [
    { id: 1, name: 'John', age: 25, note: 'New York' },
    { id: 2, name: 'Jane', age: 30, note: 'London' },
    { id: 3, name: 'Mark', age: 35, note: 'Paris' },
    { id: 4, name: 'Emily', age: 28, note: 'Sydney' },
  ];

  return (
    <div>
      <table className='data-grid'>
        <caption>Data Grid Example</caption>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{str || ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={getRandomString}>Call API Random UUID </button>
    </div>
  );
}

export default App;
