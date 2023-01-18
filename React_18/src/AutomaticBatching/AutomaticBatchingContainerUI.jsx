import AutomaticBatchingContent from './AutomaticBatchingContent'

const AutomaticBatchingContainerUI = ({firstCount, secondCount, stateUpdatesCount, rerenders, firstCountHandler, secondCountHandler, bothCountersHandler}) => {
  return (
    <>
    <AutomaticBatchingContent
      firstCount={firstCount}
      secondCount={secondCount}
    />
    <div>State update count = {stateUpdatesCount.current} </div>
    <div>Amount of rerenders = {rerenders.current}</div>
    <button onClick={() => firstCountHandler()}>
      Add first counter
    </button>{' '}
    <button onClick={() => secondCountHandler()}>
      Add second counter
    </button>{' '}
    <button onClick={() => bothCountersHandler()}>
      Add both counters
    </button>
  </>
  )
}

export default AutomaticBatchingContainerUI