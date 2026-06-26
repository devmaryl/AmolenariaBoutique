# Amolenaria Boutique - Catálogo Online e Indumentaria

Este proyecto fue desarrollado como solución técnica para un emprendimiento real de calzado e indumentaria. El objetivo es centralizar la oferta de productos y agilizar el proceso de venta a través de WhatsApp.

Relevamiento y Necesidades

A través de un proceso de análisis con la dueña del negocio, se identificaron las siguientes necesidades:


Catálogo centralizado: Evitar la publicación manual e individual de productos en redes sociales.
Reducción de consultas repetitivas: Automatizar la información de talles, medios de pago y zonas de envío.
Agilidad en el cierre de venta: Que el cliente llegue al chat con el modelo ya definido.


Funcionalidades


Catálogo dinámico: Productos generados desde un array de objetos en JavaScript y renderizados en el DOM.
Carrito de compras: Permite agregar productos, modificar cantidades y eliminar ítems. El carrito persiste entre sesiones gracias a LocalStorage.
Toast notifications: Feedback visual al agregar productos al carrito (reemplaza los alert() tradicionales).
Drawer lateral: Panel deslizable que muestra el detalle del carrito con subtotales y total general.
Formulario con validación JS: Validación del lado del cliente antes del envío (nombre, email y mensaje). El email se guarda en LocalStorage y se precarga en visitas futuras.
Guía de Talles: Tabla con medidas orientativas por número.
Información Logística: Métodos de pago y opciones de envío visibles en el footer.
Botón de WhatsApp flotante: Acceso directo al chat para consultas.


Tecnologías utilizadas


HTML5
CSS3 (Flexbox, Grid, diseño responsivo)
JavaScript ES6+ (DOM, eventos, LocalStorage, arrow functions)
Formspree (envío del formulario de contacto)
Google Fonts (Montserrat + Playfair Display)
Git y GitHub (control de versiones y despliegue)


Instrucciones para probar el proyecto

Carrito de compras y Toast


Ir a la sección Nuestro Catálogo.
Hacer clic en "Agregar al carrito" en cualquier producto con precio (Pijama, Bota o Texana).
Verificar que aparece el toast rosado en la esquina superior derecha con el nombre del producto.
Observar que el contador del carrito (🛒) en el menú se actualiza.
Hacer clic en el ícono 🛒 del menú para abrir el drawer lateral con el detalle del carrito.
Probar los botones + y − para modificar cantidades, y el 🗑️ para eliminar un producto.
Recargar la página: el carrito debe mantenerse gracias a LocalStorage.


Formulario con validación y LocalStorage


Ir a la sección Contacto.
Intentar enviar el formulario vacío → debe aparecer un mensaje de error en rojo.
Completar todos los campos con un email válido y enviar.
Recargar la página: el campo email debe aparecer precargado automáticamente con el email ingresado (LocalStorage).


Productos con consulta por WhatsApp


El producto Bikini Love Summer no tiene precio fijo.
Su botón dice "Consultar por WhatsApp" y abre el chat directamente.


Desarrollado por

María Laura Robledo Castro - Analista de Sistemas