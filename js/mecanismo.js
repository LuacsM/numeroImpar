// Função que adiciona os números
function addNum(num) {
   document.calcform.visor.value = document.calcform.visor.value + num;
}

// Função que apaga tudo 
function Limpar() {
   document.calcform.visor.value = '';
   document.getElementById("paragrafo").innerHTML = "O Número é ____";
}

// Função que executa a operação
function resultado(){
   var form = document.getElementById('formulario');
   var visor = document.getElementById('visor');

    // alerta o valor do campo
    if (visor.value % 2 == 0) {
      document.getElementById("paragrafo").innerHTML = "O Número é Par";

    }else{
      document.getElementById("paragrafo").innerHTML = "O Número é Impar";
    }
}