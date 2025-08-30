import './App.css';
import { Board } from './components/Board';
import ResetButton from './components/ResetButton';
import { useGameState } from './hooks/useGameState';

function App() {
  const { squares, xIsNext, resetGame, handlePlay, timeLeft } = useGameState();
  return (
    <>
      <h1>Tic tac toe</h1>

      <Board squares={squares} onPlay={handlePlay} xIsNext={xIsNext} timeLeft={timeLeft} />
      <ResetButton onReset={resetGame} />
    </>
  );
}

export default App;
