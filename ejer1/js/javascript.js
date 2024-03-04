window.onload = function() {
document.getElementById('titulo').addEventListener('wheel', function(event) {
        event.preventDefault(); // Evita el comportamiento predeterminado de la rueda (scroll)
        var delta = event.deltaY;
        var fontSize = parseInt(window.getComputedStyle(this).fontSize);
        if (delta > 0) {
            this.style.fontSize = (fontSize - 2) + 'px'; // Disminuye el tamaño del texto
        } else {
            this.style.fontSize = (fontSize + 2) + 'px'; // Aumenta el tamaño del texto
        }
        console.log('Desplazamiento de la rueda del ratón:', delta);
});
document.getElementById('texto').addEventListener('wheel', function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado de la rueda (scroll)
    var delta = event.deltaY;
    var fontSize = parseInt(window.getComputedStyle(this).fontSize);
    if (delta > 0) {
        this.style.fontSize = (fontSize - 2) + 'px'; // Disminuye el tamaño del texto
    } else {
        this.style.fontSize = (fontSize + 2) + 'px'; // Aumenta el tamaño del texto
    }
    console.log('Desplazamiento de la rueda del ratón:', delta);
});

    document.getElementById('imagen').addEventListener('wheel', function(event) {
        event.preventDefault(); // Evita el comportamiento predeterminado de la rueda (scroll)
        var delta = event.deltaY;
        var height = parseInt(window.getComputedStyle(this).height);
        if (delta > 0) {
            this.style.height = (height - 2) + 'px'; // Disminuye el tamaño del texto
        } else {
            this.style.height = (height + 2) + 'px'; // Aumenta el tamaño del texto
        }
        console.log('Desplazamiento de la rueda del ratón:', delta);
});

const rotatingImage = document.getElementById('imagen');
let rotationAngle = 0;
document.addEventListener('keydown', function(event) {
  if (event.key === 'q') {
    rotationAngle -= 45;
  } else if (event.key === 'w') {
    rotationAngle += 45;
  }
  rotatingImage.style.transform = `translate(50%, 50%) rotate(${rotationAngle}deg)`;
});

}