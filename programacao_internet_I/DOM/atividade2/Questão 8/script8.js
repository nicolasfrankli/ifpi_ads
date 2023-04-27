document.addEventListener('DOMContentLoaded', function () {
    var botaoAdicionar = document.getElementById('botaoAdicionar');
    var selectItens = document.getElementById('selectItens');
    botaoAdicionar.addEventListener('click', adicionarItem);
    
    function adicionarItem() {
      var texto = document.getElementById('texto').value;
      var opcoes = selectItens.getElementsByTagName('option');
      
      // Valida se o campo está vazio ou já foi adicionado anteriormente
      if (texto == '' || opcoes.length >= 5) {
        return;
      }
      
      // Valida se a opção já foi adicionada anteriormente
      for (var i = 0; i < opcoes.length; i++) {
        if (opcoes[i].text.toLowerCase() === texto.toLowerCase()) {
          return;
        }
      }
      
      // Cria uma nova opção e adiciona ao select
      var novaOpcao = document.createElement('option');
      novaOpcao.text = texto;
      selectItens.appendChild(novaOpcao);
    }
  });
  