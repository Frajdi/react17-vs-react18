import AutomaticBatchingContainer from "./AutomaticBatching/AutomaticBatchingContainer";
import FlushSync from "./FlushSync/FlushSync";
import UseTransition from "./UseTransition/UseTransition";

const Layout = () => {
  return (
    <>
      <h1>React 18.0.2</h1>
      <hr />
      <h3>Batching</h3>
      <AutomaticBatchingContainer />
      <hr />
      <h3>FlushSync</h3>
      <FlushSync />
      <hr />
      <UseTransition />
    </>
  );
};

export default Layout;
