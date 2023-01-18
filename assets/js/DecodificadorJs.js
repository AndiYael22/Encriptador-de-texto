
function encriptar (){
    var texto = document.querySelector("#encriptar").value;
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector(".encriptado").value = textoCifrado;
    document.querySelector("#encriptar").value;
    if (textoCifrado === "") { 
        
        document.getElementById("boton3").style.display = "none";
        document.getElementById("imgaen").style.display = "";
        document.getElementById("segunda").style.display = "";
        document.getElementById("segunda1").style.display = "";
        document.getElementById("encriptado").style.display = "none";
}else if(textoCifrado!=""){  
    document.getElementById("segunda").style.display = "none";
    document.getElementById("segunda1").style.display = "none";
    document.getElementById("imgaen").style.display = "none";
    document.getElementById("encriptado").style.display = '';
    document.getElementById("boton3").style.display = "";
 } 
    }

function copiar(){
   var texto= document.getElementById("encriptado");
    texto.select();
    texto.setSelectionRange(0,99999);
    document.execCommand("copy");
}
var boton3=document.querySelector("#boton3");
boton3.onclick=copiar;
var boton1 = document.querySelector("#boton1"); 
boton1.onclick = encriptar;



function desencriptar (){
var texto = document.querySelector("#encriptar").value;
var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
document.querySelector(".encriptado").value = textoCifrado; document.querySelector("#encriptar").value;
if (textoCifrado === "") { 
        
    document.getElementById("boton3").style.display = "none";
    document.getElementById("imgaen").style.display = "";
    document.getElementById("segunda").style.display = "";
    document.getElementById("segunda1").style.display = "";
    document.getElementById("encriptado").style.display = "none";

}else if(textoCifrado!=""){  
document.getElementById("segunda").style.display = "none";
document.getElementById("segunda1").style.display = "none";
document.getElementById("imgaen").style.display = "none";
document.getElementById("encriptado").style.display = '';
document.getElementById("boton3").style.display = "";
} 
}

var boton2 = document.querySelector("#boton2"); 
boton2.onclick = desencriptar;