const productos = [
    {
        nombre: "Bikini Love Summer",
        categoria: "Bikinis",
        precio: "Consultar",
        img: "img/bikini.jpg",
        etiqueta: "Por encargo"
    },
    {
        nombre: "Pijama Soft Dreams",
        categoria: "Indumentaria",
        precio: "$35.000",
        img: "img/pijama.jpg",
        etiqueta: "Por pedido"
    },
    {
        nombre: "Bota Caña Alta Cuero",
        categoria: "Calzado",
        precio: "$92.000",
        img: "img/caña alta.jpg",
        etiqueta: "En stock"
    },
    {
        nombre: "Texana Amolenaria",
        categoria: "Calzado",
        precio: "$85.500",
        img: "img/texana.jpg",
        etiqueta: "Por pedido"
    }
];

const grid = document.getElementById('grid-productos');

function mostrarProductos() {
    if (!grid) return;

    grid.innerHTML = "";

    productos.forEach(item => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'product-card';

        tarjeta.innerHTML = `
            <span class="badge">${item.etiqueta}</span>
            <img src="${item.img}" alt="Imagen de ${item.nombre}">
            <p class="categoria">${item.categoria}</p>
            <h3>${item.nombre}</h3>
            <p class="precio">${item.precio}</p>

            <a href="https://wa.me/54911XXXXXXXX?text=Hola! Me interesa ${item.nombre}" 
               target="_blank" 
               class="btn-comprar">
               Consultar
            </a>
        `;

        grid.appendChild(tarjeta);
    });
}

document.addEventListener('DOMContentLoaded', mostrarProductos);