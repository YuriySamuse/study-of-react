import React from 'react';

const Controls = ({ onIncrement, onDecrement }) => (
  <div className="Counter__conrtols">
    <button tytpe="button" onClick={onIncrement}>
      Збільшити на 1
    </button>
    <button tytpe="button" onClick={onDecrement}>
      Зменшити на 1
    </button>
  </div>
);

export default Controls;
