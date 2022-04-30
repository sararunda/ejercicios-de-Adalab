import '../styles/App.scss';
import getCharactersApi from '../services/fetch.js';
import { useEffect, useState } from 'react';
import Header from './Header';
import ListCharacter from './ListCharacter';
import Footer from './Footer';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getCharactersApi().then((apiData) => {
      setData(apiData);
      console.log(apiData);
    });
  }, []);

  return (
    <div>
      <ListCharacter listData={data} />
    </div>
  );
}

export default App;
