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
  return (
    <>
      <h1>Count : </h1>
      <button onClick={handleButton}>Increment</button>
      <label htmlFor="name">Name</label>
      <input value={input} onChange={handleInput} id="name" type="text" />
    </>
  );
};
export default UEC;
