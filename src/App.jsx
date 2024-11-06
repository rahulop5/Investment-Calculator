import { useState } from "react";
import Userinput from "./components/Userinput";
import Result from "./components/Result";

function App() {

  const [userinput, setuserinput]=useState({
    initialinvestment: 10000,
    annualinvestment: 1200,
    expectedreturn: 6,
    duration: 10
  });

  function inputchangehandler(identifier, value){
    setuserinput((prev)=>{
        return {
            ...prev,
            [identifier]: +value
        }
    });
  }

  const isinputvalid=(userinput.duration>0);

  return (
    <>
      <Userinput input={userinput} inputchangefunc={inputchangehandler}/>
      {isinputvalid && <Result input={userinput}/>}
      {!isinputvalid && <p className="center">Duration should be more than 0</p>}
    </>
  );
}

export default App;
