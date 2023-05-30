const textArea = document.querySelector(".digite");
const mensagem = document.querySelector("#mensagem");
var cond = true;


function criarBotao() {


    const button = document.createElement("button");

    button.setAttribute("id", "btn-copiar");

    button.textContent = "Copiar"

    const parentElement = document.querySelector("#paiDoBotao");
    parentElement.appendChild(button);

    button.addEventListener('click', copiar);
}

function btnEncriptar() {
    const textEncriptado = encriptar(textArea.value);
    mensagem.value = textEncriptado;
   // textArea.value = "";

    if(document.getElementById("digite").value == "")
    {
        alert("Campo vazio, por favor preencha");
        document.getElementById("digite").focus();
        //cond = false;        
    }
    else 
    {  
        const div = document.querySelector('.text-no');
        div.style.display = 'none';
       
        if (cond == true){
            criarBotao();
            cond = false;
        }
    }
    

   
}



function encriptar(stringEncriptada) {

    let matrizCodigo = [["e", "enter"] , ["i", "imes"] , ["a", "ai"] , ["o", "ober"] , ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase(); //deixa tudo em minusculo

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    
    return stringEncriptada;
}




 function btnDesencriptar() {
    const txtDesencriptado = desencriptar(textArea.value);
    mensagem.value = txtDesencriptado;
    textArea.value = "";
 }

 function desencriptar(stringDesencriptado) {
    
    let matrizCodigo = [["enter", "e"] , ["imes", "i"] , ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptado.includes(matrizCodigo[i][0])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        } 
   }
    return stringDesencriptado;
 }


 //Botão copiar

 document.getElementById('btn-copiar').addEventListener('click', copiar);

 function copiar() {
   const textResult = document.querySelector("#mensagem");
   navigator.clipboard.writeText(textResult.value);
   textResult.value = "";
    alert("Copiado");
 }