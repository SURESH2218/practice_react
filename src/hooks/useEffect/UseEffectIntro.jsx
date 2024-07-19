import React, { useEffect, useState } from "react";

const UseEffectIntro = () => {
  const [count, setCount] = useState(0);
  const [pageWidth, setPageWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setPageWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    console.log("Listener added");

    return () => {
      console.log("Listener removed");
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <h1>count</h1>
      <h1>{pageWidth}</h1>
      <p>{count}</p>
      <p className="cursor-pointer" onClick={() => setCount(count + 1)}>
        plus
      </p>
    </div>
  );
};

export default UseEffectIntro;
