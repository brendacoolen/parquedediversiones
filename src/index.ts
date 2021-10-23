let alturapersona: number = document.getElementById("alturapersona");
const alturapermitida: number = 130;
let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  if (alturapersona.value > alturapermitida) {
    console.log("La persona puede subir al juego");
  } else {
    console.log("La persona no puede subir al juego");
  }
});
