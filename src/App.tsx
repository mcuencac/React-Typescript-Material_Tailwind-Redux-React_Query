import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store/store';
import { increment, decrement, reset } from './store/slices/counterSlice';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './index.css';
import './App.css';

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white">
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">


      </div>

      <h2 className="text-4xl font-bold">Contador: {count}</h2>
      <div className="mt-4 flex gap-4">
        <button
          className="px-4 py-2 bg-green-500 hover:bg-green-700 rounded"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <button
          className="px-4 py-2 bg-red-500 hover:bg-red-700 rounded"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <button
          className="px-4 py-2 bg-gray-500 hover:bg-gray-700 rounded"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
