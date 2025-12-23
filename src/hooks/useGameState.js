import { useState, useEffect } from 'react';
import { createEmptyBoard, calculateWinner } from '../utils/gameUtils';

export const useGameState = () => {
  const [squares, setSquares] = useState(createEmptyBoard());
  const [currentMove, setCurrentMove] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);

  const xIsNext = currentMove % 2 === 0;
  const { winner } = calculateWinner(squares);
  const gameEnded = winner || squares.every(square => square !== null);

  // Timer effect
  useEffect(() => {
    if (gameEnded) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          // Time's up - auto pass turn
          setCurrentMove(current => current + 1);
          return 15; // Reset timer for next player
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameEnded, currentMove]); // Re-run when game ends or move changes

  const handlePlay = (value, i) => {
    setCurrentMove((prev) => prev + 1);
    setSquares((prev) => {
      const newSquares = [...prev];
      newSquares[i] = value;
      return newSquares;
    });
    setTimeLeft(15); // Reset timer for next player
  };

  const resetGame = () => {
    setSquares(createEmptyBoard());
    setCurrentMove(0);
    setTimeLeft(15);
  };

  return { squares, xIsNext, resetGame, handlePlay, timeLeft };
};
