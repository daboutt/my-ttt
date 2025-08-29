import GameStatus from './GameStatus';
import Square from './Square';
import { calculateWinner } from '../utils/gameUtils';

export const Board = ({ squares, onPlay, xIsNext }) => {
  const handleClick = (i) => {
    if (calculateWinner(squares).winner || squares[i]) return;
    const value = xIsNext ? 'X' : 'O';
    onPlay(value, i);
  };

  const { winner, winningLine } = calculateWinner(squares);

  const renderSquare = (i) => (
    <Square
      key={i}
      value={squares[i]}
      onSquareClick={() => handleClick(i)}
      isWinning={winningLine && winningLine.includes(i)}
    />
  );

  return (
    <div>
      <GameStatus xIsNext={xIsNext} winner={winner} />
      <div className='board' role='grid' aria-label='Tic tac toe board'>
        <div className='board-row' role='row'>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className='board-row' role='row'>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className='board-row' role='row'>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    </div>
  );
};
