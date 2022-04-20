import '../styles/App.css';
import { useState } from 'react';

// Fichero src/components/App.js
const App = () => {
  // Creamos la constante de estado name con el valor inicial de string vacío
  const [name, setName] = useState('');
  const handleName = (ev) => {
    const newName = ev.target.value;
    setName(newName.replace(/[aeiou]/gi, 'i'));
  };
  return (
    <div>
      <form>
        <label htmlFor="name">Traductor MIMIMIM:</label>
        <input type="name" name="name" id="name" onChange={handleName} />
        <p>{name}</p>
      </form>
    </div>
  );
};

export default App;
