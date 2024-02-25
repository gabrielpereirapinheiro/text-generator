import logo from "./doctor.png";
import "./App.css";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useState } from "react";
import Steps from "./steps";
import { CookiesProvider, useCookies } from "react-cookie";

function App() {
  const [start, setStart] = useState(false);
  const [cookies, setCookie] = useCookies(["data"]);
  let initialvalue = [];
  if (cookies && cookies.data) {
    debugger;
    initialvalue = cookies.data;
  }

  const [data, setData] = useState(initialvalue);
  const [existingOne, SetexistingOne] = useState([]);
  console.log(data);
  return (
    <ChakraProvider>
      <CookiesProvider defaultSetOptions={{ path: "/" }}>
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
                  {data.map((item, index) => {
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
                        {index + 1}- {item.id}
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
            nextId={data.length ? data.length : 1}
            setData={setData}
            setStart={setStart}
          />
        )}
      </CookiesProvider>
    </ChakraProvider>
  );
}

export default App;
