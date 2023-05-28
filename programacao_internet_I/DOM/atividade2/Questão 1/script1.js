document.addEventListener('DOMContentLoaded', function () {
    var botaoExibir = document.getElementById('botaoExibir');
    botaoExibir.addEventListener('click', exibirConteudo);
  });
  
  function exibirConteudo() {
    var conteudo = document.getElementById('caixaDeTexto').value;
    var divConteudo = document.getElementById('conteudo');
    
    if (conteudo.trim() === '') {
      divConteudo.innerHTML = '<p class="error">Por favor, preencha o campo corretamente.</p>';
    } else {
      divConteudo.innerHTML = conteudo;
    }
  }
  