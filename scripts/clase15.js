//METODO FETCH

/* fetch("https://jsonplaceholder.typicode.com/posts")
  .then((resp) => resp.json())
  .then((data) => console.log(data[3].title)); */

//MOSTRAMOS EN EL DOM EL CONTENIDO DE LOS POSTS DE LA API

/* const lista = document.querySelector("#listado");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((resp) => resp.json())
  .then((data) => {
    data.forEach((post) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <h4>${post.title}</h4>
        <p>${post.body}</p>

        `;

      lista.append(li);
    });
}); */

//SOLICITANDO DATOS A DATA.JSON

/* const lista = document.querySelector("#listado");

fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((producto) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <h4>${producto.nombre}</h4>
        <h5>${producto.precio}</h5>
        `;
      lista.append(li);
    });
  }); */

//ASYNC / AWAIT

/* const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts");

console.log(respuesta); */

/* const lista = document.querySelector("#listado");

const pedirPost = async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await resp.json();

  data.forEach((post) => {
    const li = document.createElement("li");
    li.innerHTML = `
        <h4>${post.title}</h4>
        <h5>${post.body}</h5>

        `;
    lista.append(li);
  });
};

pedirPost(); */
