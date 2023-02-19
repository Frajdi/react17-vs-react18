import { useState, useRef, useEffect } from "react";
import AutomaticBatchingContainerUI from "./AutomaticBatchingContainerUI";

const AutomaticBatchingContainer = () => {
  
//   { "name": "frajdi", "surname": "malaj", "age": "21" }

const [value, setValue] = useState()
const [error, setError] = useState(false)
const renderCount = useRef(0)

useEffect(() => {
 renderCount.current = renderCount.current + 1 
})


//As we see down here when we use flush sync we can sepparate the default batching inside the 
//handleBlur so we set the first state that will be insinde the flushSync function and the the others that are outside.
const handleValidation = (event) => {
  JSON.parse(event.target.value);
  setTimeout(() => {
    setError(false);
    setValue(event.target.value);
  });
};

const handleBlur = (event) => {
  try {
    handleValidation(event);
  } catch (error) {
    setError(true);
    setValue(error.message);
  }
};

return (
  <>
    <AutomaticBatchingContainerUI renderCount={renderCount} error={error} handleBlur={handleBlur} value={value}/>
  </>
);
};

export default AutomaticBatchingContainer;
