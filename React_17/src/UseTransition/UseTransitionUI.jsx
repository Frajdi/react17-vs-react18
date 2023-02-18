import ExtendedTypography from "@vapor/react-extended/ExtendedTypography";
import List  from "@vapor/react-material/List";
import ListItem from "@vapor/react-material/ListItem";
import TextField from "@vapor/react-material/TextField";

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
    <List style={{overflowY: 'scroll', maxHeight: 150}}>
    {list.map((item, index) => (
      <ListItem key={index}>
        {item}
      </ListItem>
    ))}
    </List>
  </>
);

export default UseTransitionUI;
