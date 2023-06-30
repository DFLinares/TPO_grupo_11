document.getElementById("header").innerHTML=`<nav class="nav-menu">
<input type="checkbox" id="check">
<label for="check" class="checkbtn"><i class="fa-solid fa-bars"></i></label>
<a href="index.html" title="Ir a Home">
    <img src="img/Mundo IT horizontal.png" alt="Mundo IT" class="logo">
</a>
    <ul class="nav-opciones">
        <li><button type="button" onclick="cambiarModo()" id="fondobtn"><img src="img/Tema.png" class="responsive"><script src="scripts/cambiarModo.js"></script></li>
            <li id="fondonegro"><a href="index.html"><img src="img/home.png" class="responsive"></a></li>
            <li id="fondonegro"><a href="servicios.html"><img src="img/SERVICIOS.png" class="responsive"></a></li>
            <li id="fondonegro"><a href="quienes_somos.html"><img src="img/Nosotros.png" class="responsive" ></a></li> 
            <li id="fondonegro"><a href="contacto.html"><img src="img/CONTACTO.png" class="responsive"></a></li>
            <li id="fondonegro"><a href="inventario.html"><img src="img/CONTACTO.png" class="responsive"></a></li>
    </ul>
</nav>`