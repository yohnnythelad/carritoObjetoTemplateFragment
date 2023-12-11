const carrito = document.querySelector("#carrito");
const template = document.querySelector("#template");
const fragment = document.createDocumentFragment();
const btnesBotones = document.querySelectorAll(".card .btn");

const carritoObjeto = {};

const agregarAlCarrito = (e) => {

    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
    };

    if (carritoObjeto.hasOwnProperty(producto.id)){
        producto.cantidad = carritoObjeto[producto.titulo].cantidad + 1;
    }

    carritoObjeto[producto.titulo] = producto;
   
    pintarCarrito();

}

const pintarCarrito = () => {

    carrito.textContent = "";

    Object.values(carritoObjeto).forEach((item) => {
        const clone = template.content.firstElementChild.cloneNode(true);
        clone.querySelector('.lead').textContent = item.titulo;
        clone.querySelector('.badge').textContent = item.cantidad;

        fragment.appendChild(clone);
    })

    carrito.appendChild(fragment);


}

btnesBotones.forEach((btn) => btn.addEventListener("click", agregarAlCarrito));






//const lista = document.querySelector('#lista')
// const fragment = document.createDocumentFragment();
// const liTemplate = document.querySelector('#liTemplate');

// const arrayPaises = ["Peru", "Bolivia", "Colombia"];

// const clickpaises = () => console.log("me diste click")

// arrayPaises.forEach(pais => {

//     const clone = liTemplate.content.firstElementChild.cloneNode(true)
//     clone.querySelector('span').textContent = pais
//     clone.addEventListener('click', clickpaises)

//     fragment.appendChild(clone)
// })

// lista.appendChild(fragment)

//const clone = liTemplate.content.cloneNode(true);

    




// arrayPaises.forEach(pais =>{

//     const li = document.createElement('li');
//     li.className = 'list'

//     const b = document.createElement('b')
//     b.textContent = 'Pais: '

//     const span = document.createElement('span')
//     span.className = 'text-primary'
//     span.textContent = pais;

//     li.appendChild(b)
//     li.appendChild(span)

//     fragment.appendChild(li)
// })

// lista.appendChild(fragment)