import '../styles/App.scss';
import { useState } from 'react';

function App() {
  const [numberA, setNumberA] = useState(0);
  const [numberB, setNumberB] = useState(0);
  const [result, setResult] = useState(0);
  const [negative, setNegative] = useState('');

  //funciones handle
  const handleChangeNumberA = (event) => {
    const newValue = parseInt(event.currentTarget.value);
    setNumberA(newValue);
  };
  const handleChangeNumberB = (event) => {
    const newValue = parseInt(event.currentTarget.value);
    setNumberB(newValue);
  };

  const handleClick = (event) => {
    event.preventDefault();
    setResult(numberA * numberB);
    const resultLocal = numberA * numberB;
    if (resultLocal < 0) {
      setNegative('negative');
    } else {
      setNegative('');
    }
    // console.log(setResult);
  };

  return (
    <form>
      <input
        value={numberA}
        onChange={handleChangeNumberA}
        type="number"
        name="numberA"
        id="a"
      />
      <input
        value={numberB}
        onChange={handleChangeNumberB}
        type="number"
        name="numberB"
        id="b"
      />
      <button onClick={handleClick}>Aceptar</button>
      <p className={`result ${negative}`}>{result}</p>
    </form>
  );
}

export default App;
