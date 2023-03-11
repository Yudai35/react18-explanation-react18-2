import { Suspense } from 'react';
import './App.css';
import { AutoBatchEventHandler } from './components/AutoBatchEventHandler';
import { AutoBatchOther } from './components/AutoBatchOther';
import { ReactQuery } from './components/ReactQuery';
import { Transition } from './components/Transition';

function App() {
  return (
    <div className="App">
      <AutoBatchEventHandler />
      <AutoBatchOther />
      <hr />
      <Transition />
      <hr />
      {/* ここでfallback設定るるだけではNG。useQuery側の第３引数で{suspense: true}と設定する。*/}
      {/* またはインスタンス元で設定するとアプリ全体のsuspenseをtrueに設定できる。（いちいちuseQuery使用先で定義しなくて良くなる） */}
      <Suspense fallback={<p>ローディング中です！</p>}>
        <ReactQuery />
      </Suspense>
    </div>
  );
}

export default App;
