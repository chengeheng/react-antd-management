import logo from "./logo.svg";
import "./App.less";
import { Button } from "antd";
import { useEffect } from "react";

const getTheme = (color) => {
  window.less
    .modifyVars({
      "@primary-color": color,
      "@layout-header-padding": "0px",
    })
    .catch((error) => {
      console.log(error);
    });
};

function App() {
  useEffect(() => {
    setTimeout(() => {
      getTheme("#61dafb");
    }, 5000);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Button type="primary">test</Button>
    </div>
  );
}

export default App;
