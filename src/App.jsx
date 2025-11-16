import './App.css';
import { Board } from './components/Board';
import ResetButton from './components/ResetButton';
import { useGameState } from './hooks/useGameState';

function App() {
  const { squares, xIsNext, resetGame, handlePlay, currentMove } =
    useGameState();

  return (
    <>
      <h1>Gomoku</h1>
      {currentMove > 5 && (
        <div style={{ textAlign: 'left', marginBottom: '0.5rem' }}>
          Let's the game begin!
        </div>
      )}
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Board squares={squares} onPlay={handlePlay} xIsNext={xIsNext} />
        <ResetButton onReset={resetGame} />
      </div>
    </>
  );
}

export default App;
