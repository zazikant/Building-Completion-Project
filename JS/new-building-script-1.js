// let containerElements = document.querySelectorAll(".containers");
// concreteBtn.style.backgroundColor = "#dddddd";
// concreteBtn.style.color = "#000000";
// paintingBtn.style.backgroundColor = "#dddddd";
// paintingBtn.style.color = "#000000";
// console.log(containerElements);
functionalButtons.style.display = "none";

for (let i = 0; i < buildingData.length; i++) {
  let buildingElement = document.createElement("div");
  let buildingName = document.createElement("div");
  buildingName.classList.add("building-name");
  // let baseElement = document.createElement("div");
  buildingElement.classList.add("buildings");
  buildingElement.setAttribute("id", `building-${i + 1}`);
  BuildingCollection.appendChild(buildingElement);
  // baseElement.classList.add("base");
  // baseElement.setAttribute("id", `base-${i + 1}`);
  // BuildingCollection.appendChild(baseElement);
  // console.log(buildingElement);
  for (let j = 0; j <= buildingData[i].floors; j++) {
    if (j == buildingData[i].floors) {
      let baseElement = document.createElement("div");
      baseElement.classList.add("base");
      buildingElement.appendChild(baseElement);
      let seriesElement = document.createElement("div");
      seriesElement.classList.add("building-series");
      buildingElement.appendChild(seriesElement);
      for (let k = 0; k < buildingData[i].floors; k++) {
        seriesElement.innerHTML += `<div class="series">${
          buildingData[i].floors - k
        }</div>`;
      }
    } else {
      let floorElements = document.createElement("div");
      floorElements.classList.add("floors");
      floorElements.classList.add(`building-${i + 1}`);
      floorElements.setAttribute("id", `floor-${j + 1}`);
      4;
      buildingElement.appendChild(floorElements);
    }
  }
  buildingElement.appendChild(buildingName);
  buildingName.innerText = `${buildingData[i].buildingName}`;
}

Array.from(document.querySelectorAll(".buildings")).forEach((e) => {
  for (
    let i = 0;
    i < parseInt(getComputedStyle(e).getPropertyValue("width")) / 5;
    i++
  ) {
    let lineElement = document.createElement("div");
    lineElement.classList.add("lines");
    lineElement.style.left = `${i * 11}px`;
    e.appendChild(lineElement);
  }
});
let buildingNameElements = document.querySelectorAll(".building-name");

concreteBtn.addEventListener("click", () => {
  if (concreteColored === false) {
    let buildingElement = document.querySelectorAll(".buildings");
    Array.from(buildingElement).forEach((e, i) => {
      floorElements = e.querySelectorAll(".floors");
      Array.from(floorElements).forEach((f, j, fl) => {
        if (buildingData[i].concrete.includes(fl.length - j)) {
          f.style.backgroundColor = "#183319";
        } else {
          f.style.backgroundColor = "#dddddd";
        }
      });
    });
    concreteColored = true;
    concreteBtn.style.backgroundColor = "#183319";
    concreteBtn.style.color = "#fecf07";
  } else {
    floorElements = document.querySelectorAll(".floors");
    Array.from(floorElements).forEach((f) => {
      f.style.backgroundColor = "#dddddd";
    });
    concreteColored = false;
    concreteBtn.style.backgroundColor = "#dddddd";
    concreteBtn.style.color = "#000000";
  }
  paintingColored = false;
  paintingBtn.style.backgroundColor = "#dddddd";
  paintingBtn.style.color = "#000000";
  functionalButtons.style.display = "none";
  activityDropDownBtn.firstElementChild.innerText = "Concrete";
  if (concreteColored === false && paintingColored === false) {
    activityDropDownBtn.firstElementChild.innerText = "Activity";
  }
});

paintingBtn.addEventListener("click", () => {
  if (paintingColored === false) {
    let buildingElement = document.querySelectorAll(".buildings");
    Array.from(buildingElement).forEach((e, i) => {
      floorElements = e.querySelectorAll(".floors");
      Array.from(floorElements).forEach((f, j, fl) => {
        if (buildingData[i].painting.includes(fl.length - j)) {
          f.style.backgroundColor = "#183319";
        } else {
          f.style.backgroundColor = "#dddddd";
        }
      });
    });
    paintingColored = true;
    paintingBtn.style.backgroundColor = "#183319";
    paintingBtn.style.color = "#fedf07";
  } else {
    floorElements = document.querySelectorAll(".floors");
    Array.from(floorElements).forEach((f) => {
      f.style.backgroundColor = "#dddddd";
    });
    paintingColored = false;
    paintingBtn.style.color = "#000000";
    paintingBtn.style.backgroundColor = "#dddddd";
  }
  concreteColored = false;
  concreteBtn.style.color = "#000000";
  concreteBtn.style.backgroundColor = "#dddddd";
  functionalButtons.style.display = "none";
  activityDropDownBtn.firstElementChild.innerText = "Painting";
  if (concreteColored === false && paintingColored === false) {
    activityDropDownBtn.firstElementChild.innerText = "Activity";
  }
});

activityDropDownBtn.addEventListener("click", function () {
  if (
    getComputedStyle(functionalButtons).getPropertyValue("display") === "block"
  ) {
    functionalButtons.style.display = "none";
  } else {
    functionalButtons.removeAttribute("style");
  }
});

towerDropdownBtnElement.addEventListener("click", () => {
  if (
    getComputedStyle(searchBoxElement).getPropertyValue("display") === "block"
  ) {
    searchBoxElement.style.display = "none";
  } else {
    searchBoxElement.removeAttribute("style");
  }
});

towerSearchbox.addEventListener("input", () => {
  Array.from(buildingNameElements).forEach((e, i, a) => {
    //console.log(e.innerText.includes(towerSearchbox.value));
    // console.log("2",e.innerText.toLowerCase().includes(towerSearchbox.value.toLowerCase().trim())) ;
    if (
      e.innerText
        .toLowerCase()
        .includes(towerSearchbox.value.toLowerCase().trim())
    ) {
      e.parentElement.style.display = "grid";
    } else {
      e.parentElement.style.display = "none";
    }
    e.parentElement.parentElement.style.justifyContent = "center";
  });
});
