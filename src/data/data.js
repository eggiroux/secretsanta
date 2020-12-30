export const groups = [
  {
    id: 1,
    name: "Groupe 1",
    mods: [873681764],
    priceCap: 35,
    members: {
      873681764: {
        cantDraw: [],
        ownList: [],
        othersList: [],
      },
      873681766: {
        cantDraw: [],
        ownList: [
          {
            name: "these socks",
            link: "http://www.hotmail.com",
            desc: "it's these socks and nothing else",
          },
          { name: "any cool mug", link: "", desc: "he likes mugs" },
          { name: "item with no link no desc", link: "", desc: "" },
        ],
        othersList: [
          {
            name: "bowl",
            link: "http://www.hotmail.com",
            desc: "it's a bowl",
          },
        ],
      },
      873681767: { cantDraw: [], ownList: [], othersList: [] },
      873681768: { cantDraw: [], ownList: [], othersList: [] },
      873681769: { cantDraw: [], ownList: [], othersList: [] },
      873681770: { cantDraw: [], ownList: [], othersList: [] },
      873681765: { cantDraw: [], ownList: [], othersList: [] },
      873681771: { cantDraw: [], ownList: [], othersList: [] },
      873681772: { cantDraw: [], ownList: [], othersList: [] },
      873681773: { cantDraw: [], ownList: [], othersList: [] },
      873681774: { cantDraw: [], ownList: [], othersList: [] },
    },
  },
  {
    id: 2,
    name: "Groupe 2",
    mods: [873681764],
    priceCap: 35,
    members: {
      873681765: { cantDraw: [], ownList: [], othersList: [] },
      873681773: { cantDraw: [], ownList: [], othersList: [] },
      873681774: { cantDraw: [], ownList: [], othersList: [] },
    },
  },
];

export const users = [
  {
    id: 873681764,
    name: "Etienne",
    groups: [1, 2],
  },
  {
    id: 873681765,
    name: "Philippe",
    groups: [1],
  },
  {
    id: 873681766,
    name: "Béatrice",
    groups: [1],
  },
  {
    id: 873681767,
    name: "Bernadette",
    groups: [1],
  },
  {
    id: 873681768,
    name: "Andréane",
    groups: [1],
  },
  {
    id: 873681769,
    name: "Benoît",
    groups: [1],
  },
  {
    id: 873681770,
    name: "Marjolaine",
    groups: [1],
  },
  {
    id: 873681771,
    name: "Estelle",
    groups: [1],
  },
  {
    id: 873681772,
    name: "Caroline",
    groups: [1],
  },
  {
    id: 873681773,
    name: "Rosalie",
    groups: [1, 2],
  },
  {
    id: 873681774,
    name: "Léonie",
    groups: [1, 2],
  },
];
