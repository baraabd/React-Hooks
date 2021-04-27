import React, { useState, useMemo, useCallback } from "react";
import Child from './components/child';

import "./App.scss";

const App = () =>{
  const [i, setI] = useState(0);

  const callBackClick = useCallback(() => {
    console.log('called')
    setI(c => c + 1);
  }, [i]);

  const memoizedChild = useMemo(()=>{
    return <Child></Child>
  }, [i]);  

  return (
    <div className="App">
      <header className="App-header">
        <h3> Use Memo</h3>
        <h2>i: {i}</h2>
        <button onClick={callBackClick}>Increment I</button>
        <h3> normal render</h3>
        <Child></Child>
        <h3> Memo render</h3>
        {memoizedChild}
        
      </header>
    </div>
  );
}

export default App;