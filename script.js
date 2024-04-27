const textArea = document.querySelector(".text-area");
const msje = document.querySelector(".msje"); // Corregí el nombre de la clase aquí

function btnEncriptar() {
    const textoEncrip = encriptar(textArea.value); // Corregí el nombre de la variable aquí
    msje.value = textoEncrip;
    textArea.value = "";
    msje.style.backgroundImage = "none";
}

function encriptar(textoEncrip) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoEncrip = textoEncrip.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (textoEncrip.includes(matrizCodigo[i][0])) {
            textoEncrip = textoEncrip.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return textoEncrip; // Moví el return fuera del bucle for
}

function btnDesencriptar() {
    const txtDesencrip = desencriptar(textArea.value);
    msje.value = txtDesencrip;
    textArea.value = "";
}

function desencriptar(textoDesencrip) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoDesencrip = textoDesencrip.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (textoDesencrip.includes(matrizCodigo[i][0])) {
            textoDesencrip = textoDesencrip.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return textoDesencrip; // Moví el return fuera del bucle for
}
// Función para copiar el contenido del área de texto
function btnCopiar() {
    const textArea = document.querySelector('.msje'); // Asegúrate de seleccionar el área de texto correcta
    textArea.select();
    document.execCommand('copy');
}

// Asigna la función al botón con la clase "btn-copiar"
const btnCopiarElement = document.querySelector('.btn-copiar');
btnCopiarElement.addEventListener('click', btnCopiar);
