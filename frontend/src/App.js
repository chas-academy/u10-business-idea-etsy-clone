import logo from "./logo.svg";
import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("");
  useEffect(() => {
    axios.get(process.env.REACT_APP_URL + "/test").then((response) => {
      console.log(response.data);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        {process.env.REACT_APP_URL}
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button
          onClick={() => {
            axios
              .post(process.env.REACT_APP_URL + "/name", {
                data: name,
              })
              .then((response) => {
                alert(response.data);
              });
          }}
        >
          Send
        </button>
      </header>
    </div>
  );
}

export default App;
