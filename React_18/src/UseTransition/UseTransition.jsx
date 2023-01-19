import { useState, useTransition, useRef, useEffect } from "react";

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
    <>
      <h3>UseTransition</h3>
      <p>Count render: {renderCount.current}</p>
      <input type="text" value={input} onChange={handleInputChange} />
      {isPending ? "Loading..." : list.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </>
  );
};

export default UseTransition;
