import ExtendedTypography from "@vapor/react-extended/ExtendedTypography";

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

    <p>Count render: {renderCount.current}</p>
    <input type="text" value={input} onChange={handleInputChange} />
    {isPending
      ? "Loading..."
      : list.map((item, index) => <div key={index}>{item}</div>)}
  </>
);

export default UseTrasitionUI;
