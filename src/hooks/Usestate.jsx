import React from "react";

const Usestate = () => {
  const [state, setState] = React.useState(0);
  const handleDecrement = () => {
    setState((prev) => prev - 1);
  };
  const handleIncrement = () => {
    setState((prev) => {
      return prev + 1;
    });
    // setState((prev) => prev + 1);
  };
  return (
    <div>
      <h1>counter</h1>
      <div className="flex justify-center gap-4">
        <button onClick={handleDecrement}>minus</button>
        <p>{state}</p>
        <button onClick={handleIncrement}>plus</button>
      </div>
    </div>
  );
};

export default Usestate;
