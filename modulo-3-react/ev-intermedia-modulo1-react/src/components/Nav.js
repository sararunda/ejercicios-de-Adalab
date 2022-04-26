import Links from './Links';

const Nav = () => {
  return (
    <ul className="info">
      <li>
        <Links
          title="blog"
          className="link_blog"
          href="https://adalab.es/blog/"
        />
      </li>
      <li className="contact">
        <Links
          title="contacto"
          className="link_contact"
          href="https://adalab.es/contacto/"
        />
        {/* <a
          title="contacto"
          className="link_contact"
          href="https://adalab.es/contacto/"
        >
          Contacto
        </a> */}
      </li>
    </ul>
  );
};
export default Nav;
