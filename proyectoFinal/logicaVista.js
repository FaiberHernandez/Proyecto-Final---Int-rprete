$(function () {
    $("#btnVerificar").click(function (e) {
        let codigo = $("#codigoDigitado").val().trim();
        console.log(codigo)
        if (codigo != "") {
            //pasa a ser validado
        } else {
            campoVacio()
        }
    });

    $("#btnEjecutar").click(function (e) {
        let codigo = $("#codigoDigitado").val().trim();
        console.log(codigo)
        if (codigo != "") {
            //pasa a ser ejecutar
        } else {
            campoVacio()
        }
    });
});

function deselect() {
    $('.form-select').attr("disabled", true);
    $('.form-select').attr("disabled", false);
}

//Alertas

function campoVacio() {
    Swal.fire({
        title: atencion,
        text: txAreaVacio,
        icon: 'warning'
    })

    speak(txAreaVacio)
}

function validarOk() {
    Swal.fire({
        title: atencion,
        text: txvalidarOk,
        icon: 'success'
    })

    speak(txvalidarOk)
}

function validarMal() {
    Swal.fire({
        title: atencion,
        text: txvalidarMal,
        icon: 'error'
    })

    speak(txvalidarMal)
}

function ejecutarOk() {
    Swal.fire({
        title: atencion,
        text: txEjecutar,
        icon: 'success'
    })

    speak(txEjecutar)
}