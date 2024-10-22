import React, { useMemo, useState, FC } from "react";

const ExpensiveComponent: FC = () => {
  const [count, setCount] = useState<number>(0);

  const expensiveCalculation = (num: number): number => {
    console.log("Running expensive calculation");
    return num * 1000;
  };

  const result = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      <p>Expensive Calculation Result: {result}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
};

export default ExpensiveComponent;
