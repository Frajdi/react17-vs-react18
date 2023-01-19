
const UseTrasitionUI = ({renderCount, input, handleInputChange, isPending, list}) => 
    <>
    <h3>UseTransition</h3>
      <p>Count render: {renderCount.current}</p>
      <input type="text" value={input} onChange={handleInputChange} />
      {isPending ? "Loading..." : list.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </>

export default UseTrasitionUI