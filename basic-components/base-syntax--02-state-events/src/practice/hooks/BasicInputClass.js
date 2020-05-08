import React, { useState, useEffect ,useLayoutEffect} from 'react';

/*
function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate: 
  useEffect(() => {    // Update the document title using the browser API   
     document.title = `You clicked ${count} times`; 
   });
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
*/

const Example = () => {
  const [name, setName] = useState("Ceci");
  const [age, setAge] = useState("10");
  
  useEffect(() => {
    document.title = name;
  }, [name]);

  useLayoutEffect(() => {
    document.title = age;
  }, [age]);

  return (
      <div>
        <input value={name} onChange={event => setName(event.target.value)} />
        <input value={age} onChange={event => setAge(event.target.value)} />
    </div>
  );
}



export default Example