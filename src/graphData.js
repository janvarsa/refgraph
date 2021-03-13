let nodes = [
  {
    id: 0, // origin node
    label: "",
    authors: "2021", // anonymous?
    title: "A Network Representation Add-On For the References Section",
    x: 0,
    y: 0,
  },
  {
    id: 1,
    label: "BNYN 2018",
    authors:
      "Khadidja Bakhti, Zhendong Niu, Abdallah Yousif, and Ally S Nyamawe",
    title:
      "Citation function classification based on ontologies and convolutional neural networks",
    x: 30,
    y: 40,
  },
  {
    id: 2,
    label: "BW 2006",
    authors: "Peter  Bergstrom  and  E  James  Whitehead  Jr.",
    title:
      "Circleview:  Scalable visualization and navigation of citation networks",
    x: 40,
    y: -40,
  },
  {
    id: 3,
    label: "B 2021",
    authors: "Mike Bostock",
    title: "D3.js",
    x: -40,
    y: -40,
  },
  {
    id: 4,
    label: "E 2009",
    authors: "Jason Eisner",
    title: "How to read a paper",
    x: -40,
    y: 40,
  },
  {
    id: 5,
    label: "ET 2007",
    authors: "Niklas Elmqvist and Philippas Tsigas",
    title:
      "Citewiz: a tool for the visualization of scientific citation networks",
    x: 50,
    y: 30,
  },
  {
    id: 6,
    label: "K 2007",
    authors: "Srinivasan Keshav",
    title: "How to read a paper",
    x: 50,
    y: -20,
  },
  {
    id: 7,
    label: "PH 2004",
    authors: "Mary Purugganan and Jan Hewit",
    title: "How to read a scientific article",
    x: -20,
    y: -50,
  },
  {
    id: 8,
    label: "SK 2010",
    authors: "Ulrich Schafer and Uwe Kasterka",
    title:
      "Scientific authoring support: A tool to navigate in typed citation graphs",
    x: -50,
    y: 20,
  },
  {
    id: 9,
    label: "G 2021",
    authors: "usability.gov(a)",
    title: "Contextual interview",
    x: 50,
    y: 10,
  },
  {
    id: 10,
    label: "G 2021",
    authors: "usability.gov(b)",
    title: "Card sorting",
    x: 20,
    y: -50,
  },
  {
    id: 11,
    label: "WS 2012",
    authors: "Benjamin Weitz and Ulrich Schafer",
    title: "A graphical citation browser for the acl anthology",
    x: -50,
    y: -20,
  },
  {
    id: 12,
    label: "XMM 2013",
    authors: "Han Xu, Eric Martin, and Ashesh Mahidadia",
    title:
      "Using heterogeneous features for scientific citation classification",
    x: -10,
    y: 50,
  },
];

let links = [
  {
    source: 0,
    target: 1,
    curvature: 0.2,
    colorGroup: 0,
    label: "related_1",
  },
  {
    source: 0,
    target: 2,
    curvature: 0.2,
    colorGroup: 1,
    label: "related_2",
  },
  {
    source: 0,
    target: 3,
    curvature: 0.2,
    colorGroup: 2,
    label: "related_3",
  },
  {
    source: 0,
    target: 4,
    curvature: 0.2,
    colorGroup: 3,
    label: "related_4",
  },
  {
    source: 0,
    target: 5,
    curvature: 0.2,
    colorGroup: 0,
    label: "related_1",
  },
  {
    source: 0,
    target: 6,
    curvature: 0.2,
    colorGroup: 1,
    label: "related_2",
  },
  {
    source: 0,
    target: 7,
    curvature: 0.2,
    colorGroup: 2,
    label: "related_3",
  },
  {
    source: 0,
    target: 8,
    curvature: 0.2,
    colorGroup: 3,
    label: "related_4",
  },
  {
    source: 0,
    target: 9,
    curvature: 0.2,
    colorGroup: 0,
    label: "related_1",
  },
  {
    source: 0,
    target: 10,
    curvature: 0.2,
    colorGroup: 1,
    label: "related_2",
  },
  {
    source: 0,
    target: 11,
    curvature: 0.2,
    colorGroup: 2,
    label: "related_3",
  },
  {
    source: 0,
    target: 12,
    curvature: 0.2,
    colorGroup: 3,
    label: "related_4",
  },
];

const graphData = {
  nodes: nodes,
  links: links,
};

export default graphData;
