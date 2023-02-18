import TextField from '@vapor/react-material/TextField'
import Stack from '@vapor/react-material/Stack';

const UseId = () => {

  return (
    <>
    <Stack direction='row' spacing={2} style={{marginTop: "18px"}}>
      <label style={{marginTop: '10px'}} htmlFor={"Email"}>Email</label>
      <TextField variant="standard" id={"Email"} type="email" />
    </Stack>
    <Stack direction='row' spacing={2} style={{marginTop: "18px"}}>
      <label style={{marginTop: '10px'}} htmlFor={"Password"}>Password</label>
      <TextField variant="standard" id={"Password"} type="password" />
    </Stack> 
    </>
  );
};

export default UseId;
