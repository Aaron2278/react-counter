import Clock from './Components/Clock'
import React from 'react';
import Counter from './Components/Counter';

const App = () => {
  return (
    <div>
      <Counter startValue={0} />
      <Clock/>
    </div>
  );
}

export default App;
