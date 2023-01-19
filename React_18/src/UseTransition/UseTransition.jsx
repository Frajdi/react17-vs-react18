import { useState, useTransition, useRef, useEffect } from "react";
import UseTrasitionUI from "./UseTrasitionUI";

const UseTransition = () => {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const renderCount = useRef(0)

  const List_size = 20000;


  useEffect(() => {
   renderCount.current = renderCount.current + 1 
  })
  


  const handleInputChange = ({ target: { value } }) => {
    setInput(value);
    startTransition(() => {
      const l = [];

      for (let i = 0; i < List_size; i++) {
        l.push(value);
      }
      setList(l);
    });
  };
  return (
    <UseTrasitionUI renderCount={renderCount} input={input} handleInputChange={handleInputChange} isPending={isPending} list={list}/>
  );
};

export default UseTransition;
