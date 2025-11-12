import GameStatus from './GameStatus';
import Square from './Square';
import { calculateWinner, GAME_BOARD_NUMBER } from '../utils/gameUtils';
import './Board.css';

export const Board = ({ squares, onPlay, xIsNext }) => {
  const handleClick = (i) => {
    if (calculateWinner(squares).winner || squares[i]) return;
    const value = xIsNext ? 'X' : 'O';
    onPlay(value, i);
  };

  const { winner, winningLine } = calculateWinner(squares);
  const isDraw = !winner && squares.every((square) => square);
  const renderSquare = (i) => (
    <Square
      key={i}
      value={squares[i]}
      onSquareClick={() => handleClick(i)}
      isWinning={winningLine && winningLine.includes(i)}
    />
  );

  const renderBoard = () => {
    const rowNumber = Math.sqrt(GAME_BOARD_NUMBER);
    const rows = [];
    for (let i = 0; i < GAME_BOARD_NUMBER; i += rowNumber) {
      const rowSquares = [];
      for (let j = 0; j < rowNumber; j++) {
        const idx = i + j;
        if (idx < GAME_BOARD_NUMBER) {
          rowSquares.push(renderSquare(idx));
        }
      }
      rows.push(
        <div className='board-row' role='row' key={i}>
          {rowSquares}
        </div>
      );
    }
    return rows;
  };

  return (
    <div>
      <GameStatus xIsNext={xIsNext} winner={winner} isDraw={isDraw} />
      <div className='board' role='grid' aria-label='Tic tac toe board'>
        {renderBoard()}
      </div>
    </div>
  );
};
