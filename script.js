function checkSize() {
  let size = prompt("size?");
  return size;
}

const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  let gridSize = checkSize();
  console.log(gridSize);

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
      div.style.backgroundColor = "blue";
      console.log("test");
    });
  }
});
