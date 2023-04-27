document.addEventListener('DOMContentLoaded', function () {
    var botaoCalcular = document.getElementById('botaoCalcular');
    botaoCalcular.addEventListener('click', calcularOperacao);
  });
  
  function calcularOperacao() {
    var numero1 = document.getElementById('numero1').value;
    var numero2 = document.getElementById('numero2').value;
    var divResultado = document.getElementById('resultado');
    
    if (isNaN(numero1) || isNaN(numero2)) {
      divResultado.innerHTML = '<p class="error">Por favor, digite apenas números nos campos.</p>';
    } else {
      var resultado = parseInt(numero1) + parseInt(numero2);
      divResultado.innerHTML = '<p>O resultado da operação é: ' + resultado + '</p>';
    }
  }
  