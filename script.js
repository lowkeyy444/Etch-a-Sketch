const container = document.querySelector("#div-container");
container.setAttribute("style", "width: 400px; height:400px");
for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  div.classList.add("div");
  container.appendChild(div);

  div.addEventListener("mouseover", () => {
    div.style.backgroundColor = "blue";
    console.log("test");
  });
}
