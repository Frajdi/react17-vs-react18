import React from "react";

const FlushSyncUI = ({renderCount, inputColor, handleBlur, value}) => (
  <>
    <p>Render Count = {renderCount.current}</p>
    <input
      style={{ borderColor: inputColor }}
      type="text"
      onBlur={(event) => handleBlur(event)}
    ></input>
    <pre>{value}</pre>
  </>
);

export default FlushSyncUI;
