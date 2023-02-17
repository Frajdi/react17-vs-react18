import ExtendedTypography from "@vapor/react-extended/ExtendedTypography";
import { List, ListItem, ListItemText, TextField } from "@vapor/react-material";
const UseTransitionUI = ({ renderCount, input, handleInputChange, list }) => (
  <>
    <ExtendedTypography
      variant="titleMedium"
      color="primary.interactiveDefault"
    >
      UseTransition (is not used)
    </ExtendedTypography>
    <ExtendedTypography component="div" variant="bodyLarge">
      Rerender counting: {renderCount.current}
    </ExtendedTypography>
    <TextField value={input} onChange={handleInputChange} sx={{mt: 2}}/>
    <List>
    {list.map((item, index) => (
      <ListItem key={index}>
        {item}
      </ListItem>
    ))}
    </List>
  </>
);

export default UseTransitionUI;
