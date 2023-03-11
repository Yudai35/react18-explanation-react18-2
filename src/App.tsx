import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
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

      {/* Suspenseを用いている場合は基本的にErrorBoundaryを使用してエラーハンドリングを設定している。*/}
      {/* コンポーネントごとにErrorBoundaryの設定も可だが、全体を囲めばエラー時はエラー画面表示なのの実装も可能。 */}
      <ErrorBoundary fallback={<p>エラーです！</p>}>
        {/* ここでfallback設定るるだけではNG。useQuery側の第３引数で{suspense: true}と設定する。*/}
        {/* またはインスタンス元で設定するとアプリ全体のsuspenseをtrueに設定できる。（いちいちuseQuery使用先で定義しなくて良くなる） */}
        <Suspense fallback={<p>ローディング中です！</p>}>
          <ReactQuery />
        </Suspense>
      </ErrorBoundary>
      
    </div>
  );
}

export default App;
