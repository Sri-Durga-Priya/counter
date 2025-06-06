import './styles/App.css';
import Counter from './components/Counter';
import useCounter from './hooks/useCounter';


function App() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div className="App">
      <h1> Counter App</h1>
      <Counter
      count={count}
      onIncrement={increment}
      onDecrement={decrement}
      onReset={reset}
      />

    </div>
  );
}

export default App;
