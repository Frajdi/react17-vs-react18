import React from "react";

const FlushSyncUI = ({renderCount, inputColor, handleBlur, value}) => (
  <>
    <p>Render Count = {renderCount.current}</p>
    <input
      style={{ borderColor: inputColor }}
      type="text"
      onBlur={(event) => handleBlur(event)}
      placeholder='Json Validator'
    ></input>
    <pre>{value}</pre>
  </>
);

export default FlushSyncUI;
