import React, { useState, useEffect } from "react";

function Countdown() {
  let initial = 100;
  const [count, setCount] = useState(initial);
  const [toggled, setIsToggled] = useState(true);

  const timer = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    if (count <= 0 || !toggled) {
      return;
    }
    const id = setInterval(timer, 1000);
    return () => clearInterval(id);
  }, [count, toggled]);

  let buttonName = !toggled ? "Start" : "Stop";

  let buttonColor = !toggled ? "lightgreen" : "lightcoral";

  const handleClick = e => {
    setIsToggled(!toggled);
  };

  const handleReset = e => {
    setCount(initial);
  };

  return (
    <div>
      <h1>Countdown</h1>
      <p id="count">{count}</p>
      <button
        class="btn"
        style={{ background: buttonColor }}
        onClick={handleClick}
      >
        {buttonName}
      </button>
      <button class="btn" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default Countdown;
