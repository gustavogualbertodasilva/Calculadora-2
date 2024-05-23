var n1 = 0;
var operacao = "";
var historico = [window.document.querySelector("#resum"),window.document.querySelector("#resdois"),window.document.querySelector("#restres"),window.document.querySelector("#resquatro"),window.document.querySelector("#rescinco")]
var ndh = -1


function um() {
    var input = document.getElementById("tela");
    input.value += "1";
    var elemento = document.getElementById('um');
    elemento.style.filter = 'brightness(150%)';

    setTimeout(function() {
        elemento.style.filter = 'brightness(100%)';
    }, 90);
}


function dois(){
    var input = window.document.getElementById("tela");
    input.value += "2";
    var elemento = document.getElementById('dois');
    elemento.style.filter = 'brightness(150%)';

    setTimeout(function() {
        elemento.style.filter = 'brightness(100%)';
    }, 90);
}

function tres(){
    var input = window.document.getElementById("tela");
    input.value += "3";
    var elemento = document.getElementById('tres');
    elemento.style.filter = 'brightness(150%)';

    setTimeout(function() {
        elemento.style.filter = 'brightness(100%)';
    }, 90);
}

function quatro(){
    var input = window.document.getElementById("tela");
    input.value += "4";
    var elemento = document.getElementById('quatro');
    elemento.style.filter = 'brightness(150%)';

    setTimeout(function() {
        elemento.style.filter = 'brightness(100%)';
    }, 90);
}

function cinco(){
    var input = window.document.getElementById("tela");
    input.value += "5";
    var elemento = document.getElementById('cinco');
    elemento.style.filter = 'brightness(150%)';

    setTimeout(function() {
        elemento.style.filter = 'brightness(100%)';
    }, 90);
}

function seis(){
    var input = window.document.getElementById("tela");
    input.value += "6";
    var elemento = document.getElementById('seis');
    elemento.style.filter = 'brightness(150%)';

    setTimeout(function() {
        elemento.style.filter = 'brightness(100%)';
    }, 90);
}

function sete(){
    var input = window.document.getElementById("tela");
    input.value += "7";
    var elemento = document.getElementById('sete');
    elemento.style.filter = 'brightness(150%)';

    setTimeout(function() {
        elemento.style.filter = 'brightness(100%)';
    }, 90);
}

function oito(){
    var input = window.document.getElementById("tela");
    input.value += "8";
    var elemento = document.getElementById('oito');
    elemento.style.filter = 'brightness(150%)';

    setTimeout(function() {
        elemento.style.filter = 'brightness(100%)';
    }, 90);
}

function nove(){
    var input = window.document.getElementById("tela");
    input.value += "9";
    var elemento = document.getElementById('nove');
    elemento.style.filter = 'brightness(150%)';

    setTimeout(function() {
        elemento.style.filter = 'brightness(100%)';
    }, 90);
}

function zero(){
    var input = window.document.getElementById("tela");
    input.value += "0";
    var elemento = document.getElementById('zero');
    elemento.style.filter = 'brightness(150%)';

    setTimeout(function() {
        elemento.style.filter = 'brightness(100%)';
    }, 90);
}

function mais(){
    var input = window.document.getElementById("tela").value;
    n1 = parseFloat(input) || 0;
    operacao = "mais";
    window.document.getElementById("tela").value = "";
    var elemento = document.getElementById('mais');
    elemento.style.filter = 'brightness(150%)';

    setTimeout(function() {
        elemento.style.filter = 'brightness(100%)';
    }, 90);
}

function menos(){
    var input = window.document.getElementById("tela").value;
    n1 = parseFloat(input) || 0;
    operacao = "menos";
    window.document.getElementById("tela").value = "";
    var elemento = document.getElementById('menos');
    elemento.style.filter = 'brightness(150%)';

    setTimeout(function() {
        elemento.style.filter = 'brightness(100%)';
    }, 90);
}

function x(){
    var input = window.document.getElementById("tela").value;
    n1 = parseFloat(input) || 0;
    operacao = "multiplica";
    window.document.getElementById("tela").value = "";
    var elemento = document.getElementById('x');
    elemento.style.filter = 'brightness(150%)';

    setTimeout(function() {
        elemento.style.filter = 'brightness(100%)';
    }, 90);
}
function limpar(){
    var input = window.document.getElementById("tela");
    input.value = "";
    var elemento = document.getElementById('clear');
    elemento.style.filter = 'brightness(150%)';

    setTimeout(function() {
        elemento.style.filter = 'brightness(100%)';
    }, 90);
    
}
function resultado(){
    var input = window.document.getElementById("tela").value;
    var inputvalue = parseFloat(input) || 0;
    var res;
    
    if(operacao === "mais") {
        res = n1 + inputvalue;
        historico[4].innerText = `${historico[3].innerText}`
        historico[3].innerText = `${historico[2].innerText}`
        historico[2].innerText = `${historico[1].innerText}`
        historico[1].innerText = `${historico[0].innerText}`
        historico[0].innerText = `${n1} + ${inputvalue} = ${res}`
    } else if (operacao === "menos") {
        res = n1 - inputvalue;
        historico[4].innerText = `${historico[3].innerText}`
        historico[3].innerText = `${historico[2].innerText}`
        historico[2].innerText = `${historico[1].innerText}`
        historico[1].innerText = `${historico[0].innerText}`
        historico[0].innerText = `${n1} - ${inputvalue} = ${res}`
        

    } else if (operacao === "multiplica") {
        res = n1 * inputvalue;
        historico[4].innerText = `${historico[3].innerText}`
        historico[3].innerText = `${historico[2].innerText}`
        historico[2].innerText = `${historico[1].innerText}`
        historico[1].innerText = `${historico[0].innerText}`
        historico[0].innerText = `${n1} X ${inputvalue} = ${res}`
    }
    window.document.getElementById("tela").value = res;
    var elemento = document.getElementById('resultado');
    elemento.style.filter = 'brightness(150%)';

    setTimeout(function() {
        elemento.style.filter = 'brightness(100%)';
    }, 90);
}
