import { useState, useRef, useEffect } from "react";
import { flushSync } from "react-dom";
import FlushSyncUI from "./FlushSyncUI";

const FlushSync = () => {

//   { "name": "frajdi", "surname": "malaj", "age": "21" }

  const [value, setValue] = useState()
  const [error, setError] = useState(false)
  const renderCount = useRef(0)

  useEffect(() => {
   renderCount.current = renderCount.current + 1 
  })
  

  //As we see down here when we use flush sync we can sepparate the default batching inside the 
  //handleBlur so we set the first state that will be insinde the flushSync function and the the others that are outside.
  const handleBlur = (event) => {
    try {
        JSON.parse(event.target.value)
        flushSync(() => setError(false))
        setValue(event.target.value)
        
    } catch (error) {
        flushSync(setError(true))
        setValue(error.message)
    }
  } 

  return (
    <>
      <FlushSyncUI renderCount={renderCount} error={error} handleBlur={handleBlur} value={value}/>
    </>
  );
};

export default FlushSync;
