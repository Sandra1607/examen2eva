function cargarCiudades() {
    const pais = document.getElementById("pais").value;
    const ciudadSelect = document.getElementById("ciudad");

    ciudadSelect.innerHTML = "";

    switch(pais) {
        case "espana":
            agregarCiudades(["Madrid", "Barcelona", "Valencia"]);
            break;
        case "francia":
            agregarCiudades(["París", "Marsella", "Lyon"]);
            break;
        case "italia":
            agregarCiudades(["Roma", "Milán", "Nápoles"]);
            break;
        default:
            break;
    }
}

function agregarCiudades(ciudades) {
    const ciudadSelect = document.getElementById("ciudad");
    ciudades.forEach(ciudad => {
        const opcion = document.createElement("option");
        opcion.text = ciudad;
        ciudadSelect.add(opcion);
    });
}

function validarFormulario() {
    event.preventDefault(); 
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const direccion = document.getElementById("direccion").value;
    const pais = document.getElementById("pais").value;
    const ciudad = document.getElementById("ciudad").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const usuario = document.getElementById("usuario").value;
    const contraseña = document.getElementById("contraseña").value;
    const repetirContraseña = document.getElementById("repetirContraseña").value;

    if (!nombre || !apellido || !direccion || !pais || !ciudad || !email || !telefono || !usuario || !contraseña || !repetirContraseña) {
        alert("Por favor, complete todos los campos.");
        return false;
    }

    if (email.indexOf("@") === -1) {
        alert("El email debe contener un '@'.");
        document.getElementById("email").focus();
        return false;
    }

    if (contraseña !== repetirContraseña) {
        alert("Las contraseñas no coinciden.");
        document.getElementById("repetirContraseña").focus();
        return false;
    }

    const datos = document.getElementById("datos");
    datos.innerHTML = "Datos Registrados:<br><br>" +
        "Nombre: " + nombre + "<br>" +
        "Apellido: " + apellido + "<br>" +
        "Dirección: " + direccion + "<br>" +
        "País: " + pais + "<br>" +
        "Ciudad: " + ciudad + "<br>" +
        "Email: " + email + "<br>" +
        "Teléfono: " + telefono + "<br>" +
        "Usuario: " + usuario;

    return true;
}
