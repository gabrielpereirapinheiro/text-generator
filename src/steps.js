import logo from "./doctor.png";
import "./App.css";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";

function Steps() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button>Iniciar</button>
      </header>
    </div>
  );
}

export default Steps;
