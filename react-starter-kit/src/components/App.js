import '../styles/App.scss';
import photoCat from '../images/gatito.jpg';

function App() {
  return (
    <div>
      <h1>hola mundo</h1>
      <img src={photoCat} title="gato" alt="foto gatito" />
    </div>
  );
}

export default App;
