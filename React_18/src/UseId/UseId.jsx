import { useId } from "react";

const UseId = () => {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>Email</label>
      <br />
      <input id={id} type="email" />
    </div>
  );
};

export default UseId;
