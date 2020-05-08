import React, { useState,useEffect} from 'react';
function BasicReactHook() {
    const [count, setCount] = useState(0);

    useEffect(()=>{
      document.title = `You have clicked ${count} times`;
      
    });

    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me to Increase
        </button>
        <button onClick={() => setCount(count - 1)}>
          Click me to Decrease
        </button>
        <button onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    );
}

export default BasicReactHook