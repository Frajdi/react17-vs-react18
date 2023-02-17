import  {ExtendedTypography} from '@vapor/react-extended/ExtendedTypography/ExtendedTypography'


const AutomaticBatchingContent = ({ firstCount, secondCount }) => (
  <>
    <ExtendedTypography component="div" variant="bodyLarge">First Count {firstCount} .</ExtendedTypography>
    <ExtendedTypography  component="div" variant="bodyLarge">Second Count {secondCount} .</ExtendedTypography>
  </>
);

export default AutomaticBatchingContent;
