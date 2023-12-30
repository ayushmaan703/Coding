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
    <div className="h-screen w-full grid place-content-center bg-slate-900 text-white">
      <h1 className="text-3xl "> Password Generator</h1>
      <div className="h-[4px] bg-yellow-400 rounded w-[250px] mt-2"></div>
      <div>
        <input
          className="text-black  mt-8 mb-8 rounded-l-md pr-4 pt-2 pl-4 pb-2"
          ref={passref}
          type="text"
          value={pass}
          placeholder="password"
          readOnly
        />
        <button
          onClick={copytoclip}
          className=" bg-blue-500  pr-4 pt-2 pl-4 pb-2   rounded-r-md  hover:bg-gray-600 mt-8 mb-8 text-bold"
        >
          Copy
        </button>
      </div>

      <div className="flex flex-row justify-evenly">
        <label htmlFor="len">Length: {length}</label>
        <input
          min={8}
          max={50}
          type="range"
          value={length}
          onChange={(e) => setlength(e.target.value)}
          id="len"
        />
      </div>
      <div className="flex flex-row mt-4  justify-evenly  ">
        <div>
          <input
            type="checkbox"
            id="num"
            defaultChecked={numin}
            onClick={() => {
              setnumin((prev) => !prev);
            }}
          />
          <label className="text-bold" htmlFor="num">
            {" "}
            Number
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            id="ch"
            defaultChecked={charin}
            onClick={() => setcharin((prev) => !prev)}
          />
          <label htmlFor="ch"> Character</label>
        </div>
      </div>
    </div>
  );
};
export default App;
