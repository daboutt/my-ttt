import './Square.css';
const Square = ({ value, onSquareClick, isWinning = false }) => {
  return (
    <button
      className={`square ${isWinning ? 'winning' : ''}`}
      onClick={onSquareClick}
      aria-label={`Square ${value ? `containing ${value}` : 'empty'}`}
    >
      {/* {value} */}
    </button>
  );
};

export default Square;
