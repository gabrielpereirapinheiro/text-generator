import logo from "./doctor.png";
import "./App.css";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useState } from "react";
import Steps from "./steps";

function App() {
  const [start, setStart] = useState(false);
  const [data, setData] = useState([]);
  const [existingOne, SetexistingOne] = useState([]);
  console.log(data);
  return (
    <ChakraProvider>
      {!start ? (
        <div className="App">
          <header className="App-header">
            <img src={logo} className={"App-logo"} alt="logo" />
            <Button
              onClick={() => {
                setStart(true);
                SetexistingOne([]);
              }}
              size="md"
              height="48px"
              width="200px"
              border="2px"
              borderColor="green.500"
            >
              Novo paciente
            </Button>
            {data.length ? (
              <>
                Salvos
                {data.map((item) => {
                  return (
                    <Button
                      onClick={() => {
                        setStart(true);
                        SetexistingOne(item.data);
                      }}
                      size="md"
                      height="48px"
                      width="200px"
                      border="2px"
                      borderColor="green.500"
                    >
                      {item.id}
                    </Button>
                  );
                })}
              </>
            ) : (
              ""
            )}
          </header>
        </div>
      ) : (
        <Steps
          existingOne={existingOne}
          data={data}
          setData={setData}
          setStart={setStart}
        />
      )}
    </ChakraProvider>
  );
}

export default App;
