import { useId } from "react";
import TextField from '@vapor/react-material/TextField'
import Stack from '@vapor/react-material/Stack';

const UseId = () => {

  const emailId = useId(); // This will return a unique id for ex: :r1:
  const passwordId = useId(); // This will return a unique id for ex: :r2:

  console.log(emailId);
  console.log(passwordId);


  return (
    <>
    <Stack direction='row' spacing={2} style={{marginTop: "18px"}}>
      <label style={{marginTop: '10px'}} htmlFor={emailId}>Email</label>
      <TextField variant="standard" id={emailId} type="email" />
    </Stack>
    <Stack direction='row' spacing={2} style={{marginTop: "18px"}}>
      <label style={{marginTop: '10px'}} htmlFor={passwordId}>Password</label>
      <TextField variant="standard" id={passwordId} type="password" />
    </Stack> 
    </>
  );
};

export default UseId;
