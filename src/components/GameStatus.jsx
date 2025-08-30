import './GameStatus.css';

const GameStatus = ({ winner, isDraw, xIsNext, timeLeft }) => {
  let status;
  let statusClass = '';

  if (winner) {
    status = `🎉 Winner: ${winner}`;
    statusClass = 'winner';
  } else if (isDraw) {
    status = "🤝 It's a draw!";
    statusClass = 'draw';
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
    statusClass = 'next-player';
  }

  return (
    <div className={`status ${statusClass}`} role='status' aria-live='polite'>
      <div className="status-text">{status}</div>
      {!winner && !isDraw && (
        <div className="timer">
          ⏰ {timeLeft}s
        </div>
      )}
    </div>
  );
};

export default GameStatus;
