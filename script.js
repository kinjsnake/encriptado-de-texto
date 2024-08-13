function ajustarAltura(elemento) {
    elemento.style.height = 'auto'; // Resetea la altura para recalcularla
    elemento.style.height = (elemento.scrollHeight) + 'px'; // Ajusta la altura al contenido
}

function encriptar() {
    let texto = document.getElementById('inputText').value.toLowerCase(); // Convertir a minúsculas
    let textoEncriptado = texto.replace(/e/g, 'enter')
                               .replace(/i/g, 'imes')
                               .replace(/a/g, 'ai')
                               .replace(/o/g, 'ober')
                               .replace(/u/g, 'ufat');
    
    let outputText = document.getElementById('outputText');
    outputText.value = textoEncriptado;

    ajustarAltura(outputText); // Ajustar altura del área de salida

    document.getElementById('inputText').value = ''; // Limpiar el área de entrada
    mostrarResultado(textoEncriptado);
}

function desencriptar() {
    let texto = document.getElementById('inputText').value.toLowerCase(); // Convertir a minúsculas
    let textoDesencriptado = texto.replace(/enter/g, 'e')
                                  .replace(/imes/g, 'i')
                                  .replace(/ai/g, 'a')
                                  .replace(/ober/g, 'o')
                                  .replace(/ufat/g, 'u');
    
    let outputText = document.getElementById('outputText');
    outputText.value = textoDesencriptado;

    ajustarAltura(outputText); // Ajustar altura del área de salida

    document.getElementById('inputText').value = ''; // Limpiar el área de entrada
    mostrarResultado(textoDesencriptado);
}

function copiarTexto() {
    let textoCopiado = document.getElementById("outputText");
    textoCopiado.select();
    document.execCommand("copy");

    // Limpiar el área de salida después de copiar
    textoCopiado.value = '';
    ajustarAltura(textoCopiado); // Ajustar la altura después de limpiar

    // Limpiar el área de entrada si lo deseas
    let inputText = document.getElementById('inputText');
    inputText.value = '';
    ajustarAltura(inputText); // Ajustar la altura después de limpiar

    // Mostrar mensaje "Ningún mensaje fue encontrado" si el texto copiado es vacío
    mostrarResultado('');
}

function mostrarResultado(texto) {
    let botonCopiar = document.getElementById('botonCopiar');
    let textoResultado = document.querySelector('.resultado .texto-no-encontrado');
    let mensajeNoEncontrado = document.querySelector('.resultado .mensaje-no-encontrado');
    let munecoImagen = document.querySelector('.resultado .muñeco');

    if (texto.trim() === '') { // Verifica si el texto está vacío o solo tiene espacios en blanco
        botonCopiar.classList.add('oculto');
        textoResultado.classList.remove('oculto');
        mensajeNoEncontrado.classList.remove('oculto');
        munecoImagen.classList.remove('oculto'); // Asegura que la imagen se muestre
    } else {
        botonCopiar.classList.remove('oculto');
        textoResultado.classList.add('oculto');
        mensajeNoEncontrado.classList.add('oculto');
        munecoImagen.classList.add('oculto'); // Oculta la imagen cuando hay texto
    }
}
