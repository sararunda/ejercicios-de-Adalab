import '../styles/App.scss';
import { useState } from 'react';

function App() {
  //state variables
  const [inputForm, setInputForm] = useState({
    name: '',
    lastname: '',
    phone: '',
    email: '',
  });
  const [contactList, setContactList] = useState([]);
  const [inputSearch, setInputSearch] = useState('');

  //functions

  const renderList = () => {
    console.log('contact list', contactList);
    return contactList
      .filter((user) =>
        user.name.toLocaleLowerCase().includes(inputSearch.toLocaleLowerCase())
      )
      .map((data, index) => (
        <li key={index} className="contact__item">
          <p className="contact__name">
            <label className="contact__label">Nombre:</label>
            {data.name} {data.lastname}
          </p>
          <p className="contact__phone">
            <label className="contact__label">Teléfono:</label>
            <a href="tel:603256679" title="Pulsa aquí para llamar a Jane">
              {data.phone}
            </a>
          </p>
          <p className="contact__mail">
            <label className="contact__label">Email:</label>
            <a
              href="mailto:janenorton@adalab.es"
              title="Pulsa aquí para escribir a Jane"
            >
              {data.email}
            </a>
          </p>
        </li>
      ));
  };

  //funciones manejadoras
  const handleFormChange = (ev) => {
    const inputName = ev.target.name;
    const inputValue = ev.target.value;

    setInputForm({
      ...inputForm,
      [inputName]: inputValue,
    });
  };

  const handleClickButton = (ev) => {
    ev.preventDefault();
    setContactList([...contactList, inputForm]);
  };

  const handleChangeFilter = (event) => {
    const inputValueSearch = event.target.value;
    setInputSearch(inputValueSearch);
  };

  return (
    <div className="page">
      {/* header */}
      <header className="header">
        <h1 className="header__title">Mi agenda de contactos</h1>
        <form>
          <input
            className="header__search"
            autoComplete="off"
            type="search"
            name="search"
            value={inputSearch.name}
            placeholder="Filtrar contactos por nombre"
            onChange={handleChangeFilter}
          />
        </form>
      </header>

      <main>
        {/* contact list */}
        <ul className="contact__list">{renderList()}</ul>

        {/* new contact */}
        <form className="new-contact__form" onChange={handleFormChange}>
          <h2 className="new-contact__title">Añade un nuevo contacto</h2>
          <input
            className="new-contact__input"
            type="text"
            name="name"
            id="name"
            value={inputForm.name}
            placeholder="Nombre"
          />
          <input
            className="new-contact__input"
            type="text"
            name="lastname"
            id="lastname"
            value={inputForm.lastname}
            placeholder="Apellidos"
          />
          <input
            className="new-contact__input"
            type="phone"
            name="phone"
            value={inputForm.phone}
            id="phone"
            placeholder="Teléfono"
          />
          <input
            className="new-contact__input"
            type="email"
            name="email"
            id="email"
            value={inputForm.email}
            placeholder="Email"
          />
          <input
            onClick={handleClickButton}
            className="new-contact__btn"
            type="submit"
            value="Añadir"
          />
        </form>
      </main>
    </div>
  );
}

export default App;
