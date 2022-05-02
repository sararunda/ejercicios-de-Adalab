import { Link } from 'react-router-dom';
const Character = (props) => {
  return (
    <article>
      <h2>{props.name}</h2>
      <img src={props.image} alt="" />
      <p>{props.species}</p>
      <Link to={`/character/${props.id}`}>más información</Link>
    </article>
  );
};
export default Character;
