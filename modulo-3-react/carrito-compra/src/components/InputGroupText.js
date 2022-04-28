//recibir props y hacer lifting
const InputGroupText = (props) => {
  return (
    <div className="input-group-text">
      <label className="label-text" htmlFor="name">
        {props.labelText}
      </label>
      <input
        className="input-text"
        type="text"
        name={props.inputName}
        id={props.inputId}
        placeholder={props.inputPlaceholder}
        value={props.name}
        onChange={props.handleChange}
      />
    </div>
  );
};
export default InputGroupText;
