const UseTransitionUI = ({renderCount, input, handleInputChange, list}) => 
    <>
    <h3>UseTransition (is not used)</h3>
    <p>Rerender counting: {renderCount.current}</p>
    <input type="text" value={input} onChange={handleInputChange}/>
    {list.map((item, index) => (
        <div key={index}>{item}</div>
    ))}
</>

export default UseTransitionUI