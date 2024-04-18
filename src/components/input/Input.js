import { useState } from "react";

const inputStyle = {
  padding: '8px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  color: '#333',
  backgroundColor: '#fff',
  width: '250px',
  display: 'block',
};

const labelStyle={
  fontWeight: 'bold',
}

const forgotStyle={
  fontWeight:'bold',
  color:'#7a7c7f',
}

function Input(props) {
  const [inputType] = useState(props.type);
  const [inputValue, setInputValue] = useState('');

  function handleChange(event) {
    const newValue = event.target.value
    setInputValue(newValue);
    if (props.onChange) props.onChange(newValue);
  };

  return (
    <>
      <span style={labelStyle}>{props?.title? props.title : "Untitled input"}: &nbsp; </span>
      &nbsp; &nbsp; &nbsp; &nbsp; 
      <span style={forgotStyle}>{props?.msg? props.msg : ""} &nbsp; </span>
      <input
        type={inputType}
        value={inputValue}
        name="input-form"
        onChange={handleChange}
        placeholder={props?.placeholder}
        autoComplete={props?.autocomplete ? props.autocomplete : "off"}
        style={inputStyle} />
      <br />
    </>
  );
};

export default Input;
