import '../styles/App.css';

function App() {
  return (
    
    <div>
        <header className="header">
          <a href="https://adalab.es/">
            <img
              title="logo Adalab"
              className="logo"
              src="./images/adalab-logo-155x61.png"
              alt="logo Adalab"
            />
          </a>
          <nav>
            <ul className="info">
              <li>
                <a
                  title="blog"
                  className="link_blog"
                  href="https://adalab.es/blog/"
                >
                  Blog
                </a>
              </li>
              <li className="contact">
                <a
                  title="contacto"
                  className="link_contact"
                  href="https://adalab.es/contacto/"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="main">
          <div className="title">
            <h1>creando diversidad digital</h1>
          </div>
        </main>
        </div>
      
   
  );
}

export default App;
