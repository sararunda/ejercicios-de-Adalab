const CharacterDetail = (props) => {
  return (
    <article>
      <h2>{props.character.name}</h2>
      <img src={props.character.image} alt="" />
      <p>{props.character.status}</p>
    </article>
  );
};
export default CharacterDetail;
