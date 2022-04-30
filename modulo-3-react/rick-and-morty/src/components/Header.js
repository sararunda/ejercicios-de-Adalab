const Header = (props) => {
  const handleChangeInput = (event) => {
    const inputValue = event.target.value;

    props.handleChangeInput(inputValue);
    console.log(inputValue);
  };
  const handleChangeSelect = (event) => {
    event.preventDefault();
    const selectValue = event.currentTarget.value;
    props.handleChangeSelect(selectValue);
    console.log(selectValue);
  };
  return (
    <>
      <img src="../images/rick.jpg" alt=""></img>
      <form action="">
        <input onChange={handleChangeInput} type="text" value={props.input} />
        <select name="" id="" onChange={handleChangeSelect}>
          <option value="">Todos</option>
          <option value="human">Human</option>
          <option value="alien">Alien</option>
        </select>
      </form>
    </>
  );
};
export default Header;
