import React, { useState } from 'react';

const Counter = (props) => {
  const { startValue } = props;
  // Initialize counter with the startValue prop
  const [counter, setCounter] = useState(startValue);

  return (
    <div>
      <p>You have clicked the button {counter} times</p>
      <button onClick={() => setCounter(counter + 1)}>Click Me!</button>
    </div>
  );
}

export default Counter;