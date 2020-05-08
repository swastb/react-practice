import React, { useState } from 'react';
function BasicObjectReactHook() {
    const [{count,name}, setCount] = useState({count:0,name:'swas'});
    return (
      <div>
        <p>{name} You clicked {count} times</p>
        <button onClick={() => setCount({count:count + 1,name:'swastika'})}>
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

export default BasicObjectReactHook