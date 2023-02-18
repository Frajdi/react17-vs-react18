import AutomaticBatchingContent from './AutomaticBatchingContent'
import { ExtendedTypography } from '@vapor/react-extended/ExtendedTypography/ExtendedTypography'
import Button from '@vapor/react-material/Button'

const AutomaticBatchingContainerUI = ({firstCount, secondCount, stateUpdatesCount, rerenders, firstCountHandler, secondCountHandler, bothCountersHandler}) => {
  return (
    <>
    <AutomaticBatchingContent
      firstCount={firstCount}
      secondCount={secondCount}
    />
    <ExtendedTypography variant='bodyLarge'>State update count = {stateUpdatesCount.current} </ExtendedTypography>
    <ExtendedTypography>Amount of rerenders = {rerenders.current}</ExtendedTypography>
    <Button variant='outlined' onClick={() => firstCountHandler()}>
      Add first counter
    </Button>{' '}
    <Button variant='outlined' onClick={() => secondCountHandler()}>
      Add second counter
    </Button>{' '}
    <Button variant='outlined' onClick={() => bothCountersHandler()}>
      Add both counters
    </Button>
  </>
  )
}

export default AutomaticBatchingContainerUI