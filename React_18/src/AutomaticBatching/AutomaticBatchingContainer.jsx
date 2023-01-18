import { useState, useRef, useEffect } from "react";
import AutomaticBatchingContainerUI from "./AutomaticBatchingContainerUI";
import {flushSync} from 'react-dom';

const AutomaticBatchingContainer = () => {
  const [firstCount, setFirstCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);
  const rerenders = useRef(0);
  const stateUpdatesCount = useRef(0);


  //we will use this use effect to update our ref as 
  //meany times this component rerenders , we choose 
  // ref insted of state because it won't trigger unwanted
  // rerenders on the component so we can focus on the rerenders
  // that matter for batching tests

  useEffect(() => {
    rerenders.current = rerenders.current + 1;
  });

  


  const firstCountHandler = () => {
    stateUpdatesCount.current = stateUpdatesCount.current + 1;
    setFirstCount((current) => current + 1);
  };

  const secondCountHandler = () => {
    stateUpdatesCount.current = stateUpdatesCount.current + 1;
    setSecondCount((current) => current + 1);
  };


  
// In React 18 batching is default inside set timeout , promises 
// or native event handlers so every time the function below is invoked
//  we expect 1 rerender and it doesn't matter how many states we update 
// inside our setTimeout all those changes will be accumulated and trigger 
// only one rerender with all the changes  



  const bothCountersHandler = () => {
    setTimeout(() => {
      stateUpdatesCount.current = stateUpdatesCount.current + 2;
      setFirstCount((current) => current + 1);
      setSecondCount((current) => current + 1);
    });
  };

  return (
    <AutomaticBatchingContainerUI
      stateUpdatesCount={stateUpdatesCount}
      rerenders={rerenders}
      firstCountHandler={firstCountHandler}
      secondCountHandler={secondCountHandler}
      bothCountersHandler={bothCountersHandler}
      firstCount={firstCount}
      secondCount={secondCount}
    />
  );
};

export default AutomaticBatchingContainer;
