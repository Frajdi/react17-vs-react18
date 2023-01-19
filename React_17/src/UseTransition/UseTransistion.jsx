import {useState, useEffect, useRef} from "react";
import UseTransitionUI from "./UseTransitionUI";


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
        <UseTransitionUI renderCount={renderCount} input={input} handleInputChange={handleInputChange} list={list}/>
    )
}