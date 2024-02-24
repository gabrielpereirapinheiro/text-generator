const steps = [1, 2, 3, 4];

const screens = [
  {
    title: "Nome",
    id: 1,
    placeholder: "Digite o nome do paciente",
    type: "input",
    text: "O paciente <replace>",
  },
  {
    title: "Temperatura",
    id: 2,
    placeholder: "Digite a temperatura",
    type: "input",
    text: "estava com temperatura corporal <replace> graus celsius",
  },
  {
    title: "Pressao",
    id: 3,
    type: "options",
    options: [
      { label: "Alta", value: "Alta" },
      { label: "Normal", value: "Normal" },
      { label: "Baixa", value: "Baixa" },
    ],
    text: "estava com pressao <replace>",
  },
  {
    title: "End",
    id: 4,
    type: "generator",
  },
];

export { steps, screens };
