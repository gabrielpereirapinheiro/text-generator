const steps = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27,
];

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
    title: "Oxigenoterapia",
    id: 8,
    type: "options",
    options: [
      { label: "Em ar ambiente", value: "Em ar ambiente" },
      {
        label: " Com oxigenoterapia sob cateter nasal",
        value: " Com oxigenoterapia sob cateter nasal",
      },
      {
        label: "Com oxigenoterapia sob máscara de Ventur",
        value: "Com oxigenoterapia sob máscara de Ventur",
      },
      {
        label: "Com oxigenoterapia sob máscara não reinalante",
        value: "Com oxigenoterapia sob máscara não reinalante",
      },
    ],
    text: " <replace>",
  },
  {
    title: "Padrão ventilatório",
    id: 9,
    type: "options",
    options: [
      { label: "ventilação", value: "ventilação" },
      { label: "ventilação", value: "ventilação" },
    ],
    text: " <replace>",
  },
  {
    title: "Saturação",
    id: 10,
    type: "options",
    options: [
      { label: "ventilação", value: "ventilação" },
      { label: "ventilação", value: "ventilação" },
    ],
    text: " <replace>",
  },
  {
    title: "Hemodinâmica ",
    id: 11,
    type: "options",
    options: [
      { label: "ventilação", value: "ventilação" },
      { label: "ventilação", value: "ventilação" },
    ],
    text: " <replace>",
  },
  {
    title: "Pressão",
    id: 12,
    type: "options",
    options: [
      { label: "ventilação", value: "ventilação" },
      { label: "ventilação", value: "ventilação" },
    ],
    text: " <replace>",
  },
  {
    title: "Temperatura",
    id: 13,
    type: "options",
    options: [
      { label: "ventilação", value: "ventilação" },
      { label: "ventilação", value: "ventilação" },
    ],
    text: " <replace>",
  },
  {
    title: "Curva térmica",
    id: 14,
    type: "options",
    options: [
      { label: "ventilação", value: "ventilação" },
      { label: "ventilação", value: "ventilação" },
    ],
    text: " <replace>",
  },
  {
    title: "Antibioticoterapia",
    id: 15,
    type: "options",
    options: [
      { label: "ventilação", value: "ventilação" },
      { label: "ventilação", value: "ventilação" },
    ],
    text: " <replace>",
  },
  {
    title: "Nutrição ",
    id: 16,
    type: "options",
    options: [
      { label: "ventilação", value: "ventilação" },
      { label: "ventilação", value: "ventilação" },
    ],
    text: " <replace>",
  },
  {
    title: "Aceitação",
    id: 17,
    type: "options",
    options: [
      { label: "ventilação", value: "ventilação" },
      { label: "ventilação", value: "ventilação" },
    ],
    text: " <replace>",
  },
  {
    title: "Curva glicêmica",
    id: 18,
    type: "options",
    options: [
      { label: "ventilação", value: "ventilação" },
      { label: "ventilação", value: "ventilação" },
    ],
    text: " <replace>",
  },
  {
    title: "Eliminações",
    id: 19,
    type: "options",
    options: [
      { label: "ventilação", value: "ventilação" },
      { label: "ventilação", value: "ventilação" },
    ],
    text: " <replace>",
  },
  {
    title: "Tempo",
    id: 20,
    type: "options",
    options: [
      { label: "ventilação", value: "ventilação" },
      { label: "ventilação", value: "ventilação" },
    ],
    text: " <replace>",
  },
  {
    title: "Diurese",
    id: 21,
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
    title: "Terapia renal substitutiva",
    id: 22,
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
    title: "Balanço hídrico",
    id: 23,
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
    title: "Extremidades",
    id: 24,
    type: "options",
    options: [
      { label: "Bem perfundidas", value: "Bem perfundidas" },
      { label: "Mal perfundidas", value: "Mal perfundidas" },
    ],
    text: " <replace>",
  },
  {
    title: "Edema",
    id: 25,
    type: "options",
    options: [
      { label: "com edema", value: "com edema" },
      { label: "sem edema", value: "sem edema" },
    ],
    text: " <replace>",
  },
  {
    title: "Panturrilhas",
    id: 26,
    type: "options",
    options: [
      { label: "Livres", value: "Livres" },
      {
        label: "Empastamento em perna direita",
        value: "Empastamento em perna direita",
      },
      {
        label: "Empastamento em perna esquerda",
        value: "Empastamento em perna esquerda",
      },
      { label: "Livres", value: "Livres" },
    ],
    text: " <replace>",
  },
  {
    title: "Texto final",
    id: 27,
    type: "generator",
  },
];

export { steps, screens };
