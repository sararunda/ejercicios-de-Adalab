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
  const handleClickReset = (event) => {
    event.preventDefault();
    props.handleClickReset();
  };

  return (
    <>
      <img src="../images/rick.jpg" alt=""></img>
      <form action="">
        <input onChange={handleChangeInput} type="text" value={props.input} />
        <select
          name=""
          id=""
          onChange={handleChangeSelect}
          value={props.select}
        >
          <option value="">Todos</option>
          <option value="human">Human</option>
          <option value="alien">Alien</option>
        </select>
        <button onClick={handleClickReset} value="reset">
          reset
        </button>
      </form>
    </>
  );
};
export default Header;
