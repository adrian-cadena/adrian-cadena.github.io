function encriptar() {
    let mtext = text_encript.value;
    if(mtext == 0) {
        alert('Escribe un mensaje a encriptar')
    }
    else {
    document.getElementById("muñeco").style.display = "none";
    document.getElementById("caja_lat2").style.display = "none";
    document.getElementById("caja_lat1").style.display = "none";
    document.getElementById("tboton3").style.visibility = "visible";
    document.getElementById("codificado").style.display = "block";

    var texto = document.getElementById("text_encript").value.toLowerCase();

    var txtCifrado = texto.replace(/e/igm,"enter");
    var txtCifrado = txtCifrado.replace(/o/igm,"ober");
    var txtCifrado = txtCifrado.replace(/i/igm,"imes");
    var txtCifrado = txtCifrado.replace(/a/igm,"ai");
    var txtCifrado = txtCifrado.replace(/u/igm,"ufat");

    document.getElementById("codificado").innerHTML = txtCifrado;
    }
    text_encript.value ="";
}

function desencriptar() {
    let mtext = text_encript.value;
    if(mtext == 0) {
        alert('Escribe un mensaje a encriptar')
    }
    else {
    document.getElementById("muñeco").style.display = "none";
    document.getElementById("caja_lat2").style.display = "none";
    document.getElementById("caja_lat1").style.display = "none";
    document.getElementById("tboton3").style.visibility = "visible";
    document.getElementById("codificado").style.display = "block";

    var texto = document.getElementById("text_encript").value.toLowerCase();

    var txtCifrado = texto.replace(/enter/igm,"e");
    var txtCifrado = txtCifrado.replace(/ober/igm,"o");
    var txtCifrado = txtCifrado.replace(/imes/igm,"i");
    var txtCifrado = txtCifrado.replace(/ai/igm,"a");
    var txtCifrado = txtCifrado.replace(/ufat/igm,"u");

    document.getElementById("codificado").innerHTML = txtCifrado;
    }
    text_encript.value ="";
}

function copiar(){
    var div = document.getElementById("codificado");
    var contenido = div.textContent;
    var textarea = document.createElement("textarea");
    textarea.value = contenido;
    
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("Texto Copiado en porta papeles")
}