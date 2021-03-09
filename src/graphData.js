const grey = "rgb(195,195,195)";
const blue = "rgb(37,131,255)";
const purple = "rgb(183,53,211)";
const lime = "rgb(169,255,23)";

let nodes = [
  {
    id: 0, // origin node
    label: "",
    authors: "2021", // anonymous?
    title: "A Network Representation Add-On For the References Section",
  },
  {
    id: 1,
    label: "BNYN 2018",
    authors:
      "Khadidja Bakhti, Zhendong Niu, Abdallah Yousif, and Ally S Nyamawe",
    title:
      "Citation function classification based on ontologies and convolutional neural networks",
  },
  {
    id: 2,
    label: "BW 2006",
    authors: "Peter  Bergstrom  and  E  James  Whitehead  Jr.",
    title:
      "Circleview:  Scalable visualization and navigation of citation networks",
  },
  { id: 3, label: "B 2021", authors: "Mike Bostock", title: "D3.js" },
  {
    id: 4,
    label: "E 2009",
    authors: "Jason Eisner",
    title: "How to read a paper",
  },
  {
    id: 5,
    label: "ET 2007",
    authors: "Niklas Elmqvist and Philippas Tsigas",
    title:
      "Citewiz: a tool for the visualization of scientific citation networks",
  },
  {
    id: 6,
    label: "K 2007",
    authors: "Srinivasan Keshav",
    title: "How to read a paper",
  },
  {
    id: 7,
    label: "PH 2004",
    authors: "Mary Purugganan and Jan Hewit",
    title: "How to read a scientific article",
  },
  {
    id: 8,
    label: "SK 2010",
    authors: "Ulrich Schafer and Uwe Kasterka",
    title:
      "Scientific authoring support: A tool to navigate in typed citation graphs",
  },
  {
    id: 9,
    label: "G 2021",
    authors: "usability.gov(a)",
    title: "Contextual interview",
  },
  {
    id: 10,
    label: "G 2021",
    authors: "usability.gov(b)",
    title: "Card sorting",
  },
  {
    id: 11,
    label: "WS 2012",
    authors: "Benjamin Weitz and Ulrich Schafer",
    title: "A graphical citation browser for the acl anthology.",
  },
  {
    id: 12,
    label: "XMM 2013",
    authors: "Han Xu, Eric Martin, and Ashesh Mahidadia",
    title:
      "Using heterogeneous features for scientific citation classification",
  },
];

let links = [
  { source: 0, target: 1, curvature: 0.2, color: grey, label: "related_1" },
  { source: 0, target: 2, curvature: 0.2, color: blue, label: "related_2" },
  { source: 0, target: 3, curvature: 0.2, color: purple, label: "related_3" },
  { source: 0, target: 4, curvature: 0.2, color: lime, label: "related_4" },
  { source: 0, target: 5, curvature: 0.2, color: grey, label: "related_1" },
  { source: 0, target: 6, curvature: 0.2, color: blue, label: "related_2" },
  { source: 0, target: 7, curvature: 0.2, color: purple, label: "related_3" },
  { source: 0, target: 8, curvature: 0.2, color: lime, label: "related_4" },
  { source: 0, target: 9, curvature: 0.2, color: grey, label: "related_1" },
  { source: 0, target: 10, curvature: 0.2, color: blue, label: "related_2" },
  {
    source: 0,
    target: 11,
    curvature: 0.2,
    color: purple,
    label: "related_3",
  },
  { source: 0, target: 12, curvature: 0.2, color: lime, label: "related_4" },
];

const graphData = {
  nodes: nodes,
  links: links,
};

export default graphData;
