# Footshop

Footshop es un e commerce de venta de camisetas deportivas realizado por Santiago Simoni.
La web cuenta con un inicio que te muestra un Navbar que contiene el catálogo de las camisetas con sus respectivas secciones, en este caso están divididas dependiendo del origen del que son (futbol europeo, selecciones nacionales y futbol argentino), la web permite filtrar las camisetas dependiendo la categoría, cada producto te muestra el precio el nombre y un botón que te permite conocer más información, al oprimir el botón te lleva a una breve descripción y la funcionalidad de agregar al carrito, esta funcionalidad cuenta con un contador que te permite seleccionar la cantidad que quieras agregar.

Al agregar al carrito se muestra la imagen, el precio total del producto (si se agregaron más de un mismo producto se suma al precio total individual) y un boton que te permite sacar el producto del carrito, para finalizar la compra lo primero es llenar un formulario, el formulario completo se envía a la base de datos de firebase generando un ID para el usuario.

* Para este proyecto no emplee ningún framework de css
* Para ejecutar el proyecto
```
npm run dev
```
* Librerias empleadas
1. Base de datos NoSQL firebase
1. Vite
1. React-router-dom
1. SweetAlert
