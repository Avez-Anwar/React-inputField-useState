import "./styles.css";
import React, { useState } from "react";

function App() {
  const [state, setState] = useState("");
  return (
    <div className="App">
      <input onChange={(e) => setState(e.target.value)} />
      <br />
      The input is {state}
    </div>
  );
}

export default App;
