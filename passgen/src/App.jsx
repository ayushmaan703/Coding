import { useCallback, useEffect, useRef, useState } from "react";

const App = () => {
  const [length, setlength] = useState(8);
  const [charin, setcharin] = useState(false);
  const [numin, setnumin] = useState(false);
  const [pass, setpass] = useState("");
  const passref = useRef();

  let createpass = useCallback(() => {
    let pass = "";
    let cha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJLLMNOPQRSTUVWXYZ";
    let num = "1234567890";
    let spch = "!@#$%&*+";
    if (numin) cha += num;
    if (charin) cha += spch;
    for (let i = 1; i <= length; i++) {
      pass += cha[Math.floor(Math.random() * cha.length)];
    }
    setpass(pass);
  }, [length, numin, charin]);
  useEffect(() => {
    createpass();
  }, [numin, charin, length, createpass]);
  const copytoclip = () => {
    passref.current?.select();
    window.navigator.clipboard.writeText(pass);
  };
  return (
    <div className="h-screen text-white w-full grid place-content-center bg-slate-900 ">
      <h1 className="text-3xl "> Password Generator</h1>
      <input
        ref={passref}
        type="text"
        value={pass}
        placeholder="password"
        readOnly
      />
      <button onClick={copytoclip}>copy</button>
      <br />
      <input
        min={8}
        max={50}
        type="range"
        value={length}
        onChange={(e) => setlength(e.target.value)}
        id="len"
      />
      <label htmlFor="len">Length:{length}</label>
      <br />
      <input
        type="checkbox"
        id="num"
        defaultChecked={numin}
        onClick={() => {
          setnumin((prev) => !prev);
        }}
      />
      <label htmlFor="num">Number</label>
      <br />
      <input
        type="checkbox"
        id="ch"
        defaultChecked={charin}
        onClick={() => setcharin((prev) => !prev)}
      />
      <label htmlFor="ch">Character</label>
    </div>
  );
};
export default App;
