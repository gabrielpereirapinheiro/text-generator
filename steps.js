const steps = [1, 2, 3];

const screens = [
  {
    title: "Nome",
    id: 1,
    type: "input",
    text: "O paciente <replace>",
  },
  {
    title: "Temperatura",
    id: 2,
    type: "input",
    text: "estava com temperatura corporal <replace> graus celsius",
  },
  {
    title: "Pressao estavel",
    id: 3,
    type: "options",
    text: "estava com pressao <replace>",
  },
];

export { steps, screens };
