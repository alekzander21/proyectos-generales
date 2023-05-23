//Funcion para agregar elementos
window.localStorage.setItem('datos',nombre);
const agregarDato = async() => {
  const nombre = document.getElementById("nombre").value;


  const elementNombre = document.createElement("p");
  elementNombre.setAttribute("id", "nuevo-nombre");
  elementNombre.innerText = nombre;

  const containerNuevo = document.getElementById("dato-nombre");
  await containerNuevo.appendChild(elementNombre);
};

const eliminarDato = () => {
    const nombreExistente = document.getElementById('nuevo-nombre');
    if(nombreExistente == nombreExistente){
        console.log('Dato Eliminado');
    }else{
        console.log('Dato no Eliminado')
    }
    nombreExistente.remove();
}

const editarDato = () => {
    const nombreExistente = document.getElementById('nuevo-nombre');
    const nombreEditado = document.getElementById('nombre-editado').value;

    nombreExistente.replaceWith(nombreEditado);
}