document.addEventListener("DOMContentLoaded", function () {
    const marquee = document.querySelector(".marquee");
    const content = document.querySelector(".marquee-content");
    
    // Clonamos el contenido para hacerlo infinito
    const clone = content.cloneNode(true);
    marquee.appendChild(clone);

    let scrollSpeed = 1; // Velocidad del scroll
    let position = 0;

    function animate() {
        position -= scrollSpeed;
        if (position <= -content.offsetWidth) {
            position = 0; // Reinicia la posición sin cortes
        }
        marquee.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(animate);
    }

    animate();
});
