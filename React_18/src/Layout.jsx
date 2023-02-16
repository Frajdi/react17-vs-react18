import AutomaticBatchingContainer from "./AutomaticBatching/AutomaticBatchingContainer";
import FlushSync from "./FlushSync/FlushSync";
import UseTransition from "./UseTransition/UseTransition";
import UseId from "./UseId/UseId";

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
      <hr/>
      <h3>UseId</h3>
      <UseId />
      <hr />
      <UseTransition />
    </>
  );
};

export default Layout;
