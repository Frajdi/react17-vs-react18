import ExtendedTypography from "@vapor/react-extended/ExtendedTypography";
import List  from "@vapor/react-material/List";
import ListItem from "@vapor/react-material/ListItem";
import TextField from "@vapor/react-material/TextField";

const UseTrasitionUI = ({
  renderCount,
  input,
  handleInputChange,
  isPending,
  list,
}) => (
  <>
    <ExtendedTypography
      variant="titleMedium"
      color="primary.interactiveDefault"
    >
      UseTransition (is not used)
    </ExtendedTypography>

    <ExtendedTypography>Count render: {renderCount.current}</ExtendedTypography>
    <TextField type="text" value={input} onChange={handleInputChange} />
    {isPending
      ? "Loading..."
      : <List style={{overflowY: 'scroll', maxHeight: 150}}>
      {list.map((item, index) => (
        <ListItem key={index}>
          {item}
        </ListItem>
      ))}
      </List>}
  </>
);

export default UseTrasitionUI;
