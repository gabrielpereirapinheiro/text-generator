const steps = [1, 2, 3, 4, 5, 6, 7, 8];

const screens = [
  {
    title: "Identificação",
    id: 1,
    placeholder: "Digite o nome do paciente",
    type: "input",
    text: "O paciente <replace>",
  },
  {
    title: "Gênero",
    id: 2,
    type: "options",
    options: [
      { label: "Masculino", value: "Femenino" },
      { label: "Feminino", value: "Feminino" },
    ],
    text: "do sexo <replace> ",
  },
  {
    title: "Estado mental",
    id: 3,
    type: "options",
    options: [
      { label: "Vigil", value: "Vigil" },
      { label: "Obnubilado", value: "Obnubilado" },
      { label: "Sonolento", value: "Sonolento" },
      { label: "Torporoso", value: "Torporoso" },
      { label: "Comatoso", value: "Comatoso" },
    ],
    text: "estava com estado mental <replace>",
  },

  {
    title: "Sedação",
    id: 4,
    type: "options",
    options: [
      { label: "Sem sedoanalgesia", value: "Sem sedoanalgesia" },
      { label: "Com sedoanalgesia", value: "Com sedoanalgesia" },
    ],
    text: "e sedação <replace>",
  },
  {
    title: "Escala de sedação",
    id: 5,
    type: "options",
    options: [
      { label: "RASS +4", value: "RASS +4" },
      { label: "RASS +3", value: "RASS +3" },
      { label: "RASS +2", value: "RASS +2" },
      { label: "RASS +1", value: "RASS +1" },
      { label: "RASS 0", value: "RASS 0" },
      { label: "RASS -1", value: "RASS -1" },
      { label: "RASS -2", value: "RASS -2" },
      { label: "RASS -3", value: "RASS -3" },
      { label: "RASS -4", value: "RASS -4" },
      { label: "RASS -5", value: "RASS -5" },
    ],
    text: " sendo a sedação <replace>",
  },
  {
    title: "Interação",
    id: 6,
    type: "options",
    options: [
      { label: "Interativo", value: "Interativo" },
      { label: "Não interativo", value: "Não interativo" },
      { label: "Pular esta opção", value: "Pular esta opção" },
    ],
    text: "o paciente esta <replace>",
  },
  {
    title: "Ventilatório",
    id: 7,
    type: "options",
    options: [
      {
        label: "Ventilando espontaneamente ",
        value: "Ventilando espontaneamente ",
      },
      { label: "ventilação mecânica", value: "ventilação mecânica" },
    ],
    text: " <replace>",
  },
  {
    title: "Texto final",
    id: 8,
    type: "generator",
  },
];

export { steps, screens };
