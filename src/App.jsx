import './App.css';
import { Board } from './components/Board';
import ResetButton from './components/ResetButton';
import { useGameState } from './hooks/useGameState';

function App() {
  const { squares, resetGame, handlePlay } = useGameState();
  return (
    <>
      <h1>Tic tac toe</h1>

      <Board squares={squares} onPlay={handlePlay} />
      <ResetButton onReset={resetGame} />
    </>
  );
}

export default App;
