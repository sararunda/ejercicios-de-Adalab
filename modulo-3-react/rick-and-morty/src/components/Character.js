const Character = (props) => {
  return (
    <article>
      <h2>{props.name}</h2>
      <img src={props.image} alt="" />
      <p>{props.species}</p>
      <p>{props.status}</p>
    </article>
  );
};
export default Character;
