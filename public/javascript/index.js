document.addEventListener("DOMContentLoaded", () => {
  fetch("components/header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("headerContainer").innerHTML = data;
      initHeaderMenu(); 
      //Esta funcion es para iniciar el menu hamburguesa, se encuentra en script.js
    });
});
