import { useId } from "react";

const UseId = () => {
  const id = useId();

  console.log(id);

  return (
    <div>
      <label htmlFor={id}>Email</label>
      <br />
      <input id={id} type="email" />
    </div>
  );
};

export default UseId;
