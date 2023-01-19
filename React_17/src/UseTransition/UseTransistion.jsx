import {useState, useEffect, useRef} from "react";


export const UseTransition = () => {

    const [input, setInput] = useState("")
    const [list, setList] = useState([]);
    const renderCount = useRef(0)

    const List_size = 20000;


    useEffect(() => {
     renderCount.current = renderCount.current + 1 
    })
    
  
    
    const handleInputChange = ({target: {value}}) => {
        setInput(value);
        const l = [];

        for (let i = 0; i<List_size; i++) {
            l.push(value)
        }
        setList(l);
    }
    return (
        <>
            <h3>UseTransition (is not used)</h3>
            <p>Rerender counting: {renderCount.current}</p>
            <input type="text" value={input} onChange={handleInputChange}/>
            {list.map((item, index) => (
                <div key={index}>{item}</div>
            ))}
        </>
    )
}