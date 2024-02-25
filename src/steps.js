import logo from "./doctor.png";
import "./App.css";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import {
  Tabs,
  Box,
  TabList,
  Text,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { steps, screens } from "./setup/steps";
import { Input } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react";
import { Heading, Stack } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";

const updateInput = async (e, info, value, setValue) => {
  let aux = value;
  aux[info.id - 1] = e.target.value;
  console.log(e.target.value);
  setValue(aux);
};

const inputQuestion = (info, value, setValue) => {
  console.log(value[info.id - 1]);
  console.log(value);
  return (
    <>
      <Heading id="title">{info.title}</Heading>
      <Input
        // value={value[info.id - 1]}
        onChange={(event) => updateInput(event, info, value, setValue)}
        placeholder={info.placeholder}
      />
    </>
  );
};

const updateOption = (e, info, value, setValue, setTabIndex) => {
  let aux = value;
  aux[info.id - 1] = e.target.value;
  console.log(aux);
  setTabIndex(info.id);
  setValue(aux);
};

const optionsQuestion = (info, value, setValue, setTabIndex) => {
  return (
    <>
      <Heading id="title">{info.title}</Heading>
      <Stack>
        {info.options.map((item) => {
          return (
            <Button
              onClick={(e) =>
                updateOption(e, info, value, setValue, setTabIndex)
              }
              colorScheme={"teal"}
              variant={value[info.id - 1] == item.label ? "solid" : "outline"}
              value={item.label}
            >
              {item.label}
            </Button>
          );
        })}
      </Stack>
    </>
  );
};

const copy = (toast, aux) => {
  navigator.clipboard.writeText(aux);
  toast({
    title: "Texto copiado",
    description: "O texto formatado agora esta na sua área de transferência",
    status: "success",
    duration: 4000,
    isClosable: true,
  });
};

const save = (aux, props, value) => {
  const { setStart, data, setData } = props;

  let auxData = data;
  auxData.push({ id: value[0], data: value });
  setData(auxData);
};

const textGenerator = (info, value, toast, props) => {
  const checkArrays = true;

  let aux = "";

  if (checkArrays) {
    steps.forEach((step) => {
      if (step !== steps.length) {
        let screen = screens.filter((item) => {
          return item.id === step;
        });
        console.log(screen[0]);
        let toreplace = value[screen[0].id - 1].length
          ? value[screen[0].id - 1]
          : "MISSING";
        let replace = screen[0].text.replace("<replace>", toreplace);
        aux = aux + replace;
      }
    });
  }
  const { setStart, data, setData } = props;

  return (
    <>
      <Heading id="title">{info.title}</Heading>
      <Textarea
        resize="vertical"
        size="lg"
        id="textcopy"
        className="teste"
        isDisabled
        placeholder={aux}
      />
      <Stack direction="row" margin="10" justify="center" spacing={4}>
        <Button
          colorScheme="teal"
          variant="solid"
          onClick={() => copy(toast, aux)}
        >
          Copiar
        </Button>
        <Button
          colorScheme="teal"
          variant="solid"
          onClick={() => {
            copy(toast, aux);
            save(aux, props, value);
            setStart(false);
          }}
        >
          Copiar e Salvar
        </Button>
      </Stack>
    </>
  );
};

const findScreen = (id, value, setValue, toast, props, setTabIndex) => {
  let screen = screens.filter((item) => {
    return item.id === id;
  });

  switch (screen[0].type) {
    case "input":
      return inputQuestion(screen[0], value, setValue, setTabIndex);
    case "options":
      return optionsQuestion(screen[0], value, setValue, setTabIndex);
    case "generator":
      return textGenerator(screen[0], value, toast, props);
    default:
      return "erro";
  }
};

function Steps(props) {
  const { existingOne } = props;
  let inital;
  if (existingOne.length) {
    inital = existingOne;
  } else {
    inital = steps.map(() => []);
  }
  const [tabIndex, setTabIndex] = useState(0);
  const toast = useToast();

  const [stepValue, setStepValue] = useState(inital);

  const handleSliderChange = (event) => {
    setTabIndex(parseInt(event.target.value, 10));
  };

  const handleTabsChange = (index) => {
    setTabIndex(index);
  };

  return (
    <div className="Steps">
      <Box>
        <input
          type="range"
          id="myinput"
          min="0"
          max={steps.length - 1}
          value={tabIndex}
          onChange={handleSliderChange}
        />

        <Tabs index={tabIndex} onChange={handleTabsChange}>
          <TabList class="tablist2">
            {steps.map((item) => (
              <Tab>{item}</Tab>
            ))}
          </TabList>
          <TabPanels>
            {steps.map((item) => (
              <TabPanel>
                {findScreen(
                  item,
                  stepValue,
                  setStepValue,
                  toast,
                  props,
                  setTabIndex
                )}
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Box>

      <Button
        onClick={() => {
          props.setStart(false);

          toast({
            title: "Cancelado",
            description: "Paciente cancelado",
            status: "warning",
            duration: 9000,
            isClosable: true,
          });
        }}
        colorScheme="red"
        variant="outline"
        id="cancel"
      >
        Cancelar
      </Button>

      <Stack class="footer" direction="row" spacing={4}>
        <Button
          onClick={() =>
            setTabIndex(tabIndex - 1 < 0 ? tabIndex : tabIndex - 1)
          }
          isDisabled={tabIndex == 0 ? true : false}
          colorScheme="teal"
          variant="outline"
          id="back"
        >
          Voltar
        </Button>
        <Button
          onClick={() =>
            setTabIndex(
              tabIndex + 1 > steps.length - 1 ? tabIndex : tabIndex + 1
            )
          }
          isDisabled={tabIndex == steps.length - 1 ? true : false}
          colorScheme="teal"
          variant="outline"
          id="next"
        >
          Próximo
        </Button>
      </Stack>
    </div>
  );
}

export default Steps;
