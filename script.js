// ── PRODUCTOS ────────────────────────────────────────────────────
const productos = [
    {
        id: 1,
        nombre: "Bikini Love Summer",
        categoria: "Bikinis",
        precio: null,
        img: "img/bikini.jpg",
        etiqueta: "Por encargo"
    },
    {
        id: 2,
        nombre: "Pijama Soft Dreams",
        categoria: "Indumentaria",
        precio: 35000,
        img: "img/pijama.jpg",
        etiqueta: "Por pedido"
    },
    {
        id: 3,
        nombre: "Bota Caña Alta Cuero",
        categoria: "Calzado",
        precio: 92000,
        img: "img/caña alta.jpg",
        etiqueta: "En stock"
    },
    {
        id: 4,
        nombre: "Texana Amolenaria",
        categoria: "Calzado",
        precio: 85500,
        img: "img/texana.jpg",
        etiqueta: "Por pedido"
    }
];

// ── CARRITO ───────────────────────────────────────────────────────
let carrito = JSON.parse(localStorage.getItem('carritoAmolenaria')) || [];

function guardarCarrito() {
    localStorage.setItem('carritoAmolenaria', JSON.stringify(carrito));
}

function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    if (!producto) return;

    const itemExistente = carrito.find(i => i.id === id);
    if (itemExistente) {
        itemExistente.cantidad++;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }

    guardarCarrito();
    actualizarContador();
    mostrarToast(`"${producto.nombre}" agregado al carrito 🛒`);
}

function cambiarCantidad(id, delta) {
    const item = carrito.find(i => i.id === id);
    if (!item) return;

    item.cantidad += delta;
    if (item.cantidad <= 0) {
        carrito = carrito.filter(i => i.id !== id);
    }

    guardarCarrito();
    actualizarContador();
    renderizarDrawer();
}

function eliminarDelCarrito(id) {
    carrito = carrito.filter(i => i.id !== id);
    guardarCarrito();
    actualizarContador();
    renderizarDrawer();
}

function actualizarContador() {
    const contador = document.getElementById('contador-carrito');
    if (!contador) return;
    const total = carrito.reduce((acc, i) => acc + i.cantidad, 0);
    contador.textContent = total;
    contador.style.display = total === 0 ? 'none' : 'inline-flex';
}

// ── DRAWER ────────────────────────────────────────────────────────
function abrirDrawer() {
    const drawer = document.getElementById('drawer-carrito');
    const overlay = document.getElementById('overlay-carrito');
    if (!drawer) return;
    renderizarDrawer();
    drawer.classList.add('abierto');
    overlay.classList.add('visible');
    document.body.style.overflow = 'hidden';
}

function cerrarDrawer() {
    const drawer = document.getElementById('drawer-carrito');
    const overlay = document.getElementById('overlay-carrito');
    if (!drawer) return;
    drawer.classList.remove('abierto');
    overlay.classList.remove('visible');
    document.body.style.overflow = '';
}

function renderizarDrawer() {
    const lista = document.getElementById('lista-carrito');
    const total = document.getElementById('total-carrito');
    if (!lista) return;

    if (carrito.length === 0) {
        lista.innerHTML = '<p class="carrito-vacio">Tu carrito está vacío 🛍️</p>';
        total.textContent = '';
        return;
    }

    lista.innerHTML = carrito.map(item => `
        <div class="carrito-item">
            <img src="${item.img}" alt="${item.nombre}">
            <div class="carrito-item-info">
                <p class="carrito-item-nombre">${item.nombre}</p>
                <p class="carrito-item-precio">$${(item.precio * item.cantidad).toLocaleString('es-AR')}</p>
                <div class="carrito-item-controles">
                    <button onclick="cambiarCantidad(${item.id}, -1)">−</button>
                    <span>${item.cantidad}</span>
                    <button onclick="cambiarCantidad(${item.id}, 1)">+</button>
                    <button class="btn-eliminar" onclick="eliminarDelCarrito(${item.id})">🗑️</button>
                </div>
            </div>
        </div>
    `).join('');

    const totalNum = carrito.reduce((acc, i) => acc + i.precio * i.cantidad, 0);
    total.innerHTML = `<strong>Total: $${totalNum.toLocaleString('es-AR')}</strong>`;
}

// ── TOAST ─────────────────────────────────────────────────────────
function mostrarToast(mensaje) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = mensaje;
    toast.classList.add('mostrar');
    setTimeout(() => toast.classList.remove('mostrar'), 3000);
}

// ── CATÁLOGO ──────────────────────────────────────────────────────
const grid = document.getElementById('grid-productos');

function mostrarProductos() {
    if (!grid) return;
    grid.innerHTML = "";
    productos.forEach(item => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'product-card';

        const botonAccion = item.precio
            ? `<button class="btn-comprar" onclick="agregarAlCarrito(${item.id})">Agregar al carrito</button>`
            : `<a href="https://wa.me/54911XXXXXXXX?text=Hola! Me interesa ${item.nombre}" target="_blank" class="btn-comprar">Consultar por WhatsApp</a>`;

        tarjeta.innerHTML = `
            <span class="badge">${item.etiqueta}</span>
            <img src="${item.img}" alt="Imagen de ${item.nombre}">
            <p class="categoria">${item.categoria}</p>
            <h3>${item.nombre}</h3>
            <p class="precio">${item.precio ? '$' + item.precio.toLocaleString('es-AR') : 'Consultar'}</p>
            ${botonAccion}
        `;
        grid.appendChild(tarjeta);
    });
}

// ── FORMULARIO ────────────────────────────────────────────────────
function iniciarFormulario() {
    const emailGuardado = localStorage.getItem('emailUsuario');
    const inputEmail = document.querySelector('input[name="email"]');
    if (emailGuardado && inputEmail) {
        inputEmail.value = emailGuardado;
    }

    const form = document.querySelector('.formulario');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombre  = form.querySelector('input[name="nombre"]').value.trim();
        const email   = form.querySelector('input[name="email"]').value.trim();
        const mensaje = form.querySelector('textarea[name="mensaje"]').value.trim();

        if (nombre === '') {
            mostrarErrorForm(form, 'Por favor ingresá tu nombre.');
            return;
        }
        if (!esEmailValido(email)) {
            mostrarErrorForm(form, 'Ingresá un email válido.');
            return;
        }
        if (mensaje === '') {
            mostrarErrorForm(form, 'El mensaje no puede estar vacío.');
            return;
        }

        localStorage.setItem('emailUsuario', email);
        form.submit();
    });
}

function esEmailValido(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function mostrarErrorForm(form, mensaje) {
    let error = form.querySelector('.error-msg');
    if (!error) {
        error = document.createElement('p');
        error.className = 'error-msg';
        error.style.cssText = 'color:#c0536a; font-size:13px; margin-top:-5px;';
        form.insertBefore(error, form.querySelector('button'));
    }
    error.textContent = mensaje;
}

// ── INICIO ────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos();
    iniciarFormulario();
    actualizarContador();

    // Carrito
    const btnCarrito = document.getElementById('btn-carrito');
    if (btnCarrito) btnCarrito.addEventListener('click', abrirDrawer);

    const btnCerrar = document.getElementById('cerrar-drawer');
    if (btnCerrar) btnCerrar.addEventListener('click', cerrarDrawer);

    const overlay = document.getElementById('overlay-carrito');
    if (overlay) overlay.addEventListener('click', cerrarDrawer);

    // Menú hamburguesa
    const bar    = document.getElementById('bar');
    const close  = document.getElementById('close');
    const navBar = document.getElementById('napa');

    if (bar) {
        bar.addEventListener('click', () => {
            navBar.classList.add('active');
        });
    }

    if (close) {
        close.addEventListener('click', () => {
            navBar.classList.remove('active');
        });
    }

    // Cerrar el menú al hacer clic en un enlace (mobile)
    if (navBar) {
        navBar.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navBar.classList.remove('active');
            });
        });
    }
});
