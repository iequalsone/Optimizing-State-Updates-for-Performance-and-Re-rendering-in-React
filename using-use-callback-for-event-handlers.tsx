import React, { useState, useCallback, FC } from "react";
import Button from "./Button";

const App: FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <Button label="Increment" onClick={increment} />
    </div>
  );
};

export default App;
