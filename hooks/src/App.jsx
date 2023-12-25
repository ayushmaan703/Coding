import { useState } from "react";
import "./App.css";
const Num = () => {
  let [count, setcount] = useState(0);
  const add = () => {
    if (count <= 50) setcount(count++);
    else alert("How free are you 🤷🏼");
  };
  const subtract = () => {
    if (count >= 0) setcount(count--);
    else alert("No need to go that far back ✋🏼 🛑");
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={add}>up</button>
      <br />
      <br />
      <button onClick={subtract}>down</button>
    </>
  );
};
export default Num;
