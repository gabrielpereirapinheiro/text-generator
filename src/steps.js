import logo from "./doctor.png";
import "./App.css";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Tabs, Box, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useState } from "react";
import { steps, screens } from "./setup/steps";


const findScreen = (id) => {
    let aux = screens.filter((id)=>)
}

function Steps() {
  const [tabIndex, setTabIndex] = useState(0);

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
              <TabPanel>teste{item}</TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Box>
    </div>
  );
}

export default Steps;
