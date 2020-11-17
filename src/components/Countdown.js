import React, { useState, useEffect } from "react";

function Countdown() {
  const [count, setCount] = useState(100);
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

  let buttonColor = !toggled ? "lightgray" : "lightgreen";

  const handleClick = e => {
    setIsToggled(!toggled);
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
    </div>
  );
}

export default Countdown;
