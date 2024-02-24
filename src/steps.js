import logo from "./doctor.png";
import "./App.css";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Tabs, Box, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useState } from "react";
import { steps, screens } from "./setup/steps";
import { Input } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react";
import { Heading, Stack } from "@chakra-ui/react";

const updateInput = (e, info, value, setValue) => {
  let aux = value;
  aux[info.id - 1] = e.target.value;
  setValue(aux);
};

const inputQuestion = (info, value, setValue) => {
  return (
    <>
      <Heading>{info.title}</Heading>
      <Input
        onChange={(e) => updateInput(e, info, value, setValue)}
        placeholder={info.placeholder}
      />
      ;
    </>
  );
};

const updateOption = (e, info, value, setValue) => {
  let aux = value;
  aux[info.id - 1] = e.target.value;
  setValue(aux);
};

const optionsQuestion = (info, value, setValue) => {
  return (
    <>
      <Heading>{info.title}</Heading>

      <RadioGroup>
        <Stack direction="row">
          {info.options.map((item) => {
            return (
              <Radio
                onChange={(e) => updateOption(e, info, value, setValue)}
                value={item.value}
              >
                {item.label}
              </Radio>
            );
          })}
        </Stack>
      </RadioGroup>
    </>
  );
};

const textGenerator = (info) => {
  return (
    <>
      <Heading>{info.title}</Heading>
    </>
  );
};

const findScreen = (id, value, setValue) => {
  let screen = screens.filter((item) => {
    return item.id === id;
  });

  switch (screen[0].type) {
    case "input":
      return inputQuestion(screen[0], value, setValue);
    case "options":
      return optionsQuestion(screen[0], value, setValue);
    case "generator":
      return textGenerator(screen[0]);
    default:
      return "erro";
  }
};

function Steps() {
  const [tabIndex, setTabIndex] = useState(0);

  let inital = steps.map((item) => []);

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
          min="0"
          max="2"
          value={tabIndex}
          onChange={handleSliderChange}
        />

        <Tabs index={tabIndex} onChange={handleTabsChange}>
          <TabList>
            {steps.map((item) => (
              <Tab>{item}</Tab>
            ))}
          </TabList>
          <TabPanels>
            {steps.map((item) => (
              <TabPanel>{findScreen(item, stepValue, setStepValue)}</TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Box>
    </div>
  );
}

export default Steps;
