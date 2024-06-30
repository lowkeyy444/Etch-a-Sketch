let rainbowmode = false;
let gridSize = 30;
function createGrid(gridSize) {
  const container = document.querySelector("#div-container");
  container.innerHTML = "";
  container.setAttribute("style", "width: 600px; height:600px");

  for (let i = 0; i < gridSize * gridSize; i++) {
    const div = document.createElement("div");
    div.classList.add("div");
    div.setAttribute(
      "style",
      "height: " + 600 / gridSize + "px; width: " + 600 / gridSize + "px;"
    );
    container.appendChild(div);

    div.addEventListener("mouseover", () => {
      if (rainbowmode) {
        div.style.backgroundColor = random_rgba();
      } else {
        div.style.backgroundColor = "#363a47";
        console.log("rainbow test");
      }
    });

    const reset = document.querySelector("#clear");
    reset.addEventListener("click", () => {
      div.style.backgroundColor = "#3bba9c";
    });
  }
}

function checkSize() {
  let size = prompt("Enter the Grid Size:\n(Between 1-100)");
  return size;
}

const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  let gridSize = checkSize();
  console.log(gridSize);
  createGrid(gridSize);
});

const reset = document.querySelector("#reset");

reset.addEventListener("click", () => {
  createGrid(gridSize);
  rainbowmode = false;
});

const rainbow = document.querySelector("#rainbow");
rainbow.addEventListener("click", () => {
  rainbowmode = !rainbowmode;
});

function random_rgba() {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
      .toUpperCase()
  );
}
createGrid(gridSize);
