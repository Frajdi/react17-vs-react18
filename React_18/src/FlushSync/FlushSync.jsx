import { useState } from "react";
import { flushSync } from "react-dom";

const FlushSync = () => {

//   { "name": "frajdi", "surname": "malaj", "age": "21" }

  const [value, setValue] = useState()
  const [inputColor, setInputColor] = useState('blue')


  const handleBlur = (event) => {
    try {
        JSON.parse(event.target.value)
        setValue(event.target.value)
        flushSync(() => setInputColor('blue'))
        
    } catch (error) {
        flushSync(setInputColor('red'))
        setValue(error.message)
    }
  } 


  return (
    <>
      <input style={{borderColor: inputColor, ":focus": inputColor}} type="text" onBlur={(event) => handleBlur(event)}></input>
      <pre>{value}</pre>
    </>
  );
};

export default FlushSync;
