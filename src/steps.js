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
import { useCookies } from "react-cookie";

const updateInput = async (e, info, value, setValue) => {
  let aux = value;
  aux[info.id - 1] = e.target.value;
  console.log(e.target.value);
  setValue(aux);
};

const inputQuestion = (
  info,
  value,
  setValue,
  props,
  updateName,
  setUpdateName
) => {
  console.log(props);
  const isSaved = props.existingOne ? props.existingOne[0] : false;

  return (
    <>
      <Heading id="title">{info.title}</Heading>
      {isSaved && !updateName ? (
        <>
          <Input isDisabled value={isSaved} />

          <Button
            onClick={() => {
              setUpdateName(true);
            }}
          >
            {" "}
            Alterar nome
          </Button>
        </>
      ) : (
        <Input
          // value={value[info.id - 1]}
          onChange={(event) => updateInput(event, info, value, setValue)}
          placeholder={info.placeholder}
        />
      )}
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

const copy = (
  toast,
  aux,
  props,
  tabsMissing,
  setTabIndex,
  value,
  setStart,
  setCookie,
  shouldSave
) => {
  const isNew = !!props.existingOne.length;
  console.log("should save");
  console.log("should save");
  console.log(shouldSave);
  if (aux.includes("MISSING")) {
    setTabIndex(tabsMissing[0]);
    toast({
      title: "Itens nao preenchidos",
      status: "error",
      duration: 4000,
      isClosable: true,
    });
  } else {
    navigator.clipboard.writeText(aux);
    toast({
      title: "Texto copiado",
      description: "O texto formatado agora esta na sua área de transferência",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
    if (shouldSave) {
      save(aux, props, value, setCookie);
      setStart(false);
    }
  }
};

const save = (aux, props, value, setCookie) => {
  const { setStart, data, setData } = props;
  const isNew = !!props.existingOne.length;
  console.log(props);
  if (!isNew) {
    let auxData = data;
    auxData.push({ id: value[0], data: value, roomId: props.nextId });
    setCookie("data", auxData);
    setData(auxData);
  } else {
    let modified = data.map((item) => {
      if (item.roomId === props.nextId) {
        return { id: value[0], data: value, roomId: item.roomId };
      } else {
        return item;
      }
    });
    setCookie("data", modified);
    setData(modified);
  }
};

const textGenerator = (info, value, toast, props, setTabIndex, setCookie) => {
  const checkArrays = true;
  let tabsMissing = [];
  let aux = "";

  if (checkArrays) {
    steps.forEach((step, index) => {
      if (step !== steps.length) {
        let screen = screens.filter((item) => {
          return item.id === step;
        });
        console.log(screen[0]);
        let toreplace = value[screen[0].id - 1].length
          ? value[screen[0].id - 1]
          : "MISSING";

        if (toreplace === "MISSING") tabsMissing.push(screen[0].id - 1);
        let replace = screen[0].text.replace("<replace>", toreplace);
        if (!replace.includes("Pular esta opção")) aux = aux + replace;
      }
    });
  }

  const { setStart, data, setData } = props;
  const label = props.existingOne.length
    ? "Copiar e atualizar"
    : "Copiar e salvar";
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
          onClick={() =>
            copy(
              toast,
              aux,
              props,
              tabsMissing,
              setTabIndex,
              value,
              setStart,
              setCookie,
              false
            )
          }
        >
          Copiar
        </Button>
        <Button
          colorScheme="teal"
          variant="solid"
          onClick={() => {
            copy(
              toast,
              aux,
              props,
              tabsMissing,
              setTabIndex,
              value,
              setStart,
              setCookie,
              true
            );
          }}
        >
          {label}
        </Button>
      </Stack>
    </>
  );
};

const findScreen = (
  id,
  value,
  setValue,
  toast,
  props,
  setTabIndex,
  setCookie,
  updateName,
  setUpdateName
) => {
  let screen = screens.filter((item) => {
    return item.id === id;
  });

  switch (screen[0].type) {
    case "input":
      return inputQuestion(
        screen[0],
        value,
        setValue,
        props,
        updateName,
        setUpdateName
      );
    case "options":
      return optionsQuestion(screen[0], value, setValue, setTabIndex);
    case "generator":
      return textGenerator(
        screen[0],
        value,
        toast,
        props,
        setTabIndex,
        setCookie
      );
    default:
      return "erro";
  }
};

function Steps(props) {
  const { existingOne } = props;
  const [cookies, setCookie] = useCookies(["name"]);

  let inital;
  if (existingOne.length) {
    inital = existingOne;
  } else {
    inital = steps.map(() => []);
  }
  const [tabIndex, setTabIndex] = useState(0);
  const toast = useToast();

  const [stepValue, setStepValue] = useState(inital);
  const [updateName, setUpdateName] = useState(false);

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

        <Tabs
          variant="solid-rounded"
          index={tabIndex}
          colorScheme="teal"
          onChange={handleTabsChange}
        >
          {/* <TabList variant="enclosed" id="mytab" class="tablist2">
            {steps.map((item) => (
              <Tab>{item}</Tab>
            ))}
          </TabList> */}
          <TabPanels>
            {steps.map((item) => (
              <TabPanel>
                {findScreen(
                  item,
                  stepValue,
                  setStepValue,
                  toast,
                  props,
                  setTabIndex,
                  setCookie,
                  updateName,
                  setUpdateName
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
            duration: 3000,
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
