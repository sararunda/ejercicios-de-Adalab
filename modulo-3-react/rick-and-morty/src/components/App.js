import '../styles/App.scss';
import getCharactersApi from '../services/fetch.js';
import { useEffect, useState } from 'react';
import Header from './Header';
import ListCharacter from './ListCharacter';
import Footer from './Footer';

function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState('');
  const [select, setSelect] = useState('');
  useEffect(() => {
    getCharactersApi().then((apiData) => {
      setData(apiData);
    });
  }, []);
  const handleChangeInput = (inputValue) => {
    setInput(inputValue);
  };
  const handleChangeSelect = (selectValue) => {
    setSelect(selectValue);
  };

  return (
    <div>
      <Header
        input={input}
        select={select}
        handleChangeInput={handleChangeInput}
        handleChangeSelect={handleChangeSelect}
      />
      <ListCharacter input={input} listData={data} select={select} />
    </div>
  );
}

export default App;
