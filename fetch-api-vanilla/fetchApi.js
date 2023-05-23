//Practicando APIS

const buscador = document.getElementById('buscador');
const iconSearch = document.getElementById('icon-search');
const API_KEY = 'https://jsonplaceholder.typicode.com/posts';

const buscarPost = () => {
	fetch(API_KEY)
	.then((response) => response.json())
	.then((data) => {
		//Manipulamos los datos que trae nuestra API
		const tablaDatos = document.getElementById('tablaDatos');
			data.forEach(post => {
				if(buscador.value === `${post.id}`){
					const row = document.createElement('li');
					row.innerHTML = `<p>ID del post: ${post.id}</p><p>Titulos del Post: ${post.title}</p><p>${post.body}</p>`;
					tablaDatos.appendChild(row);
				};
			});
	});
}

iconSearch.addEventListener('click',buscarPost);