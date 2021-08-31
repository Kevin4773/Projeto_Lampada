// Serve como um verificador para os códigos de JavaScript, verificando os erros mais comuns, como variável indefinida, por exemplo:

/* 

    nota = 10 * Forma de declaração não aceita

    alert (nota) * ERRO

*/

"use strict"

const lampada = document.getElementById('lampada')

function lampaInteira() {
    return lampada.src.includes("ligada")

    /* 
    
        includes pega uma palavra do elemento para de uma vez podemos manipular eles

    */
}

function ligarLampada() {
    
    // Entramos com uma estrutura de decisão para validar se a lâmpada está inteira ou quebrada
    if (lampaInteira()) {
        lampada.src = "assets/img/ligada.jpg"
    }
}

function DesligarLampada() {

    if (lampaInteira()) {
        lampada.src = "assets/img/desligada.jpg"
    }
}

function QuebarLampada() {
    lampada.src = "assets/img/quebrada.jpg"
}



// Eventos

document.getElementById('ligar').addEventListener("click", ligarLampada)
document.getElementById('desligar').addEventListener("click", DesligarLampada)
document.getElementById('lampada').addEventListener("dblclick", QuebarLampada)

// Usamos os proprios eventos para adicionar um evento de ao passar o mouse, e um para ao sair o mouse, tendo em mente que desfrutamos de uma função pronta

lampada.addEventListener("mouseover", ligarLampada)
lampada.addEventListener("mouseout", DesligarLampada)