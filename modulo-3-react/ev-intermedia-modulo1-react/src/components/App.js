import '../styles/App.css';
import Header from './Header';
import Main from './Main';

function App() {
  return (
    <div>
      <header className="header">
        <Header />
      </header>
      <main className="main">
        <Main />
      </main>
    </div>
  );
}

export default App;
