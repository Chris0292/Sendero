// El documento debe cargarse antes de ejecutar el codigo JS
$(document).ready(function () {
    // Cuando el usuario envia el formulario, ejecutar esta funcion
    $("#registroUsuario").submit(function (event) {
        // Prevenimoos que el formulario se envie automatico
        event.preventDefault();
        // Obtener valores ingresados en el formulario
        let nombre = $("#txtNombre").val();
        let apellido = $("#txtApellido").val();
        let correo = $("#txtEmail").val();
        let genero = $("#txtGenero").val();
        let fechaNacimiento = $("#dateFecNac").val();

        // Validar campo del nombre
        if (nombre == "" || nombre.length > 50 || nombre.length < 2) {
            alert("Por favor ingrese su nombre correctamente.");
            return;
        }
        // Validar campo del apellido
        if (apellido == "" || apellido.length > 80 || apellido.length < 2) {
            alert("Por favor ingrese su apellido correctamente.");
            return;
        }
        // Validar campo del correo
        if (correo == "" || correo.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) == null) {
            alert("Por favor ingrese su correo correctamente.");
            return;
        }
        if (genero == "") {
            alert("Por favor ingrese su genero correctamente.");
            return;
        }
        if (fechaNacimiento == "") {
            alert("Por favor ingrese su fecha de Nacimiento correctamente.");
            return;
        }
        // Confirmar si el usuario desea enviar los datos
        if (!confirm("¿Está seguro de enviar los datos?")) {
            return;
        }
        // Mostrar un mensaje de alerta confirmando el registro
        alert("El formulario ha sido enviado..");
    })
})