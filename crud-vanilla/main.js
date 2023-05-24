//Datos necesarios para cargar el formulario
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const correo = document.getElementById('correo');
const telefono = document.getElementById('telefono');
//Datos para manejar con el DOM
const formulario = document.getElementById('formulario');
const editar = document.getElementById('editar-usuario');
const modalEditar = document.getElementById('editar-usuarios');
const eliminar = document.getElementById('eliminar-usuario');
const myModal = document.getElementById('exampleModal');



const agregarUsuario = (e) => {
    e.preventDefault();
    const camposVacios = nombre.value === "" && apellido.value === "" && correo.value === "" && telefono.value === "";
    if(camposVacios){
        alert('Datos inconclusos')
    }else{
        const tr = document.createElement('tr');
        tr.setAttribute('id','datos-nuevos');
        tr.innerHTML = `
        <td>${nombre.value}</td>
        <td>${apellido.value}</td>
        <td>${correo.value}</td>
        <td>${telefono.value}</td>
        `;
        console.log(tr);
        const trMaster = document.getElementById('tr-master');
        trMaster.appendChild(tr);
    }
};

const editarUsuarios = () => {
    const editForm = document.getElementById('editar-usuarios');
    editForm.addEventListener('click',(e) => {
        e.preventDefault();
        const nombreEditado = document.getElementById('nombre-editado');
        const apellidoEditado = document.getElementById('apellido-editado');
        const correoEditado = document.getElementById('correo-editado');
        const telefonoEditado = document.getElementById('telefono-editado');

        //Edicion afecta solo cuando se creo un usuario
        const datosAgregados = document.getElementById('datos-nuevos');
        const tr = document.createElement('tr');
        tr.innerHTML += `
        <td>${nombreEditado.value}</td>
        <td>${apellidoEditado.value}</td>
        <td>${correoEditado.value}</td>
        <td>${telefonoEditado.value}</td>
        `;
        datosAgregados.replaceChildren(tr);
        console.log('Editando usuarios');
    });
}
const eliminarUsuario = () => {
    const trMaster = document.getElementById('tr-master');
    trMaster.remove();
    console.log('Usuario Eliminado');
}

const abrirModal = () => {
    $('#exampleModal').modal('show');
}


//Mostramos las funcionalidades respectivas
formulario.addEventListener('submit',agregarUsuario);
eliminar.addEventListener('click',eliminarUsuario);
editar.addEventListener('click',abrirModal);
modalEditar.addEventListener('click',editarUsuarios);