const productos = [
    {
        nombre: "Bikini Love Summer",
        categoria: "Bikinis",
        precio: "Consultar [cite: 57]",
        img: "https://images.unsplash.com/photo-1596702994737-954998064601?q=80&w=600",
        etiqueta: "Por encargo [cite: 38]"
    },
    {
        nombre: "Pijama Soft Dreams",
        categoria: "Indumentaria",
        precio: "$35.000",
        img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=600",
        etiqueta: "Por pedido [cite: 50]"
    },
    {
        nombre: "Bota Caña Alta Cuero",
        categoria: "Calzado",
        precio: "$92.000",
        img: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=600",
        etiqueta: "En stock [cite: 38]"
    },
    {
        nombre: "Texana Amolenaria",
        categoria: "Calzado",
        precio: "$85.500",
        img: "https://images.unsplash.com/photo-1638943305136-407da5640f0c?q=80&w=600",
        etiqueta: "Por pedido [cite: 50]"
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
            <img src="${item.img}" alt="${item.nombre}">
            <p style="font-size: 11px; color: #999; text-transform: uppercase;">${item.categoria}</p>
            <h3>${item.nombre}</h3>
            <p style="color: #d4a3b3; font-weight: bold; font-size: 18px;">${item.precio}</p>
        `;
        grid.appendChild(tarjeta);
    });
}

document.addEventListener('DOMContentLoaded', mostrarProductos);


