document.addEventListener('DOMContentLoaded', function() {
    var botaoCarregar = document.getElementById('botaoCarregar');
    botaoCarregar.addEventListener('click', carregarImagem);
  });
  
  function carregarImagem() {
    var select = document.getElementById('imagemSelect');
    var opcaoSelecionada = select.options[select.selectedIndex];
    var imagem = document.createElement('img');
    imagem.src = opcaoSelecionada.value;
    imagem.alt = opcaoSelecionada.text;
    document.getElementById('resultado').appendChild(imagem);
  }
  