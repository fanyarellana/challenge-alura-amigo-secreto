let amigos = [];

//Agregar nuevo amigo y actualizar la lista visual.

function nuevoAmigo() {
  let nombreDeAmigo = document.getElementById("amigo").value;

  if (nombreDeAmigo.trim() === "") {
    alert("Por favor, inserte un nombre");
  } else {
    amigos.push(nombreDeAmigo);
    document.querySelector("#amigo").value = "";
    mostrarListaAmigos();
  }
}

//Nueva visualización de lista de amigos
 
function mostrarListaAmigos() {
  let listaAmigos = document.querySelector("#listaAmigos");
  listaAmigos.innerHTML = "";

  for (let index = 0; index < amigos.length; index++) {
    const element = amigos[index];

    let listaHTML = document.createElement("li");
    listaHTML.textContent = element;
    listaAmigos.appendChild(listaHTML);
  }
}

//Se elige un amigo del array y verificar que la lista no este vacía

function sorteoAmigo() {
  let cantidadAmigos = amigos.length;
  if (cantidadAmigos === 0) {
    alert("Por favor, inserte nombre para elegir tu amigo secreto");
  } else {
    let indiceAmigo = Math.floor(Math.random() * cantidadAmigos);
    let resultadoHTML = document.querySelector("#resultado");
    resultadoHTML.innerHTML = `<li> Tu amigo secreto es: ${amigos[indiceAmigo]}</li>`;
  }
}
