import { ExtendedTypography } from '@vapor/react-extended/ExtendedTypography/ExtendedTypography'
import TextField from '@vapor/react-material/TextField'

const AutomaticBatchingContainerUI = ({renderCount, error, handleBlur, value}) => {
  return (
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
  )
}

export default AutomaticBatchingContainerUI