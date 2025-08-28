import './App.css';
import { Board } from './components/Board';
import { useGameState } from './hooks/useGameState';

function App() {
  const { squares, handlePlay } = useGameState();
  return (
    <>
      <h1>Tic tac toe</h1>

      <Board squares={squares} onPlay={handlePlay} />
    </>
  );
}

export default App;
