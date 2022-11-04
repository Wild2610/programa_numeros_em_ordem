/* 
Descrição: aplicação em que o usuário possa adicionar números a um vetor.A aplicação deve
exibir a lista de números a cada inclusão. Ao clicar no botão Verificar Ordem, a aplicação
deve analisar o conteúdo do vetor e informar se os números estão ou não em ordem crescente.

Autor: Ildefonso Roldi Neto

Data: 04/11/2022

Versão 1.0
*/





var inNumero = document.getElementById("inNumero");
var btAdd = document.getElementById("btAdd");
var btVerify = document.getElementById("btVerify");
var outSaida = document.getElementById("outSaida");
var msgCrescOuDec = document.getElementById("msgCrescOuDec");

vetNum = [];
var vetContent;
function AddMostra() {
    if (inNumero.value == "") {
        alert("Informe um número.")

    } else {
        var showVetContent = addConteudoVetor();

        outSaida.textContent = "Números: ";
        outSaida.textContent += showVetContent;
        msgCrescOuDec.textContent = "";
    }
}

btAdd.addEventListener("click", AddMostra);

function addConteudoVetor() {
    vetContent = "";
    var numero = Number(inNumero.value);
    vetNum.push(numero);

    vetContent = vetNum.toString();

    return vetContent;
}

function verifica() {
    if (vetNum.length <= 1) {
        alert("Informe pelo menos dois valores");
    } else {
        var qtdElementosIguais = 0;
        for (var indConst = 0; indConst <= vetNum.length; indConst++) {
            if (vetNum[indConst] == vetNum[0]) {
                qtdElementosIguais++;
            }
        }
        if (qtdElementosIguais == vetNum.length) {
            msgCrescOuDec.textContent = "Todos os números são iguais."
        } else {
            for (var ind = 0; ind <= vetNum.length; ind++) {
                for (var cont = 0; cont < ind; cont++) {
                    if (vetNum[cont] > vetNum[ind]) {
                        msgCrescOuDec.textContent = "Números não estão em ordem crescente.";
                        console.log(vetNum[cont] + "[" + cont + "]" + ">" + vetNum[ind] + "[" + ind + "]")
                    }
                    if (vetNum[cont] < vetNum[ind]) {
                        msgCrescOuDec.textContent = "Números estão em ordem crescente.";
                    }
                    //fiz dois if's porquê não estava dando certo com o else.
                }
            }
        }
    }
}







btVerify.addEventListener("click", verifica);
