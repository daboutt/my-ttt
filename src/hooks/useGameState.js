import { useState } from 'react';
import { createEmptyBoard } from '../utils/gameUtils';

export const useGameState = () => {
  const [squares, setSquares] = useState(createEmptyBoard());
  const [currentMove, setCurrentMove] = useState(0);

  const xIsNext = currentMove % 2 === 0;
  const handlePlay = (value, i) => {
    setCurrentMove((prev) => prev + 1);
    setSquares((prev) => {
      const newSquares = [...prev];
      newSquares[i] = value;
      return newSquares;
    });
  };

  const resetGame = () => {
    setSquares(createEmptyBoard());
  };

  return { squares, xIsNext, resetGame, handlePlay };
};
