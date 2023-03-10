import React from "react";
import ExtendedTypography from "@vapor/react-extended/ExtendedTypography";
import { TextField } from "@vapor/react-material";


const FlushSyncUI = ({renderCount, error, handleBlur, value}) => (
  <>
    <ExtendedTypography component="div" variant="bodyLarge">Render Count = {renderCount.current}</ExtendedTypography>
    <TextField
      sx={{mt: 2}}
      error={error}
      type="text"
      onBlur={(event) => handleBlur(event)}
      placeholder='Json Validator'
      helperText={value}
    />
  </>
);

export default FlushSyncUI;
