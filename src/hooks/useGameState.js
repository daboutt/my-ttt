import { useState } from 'react';
import { createEmptyBoard } from '../utils/gameUtils';

export const useGameState = () => {
  const [squares, setSquares] = useState(createEmptyBoard());

  const handlePlay = (value, i) => {
    setSquares((prev) => {
      const newSquares = [...prev];
      newSquares[i] = value;
      return newSquares;
    });
  };
  return { squares, handlePlay };
};
