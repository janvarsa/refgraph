let nodes = [
  {
    id: 0, // origin node
    label: "",
    authors: "2021", // anonymous?
    title:
      "On augmenting the references section with a citation network visualization",
    x: 0,
    y: 0,
  },
  {
    id: 1,
    label: "BNYN2018",
    authors:
      "Khadidja Bakhti, Zhendong Niu, Abdallah Yousif, and Ally S Nyamawe",
    title:
      "Citation function classification based on ontologies and convolutional neural networks",
    link: "https://link.springer.com/chapter/10.1007/978-3-319-95522-3_10",
    x: 21,
    y: 38,
  },
  {
    id: 2,
    label: "BW2006",
    authors: "Peter  Bergstrom  and  E  James  Whitehead  Jr.",
    title:
      "Circleview:  Scalable visualization and navigation of citation networks",
    link:
      "https://www.semanticscholar.org/paper/CircleView-%3A-Scalable-Visualization-and-Navigation-Bergstr%C3%B6m-Whitehead/a7ce5d57da34fac3ef776be1d0fbaa70d92b68af",
    x: 48,
    y: -11,
  },
  {
    id: 3,
    label: "DS2011",
    authors: "Cailing Dong and Ulrich Schafer",
    title: "Ensemble-style self-training on citation classification",
    link: "https://www.aclweb.org/anthology/I11-1070/",
    x: 42,
    y: 26,
  },
  {
    id: 4,
    label: "E2009",
    authors: "Jason Eisner",
    title: "How to read a paper",
    link: "http://cs.jhu.edu/~jason/advice/how-to-read-a-paper.html",
    x: -19,
    y: 37,
  },
  {
    id: 5,
    label: "ET2007",
    authors: "Niklas Elmqvist and Philippas Tsigas",
    title:
      "Citewiz: a tool for the visualization of scientific citation networks",
    link:
      "https://www.researchgate.net/publication/220586688_CiteWiz_A_Tool_for_the_Visualization_of_Scientific_Citation_Networks",
    x: -42,
    y: -7,
  },
  {
    id: 6,
    label: "K2007",
    authors: "Srinivasan Keshav",
    title: "How to read a paper",
    link: "http://ccr.sigcomm.org/online/files/p83-keshavA.pdf",
    x: -35,
    y: -18,
  },
  {
    id: 7,
    label: "PH2004",
    authors: "Mary Purugganan and Jan Hewit",
    title: "How to read a scientific article",
    link:
      "https://www.owlnet.rice.edu/~cainproj/courses/HowToReadSciArticle.pdf",
    x: -44,
    y: 5,
  },
  {
    id: 8,
    label: "SK2010",
    authors: "Ulrich Schafer and Uwe Kasterka",
    title:
      "Scientific authoring support: A tool to navigate in typed citation graphs",
    link: "https://www.aclweb.org/anthology/W10-0402/",
    x: -31,
    y: 28,
  },
  {
    id: 9,
    label: "R1977",
    authors: "Ina Spiegel-Rosing",
    title: "Science studies: bibliometric and content analysis",
    link: "https://journals.sagepub.com/doi/10.1177/030631277700700111",
    x: 35,
    y: 32,
  },
  {
    id: 10,
    label: "TST2006",
    authors: "Simone Teufel, Advaith Siddharthan, and Dan Tidhar",
    title: "An annotation scheme for citation function",
    link: "https://www.cl.cam.ac.uk/~sht25/papers/sigdial06.pdf",
    x: 3,
    y: -43,
  },
  {
    id: 11,
    label: "WS 2012",
    authors: "Benjamin Weitz and Ulrich Schafer",
    title: "A graphical citation browser for the acl anthology",
    link: "https://www.aclweb.org/anthology/L12-1474/",
    x: -40,
    y: 18,
  },
  {
    id: 12,
    label: "XMM 2013",
    authors: "Han Xu, Eric Martin, and Ashesh Mahidadia",
    title:
      "Using heterogeneous features for scientific citation classification",
    link:
      "https://www.researchgate.net/publication/255673224_Using_Heterogeneous_Features_for_Scientific_Citation_Classification",
    x: 5,
    y: 43,
  },
  {
    id: 13,
    label: "HKI2016",
    authors: "Dongli Han, Hiroshi Koide, and Ayato Inoue",
    title:
      "Acquisition of scientific literatures based on citation-reason visualization",
    link: "https://www.scitepress.org/Papers/2016/56938/56938.pdf",
    x: -17,
    y: -42,
  },
  {
    id: 14,
    label: "KTX2020",
    authors: "Ron Kohavi, Diane Tang, and Ya Xu",
    title:
      "Trustworthy online controlled experiments: A practical guide to A/B testing",
    link:
      "https://www.researchgate.net/publication/339914315_Trustworthy_Online_Controlled_Experiments_A_Practical_Guide_to_AB_Testing",
    x: 41,
    y: -34,
  },
  {
    id: 15,
    label: "MM1975",
    authors: "Michael J Moravcsik and Poovanalingam Murugesan",
    title: "Some results on the function and quality of citations",
    link: "https://www.jstor.org/stable/284557?seq=1",
    x: 47,
    y: 16,
  },
  {
    id: 16,
    label: "Z1968",
    authors: "John M Ziman",
    title:
      "Public Knowledge: An Essay Concerning the Social Dimension of Science",
    link: "https://philpapers.org/rec/ZIMPKA",
    x: 48,
    y: 3,
  },
];

let links = [
  {
    source: 0,
    target: 1,
    curvature: 0.2,
    colorGroup: 0,
    label: "PMot",
  },
  {
    source: 0,
    target: 2,
    curvature: 0.2,
    colorGroup: 0,
    label: "PMot",
  },
  {
    source: 0,
    target: 3,
    curvature: 0.2,
    colorGroup: 0,
    label: "PMot",
  },
  {
    source: 0,
    target: 4,
    curvature: 0.2,
    colorGroup: 1,
    label: "PBas",
  },
  {
    source: 0,
    target: 5,
    curvature: 0.2,
    colorGroup: 1,
    label: "PBas",
  },
  {
    source: 0,
    target: 13,
    curvature: 0.2,
    colorGroup: 2,
    label: "PSup",
  },
  {
    source: 0,
    target: 6,
    curvature: 0.2,
    colorGroup: 1,
    label: "PBas",
  },
  {
    source: 0,
    target: 14,
    curvature: 0.2,
    colorGroup: 3,
    label: "PUse",
  },
  {
    source: 0,
    target: 15,
    curvature: 0.2,
    colorGroup: 0,
    label: "PMot",
  },
  {
    source: 0,
    target: 7,
    curvature: 0.2,
    colorGroup: 1,
    label: "PBas",
  },
  {
    source: 0,
    target: 8,
    curvature: 0.2,
    colorGroup: 1,
    label: "PBas",
  },
  {
    source: 0,
    target: 9,
    curvature: 0.2,
    colorGroup: 0,
    label: "PMot",
  },
  {
    source: 0,
    target: 10,
    curvature: 0.2,
    colorGroup: 2,
    label: "PSup",
  },
  {
    source: 0,
    target: 11,
    curvature: 0.2,
    colorGroup: 1,
    label: "PBas",
  },
  {
    source: 0,
    target: 12,
    curvature: 0.2,
    colorGroup: 0,
    label: "PMot",
  },
  {
    source: 0,
    target: 16,
    curvature: 0.2,
    colorGroup: 0,
    label: "PMot",
  },
];

const graphData = {
  nodes: nodes,
  links: links,
};

export default graphData;
