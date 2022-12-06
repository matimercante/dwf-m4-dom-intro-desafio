const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];



function main() {
  const listaFinal = document.querySelector(".lista")
  const listaEl = document.querySelectorAll(".lista li")
  for (let el of listaEl){
    el.remove()
  }
  for (let i of cosasQueAprendimos){
    const newLi = document.createElement("li")
    newLi.textContent = i.tema
    newLi.classList.add(i.class || "item")
    console.log(newLi)
    listaFinal.appendChild(newLi)

  }
  
  
}

main();
