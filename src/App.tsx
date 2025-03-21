import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store/store';
import { increment, decrement, reset } from './store/slices/counterSlice';
import reactLogo from '/react.svg';
import viteLogo from '/vite.svg';
import tailwindLogo from '/tailwind.svg';


function App() {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white">
            <div className="flex gap-4 mb-8">
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="w-16 h-16" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="w-16 h-16"
                        alt="React logo"
                    />
                </a>
                <a href="https://tailwindcss.com" target="_blank">
                    <img
                        src={tailwindLogo}
                        className="w-16 h-16"
                        alt="Tailwind CSS logo"
                    />
                </a>
            </div>
            <h1 className='text-4xl font-bold'>Vite + React + Tailwind</h1>
            <div className="card mt-8">
                <h2 className="text-4xl">Contador: {count}</h2>
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
        </div>
    );
}

export default App;
