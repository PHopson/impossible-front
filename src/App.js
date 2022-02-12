import axios from "axios"
import { useState } from 'react';
import './App.css';
import GenContainer from "./components/GenContainer"
import VerContainer from "./components/VerContainer"

function App() {
  const [dispMBI,setDispMBI] = useState("");
  const [validMBI,setMBIValid] = useState(null);

  async function genMBI(){
    await axios.get("/generate").then((response)=>{
      setDispMBI(response.data["MBI"]);
    });
  }

  async function verifyMBI() {
    let ele = document.getElementById("validate");
    let verifyReq = {
      "verify": ele.value
    };
    await axios.post("/verify",verifyReq).then((response)=>{
      setMBIValid(response.data["valid"]);
    });

  }

  return (
    <div className="App">
      <h2>MBI Generator/Verifier</h2>
      <GenContainer 
        dispMBI={dispMBI}
        genMBI={genMBI}
      />
      <VerContainer
        validMBI={validMBI}
        verifyMBI={verifyMBI}
      />
    </div>
  );
}

export default App;
