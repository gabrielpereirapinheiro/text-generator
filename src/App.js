import logo from "./doctor.png";
import "./App.css";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useState } from "react";
import Steps from "./steps";

function App() {
  const [start, setStart] = useState(false);

  return (
    <ChakraProvider>
      {!start ? (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Button
              onClick={() => setStart(true)}
              size="md"
              height="48px"
              width="200px"
              border="2px"
              borderColor="green.500"
            >
              Iniciar
            </Button>
          </header>
        </div>
      ) : (
        <Steps />
      )}
    </ChakraProvider>
  );
}

export default App;
