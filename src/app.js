/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#boton").addEventListener("click", () => {
    document.querySelector("#excusa").innerHTML = generadorDeExcusas();
  });
  console.log("Hello Rigo from the console!");
};

let generadorDeExcusas = () => {
  let pronombre = ["El", "Un"];
  let sujeto = ["perro", "gato", "loro", "zorro", "delincuente", "niño"];
  let acciones = ["robó mi", "tiró mi", "comió mi", "rompió mi"];
  let objeto = ["tarea", "celular", "computadora", "billetera", "llave"];
  let donde = ["en la escuela", "en mi casa", "en la calle"];

  let índicePronombre = Math.floor(Math.random() * pronombre.length);
  let índiceSujeto = Math.floor(Math.random() * sujeto.length);
  let índiceAcciones = Math.floor(Math.random() * acciones.length);
  let índiceObjeto = Math.floor(Math.random() * objeto.length);
  let índiceDonde = Math.floor(Math.random() * donde.length);

  return `${pronombre[índicePronombre]} ${sujeto[índiceSujeto]} ${acciones[índiceAcciones]} ${objeto[índiceObjeto]} ${donde[índiceDonde]}.`;
};

// template literals o comillas francesas
