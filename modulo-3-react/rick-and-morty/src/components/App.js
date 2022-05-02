import '../styles/App.scss';
import getCharactersApi from '../services/fetch.js';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router';
import { matchPath } from 'react-router-dom';
import Header from './Header';
import ListCharacter from './ListCharacter';

import Footer from './Footer';
import CharacterDetail from './CharacterDetail';

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
  const handleClickReset = () => {
    setInput('');
    setSelect('');
  };
  //buscar la peli que quiero buscar en mas info

  const { pathname } = useLocation();
  const dataPath = matchPath('/character/:id', pathname);
  const characterId = dataPath !== null ? parseInt(dataPath.params.id) : null;
  const characterFound = data.find((item) => item.id === characterId);

  return (
    <div>
      <Header
        input={input}
        select={select}
        handleChangeInput={handleChangeInput}
        handleChangeSelect={handleChangeSelect}
        handleClickReset={handleClickReset}
      />
      <Routes>
        <Route
          path="/"
          element={
            <ListCharacter input={input} listData={data} select={select} />
          }
        />

        <Route
          path="/character/:id"
          element={
            <CharacterDetail
              character={characterFound === undefined ? {} : characterFound}
            />
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
