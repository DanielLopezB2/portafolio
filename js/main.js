const message = document.querySelector('#message');
message.style.display = 'none';


const copyBtn = document.querySelector('#copy');
copyBtn.style.display = 'none';



function encrypt() {

    let text = document.getElementById("text").value;

    let textEncrypted = text
                        .replace(/e/gi, "enter")
                        .replace(/i/gi, "imes")
                        .replace(/a/gi, "ai")
                        .replace(/o/gi, "ober")
                        .replace(/u/gi, "ufat");

    if (document.getElementById("text").value.length != 0) {
        message.style.display = 'block';
        document.getElementById("message").value = textEncrypted;
        
        document.getElementById("alert").textContent = ""
        document.getElementById("paragraph").textContent = ""
        document.getElementById("illustration").src = "/"
        copyBtn.style.display = 'block';

        
    } else {
        document.getElementById("illustration").src = "./imgs/Muñeco.png"
        alert("Debes ingresar un mensaje para encriptar");
    }
}

function decrypt() {

    let text = document.getElementById("text").value;

    let textEncrypted = text
                        .replace(/enter/gi, "e")
                        .replace(/imes/gi, "i")
                        .replace(/ai/gi, "a")
                        .replace(/ober/gi, "o")
                        .replace(/ufat/gi, "u");

    if (document.getElementById("text").value.length != 0) {
        message.style.display = 'block';
        document.getElementById("message").value = textEncrypted;
        document.getElementById("alert").textContent = ""
        document.getElementById("paragraph").textContent = ""
        document.getElementById("illustration").src = "/"
        copyBtn.style.display = 'block';

        
    } else {
        document.getElementById("illustration").src = "./imgs/Muñeco.png"
        alert("Debes ingresar un mensaje para desencriptar");
    }
    
}

function copy() {

    const textarea = document.querySelector('#message');
    const range = document.createRange();
    range.selectNode(textarea);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert("Mensaje copiado!")
}

