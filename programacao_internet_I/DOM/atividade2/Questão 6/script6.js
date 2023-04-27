document.addEventListener('DOMContentLoaded', function () {
    var botaoConverter = document.getElementById('botaoConverter');
    botaoConverter.addEventListener('click', converterTexto);
  });
  
  function converterTexto() {
    var texto = document.getElementById('texto').value;
    var opcao = document.getElementById('opcoes').value;
    var resultado = document.getElementById('resultado');
    
    if (opcao === 'maiusculo') {
      resultado.innerHTML = texto.toUpperCase();
    } else if (opcao === 'minusculo') {
      resultado.innerHTML = texto.toLowerCase();
    }
  }