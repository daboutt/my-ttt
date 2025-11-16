import './ResetButton.css';

const ResetButton = ({ onReset, disabled = false }) => {
  return (
    <button
      className='reset-button'
      onClick={onReset}
      disabled={disabled}
      aria-label='Reset game to start over'
    >
      Reset Game
    </button>
  );
};

export default ResetButton;
