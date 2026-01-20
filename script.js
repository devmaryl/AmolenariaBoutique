const productos = [
    {
        nombre: "Zapatos Gala Noche",
        precio: "$48.000",
        img: "https://images.unsplash.com/photo-1562273589-104b9efd4a3c?q=80&w=600&auto=format&fit=crop"
    },
    {
        nombre: "Bota Caña Alta Cuero",
        precio: "$92.000",
        img: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=600&auto=format&fit=crop"
    },
    {
        nombre: "Texanas Amolenaria",
        precio: "$85.500",
        img: "https://images.unsplash.com/photo-1638943305136-407da5640f0c?q=80&w=600&auto=format&fit=crop"
    },
    {
        nombre: "Botín Nude Caña Baja",
        precio: "$64.000",
        img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=600&auto=format&fit=crop"
    },
    {
        nombre: "Stiletto Classic Pink",
        precio: "$52.000",
        img: "https://images.unsplash.com/photo-1596702994737-954998064601?q=80&w=600&auto=format&fit=crop"
    }
];

const grid = document.getElementById('grid-productos');
const menuBtn = document.getElementById('menu-btn');
const mainNav = document.getElementById('main-nav');

function mostrarProductos() {
    if (!grid) return;
    
    // Limpiamos la grilla antes de cargar por si acaso
    grid.innerHTML = "";

    productos.forEach(item => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'product-card';
        tarjeta.innerHTML = `
            <img src="${item.img}" alt="${item.nombre}">
            <h3>${item.nombre}</h3>
            <p style="color: #d4a3b3; font-weight: bold; font-size: 18px;">${item.precio}</p>
        `;
        grid.appendChild(tarjeta);
    });
}

// Menú móvil (opcional para esta fase, pero ya queda el evento listo)
if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });
}

document.addEventListener('DOMContentLoaded', mostrarProductos);
