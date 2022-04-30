import Character from './Character';

const ListCharacter = (props) => {
  const renderList = () => {
    return props.listData
      .filter((oneCharacter) =>
        oneCharacter.name.toLowerCase().includes(props.input.toLowerCase())
      )
      .filter((oneCharacter) =>
        oneCharacter.species.toLowerCase().includes(props.select.toLowerCase())
      )

      .map((oneCharacter, index) => (
        <li key={index}>
          <Character
            name={oneCharacter.name}
            image={oneCharacter.image}
            species={oneCharacter.species}
            status={oneCharacter.status}
          />
        </li>
      ));
  };
  return (
    <main>
      <ul>{renderList()}</ul>
    </main>
  );
};
export default ListCharacter;
