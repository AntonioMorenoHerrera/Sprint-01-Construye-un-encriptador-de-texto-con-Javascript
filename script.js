// Corregir "documen" a "document"
var boton_encriptar = document.querySelector(".boton_encriptador");
var boton_desencriptar = document.querySelector(".boton_desencriptador");
var munieco = document.querySelector(".contenedor_munieco");
var contenedor = document.querySelector(".contenedor_parrafo");
var resultado = document.querySelector(".texto_resultado");

boton_encriptar.onclick = encriptar;
boton_desencriptar.onclick = desencriptar;

function encriptar() {
    ocultar_adelante();
    var caja_texto = recuperarTexto();
    resultado.textContent = encriptar_texto(caja_texto);
}

function desencriptar() {
    ocultar_adelante();
    var caja_texto = recuperarTexto();
    resultado.textContent = desencriptarTexto(caja_texto);
}

// Corregir el nombre de la función "recuperarTexto"
function recuperarTexto() {
    var caja_texto = document.querySelector(".caja_texto")
    return caja_texto.value
}

function ocultar_adelante() {
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptar_texto(mensaje) {
    var texto = mensaje;
    var texto_final = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            texto_final += "ai";
        } else if (texto[i] == "e") {
            texto_final += "enter";
        } else if (texto[i] == "i") {
            texto_final += "imes";
        } else if (texto[i] == "o") {
            texto_final += "ober";
        } else if (texto[i] == "u") {
            texto_final += "ufat";
        } else {
            texto_final += texto[i];
        }
    }
    return texto_final;
}

// Corregir el nombre de la función "desencriptarTexto"
function desencriptarTexto(mensaje) {
    var texto = mensaje;
    var texto_final = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto.substr(i, 2) === "ai") {
            texto_final += "a";
            i += 1;
        } else if (texto.substr(i, 5) === "enter") {
            texto_final += "e";
            i += 4;
        } else if (texto.substr(i, 4) === "imes") {
            texto_final += "i";
            i += 3;
        } else if (texto.substr(i, 4) === "ober") {
            texto_final += "o";
            i += 3;
        } else if (texto.substr(i, 4) === "ufat") {
            texto_final += "u";
            i += 3;
        } else {
            texto_final += texto[i];
        }
    }
    return texto_final;
}

const btnCopiar = document.querySelector(".boton_copiar");
btnCopiar.addEventListener("click", () => {
    const contenido = document.querySelector(".texto_resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("Texto copiado al portapapeles.");
});