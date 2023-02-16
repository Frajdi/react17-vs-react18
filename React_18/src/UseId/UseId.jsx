import { useId } from "react";

const UseId = () => {
  const id = useId();

  return (
    <div>
      <label htmlFor={`${id}-email`}>Email</label>
      <br />
      <input id={`${id}-email`} type="email" />
    </div>
  );
};

export default UseId;
