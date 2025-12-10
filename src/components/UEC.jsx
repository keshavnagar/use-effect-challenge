import { useEffect, useState } from "react";

const UEC = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleButton = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    console.log("My name is : ", input);
  }, [input]);
  //   useEffect(() => {
  //     // document.title = `count = ${count}`;
  //   }, [count]);
  return (
    <>
      <title>{count}</title>
      <h1>Count : {count} </h1>
      <button onClick={handleButton}>Increment</button>
      <h1>Name: {input}</h1>
      <div>
        <label htmlFor="name">Name</label>
        <input value={input} onChange={handleInput} id="name" type="text" />
      </div>
    </>
  );
};
export default UEC;
