<template>
    <header>
        <div class="header-content">
            <img src="../../t1.jpg" width="100px" alt="Foto de t1" />
            <h1>PRACTICA-DI</h1>
        </div>
    </header>
</template>

<style scoped>
body {
    background-color: #1a1a1a; /* Fondo general de la página en negro */
    color: #f5f5f5; /* Color de texto blanco o gris claro para visibilidad */
    font-family: 'Source Sans Pro', sans-serif;
}

header {
    background-color: #000000; /* Fondo del header en negro */
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border-radius: 8px; /* Redondea las esquinas */

    border-bottom: 3px solid #f42e56; /* Borde inferior rojo brillante */
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3); /* Sombra elegante */
}

.header-content {
    display: flex;
    align-items: center;
}

header img {
    padding: 5px;
    margin-right: 15px; /* Espacio entre la imagen y el texto */
    border-radius: 5px; /* Borde redondeado para la imagen */
}

header h1 {
    font-size: 24px;
    color: #f42e56; /* Texto en rojo */
    margin: 0;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-family: 'Source Sans Pro', sans-serif;
}
</style>
