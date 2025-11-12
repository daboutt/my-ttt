export const GAME_BOARD_NUMBER = 9 * 9;
export const createEmptyBoard = () => Array(GAME_BOARD_NUMBER).fill(null);
export const calculateWinner = (squares) => {
  const boardSize = 9;
  const winLength = 4;

  // Check if we can win starting from a position in a given direction
  const checkDirection = (startIdx, deltaRow, deltaCol) => {
    const startRow = Math.floor(startIdx / boardSize);
    const startCol = startIdx % boardSize;

    // Check if we can fit 4 squares in this direction
    const endRow = startRow + (winLength - 1) * deltaRow;
    const endCol = startCol + (winLength - 1) * deltaCol;

    if (
      endRow < 0 ||
      endRow >= boardSize ||
      endCol < 0 ||
      endCol >= boardSize
    ) {
      return null;
    }

    const line = [];
    const firstSquare = squares[startIdx];

    if (!firstSquare) return null;

    for (let i = 0; i < winLength; i++) {
      const currentRow = startRow + i * deltaRow;
      const currentCol = startCol + i * deltaCol;
      const currentIdx = currentRow * boardSize + currentCol;

      if (squares[currentIdx] !== firstSquare) {
        return null;
      }

      line.push(currentIdx);
    }

    return { winner: firstSquare, winningLine: line };
  };

  // Check all positions and directions
  for (let i = 0; i < GAME_BOARD_NUMBER; i++) {
    if (!squares[i]) continue; // Skip empty squares

    // Check 4 directions: horizontal, vertical, diagonal-down, diagonal-up
    const directions = [
      [0, 1], // horizontal (right)
      [1, 0], // vertical (down)
      [1, 1], // diagonal down-right
      [1, -1], // diagonal down-left
    ];

    for (const [deltaRow, deltaCol] of directions) {
      const result = checkDirection(i, deltaRow, deltaCol);
      if (result) {
        return result;
      }
    }
  }

  return { winner: null, winningLine: null };
};
