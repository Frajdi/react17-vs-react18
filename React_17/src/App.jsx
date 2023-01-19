import AutomaticBatchingContainer from './AutomaticBatching/AutomaticBatchingContainer'
import FlushSync from './FlushSync/FlushSync'

const App = () => <>
    <h1>React 17.0.2</h1>
    <hr/>
    <h3>Batching</h3>
    <AutomaticBatchingContainer />
    <hr/>
    <h3>FlushSync(no flush sync in react 17.0.2)</h3>
    <FlushSync />
    <hr/>
</>

export default App
