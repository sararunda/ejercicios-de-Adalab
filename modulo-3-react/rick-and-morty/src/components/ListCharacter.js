import Character from './Character';

const ListCharacter = (props) => {
  const result = props.listData.map((oneCharacter, index) => {
    return (
      <li key={index}>
        <Character
          name={oneCharacter.name}
          image={oneCharacter.image}
          species={oneCharacter.species}
          status={oneCharacter.status}
        />
      </li>
    );
  });
  return (
    <main>
      <ul>{result}</ul>
    </main>
  );
};
export default ListCharacter;
