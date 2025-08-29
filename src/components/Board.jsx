import GameStatus from './GameStatus';
import Square from './Square';

export const Board = ({ squares, onPlay, xIsNext }) => {
  const handleClick = (i) => {
    const value = xIsNext ? 'x' : 'o';
    onPlay(value, i);
  };

  const renderSquare = (i) => (
    <Square key={i} value={squares[i]} onSquareClick={() => handleClick(i)} />
  );

  return (
    <div>
      <GameStatus xIsNext={xIsNext} />
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
