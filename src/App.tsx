import './App.css';
import { AutoBatchEventHandler } from './components/AutoBatchEventHandler';
import { AutoBatchOther } from './components/AutoBatchOther';

function App() {
  return (
    <div className="App">
      <AutoBatchEventHandler />
      <hr />
      <AutoBatchOther />
    </div>
  );
}

export default App;
