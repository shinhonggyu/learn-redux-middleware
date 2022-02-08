const Counter = ({ number, onIncrease, onDecrease }) => {
  return (
    <div className="Counter">
      <h1>{number}</h1>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  );
};

export default Counter;
