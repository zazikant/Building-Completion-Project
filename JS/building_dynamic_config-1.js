let buildingData = [
  {
    floors: 10,
    buildingName: "R1",
    concrete: [1, 2, 5, 7],
    painting: [2, 3, 8],
  },
  {
    floors: 20,
    buildingName: "R2",
    concrete: [1, 10, 8],
    painting: [6, 3, 8],
  },
  {
    floors: 5,
    buildingName: "R3",
    concrete: [2, 3],
    painting: [1, 4],
  },
  {
    floors: 30,
    buildingName: "R4",
    concrete: [3, 6, 7],
    painting: [8, 7, 11, 14],
  },
  {
    floors: 1000,
    buildingName: "R5",
    concrete: [333, 666, 777],
    painting: [888, 745, 311, 145],
  }
];

let BuildingCollection = document.getElementById("building-collection");
let functionalButtons = document.getElementById("functional-buttons");
let concreteBtn = document.getElementById("concrete-btn");
let paintingBtn = document.getElementById("painting-btn");
let activityDropDownBtn = document.getElementById("activity-drop-down-btn");
let towerDropdownBtnElement = document.getElementById("tower-drop-down-btn");
let searchBoxElement = document.getElementById("search-box");
let towerSearchbox = document.getElementById("tower-search-box");
let concreteColored = false;
let paintingColored = false;
